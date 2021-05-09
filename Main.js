
//  Dennisonung Bot Code (https://github.com/Dennisonung/Dennisonung-Discord-Bots/)
//  Licensed under Apache-2.0 License (https://github.com/Dennisonung/Dennisonung-Discord-Bots/blob/master/LICENSE)
//  Dennisonung Bot Code | Apache-2.0 License| https://github.com/Dennisonung/Dennisonung-Discord-Bots

const Discord = require('discord.js'); //Discord.JS 

const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"] }); //Discord.JS Bot Client

const prefix = '?'; //Prefix Here (EXTREMELY IMPORTANT)

const Levels = require('discord-xp'); //Responable for the leveling system (REMOVE IF YOU DO NOT WANT A LEVELING SYSTEM!)

//Levels.setURL(""); || If you wish to use the XP function, please add a MongoDB link here. (REMOVE IF YOU DO NOT WANT A LEVELING SYSTEM!)

const fs = require('fs'); //EXTREMELY IMPORTANT

//Failed Command Embed (ADD TO THE MESSAGE)
const PermissionsInVaildEmbed = new Discord.MessageEmbed()
                .setColor('#FF0000')
                .setTitle('Permissions Missing❌');



// Whenever the bot joins a discord server.
client.on('guildCreate', guild => {
    const botjoinembed = new Discord.MessageEmbed()
                .setColor('#6A0DAD')
                .setTitle('Thank you for inviting me!');
    guild.systemChannel.send(botjoinembed)
});


client.commands = new Discord.Collection();
//Searches the "commands" folder for .js command files
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

const auditfiles = fs.readdirSync('./auditlog/').filter(file => file.endsWith('.js'));
for (const file of auditfiles) {
    const command = require(`./auditlog/${file}`);
    client.commands.set(command.name, command);
}

//When the client/bot starts 
client.on('ready', () => {
    console.log('Discord bot is online!');
});


//Commands Below
client.on('message', async (message) => {
    //Doesn't detect messages that don't start with the prefix or other bots.
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    //ARGS SYSTEM
    const args = message.content.slice(prefix.length).split(/ +/);
    //COMMAND HANDLER
    const command = args.shift().toLowerCase();
    //FIRST COMMAND = PING 
    if (command == 'ping') {
        if(message.member.id === '397268534033514497') {
            const FetchPing = new Discord.MessageEmbed()
                .setColor('#ff0000')
                .setTitle(`🏓 Fetching Ping...!`)
                .setFooter(`Prefix ` + prefix + ` || This bot was created by https://ddc-dev.com/`);
            var mess = await message.channel.send(FetchPing)
            const DeletedEmbed = new Discord.MessageEmbed()
                .setColor('#ff0000')
                .setTitle(`🏓 Ping Pong!`)
                .setDescription(`${mess.createdTimestamp - message.createdTimestamp}ms.`)
                .setFooter(`Prefix ` + prefix + ` || This bot was created by https://ddc-dev.com/`);
            mess.edit(DeletedEmbed);
        } else return
    } else if (command == 'help'){
        client.commands.get("help").execute(message, args, Discord, prefix)
    }
})


//===============================================================================================================================================
//   _____   _______              _____    _______      ____    ______     __  __    ____    _____             _         ____     _____    _____ 
//  / ____| |__   __|     /\     |  __ \  |__   __|    / __ \  |  ____|   |  \/  |  / __ \  |  __ \           | |       / __ \   / ____|  / ____|
// | (___      | |       /  \    | |__) |    | |      | |  | | | |__      | \  / | | |  | | | |  | |  ______  | |      | |  | | | |  __  | (___  
//  \___ \     | |      / /\ \   |  _  /     | |      | |  | | |  __|     | |\/| | | |  | | | |  | | |______| | |      | |  | | | | |_ |  \___ \ 
//  ____) |    | |     / ____ \  | | \ \     | |      | |__| | | |        | |  | | | |__| | | |__| |          | |____  | |__| | | |__| |  ____) |
// |_____/     |_|    /_/    \_\ |_|  \_\    |_|       \____/  |_|        |_|  |_|  \____/  |_____/           |______|  \____/   \_____| |_____/                                                                                                                                                                                                                   
// ===============================================================================================================================================




// WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING 
//  _    _   _   _             _____    ____    __  __   __  __   ______   _   _   _______      ____    _    _   _______     __  __    ____    _____             _         ____     _____    _____ 
// | |  | | | \ | |           / ____|  / __ \  |  \/  | |  \/  | |  ____| | \ | | |__   __|    / __ \  | |  | | |__   __|   |  \/  |  / __ \  |  __ \           | |       / __ \   / ____|  / ____|
// | |  | | |  \| |  ______  | |      | |  | | | \  / | | \  / | | |__    |  \| |    | |      | |  | | | |  | |    | |      | \  / | | |  | | | |  | |  ______  | |      | |  | | | |  __  | (___  
// | |  | | | . ` | |______| | |      | |  | | | |\/| | | |\/| | |  __|   | . ` |    | |      | |  | | | |  | |    | |      | |\/| | | |  | | | |  | | |______| | |      | |  | | | | |_ |  \___ \ 
// | |__| | | |\  |          | |____  | |__| | | |  | | | |  | | | |____  | |\  |    | |      | |__| | | |__| |    | |      | |  | | | |__| | | |__| |          | |____  | |__| | | |__| |  ____) |
//  \____/  |_| \_|           \_____|  \____/  |_|  |_| |_|  |_| |______| |_| \_|    |_|       \____/   \____/     |_|      |_|  |_|  \____/  |_____/           |______|  \____/   \_____| |_____/                                                                                                                                                                                                 
// WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING WARNING                                                                                                                               

// const modlogs = '';
// const welcomechannel = '';
// const WelcomeRole = '';

// //---------------Join Messages---------------------------------------------------------------------------------------------------------
// client.on('guildMemberAdd', async member => {
//     const JoinEmbed = new Discord.MessageEmbed()
//         .setColor('#00FF00')
//         .setTitle(`Member Joined.`)
//         .setThumbnail(`${member.user.displayAvatarURL()}`)
//         .setDescription(`<@${member.user.id}> ${member.user.username} has joined the server.`)
//         .setFooter(`Prefix ` + prefix + ` || Member ID: ${member.user.id}`);
//     client.channels.cache.get(modlogs).send(JoinEmbed);
//     member.roles.add(WelcomeRole);
// });
// //member Leave
// client.on('guildMemberRemove', async guildMemberLeave => {
//     const LeaveEmbed = new Discord.MessageEmbed()
//         .setColor('#ff0000')
//         .setTitle(`Member Left.`)
//         .setThumbnail(`${guildMemberLeave.user.displayAvatarURL()}`)
//         .setDescription(`<@${guildMemberLeave.user.id}> ${guildMemberLeave.user.tag} has left the server.`)
//         .setFooter(`Prefix ` + prefix + ` || Member ID: ${guildMemberLeave.user.id}`);
//     guildMemberLeave.guild.channels.cache.get(modlogs).send(LeaveEmbed);
// });
// //---------------Channel Create Logs----------------------------------------------------------------------------------------------
// client.on('channelCreate', async channel => {

//     const CCEmbed = new Discord.MessageEmbed()
//         .setColor('#ff0000')
//         .setTitle(`Channel Created.`)
//         .setDescription(`Channel Created: #${channel.name}\n`
//             + `Channel Type: ${channel.type}`)
//         .setFooter(`Prefix ` + prefix + ` || Channel ID: ${channel.id}`);

//     client.channels.cache.get(modlogs).send(CCEmbed)
// });
// //Channel Delete
// client.on('channelDelete', async channel => {
//     const CDEmbed = new Discord.MessageEmbed()
//         .setColor('#ff0000')
//         .setTitle(`Channel Deleted.`)
//         .setDescription(`Channel Deleted: #${channel.name}`)
//         .setFooter(`Prefix ` + prefix + ` || This bot code was created by https://ddc-dev.com/`);

//     client.channels.cache.get(modlogs).send(CDEmbed)
// });
// //Messaged Pin Logs
// client.on('channelPinsUpdate', async channel => {

