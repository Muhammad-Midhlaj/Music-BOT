const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "help",
  aliases: ["h"],
  description: "Display all commands and descriptions",
  execute(message) {
    /*
    let commands = message.client.commands.array();
    commands.shift()
    let helpEmbed = new MessageEmbed()
      .setTitle("Aakasha Vani Help Line")
      .setDescription("List of all commands")
      .setColor("#F8AA2A");

    commands.forEach((cmd) => {
      helpEmbed.addField(
        `**${message.client.prefix}${cmd.name} ${cmd.aliases ? `(${cmd.aliases})` : ""}**`,
        `${cmd.description}`,
        true
      );
    });

    helpEmbed.setTimestamp();

    return message.channel.send(helpEmbed);
    */
   //Music-Help Channel ID = 732460163495100428
   message.reply("```diff+
                 +lyrics [song name] - shows the lyrics to the currently-playing song
+nowplaying - shows the song that is currently playing
+play <title|URL|subcommand> - plays the provided song
+playlists - shows the available playlists
+queue [pagenum] - shows the current queue
+remove <position|ALL> - removes a song from the queue
+search <query> - searches Youtube for a provided query
+scsearch <query> - searches Soundcloud for a provided query
+shuffle - shuffles songs you have added
+skip - votes to skip the current song

  DJ:

+forceremove <user> - removes all entries by a user from the queue
+forceskip - skips the current song
+movetrack <from> <to> - move a track in the current queue to a different position
+pause - pauses the current song
+playnext <title|URL> - plays a single song next
+repeat [on|off] - re-adds music to the queue when finished
+skipto <position> - skips to the specified song
+stop - stops the current song and clears the queue
+volume [0-150] - sets or shows volume ```.");
  }
};
