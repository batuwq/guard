const reqEvent = event => require(`../events/${event}`)
module.exports = client => {
  client.on("ready", () => reqEvent("ready")(client));
  client.on("interactionCreate", reqEvent("interactionCreate"))
// Star Coders Youtube kanalına abone olmayı unutmayın

};