//     const KickedEmbed = await new Discord.MessageEmbed()
//         .setColor('#ff0000')
//         .setTitle(`Message Pinned/Unpinned.`)
//         .setDescription(`Message pinned/unpinned at <#${channel.id}>`)
//         .setFooter(`Prefix ` + prefix + ` || This bot code was created by https://ddc-dev.com/`);

//     client.channels.cache.get(modlogs).send(KickedEmbed)
// });
// //---------------Emoji Deleted Logs---------------------------------------------------------------------------------------------------------
// //NOT WORKING CORRECTLY
// client.on('channelUpdate', async (oldChannel, newChannel) => {
//     if (oldChannel === newChannel || !modlogs)
//         if (!oldChannel.guild) return;
//     if (!newChannel.guild) return;

//     client.commands.get('ChannelUpdate').execute(Discord, client, modlogs, oldChannel, newChannel, prefix)

// });
// //---------------Emoji Deleted Logs---------------------------------------------------------------------------------------------------------
// client.on('emojiDelete', async emoji => {

//     const KickedEmbed = new Discord.MessageEmbed()
//         .setColor('#ff0000')
//         .setTitle(`Emoji Deleted`)
//         .setDescription(`Emoji Name: ${emoji.name}\n`
//             + `Emoji ID: ${emoji.id}`)
//         .setFooter(`Prefix ` + prefix + ` || This bot code was created by https://ddc-dev.com/`);

//     client.channels.cache.get(modlogs).send(KickedEmbed)
// });
// //---------------Emoji Created Logs------------------------------------------------------------------------------------------------------------------------
// client.on('emojiCreate', async emoji => {
//     const KickedEmbed = new Discord.MessageEmbed()
//         .setColor('#ff0000')
//         .setTitle(`Emoji Created`)
//         .setDescription(`Emoji Name: ${emoji.name}\n`
//             + `Emoji: <:${emoji.name}:${emoji.id}>\n`
//             + `Emoji ID: ${emoji.id}`)
//         .setFooter(`Prefix ` + prefix + ` || This bot code was created by https://ddc-dev.com/`);

//     client.channels.cache.get(modlogs).send(KickedEmbed)
// });
// //---------------Member ban Audit Logs---------------------------------------------------------------------------------------------------------
// client.on('guildBanAdd', async (guild, user) => {
//     const banEmbed = new Discord.MessageEmbed()
//         .setColor('#ff0000')
//         .setTitle(`Member banned.`)
//         .setThumbnail(`${user.displayAvatarURL()}`)
//         .setDescription(`<@${user.id}> ${user.username} is now banned from the server.`)
//         .setFooter(`Prefix ` + prefix + ` || Member ID: ${user.id}`);

//     client.channels.cache.get(welcomechannel).send(`${user.tag} Has been banned the server.`)
//     client.channels.cache.get(modlogs).send(banEmbed)
// });
// //---------------Member Unban Logs------------------------------------------------------------------------------------------------------------------------
// client.on('guildBanRemove', async (guild, user) => {
//     const unbanEmbed = new Discord.MessageEmbed()
//         .setColor('#ff0000')
//         .setTitle(`Member unbanned.`)
//         .setThumbnail(`${user.displayAvatarURL()}`)
//         .setDescription(`<@${user.id}> ${user.username} is now unbanned from the server.`)
//         .setFooter(`Prefix ` + prefix + ` || Member ID: ${user.id}`);

//     client.channels.cache.get(modlogs).send(unbanEmbed)
// });
// //---------------Member Audit Logs------------------------------------------------------------------------------------------------------------------------
// client.on('guildMemberUpdate', (oldMember, newMember) => {
//     client.commands.get('MemberUpdate').execute(Discord, client, modlogs, oldMember, newMember, prefix);
// });
// //---------------Guild Audit Logs-----------------------------------------------------------------------------------------------------------------------------------
// //UNFINISHED
// client.on('guildUpdate', async (oldGuild, newGuild) => {

