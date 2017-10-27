const Discord = require('discord.js');
const policeBot = Discord.Client();

var token = 'lv3s8JDv95m-A0iTlWpW92tgDKM3onlF';

policeBot.login(token);


policeBot.on('ready', () => {

    console.log("Police Bot Ready !");
    console.log("trest !");
});

policeBot.login(token);

bot.on('message', message => {

  var lMessage = message.content;
  var lArray = new Array();
  var lCommand;

 
  lArray = lMessage.split("_");
  lCommand = lArray[0];


  if(lCommand === "!command")
  {
    message.reply("Voici les commandes : \n:black_circle: Passer une annonce de recherche joueur (seulement dans le chan recherche joueur) : \n!player_Nom Du Salon_Places Disponibles_Grade Minimum_Type De Match\n\n:black_circle: Signaler un membre à l'équipe de modération : \n!report_Pseudo exact du membre_Motif");
  }

  if(message.content === "chut")
  {
    message.reply("oui la police est en ligne");
    console.log("police");
  }
});
