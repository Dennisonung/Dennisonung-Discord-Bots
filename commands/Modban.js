module.exports = {
    name: 'Ban',
    description: "Gamer",
    execute(message, args, Discord, prefix) {
        const target = message.mentions.users.first();
        try {
            const susid = message.content.split(' ')[1];

            if (!isNaN(susid)) {
                const susmember = message.guild.members.cache.get(susid)
                susmember.ban()
            }

            if (target) {
            const memberTarget = message.guild.members.cache.get(target.id);
                const KickedBotEmbed = new Discord.MessageEmbed()
                .setColor('#ff0000')
                .setDescription(`You can't ban the bot.`);
            if (memberTarget.id === '790479858455150622') return message.channel.send(KickedBotEmbed)
            const sadkick = new Discord.MessageEmbed()
                .setColor('#ff0000')
                .setDescription(`You cannot ban yourself.`);
            if (memberTarget.id === message.member.id) return message.channel.send(sadkick)

            const ownerkick = new Discord.MessageEmbed()
                .setColor('#ff0000')
                .setDescription(`I cannot ban the owner of the server.`);
            if (memberTarget.id === message.guild.owner.id) return message.channel.send(ownerkick)

            const MissingPermissionsEmbed = new Discord.MessageEmbed()
                .setColor('#ff0000')
                .setDescription(`I cannot ban someone that has a higher role then me.`);
            //if (message.guild.me.roles.highest.comparePositionTo(message.member.roles.highest) < 0) return message.channel.send(MissingPermissionsEmbed);



            

                
                memberTarget.ban()  

                const banEmbed = new Discord.MessageEmbed()
                    .setColor('6A0DAD')
                    .setTitle('Member banned')
                    .setDescription(`Member ${memberTarget.user.username} is now banned`)
                message.channel.send(banEmbed);
            } else {

                const nomemberEmbed = new Discord.MessageEmbed()
                    .setColor('FF0000')
                    .setTitle('Please Specify the member you want to ban.')

                message.channel.send(nomemberEmbed)
            }
        } catch (err) {
            const errorEmbed = new Discord.MessageEmbed()
                .setColor('#ff0000')
                .setTitle(`An error has occurred!`)
                .setDescription(`The error(s) are shown below.`)
                .addFields(
                    { name: "Error", value: err },
                    { name: "Error Help:", value: `If you believe that this is a code error and not a guild(server) side problem, please contact <@397268534033514497>` }
                )
                .setFooter(`Prefix ` + prefix + ` || Email: admin@dev-ddc.com`);


            message.channel.send(errorEmbed)

        }
    }
}