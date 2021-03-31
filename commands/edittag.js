const Tags = require('../index.js');

module.exports.run = async(message, args) => {

        const Tagname = args[0];
        const desc = args[1];

        const affectedRows = await Tags.update({ description: desc }, { where: { name: Tagname }});
        if (affectedRows > 0) {
            return message.reply(`La etiqueta ${tagName} fue editada`);
        } 
        return message.reply(`No se pudo encontrar la etiqueta ${tagName}`);
}
