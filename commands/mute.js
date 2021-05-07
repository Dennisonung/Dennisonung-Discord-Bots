const ms = require('ms');
module.exports = {
    name: 'Mute',
    description: "This command Mutes a member!",
    execute(message, args, Discord) {
        const target = message.mentions.users.first();
        if (target) {
            let mainRole = message.guild.roles.cache.find(role => role.name === 'member');
            let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted');

            if(!muteRole) {
                message.guild.roles.create({
                    data: {
                        name: 'Muted',
                        color: 'DARK_GREY',
                    },
                    reason: 'Created Muted Role.',
                })
            }

            let memberTarget = message.guild.members.cache.get(target.id);

            const mutedyourself = new Discord.MessageEmbed()
                .setColor('#ff0000')
                .setDescription(`You can't mute yourself`);
            const ownerembed = new Discord.MessageEmbed()
                .setColor('#ff0000')
                .setDescription(`I cannot mute the owner of the server.`);
            const adminembed = new Discord.MessageEmbed()
                .setColor('#ff0000')
                .setDescription(`I cannot mute an admin.`);
            const KickedBotEmbed = new Discord.MessageEmbed()
                .setColor('#ff0000')
                .setDescription(`You can't mute bhop bot.`);
            if (memberTarget.id === message.guild.owner.id) return message.channel.send(ownerembed);
            if (memberTarget.id === message.member.id) return message.channel.send(mutedyourself);
            if (memberTarget.permissions.has('ADMINISTRATOR')) return message.channel.send(adminembed);
            if (memberTarget.id === '790479858455150622' ) return message.channel.send(KickedBotEmbed); 
            const mutedembed = new Discord.MessageEmbed()
                .setColor('#6A0DAD')
                .setDescription(`<@${memberTarget.user.id}> has been muted.`);
            const failedmutedembed = new Discord.MessageEmbed()
                .setColor('#6A0DAD')
                .setDescription(`Unable to mute member`);
            


            if (!args[1]) {
                memberTarget.roles.remove(mainRole.id);
                memberTarget.roles.add(muteRole.id);
                message.channel.send(mutedembed);
                return
            }
            memberTarget.roles.remove(mainRole.id);
            memberTarget.roles.add(muteRole.id);
            message.channel.send(mutedembed);

            setTimeout(function () {
                memberTarget.roles.remove(muteRole.id);
                memberTarget.roles.add(mainRole.id);
            }, ms(args[1]));



        } else {
            const efailedmutedembed = new Discord.MessageEmbed()
                .setColor('#ff0000')
                .setDescription(`Please specify a member to mute`);
            message.channel.send(efailedmutedembed);
        }
    }
}