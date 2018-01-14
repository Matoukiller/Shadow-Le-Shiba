const Discord = require('discord.js');

var bot = new Discord.Client();
var prefix = ("/");

bot.on('ready',()=>  {
    bot.user.setPresence({ game: { name: 'Aide les gens ', type: 0} });
    console.log('Bot Ready !');
});

bot.login('NDAxODcxMTU3ODQzODUzMzQ0.DTzRKQ.owBkLvF5mX4rETyIVF_3VPqOlbA');

bot.on('message', message => {
    if (message.content === "Salut"){
        message.reply("Bonjour et bien venu sur se serveur, amuses-toi bien !");
        console.log('Salut Bonjour et bien venu sur se serveur, amuses-toi bien');
    }

    if (message.content === prefix + "help"){
     var help_embed = new Discord.RichEmbed()
       .setColor('#01FEDC')
       .addField("Commandes du bot !", "   -/help : Affiche les commandes du bot !")
    message.channel.sendEmbed(help_embed);
      // message.channel.sendMessage("Voici les commandes du bot :\n -/help pour afficher les commandes");
       console.log("Commande Help demandée !");
    }
});
