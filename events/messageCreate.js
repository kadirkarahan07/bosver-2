const { Events } = require("discord.js");

const prefix = "!";

module.exports = {
    name: Events.MessageCreate,

    async execute(client, message) {

        if (message.author.bot) return;

        if (!message.content.startsWith(prefix)) return;

        const args = message.content.slice(prefix.length).trim().split(/ +/);

        const commandName = args.shift().toLowerCase();

        const command = client.commands.get(commandName);

        if (!command) return;

        command.execute(client, message, args);

    }
};