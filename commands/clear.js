module.exports = {
    name: 'Clear',
    description: "This command clears messages",
    async execute(message, args) {
        try {
            if (!args[0]) return message.reply("Please specify a number to clear messages.");
            if (isNaN(args[0])) return message.reply("Please specify a number to clear messages.");

            if (args[0] > 100) return message.reply("Please specify a number under 100.");
            if (args[0] < 1) return message.reply("Please specify a number above 0.");

            //await message.channel.messages.fetch({ limit: args[0] }).then(messages => {
                message.channel.bulkDelete(args[0] + 1);
            //});

        } catch (err) {
            const errorEmbed = new Discord.MessageEmbed()
                .setColor('#009849')
                .setTitle(`An error has occurred!`)
                .setDescription(`The error(s) are shown below.`)
                .addFields(
                    { name: "Error", value: err },
                    { name: "Error Help:", value: `If you believe that this is a code error and not a guild(server) side problem, please contact <@397268534033514497>` }
                )
                .setFooter(`Prefix ` + prefix + ` || Error 05 ||Email: dennis@ddc-dev.com`);

            message.channel.send(errorEmbed)
        }
    }
}    