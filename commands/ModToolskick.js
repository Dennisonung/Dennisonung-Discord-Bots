module.exports = {
    name: 'mkick',
    description: "This command kicks a member!",
    execute(message, args, Discord) {
        const target = message.mentions.users.first();
        if (target) {

            const memberTarget = message.guild.members.cache.get(target.id);

            const KickedBotEmbed = new Discord.MessageEmbed()
                .setColor('#ff0000')
                .setDescription(`You can't kick bhop bot.`);
            if (memberTarget.id === '790479858455150622') return message.channel.send(KickedBotEmbed)

            const ownerkick = new Discord.MessageEmbed()
                .setColor('#ff0000')
                .setDescription(`I cannot kick the owner of the server.`);
            if (memberTarget.id === message.guild.owner.id) return message.channel.send(ownerkick)

            const MissingPermissionsEmbed = new Discord.MessageEmbed()
                .setColor('#ff0000')
                .setDescription(`I cannot kick someone that has a higher role then me.`);
            if (message.guild.me.roles.highest.comparePositionTo(message.member.roles.highest) < 0) return message.channel.send(MissingPermissionsEmbed);

            const sadkick = new Discord.MessageEmbed()
                .setColor('#ff0000')
                .setDescription(`You cannot kick yourself.`);
            if (memberTarget.id === message.member.id) return message.channel.send(sadkick)

            memberTarget.kick();

            const KickedEmbed = new Discord.MessageEmbed()
                .setColor('#6A0DAD')
                .setDescription(`Kicked ${memberTarget.user.tag}`);
            message.channel.send(KickedEmbed);

        } else {

            const NoMemEmbed = new Discord.MessageEmbed()
                .setColor('#ff0000')
                .setDescription(`Please specify a member you want to kick.`);
            message.channel.send(NoMemEmbed);
        }
    }
}