//     const KickedEmbed = new Discord.MessageEmbed()
//         .setColor('#ff0000')
//         .setTitle(`Server updated`)
//         .setDescription(`**Name**\n`
//             + `Before: ${oldGuild.name}\n`
//             + `After: ${newGuild.name}\n`
//             + `**Server Region**\n`
//             + `Before: ${oldGuild.region}\n`
//             + `After: ${newGuild.region}\n`)
//         .setFooter(`Prefix ` + prefix + ` || This bot code was created by https://ddc-dev.com`);

//     client.channels.cache.get(modlogs).send(KickedEmbed)
// });
// //---------------Message Deleted Logs---------------------------------------------------------------------------------------------------------------------------------------
// try {
//     client.on('messageDelete', async Deletedmessage => {

//         await Discord.Util.delayFor(500);

//         if (!Deletedmessage.guild) return;

//         const fetchedLogs = await Deletedmessage.guild.fetchAuditLogs({
//             limit: 6,
//             type: 'MESSAGE_DELETE'
//         }).catch(() => ({
//             entries: []
//         }));

//         const deletionLog = fetchedLogs.entries.first();

//         const { executor, target } = deletionLog;

//         if (executor.id == '') return Deletedmessage.author.id;

//         try {
//             const DeletedEmbed = new Discord.MessageEmbed()
//                 .setAuthor('Deleted Message', `${Deletedmessage.author.displayAvatarURL()}`, 'https://ddc-dev.com/')
//                 .setColor('#ff0000')
//                 .setTitle(`Message Deleted.`)
//                 .setDescription(`**Message sent by <@${Deletedmessage.author.id}> deleted by <@${executor.id}> in <#${Deletedmessage.channel.id}>**\n`
//                     + `${Deletedmessage}`)
//                 .setFooter(`Prefix ` + prefix + ` || This bot code was created by https://ddc-dev.com/`);

//             const DeletedsEmbed = new Discord.MessageEmbed()
//                 .setAuthor('Deleted Message', `${Deletedmessage.author.displayAvatarURL()}`, 'https://ddc-dev.com/')
//                 .setColor('#ff0000')
//                 .setTitle(`Message Deleted.`)
//                 .setDescription(`**Message sent by <@${Deletedmessage.author.id}> deleted in <#${Deletedmessage.channel.id}>**\n`
//                     + `${Deletedmessage}`)
//                 .setFooter(`Prefix ` + prefix + ` || This bot code was created by https://ddc-dev.com`);
//             // console.log(target.id)
//             // if(Deletedmessage.attachments) {
//             //     Deletedmessage.addField(`Attachements`, Deletedmessage.attachments.name)
//             //     Deletedsmessage.addField(`Attachements`, Deletedmessage.attachments.name)
//             // }

//             if (Deletedmessage.author.id == target.id) {
//                 client.channels.cache.get(modlogs).send(DeletedEmbed);
//             } else {
//                 client.channels.cache.get(modlogs).send(DeletedsEmbed);
//             }
//         } catch (err) { }
//     });
// } catch (err) { }
// //---------------Deleted Message Bulk Logs-----------------------------------------------------------------------------------------------------
// client.on('messageDeleteBulk', async message => {
//     const channel = message.first().channel.id;
//     const DeletedEmbed = new Discord.MessageEmbed()
//         .setColor('#ff0000')
//         .setTitle(`Bulk Message Deleted.`)
//         .setDescription(`Bulk Messages deleted in <#${channel}>`)
//         .setFooter(`Prefix ` + prefix + ` || This bot code was created by https://ddc-dev.com/`);
//     client.channels.cache.get(modlogs).send(DeletedEmbed)
// });
// //---------------Message Update Logs-----------------------------------------------------------------------------------------------------
// client.on('messageUpdate', async (oldMessage, newMessage) => {
//     try {
//         if (oldMessage.author.id === `${client.user.id}`) return;
//         if (newMessage.author.id === `${client.user.id}`) return;
//         if (oldMessage.author.id === '') return;
//         if (newMessage.author.id === '') return;
//         if (oldMessage.author.id === 'null') return;
//         if (newMessage.author.id === 'null') return;
//         if (oldMessage.content == newMessage.content) return;
//         const DeletedEmbed = new Discord.MessageEmbed()
//             .setColor('#ff0000')
//             .setTitle(`Message Updated.`)
//             .setDescription(`**Sent by <@${newMessage.author.id}> in <#${newMessage.channel.id}>.**\n`
//                 + `***Before***\n`
//                 + `${oldMessage.content}\n`
//                 + `***After***\n`
//                 + `${newMessage.content}`)
//             .setFooter(`Prefix ` + prefix + ` || This bot was created by https://ddc-dev.com/`);
//         client.channels.cache.get(modlogs).send(DeletedEmbed);
//     } catch (err) {

