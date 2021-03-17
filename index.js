const Discord = require('discord.js');  //Require the discord.js module
const client = new Discord.Client();  //Create a new Discord client
const { prefix, token } = require('./config.json');

//
client.once('ready', () => {
    console.log('Lista!');
});

client.on('message', message => {
    if(message.content === `${prefix}ping`) {
        message.channel.send('Dundudududududu el pepe.')
    }
});



client.login(config.token);