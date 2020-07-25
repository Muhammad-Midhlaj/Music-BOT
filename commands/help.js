const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "help",
  aliases: ["h"],
  description: "Display all commands and descriptions",
  execute(message) {
    let commands = message.client.commands.array();
    commands.shift()
    let helpEmbed = new MessageEmbed()
      .setTitle("MGC MUSIC")
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
  
   //Music-Help Channel ID = 732460163495100428
  // message.reply("Please see <#732460163495100428> for **Music Bot** commands.");
  }
};

