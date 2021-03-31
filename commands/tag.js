const Tags = require('../index.js');

module.exports.run = async(message, args) => {
  
        const tagName = args[0];

        const tag = await Tags.findOne({ where: { name: tagName } });
        if(tag) {
            tag.increment('usage_count');
            return message.channel.send(tag.get('description'));
        }

        return message.reply(`No se pudo encontrar la etiqueta: ${tagName}`);
    }
