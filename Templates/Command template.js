module.exports = {
    name: '', //THE NAME OF THE COMMAND (IMPORATNT)
    description: "This command shows the command", //THE DESCRIPTION OF THE COMMAND (IMPORATNT)
    execute(message, args, Discord, prefix) {
        const newEmbed = new Discord.MessageEmbed() //Creating a Embed Command.
            .setColor('#009849') //Setting the color of the Embed.
            .setTitle('Moderation Commands') //Setting the Title of the Embed.
            .setDescription('Shows the list of Moderation commands') //Setting the Description field of the Embed.
            .addFields( //Setting the Fields of the Embed. 
                { name: prefix + "ban", value: "Ban a member" }, 
                { name: prefix + "kick", value: "Kick a member" },
                { name: prefix + "mute", value: `Mute a member` },
                { name: prefix + "unmute", value: `Unmute a member with a muted role.` },
                { name: prefix + "purge", value: `Purge Messages.` },
                { name: prefix + "bansave", value: `Bans member, save messages.` },
                
                //{name: prefix + "PLACEHOLDER", value: `This is a PlaceHolder Embed field`},
            )
            .setFooter('Prefix ' + prefix + ` || Bot created by DennisonungDev`); //Setting the Footer of the Embed.

        message.channel.send(newEmbed);
    }
}