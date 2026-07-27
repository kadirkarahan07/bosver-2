module.exports = {

    name: "avatar",

    async execute(client, message) {

        message.reply(message.author.displayAvatarURL());

    }

};