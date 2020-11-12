const Discord = require("discord.js"),
chalk = require("chalk"),
os = require("os"),
colors = require("colors"),
figlet = require("figlet"),
client = new Discord.Client({disableEveryone: true}),
conf = require('./config.json'),
prefix = conf.prefix,
owners = conf.Owners,
memoire = Math.ceil(process.memoryUsage().heapTotal / 1000000),
ram_1 = Math.ceil((os.totalmem() - os.freemem()) / 1000000),
ram_2 = Math.ceil(os.totalmem() / 1000000);
/////////////////////////////////////////////////
client.setMaxListeners(Number.POSITIVE_INFINITY);
/////////////////////////////////////////////////
var TimeTooLowMsg = chalk.blue("<============================================================>\n") + chalk.red("pon un minimo de 5 segundos para no se baneado de la api!!\n")+chalk.blue("<============================================================>\n");
/////////////////////////////////////////////////
client.on('ready', () => {
  console.clear();
  client.setInterval(() => {var act = [{"text": "creador: $nake","type": "PLAYING"},{"text": "suscribe $nake","type": "WATCHING"},];try {const activity = act[Math.floor(Math.random() * act.length)];client.user.setActivity(activity.text, { type: activity.type });} catch (err) {return;}}, 15000);
    console.log(`----------------------------------------------------\n${colors.rainbow(figlet.textSync('memerainbow'))}\n----------------------------------------------------\n--> ${chalk.blue('nombre del Bot            : ')}[ ${client.user.username} ]\n--> ${chalk.blue('memoria usada         : ')}[ ${memoire} MB ]\n--> ${chalk.blue('RAM usada            : ')}[ ${ram_1} on ${ram_2} ]\n----------------------------------------------------\n${(chalk.green('                      listo!'))}\n----------------------------------------------------`);
});

client.on("guildCreate", async (guild) => {if(client.guilds.size >= 2){console.info("no usar este bot en multiples servers, pueden BANEAR AL OWNER!!");return guild.leave();};});

client.on('message', async (message) => {
  let args = message.content.split(' ').slice(1);
  if (message.content.startsWith(`${prefix}rainbowrole`)) {
setTimeout(() => {  console.log("esperando!"); }, 5000);

    if(!owners.includes(message.author.id) || !message.member.hasPermission("MANAGE_ROLES")) return message.reply("no tiene permiso de  MANAGE_ROLES.")
  
  if(!args[0]) return message.reply("pon la ID de un rol!");
  let rrole = message.mentions.roles.first() || message.guild.roles.find(r=> r.name === args[0]) || message.guild.roles.find(r=> r.id === args[0]),
  n = rrole.name;
  if (!message.guild.roles.find("name", n)) return message.reply('pon la ID de un rol __**VALIDO**__!');

    if(conf.time < 5) TimeTooLow();
  message.reply('rainbow encendido!').then((message) => {message.delete(3000);});
  if(message.deletable) message.delete();
  var thebigmix = message.guild.roles.find("name", n);
  
  ////////////////////////////////////

  try{
    let interval = setInterval(function () {
      thebigmix.setColor("RANDOM").catch(console.error);
    }, conf.time*1000);
  } catch {
    console.log(`${chalk.blue(`el bot no puede cambiar "${n}" F`)}`);
  }

  ////////////////////////////////////

  //config.time en segundos
}});
client.login(conf.token);

function TimeTooLow(){
  if(conf.StopIfTimeIsLessYhan5Seconds == true){
    console.log(TimeTooLowMsg+chalk.red("parando.."));
    return process.exit(-1);
  } else if(conf.StopIfTimeIsLessYhan5Seconds == false){
    console.log(TimeTooLowMsg);
  } else {
    return console.log("pon TRUE O FALSE en StopIfTimeIsLessYhan5Seconds!")
  }
};
