module.exports = {
    name: 'ChannelUpdate',
    description: "This command does e",
    async execute(Discord, client, modlogs, oldChannel, newChannel, prefix) {
        
        const Embed = await new Discord.MessageEmbed()
        .setColor('#ff0000')
        .setTitle(`Channel updated`)
        .addField( `Channels Updated`, `${newChannel}`, true)
        .setFooter(`Prefix ` + prefix + ` || This bot was created by https://ddc-dev.com/`);

        if(oldChannel.name !== newChannel.name) {
            Embed.addField(`Name Changed`, `Old Name: ${oldChannel.name}\n New Name: ${newChannel.name}`)
        }
        client.channels.cache.get(modlogs).send(Embed)

       
    }
}