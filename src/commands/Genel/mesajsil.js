module.exports = {
    name: "mesajsil",
    aliases: ["sil"],

    execute: async (client, message, args, embed, author, channel, guild) => {
      if(!message.member.permissions.has("MANAGE_MESSAGES")) return message.reply("Yetersiz yetkiye sahipsin")
        const sayi = args.slice(0).join('');
      if(!sayi) return message.reply("Bir sayı giriniz lütfen")
      if(isNaN(sayi)) return message.reply("Lütfen normal bir sayı giriniz")
      
     message.channel.bulkDelete(sayi);
     message.channel.send("**" + sayi + "** mesaj sildim").then(msg => {
 	    msg.delete(5000)
     }); 
  } 
}