const Tags = require('../index.js');

module.exports.run = async(message, args) => {

        const tagList = await Tags.findAll({ attributes: ['name'] });
        const tagString = tagList.map(t => t.name).join(', ') || 'No tags set.';
        return message.channel.send(`List of tags: ${tagString}`);
    }

