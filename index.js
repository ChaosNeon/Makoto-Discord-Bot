const fs = require('fs');
const Discord = require('discord.js');  //Require the discord.js module
const Sequelize = require('sequelize');
const client = new Discord.Client();  //Create a new Discord client
const { prefix, token } = require('./config.json');

const sequelize = new Sequelize('database', 'user', 'password', {
    host: 'localhost',
    dialect: 'sqlite',
    logging: false,
    storage: 'database.sqlite'
});

const Tags = sequelize.define('tags', {
    name: {
        type: Sequelize.STRING,
        unique: true,
    },
    description: Sequelize.TEXT,
    username: Sequelize.STRING,
    usage_count: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        allownull: false,
    },
});

client.commands = new Discord.Collection();
//Creates a constant for all command files ending in .js
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));  

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}


client.once('ready', () => {
    console.log('Lista!');
    Tags.sync();
});

client.on('message', async message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const commandName = args.shift().toLowerCase();

    if(!client.commands.has(commandName)) return;

    const command = client.commands.get(commandName);

    try {
        command.execute(message, args);
    } catch(error) {
        console.error(error);
        message.reply("Algo sucedio al momento de ejecutar ese comando.");
    }
});

client.login(token);
module.exports = { Tags }