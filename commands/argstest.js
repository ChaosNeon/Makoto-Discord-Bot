module.exports = {
    name: 'argstest',
    description: 'Prueba de argumentos',
    execute(message, args) {
        if(!args.length) {
            return message.channel.send(`No pusiste argumentos pedazo de pelotudo, ${message.author}`);
        }

        else if(args[0] === 'el') {
            return message.channel.send('Pepe');
        }


    }
}