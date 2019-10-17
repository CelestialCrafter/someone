const Discord = require('discord.js');
const client = new Discord.Client();

client.on('message', message => {
  if (message.author.bot && message.author.id !== client.user.id) return;
  if (message.author.id == client.user.id) message.delete();
  else {
    let i = [];
    if (message.content.search(/<\@538281576879095818\>/g) !== -1) {
      message.guild.members.forEach(member => {
        if (member.user.presence.status !== 'offline') return;
        i.push(member.id);
      });

      let outputid = i[Math.floor(Math.random() * (i.length - 1) + 1)];
      message.channel.send('<@'+outputid+'>').then(msg => { msg.delete(10); })
    }
  }
});

client.on('ready', () => {
  client.user.setActivity('Use @someone to ping someone!');
});

client.login('token uwu');
console.log('ok ok ok i work');
