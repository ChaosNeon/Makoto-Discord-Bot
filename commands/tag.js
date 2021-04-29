const { Tags } = require('../index.js');

module.exports = {
    name: 'tag',
    description: 'Checks for a tag',
    async execute (message, args) {

        const tagName = args[0];

        const tag = await Tags.findOne({ where: { name: tagName } });
        if(tag) {
            tag.increment('usage_count');

            let usrName = tag.get('username');
            let tagNm = tag.get('name');
            let tagDesc = tag.get('description');
            let tagUsage = tag.get('usage_count');

            await message.channel.send(`Nombre de la etiqueta: ${tagNm}`);
            await message.channel.send(`Creador: ${usrName}`);
            await message.channel.send(`Contenido: ${tagDesc}`);
            return message.channel.send(`Uso: ${tagUsage}`);
        }

        return message.reply(`No se pudo encontrar la etiqueta: ${tagName}`);
    }
      
}
