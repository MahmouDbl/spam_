const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get(
"355023283055230976")
setInterval(function() {
channel.send(`my channel is Mahmoud Bl`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
