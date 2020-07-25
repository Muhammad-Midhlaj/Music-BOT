const { MessageEmbed } = require("discord.js");
const exampleEmbed = new Discord.MessageEmbed()
.setColor('#0099ff')
.setTitle('MGC MUSIC commands:')
.addFields(
  { name: '+play<title|URL|subcommand>', value: 'plays the provided song' },
  { name: '+playlists', value: 'shows the available playlists' },
  { name: '+lyrics[song name]', value: 'shows the lyrics to the currently-playing song' },
  { name: '+nowplaying', value: 'shows the song that is currently playing' },
  {name: '+search <query>',value:'searches Youtube for a provided query'},
  {name: '+shuffle',value:'shuffles songs you have added'},
)
module.exports = {
  name: "help",
  aliases: ["h"],
  description: "Display all commands and descriptions",
  execute(exampleEmbed) 
   };
