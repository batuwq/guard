const ms = require("ms")
const Embed = require("../tools/embed.js")
const Discord = require("discord.js")
const { SlashCommandBuilder } = require("@discordjs/builders")
const moment = require("moment")
require("moment-duration-format")
let sorular = [
"İsmin ve yaşın nedir", 
"Neden yetkili olmak istiyorsun?",
"Sunucumuza ne faydalar sağlarsın?",
"Yetkili olduğun başka sunucu var mı, var ise yetkin ne ve sunucular kaç kişilik?",
"Kendine ait bir sunucun var mı, var ise kaç kişilik?",
"Sunucuya ne zaman katıldın(eski sunucuda varsan oraya ne zaman katıldın?) ",
"Bot bilgin yüzdelik olarak kaç?",
"Chatte ne kadar aktif olabilirsin?",
"Seslide ne kadar aktif olabilirsin?",
"Discord uygulamasını ne zamandan beri kullanıyosun? ",
"Şuanda yaklaşık kaç sunucuda varsın? ",
"Günün hangi saatlerinde aktif olursun? ",
"Daha önce sunucumuzda yetkili oldun mu, olduysan yetkin neydi? ",
"Sunucumuzun iyi yönleri neler? ",
"Sunucumuzun kötü veya eksik yönleri neler? ",
"Seni neden yetkili yapalım? ",
"İstediğin yetkili rolü nedir? ",
"Neden biz? "
]
module.exports = {
data: new SlashCommandBuilder()
    .setName("yetkili-alım")
    .setDescription("yetkili alım başvurusu yaparsınız.")
    ,execute(interaction, client, messagecreate) {
  
  let db = require("quick.db")
  db.set("sorular_" + interaction.user.id, [])
interaction.reply({embeds: [Embed("Yetkili alım komutu!","Yetkili alım başvurusu yapmak istediğinize eminseniz ``başla`` yazınız. Eğer değilseniz `iptal` yazın.","info")], ephemeral: true})
let filter = message => message.author.id == interaction.user.id && message.content == "başla" || message.content == "iptal"
let filter2 = message => message.author.id == interaction.user.id
let i = 1
let cevaplar = []
interaction.channel.awaitMessages((filter)).then(c => {
let start = c.first()
if(start.content == "başla") {
interaction.followUp({embeds: [Embed("Yetkili alım başvurusu başladı",i+". Soru: "+ sorular[i-1],"info")], ephemeral: true}) 
interaction.channel.awaitMessages((filter2)).then(c1 => {
let msg1 = c1.first()
cevaplar.push(msg1)
msg1.delete()
i++
interaction.followUp({embeds: [Embed("Yetkili alım başvurusu devam ediyor",i+". Soru: "+ sorular[i-1],"info")], ephemeral: true}) 
interaction.channel.awaitMessages((filter2)).then(c2 => {
let msg2 = c2.first()
cevaplar.push(msg2)
msg2.delete()
i++

interaction.followUp({embeds: [Embed("Yetkili alım başvurusu devam ediyor",i+". Soru: "+ sorular[i-1],"info")], ephemeral: true}) 
interaction.channel.awaitMessages((filter2)).then(c3 => {
let msg3 = c3.first()
cevaplar.push(msg3)
msg3.delete()
i++


interaction.followUp({embeds: [Embed("Yetkili alım başvurusu devam ediyor",i+". Soru: "+ sorular[i-1],"info")], ephemeral: true}) 
interaction.channel.awaitMessages((filter2)).then(c4 => {
let msg4 = c4.first()
cevaplar.push(msg4)
msg4.delete()
i++

interaction.followUp({embeds: [Embed("Yetkili alım başvurusu devam ediyor",i+". Soru: "+ sorular[i-1],"info")], ephemeral: true}) 
interaction.channel.awaitMessages((filter2)).then(c5 => {
let msg5 = c5.first()
cevaplar.push(msg5)
msg5.delete()

i++
interaction.followUp({embeds: [Embed("Yetkili alım başvurusu devam ediyor",i+". Soru: "+ sorular[i-1],"info")], ephemeral: true}) 
interaction.channel.awaitMessages((filter2)).then(c6 => {
let msg6 = c6.first()
cevaplar.push(msg6)
msg6.delete()

i++

interaction.followUp({embeds: [Embed("Yetkili alım başvurusu devam ediyor",i+". Soru: "+ sorular[i-1],"info")], ephemeral: true}) 
interaction.channel.awaitMessages((filter2)).then(c7 => {
let msg7 = c7.first()
cevaplar.push(msg7)
msg7.delete()
i++

interaction.followUp({embeds: [Embed("Yetkili alım başvurusu devam ediyor",i+". Soru: "+ sorular[i-1],"info")], ephemeral: true}) 
interaction.channel.awaitMessages((filter2)).then(c8 => {
let msg8 = c8.first()
cevaplar.push(msg8)
msg8.delete()
i++

interaction.followUp({embeds: [Embed("Yetkili alım başvurusu devam ediyor",i+". Soru: "+ sorular[i-1],"info")], ephemeral: true}) 
interaction.channel.awaitMessages((filter2)).then(c9 => {
let msg9 = c9.first()
cevaplar.push(msg9)
msg9.delete()
i++

interaction.followUp({embeds: [Embed("Yetkili alım başvurusu devam ediyor",i+". Soru: "+ sorular[i-1],"info")], ephemeral: true}) 
interaction.channel.awaitMessages((filter2)).then(c10 => {
let msg10 = c10.first()
cevaplar.push(msg10)
msg10.delete()

i++
interaction.followUp({embeds: [Embed("Yetkili alım başvurusu devam ediyor",i+". Soru: "+ sorular[i-1],"info")], ephemeral: true}) 
interaction.channel.awaitMessages((filter2)).then(c11 => {
let msg11 = c11.first()
cevaplar.push(msg11)
msg11.delete()
i++

interaction.followUp({embeds: [Embed("Yetkili alım başvurusu devam ediyor",i+". Soru: "+ sorular[i-1],"info")], ephemeral: true}) 
interaction.channel.awaitMessages((filter2)).then(c12 => {
let msg12 = c12.first()
cevaplar.push(msg12)
msg12.delete()
i++

interaction.followUp({embeds: [Embed("Yetkili alım başvurusu devam ediyor",i+". Soru: "+ sorular[i-1],"info")], ephemeral: true}) 
interaction.channel.awaitMessages((filter2)).then(c13 => {
let msg13 = c13.first()
cevaplar.push(msg13)
msg13.delete()
i++

interaction.followUp({embeds: [Embed("Yetkili alım başvurusu devam ediyor",i+". Soru: "+ sorular[i-1],"info")], ephemeral: true}) 
interaction.channel.awaitMessages((filter2)).then(c14 => {
let msg14 = c14.first()
cevaplar.push(msg14)
msg14.delete()
i++

interaction.followUp({embeds: [Embed("Yetkili alım başvurusu devam ediyor",i+". Soru: "+ sorular[i-1],"info")], ephemeral: true}) 
interaction.channel.awaitMessages((filter2)).then(c15 => {
let msg15 = c15.first()
cevaplar.push(msg15)
msg15.delete()
i++

interaction.followUp({embeds: [Embed("Yetkili alım başvurusu devam ediyor",i+". Soru: "+ sorular[i-1],"info")], ephemeral: true}) 
interaction.channel.awaitMessages((filter2)).then(c16 => {
let msg16 = c16.first()
cevaplar.push(msg16)
msg16.delete()
i++

interaction.followUp({embeds: [Embed("Yetkili alım başvurusu devam ediyor",i+". Soru: "+ sorular[i-1],"info")], ephemeral: true}) 
interaction.channel.awaitMessages((filter2)).then(c17 => {
let msg17 = c17.first()
cevaplar.push(msg17)
msg17.delete()
i++

interaction.followUp({embeds: [Embed("Yetkili alım başvurusu bitiyor",i+". Soru: "+ sorular[i-1],"info")], ephemeral: true}) 
interaction.channel.awaitMessages((filter2)).then(c18 => {
let msg18 = c18.first()
cevaplar.push(msg18)
msg18.delete()
interaction.followUp(interaction.user.toString() + " Yetkili alım başvurusunu başarıyla tamamladın.")
i = 1
let yazı = interaction.user.toString() + " Yetkili başvurusu yaptı. <@&939970119398994023>"
cevaplar.forEach(cevap => {
yazı = yazı + `${i}. Soru: ${sorular[i-1]}\n${cevaplar[i-1].content}\n`
i++
})
setTimeout(() => {
client.channels.cache.get("951124499095486537").send(yazı).catch(err => {
i = 0
client.channels.cache.get("951124499095486537").send(interaction.user.toString() + " kişisinin cevapları mesaja sığmadığı için cevapların herbiri ayrı bir mesaj olarak atılıyor. <@&939970119398994023>")
cevaplar.forEach(cevap => {
client.channels.cache.get("951124499095486537").send(`${i}. Soru: ${sorular[i-1]}\n${cevaplar[i-1].content}`)
})
})
}, 1000)
}).catch(err => {console.log(err) && interaction.followUp({content: "Bir hata çıktığı veya cevap vermediğin için işlem iptal edildi.", ephemeral: true})}) 


}).catch(err => {console.log(err) && interaction.followUp({content: "Bir hata çıktığı veya cevap vermediğin için işlem iptal edildi.", ephemeral: true})}) 


}).catch(err => {console.log(err) && interaction.followUp({content: "Bir hata çıktığı veya cevap vermediğin için işlem iptal edildi.", ephemeral: true})}) 


}).catch(err => {console.log(err) && interaction.followUp({content: "Bir hata çıktığı veya cevap vermediğin için işlem iptal edildi.", ephemeral: true})}) 


}).catch(err => {console.log(err) && interaction.followUp({content: "Bir hata çıktığı veya cevap vermediğin için işlem iptal edildi.", ephemeral: true})}) 


}).catch(err => {console.log(err) && interaction.followUp({content: "Bir hata çıktığı veya cevap vermediğin için işlem iptal edildi.", ephemeral: true})}) 


}).catch(err => {console.log(err) && interaction.followUp({content: "Bir hata çıktığı veya cevap vermediğin için işlem iptal edildi.", ephemeral: true})}) 


}).catch(err => {console.log(err) && interaction.followUp({content: "Bir hata çıktığı veya cevap vermediğin için işlem iptal edildi.", ephemeral: true})}) 


}).catch(err => {console.log(err) && interaction.followUp({content: "Bir hata çıktığı veya cevap vermediğin için işlem iptal edildi.", ephemeral: true})}) 


}).catch(err => {console.log(err) && interaction.followUp({content: "Bir hata çıktığı veya cevap vermediğin için işlem iptal edildi.", ephemeral: true})}) 


}).catch(err => {console.log(err) && interaction.followUp({content: "Bir hata çıktığı veya cevap vermediğin için işlem iptal edildi.", ephemeral: true})}) 


}).catch(err => {interaction.followUp({content: "Bir hata çıktığı veya cevap vermediğin için işlem iptal edildi.", ephemeral: true})}) 


}).catch(err => {interaction.followUp({content: "Bir hata çıktığı veya cevap vermediğin için işlem iptal edildi.", ephemeral: true})}) 


}).catch(err => {interaction.followUp({content: "Bir hata çıktığı veya cevap vermediğin için işlem iptal edildi.", ephemeral: true})}) 


}).catch(err => {interaction.followUp({content: "Bir hata çıktığı veya cevap vermediğin için işlem iptal edildi.", ephemeral: true})}) 



}).catch(err => {interaction.followUp({content: "Bir hata çıktığı veya cevap vermediğin için işlem iptal edildi.", ephemeral: true})}) 



}).catch(err => {interaction.followUp({content: "Bir hata çıktığı veya cevap vermediğin için işlem iptal edildi.", ephemeral: true})}) 

}).catch(err => {interaction.followUp({content: "Bir hata çıktığı veya cevap vermediğin için işlem iptal edildi.", ephemeral: true})}) 
} else interaction.followUp({content: "İşlem iptal edildi.", ephemeral: true})
}).catch(err =>  interaction.followUp({content: "bir cevap vermediğin veya kodda hata çıktığı için işlem iptal edildi.", ephemeral: true}))
 }
}  