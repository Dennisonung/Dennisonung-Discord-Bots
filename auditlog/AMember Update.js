module.exports = {
    name: 'MemberUpdate',
    description: "This command does e",
    async execute(Discord, client, modlogs, oldMember, newMember, prefix) {

        const Embed = await new Discord.MessageEmbed()
            .setColor('#ff0000')
            .setTitle(`Member updated`)
            .setDescription(`User Updated\n <@${newMember.id}>`)
            .setFooter(`Prefix ` + prefix + ` || This bot was created by https://ddc-dev.com/`);
        
        //if(oldMember.presence !== newMember.presence) return;
        //if(oldMember.voice !== newMember.voice) return;
        //if(oldMember.bannable !== newMember.bannable) return;
        //if(oldMember.deleted !== newMember.deleted) return;
        //if(oldMember.displayHexColor !== newMember.displayHexColor) return;
        //if(oldMember.displayColor !== newMember.displayColor) return;
        //if(oldMember.guild !== newMember.guild) return;
        //if(oldMember.joinedAt !== newMember.joinedAt) return;
        //if(oldMember.kickable !== newMember.kickable) return;
        //if(oldMember.lastMessage !== newMember.lastMessage) return;
        //if(oldMember.lastMessageChannelID !== newMember.lastMessageChannelID) return;
        //if(oldMember.lastMessageID !== newMember.lastMessageID) return;
        //if(oldMember.manageable !== newMember.manageable) return;
        //if(oldMember.partial !== newMember.partial) return;
        //if(oldMember.permissions !== newMember.permissions) return;
        //if(oldMember.premiumSince !== newMember.premiumSince) return;
        //if(oldMember.premiumSinceTimestamp !== newMember.premiumSinceTimestamp) return;
        //if(oldMember.joinedTimestamp !== newMember.joinedTimestamp) return;
        //if(oldMember.premiumSinceTimestamp !== newMember.premiumSinceTimestamp) return;
        

        

        if (oldMember.user.username !== newMember.user.username) {
            Embed.addField(`Username Changed`, `Old Username: ${oldMember.user.username}\n New Username: ${newMember.user.username}`)
        }
        if (oldMember.user.discriminator !== newMember.user.discriminator) {
            Embed.addField(`Discriminator Changed`, `Old Discriminator: ${oldMember.user.discriminator}\n New Discriminator: ${newMember.user.discriminator}`)
        }
        if (oldMember.user.displayAvatarURL() !== newMember.user.displayAvatarURL()) {
            Embed.setThumbnail(`${newMember.user.displayAvatarURL()}`)
            Embed.addField(`Avatar Changed`, `[Before](${oldMember.user.displayAvatarURL()}) -> [After](${newMember.user.displayAvatarURL()})`)
        }
        if (newMember.displayName.toLowerCase().includes('nigga', 'faggot', 'fag', 'nigger', 'niger', 'niga', 'funni')) return;
        
        if (oldMember.displayName !== newMember.displayName) {
            Embed.addField(`Nickname Changed`, `Before: ${oldMember.displayName}\n After: ${newMember.displayName}`)
        }

        if (oldMember.roles.cache.size > newMember.roles.cache.size) {
            oldMember.roles.cache.forEach(role => {
                if (!newMember.roles.cache.has(role.id)) {
                    Embed.addField("Role Removed", role);
                }
            });
        }
        if (oldMember.roles.cache.size < newMember.roles.cache.size) {
            newMember.roles.cache.forEach(role => {
                if (!oldMember.roles.cache.has(role.id)) {
                    Embed.addField("Role Added", role);
                }
            });
        }
        if(Embed.fields.length == '0') return;
 
        client.channels.cache.get(modlogs).send(Embed)


    }
}