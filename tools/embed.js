const Discord = require("discord.js")
const {MessageEmbed} = Discord;

module.exports = (title, description, color) => {
    const infoEmbed = new MessageEmbed()
    .setTitle(title)
    .setDescription(description)
        let newColor = ""
    if(color == 'error') newColor = "#ff0000"
    else if(color == 'info') newColor = "#1f75ff"
    else if(color == 'warn') newColor = "#eeff00"
   
    if(newColor == "" && color) infoEmbed.setColor(color)
    else if(newColor !== "") infoEmbed.setColor(newColor)

    return infoEmbed
}