//     }
// });
// //---------------Role Create Logs-----------------------------------------------------------------------------------------------------------------------------------------
// client.on('roleCreate', async role => {
//     const DeletedEmbed = new Discord.MessageEmbed()
//         .setColor('#ff0000')
//         .setTitle(`Role Created.`)
//         .setDescription(`**Role Name:**\n`
//             + `${role.name}\n`
//             + `<@${role.id}>`)
//         .setFooter(`Prefix ` + prefix + ` || This bot was created by https://ddc-dev.com/`);
//     client.channels.cache.get(modlogs).send(DeletedEmbed)
// });
// //---------------Role Delete Logs-------------------------------------------------------------------------------------------------------
// client.on('roleDelete', async role => {
//     const DeletedEmbed = new Discord.MessageEmbed()
//         .setColor('#ff0000')
//         .setTitle(`Role Deleted.`)
//         .setDescription(`**Role Name:**\n`
//             + `${role.name}`)
//         .setFooter(`Prefix ` + prefix + ` || This bot was created by https://ddc-dev.com/`);
//     client.channels.cache.get(modlogs).send(DeletedEmbed)
// });
// //---------------Invite Create Logs-----------------------------------------------------------------------------------------------------
// client.on('inviteCreate', async invite => {
//     const DeletedEmbed = new Discord.MessageEmbed()
//         .setColor('#ff0000')
//         .setTitle(`Invite Created.`)
//         .setDescription(`discord.gg/${invite.code}`)
//         .setFooter(`Prefix ` + prefix + ` || This bot was created by https://ddc-dev.com/`);
//     client.channels.cache.get(modlogs).send(DeletedEmbed)
// });
// //---------------Invite Delete Logs-----------------------------------------------------------------------------------------------------
// //NOT WORKING
// client.on('InviteDeleted', async invite => {

//     const DeletedEmbed = new Discord.MessageEmbed()
//         .setColor('#ff0000')
//         .setTitle(`Invite Deleted.`)
//         .setDescription(`discord.gg/${invite.code}`)
//         .setFooter(`Prefix ` + prefix + ` || This bot was created by Dennisonung#0001`);
//     client.channels.cache.get(modlogs).send(DeletedEmbed)

// });

//=========================================================================================================================
// ______   _   _   _____       ____    ______     __  __    ____    _____             _         ____     _____    _____ 
// |  ____| | \ | | |  __ \     / __ \  |  ____|   |  \/  |  / __ \  |  __ \           | |       / __ \   / ____|  / ____|
// | |__    |  \| | | |  | |   | |  | | | |__      | \  / | | |  | | | |  | |  ______  | |      | |  | | | |  __  | (___  
// |  __|   | . ` | | |  | |   | |  | | |  __|     | |\/| | | |  | | | |  | | |______| | |      | |  | | | | |_ |  \___ \ 
// | |____  | |\  | | |__| |   | |__| | | |        | |  | | | |__| | | |__| |          | |____  | |__| | | |__| |  ____) |
// |______| |_| \_| |_____/     \____/  |_|        |_|  |_|  \____/  |_____/           |______|  \____/   \_____| |_____/                                                                                                                       
// =========================================================================================================================

//REACTION MESSAGES
// client.on('message', message => {
//     const prefixreact = ''
//     if (!message.content.startsWith(prefixreact) || message.author.bot) return;

//     const args = message.content.slice(prefixreact.length).split(/ +/);
//     const command = args.shift().toLowerCase();

