module.exports = async(interaction) => {
const client = interaction.client
if(!interaction.isCommand()) return
    const command = client.slashcommands.get(interaction.commandName)
    if(!command) return
    try{
        await command.execute(interaction, client) 
    }
    catch(err) {
        interaction.reply({content: "Komut çalıştırılırken bir hata ortaya çıktı tekrar deneyiniz.", ephemeral: true})
        console.error(err)
    }}
// Star Coders Youtube kanalına abone olmayı unutmayın
