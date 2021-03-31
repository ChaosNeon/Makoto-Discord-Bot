const Tags = require('../index.js');

module.exports = async function (message, args) {

        const tagName = args[0];
        const tagDescription = args[1];

        try {
            const tag = await Tags.create({
                name: tagName,
                description: tagDescription,
                username: message.author.username,
            });

            return message.reply(`Etiqueta ${tag.name} añadida`);
        }
        catch(e) {
            if(e.name === 'SequelizeUniqueConstraintError') {
                return message.reply('Esa etiqueta ya existe');
            }
            return message.reply('Algo sucedio al añadir una etiqueta');
        }
    }