//     if (message.content.includes(`message`) || message.content.includes('message here'
//     )) {
//         message.react('EMOJI HERE')
//     }
// });

// ==========================================================================================================================================
//  _        ______  __      __  ______   _        _____   _   _    _____            _____  __     __   _____   _______   ______   __  __ 
// | |      |  ____| \ \    / / |  ____| | |      |_   _| | \ | |  / ____|          / ____| \ \   / /  / ____| |__   __| |  ____| |  \/  |
// | |      | |__     \ \  / /  | |__    | |        | |   |  \| | | |  __          | (___    \ \_/ /  | (___      | |    | |__    | \  / |
// | |      |  __|     \ \/ /   |  __|   | |        | |   | . ` | | | |_ |          \___ \    \   /    \___ \     | |    |  __|   | |\/| |
// | |____  | |____     \  /    | |____  | |____   _| |_  | |\  | | |__| |          ____) |    | |     ____) |    | |    | |____  | |  | |
// |______| |______|     \/     |______| |______| |_____| |_| \_|  \_____|         |_____/     |_|    |_____/     |_|    |______| |_|  |_|
// ==========================================================================================================================================                                                                                                                                    
                                                                                                                                       
//UNCOMMENT OUT ALL OTHER REQUIREMENTS FOR THE LEVELING SYSTEM.

// client.on("message", async message => {
//     if (!message.guild) return;
//     if (message.author.bot) return;

//     const prefix = '';
//     if (!message.content.startsWith(prefix) || message.author.bot) return;

//     const args = message.content.slice(prefix.length).trim().split(/ +/g);
//     const command = args.shift().toLowerCase();

//     const randomXp = Math.floor(Math.random() * 9) + 1; //Random amont of XP until the number you want + 1
//     const hasLeveledUp = await Levels.appendXp(message.author.id, message.guild.id, randomXp);
//     if (hasLeveledUp) {
//         const user = await Levels.fetch(message.author.id, message.guild.id);
//         message.channel.send(`You leveled up to ${user.level}! Keep it going!`);
//     }

//     //Rank
//     if (command === "d!rank") {
//         const target = message.mentions.users.first()
//         if (target) {
//             const memberTarget = message.guild.members.cache.get(target.id);
//             const user = await Levels.fetch(memberTarget.user.id, message.guild.id);
//             const levelingEmbed = new Discord.MessageEmbed()
//                 .setTitle(`${memberTarget.user.username} Level`)
//                 .setColor('FFFFFF')
//                 .setThumbnail(`${memberTarget.user.displayAvatarURL()}`)
//                 .setDescription(`${memberTarget.user.username} is at level **${user.level}**!`)

//             message.channel.send(levelingEmbed)
//         } else {
//             const user = await Levels.fetch(message.author.id, message.guild.id)
//             const levelingEmbed = new Discord.MessageEmbed()
//                 .setTitle(`${message.member.user.username} Level`)
//                 .setColor('FFFFFF')
//                 .setThumbnail(`${message.member.user.displayAvatarURL()}`)
//                 .setDescription(`${message.member.user.username} is at level **${user.level}**!`)

//             message.channel.send(levelingEmbed)

//         }
//     }
// })





// ===================================================================================================
// _____               _   _    _____   ______   _____      ______   ____    _   _   ______ 
// |  __ \      /\     | \ | |  / ____| |  ____| |  __ \    |___  /  / __ \  | \ | | |  ____|
// | |  | |    /  \    |  \| | | |  __  | |__    | |__) |      / /  | |  | | |  \| | | |__   
// | |  | |   / /\ \   | . ` | | | |_ | |  __|   |  _  /      / /   | |  | | | . ` | |  __|  
// | |__| |  / ____ \  | |\  | | |__| | | |____  | | \ \     / /__  | |__| | | |\  | | |____ 
// |_____/  /_/    \_\ |_| \_|  \_____| |______| |_|  \_\   /_____|  \____/  |_| \_| |______|
// ===================================================================================================                                                                       
 
//ADD BOTS TOKEN (TOP PRIORITY LEVEL)
client.login('');
// ===================================================================================================