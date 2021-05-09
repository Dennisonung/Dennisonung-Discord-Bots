//THE EMBED CODE

// const newEmbed = new Discord.MessageEmbed() //Creating a Embed Command.
//     .setColor('#009849') //Setting the color of the Embed.
//     .setTitle('Moderation Commands') //Setting the Title of the Embed.
//     .setDescription('Shows the list of Moderation commands') //Setting the Description field of the Embed.
//     .addFields( //Setting the Fields of the Embed. 
//         { name: prefix + "ban", value: "Ban a member" },
//         { name: prefix + "kick", value: "Kick a member" },
//         { name: prefix + "mute", value: `Mute a member` },
//         { name: prefix + "unmute", value: `Unmute a member with a muted role.` },
//         { name: prefix + "purge", value: `Purge Messages.` },
//         { name: prefix + "bansave", value: `Bans member, save messages.` },

//         //{name: prefix + "PLACEHOLDER", value: `This is a PlaceHolder Embed field`},
//     )



//THE NEW COMMAND CODE

//FOR NEW COMMAND LISTENERS.

// client.on('message', async (message) => {
//     //Doesn't detect messages that don't start with the prefix or other bots.
//     if (!message.content.startsWith(prefix) || message.author.bot) return;
//     //ARGS SYSTEM
//     const args = message.content.slice(prefix.length).split(/ +/);
//     //COMMAND HANDLER
//     const command = args.shift().toLowerCase();
//     //FIRST COMMAND = PING 
//     if (command == 'ping') {
//         if(message.member.id === '397268534033514497') {
//             const FetchPing = new Discord.MessageEmbed()
//                 .setColor('#ff0000')
//                 .setTitle(`🏓 Fetching Ping...!`)
//                 .setFooter(`Prefix ` + prefix + ` || This bot was created by https://ddc-dev.com/`);
//             var mess = await message.channel.send(FetchPing)
//             const DeletedEmbed = new Discord.MessageEmbed()
//                 .setColor('#ff0000')
//                 .setTitle(`🏓 Ping Pong!`)
//                 .setDescription(`${mess.createdTimestamp - message.createdTimestamp}ms.`)
//                 .setFooter(`Prefix ` + prefix + ` || This bot was created by https://ddc-dev.com/`);
//             mess.edit(DeletedEmbed);
//         } else return
//     }
// })

//FOR CONTINUING CODE OF A COMMAND LISTENER

//  else if (command == 'COMMAND NAME') {
//      //Code...
//  }