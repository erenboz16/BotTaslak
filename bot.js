const express = require('express');
const app = express();
const http = require('http');

app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received.")
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 500000);

const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = "!";

client.on('ready',() => {
  console.log("Bot Aktif!!!");
});

client.on('message', msg => {
  if(msg.content.toLowerCase() === prefix + "sa"){
    msg.channel.sendMessage("Aleyküm Selam");
  }
});

client.login(process.env.TOKEN);