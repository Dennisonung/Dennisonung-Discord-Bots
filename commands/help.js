module.exports = {
    name: 'help',
    description: "This command shows the command",
    execute(message, args, Discord, prefix) {
        const newEmbed = new Discord.MessageEmbed()
            .setColor('#009849')
            .setTitle('Commands')
            .setDescription('Shows the list of commands')
            .addFields(
                {name: prefix + "help", value: `Shows the list of commands.`},
                {name: prefix + "help-mod-tools", value: `Shows the list of mod commands.`}
                //{name: prefix + "PLACEHOLDER", value: `This is a PlaceHolder Embed field`},
            )
            .setFooter('Prefix ' + prefix + ` || Bot created by https://ddc-dev.com/`);

        message.channel.send(newEmbed);
    }
}