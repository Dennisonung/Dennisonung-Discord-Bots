module.exports = {
    name: 'help',
    description: "This command shows the command",
    execute(message, args, Discord, prefix) {
        const newEmbed = new Discord.MessageEmbed()
            .setColor('#009849')
            .setTitle('Moderation Commands')
            .setDescription('Shows the list of Moderation commands')
            .addFields(
                { name: prefix + "ban", value: "Ban a member" },
                { name: prefix + "kick", value: "Kick a member" },
                { name: prefix + "mute", value: `Mute a member` },
                { name: prefix + "unmute", value: `Unmute a member with a muted role.` },
                { name: prefix + "purge", value: `Purge Messages.` },
                { name: prefix + "bansave", value: `Bans member, save messages.` },
                
                //{name: prefix + "PLACEHOLDER", value: `This is a PlaceHolder Embed field`},
            )
            .setFooter('Prefix ' + prefix + ` || Bot created by DennisonungDev`);

        message.channel.send(newEmbed);
    }
}