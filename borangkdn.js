const Discord = require("discord.js");
const ayarlar = require("./ayarlar.json");
const fs = require("fs");
const moment = require("moment");

const {MessageEmbed} = require("discord.js")
const db = require("quick.db")
const { Client, Collection, Intents } = require("discord.js");
const orio = require("orio.db");
const client = global.client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MEMBERS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_VOICE_STATES,
    Intents.FLAGS.GUILD_PRESENCES,
  ]
});
client.setMaxListeners(300)
require("./util/eventLoader")(client);
const dotenv = require("dotenv");
dotenv.config();
const { readdir } = require("fs");
require("moment-duration-format");
const commands = client.commands = new Collection();
const aliases = client.aliases = new Collection();
client.cooldown = new Map();
client.commandblocked = [];

const log = message => {
    console.log(`[${moment().format("YYYY-MM-DD HH:mm:ss")}] ${message}`);
};

require("./src/helpers/function")(client);

readdir("./src/commands/", (err, files) => {
  if (err) console.error(err)
  files.forEach(f => {
    readdir("./src/commands/" + f, (err2, files2) => {
      if (err2) console.log(err2)
      files2.forEach(file => {
        let prop = require(`./src/commands/${f}/` + file);
        console.log(`[BORANGKDN-COMMAND] ${prop.name} yüklendi!`);
        commands.set(prop.name, prop);
        prop.aliases.forEach(alias => {
          aliases.set(alias, prop.name);
        });
      });
    });
  });
});

readdir("./src/events", (err, files) => {
  if (err) return console.error(err);
  files.filter((file) => file.endsWith(".js")).forEach((file) => {
    let prop = require(`./src/events/${file}`);
    if (!prop.conf) return;
    client.on(prop.conf.name, prop);
    console.log(`[BORANGKDN-EVENT] ${prop.conf.name} yüklendi!`);
  });
});

client.login(process.env.token)
  .then(() => console.log(`Bot ${client.user.username} olarak giriş yaptı!`))
  .catch((err) => console.log(`Bot Giriş yapamadı sebep: ${err}`));

client.on('message', async message => {
  if (message.content === "ahmet abinin randomu")
 { message.channel.send("Hshsus")
   }     });

client.on("messageCreate", async message => {
    let mesaj = message.content.split(' ');
    try {
        for (var i = 0; i <= mesaj.length; i++) {

            if (mesaj[i] != "şey" && mesaj[i].endsWith("şey")) {
                var embed = new MessageEmbed()
                    .setColor("#000000")
                    .addField("**Şey** her zaman ayrı yazılır! Mesajınız şöyle olmalıdır", "`" + message.content.split('şey').join(' şey') + "`");
                message.reply({ embeds: [embed] });
                break;
            }
            else {

            }
        }
    }
    catch {

    }
});




var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
client.on("warn", e => {
  console.log(e.replace(regToken, "that was redacted"));
});
client.on("error", e => {
  console.log(e.replace(regToken, "that was redacted"));
});

client.slashcommands = new Discord.Collection()
 

client.on("ready", () => {
log("Slash (/) komutları yüklenmeye başlandı.")
const commandFiles = fs.readdirSync(`./commands`).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
client.slashcommands.set(command.data.name, command)
log("/" + command.data.name)
  client.guilds.cache.forEach(siy => { 
    
  client.guilds.cache.get(siy.id).commands.create(command.data.toJSON()).catch(err => {})
    }) 
}
log("Slash (/) komutları yüklendi.")

})


client.on("message", m => {
  if (m.channel.id !== "948603630724980812") { //buraya o kanalın ID'si yazılacak.
    return;
  }
  if (m.author.id === m.guild.ownerID) return;
  if (m.attachments.size < 1) {
    m.delete();
  }
});


client.on('messageCreate', async message => {
  const küfürrol = message.guild.roles.cache.find(role => role.id === '949720011407245353');
	const cdb = require("orio.db") //gerekli modül
	if(message.guild){
	  const data1 = cdb.get("cd1."+message.guild.id)
	  const data2 = cdb.get("cd2."+message.channel.id+message.guild.id)
	  
	  if(data1){
	  const blacklist = ["ag","ağzına sıçayım","ahmak","allahını","allahsız","am","amarım","ambiti","am biti","amcığı", "amcığın",  "amcığını","amcığınızı","amcık","amcık hoşafı","amcıklama","amcıklandı","amcik","amck","amckl","amcklama","amcklaryla",
"amckta","amcktan","amcuk","amık","amına","amınako","amına koy","amına koyarım","amına koyayım","amınakoyim","amına koyyim","amına s","amına sikem","amına sokam","amın feryadı","amını","amını s","amın oglu","amınoğlu","amın oğlu","amısına",
"amısını","amina","amina g","amina k","aminako","aminakoyarim","amina koyarim","amina koyayım","amina koyayim","aminakoyim","aminda","amindan","amindayken","amini","aminiyarraaniskiim","aminoglu","amin oglu","amiyum","amk","amkafa","amk çocuğu",
"amlarnzn","amlı","amm","ammak","ammna","amn","amna","amnda","amndaki","amngtn","amnn","amona","amq","amsız","amsiz","amsz","amteri","amugaa","amuğa","amuna","ana","anaaann","anal","analarn","anam","anamla","anan","anana","anandan","ananı","ananı",
"ananın","ananın am","ananın amı","ananın dölü","ananınki","ananısikerim","ananı sikerim","ananısikeyim","ananı sikeyim","ananızın","ananızın am","anani","ananin","ananisikerim","anani sikerim","ananisikeyim","anani sikeyim","anann","ananz","anas",
"anasını","anasının am","anası orospu","anasi","anasinin","anay","anayin","angut","anneni","annenin","annesiz","anuna","aptal","aq","a.q","a.q.","aq.","ass","atkafası","atmık","attırdığım","attrrm","auzlu","avrat","ayklarmalrmsikerim","azdım","azdır",
"azdırıcı","babaannesi kaşar","babanı","babanın","babani","babası pezevenk","bacağına sıçayım","bacına","bacını","bacının","bacini","bacn","bacndan","bacy","bastard","basur","beyinsiz","bızır","bitch","biting","bok","boka","bokbok","bokça","bokhu",
"bokkkumu","boklar","boktan","boku","bokubokuna","bokum","bombok","boner","bosalmak","boşalmak","cenabet","cibiliyetsiz","cibilliyetini","cibilliyetsiz","cif","daltassak","dalyarak","dalyarrak","dangalak","dassagi","diktim","dildo","dingil","dingilini",
"dinsiz","dkerim","domal","domalan","domaldı","domaldın","domalık","domalıyor","domalmak","domalmış","domalsın","domalt","domaltarak","domaltıp","domaltır","domaltırım","domaltip","domaltmak","dölü","dönek","düdük","eben","ebeni","ebenin","ebeninki","ebleh",
"fahise","sikcem",
"fahişe",
"feriştah",
"ferre",
"fuck",
"fucker",
"fuckin",
"fucking",
"gavad",
"gavat",
"geber",
"geberik",
"gebermek",
"gebermiş",
"gebertir",
"gerızekalı",
"gerizekalı",
"gerizekali",
"gerzek",
"giberim",
"giberler",
"gibis",
"gibiş",
"gibmek",
"gibtiler",
"goddamn",
"godoş",
"godumun",
"gotelek",
"gotlalesi",
"gotlu",
"gotten",
"gotundeki",
"gotunden",
"gotune",
"gotunu",
"gotveren",
"goyiim",
"goyum",
"goyuyim",
"goyyim",
"göt",
"göt deliği",
"götelek",
"göt herif",
"götlalesi",
"götlek",
"götoğlanı",
"göt oğlanı",
"götoş",
"götten",
"götü",
"götün",
"götüne",
"götünekoyim",
"götüne koyim",
"götünü",
"götveren",
"göt veren",
"göt verir",
"gtelek",
"gtn",
"gtnde",
"gtnden",
"gtne",
"gtten",
"gtveren",
"hasiktir",
"hassikome",
"hassiktir",
"has siktir",
"hassittir",
"haysiyetsiz",
"hayvan herif",
"hoşafı",
"hödük",
"hsktr",
"huur",
"ıbnelık",
"ibina",
"ibine",
"ibinenin",
"ibne",
"ibnedir",
"ibneleri",
"ibnelik",
"ibnelri",
"ibneni",
"ibnenin",
"ibnerator",
"ibnesi",
"idiot",
"idiyot",
"imansz",
"ipne",
"iserim",
"işerim",
"itoğlu it",
"kafam girsin",
"kafasız",
"kafasiz",
"kahpe",
"kahpenin",
"kahpenin feryadı",
"kaka",
"kaltak",
"kancık",
"kancik",
"kappe",
"karhane",
"kaşar",
"kavat",
"kavatn",
"kaypak",
"kayyum",
"kerane",
"kerhane",
"kerhanelerde",
"kevase",
"kevaşe",
"kevvase",
"koca göt",
"koduğmun",
"koduğmunun",
"kodumun",
"kodumunun",
"koduumun",
"koyarm",
"koyayım",
"koyiim",
"koyiiym",
"koyim",
"koyum",
"koyyim",
"krar",
"kukudaym",
"laciye boyadım",
"lavuk",
"liboş",
"madafaka",
"mal",
"malafat",
"malak",
"manyak",
"mcik",
"meme",
"memelerini",
"mezveleli",
"minaamcık",
"mincikliyim",
"mna",
"monakkoluyum",
"motherfucker",
"mudik",
"oc",
"ocuu",
"ocuun",
"OÇ",
"oç",
"o. çocuğu",
"oğlan",
"oğlancı",
"oğlu it",
"orosbucocuu",
"orospu",
"orospucouguv",
"orospu cocugu",
"orospu çoc",
"orospuçocuğu",
"orospu çocuğu",
"orospu çocuğudur",
"orospu çocukları",
"orospudur",
"orospular",
"orospunun",
"orospunun evladı",
"orospuydu",
"orospuyuz",
"orostoban",
"orostopol",
"orrospu",
"oruspu",
"oruspuçocuğu",
"oruspu çocuğu",
"osbir",
"ossurduum",
"ossurmak",
"ossuruk",
"osur",
"osurduu",
"osuruk",
"osururum",
"otuzbir",
"öküz",
"öşex",
"patlak zar",
"penis",
"pezevek",
"pezeven",
"pezeveng",
"pezevengi",
"pezevengin evladı",
"pezevenk",
"pezo",
"pic",
"pici",
"picler",
"piç",
"piçin oğlu",
"piç kurusu",
"piçler",
"pipi",
"pipiş",
"pisliktir",
"porno",
"pussy",
"puşt",
"puşttur",
"rahminde",
"revizyonist",
"s1kerim",
"s1kerm",
"s1krm",
"sakso",
"saksofon",
"salaak",
"salak",
"saxo",
"sekis",
"serefsiz",
"sevgi koyarım",
"sevişelim",
"sexs",
"sıçarım",
"sıçtığım",
"sıecem",
"sicarsin",
"sie",
"sik",
"sikdi",
"sikdiğim",
"sike",
"sikecem",
"sikem",
"siken",
"sikenin",
"siker",
"sikerim",
"sikerler",
"sikersin",
"sikertir",
"sikertmek",
"sikesen",
"sikesicenin",
"sikey",
"sikeydim",
"sikeyim",
"sikeym",
"siki",
"sikicem",
"sikici",
"sikien",
"sikienler",
"sikiiim",
"sikiiimmm",
"sikiim",
"sikiir",
"sikiirken",
"sikik",
"sikil",
"sikildiini",
"sikilesice",
"sikilmi",
"sikilmie",
"sikilmis",
"sikilmiş",
"sikilsin",
"sikim",
"sikimde",
"sikimden",
"sikime",
"sikimi",
"sikimiin",
"sikimin",
"sikimle",
"sikimsonik",
"sikimtrak",
"sikin",
"sikinde",
"sikinden",
"sikine",
"sikini",
"sikip",
"sikis",
"sikisek",
"sikisen",
"sikish",
"sikismis",
"sikiş",
"sikişen",
"sikişme",
"sikitiin",
"sikiyim",
"sikiym",
"sikiyorum",
"sikkim",
"sikko",
"sikleri",
"sikleriii",
"sikli",
"sikm",
"sikmek",
"sikmem",
"sikmiler",
"sikmisligim",
"siksem",
"sikseydin",
"sikseyidin",
"siksin",
"siksinbayav",
"siksinler",
"siksiz",
"siksok",
"siksz",
"sikt",
"sikti",
"siktigimin",
"siktigiminin",
"siktiğim",
"siktiğimin",
"siktiğiminin",
"siktii",
"siktiim",
"siktiimin",
"siktiiminin",
"siktiler",
"siktimv",
"siktim",
"siktimin",
"siktiminin",
"siktir",
"siktir et",
"siktirgit",
"siktir git",
"siktirir",
"siktiririm",
"siktiriyor",
"siktir lan",
"siktirolgit",
"siktir ol git",
"sittimin",
"sittir",
"skcem",
"skecem",
"skem",
"sker",
"skerim",
"skerm",
"skeyim",
"skiim",
"skik",
"skim",
"skime",
"skmek",
"sksin",
"sksn",
"sksz",
"sktiimin",
"sktrr",
"skyim",
"slaleni",
"sokam",
"sokarım",
"sokarim",
"sokarm",
"sokarmkoduumun",
"sokayım",
"sokaym",
"sokiim",
"soktuğumunun",
"sokuk",
"sokum",
"sokuş",
"sokuyum",
"soxum",
"sulaleni",
"sülaleni",
"sülalenizi",
"sürtük",
"şerefsiz",
"şıllık",
"taaklarn",
"taaklarna",
"tarrakimin",
"tasak",
"tassak",
"taşak",
"taşşak",
"tipini s.k",
"tipinizi s.keyim",
"tiyniyat",
"toplarm",
"topsun",
"totoş",
"vajina",
"vajinanı",
"veled",
"veledizina",
"veled i zina",
"verdiimin",
"weled",
"weledizina",
"whore",
"xikeyim",
"yaaraaa",
"yalama",
"yalarım",
"yalarun",
"yaraaam",
"yarak",
"yaraksız",
"yaraktr",
"yaram",
"yaraminbasi",
"yaramn",
"yararmorospunun",
"yarra",
"yarraaaa",
"yarraak",
"yarraam",
"yarraamı",
"yarragi",
"yarragimi",
"yarragina",
"yarragindan",
"yarragm",
"yarrağ",
"yarrağım",
"yarrağımı",
"yarraimin",
"yarrak",
"yarram",
"yarramin",
"yarraminbaşı",
"yarramn",
"yarran",
"yarrana",
"yarrrak",
"yavak",
"yavş",
"yavşak",
"yavşaktır",
"yavuşak",
"yılışık",
"yilisik",
"yogurtlayam",
"yoğurtlayam",
"yrrak",
"zıkkımım",
"zibidi",
"zigsin",
"zikeyim",
"zikiiim",
"zikiim",
"zikik",
"zikim",
"ziksiiin",
"ziksiin",
"zulliyetini",
"zviyetini","abaza","abazan","aq","ağzınasıçayım","ahmak","am","amarım","ambiti","ambiti","amcığı","amcığın","amcığını","amcığınızı","amcık","amcıkhoşafı","amcıklama","amcıklandı","amcik","amck","amckl","amcklama","amcklaryla","amckta","amcktan","amcuk","amık","amına","amınako","amınakoy","amınakoyarım","amınakoyayım","amınakoyim","amınakoyyim","amınas","amınasikem","amınasokam","amınferyadı","amını","amınıs","amınoglu","amınoğlu","amınoğli","amısına","amısını","amina","aminakoyarim","aminakoyayım","aminakoyayim","aminakoyim","aminda","amindan","amindayken","amini","aminiyarraaniskiim","aminoglu","aminoglu","amiyum","amk","amkafa","amkçocuğu","amlarnzn","amlı","amm","amna","amnda","amndaki","amngtn","amnn","amq","amsız","amsiz","amuna","ana","anaaann","anal","anan","anana","anandan","ananı","ananı","ananın","ananınam","ananınamı","ananındölü","ananınki","ananısikerim","ananısikerim","ananısikeyim","ananısikeyim","ananızın","ananızınam","anani","ananin","ananisikerim","ananisikerim","ananisikeyim","ananisikeyim","anann","ananz","anas","anasını","anasınınam","anasıorospu","anasi","anasinin","angut","anneni","annenin","annesiz","aptal","aq","a.q","a.q.","aq.","atkafası","atmık","avrat","babaannesikaşar","babanı","babanın","babani","babasıpezevenk","bacına","bacını","bacının","bacini","bacn","bacndan","bitch","bok","boka","bokbok","bokça","bokkkumu","boklar","boktan","boku","bokubokuna","bokum","bombok","boner","bosalmak","boşalmak","çük","dallama","daltassak","dalyarak","dalyarrak","dangalak","dassagi","diktim","dildo","dingil","dingilini","dinsiz","dkerim","domal","domalan","domaldı","domaldın","domalık","domalıyor","domalmak","domalmış","domalsın","domalt","domaltarak","domaltıp","domaltır","domaltırım","domaltip","domaltmak","dölü","eben","ebeni","ebenin","ebeninki","ecdadını","ecdadini","embesil","fahise","fahişe","feriştah","ferre","fuck","fucker","fuckin","fucking","gavad","gavat","geber","geberik","gebermek","gebermiş","gebertir","gerızekalı","gerizekalı","gerizekali","gerzek","gotlalesi","gotlu","gotten","gotundeki","gotunden","gotune","gotunu","gotveren","göt","götdeliği","götherif","götlalesi","götlek","götoğlanı","götoğlanı","götoş","götten","götü","götün","götüne","götünekoyim","götünekoyim","götünü","götveren","götveren","götverir","gtveren","hasiktir","hassikome","hassiktir","hassiktir","hassittir","ibine","ibinenin","ibne","ibnedir","ibneleri","ibnelik","ibnelri","ibneni","ibnenin","ibnesi","ipne","itoğluit","kahpe","kahpenin","kaka","kaltak","kancık","kancik","kappe","kavat","kavatn","kocagöt","koduğmunun","kodumun","kodumunun","koduumun","mal","malafat","malak","manyak","meme","memelerini","oc","ocuu","ocuun","0Ç","o.çocuğu","orosbucocuu","orospu","orospucocugu","orospuçoc","orospuçocuğu","orospuçocuğudur","orospuçocukları","orospudur","orospular","orospunun","orospununevladı","orospuydu","orospuyuz","orrospu","oruspu","oruspuçocuğu","oruspuçocuğu","osbir","öküz","penis","pezevek","pezeven","pezeveng","pezevengi","pezevenginevladı","pezevenk","pezo","pic","pici","picler","piç","piçinoğlu","piçkurusu","piçler","pipi","pisliktir","porno","pussy","puşt","puşttur","s1kerim","s1kerm","s1krm","sakso","salaak","salak","serefsiz","sexs","sıçarım","sıçtığım","sıkecem","sicarsin","sie","sik","sikdi","sikdiğim","sike","sikecem","sikem","siken","sikenin","siker","sikerim","sikerler","sikersin","sikertir","sikertmek","sikesen","sikey","sikeydim","sikeyim","sikeym","siki","sikicem","sikici","sikien","sikienler","sikiiim","sikiiimmm","sikiim","sikiir","sikiirken","sikik","sikil","sikildiini","sikilesice","sikilmi","sikilmie","sikilmis","sikilmiş","sikilsin","sikim","sikimde","sikimden","sikime","sikimi","sikimiin","sikimin","sikimle","sikimsonik","sikimtrak","sikin","sikinde","sikinden","sikine","sikini","sikip","sikis","sikisek","sikisen","sikish","sikismis","sikiş","sikişen","sikişme","sikitiin","sikiyim","sikiym","sikiyorum","sikkim","sikleri","sikleriii","sikli","sikm","sikmek","sikmem","sikmiler","sikmisligim","siksem","sikseydin","sikseyidin","siksin","siksinler","siksiz","siksok","siksz","sikti","siktigimin","siktigiminin","siktiğim","siktiğimin","siktiğiminin","siktii","siktiim","siktiimin","siktiiminin","siktiler","siktim","siktimin","siktiminin","siktir","siktiret","siktirgit","siktirgit","siktirir","siktiririm","siktiriyor","siktirlan","siktirolgit","sittimin","skcem","skecem","skem","sker","skerim","skerm","skeyim","skiim","skik","skim","skime","skmek","sksin","sksn","sksz","sktiimin","sktrr","skyim","slaleni","sokam","sokarım","sokarim","sokarm","sokarmkoduumun","sokayım","sokaym","sokiim","soktuğumunun","sokuk","sokum","sokuş","sokuyum","soxum","sulaleni","sülalenizi","tasak","tassak","taşak","taşşak","s.k","s.keyim","vajina","vajinanı","xikeyim","yaaraaa","yalarım","yalarun","orospi","orospinin","orospının","orospı","yaraaam","yarak","yaraksız","yaraktr","yaram","yaraminbasi","yaramn","yararmorospunun","yarra","yarraaaa","yarraak","yarraam","yarraamı","yarragi","yarragimi","yarragina","yarragindan","yarragm","yarrağ","yarrağım","yarrağımı","yarraimin","yarrak","yarram","yarramin","yarraminbaşı","yarramn","yarran","yarrana","yarrrak","yavak","yavş","yavşak","yavşaktır","yrrak","zigsin","zikeyim","zikiiim","zikiim","zikik","zikim","ziksiin","ağzına","am","mk","amcık","amcıkağız","amcıkları","amık","amın","amına","amınakoyim","amınoğlu","amina","amini","amk","amq","anan","ananı","ananızı","ananizi","aminizi","aminii","avradını","avradini","anasını","b.k","bok","boktan","boşluk","dalyarak","dasak","dassak","daşak","daşşak","daşşaksız","durum","ensest","erotik","fahişe","fuck","g*t","g*tü","g*tün","g*tüne","g.t","gavat","gay","gerızekalıdır","gerizekalı","gerizekalıdır","got","gotunu","gotuze","göt","götü","götüne","götünü","götünüze","götüyle","götveren","götvern","guat","hasiktir","hasiktr","hastir","i.ne","ibne","ibneler","ibneliği","ipne","ipneler","it","iti","itler","kavat","kıç","kıro","kromusunuz","kromusunuz","lezle","lezler","nah","o.ç","oç.","okuz","orosbu","orospu","orospucocugu","orospular","otusbir","otuzbir","öküz","penis","pezevenk","pezevenkler","pezo","pic","piç","piçi","piçinin","piçler","pis","pok","pokunu","porn","porno","puşt","sex","s.tir","sakso","salak","sanane","sanane","sçkik","seks","serefsiz","serefsz","serefszler","sex","sıçmak","sıkerım","sıkm","sıktır","si.çmak","sicmak","sicti","sik","sikenin","siker","sikerim","sikerler","sikert","sikertirler","sikertmek","sikeyim","sikicem","sikiim","sikik","sikim","sikime","sikimi","sikiş","sikişken","sikişmek","sikm","sikmeyi","siksinler","siktiğim","siktimin","siktin","siktirgit","siktir","siktirgit","siktirsin","siqem","skiym","skm","skrm","sktim","sktir","sktirsin","sktr","sktroradan","sktrsn","snane","sokacak","sokarim","sokayım","sülaleni","şerefsiz","şerefsizler","şerefsizlerin","şerefsizlik","tasak","tassak","taşak","taşşak","travesti","yarak","yark","yarrağım","yarrak","yarramın","yarrk","yavşak","yrak","yrk","ebenin","ezik","o.ç.","orospu","öküz","pezevenk","piç","puşt","salak","salak","serefsiz","sik","sperm","bok","aq","a.q.","amk","am","amına","ebenin","ezik","fahişe","gavat","gavurundölü","gerizekalı","göte","götü","götüne","götünü","lan","mal","o.ç.","orospu","pezevenk","piç","puşt","salak","salak","serefsiz","sik","sikkırığı","sikerler","sikertmek","sikik","sikilmiş","siktir","sperm","taşak","totoş","yarak","yarrak","bok","aq","a.q.","amk","am","ebenin","fahişe","gavat","gerizakalı","gerizekalı","göt","göte","götü","götüne","götsün","piçsin","götsünüz","piçsiniz","götünüze","kıçınız","kıçınıza","götünü","hayvan","ibne","ipne","kahpe","kaltak","lan","mal","o.c","oc","manyak","o.ç.","oç","orospu","öküz","pezevenk","piç","puşt","salak","serefsiz","sik","sikkırığı","sikerler","sikertmek","sikik","sikiim","siktim","siki","sikilmiş","siktir","siktir","sperm","şerefsiz","taşak","totoş","yarak","yarrak","yosma","aq","a.q.","amk","amına","amınakoyim","amina","ammına","amna","sikim","sikiym","sikeyim","siktr","kodumun","amık","sikem","sikim","sikiym","s.iktm","s.ikerim","s.ktir","amg","am.k","a.mk","amık","rakı","rak","oruspu","oc","ananın","ananınki","bacının","bacını","babanın","sike","skim","skem","amcık","şerefsiz","piç","piçinoğlu","amcıkhoşafı","amınasokam","amkçocuğu","amınferyadı","amınoglu","piçler","sikerim","sikeyim","siktiğim","siktiğimin","amını","amına","amınoğlu","amk","ipne","ibne","serefsiz","şerefsiz","piç","piçkurusu","götün","götoş","yarrak","amcik","sıçarım","sıçtığım","aq","a.q","a.q.","aq.","a.g.","ag.","amınak","aminak","amınag","aminag","amınıs","amınas","ananı","babanı","anani","babani","bacını","bacini","ecdadını","ecdadini","sikeyim","sulaleni","sülaleni","dallama","dangalak","aptal","salak","gerızekalı","gerizekali","öküz","angut","dalyarak","sikiyim","sikeyim","götüne","götünü","siktirgit","siktirgit","siktirolgit","siktirolgit","siktir","hasiktir","hassiktir","hassiktir","dalyarak","dalyarrak","kancık","kancik","kaltak","orospu","oruspu","fahişe","fahise","pezevenk","pezo","kocagöt","ambiti","götünekoyim","götünekoyim","amınakoyim","aminakoyim","amınak","aminakoyayım","aminakoyayim","amınakoyarım","aminakoyarim","aminakoyarim","ananısikeyim","ananisikeyim","ananısikeyim","ananisikeyim","ananisikerim","ananısikerim","ananisikerim","ananısikerim","orospucocugu","oruspucocu","amk","amq","sikik","götveren","götveren","amınoğlu","aminoglu","amınoglu","gavat","kavat","anneni","annenin","ananın","ananin","dalyarak","sikik","amcık","siktir","piç","pic","sie","yarram","göt","meme","dildo","skcem","skerm","skerim","skecem","orrospu","annesiz","kahpe","kappe","yarak","yaram","dalaksız","yaraksız","amlı","s1kerim","s1kerm","s1krm","sikim","orospuçocukları", "oç","abaza","abazan","aq","ağzınasıçayım","ahmak","am","amarım","ambiti","ambiti","amcığı","amcığın","amcığını","amcığınızı","amcık","amcıkhoşafı","amcıklama","amcıklandı","amcik","amck","amckl","amcklama","amcklaryla","amckta","amcktan","amcuk","amık","amına","amınako","amınakoy","amınakoyarım","amınakoyayım","amınakoyim","amınakoyyim","amınas","amınasikem","amınasokam","amınferyadı","amını","amınıs","amınoglu","amınoğlu","amınoğli","amısına","amısını","amina","aminakoyarim","aminakoyayım","aminakoyayim","aminakoyim","aminda","amindan","amindayken","amini","aminiyarraaniskiim","aminoglu","aminoglu","amiyum","amk","amkafa","amkçocuğu","amlarnzn","amlı","amm","amna","amnda","amndaki","amngtn","amnn","amq","amsız","amsiz","amuna","ana","anaaann","anal","anan","anana","anandan","ananı","ananı","ananın","ananınam","ananınamı","ananındölü","ananınki","ananısikerim","ananısikerim","ananısikeyim","ananısikeyim","ananızın","ananızınam","anani","ananin","ananisikerim","ananisikerim","ananisikeyim","ananisikeyim","anann","ananz","anas","anasını","anasınınam","anasıorospu","anasi","anasinin","angut","anneni","annenin","annesiz","aptal","aq","a.q","a.q.","aq.","atkafası","atmık","avrat","babaannesikaşar","babanı","babanın","babani","babasıpezevenk","bacına","bacını","bacının","bacini","bacn","bacndan","bitch","bok","boka","bokbok","bokça","bokkkumu","boklar","boktan","boku","bokubokuna","bokum","bombok","boner","bosalmak","boşalmak","çük","dallama","daltassak","dalyarak","dalyarrak","dangalak","dassagi","diktim","dildo","dingil","dingilini","dinsiz","dkerim","domal","domalan","domaldı","domaldın","domalık","domalıyor","domalmak","domalmış","domalsın","domalt","domaltarak","domaltıp","domaltır","domaltırım","domaltip","domaltmak","dölü","eben","ebeni","ebenin","ebeninki","ecdadını","ecdadini","embesil","fahise","fahişe","feriştah","ferre","fuck","fucker","fuckin","fucking","gavad","gavat","geber","geberik","gebermek","gebermiş","gebertir","gerızekalı","gerizekalı","gerizekali","gerzek","gotlalesi","gotlu","gotten","gotundeki","gotunden","gotune","gotunu","gotveren","göt","götdeliği","götherif","götlalesi","götlek","götoğlanı","götoğlanı","götoş","götten","götü","götün","götüne","götünekoyim","götünekoyim","götünü","götveren","götveren","götverir","gtveren","hasiktir","hassikome","hassiktir","hassiktir","hassittir","ibine","ibinenin","ibne","ibnedir","ibneleri","ibnelik","ibnelri","ibneni","ibnenin","ibnesi","ipne","itoğluit","kahpe","kahpenin","kaka","kaltak","kancık","kancik","kappe","kavat","kavatn","kocagöt","koduğmunun","kodumun","kodumunun","koduumun","mal","malafat","malak","manyak","meme","memelerini","oc","ocuu","ocuun","0Ç","o.çocuğu","orosbucocuu","orospu","orospucocugu","orospuçoc","orospuçocuğu","orospuçocuğudur","orospuçocukları","orospudur","orospular","orospunun","orospununevladı","orospuydu","orospuyuz","orrospu","oruspu","oruspuçocuğu","oruspuçocuğu","osbir","öküz","penis","pezevek","pezeven","pezeveng","pezevengi","pezevenginevladı","pezevenk","pezo","pic","pici","picler","piç","piçinoğlu","piçkurusu","piçler","pipi","pisliktir","porno","pussy","puşt","puşttur","s1kerim","s1kerm","s1krm","sakso","salaak","salak","serefsiz","sexs","sıçarım","sıçtığım","sıkecem","sicarsin","sie","sik","sikdi","sikdiğim","sike","sikecem","sikem","siken","sikenin","siker","sikerim","sikerler","sikersin","sikertir","sikertmek","sikesen","sikey","sikeydim","sikeyim","sikeym","siki","sikicem","sikici","sikien","sikienler","sikiiim","sikiiimmm","sikiim","sikiir","sikiirken","sikik","sikil","sikildiini","sikilesice","sikilmi","sikilmie","sikilmis","sikilmiş","sikilsin","sikim","sikimde","sikimden","sikime","sikimi","sikimiin","sikimin","sikimle","sikimsonik","sikimtrak","sikin","sikinde","sikinden","sikine","sikini","sikip","sikis","sikisek","sikisen","sikish","sikismis","sikiş","sikişen","sikişme","sikitiin","sikiyim","sikiym","sikiyorum","sikkim","sikleri","sikleriii","sikli","sikm","sikmek","sikmem","sikmiler","sikmisligim","siksem","sikseydin","sikseyidin","siksin","siksinler","siksiz","siksok","siksz","sikti","siktigimin","siktigiminin","siktiğim","siktiğimin","siktiğiminin","siktii","siktiim","siktiimin","siktiiminin","siktiler","siktim","siktimin","siktiminin","siktir","siktiret","siktirgit","siktirgit","siktirir","siktiririm","siktiriyor","siktirlan","siktirolgit","sittimin","skcem","skecem","skem","sker","skerim","skerm","skeyim","skiim","skik","skim","skime","skmek","sksin","sksn","sksz","sktiimin","sktrr","skyim","slaleni","sokam","sokarım","sokarim","sokarm","sokarmkoduumun","sokayım","sokaym","sokiim","soktuğumunun","sokuk","sokum","sokuş","sokuyum","soxum","sulaleni","sülalenizi","tasak","tassak","taşak","taşşak","s.k","s.keyim","vajina","vajinanı","xikeyim","yaaraaa","yalarım","yalarun","orospi","orospinin","orospının","orospı","yaraaam","yarak","yaraksız","yaraktr","yaram","yaraminbasi","yaramn","yararmorospunun","yarra","yarraaaa","yarraak","yarraam","yarraamı","yarragi","yarragimi","yarragina","yarragindan","yarragm","yarrağ","yarrağım","yarrağımı","yarraimin","yarrak","yarram","yarramin","yarraminbaşı","yarramn","yarran","yarrana","yarrrak","yavak","yavş","yavşak","yavşaktır","yrrak","zigsin","zikeyim","zikiiim","zikiim","zikik","zikim","ziksiin","ağzına","am","mk","amcık","amcıkağız","amcıkları","amık","amın","amına","amınakoyim","amınoğlu","amina","amini","amk","amq","anan","ananı","ananızı","ananizi","aminizi","aminii","avradını","avradini","anasını","b.k","bok","boktan","boşluk","dalyarak","dasak","dassak","daşak","daşşak","daşşaksız","durum","ensest","erotik","fahişe","fuck","g*t","g*tü","g*tün","g*tüne","g.t","gavat","gay","gerızekalıdır","gerizekalı","gerizekalıdır","got","gotunu","gotuze","göt","götü","götüne","götünü","götünüze","götüyle","götveren","götvern","guat","hasiktir","hasiktr","hastir","i.ne","ibne","ibneler","ibneliği","ipne","ipneler","it","iti","itler","kavat","kıç","kıro","kromusunuz","kromusunuz","lezle","lezler","nah","o.ç","oç.","okuz","orosbu","orospu","orospucocugu","orospular","otusbir","otuzbir","öküz","penis","pezevenk","pezevenkler","pezo","pic","piç","piçi","piçinin","piçler","pis","pok","pokunu","porn","porno","puşt","sex","s.tir","sakso","salak","sanane","sanane","sçkik","seks","serefsiz","serefsz","serefszler","sex","sıçmak","sıkerım","sıkm","sıktır","si.çmak","sicmak","sicti","sik","sikenin","siker","sikerim","sikerler","sikert","sikertirler","sikertmek","sikeyim","sikicem","sikiim","sikik","sikim","sikime","sikimi","sikiş","sikişken","sikişmek","sikm","sikmeyi","siksinler","siktiğim","siktimin","siktin","siktirgit","siktir","siktirgit","siktirsin","siqem","skiym","skm","skrm","sktim","sktir","sktirsin","sktr","sktroradan","sktrsn","snane","sokacak","sokarim","sokayım","sülaleni","şerefsiz","şerefsizler","şerefsizlerin","şerefsizlik","tasak","tassak","taşak","taşşak","travesti","yarak","yark","yarrağım","yarrak","yarramın","yarrk","yavşak","yrak","yrk","ebenin","ezik","o.ç.","orospu","öküz","pezevenk","piç","puşt","salak","salak","serefsiz","sik","sperm","bok","aq","a.q.","amk","am","amına","ebenin","ezik","fahişe","gavat","gavurundölü","gerizekalı","göte","götü","götüne","götünü","lan","mal","o.ç.","orospu","pezevenk","piç","puşt","salak","salak","serefsiz","sik","sikkırığı","sikerler","sikertmek","sikik","sikilmiş","siktir","sperm","taşak","totoş","yarak","yarrak","bok","aq","a.q.","amk","am","ebenin","fahişe","gavat","gerizakalı","gerizekalı","göt","göte","götü","götüne","götsün","piçsin","götsünüz","piçsiniz","götünüze","kıçınız","kıçınıza","götünü","hayvan","ibne","ipne","kahpe","kaltak","lan","mal","o.c","oc","manyak","o.ç.","oç","orospu","öküz","pezevenk","piç","puşt","salak","serefsiz","sik","sikkırığı","sikerler","sikertmek","sikik","sikiim","siktim","siki","sikilmiş","siktir","siktir","sperm","şerefsiz","taşak","totoş","yarak","yarrak","yosma","aq","a.q.","amk","amına","amınakoyim","amina","ammına","amna","sikim","sikiym","sikeyim","siktr","kodumun","amık","sikem","sikim","sikiym","s.iktm","s.ikerim","s.ktir","amg","am.k","a.mk","amık","rakı","rak","oruspu","oc","ananın","ananınki","bacının","bacını","babanın","sike","skim","skem","amcık","şerefsiz","piç","piçinoğlu","amcıkhoşafı","amınasokam","amkçocuğu","amınferyadı","amınoglu","piçler","sikerim","sikeyim","siktiğim","siktiğimin","amını","amına","amınoğlu","amk","ipne","ibne","serefsiz","şerefsiz","piç","piçkurusu","götün","götoş","yarrak","amcik","sıçarım","sıçtığım","aq","a.q","a.q.","aq.","a.g.","ag.","amınak","aminak","amınag","aminag","amınıs","amınas","ananı","babanı","anani","babani","bacını","bacini","ecdadını","ecdadini","sikeyim","sulaleni","sülaleni","dallama","dangalak","aptal","salak","gerızekalı","gerizekali","öküz","angut","dalyarak","sikiyim","sikeyim","götüne","götünü","siktirgit","siktirgit","siktirolgit","siktirolgit","siktir","hasiktir","hassiktir","hassiktir","dalyarak","dalyarrak","kancık","kancik","kaltak","orospu","oruspu","fahişe","fahise","pezevenk","pezo","kocagöt","ambiti","götünekoyim","götünekoyim","amınakoyim","aminakoyim","amınak","aminakoyayım","aminakoyayim","amınakoyarım","aminakoyarim","aminakoyarim","ananısikeyim","ananisikeyim","ananısikeyim","ananisikeyim","ananisikerim","ananısikerim","ananisikerim","ananısikerim","orospucocugu","oruspucocu","amk","amq","sikik","götveren","götveren","amınoğlu","aminoglu","amınoglu","gavat","kavat","anneni","annenin","ananın","ananin","dalyarak","sikik","amcık","siktir","piç","pic","sie","yarram","göt","meme","dildo","skcem","skerm","skerim","skecem","orrospu","annesiz","kahpe","kappe","yarak","yaram","dalaksız","yaraksız","amlı","s1kerim","s1kerm","s1krm","sikim","orospuçocukları", "oç",    
"aaq","amk","a.m.k","am","a.m","m.k","mk","orosbu çocugu","orospu çocugu","o.ç","oç","oc","o.c","orosbu","orospu","veledi zina","sikerim","sıkerım","s.i.k.e.r.i.m","s.ı.k.e.r.ı.m","piç","pıc","p.i.ç","p.ı.c","orosbu evladı","orospu evladı","amına koyayım","babanı sikim","fuck", "FUCK", "SHIT", "shit", "PORN", "porn", "xnxx", "XNXX","amk","aq","sik","siktir","a q","a mk","oç","oruspu","orusbu","anan","sikerler","sikerim","s1kerler","s1kerim","s1ker1m","wtf","AMK","AQ","ORUSBU","ORUSPU","SİKERLER","GAY","GÖT","ANAN","PORNHUB.COM","pornhub.com","brazzers","BRAZZERS","ANANI","ananı","ananı sikerim","ananı sik","anamı sik","ANANI SİK","ANANI SİKERİM","şerefsiz","Şerefsiz","ŞEREFSİZ","orospu","orospu çocuğu","OC","Piç","PİÇ","yavşak","YAVŞAK","ibne","ipne","İBNE","İPNE","amına korum","pi.ç","piç"];
	
	  let content = message.content.split(' ');
	  orio.set("küfür", 0);
	  content.forEach(kelime => {
	  if(blacklist.some(küfür => küfür === kelime))  {
	  if(!message.member.permissions.has('BAN_MEMBERS')){
	  message.reply({content: "**Lütfen Küfür Etme!!**" }).catch(e => {})
    orio.add("küfür", 1);
	  message.delete().catch(e => {})
	  }
	  }
	  })
	  }
	
		if(!data1 && data2){
	  const blacklist = ["ag","ağzına sıçayım","ahmak","allahını","allahsız","am","amarım","ambiti","am biti","amcığı", "amcığın",  "amcığını","amcığınızı","amcık","amcık hoşafı","amcıklama","amcıklandı","amcik","amck","amckl","amcklama","amcklaryla",
"amckta","amcktan","amcuk","amık","amına","amınako","amına koy","amına koyarım","amına koyayım","amınakoyim","amına koyyim","amına s","amına sikem","amına sokam","amın feryadı","amını","amını s","amın oglu","amınoğlu","amın oğlu","amısına",
"amısını","amina","amina g","amina k","aminako","aminakoyarim","amina koyarim","amina koyayım","amina koyayim","aminakoyim","aminda","amindan","amindayken","amini","aminiyarraaniskiim","aminoglu","amin oglu","amiyum","amk","amkafa","amk çocuğu",
"amlarnzn","amlı","amm","ammak","ammna","amn","amna","amnda","amndaki","amngtn","amnn","amona","amq","amsız","amsiz","amsz","amteri","amugaa","amuğa","amuna","ana","anaaann","anal","analarn","anam","anamla","anan","anana","anandan","ananı","ananı",
"ananın","ananın am","ananın amı","ananın dölü","ananınki","ananısikerim","ananı sikerim","ananısikeyim","ananı sikeyim","ananızın","ananızın am","anani","ananin","ananisikerim","anani sikerim","ananisikeyim","anani sikeyim","anann","ananz","anas",
"anasını","anasının am","anası orospu","anasi","anasinin","anay","anayin","angut","anneni","annenin","annesiz","anuna","aptal","aq","a.q","a.q.","aq.","ass","atkafası","atmık","attırdığım","attrrm","auzlu","avrat","ayklarmalrmsikerim","azdım","azdır",
"azdırıcı","babaannesi kaşar","babanı","babanın","babani","babası pezevenk","bacağına sıçayım","bacına","bacını","bacının","bacini","bacn","bacndan","bacy","bastard","basur","beyinsiz","bızır","bitch","biting","bok","boka","bokbok","bokça","bokhu",
"bokkkumu","boklar","boktan","boku","bokubokuna","bokum","bombok","boner","bosalmak","boşalmak","cenabet","cibiliyetsiz","cibilliyetini","cibilliyetsiz","cif","daltassak","dalyarak","dalyarrak","dangalak","dassagi","diktim","dildo","dingil","dingilini",
"dinsiz","dkerim","domal","domalan","domaldı","domaldın","domalık","domalıyor","domalmak","domalmış","domalsın","domalt","domaltarak","domaltıp","domaltır","domaltırım","domaltip","domaltmak","dölü","dönek","düdük","eben","ebeni","ebenin","ebeninki","ebleh",
"fahise","sikcem",
"fahişe",
"feriştah",
"ferre",
"fuck",
"fucker",
"fuckin",
"fucking",
"gavad",
"gavat",
"geber",
"geberik",
"gebermek",
"gebermiş",
"gebertir",
"gerızekalı",
"gerizekalı",
"gerizekali",
"gerzek",
"giberim",
"giberler",
"gibis",
"gibiş",
"gibmek",
"gibtiler",
"goddamn",
"godoş",
"godumun",
"gotelek",
"gotlalesi",
"gotlu",
"gotten",
"gotundeki",
"gotunden",
"gotune",
"gotunu",
"gotveren",
"goyiim",
"goyum",
"goyuyim",
"goyyim",
"göt",
"göt deliği",
"götelek",
"göt herif",
"götlalesi",
"götlek",
"götoğlanı",
"göt oğlanı",
"götoş",
"götten",
"götü",
"götün",
"götüne",
"götünekoyim",
"götüne koyim",
"götünü",
"götveren",
"göt veren",
"göt verir",
"gtelek",
"gtn",
"gtnde",
"gtnden",
"gtne",
"gtten",
"gtveren",
"hasiktir",
"hassikome",
"hassiktir",
"has siktir",
"hassittir",
"haysiyetsiz",
"hayvan herif",
"hoşafı",
"hödük",
"hsktr",
"huur",
"ıbnelık",
"ibina",
"ibine",
"ibinenin",
"ibne",
"ibnedir",
"ibneleri",
"ibnelik",
"ibnelri",
"ibneni",
"ibnenin",
"ibnerator",
"ibnesi",
"idiot",
"idiyot",
"imansz",
"ipne",
"iserim",
"işerim",
"itoğlu it",
"kafam girsin",
"kafasız",
"kafasiz",
"kahpe",
"kahpenin",
"kahpenin feryadı",
"kaka",
"kaltak",
"kancık",
"kancik",
"kappe",
"karhane",
"kaşar",
"kavat",
"kavatn",
"kaypak",
"kayyum",
"kerane",
"kerhane",
"kerhanelerde",
"kevase",
"kevaşe",
"kevvase",
"koca göt",
"koduğmun",
"koduğmunun",
"kodumun",
"kodumunun",
"koduumun",
"koyarm",
"koyayım",
"koyiim",
"koyiiym",
"koyim",
"koyum",
"koyyim",
"krar",
"kukudaym",
"laciye boyadım",
"lavuk",
"liboş",
"madafaka",
"mal",
"malafat",
"malak",
"manyak",
"mcik",
"meme",
"memelerini",
"mezveleli",
"minaamcık",
"mincikliyim",
"mna",
"monakkoluyum",
"motherfucker",
"mudik",
"oc",
"ocuu",
"ocuun",
"OÇ",
"oç",
"o. çocuğu",
"oğlan",
"oğlancı",
"oğlu it",
"orosbucocuu",
"orospu",
"orospucouguv",
"orospu cocugu",
"orospu çoc",
"orospuçocuğu",
"orospu çocuğu",
"orospu çocuğudur",
"orospu çocukları",
"orospudur",
"orospular",
"orospunun",
"orospunun evladı",
"orospuydu",
"orospuyuz",
"orostoban",
"orostopol",
"orrospu",
"oruspu",
"oruspuçocuğu",
"oruspu çocuğu",
"osbir",
"ossurduum",
"ossurmak",
"ossuruk",
"osur",
"osurduu",
"osuruk",
"osururum",
"otuzbir",
"öküz",
"öşex",
"patlak zar",
"penis",
"pezevek",
"pezeven",
"pezeveng",
"pezevengi",
"pezevengin evladı",
"pezevenk",
"pezo",
"pic",
"pici",
"picler",
"piç",
"piçin oğlu",
"piç kurusu",
"piçler",
"pipi",
"pipiş",
"pisliktir",
"porno",
"pussy",
"puşt",
"puşttur",
"rahminde",
"revizyonist",
"s1kerim",
"s1kerm",
"s1krm",
"sakso",
"saksofon",
"salaak",
"salak",
"saxo",
"sekis",
"serefsiz",
"sevgi koyarım",
"sevişelim",
"sexs",
"sıçarım",
"sıçtığım",
"sıecem",
"sicarsin",
"sie",
"sik",
"sikdi",
"sikdiğim",
"sike",
"sikecem",
"sikem",
"siken",
"sikenin",
"siker",
"sikerim",
"sikerler",
"sikersin",
"sikertir",
"sikertmek",
"sikesen",
"sikesicenin",
"sikey",
"sikeydim",
"sikeyim",
"sikeym",
"siki",
"sikicem",
"sikici",
"sikien",
"sikienler",
"sikiiim",
"sikiiimmm",
"sikiim",
"sikiir",
"sikiirken",
"sikik",
"sikil",
"sikildiini",
"sikilesice",
"sikilmi",
"sikilmie",
"sikilmis",
"sikilmiş",
"sikilsin",
"sikim",
"sikimde",
"sikimden",
"sikime",
"sikimi",
"sikimiin",
"sikimin",
"sikimle",
"sikimsonik",
"sikimtrak",
"sikin",
"sikinde",
"sikinden",
"sikine",
"sikini",
"sikip",
"sikis",
"sikisek",
"sikisen",
"sikish",
"sikismis",
"sikiş",
"sikişen",
"sikişme",
"sikitiin",
"sikiyim",
"sikiym",
"sikiyorum",
"sikkim",
"sikko",
"sikleri",
"sikleriii",
"sikli",
"sikm",
"sikmek",
"sikmem",
"sikmiler",
"sikmisligim",
"siksem",
"sikseydin",
"sikseyidin",
"siksin",
"siksinbayav",
"siksinler",
"siksiz",
"siksok",
"siksz",
"sikt",
"sikti",
"siktigimin",
"siktigiminin",
"siktiğim",
"siktiğimin",
"siktiğiminin",
"siktii",
"siktiim",
"siktiimin",
"siktiiminin",
"siktiler",
"siktimv",
"siktim",
"siktimin",
"siktiminin",
"siktir",
"siktir et",
"siktirgit",
"siktir git",
"siktirir",
"siktiririm",
"siktiriyor",
"siktir lan",
"siktirolgit",
"siktir ol git",
"sittimin",
"sittir",
"skcem",
"skecem",
"skem",
"sker",
"skerim",
"skerm",
"skeyim",
"skiim",
"skik",
"skim",
"skime",
"skmek",
"sksin",
"sksn",
"sksz",
"sktiimin",
"sktrr",
"skyim",
"slaleni",
"sokam",
"sokarım",
"sokarim",
"sokarm",
"sokarmkoduumun",
"sokayım",
"sokaym",
"sokiim",
"soktuğumunun",
"sokuk",
"sokum",
"sokuş",
"sokuyum",
"soxum",
"sulaleni",
"sülaleni",
"sülalenizi",
"sürtük",
"şerefsiz",
"şıllık",
"taaklarn",
"taaklarna",
"tarrakimin",
"tasak",
"tassak",
"taşak",
"taşşak",
"tipini s.k",
"tipinizi s.keyim",
"tiyniyat",
"toplarm",
"topsun",
"totoş",
"vajina",
"vajinanı",
"veled",
"veledizina",
"veled i zina",
"verdiimin",
"weled",
"weledizina",
"whore",
"xikeyim",
"yaaraaa",
"yalama",
"yalarım",
"yalarun",
"yaraaam",
"yarak",
"yaraksız",
"yaraktr",
"yaram",
"yaraminbasi",
"yaramn",
"yararmorospunun",
"yarra",
"yarraaaa",
"yarraak",
"yarraam",
"yarraamı",
"yarragi",
"yarragimi",
"yarragina",
"yarragindan",
"yarragm",
"yarrağ",
"yarrağım",
"yarrağımı",
"yarraimin",
"yarrak",
"yarram",
"yarramin",
"yarraminbaşı",
"yarramn",
"yarran",
"yarrana",
"yarrrak",
"yavak",
"yavş",
"yavşak",
"yavşaktır",
"yavuşak",
"yılışık",
"yilisik",
"yogurtlayam",
"yoğurtlayam",
"yrrak",
"zıkkımım",
"zibidi",
"zigsin",
"zikeyim",
"zikiiim",
"zikiim",
"zikik",
"zikim",
"ziksiiin",
"ziksiin",
"zulliyetini",
"zviyetini","abaza","abazan","aq","ağzınasıçayım","ahmak","am","amarım","ambiti","ambiti","amcığı","amcığın","amcığını","amcığınızı","amcık","amcıkhoşafı","amcıklama","amcıklandı","amcik","amck","amckl","amcklama","amcklaryla","amckta","amcktan","amcuk","amık","amına","amınako","amınakoy","amınakoyarım","amınakoyayım","amınakoyim","amınakoyyim","amınas","amınasikem","amınasokam","amınferyadı","amını","amınıs","amınoglu","amınoğlu","amınoğli","amısına","amısını","amina","aminakoyarim","aminakoyayım","aminakoyayim","aminakoyim","aminda","amindan","amindayken","amini","aminiyarraaniskiim","aminoglu","aminoglu","amiyum","amk","amkafa","amkçocuğu","amlarnzn","amlı","amm","amna","amnda","amndaki","amngtn","amnn","amq","amsız","amsiz","amuna","ana","anaaann","anal","anan","anana","anandan","ananı","ananı","ananın","ananınam","ananınamı","ananındölü","ananınki","ananısikerim","ananısikerim","ananısikeyim","ananısikeyim","ananızın","ananızınam","anani","ananin","ananisikerim","ananisikerim","ananisikeyim","ananisikeyim","anann","ananz","anas","anasını","anasınınam","anasıorospu","anasi","anasinin","angut","anneni","annenin","annesiz","aptal","aq","a.q","a.q.","aq.","atkafası","atmık","avrat","babaannesikaşar","babanı","babanın","babani","babasıpezevenk","bacına","bacını","bacının","bacini","bacn","bacndan","bitch","bok","boka","bokbok","bokça","bokkkumu","boklar","boktan","boku","bokubokuna","bokum","bombok","boner","bosalmak","boşalmak","çük","dallama","daltassak","dalyarak","dalyarrak","dangalak","dassagi","diktim","dildo","dingil","dingilini","dinsiz","dkerim","domal","domalan","domaldı","domaldın","domalık","domalıyor","domalmak","domalmış","domalsın","domalt","domaltarak","domaltıp","domaltır","domaltırım","domaltip","domaltmak","dölü","eben","ebeni","ebenin","ebeninki","ecdadını","ecdadini","embesil","fahise","fahişe","feriştah","ferre","fuck","fucker","fuckin","fucking","gavad","gavat","geber","geberik","gebermek","gebermiş","gebertir","gerızekalı","gerizekalı","gerizekali","gerzek","gotlalesi","gotlu","gotten","gotundeki","gotunden","gotune","gotunu","gotveren","göt","götdeliği","götherif","götlalesi","götlek","götoğlanı","götoğlanı","götoş","götten","götü","götün","götüne","götünekoyim","götünekoyim","götünü","götveren","götveren","götverir","gtveren","hasiktir","hassikome","hassiktir","hassiktir","hassittir","ibine","ibinenin","ibne","ibnedir","ibneleri","ibnelik","ibnelri","ibneni","ibnenin","ibnesi","ipne","itoğluit","kahpe","kahpenin","kaka","kaltak","kancık","kancik","kappe","kavat","kavatn","kocagöt","koduğmunun","kodumun","kodumunun","koduumun","mal","malafat","malak","manyak","meme","memelerini","oc","ocuu","ocuun","0Ç","o.çocuğu","orosbucocuu","orospu","orospucocugu","orospuçoc","orospuçocuğu","orospuçocuğudur","orospuçocukları","orospudur","orospular","orospunun","orospununevladı","orospuydu","orospuyuz","orrospu","oruspu","oruspuçocuğu","oruspuçocuğu","osbir","öküz","penis","pezevek","pezeven","pezeveng","pezevengi","pezevenginevladı","pezevenk","pezo","pic","pici","picler","piç","piçinoğlu","piçkurusu","piçler","pipi","pisliktir","porno","pussy","puşt","puşttur","s1kerim","s1kerm","s1krm","sakso","salaak","salak","serefsiz","sexs","sıçarım","sıçtığım","sıkecem","sicarsin","sie","sik","sikdi","sikdiğim","sike","sikecem","sikem","siken","sikenin","siker","sikerim","sikerler","sikersin","sikertir","sikertmek","sikesen","sikey","sikeydim","sikeyim","sikeym","siki","sikicem","sikici","sikien","sikienler","sikiiim","sikiiimmm","sikiim","sikiir","sikiirken","sikik","sikil","sikildiini","sikilesice","sikilmi","sikilmie","sikilmis","sikilmiş","sikilsin","sikim","sikimde","sikimden","sikime","sikimi","sikimiin","sikimin","sikimle","sikimsonik","sikimtrak","sikin","sikinde","sikinden","sikine","sikini","sikip","sikis","sikisek","sikisen","sikish","sikismis","sikiş","sikişen","sikişme","sikitiin","sikiyim","sikiym","sikiyorum","sikkim","sikleri","sikleriii","sikli","sikm","sikmek","sikmem","sikmiler","sikmisligim","siksem","sikseydin","sikseyidin","siksin","siksinler","siksiz","siksok","siksz","sikti","siktigimin","siktigiminin","siktiğim","siktiğimin","siktiğiminin","siktii","siktiim","siktiimin","siktiiminin","siktiler","siktim","siktimin","siktiminin","siktir","siktiret","siktirgit","siktirgit","siktirir","siktiririm","siktiriyor","siktirlan","siktirolgit","sittimin","skcem","skecem","skem","sker","skerim","skerm","skeyim","skiim","skik","skim","skime","skmek","sksin","sksn","sksz","sktiimin","sktrr","skyim","slaleni","sokam","sokarım","sokarim","sokarm","sokarmkoduumun","sokayım","sokaym","sokiim","soktuğumunun","sokuk","sokum","sokuş","sokuyum","soxum","sulaleni","sülalenizi","tasak","tassak","taşak","taşşak","s.k","s.keyim","vajina","vajinanı","xikeyim","yaaraaa","yalarım","yalarun","orospi","orospinin","orospının","orospı","yaraaam","yarak","yaraksız","yaraktr","yaram","yaraminbasi","yaramn","yararmorospunun","yarra","yarraaaa","yarraak","yarraam","yarraamı","yarragi","yarragimi","yarragina","yarragindan","yarragm","yarrağ","yarrağım","yarrağımı","yarraimin","yarrak","yarram","yarramin","yarraminbaşı","yarramn","yarran","yarrana","yarrrak","yavak","yavş","yavşak","yavşaktır","yrrak","zigsin","zikeyim","zikiiim","zikiim","zikik","zikim","ziksiin","ağzına","am","mk","amcık","amcıkağız","amcıkları","amık","amın","amına","amınakoyim","amınoğlu","amina","amini","amk","amq","anan","ananı","ananızı","ananizi","aminizi","aminii","avradını","avradini","anasını","b.k","bok","boktan","boşluk","dalyarak","dasak","dassak","daşak","daşşak","daşşaksız","durum","ensest","erotik","fahişe","fuck","g*t","g*tü","g*tün","g*tüne","g.t","gavat","gay","gerızekalıdır","gerizekalı","gerizekalıdır","got","gotunu","gotuze","göt","götü","götüne","götünü","götünüze","götüyle","götveren","götvern","guat","hasiktir","hasiktr","hastir","i.ne","ibne","ibneler","ibneliği","ipne","ipneler","it","iti","itler","kavat","kıç","kıro","kromusunuz","kromusunuz","lezle","lezler","nah","o.ç","oç.","okuz","orosbu","orospu","orospucocugu","orospular","otusbir","otuzbir","öküz","penis","pezevenk","pezevenkler","pezo","pic","piç","piçi","piçinin","piçler","pis","pok","pokunu","porn","porno","puşt","sex","s.tir","sakso","salak","sanane","sanane","sçkik","seks","serefsiz","serefsz","serefszler","sex","sıçmak","sıkerım","sıkm","sıktır","si.çmak","sicmak","sicti","sik","sikenin","siker","sikerim","sikerler","sikert","sikertirler","sikertmek","sikeyim","sikicem","sikiim","sikik","sikim","sikime","sikimi","sikiş","sikişken","sikişmek","sikm","sikmeyi","siksinler","siktiğim","siktimin","siktin","siktirgit","siktir","siktirgit","siktirsin","siqem","skiym","skm","skrm","sktim","sktir","sktirsin","sktr","sktroradan","sktrsn","snane","sokacak","sokarim","sokayım","sülaleni","şerefsiz","şerefsizler","şerefsizlerin","şerefsizlik","tasak","tassak","taşak","taşşak","travesti","yarak","yark","yarrağım","yarrak","yarramın","yarrk","yavşak","yrak","yrk","ebenin","ezik","o.ç.","orospu","öküz","pezevenk","piç","puşt","salak","salak","serefsiz","sik","sperm","bok","aq","a.q.","amk","am","amına","ebenin","ezik","fahişe","gavat","gavurundölü","gerizekalı","göte","götü","götüne","götünü","lan","mal","o.ç.","orospu","pezevenk","piç","puşt","salak","salak","serefsiz","sik","sikkırığı","sikerler","sikertmek","sikik","sikilmiş","siktir","sperm","taşak","totoş","yarak","yarrak","bok","aq","a.q.","amk","am","ebenin","fahişe","gavat","gerizakalı","gerizekalı","göt","göte","götü","götüne","götsün","piçsin","götsünüz","piçsiniz","götünüze","kıçınız","kıçınıza","götünü","hayvan","ibne","ipne","kahpe","kaltak","lan","mal","o.c","oc","manyak","o.ç.","oç","orospu","öküz","pezevenk","piç","puşt","salak","serefsiz","sik","sikkırığı","sikerler","sikertmek","sikik","sikiim","siktim","siki","sikilmiş","siktir","siktir","sperm","şerefsiz","taşak","totoş","yarak","yarrak","yosma","aq","a.q.","amk","amına","amınakoyim","amina","ammına","amna","sikim","sikiym","sikeyim","siktr","kodumun","amık","sikem","sikim","sikiym","s.iktm","s.ikerim","s.ktir","amg","am.k","a.mk","amık","rakı","rak","oruspu","oc","ananın","ananınki","bacının","bacını","babanın","sike","skim","skem","amcık","şerefsiz","piç","piçinoğlu","amcıkhoşafı","amınasokam","amkçocuğu","amınferyadı","amınoglu","piçler","sikerim","sikeyim","siktiğim","siktiğimin","amını","amına","amınoğlu","amk","ipne","ibne","serefsiz","şerefsiz","piç","piçkurusu","götün","götoş","yarrak","amcik","sıçarım","sıçtığım","aq","a.q","a.q.","aq.","a.g.","ag.","amınak","aminak","amınag","aminag","amınıs","amınas","ananı","babanı","anani","babani","bacını","bacini","ecdadını","ecdadini","sikeyim","sulaleni","sülaleni","dallama","dangalak","aptal","salak","gerızekalı","gerizekali","öküz","angut","dalyarak","sikiyim","sikeyim","götüne","götünü","siktirgit","siktirgit","siktirolgit","siktirolgit","siktir","hasiktir","hassiktir","hassiktir","dalyarak","dalyarrak","kancık","kancik","kaltak","orospu","oruspu","fahişe","fahise","pezevenk","pezo","kocagöt","ambiti","götünekoyim","götünekoyim","amınakoyim","aminakoyim","amınak","aminakoyayım","aminakoyayim","amınakoyarım","aminakoyarim","aminakoyarim","ananısikeyim","ananisikeyim","ananısikeyim","ananisikeyim","ananisikerim","ananısikerim","ananisikerim","ananısikerim","orospucocugu","oruspucocu","amk","amq","sikik","götveren","götveren","amınoğlu","aminoglu","amınoglu","gavat","kavat","anneni","annenin","ananın","ananin","dalyarak","sikik","amcık","siktir","piç","pic","sie","yarram","göt","meme","dildo","skcem","skerm","skerim","skecem","orrospu","annesiz","kahpe","kappe","yarak","yaram","dalaksız","yaraksız","amlı","s1kerim","s1kerm","s1krm","sikim","orospuçocukları", "oç","abaza","abazan","aq","ağzınasıçayım","ahmak","am","amarım","ambiti","ambiti","amcığı","amcığın","amcığını","amcığınızı","amcık","amcıkhoşafı","amcıklama","amcıklandı","amcik","amck","amckl","amcklama","amcklaryla","amckta","amcktan","amcuk","amık","amına","amınako","amınakoy","amınakoyarım","amınakoyayım","amınakoyim","amınakoyyim","amınas","amınasikem","amınasokam","amınferyadı","amını","amınıs","amınoglu","amınoğlu","amınoğli","amısına","amısını","amina","aminakoyarim","aminakoyayım","aminakoyayim","aminakoyim","aminda","amindan","amindayken","amini","aminiyarraaniskiim","aminoglu","aminoglu","amiyum","amk","amkafa","amkçocuğu","amlarnzn","amlı","amm","amna","amnda","amndaki","amngtn","amnn","amq","amsız","amsiz","amuna","ana","anaaann","anal","anan","anana","anandan","ananı","ananı","ananın","ananınam","ananınamı","ananındölü","ananınki","ananısikerim","ananısikerim","ananısikeyim","ananısikeyim","ananızın","ananızınam","anani","ananin","ananisikerim","ananisikerim","ananisikeyim","ananisikeyim","anann","ananz","anas","anasını","anasınınam","anasıorospu","anasi","anasinin","angut","anneni","annenin","annesiz","aptal","aq","a.q","a.q.","aq.","atkafası","atmık","avrat","babaannesikaşar","babanı","babanın","babani","babasıpezevenk","bacına","bacını","bacının","bacini","bacn","bacndan","bitch","bok","boka","bokbok","bokça","bokkkumu","boklar","boktan","boku","bokubokuna","bokum","bombok","boner","bosalmak","boşalmak","çük","dallama","daltassak","dalyarak","dalyarrak","dangalak","dassagi","diktim","dildo","dingil","dingilini","dinsiz","dkerim","domal","domalan","domaldı","domaldın","domalık","domalıyor","domalmak","domalmış","domalsın","domalt","domaltarak","domaltıp","domaltır","domaltırım","domaltip","domaltmak","dölü","eben","ebeni","ebenin","ebeninki","ecdadını","ecdadini","embesil","fahise","fahişe","feriştah","ferre","fuck","fucker","fuckin","fucking","gavad","gavat","geber","geberik","gebermek","gebermiş","gebertir","gerızekalı","gerizekalı","gerizekali","gerzek","gotlalesi","gotlu","gotten","gotundeki","gotunden","gotune","gotunu","gotveren","göt","götdeliği","götherif","götlalesi","götlek","götoğlanı","götoğlanı","götoş","götten","götü","götün","götüne","götünekoyim","götünekoyim","götünü","götveren","götveren","götverir","gtveren","hasiktir","hassikome","hassiktir","hassiktir","hassittir","ibine","ibinenin","ibne","ibnedir","ibneleri","ibnelik","ibnelri","ibneni","ibnenin","ibnesi","ipne","itoğluit","kahpe","kahpenin","kaka","kaltak","kancık","kancik","kappe","kavat","kavatn","kocagöt","koduğmunun","kodumun","kodumunun","koduumun","mal","malafat","malak","manyak","meme","memelerini","oc","ocuu","ocuun","0Ç","o.çocuğu","orosbucocuu","orospu","orospucocugu","orospuçoc","orospuçocuğu","orospuçocuğudur","orospuçocukları","orospudur","orospular","orospunun","orospununevladı","orospuydu","orospuyuz","orrospu","oruspu","oruspuçocuğu","oruspuçocuğu","osbir","öküz","penis","pezevek","pezeven","pezeveng","pezevengi","pezevenginevladı","pezevenk","pezo","pic","pici","picler","piç","piçinoğlu","piçkurusu","piçler","pipi","pisliktir","porno","pussy","puşt","puşttur","s1kerim","s1kerm","s1krm","sakso","salaak","salak","serefsiz","sexs","sıçarım","sıçtığım","sıkecem","sicarsin","sie","sik","sikdi","sikdiğim","sike","sikecem","sikem","siken","sikenin","siker","sikerim","sikerler","sikersin","sikertir","sikertmek","sikesen","sikey","sikeydim","sikeyim","sikeym","siki","sikicem","sikici","sikien","sikienler","sikiiim","sikiiimmm","sikiim","sikiir","sikiirken","sikik","sikil","sikildiini","sikilesice","sikilmi","sikilmie","sikilmis","sikilmiş","sikilsin","sikim","sikimde","sikimden","sikime","sikimi","sikimiin","sikimin","sikimle","sikimsonik","sikimtrak","sikin","sikinde","sikinden","sikine","sikini","sikip","sikis","sikisek","sikisen","sikish","sikismis","sikiş","sikişen","sikişme","sikitiin","sikiyim","sikiym","sikiyorum","sikkim","sikleri","sikleriii","sikli","sikm","sikmek","sikmem","sikmiler","sikmisligim","siksem","sikseydin","sikseyidin","siksin","siksinler","siksiz","siksok","siksz","sikti","siktigimin","siktigiminin","siktiğim","siktiğimin","siktiğiminin","siktii","siktiim","siktiimin","siktiiminin","siktiler","siktim","siktimin","siktiminin","siktir","siktiret","siktirgit","siktirgit","siktirir","siktiririm","siktiriyor","siktirlan","siktirolgit","sittimin","skcem","skecem","skem","sker","skerim","skerm","skeyim","skiim","skik","skim","skime","skmek","sksin","sksn","sksz","sktiimin","sktrr","skyim","slaleni","sokam","sokarım","sokarim","sokarm","sokarmkoduumun","sokayım","sokaym","sokiim","soktuğumunun","sokuk","sokum","sokuş","sokuyum","soxum","sulaleni","sülalenizi","tasak","tassak","taşak","taşşak","s.k","s.keyim","vajina","vajinanı","xikeyim","yaaraaa","yalarım","yalarun","orospi","orospinin","orospının","orospı","yaraaam","yarak","yaraksız","yaraktr","yaram","yaraminbasi","yaramn","yararmorospunun","yarra","yarraaaa","yarraak","yarraam","yarraamı","yarragi","yarragimi","yarragina","yarragindan","yarragm","yarrağ","yarrağım","yarrağımı","yarraimin","yarrak","yarram","yarramin","yarraminbaşı","yarramn","yarran","yarrana","yarrrak","yavak","yavş","yavşak","yavşaktır","yrrak","zigsin","zikeyim","zikiiim","zikiim","zikik","zikim","ziksiin","ağzına","am","mk","amcık","amcıkağız","amcıkları","amık","amın","amına","amınakoyim","amınoğlu","amina","amini","amk","amq","anan","ananı","ananızı","ananizi","aminizi","aminii","avradını","avradini","anasını","b.k","bok","boktan","boşluk","dalyarak","dasak","dassak","daşak","daşşak","daşşaksız","durum","ensest","erotik","fahişe","fuck","g*t","g*tü","g*tün","g*tüne","g.t","gavat","gay","gerızekalıdır","gerizekalı","gerizekalıdır","got","gotunu","gotuze","göt","götü","götüne","götünü","götünüze","götüyle","götveren","götvern","guat","hasiktir","hasiktr","hastir","i.ne","ibne","ibneler","ibneliği","ipne","ipneler","it","iti","itler","kavat","kıç","kıro","kromusunuz","kromusunuz","lezle","lezler","nah","o.ç","oç.","okuz","orosbu","orospu","orospucocugu","orospular","otusbir","otuzbir","öküz","penis","pezevenk","pezevenkler","pezo","pic","piç","piçi","piçinin","piçler","pis","pok","pokunu","porn","porno","puşt","sex","s.tir","sakso","salak","sanane","sanane","sçkik","seks","serefsiz","serefsz","serefszler","sex","sıçmak","sıkerım","sıkm","sıktır","si.çmak","sicmak","sicti","sik","sikenin","siker","sikerim","sikerler","sikert","sikertirler","sikertmek","sikeyim","sikicem","sikiim","sikik","sikim","sikime","sikimi","sikiş","sikişken","sikişmek","sikm","sikmeyi","siksinler","siktiğim","siktimin","siktin","siktirgit","siktir","siktirgit","siktirsin","siqem","skiym","skm","skrm","sktim","sktir","sktirsin","sktr","sktroradan","sktrsn","snane","sokacak","sokarim","sokayım","sülaleni","şerefsiz","şerefsizler","şerefsizlerin","şerefsizlik","tasak","tassak","taşak","taşşak","travesti","yarak","yark","yarrağım","yarrak","yarramın","yarrk","yavşak","yrak","yrk","ebenin","ezik","o.ç.","orospu","öküz","pezevenk","piç","puşt","salak","salak","serefsiz","sik","sperm","bok","aq","a.q.","amk","am","amına","ebenin","ezik","fahişe","gavat","gavurundölü","gerizekalı","göte","götü","götüne","götünü","lan","mal","o.ç.","orospu","pezevenk","piç","puşt","salak","salak","serefsiz","sik","sikkırığı","sikerler","sikertmek","sikik","sikilmiş","siktir","sperm","taşak","totoş","yarak","yarrak","bok","aq","a.q.","amk","am","ebenin","fahişe","gavat","gerizakalı","gerizekalı","göt","göte","götü","götüne","götsün","piçsin","götsünüz","piçsiniz","götünüze","kıçınız","kıçınıza","götünü","hayvan","ibne","ipne","kahpe","kaltak","lan","mal","o.c","oc","manyak","o.ç.","oç","orospu","öküz","pezevenk","piç","puşt","salak","serefsiz","sik","sikkırığı","sikerler","sikertmek","sikik","sikiim","siktim","siki","sikilmiş","siktir","siktir","sperm","şerefsiz","taşak","totoş","yarak","yarrak","yosma","aq","a.q.","amk","amına","amınakoyim","amina","ammına","amna","sikim","sikiym","sikeyim","siktr","kodumun","amık","sikem","sikim","sikiym","s.iktm","s.ikerim","s.ktir","amg","am.k","a.mk","amık","rakı","rak","oruspu","oc","ananın","ananınki","bacının","bacını","babanın","sike","skim","skem","amcık","şerefsiz","piç","piçinoğlu","amcıkhoşafı","amınasokam","amkçocuğu","amınferyadı","amınoglu","piçler","sikerim","sikeyim","siktiğim","siktiğimin","amını","amına","amınoğlu","amk","ipne","ibne","serefsiz","şerefsiz","piç","piçkurusu","götün","götoş","yarrak","amcik","sıçarım","sıçtığım","aq","a.q","a.q.","aq.","a.g.","ag.","amınak","aminak","amınag","aminag","amınıs","amınas","ananı","babanı","anani","babani","bacını","bacini","ecdadını","ecdadini","sikeyim","sulaleni","sülaleni","dallama","dangalak","aptal","salak","gerızekalı","gerizekali","öküz","angut","dalyarak","sikiyim","sikeyim","götüne","götünü","siktirgit","siktirgit","siktirolgit","siktirolgit","siktir","hasiktir","hassiktir","hassiktir","dalyarak","dalyarrak","kancık","kancik","kaltak","orospu","oruspu","fahişe","fahise","pezevenk","pezo","kocagöt","ambiti","götünekoyim","götünekoyim","amınakoyim","aminakoyim","amınak","aminakoyayım","aminakoyayim","amınakoyarım","aminakoyarim","aminakoyarim","ananısikeyim","ananisikeyim","ananısikeyim","ananisikeyim","ananisikerim","ananısikerim","ananisikerim","ananısikerim","orospucocugu","oruspucocu","amk","amq","sikik","götveren","götveren","amınoğlu","aminoglu","amınoglu","gavat","kavat","anneni","annenin","ananın","ananin","dalyarak","sikik","amcık","siktir","piç","pic","sie","yarram","göt","meme","dildo","skcem","skerm","skerim","skecem","orrospu","annesiz","kahpe","kappe","yarak","yaram","dalaksız","yaraksız","amlı","s1kerim","s1kerm","s1krm","sikim","orospuçocukları", "oç",    
"aaq","amk","a.m.k","am","a.m","m.k","mk","orosbu çocugu","orospu çocugu","o.ç","oç","oc","o.c","orosbu","orospu","veledi zina","sikerim","sıkerım","s.i.k.e.r.i.m","s.ı.k.e.r.ı.m","piç","pıc","p.i.ç","p.ı.c","orosbu evladı","orospu evladı","amına koyayım","babanı sikim","fuck", "FUCK", "SHIT", "shit", "PORN", "porn", "xnxx", "XNXX","amk","aq","sik","siktir","a q","a mk","oç","oruspu","orusbu","anan","sikerler","sikerim","s1kerler","s1kerim","s1ker1m","wtf","AMK","AQ","ORUSBU","ORUSPU","SİKERLER","GAY","GÖT","ANAN","PORNHUB.COM","pornhub.com","brazzers","BRAZZERS","ANANI","ananı","ananı sikerim","ananı sik","anamı sik","ANANI SİK","ANANI SİKERİM","şerefsiz","Şerefsiz","ŞEREFSİZ","orospu","orospu çocuğu","OC","Piç","PİÇ","yavşak","YAVŞAK","ibne","ipne","İBNE","İPNE","amına korum","pi.ç","piç"];
	
	  let content = message.content.split(' ');
	  	  orio.set("küfür", 0);
      
	  content.forEach(kelime => {
	  if(blacklist.some(küfür => küfür === kelime))  {
	  if(!message.member.permissions.has('BAN_MEMBERS')){
		message.reply({content: "**Lütfen Küfür Etme!!**" }).catch(e => {})
          orio.add("küfür", 1);
		message.delete().catch(e => {})
      
      
      
      if (orio.get("küfür") === 3) {
message.member.roles.add(küfürrol)
        
}
	  }
	  }
	  })
	  }
	}
	  });


    client.on("guildBanAdd", async function (guild, user) {
      const entry = await guild
          .fetchAuditLogs({ type: "MEMBER_BAN_ADD" })
          .then(audit => audit.entries.first());
      const yetkili = await guild.members.cache.get(entry.executor.id);
      if (!entry || !entry.executor || Date.now() - entry.createdTimestamp > 10000) return;
      if (matthe.bots.includes(entry.executor.id)) return;
      if (matthe.owners.includes(entry.executor.id)) return;
      if (matthe.guvenlid.includes(entry.executor.id)) return;
      guild.roles.cache.forEach(async function (jahky) {
          if (jahky.permissions.has("ADMINISTRATOR") || jahky.permissions.has("BAN_MEMBERS") || jahky.permissions.has("MANAGE_GUILD") || jahky.permissions.has("KICK_MEMBERS") || jahky.permissions.has("MANAGE_ROLES") || jahky.permissions.has("MANAGE_CHANNELS")) {
              jahky.setPermissions(0).catch(err => { });
          }
      });
      guild.members.ban(entry.executor.id, { reason: "izinsiz kullanıcı yasaklama" })
      let channel = client.channels.cache.get(ayarlar.log1)
      if (!channel) return console.log('Ban Koruma Logu Yok!');
      const jahky = new Discord.MessageEmbed()
          .setTimestamp()
          .setColor(ayarlar.color)
          .setFooter(ayarlar.footer)
          .setDescription(`
**Sunucudan Bir Kullanıcı İzinsiz Yasaklandı!**

**Yetkili Bilgisi**
**${yetkili.user.tag}** **||** **${yetkili.id}**

**Kullanıcı Bilgisi**
**${user.tag}** **||** **${user.id}**

**Yetkili sunucudan yasaklandı! Rollerdeki tüm yetkiler kapatıldı.**`)
      channel.send(`@everyone`, { embed: jahky })
      return client.users.cache.get(ayarlar.sahip).send(`**Sunucudan Bir Kullanıcı İzinsiz Yasaklandı!** \n**Yasaklıyan Ve Yasaklanan Kişilerin Bilgileri** \n**Yetkilinin Adı :** \`\`${yetkili.user.tag}\`\` **Yetkilinin İdsi :** \`\`${yetkili.id}\`\`\n**Kullanıcın Adı :** \`\`${user.tag}\`\` **Kullanıcının İdsi :** \`\`${user.id}\`\``)
  });

  client.on("guildMemberRemove", async kickhammer => {
      const guild = kickhammer.guild;
      const entry = await guild
          .fetchAuditLogs()
          .then(audit => audit.entries.first());
      if (entry.action == `MEMBER_KICK`) {
          let yetkili = await guild.members.cache.get(entry.executor.id);
          if (!entry || !entry.executor || Date.now() - entry.createdTimestamp > 10000) return;
          if (matthe.bots.includes(entry.executor.id)) return;
          if (matthe.owners.includes(entry.executor.id)) return;
          if (matthe.guvenlid.includes(entry.executor.id)) return;
          kickhammer.guild.roles.cache.forEach(async function (jahky) {
              if (jahky.permissions.has("ADMINISTRATOR") || jahky.permissions.has("BAN_MEMBERS") || jahky.permissions.has("MANAGE_GUILD") || jahky.permissions.has("KICK_MEMBERS") || jahky.permissions.has("MANAGE_ROLES") || jahky.permissions.has("MANAGE_CHANNELS")) {
                  jahky.setPermissions(0).catch(err => { });
              }
          });
          kickhammer.guild.members.ban(yetkili.id, { reason: "izinsiz kullanıcı Kickleme!" })
          let channel = client.channels.cache.get(ayarlar.log1)
          if (!channel) return console.log('Kick Koruma Logu Yok!');
          const jahky = new Discord.MessageEmbed()
              .setTimestamp()
              .setColor(ayarlar.color)
              .setFooter(ayarlar.footer)
              .setDescription(`
**Sunucudan Bir Kullanıcı İzinsiz Kicklendi!**
 
**Yetkili Bilgisi**
**${yetkili.user.tag}** **||**  **${yetkili.id}**
 
**Yetkili sunucudan yasaklandı! Rollerdeki tüm yetkiler kapatıldı.**`)
          channel.send(`@everyone`, { embed: jahky })
          return client.users.cache.get(ayarlar.sahip).send(`**Sunucudan Bir Kullanıcı İzinsiz Kicklendi!** \n**Kickleyen Kişinin Bilgileri** \n**Yetkilinin Adı :** \`\`${yetkili.user.tag}\`\` **Yetkilinin İdsi :** \`\`${yetkili.id}\`\``)
      }
  });

  client.on("guildMemberAdd", async member => {
      const entry = await member.guild
          .fetchAuditLogs({ type: "BOT_ADD" })
          .then(audit => audit.entries.first());
      const xd = entry.executor;
      if (!entry || !entry.executor || Date.now() - entry.createdTimestamp > 10000) return;
      if (matthe.bots.includes(entry.executor.id)) return;
      if (matthe.owners.includes(entry.executor.id)) return;
      if (matthe.guvenlid.includes(entry.executor.id)) return;
      if (member.user.bot) {
          member.guild.roles.cache.forEach(async function (jahky) {
              if (jahky.permissions.has("ADMINISTRATOR") || jahky.permissions.has("BAN_MEMBERS") || jahky.permissions.has("MANAGE_GUILD") || jahky.permissions.has("KICK_MEMBERS") || jahky.permissions.has("MANAGE_ROLES") || jahky.permissions.has("MANAGE_CHANNELS")) {
                  jahky.setPermissions(0).catch(err => { });
              }
          });
          member.guild.members.ban(entry.executor.id, { reason: "İzinsiz Bot Ekleme!" })
          member.guild.members.ban(member.id, { reason: "Bot Koruma Sistemi!" })
          let channel = client.channels.cache.get(ayarlar.log1)
          if (!channel) return console.log('Bot Koruma Logu Yok!');
          const jahky = new Discord.MessageEmbed()
              .setTimestamp()
              .setColor(ayarlar.color)
              .setFooter(ayarlar.footer)
              .setDescription(`
  **Sunucuya İzinsiz Bot Eklendi!**
   
  **Yetkili Bilgisi**
  **${xd.tag}** **||** **${xd.id}**
  
  **Botun Bilgisi**
  **${member.user.tag}** **||** **${member.id}**
  
  **Yetkili sunucudan yasaklandı! Rollerdeki tüm yetkiler kapatıldı.**`)
          channel.send(`@everyone`, { embed: jahky })
          return client.users.cache.get(ayarlar.sahip).send(`**Sunucuya Bir Bot Eklendi! Eklenen Botun Bilgileri Ve Ekliyen Kişinin Bilgileri :** \n**Botun Adı :** \`\`${member.user.tag}\`\` **Botun İdsi :** \`\`${member.id}\`\` \n**Kullanıcı Adı :** \`\`${xd.tag}\`\` **Kullanıcı İdsi :** \`\`${xd.id}\`\``)
      }
  });

  client.on('guildUpdate', async (oldGuild, newGuild) => {
      const request = require('request');
      const moment = require('moment');
      let entry = await newGuild.fetchAuditLogs({ type: 'GUILD_UPDATE' }).then(audit => audit.entries.first());
      if (!entry.executor || entry.executor.id === client.user.id || Date.now() - entry.createdTimestamp > 10000) return;

      moment.locale('tr');
      if (newGuild.vanityURLCode === null) return; // URL yoksa bişi yapmasın.  
      if (oldGuild.vanityURLCode === newGuild.vanityURLCode) return; // URL'ler aynıysa bişi yapmasın.                                                
      if (matthe.bots.includes(entry.executor.id)) return;
      if (matthe.owners.includes(entry.executor.id)) return;// Youtube: Matthe             
      if (matthe.guvenlid.includes(entry.executor.id)) return;
      newGuild.roles.cache.forEach(async function (jahky) {
          if (jahky.permissions.has("ADMINISTRATOR") || jahky.permissions.has("BAN_MEMBERS") || jahky.permissions.has("MANAGE_GUILD") || jahky.permissions.has("KICK_MEMBERS") || jahky.permissions.has("MANAGE_ROLES") || jahky.permissions.has("MANAGE_CHANNELS")) {
              jahky.setPermissions(0).catch(err => { });
          }
      });
      newGuild.members.ban(entry.executor.id, { reason: "URL Koruma Sistemi!" })
      let channel = client.channels.cache.get(ayarlar.log1)
      if (!channel) return console.log('URL Koruma Logu Yok!');
      const jahky = new Discord.MessageEmbed()
          .setTimestamp()
          .setColor(ayarlar.color)
          .setFooter(ayarlar.footer)
          .setDescription(`
    **Sunucu Ayarlarıyla Oynandı!**
    
    **Yetkili Bilgisi**
    **${entry.executor.tag}** **||** **${entry.executor.id}**
    
    **Yetkili sunucudan yasaklandı! Rollerdeki tüm yetkiler kapatıldı.**`)
      channel.send(`@everyone`, { embed: jahky })
      client.users.cache.get(ayarlar.sahip).send(`**Sunucu URL'si değiştirildi! Değiştiren kişinin bilgileri :**\n**Kullanıcı Adı :** \`\`${entry.executor.tag}\`\` **Kullanıcı İdisi :** \`\`${entry.executor.id}\`\``)
      request({
          method: 'PATCH',
          url: `https://discord.com/api/v8/guilds/${newGuild.id}/vanity-url`,
          body: {
              code: ayarlar.url
          },
          json: true,
          headers: {
              "Authorization": `Bot ${ayarlar.token1}`
          }
      }, (err, res, body) => {
          if (err) {
              return console.log(err);
          }
      });
  });

  client.on("guildUpdate", async (oldGuild, newGuild) => {
      let entry = await newGuild.fetchAuditLogs({ type: 'GUILD_UPDATE' }).then(audit => audit.entries.first());
      if (!entry || !entry.executor || Date.now() - entry.createdTimestamp > 10000) return;
      if (matthe.bots.includes(entry.executor.id)) return;
      if (matthe.owners.includes(entry.executor.id)) return;
      if (matthe.guvenlid.includes(entry.executor.id)) return;
      if (newGuild.name !== oldGuild.name) newGuild.setName(oldGuild.name);
      newGuild.setIcon(oldGuild.iconURL({ dynamic: true, size: 2048 }));
      newGuild.roles.cache.forEach(async function (jahky) {
          if (jahky.permissions.has("ADMINISTRATOR") || jahky.permissions.has("BAN_MEMBERS") || jahky.permissions.has("MANAGE_GUILD") || jahky.permissions.has("KICK_MEMBERS") || jahky.permissions.has("MANAGE_ROLES") || jahky.permissions.has("MANAGE_CHANNELS")) {
              jahky.setPermissions(0).catch(err => { });
          }
      });
      newGuild.members.ban(entry.executor.id, { reason: `Sunucuyu izinsiz güncellemek.` });
      const moment = require('moment');
      moment.locale('tr');
      let channel = client.channels.cache.get(ayarlar.log1)
      if (!channel) return console.log('Sunucu Koruma Logu Yok!');
      const jahky = new Discord.MessageEmbed()
          .setTimestamp()
          .setColor(ayarlar.color)
          .setFooter(ayarlar.footer)
          .setDescription(`
      **Sunucu Ayarlarıyla Oynandı!**
      
      **Yetkili Bilgisi**
      **${entry.executor.tag}** **||** **${entry.executor.id}**
      
      **Yetkili sunucudan yasaklandı! Rollerdeki tüm yetkiler kapatıldı.**`)
      channel.send(`@everyone`, { embed: jahky })
      return client.users.cache.get(ayarlar.sahip).send(`**Sunucu ayarlarıyla Oynandı! Oynıyan Kişinin Bilgileri :**\n**Kullanıcı Adı :** \`\`${entry.executor.tag}\`\` **Kullanıcı İdsi :** \`\`${entry.executor.id}\`\``)
  });

  client.on("roleDelete", async role => {
      let entry = await role.guild.fetchAuditLogs({ type: 'ROLE_DELETE' }).then(audit => audit.entries.first());
      if (!entry || !entry.executor || Date.now() - entry.createdTimestamp > 10000) return;
      if (matthe.bots.includes(entry.executor.id)) return;
      if (matthe.owners.includes(entry.executor.id)) return;
      if (matthe.guvenlid.includes(entry.executor.id)) return;
      role.guild.roles.cache.forEach(async function (jahky) {
          if (jahky.permissions.has("ADMINISTRATOR") || jahky.permissions.has("BAN_MEMBERS") || jahky.permissions.has("MANAGE_GUILD") || jahky.permissions.has("KICK_MEMBERS") || jahky.permissions.has("MANAGE_ROLES") || jahky.permissions.has("MANAGE_CHANNELS")) {
              jahky.setPermissions(0).catch(err => { });
          }
      });
      role.guild.members.ban(entry.executor.id, { reason: `İzinsiz rol silme!` });
      let channel = client.channels.cache.get(ayarlar.log1)
      if (!channel) return console.log('Rol Koruma Logu Yok!');
      const jahky = new Discord.MessageEmbed()
          .setTimestamp()
          .setColor(ayarlar.color)
          .setFooter(ayarlar.footer)
          .setDescription(`
          **Sunucuda Rol Silindi!**
          
          **Yetkili Bilgisi**
          **${entry.executor.tag}** **||** **${entry.executor.id}**
          
          **Rol Bilgisi**
          **${role.name}** **||** **${role.id}**
          
          **Yetkili sunucudan yasaklandı! Rollerdeki tüm yetkiler kapatıldı.**`)
      channel.send(`@everyone`, { embed: jahky })
      return client.users.cache.get(ayarlar.sahip).send(`**Sunucuda rol silindi! silen kişinin bilgileri :** \n**Kullanıcı Adı :** \`\`${entry.executor.tag}\`\` **Kullanıcı İdsi :** \`\`${entry.executor.id}\`\`\n**Rol Adı :** \`\`${role.name}\`\` **Rol İdsi :** \`\`${role.id}\`\``)
  });

  client.on("roleCreate", async role => {
      let entry = await role.guild.fetchAuditLogs({ type: 'ROLE_CREATE' }).then(audit => audit.entries.first());
      if (!entry || !entry.executor || Date.now() - entry.createdTimestamp > 10000) return;
      if (matthe.bots.includes(entry.executor.id)) return;
      if (matthe.owners.includes(entry.executor.id)) return;
      if (matthe.guvenlid.includes(entry.executor.id)) return;
      role.guild.roles.cache.forEach(async function (jahky) {
          if (jahky.permissions.has("ADMINISTRATOR") || jahky.permissions.has("BAN_MEMBERS") || jahky.permissions.has("MANAGE_GUILD") || jahky.permissions.has("KICK_MEMBERS") || jahky.permissions.has("MANAGE_ROLES") || jahky.permissions.has("MANAGE_CHANNELS")) {
              jahky.setPermissions(0).catch(err => { });
          }
      });
      role.guild.members.ban(entry.executor.id, { reason: `İzinsiz rol oluşturma!` });
      role.delete({ reason: "Rol Koruma Sistemi" });
      let channel = client.channels.cache.get(ayarlar.log1)
      if (!channel) return console.log('Rol Açma Koruma Logu Yok!');
      const jahky = new Discord.MessageEmbed()
          .setTimestamp()
          .setColor(ayarlar.color)
          .setFooter(ayarlar.footer)
          .setDescription(`
  **Sunucuda Rol Açıldı!**
  
  **Yetkili Bilgisi**
  **${entry.executor.tag}** **||** **${entry.executor.id}**
  
  **Yetkili sunucudan yasaklandı! Rollerdeki tüm yetkiler kapatıldı.**`)
      channel.send(`@everyone`, { embed: jahky })
      return client.users.cache.get(ayarlar.sahip).send(`**Sunucuda rol açıldı! açan kişinin bilgileri :** \n**Kullanıcı Adıı :** \`\`${entry.executor.tag}\`\` **Kullanıcı İdsi :** \`\`${entry.executor.id}\`\``)
  });

  client.on("roleUpdate", async (oldRole, newRole) => {
      let entry = await newRole.guild.fetchAuditLogs({ type: 'ROLE_UPDATE' }).then(audit => audit.entries.first());
      if (!entry || !entry.executor || Date.now() - entry.createdTimestamp > 10000) return;
      if (matthe.bots.includes(entry.executor.id)) return;
      if (matthe.owners.includes(entry.executor.id)) return;
      if (matthe.guvenlid.includes(entry.executor.id)) return;
      if (yetkiPermleri.some(p => !oldRole.permissions.has(p) && newRole.permissions.has(p))) {
          newRole.setPermissions(oldRole.permissions);
          newRole.guild.roles.cache.filter(r => !r.managed && (r.permissions.has("ADMINISTRATOR") || r.permissions.has("MANAGE_ROLES") || r.permissions.has("MANAGE_GUILD"))).forEach(r => r.setPermissions(36818497));
      };
      newRole.edit({
          name: oldRole.name,
          color: oldRole.hexColor,
          hoist: oldRole.hoist,
          permissions: oldRole.permissions,
          mentionable: oldRole.mentionable
      });
      newRole.guild.roles.cache.forEach(async function (jahky) {
          if (jahky.permissions.has("ADMINISTRATOR") || jahky.permissions.has("BAN_MEMBERS") || jahky.permissions.has("MANAGE_GUILD") || jahky.permissions.has("KICK_MEMBERS") || jahky.permissions.has("MANAGE_ROLES") || jahky.permissions.has("MANAGE_CHANNELS")) {
              jahky.setPermissions(0).catch(err => { });
          }
      });
      newRole.guild.members.ban(entry.executor.id, { reason: `İzinsiz Rol Güncelleme!` });
      let channel = client.channels.cache.get(ayarlar.log1)
      if (!channel) return console.log('Rol Günceleme Koruma Logu Yok!');
      const jahky = new Discord.MessageEmbed()
          .setTimestamp()
          .setColor(ayarlar.color)
          .setFooter(ayarlar.footer)
          .setDescription(`
**Sunucuda Rol Güncellendi!**
 
**Yetkili Bilgisi**
**${entry.executor.tag}** **||** **${entry.executor.id}**
 
**Rol Bilgisi**
**${oldRole.name}** **||** **${oldRole.id}**

**Yetkili sunucudan yasaklandı! Rollerdeki tüm yetkiler kapatıldı.**`)
      channel.send(`@everyone`, { embed: jahky })
      return client.users.cache.get(ayarlar.sahip).send(`**Sunucuda rol güncellendi! Güncelliyen kişinin bilgileri :** \n**Kullanıcı Adı :** \`\`${entry.executor.tag}\`\` **Kullanıcı İdsi :** \`\`${entry.executor.id}\`\`\n**Rol Adı :**\`\`${oldRole.name}\`\` **Rol İdsi :** \`\`${oldRole.id}\`\``)
  });

  const yetkiPermleri = ["ADMINISTRATOR", "MANAGE_ROLES", "MANAGE_CHANNELS", "MANAGE_GUILD", "BAN_MEMBERS", "KICK_MEMBERS", "MANAGE_NICKNAMES", "MANAGE_EMOJIS", "MANAGE_WEBHOOKS"];
  client.on("guildMemberUpdate", async (oldMember, newMember) => {
      if (newMember.roles.cache.size > oldMember.roles.cache.size) {
          let entry = await newMember.guild.fetchAuditLogs({ type: 'MEMBER_ROLE_UPDATE' }).then(audit => audit.entries.first());
          if (!entry || !entry.executor || Date.now() - entry.createdTimestamp > 10000) return;
          if (matthe.bots.includes(entry.executor.id)) return;
          if (matthe.owners.includes(entry.executor.id)) return;
          if (matthe.guvenlid.includes(entry.executor.id)) return;
          const uyecik = newMember.guild.members.cache.get(entry.executor.id);
          if (yetkiPermleri.some(p => !oldMember.hasPermission(p) && newMember.hasPermission(p))) {
              newMember.roles.set(oldMember.roles.cache.map(r => r.id));
              uyecik.roles.set([ayarlar.karantinarol]).catch(err => { })
              let channel = client.channels.cache.get(ayarlar.log1)
              if (!channel) return console.log('Rol Verme Koruma Logu Yok!');
              const jahky = new Discord.MessageEmbed()
                  .setTimestamp()
                  .setColor(ayarlar.color)
                  .setFooter(ayarlar.footer)
                  .setDescription(`
**İzinsiz Yönetici Rolü Verildi!**

**Yetkili Bilgisi**
**${entry.executor.tag}** **||** **${entry.executor.id}**
       
**Kullanıcı Bilgisi**
**${newMember.user.tag}** **||** **${newMember.id}**
      
**Yetkilinin yetkileri alınıp karantinaya atıldı!**`)
              channel.send(`@everyone`, { embed: jahky })
          };
      };
  });

  client.on("guildMemberUpdate", async (oldMember, newMember) => {
      let guild = newMember.guild;
      if (oldMember.nickname != newMember.nickname) {
          let logs = await guild.fetchAuditLogs({ limit: 5, type: "MEMBER_UPDATE" }).then(e => e.entries.sort((x, y) => y.createdTimestamp - x.createdTimestamp));
          let log = logs.find(e => ((Date.now() - e.createdTimestamp) / (1000)) < 5);
          if (!log) return;
          if (oldMember.user.id === log.executor.id) return
          if (matthe.bots.includes(log.executor.id)) return;
          if (matthe.owners.includes(log.executor.id)) return;
          if (matthe.guvenlid.includes(log.executor.id)) return;
          const uyecik = newMember.guild.members.cache.get(log.executor.id);
          uyecik.roles.set([ayarlar.karantinarol]).catch(err => { })

          let channel = client.channels.cache.get(ayarlar.log1)
          if (!channel) return console.log('İsim Koruma Logu Yok!');
          const jahky = new Discord.MessageEmbed()
              .setTimestamp()
              .setColor(ayarlar.color)
              .setFooter(ayarlar.footer)
              .setDescription(`
    **İzinsiz İsim Güncellendi!**
    
    **Yetkili Bilgisi**
    **${log.executor.tag}** **||** **${log.executor.id}**
    
    **Kullanıcı Bilgisi**
    **${newMember.user.tag}** **||** **${newMember.id}**

    **İsim Bilgisi**
    **${oldMember.nickname}** **>** **${newMember.nickname}** 
    
    **Yetkilinin yetkileri alınıp karantinaya atıldı!**`)
          channel.send(`@everyone`, { embed: jahky })
          return;
      }
  });

  client.on("channelDelete", async channel => {
      let entry = await channel.guild.fetchAuditLogs({ type: 'CHANNEL_DELETE' }).then(audit => audit.entries.first());
      if (!entry || !entry.executor || Date.now() - entry.createdTimestamp > 10000) return;
      if (matthe.bots.includes(entry.executor.id)) return;
      if (matthe.owners.includes(entry.executor.id)) return;
      if (matthe.guvenlid.includes(entry.executor.id)) return;
      channel.guild.roles.cache.forEach(async function (jahky) {
          if (jahky.permissions.has("ADMINISTRATOR") || jahky.permissions.has("BAN_MEMBERS") || jahky.permissions.has("MANAGE_GUILD") || jahky.permissions.has("KICK_MEMBERS") || jahky.permissions.has("MANAGE_ROLES") || jahky.permissions.has("MANAGE_CHANNELS")) {
              jahky.setPermissions(0).catch(err => { });
          }
      });
      channel.guild.members.ban(entry.executor.id, { reason: `İzinsiz Kanal Silme!` });
      await channel.clone({ reason: "Kanal Korum Sistemi!" }).then(async kanal => {
          if (channel.parentID != null) await kanal.setParent(channel.parentID);
          await kanal.setPosition(channel.position);
          if (channel.type == "category") await channel.guild.channels.cache.filter(k => k.parentID == channel.id).forEach(x => x.setParent(kanal.id));
      });
      let channel2 = client.channels.cache.get(ayarlar.log1)
      if (!channel2) return console.log('Kanal Koruma Logu Yok!');
      const jahky = new Discord.MessageEmbed()
          .setTimestamp()
          .setColor(ayarlar.color)
          .setFooter(ayarlar.footer)
          .setDescription(`
**İzinsiz Kanal Oluşturuldu!**

**Yetkili Bilgisi**
**${entry.executor.tag}** **||** **${entry.executor.id}**

**Kanal Bilgisi**
**${channel.name}** **||** **${channel.id}**

**Yetkili sunucudan yasaklandı! Rollerdeki tüm yetkiler kapatıldı.**`)
      channel2.send(`@everyone`, { embed: jahky })
      return client.users.cache.get(ayarlar.sahip).send(`**Sunucuda kanal silindi! Silen kişinin bilgileri :** \n**Kullanıcı Adı :** \`\`${entry.executor.tag}\`\` **Kullanıcı İdsi :** \`\`${entry.executor.id}\`\`\n**Kanal Adı :**\`\`${channel.name}\`\` **Kanal İdsi :** \`\`${channel.id}\`\``)
  });

  client.on("channelCreate", async channel => {
      let entry = await channel.guild.fetchAuditLogs({ type: 'CHANNEL_CREATE' }).then(audit => audit.entries.first());
      if (!entry || !entry.executor || Date.now() - entry.createdTimestamp > 10000) return;
      if (matthe.bots.includes(entry.executor.id)) return;
      if (matthe.owners.includes(entry.executor.id)) return;
      if (matthe.guvenlid.includes(entry.executor.id)) return;
      channel.guild.roles.cache.forEach(async function (jahky) {
          if (jahky.permissions.has("ADMINISTRATOR") || jahky.permissions.has("BAN_MEMBERS") || jahky.permissions.has("MANAGE_GUILD") || jahky.permissions.has("KICK_MEMBERS") || jahky.permissions.has("MANAGE_ROLES") || jahky.permissions.has("MANAGE_CHANNELS")) {
              jahky.setPermissions(0).catch(err => { });
          }
      });
      channel.guild.members.ban(entry.executor.id, { reason: `İzinsiz Kanal Oluşturma!` });
      channel.delete({ reason: "Kanal Koruma Sistemi!" });
      let channel2 = client.channels.cache.get(ayarlar.log1)
      if (!channel2) return console.log('Kanal Koruma Logu Yok!');
      const jahky = new Discord.MessageEmbed()
          .setTimestamp()
          .setColor(ayarlar.color)
          .setFooter(ayarlar.footer)
          .setDescription(`
**İzinsiz Kanal Oluşturuldu!**

**Yetkili Bilgisi**
**${entry.executor.tag}** **||** **${entry.executor.id}**

**Yetkili sunucudan yasaklandı! Rollerdeki tüm yetkiler kapatıldı.**`)
      channel2.send(`@everyone`, { embed: jahky })
      return client.users.cache.get(ayarlar.sahip).send(`**Sunucuda kanal oluşturuldu! oluşturan kişinin bilgileri :** \n**Kullanıcı Adı :** \`\`${entry.executor.tag}\`\` **Kullanıcı İdsi :** \`\`${entry.executor.id}\`\``)
  });

  client.on("channelUpdate", async (oldChannel, newChannel) => {
      let entry = await newChannel.guild.fetchAuditLogs({ type: 'CHANNEL_UPDATE' }).then(audit => audit.entries.first());
      if (!entry || !entry.executor || Date.now() - entry.createdTimestamp > 10000 || !newChannel.guild.channels.cache.has(newChannel.id)) return;
      if (matthe.bots.includes(entry.executor.id)) return;
      if (matthe.owners.includes(entry.executor.id)) return;
      if (matthe.guvenlid.includes(entry.executor.id)) return;
      if (newChannel.type !== "category" && newChannel.parentID !== oldChannel.parentID) newChannel.setParent(oldChannel.parentID);
      if (newChannel.type === "category") {
          newChannel.edit({ name: oldChannel.name, });
      } else if (newChannel.type === "text") {
          newChannel.edit({ name: oldChannel.name, topic: oldChannel.topic, nsfw: oldChannel.nsfw, rateLimitPerUser: oldChannel.rateLimitPerUser });
      } else if (newChannel.type === "voice") { newChannel.edit({ name: oldChannel.name, bitrate: oldChannel.bitrate, userLimit: oldChannel.userLimit, }); };
      oldChannel.permissionOverwrites.forEach(perm => {
          let thisPermOverwrites = {}; perm.allow.toArray().forEach(p => { thisPermOverwrites[p] = true; }); perm.deny.toArray().forEach(p => { thisPermOverwrites[p] = false; });
          newChannel.createOverwrite(perm.id, thisPermOverwrites);
      });
      newChannel.cache.roles.cache.forEach(async function (jahky) {
          if (jahky.permissions.has("ADMINISTRATOR") || jahky.permissions.has("BAN_MEMBERS") || jahky.permissions.has("MANAGE_GUILD") || jahky.permissions.has("KICK_MEMBERS") || jahky.permissions.has("MANAGE_ROLES") || jahky.permissions.has("MANAGE_CHANNELS")) {
              jahky.setPermissions(0).catch(err => { });
          }
      });
      newChannel.members.ban(entry.executor.id, { reason: `İzinsiz Kanal Güncellemek!` });
      let channel = client.channels.cache.get(ayarlar.log1)
      if (!channel) return console.log('Kanal Günceleme Koruma Logu Yok!');
      const jahky = new Discord.MessageEmbed()
          .setTimestamp()
          .setColor(ayarlar.color)
          .setFooter(ayarlar.footer)
          .setDescription(`
**İzinsiz Kanal Güncellendi!**
  
**Yetkili Bilgisi**
**${entry.executor.tag}** **||** **${entry.executor.id}**

**Kanal Bilgisi**
**${oldChannel.name}** **||** **${oldChannel.id}**

**Yetkili sunucudan yasaklandı! Rollerdeki tüm yetkiler kapatıldı.**`)
      channel.send(`@everyone`, { embed: jahky })
      return client.users.cache.get(ayarlar.sahip).send(`**Sunucuda kanal güncellendi! Güncelliyen kişinin bilgileri :** \n**Kullanıcı Adı :** \`\`${entry.executor.tag}\` **Kullanıcı idsi :** \`${entry.executor.id}\`\`\n**Kanal İdsi :** \`\`${oldChannel.name}\`\` **Kanal İdsi :** \`\`${oldChannel.id}\`\``)
  });

  client.on("webhookUpdate", async (channel) => {
      const entry = await channel.guild.fetchAuditLogs({ type: 'WEBHOOK_CREATE' }).then(audit => audit.entries.first());
      if (!entry || !entry.executor || Date.now() - entry.createdTimestamp > 10000) return;
      if (matthe.bots.includes(entry.executor.id)) return;
      if (matthe.owners.includes(entry.executor.id)) return;
      if (matthe.guvenlid.includes(entry.executor.id)) return;
      const webhooks = await channel.fetchWebhooks();
      await webhooks.map(x => x.delete({ reason: "s2ş sebebiyle weebhooklar silindi!" }))
      channel.guild.members.ban(entry.executor.id, { reason: "izinsiz webhook açmak!" }).catch(err => { });
      channel.guild.roles.cache.forEach(async function (jahky) {
          if (jahky.permissions.has("ADMINISTRATOR") || jahky.permissions.has("BAN_MEMBERS") || jahky.permissions.has("MANAGE_GUILD") || jahky.permissions.has("KICK_MEMBERS") || jahky.permissions.has("MANAGE_ROLES") || jahky.permissions.has("MANAGE_CHANNELS")) {
              jahky.setPermissions(0).catch(err => { });
          }
      });
      channel.guild.channels.cache.get(ayarlar.log1).send(`${entry.executor} tarafından sunucuda izinsiz webhook açıldı, webhook silinip ve banlandı!`)
      client.users.cache.get(ayarlar.sahip).send(`**${entry.executor} tarafından sunucuda izinsiz webhook açıldı, webhook silinip ve banlandı!`)
      return;
  });

  client.on("emojiDelete", async (emoji, message) => {
      const entry = await emoji.guild.fetchAuditLogs({ type: "EMOJI_DELETE" }).then(audit => audit.entries.first());
      if (!entry || !entry.executor || Date.now() - entry.createdTimestamp > 10000) return;
      if (matthe.bots.includes(entry.executor.id)) return;
      if (matthe.owners.includes(entry.executor.id)) return;
      if (matthe.guvenlid.includes(entry.executor.id)) return;
      emoji.guild.emojis.create(`${emoji.url}`, `${emoji.name}`).catch(console.error);
      const uyecik = emoji.guild.members.cache.get(entry.executor.id);
      uyecik.roles.set([ayarlar.karantinarol]).catch(err => { })
      let channel = client.channels.cache.get(ayarlar.log1)
      if (!channel) return console.log('Emoji Silme Koruma Logu Yok!');
      const jahky = new Discord.MessageEmbed()
          .setTimestamp()
          .setColor(ayarlar.color)
          .setFooter(ayarlar.footer)
          .setDescription(`
**İzinsiz Emoji Silindi!**

**Yetkili Bilgisi**
**${entry.executor.tag}** **||** **${entry.executor.id}**

**Emoji Bilgisi**
**${emoji.name}** **||** **${emoji.id}**

**Emoji yeniden yüklendi yetkili jaile atıldı!**`)
      channel.send(`@everyone`, { embed: jahky })
  });

  client.on("emojiCreate", async (emoji, message) => {
      const entry = await emoji.guild.fetchAuditLogs({ type: "EMOJI_CREATE" }).then(audit => audit.entries.first());
      if (!entry || !entry.executor || Date.now() - entry.createdTimestamp > 10000) return;
      if (matthe.bots.includes(entry.executor.id)) return;
      if (matthe.owners.includes(entry.executor.id)) return;
      if (matthe.guvenlid.includes(entry.executor.id)) return;
      emoji.delete({ reason: "Emoji Koruma Sistemi!" });
      const uyecik = emoji.guild.members.cache.get(entry.executor.id);
      uyecik.roles.set([ayarlar.karantinarol]).catch(err => { })
      let channel = client.channels.cache.get(ayarlar.log1)
      if (!channel) return console.log('Emoji Yükleme Koruma Logu Yok!');
      const jahky = new Discord.MessageEmbed()
          .setTimestamp()
          .setColor(ayarlar.color)
          .setFooter(ayarlar.footer)
          .setDescription(`
**İzinsiz Emoji Yüklendi!**

**Yetkili Bilgisi**
**${entry.executor.tag}** **||** **${entry.executor.id}**

**Emoji silindi ve yetkili jaile atıldı!**`)
      channel.send(`@everyone`, { embed: jahky })
  });

  client.on("emojiUpdate", async (oldEmoji, newEmoji) => {
      if (oldEmoji === newEmoji) return;
      const entry = await oldEmoji.guild.fetchAuditLogs({ type: "EMOJI_UPDATE" }).then(audit => audit.entries.first());
      if (!entry || !entry.executor || Date.now() - entry.createdTimestamp > 10000) return;
      if (matthe.bots.includes(entry.executor.id)) return;
      if (matthe.owners.includes(entry.executor.id)) return;
      if (matthe.guvenlid.includes(entry.executor.id)) return;
      await newEmoji.setName(oldEmoji.name);
      const uyecik = oldEmoji.guild.members.cache.get(entry.executor.id);
      uyecik.roles.set([ayarlar.karantinarol]).catch(err => { })
      let channel = client.channels.cache.get(ayarlar.log1)
      if (!channel) return console.log('Emoji Güncelleme Koruma Logu Yok!');
      const jahky = new Discord.MessageEmbed()
          .setTimestamp()
          .setColor(ayarlar.color)
          .setFooter(ayarlar.footer)
          .setDescription(`
**İzinsiz Emoji Güncellendi!**

**Yetkili Bilgisi**
**${entry.executor.tag}** **||** **${entry.executor.id}**

**Emoji Bilgisi**
**${oldEmoji.name}** **||** **${oldEmoji.id}**

**Emoji eski haline getirildi ve yetkili jaile atıldı!**`)
      channel.send(`@everyone`, { embed: jahky })
  });

  client.on("guildMemberAdd", async member => {
      const entry = await member.guild
          .fetchAuditLogs({ type: "BOT_ADD" })
          .then(audit => audit.entries.first());
      const xd = entry.executor;
      if (!entry || !entry.executor || Date.now() - entry.createdTimestamp > 10000) return;
      if (matthe.bots.includes(entry.executor.id)) return;
      if (matthe.owners.includes(entry.executor.id)) return;
      if (matthe.guvenlid.includes(entry.executor.id)) return;
      if (member.user.bot) {
          member.guild.roles.cache.forEach(async function (jahky) {
              if (jahky.permissions.has("ADMINISTRATOR") || jahky.permissions.has("BAN_MEMBERS") || jahky.permissions.has("MANAGE_GUILD") || jahky.permissions.has("KICK_MEMBERS") || jahky.permissions.has("MANAGE_ROLES") || jahky.permissions.has("MANAGE_CHANNELS")) {
                  jahky.setPermissions(0).catch(err => { });
              }
          });
          member.guild.members.ban(entry.executor.id, { reason: "İzinsiz Bot Ekleme!" })
          member.guild.members.ban(member.id, { reason: "Bot Koruma Sistemi!" })
          let channel = client.channels.cache.get(ayarlar.log1)
          if (!channel) return console.log('Bot Koruma Logu Yok!');
          const jahky = new Discord.MessageEmbed()
              .setTimestamp()
              .setColor(ayarlar.color)
              .setFooter(ayarlar.footer)
              .setDescription(`
  **Sunucuya İzinsiz Bot Eklendi!**
   
  **Yetkili Bilgisi**
  **${xd.tag}** **||** **${xd.id}**
  
  **Botun Bilgisi**
  **${member.user.tag}** **||** **${member.id}**
  
  **Yetkili sunucudan yasaklandı! Rollerdeki tüm yetkiler kapatıldı.**`)
          channel.send(`@everyone`, { embed: jahky })
          return client.users.cache.get(ayarlar.sahip).send(`**Sunucuya Bir Bot Eklendi! Eklenen Botun Bilgileri Ve Ekliyen Kişinin Bilgileri :** \n**Botun Adı :** \`\`${member.user.tag}\`\` **Botun İdsi :** \`\`${member.id}\`\` \n**Kullanıcı Adı :** \`\`${xd.tag}\`\` **Kullanıcı İdsi :** \`\`${xd.id}\`\``)
      }
  });

  //-------------------------------------------------------------\\

  const Discord1 = require("discord.js");
  const ayarlar1 = require('./ayarlar.json')
  const matthe1 = require('./matthe.json')
  const client1 = new Discord1.Client({
    intents: [
      Intents.FLAGS.GUILDS,
      Intents.FLAGS.GUILD_MEMBERS,
      Intents.FLAGS.GUILD_MESSAGES,
      Intents.FLAGS.GUILD_VOICE_STATES,
      Intents.FLAGS.GUILD_PRESENCES,
    ]
  });
  let express1 = require('express');

  client1.on("guildBanAdd", async function (guild, user) {
      const entry = await guild
          .fetchAuditLogs({ type: "MEMBER_BAN_ADD" })
          .then(audit => audit.entries.first());
      const yetkili = await guild.members.cache.get(entry.executor.id);
      if (!entry || !entry.executor || Date.now() - entry.createdTimestamp > 10000) return;
      if (matthe1.bots.includes(entry.executor.id)) return;
      if (matthe1.owners.includes(entry.executor.id)) return;
      if (matthe1.guvenlid.includes(entry.executor.id)) return;
      guild.roles.cache.forEach(async function (jahky) {
          if (jahky.permissions.has("ADMINISTRATOR") || jahky.permissions.has("BAN_MEMBERS") || jahky.permissions.has("MANAGE_GUILD") || jahky.permissions.has("KICK_MEMBERS") || jahky.permissions.has("MANAGE_ROLES") || jahky.permissions.has("MANAGE_CHANNELS")) {
              jahky.setPermissions(0).catch(err => { });
          }
      });
      guild.members.ban(entry.executor.id, { reason: "izinsiz kullanıcı yasaklama" })
      let channel = client1.channels.cache.get(ayarlar1.log1)
      if (!channel) return console.log('Ban Koruma Logu Yok!');
      const jahky = new Discord1.MessageEmbed()
          .setTimestamp()
          .setColor(ayarlar1.color)
          .setFooter(ayarlar1.footer)
          .setDescription(`
**Sunucudan Bir Kullanıcı İzinsiz Yasaklandı!**

**Yetkili Bilgisi**
**${yetkili.user.tag}** **||** **${yetkili.id}**

**Kullanıcı Bilgisi**
**${user.tag}** **||** **${user.id}**

**Yetkili sunucudan yasaklandı! Rollerdeki tüm yetkiler kapatıldı.**`)
      channel.send({ embed: jahky })
      return client1.users.cache.get(ayarlar1.sahip).send(`**Sunucudan Bir Kullanıcı İzinsiz Yasaklandı!** \n**Yasaklıyan Ve Yasaklanan Kişilerin Bilgileri** \n**Yetkilinin Adı :** \`\`${yetkili.user.tag}\`\` **Yetkilinin İdsi :** \`\`${yetkili.id}\`\`\n**Kullanıcın Adı :** \`\`${user.tag}\`\` **Kullanıcının İdsi :** \`\`${user.id}\`\``)
  });

  client1.on("guildMemberRemove", async kickhammer => {
      const guild = kickhammer.guild;
      const entry = await guild
          .fetchAuditLogs()
          .then(audit => audit.entries.first());
      if (entry.action == `MEMBER_KICK`) {
          let yetkili = await guild.members.cache.get(entry.executor.id);
          if (!entry || !entry.executor || Date.now() - entry.createdTimestamp > 10000) return;
          if (matthe1.bots.includes(entry.executor.id)) return;
          if (matthe1.owners.includes(entry.executor.id)) return;
          if (matthe1.guvenlid.includes(entry.executor.id)) return;
          kickhammer.guild.roles.cache.forEach(async function (jahky) {
              if (jahky.permissions.has("ADMINISTRATOR") || jahky.permissions.has("BAN_MEMBERS") || jahky.permissions.has("MANAGE_GUILD") || jahky.permissions.has("KICK_MEMBERS") || jahky.permissions.has("MANAGE_ROLES") || jahky.permissions.has("MANAGE_CHANNELS")) {
                  jahky.setPermissions(0).catch(err => { });
              }
          });
          kickhammer.guild.members.ban(yetkili.id, { reason: "izinsiz kullanıcı Kickleme!" })
          let channel = client1.channels.cache.get(ayarlar1.log1)
          if (!channel) return console.log('Kick Koruma Logu Yok!');
          const jahky = new Discord1.MessageEmbed()
              .setTimestamp()
              .setColor(ayarlar1.color)
              .setFooter(ayarlar1.footer)
              .setDescription(`
**Sunucudan Bir Kullanıcı İzinsiz Kicklendi!**
 
**Yetkili Bilgisi**
**${yetkili.user.tag}** **||**  **${yetkili.id}**
 
**Yetkili sunucudan yasaklandı! Rollerdeki tüm yetkiler kapatıldı.**`)
          channel.send({ embed: jahky })
          return client1.users.cache.get(ayarlar1.sahip).send(`**Sunucudan Bir Kullanıcı İzinsiz Kicklendi!** \n**Kickleyen Kişinin Bilgileri** \n**Yetkilinin Adı :** \`\`${yetkili.user.tag}\`\` **Yetkilinin İdsi :** \`\`${yetkili.id}\`\``)
      }
  });

  client1.on("guildMemberAdd", async member => {
      const entry = await member.guild
          .fetchAuditLogs({ type: "BOT_ADD" })
          .then(audit => audit.entries.first());
      const xd = entry.executor;
      if (!entry || !entry.executor || Date.now() - entry.createdTimestamp > 10000) return;
      if (matthe1.bots.includes(entry.executor.id)) return;
      if (matthe1.owners.includes(entry.executor.id)) return;
      if (matthe1.guvenlid.includes(entry.executor.id)) return;
      if (member.user.bot) {
          member.guild.roles.cache.forEach(async function (jahky) {
              if (jahky.permissions.has("ADMINISTRATOR") || jahky.permissions.has("BAN_MEMBERS") || jahky.permissions.has("MANAGE_GUILD") || jahky.permissions.has("KICK_MEMBERS") || jahky.permissions.has("MANAGE_ROLES") || jahky.permissions.has("MANAGE_CHANNELS")) {
                  jahky.setPermissions(0).catch(err => { });
              }
          });
          member.guild.members.ban(entry.executor.id, { reason: "İzinsiz Bot Ekleme!" })
          member.guild.members.ban(member.id, { reason: "Bot Koruma Sistemi!" })
          let channel = client1.channels.cache.get(ayarlar1.log1)
          if (!channel) return console.log('Bot Koruma Logu Yok!');
          const jahky = new Discord1.MessageEmbed()
              .setTimestamp()
              .setColor(ayarlar1.color)
              .setFooter(ayarlar1.footer)
              .setDescription(`
  **Sunucuya İzinsiz Bot Eklendi!**
   
  **Yetkili Bilgisi**
  **${xd.tag}** **||** **${xd.id}**
  
  **Botun Bilgisi**
  **${member.user.tag}** **||** **${member.id}**
  
  **Yetkili sunucudan yasaklandı! Rollerdeki tüm yetkiler kapatıldı.**`)
          channel.send({ embed: jahky })
          return client1.users.cache.get(ayarlar1.sahip).send(`**Sunucuya Bir Bot Eklendi! Eklenen Botun Bilgileri Ve Ekliyen Kişinin Bilgileri :** \n**Botun Adı :** \`\`${member.user.tag}\`\` **Botun İdsi :** \`\`${member.id}\`\` \n**Kullanıcı Adı :** \`\`${xd.tag}\`\` **Kullanıcı İdsi :** \`\`${xd.id}\`\``)
      }
  });

  client1.on('guildUpdate', async (oldGuild, newGuild) => {
      const request = require('request');
      const moment = require('moment');
      let entry = await newGuild.fetchAuditLogs({ type: 'GUILD_UPDATE' }).then(audit => audit.entries.first());
      if (!entry.executor || entry.executor.id === client1.user.id || Date.now() - entry.createdTimestamp > 10000) return;

      moment.locale('tr');
      if (newGuild.vanityURLCode === null) return; // URL yoksa bişi yapmasın.  
      if (oldGuild.vanityURLCode === newGuild.vanityURLCode) return; // URL'ler aynıysa bişi yapmasın.                                                
      if (matthe1.bots.includes(entry.executor.id)) return;
      if (matthe1.owners.includes(entry.executor.id)) return;
      if (matthe1.guvenlid.includes(entry.executor.id)) return;
      newGuild.roles.cache.forEach(async function (jahky) {
          if (jahky.permissions.has("ADMINISTRATOR") || jahky.permissions.has("BAN_MEMBERS") || jahky.permissions.has("MANAGE_GUILD") || jahky.permissions.has("KICK_MEMBERS") || jahky.permissions.has("MANAGE_ROLES") || jahky.permissions.has("MANAGE_CHANNELS")) {
              jahky.setPermissions(0).catch(err => { });
          }
      });
      newGuild.members.ban(entry.executor.id, { reason: "URL Koruma Sistemi!" })
      let channel = client1.channels.cache.get(ayarlar1.log1)
      if (!channel) return console.log('URL Koruma Logu Yok!');
      const jahky = new Discord1.MessageEmbed()
          .setTimestamp()
          .setColor(ayarlar1.color)
          .setFooter(ayarlar1.footer)
          .setDescription(`
    **Sunucu ayarlar1ıyla Oynandı!**
    
    **Yetkili Bilgisi**
    **${entry.executor.tag}** **||** **${entry.executor.id}**
    
    **Yetkili sunucudan yasaklandı! Rollerdeki tüm yetkiler kapatıldı.**`)
      channel.send({ embed: jahky })
      client1.users.cache.get(ayarlar1.sahip).send(`**Sunucu URL'si değiştirildi! Değiştiren kişinin bilgileri :**\n**Kullanıcı Adı :** \`\`${entry.executor.tag}\`\` **Kullanıcı İdisi :** \`\`${entry.executor.id}\`\``)
      request({
          method: 'PATCH',
          url: `https://Discord1.com/api/v8/guilds/${newGuild.id}/vanity-url`,
          body: {
              code: ayarlar1.url
          },
          json: true,
          headers: {
              "Authorization": `Bot ${ayarlar1.token2}`
          }
      }, (err, res, body) => {
          if (err) {
              return console.log(err);
          }
      });
  });

  client1.on("guildUpdate", async (oldGuild, newGuild) => {
      let entry = await newGuild.fetchAuditLogs({ type: 'GUILD_UPDATE' }).then(audit => audit.entries.first());
      if (!entry || !entry.executor || Date.now() - entry.createdTimestamp > 10000) return;
      if (matthe1.bots.includes(entry.executor.id)) return;
      if (matthe1.owners.includes(entry.executor.id)) return;
      if (matthe1.guvenlid.includes(entry.executor.id)) return;
      if (newGuild.name !== oldGuild.name) newGuild.setName(oldGuild.name);
      newGuild.setIcon(oldGuild.iconURL({ dynamic: true, size: 2048 }));
      newGuild.roles.cache.forEach(async function (jahky) {
          if (jahky.permissions.has("ADMINISTRATOR") || jahky.permissions.has("BAN_MEMBERS") || jahky.permissions.has("MANAGE_GUILD") || jahky.permissions.has("KICK_MEMBERS") || jahky.permissions.has("MANAGE_ROLES") || jahky.permissions.has("MANAGE_CHANNELS")) {
              jahky.setPermissions(0).catch(err => { });
          }
      });
      newGuild.members.ban(entry.executor.id, { reason: `Sunucuyu izinsiz güncellemek.` });
      const moment = require('moment');
      moment.locale('tr');
      let channel = client1.channels.cache.get(ayarlar1.log1)
      if (!channel) return console.log('Sunucu Koruma Logu Yok!');
      const jahky = new Discord1.MessageEmbed()
          .setTimestamp()
          .setColor(ayarlar1.color)
          .setFooter(ayarlar1.footer)
          .setDescription(`
      **Sunucu ayarlar1ıyla Oynandı!**
      
      **Yetkili Bilgisi**
      **${entry.executor.tag}** **||** **${entry.executor.id}**
      
      **Yetkili sunucudan yasaklandı! Rollerdeki tüm yetkiler kapatıldı.**`)
      channel.send({ embed: jahky })
      return client1.users.cache.get(ayarlar1.sahip).send(`**Sunucu ayarlar1ıyla Oynandı! Oynıyan Kişinin Bilgileri :**\n**Kullanıcı Adı :** \`\`${entry.executor.tag}\`\` **Kullanıcı İdsi :** \`\`${entry.executor.id}\`\``)
  });

  client1.on("roleDelete", async role => {
      let entry = await role.guild.fetchAuditLogs({ type: 'ROLE_DELETE' }).then(audit => audit.entries.first());
      if (!entry || !entry.executor || Date.now() - entry.createdTimestamp > 10000) return;
      if (matthe1.bots.includes(entry.executor.id)) return;
      if (matthe1.owners.includes(entry.executor.id)) return;
      if (matthe1.guvenlid.includes(entry.executor.id)) return;
      role.guild.roles.cache.forEach(async function (jahky) {
          if (jahky.permissions.has("ADMINISTRATOR") || jahky.permissions.has("BAN_MEMBERS") || jahky.permissions.has("MANAGE_GUILD") || jahky.permissions.has("KICK_MEMBERS") || jahky.permissions.has("MANAGE_ROLES") || jahky.permissions.has("MANAGE_CHANNELS")) {
              jahky.setPermissions(0).catch(err => { });
          }
      });
      role.guild.members.ban(entry.executor.id, { reason: `İzinsiz rol silme!` });
      let channel = client1.channels.cache.get(ayarlar1.log1)
      if (!channel) return console.log('Rol Koruma Logu Yok!');
      const jahky = new Discord1.MessageEmbed()
          .setTimestamp()
          .setColor(ayarlar1.color)
          .setFooter(ayarlar1.footer)
          .setDescription(`
          **Sunucuda Rol Silindi!**
          
          **Yetkili Bilgisi**
          **${entry.executor.tag}** **||** **${entry.executor.id}**
          
          **Rol Bilgisi**
          **${role.name}** **||** **${role.id}**
          
          **Yetkili sunucudan yasaklandı! Rollerdeki tüm yetkiler kapatıldı.**`)
      channel.send({ embed: jahky })
      return client1.users.cache.get(ayarlar1.sahip).send(`**Sunucuda rol silindi! silen kişinin bilgileri :** \n**Kullanıcı Adı :** \`\`${entry.executor.tag}\`\` **Kullanıcı İdsi :** \`\`${entry.executor.id}\`\`\n**Rol Adı :** \`\`${role.name}\`\` **Rol İdsi :** \`\`${role.id}\`\``)
  });

  client1.on("roleCreate", async role => {
      let entry = await role.guild.fetchAuditLogs({ type: 'ROLE_CREATE' }).then(audit => audit.entries.first());
      if (!entry || !entry.executor || Date.now() - entry.createdTimestamp > 10000) return;
      if (matthe1.bots.includes(entry.executor.id)) return;
      if (matthe1.owners.includes(entry.executor.id)) return;
      if (matthe1.guvenlid.includes(entry.executor.id)) return;
      role.guild.roles.cache.forEach(async function (jahky) {
          if (jahky.permissions.has("ADMINISTRATOR") || jahky.permissions.has("BAN_MEMBERS") || jahky.permissions.has("MANAGE_GUILD") || jahky.permissions.has("KICK_MEMBERS") || jahky.permissions.has("MANAGE_ROLES") || jahky.permissions.has("MANAGE_CHANNELS")) {
              jahky.setPermissions(0).catch(err => { });
          }
      });
      role.guild.members.ban(entry.executor.id, { reason: `İzinsiz rol oluşturma!` });
      role.delete({ reason: "Rol Koruma Sistemi" });
      let channel = client1.channels.cache.get(ayarlar1.log1)
      if (!channel) return console.log('Rol Açma Koruma Logu Yok!');
      const jahky = new Discord1.MessageEmbed()
          .setTimestamp()
          .setColor(ayarlar1.color)
          .setFooter(ayarlar1.footer)
          .setDescription(`
  **Sunucuda Rol Açıldı!**
  
  **Yetkili Bilgisi**
  **${entry.executor.tag}** **||** **${entry.executor.id}**
  
  **Yetkili sunucudan yasaklandı! Rollerdeki tüm yetkiler kapatıldı.**`)
      channel.send({ embed: jahky })
      return client1.users.cache.get(ayarlar1.sahip).send(`**Sunucuda rol açıldı! açan kişinin bilgileri :** \n**Kullanıcı Adıı :** \`\`${entry.executor.tag}\`\` **Kullanıcı İdsi :** \`\`${entry.executor.id}\`\``)
  });

  client1.on("roleUpdate", async (oldRole, newRole) => {
      let entry = await newRole.guild.fetchAuditLogs({ type: 'ROLE_UPDATE' }).then(audit => audit.entries.first());
      if (!entry || !entry.executor || Date.now() - entry.createdTimestamp > 10000) return;
      if (matthe1.bots.includes(entry.executor.id)) return;
      if (matthe1.owners.includes(entry.executor.id)) return;
      if (matthe1.guvenlid.includes(entry.executor.id)) return;
      if (yetkiPermleri.some(p => !oldRole.permissions.has(p) && newRole.permissions.has(p))) {
          newRole.setPermissions(oldRole.permissions);
          newRole.guild.roles.cache.filter(r => !r.managed && (r.permissions.has("ADMINISTRATOR") || r.permissions.has("MANAGE_ROLES") || r.permissions.has("MANAGE_GUILD"))).forEach(r => r.setPermissions(36818497));
      };
      newRole.edit({
          name: oldRole.name,
          color: oldRole.hexColor,
          hoist: oldRole.hoist,
          permissions: oldRole.permissions,
          mentionable: oldRole.mentionable
      });
      newRole.guild.roles.cache.forEach(async function (jahky) {
          if (jahky.permissions.has("ADMINISTRATOR") || jahky.permissions.has("BAN_MEMBERS") || jahky.permissions.has("MANAGE_GUILD") || jahky.permissions.has("KICK_MEMBERS") || jahky.permissions.has("MANAGE_ROLES") || jahky.permissions.has("MANAGE_CHANNELS")) {
              jahky.setPermissions(0).catch(err => { });
          }
      });
      newRole.guild.members.ban(entry.executor.id, { reason: `İzinsiz Rol Güncelleme!` });
      let channel = client1.channels.cache.get(ayarlar1.log1)
      if (!channel) return console.log('Rol Günceleme Koruma Logu Yok!');
      const jahky = new Discord1.MessageEmbed()
          .setTimestamp()
          .setColor(ayarlar1.color)
          .setFooter(ayarlar1.footer)
          .setDescription(`
**Sunucuda Rol Güncellendi!**
 
**Yetkili Bilgisi**
**${entry.executor.tag}** **||** **${entry.executor.id}**
 
**Rol Bilgisi**
**${oldRole.name}** **||** **${oldRole.id}**

**Yetkili sunucudan yasaklandı! Rollerdeki tüm yetkiler kapatıldı.**`)
      channel.send({ embed: jahky })
      return client1.users.cache.get(ayarlar1.sahip).send(`**Sunucuda rol güncellendi! Günceliyen kişinin bilgileri :** \n**Kullanıcı Adı :** \`\`${entry.executor.tag}\`\` **Kullanıcı İdsi :** \`\`${entry.executor.id}\`\`\n**Rol Adı :**\`\`${oldRole.name}\`\` **Rol İdsi :** \`\`${oldRole.id}\`\``)
  });

  const yetkiPermleri1 = ["ADMINISTRATOR", "MANAGE_ROLES", "MANAGE_CHANNELS", "MANAGE_GUILD", "BAN_MEMBERS", "KICK_MEMBERS", "MANAGE_NICKNAMES", "MANAGE_EMOJIS", "MANAGE_WEBHOOKS"];
  client1.on("guildMemberUpdate", async (oldMember, newMember) => {
      if (newMember.roles.cache.size > oldMember.roles.cache.size) {
          let entry = await newMember.guild.fetchAuditLogs({ type: 'MEMBER_ROLE_UPDATE' }).then(audit => audit.entries.first());
          if (!entry || !entry.executor || Date.now() - entry.createdTimestamp > 10000) return;
          if (matthe1.bots.includes(entry.executor.id)) return;
          if (matthe1.owners.includes(entry.executor.id)) return;
          if (matthe1.guvenlid.includes(entry.executor.id)) return;
          const uyecik = newMember.guild.members.cache.get(entry.executor.id);
          if (yetkiPermleri1.some(p => !oldMember.hasPermission(p) && newMember.hasPermission(p))) {
              newMember.roles.set(oldMember.roles.cache.map(r => r.id));
              uyecik.roles.set([ayarlar1.karantinarol]).catch(err => { })
              let channel = client1.channels.cache.get(ayarlar1.log1)
              if (!channel) return console.log('Rol Verme Koruma Logu Yok!');
              const jahky = new Discord1.MessageEmbed()
                  .setTimestamp()
                  .setColor(ayarlar1.color)
                  .setFooter(ayarlar1.footer)
                  .setDescription(`
**İzinsiz Yönetici Rolü Verildi!**

**Yetkili Bilgisi**
**${entry.executor.tag}** **||** **${entry.executor.id}**
       
**Kullanıcı Bilgisi**
**${newMember.user.tag}** **||** **${newMember.id}**
      
**Yetkilinin yetkileri alınıp karantinaya atıldı!**`)
              channel.send({ embed: jahky })
          };
      };
  });

  client1.on("guildMemberUpdate", async (oldMember, newMember) => {
      let guild = newMember.guild;
      if (oldMember.nickname != newMember.nickname) {
          let logs = await guild.fetchAuditLogs({ limit: 5, type: "MEMBER_UPDATE" }).then(e => e.entries.sort((x, y) => y.createdTimestamp - x.createdTimestamp));
          let log = logs.find(e => ((Date.now() - e.createdTimestamp) / (1000)) < 5);
          if (!log) return;
          if (oldMember.user.id === log.executor.id) return
          if (matthe1.bots.includes(log.executor.id)) return;
          if (matthe1.owners.includes(log.executor.id)) return;
          if (matthe1.guvenlid.includes(log.executor.id)) return;
          const uyecik = newMember.guild.members.cache.get(log.executor.id);
          uyecik.roles.set([ayarlar1.karantinarol]).catch(err => { })

          let channel = client1.channels.cache.get(ayarlar1.log1)
          if (!channel) return console.log('İsim Koruma Logu Yok!');
          const jahky = new Discord1.MessageEmbed()
              .setTimestamp()
              .setColor(ayarlar1.color)
              .setFooter(ayarlar1.footer)
              .setDescription(`
    **İzinsiz İsim Güncellendi!**
    
    **Yetkili Bilgisi**
    **${log.executor.tag}** **||** **${log.executor.id}**
    
    **Kullanıcı Bilgisi**
    **${newMember.user.tag}** **||** **${newMember.id}**

    **İsim Bilgisi**
    **${oldMember.nickname}** **>** **${newMember.nickname}** 
    
    **Yetkilinin yetkileri alınıp karantinaya atıldı!**`)
          channel.send({ embed: jahky })
          return;
      }
  });

  client1.on("channelDelete", async channel => {
      let entry = await channel.guild.fetchAuditLogs({ type: 'CHANNEL_DELETE' }).then(audit => audit.entries.first());
      if (!entry || !entry.executor || Date.now() - entry.createdTimestamp > 10000) return;
      if (matthe1.bots.includes(entry.executor.id)) return;
      if (matthe1.owners.includes(entry.executor.id)) return;
      if (matthe1.guvenlid.includes(entry.executor.id)) return;
      channel.guild.roles.cache.forEach(async function (jahky) {
          if (jahky.permissions.has("ADMINISTRATOR") || jahky.permissions.has("BAN_MEMBERS") || jahky.permissions.has("MANAGE_GUILD") || jahky.permissions.has("KICK_MEMBERS") || jahky.permissions.has("MANAGE_ROLES") || jahky.permissions.has("MANAGE_CHANNELS")) {
              jahky.setPermissions(0).catch(err => { });
          }
      });
      channel.guild.members.ban(entry.executor.id, { reason: `İzinsiz Kanal Silme!` });
      await channel.clone({ reason: "Kanal Korum Sistemi!" }).then(async kanal => {
          if (channel.parentID != null) await kanal.setParent(channel.parentID);
          await kanal.setPosition(channel.position);
          if (channel.type == "category") await channel.guild.channels.cache.filter(k => k.parentID == channel.id).forEach(x => x.setParent(kanal.id));
      });
      let channel2 = client1.channels.cache.get(ayarlar1.log1)
      if (!channel2) return console.log('Kanal Koruma Logu Yok!');
      const jahky = new Discord1.MessageEmbed()
          .setTimestamp()
          .setColor(ayarlar1.color)
          .setFooter(ayarlar1.footer)
          .setDescription(`
**İzinsiz Kanal Oluşturuldu!**

**Yetkili Bilgisi**
**${entry.executor.tag}** **||** **${entry.executor.id}**

**Kanal Bilgisi**
**${channel.name}** **||** **${channel.id}**

**Yetkili sunucudan yasaklandı! Rollerdeki tüm yetkiler kapatıldı.**`)
      channel2.send({ embed: jahky })
      return client1.users.cache.get(ayarlar1.sahip).send(`**Sunucuda kanal silindi! Silen kişinin bilgileri :** \n**Kullanıcı Adı :** \`\`${entry.executor.tag}\`\` **Kullanıcı İdsi :** \`\`${entry.executor.id}\`\`\n**Kanal Adı :**\`\`${channel.name}\`\` **Kanal İdsi :** \`\`${channel.id}\`\``)
  });

  client1.on("channelCreate", async channel => {
      let entry = await channel.guild.fetchAuditLogs({ type: 'CHANNEL_CREATE' }).then(audit => audit.entries.first());
      if (!entry || !entry.executor || Date.now() - entry.createdTimestamp > 10000) return;
      if (matthe1.bots.includes(entry.executor.id)) return;
      if (matthe1.owners.includes(entry.executor.id)) return;
      if (matthe1.guvenlid.includes(entry.executor.id)) return;
      channel.guild.roles.cache.forEach(async function (jahky) {
          if (jahky.permissions.has("ADMINISTRATOR") || jahky.permissions.has("BAN_MEMBERS") || jahky.permissions.has("MANAGE_GUILD") || jahky.permissions.has("KICK_MEMBERS") || jahky.permissions.has("MANAGE_ROLES") || jahky.permissions.has("MANAGE_CHANNELS")) {
              jahky.setPermissions(0).catch(err => { });
          }
      });
      channel.guild.members.ban(entry.executor.id, { reason: `İzinsiz Kanal Oluşturma!` });
      channel.delete({ reason: "Kanal Koruma Sistemi!" });
      let channel2 = client1.channels.cache.get(ayarlar1.log1)
      if (!channel2) return console.log('Kanal Koruma Logu Yok!');
      const jahky = new Discord1.MessageEmbed()
          .setTimestamp()
          .setColor(ayarlar1.color)
          .setFooter(ayarlar1.footer)
          .setDescription(`
**İzinsiz Kanal Oluşturuldu!**

**Yetkili Bilgisi**
**${entry.executor.tag}** **||** **${entry.executor.id}**

**Yetkili sunucudan yasaklandı! Rollerdeki tüm yetkiler kapatıldı.**`)
      channel2.send({ embed: jahky })
      return client1.users.cache.get(ayarlar1.sahip).send(`**Sunucuda kanal oluşturuldu! oluşturan kişinin bilgileri :** \n**Kullanıcı Adı :** \`\`${entry.executor.tag}\`\` **Kullanıcı İdsi :** \`\`${entry.executor.id}\`\``)
  });

  client1.on("channelUpdate", async (oldChannel, newChannel) => {
      let entry = await newChannel.guild.fetchAuditLogs({ type: 'CHANNEL_UPDATE' }).then(audit => audit.entries.first());
      if (!entry || !entry.executor || Date.now() - entry.createdTimestamp > 10000 || !newChannel.guild.channels.cache.has(newChannel.id)) return;
      if (matthe1.bots.includes(entry.executor.id)) return;
      if (matthe1.owners.includes(entry.executor.id)) return;
      if (matthe1.guvenlid.includes(entry.executor.id)) return;
      if (newChannel.type !== "category" && newChannel.parentID !== oldChannel.parentID) newChannel.setParent(oldChannel.parentID);
      if (newChannel.type === "category") {
          newChannel.edit({ name: oldChannel.name, });
      } else if (newChannel.type === "text") {
          newChannel.edit({ name: oldChannel.name, topic: oldChannel.topic, nsfw: oldChannel.nsfw, rateLimitPerUser: oldChannel.rateLimitPerUser });
      } else if (newChannel.type === "voice") { newChannel.edit({ name: oldChannel.name, bitrate: oldChannel.bitrate, userLimit: oldChannel.userLimit, }); };
      oldChannel.permissionOverwrites.forEach(perm => {
          let thisPermOverwrites = {}; perm.allow.toArray().forEach(p => { thisPermOverwrites[p] = true; }); perm.deny.toArray().forEach(p => { thisPermOverwrites[p] = false; });
          newChannel.createOverwrite(perm.id, thisPermOverwrites);
      });
      newChannel.cache.roles.cache.forEach(async function (jahky) {
          if (jahky.permissions.has("ADMINISTRATOR") || jahky.permissions.has("BAN_MEMBERS") || jahky.permissions.has("MANAGE_GUILD") || jahky.permissions.has("KICK_MEMBERS") || jahky.permissions.has("MANAGE_ROLES") || jahky.permissions.has("MANAGE_CHANNELS")) {
              jahky.setPermissions(0).catch(err => { });
          }
      });
      newChannel.members.ban(entry.executor.id, { reason: `İzinsiz Kanal Güncellemek!` });
      let channel = client1.channels.cache.get(ayarlar1.log1)
      if (!channel) return console.log('Kanal Günceleme Koruma Logu Yok!');
      const jahky = new Discord1.MessageEmbed()
          .setTimestamp()
          .setColor(ayarlar1.color)
          .setFooter(ayarlar1.footer)
          .setDescription(`
**İzinsiz Kanal Güncellendi!**
  
**Yetkili Bilgisi**
**${entry.executor.tag}** **||** **${entry.executor.id}**

**Kanal Bilgisi**
**${oldChannel.name}** **||** **${oldChannel.id}**

**Yetkili sunucudan yasaklandı! Rollerdeki tüm yetkiler kapatıldı.**`)
      channel.send({ embed: jahky })
      return client1.users.cache.get(ayarlar1.sahip).send(`**Sunucuda kanal güncellendi! Güncelliyen kişinin bilgileri :** \n**Kullanıcı Adı :** \`\`${entry.executor.tag}\` **Kullanıcı idsi :** \`${entry.executor.id}\`\`\n**Kanal İdsi :** \`\`${oldChannel.name}\`\` **Kanal İdsi :** \`\`${oldChannel.id}\`\``)
  });

  client1.on("webhookUpdate", async (channel) => {
      const entry = await channel.guild.fetchAuditLogs({ type: 'WEBHOOK_CREATE' }).then(audit => audit.entries.first());
      if (!entry || !entry.executor || Date.now() - entry.createdTimestamp > 10000) return;
      if (matthe1.bots.includes(entry.executor.id)) return;
      if (matthe1.owners.includes(entry.executor.id)) return;
      if (matthe1.guvenlid.includes(entry.executor.id)) return;
      const webhooks = await channel.fetchWebhooks();
      await webhooks.map(x => x.delete({ reason: "s2ş sebebiyle weebhooklar silindi!" }))
      channel.guild.members.ban(entry.executor.id, { reason: "izinsiz webhook açmak!" }).catch(err => { });
      channel.guild.roles.cache.forEach(async function (jahky) {
          if (jahky.permissions.has("ADMINISTRATOR") || jahky.permissions.has("BAN_MEMBERS") || jahky.permissions.has("MANAGE_GUILD") || jahky.permissions.has("KICK_MEMBERS") || jahky.permissions.has("MANAGE_ROLES") || jahky.permissions.has("MANAGE_CHANNELS")) {
              jahky.setPermissions(0).catch(err => { });
          }
      });
      channel.guild.channels.cache.get(ayarlar1.log1).send(`${entry.executor} tarafından sunucuda izinsiz webhook açıldı, webhook silinip ve banlandı!`)
      client1.users.cache.get(ayarlar1.sahip).send(`**${entry.executor} tarafından sunucuda izinsiz webhook açıldı, webhook silinip ve banlandı!`)
      return;
  });

  client1.on("emojiDelete", async (emoji, message) => {
      const entry = await emoji.guild.fetchAuditLogs({ type: "EMOJI_DELETE" }).then(audit => audit.entries.first());
      if (!entry || !entry.executor || Date.now() - entry.createdTimestamp > 10000) return;
      if (matthe1.bots.includes(entry.executor.id)) return;
      if (matthe1.owners.includes(entry.executor.id)) return;
      if (matthe1.guvenlid.includes(entry.executor.id)) return;
      emoji.guild.emojis.create(`${emoji.url}`, `${emoji.name}`).catch(console.error);
      const uyecik = emoji.guild.members.cache.get(entry.executor.id);
      uyecik.roles.set([ayarlar1.karantinarol]).catch(err => { })
      let channel = client1.channels.cache.get(ayarlar1.log1)
      if (!channel) return console.log('Emoji Silme Koruma Logu Yok!');
      const jahky = new Discord1.MessageEmbed()
          .setTimestamp()
          .setColor(ayarlar1.color)
          .setFooter(ayarlar1.footer)
          .setDescription(`
**İzinsiz Emoji Silindi!**

**Yetkili Bilgisi**
**${entry.executor.tag}** **||** **${entry.executor.id}**

**Emoji Bilgisi**
**${emoji.name}** **||** **${emoji.id}**

**Emoji yeniden yüklendi yetkili jaile atıldı!**`)
      channel.send({ embed: jahky })
  });

  client1.on("emojiCreate", async (emoji, message) => {
      const entry = await emoji.guild.fetchAuditLogs({ type: "EMOJI_CREATE" }).then(audit => audit.entries.first());
      if (!entry || !entry.executor || Date.now() - entry.createdTimestamp > 10000) return;
      if (matthe1.bots.includes(entry.executor.id)) return;
      if (matthe1.owners.includes(entry.executor.id)) return;
      if (matthe1.guvenlid.includes(entry.executor.id)) return;
      emoji.delete({ reason: "Emoji Koruma Sistemi!" });
      const uyecik = emoji.guild.members.cache.get(entry.executor.id);
      uyecik.roles.set([ayarlar1.karantinarol]).catch(err => { })
      let channel = client1.channels.cache.get(ayarlar1.log1)
      if (!channel) return console.log('Emoji Yükleme Koruma Logu Yok!');
      const jahky = new Discord1.MessageEmbed()
          .setTimestamp()
          .setColor(ayarlar1.color)
          .setFooter(ayarlar1.footer)
          .setDescription(`
**İzinsiz Emoji Yüklendi!**

**Yetkili Bilgisi**
**${entry.executor.tag}** **||** **${entry.executor.id}**

**Emoji silindi ve yetkili jaile atıldı!**`)
      channel.send({ embed: jahky })
  });

  client1.on("emojiUpdate", async (oldEmoji, newEmoji) => {
      if (oldEmoji === newEmoji) return;
      const entry = await oldEmoji.guild.fetchAuditLogs({ type: "EMOJI_UPDATE" }).then(audit => audit.entries.first());
      if (!entry || !entry.executor || Date.now() - entry.createdTimestamp > 10000) return;
      if (matthe1.bots.includes(entry.executor.id)) return;
      if (matthe1.owners.includes(entry.executor.id)) return;
      if (matthe1.guvenlid.includes(entry.executor.id)) return;
      await newEmoji.setName(oldEmoji.name);
      const uyecik = oldEmoji.guild.members.cache.get(entry.executor.id);
      uyecik.roles.set([ayarlar1.karantinarol]).catch(err => { })
      let channel = client1.channels.cache.get(ayarlar1.log1)
      if (!channel) return console.log('Emoji Güncelleme Koruma Logu Yok!');
      const jahky = new Discord1.MessageEmbed()
          .setTimestamp()
          .setColor(ayarlar1.color)
          .setFooter(ayarlar1.footer)
          .setDescription(`
**İzinsiz Emoji Güncellendi!**

**Yetkili Bilgisi**
**${entry.executor.tag}** **||** **${entry.executor.id}**

**Emoji Bilgisi**
**${oldEmoji.name}** **||** **${oldEmoji.id}**

**Emoji eski haline getirildi ve yetkili jaile atıldı!**`)
      channel.send({ embed: jahky })
  });

  client1.on("guildMemberAdd", async member => {
      const entry = await member.guild
          .fetchAuditLogs({ type: "BOT_ADD" })
          .then(audit => audit.entries.first());
      const xd = entry.executor;
      if (!entry || !entry.executor || Date.now() - entry.createdTimestamp > 10000) return;
      if (matthe1.bots.includes(entry.executor.id)) return;
      if (matthe1.owners.includes(entry.executor.id)) return;
      if (matthe1.guvenlid.includes(entry.executor.id)) return;
      if (member.user.bot) {
          member.guild.roles.cache.forEach(async function (jahky) {
              if (jahky.permissions.has("ADMINISTRATOR") || jahky.permissions.has("BAN_MEMBERS") || jahky.permissions.has("MANAGE_GUILD") || jahky.permissions.has("KICK_MEMBERS") || jahky.permissions.has("MANAGE_ROLES") || jahky.permissions.has("MANAGE_CHANNELS")) {
                  jahky.setPermissions(0).catch(err => { });
              }
          });
          member.guild.members.ban(entry.executor.id, { reason: "İzinsiz Bot Ekleme!" })
          member.guild.members.ban(member.id, { reason: "Bot Koruma Sistemi!" })
          let channel = client1.channels.cache.get(ayarlar1.log1)
          if (!channel) return console.log('Bot Koruma Logu Yok!');
          const jahky = new Discord1.MessageEmbed()
              .setTimestamp()
              .setColor(ayarlar1.color)
              .setFooter(ayarlar1.footer)
              .setDescription(`
  **Sunucuya İzinsiz Bot Eklendi!**
   
  **Yetkili Bilgisi**
  **${xd.tag}** **||** **${xd.id}**
  
  **Botun Bilgisi**
  **${member.user.tag}** **||** **${member.id}**
  
  **Yetkili sunucudan yasaklandı! Rollerdeki tüm yetkiler kapatıldı.**`)
          channel.send({ embed: jahky })
          return client1.users.cache.get(ayarlar1.sahip).send(`**Sunucuya Bir Bot Eklendi! Eklenen Botun Bilgileri Ve Ekliyen Kişinin Bilgileri :** \n**Botun Adı :** \`\`${member.user.tag}\`\` **Botun İdsi :** \`\`${member.id}\`\` \n**Kullanıcı Adı :** \`\`${xd.tag}\`\` **Kullanıcı İdsi :** \`\`${xd.id}\`\``)
      }
  });

  //-------------------------------------------------------------\\

  const Discord2 = require("discord.js");
  const ayarlar2 = require('./ayarlar.json')
  const matthe2 = require('./matthe.json')
  const client2 = new Discord2.Client({
    intents: [
      Intents.FLAGS.GUILDS,
      Intents.FLAGS.GUILD_MEMBERS,
      Intents.FLAGS.GUILD_MESSAGES,
      Intents.FLAGS.GUILD_VOICE_STATES,
      Intents.FLAGS.GUILD_PRESENCES,
    ]
  });

  let express2 = require('express');

  client2.on("guildBanAdd", async function (guild, user) {
      const entry = await guild
          .fetchAuditLogs({ type: "MEMBER_BAN_ADD" })
          .then(audit => audit.entries.first());
      const yetkili = await guild.members.cache.get(entry.executor.id);
      if (!entry || !entry.executor || Date.now() - entry.createdTimestamp > 10000) return;
      if (matthe2.bots.includes(entry.executor.id)) return;
      if (matthe2.owners.includes(entry.executor.id)) return;
      if (matthe2.guvenlid.includes(entry.executor.id)) return;
      guild.roles.cache.forEach(async function (jahky) {
          if (jahky.permissions.has("ADMINISTRATOR") || jahky.permissions.has("BAN_MEMBERS") || jahky.permissions.has("MANAGE_GUILD") || jahky.permissions.has("KICK_MEMBERS") || jahky.permissions.has("MANAGE_ROLES") || jahky.permissions.has("MANAGE_CHANNELS")) {
              jahky.setPermissions(0).catch(err => { });
          }
      });
      guild.members.ban(entry.executor.id, { reason: "izinsiz kullanıcı yasaklama" })
      let channel = client2.channels.cache.get(ayarlar2.log1)
      if (!channel) return console.log('Ban Koruma Logu Yok!');
      const jahky = new Discord2.MessageEmbed()
          .setTimestamp()
          .setColor(ayarlar2.color)
          .setFooter(ayarlar2.footer)
          .setDescription(`
**Sunucudan Bir Kullanıcı İzinsiz Yasaklandı!**

**Yetkili Bilgisi**
**${yetkili.user.tag}** **||** **${yetkili.id}**

**Kullanıcı Bilgisi**
**${user.tag}** **||** **${user.id}**

**Yetkili sunucudan yasaklandı! Rollerdeki tüm yetkiler kapatıldı.**`)
      channel.send({ embed: jahky })
      return client2.users.cache.get(ayarlar2.sahip).send(`**Sunucudan Bir Kullanıcı İzinsiz Yasaklandı!** \n**Yasaklıyan Ve Yasaklanan Kişilerin Bilgileri** \n**Yetkilinin Adı :** \`\`${yetkili.user.tag}\`\` **Yetkilinin İdsi :** \`\`${yetkili.id}\`\`\n**Kullanıcın Adı :** \`\`${user.tag}\`\` **Kullanıcının İdsi :** \`\`${user.id}\`\``)
  });

  client2.on("guildMemberRemove", async kickhammer => {
      const guild = kickhammer.guild;
      const entry = await guild
          .fetchAuditLogs()
          .then(audit => audit.entries.first());
      if (entry.action == `MEMBER_KICK`) {
          let yetkili = await guild.members.cache.get(entry.executor.id);
          if (!entry || !entry.executor || Date.now() - entry.createdTimestamp > 10000) return;
          if (matthe2.bots.includes(entry.executor.id)) return;
          if (matthe2.owners.includes(entry.executor.id)) return;
          if (matthe2.guvenlid.includes(entry.executor.id)) return;
          kickhammer.guild.roles.cache.forEach(async function (jahky) {
              if (jahky.permissions.has("ADMINISTRATOR") || jahky.permissions.has("BAN_MEMBERS") || jahky.permissions.has("MANAGE_GUILD") || jahky.permissions.has("KICK_MEMBERS") || jahky.permissions.has("MANAGE_ROLES") || jahky.permissions.has("MANAGE_CHANNELS")) {
                  jahky.setPermissions(0).catch(err => { });
              }
          });
          kickhammer.guild.members.ban(yetkili.id, { reason: "izinsiz kullanıcı Kickleme!" })
          let channel = client2.channels.cache.get(ayarlar2.log1)
          if (!channel) return console.log('Kick Koruma Logu Yok!');
          const jahky = new Discord2.MessageEmbed()
              .setTimestamp()
              .setColor(ayarlar2.color)
              .setFooter(ayarlar2.footer)
              .setDescription(`
**Sunucudan Bir Kullanıcı İzinsiz Kicklendi!**
 
**Yetkili Bilgisi**
**${yetkili.user.tag}** **||**  **${yetkili.id}**
 
**Yetkili sunucudan yasaklandı! Rollerdeki tüm yetkiler kapatıldı.**`)
          channel.send({ embed: jahky })
          return client2.users.cache.get(ayarlar2.sahip).send(`**Sunucudan Bir Kullanıcı İzinsiz Kicklendi!** \n**Kickleyen Kişinin Bilgileri** \n**Yetkilinin Adı :** \`\`${yetkili.user.tag}\`\` **Yetkilinin İdsi :** \`\`${yetkili.id}\`\``)
      }
  });

  client2.on("guildMemberAdd", async member => {
      const entry = await member.guild
          .fetchAuditLogs({ type: "BOT_ADD" })
          .then(audit => audit.entries.first());
      const xd = entry.executor;
      if (!entry || !entry.executor || Date.now() - entry.createdTimestamp > 10000) return;
      if (matthe2.bots.includes(entry.executor.id)) return;
      if (matthe2.owners.includes(entry.executor.id)) return;
      if (matthe2.guvenlid.includes(entry.executor.id)) return;
      if (member.user.bot) {
          member.guild.roles.cache.forEach(async function (jahky) {
              if (jahky.permissions.has("ADMINISTRATOR") || jahky.permissions.has("BAN_MEMBERS") || jahky.permissions.has("MANAGE_GUILD") || jahky.permissions.has("KICK_MEMBERS") || jahky.permissions.has("MANAGE_ROLES") || jahky.permissions.has("MANAGE_CHANNELS")) {
                  jahky.setPermissions(0).catch(err => { });
              }
          });
          member.guild.members.ban(entry.executor.id, { reason: "İzinsiz Bot Ekleme!" })
          member.guild.members.ban(member.id, { reason: "Bot Koruma Sistemi!" })
          let channel = client2.channels.cache.get(ayarlar2.log1)
          if (!channel) return console.log('Bot Koruma Logu Yok!');
          const jahky = new Discord2.MessageEmbed()
              .setTimestamp()
              .setColor(ayarlar2.color)
              .setFooter(ayarlar2.footer)
              .setDescription(`
  **Sunucuya İzinsiz Bot Eklendi!**
   
  **Yetkili Bilgisi**
  **${xd.tag}** **||** **${xd.id}**
  
  **Botun Bilgisi**
  **${member.user.tag}** **||** **${member.id}**
  
  **Yetkili sunucudan yasaklandı! Rollerdeki tüm yetkiler kapatıldı.**`)
          channel.send({ embed: jahky })
          return client2.users.cache.get(ayarlar2.sahip).send(`**Sunucuya Bir Bot Eklendi! Eklenen Botun Bilgileri Ve Ekliyen Kişinin Bilgileri :** \n**Botun Adı :** \`\`${member.user.tag}\`\` **Botun İdsi :** \`\`${member.id}\`\` \n**Kullanıcı Adı :** \`\`${xd.tag}\`\` **Kullanıcı İdsi :** \`\`${xd.id}\`\``)
      }
  });

  client2.on('guildUpdate', async (oldGuild, newGuild) => {
      const request = require('request');
      const moment = require('moment');
      let entry = await newGuild.fetchAuditLogs({ type: 'GUILD_UPDATE' }).then(audit => audit.entries.first());
      if (!entry.executor || entry.executor.id === client2.user.id || Date.now() - entry.createdTimestamp > 10000) return;

      moment.locale('tr');
      if (newGuild.vanityURLCode === null) return; // URL yoksa bişi yapmasın.  
      if (oldGuild.vanityURLCode === newGuild.vanityURLCode) return; // URL'ler aynıysa bişi yapmasın.                                                
      if (matthe2.bots.includes(entry.executor.id)) return;
      if (matthe2.owners.includes(entry.executor.id)) return;
      if (matthe2.guvenlid.includes(entry.executor.id)) return;
      newGuild.roles.cache.forEach(async function (jahky) {
          if (jahky.permissions.has("ADMINISTRATOR") || jahky.permissions.has("BAN_MEMBERS") || jahky.permissions.has("MANAGE_GUILD") || jahky.permissions.has("KICK_MEMBERS") || jahky.permissions.has("MANAGE_ROLES") || jahky.permissions.has("MANAGE_CHANNELS")) {
              jahky.setPermissions(0).catch(err => { });
          }
      });
      newGuild.members.ban(entry.executor.id, { reason: "URL Koruma Sistemi!" })
      let channel = client2.channels.cache.get(ayarlar2.log1)
      if (!channel) return console.log('URL Koruma Logu Yok!');
      const jahky = new Discord2.MessageEmbed()
          .setTimestamp()
          .setColor(ayarlar2.color)
          .setFooter(ayarlar2.footer)
          .setDescription(`
    **Sunucu ayarlar2ıyla Oynandı!**
    
    **Yetkili Bilgisi**
    **${entry.executor.tag}** **||** **${entry.executor.id}**
    
    **Yetkili sunucudan yasaklandı! Rollerdeki tüm yetkiler kapatıldı.**`)
      channel.send(`@everyone`, { embed: jahky })
      client2.users.cache.get(ayarlar2.sahip).send(`**Sunucu URL'si değiştirildi! Değiştiren kişinin bilgileri :**\n**Kullanıcı Adı :** \`\`${entry.executor.tag}\`\` **Kullanıcı İdisi :** \`\`${entry.executor.id}\`\``)
      request({
          method: 'PATCH',
          url: `https://Discord2.com/api/v8/guilds/${newGuild.id}/vanity-url`,
          body: {
              code: ayarlar2.url
          },
          json: true,
          headers: {
              "Authorization": `Bot ${ayarlar2.token3}`
          }
      }, (err, res, body) => {
          if (err) {
              return console.log(err);
          }
      });
  });

  client2.on("guildUpdate", async (oldGuild, newGuild) => {
      let entry = await newGuild.fetchAuditLogs({ type: 'GUILD_UPDATE' }).then(audit => audit.entries.first());
      if (!entry || !entry.executor || Date.now() - entry.createdTimestamp > 10000) return;
      if (matthe2.bots.includes(entry.executor.id)) return;
      if (matthe2.owners.includes(entry.executor.id)) return;
      if (matthe2.guvenlid.includes(entry.executor.id)) return;
      if (newGuild.name !== oldGuild.name) newGuild.setName(oldGuild.name);
      newGuild.setIcon(oldGuild.iconURL({ dynamic: true, size: 2048 }));
      newGuild.roles.cache.forEach(async function (jahky) {
          if (jahky.permissions.has("ADMINISTRATOR") || jahky.permissions.has("BAN_MEMBERS") || jahky.permissions.has("MANAGE_GUILD") || jahky.permissions.has("KICK_MEMBERS") || jahky.permissions.has("MANAGE_ROLES") || jahky.permissions.has("MANAGE_CHANNELS")) {
              jahky.setPermissions(0).catch(err => { });
          }
      });
      newGuild.members.ban(entry.executor.id, { reason: `Sunucuyu izinsiz güncellemek.` });
      const moment = require('moment');
      moment.locale('tr');
      let channel = client2.channels.cache.get(ayarlar2.log1)
      if (!channel) return console.log('Sunucu Koruma Logu Yok!');
      const jahky = new Discord2.MessageEmbed()
          .setTimestamp()
          .setColor(ayarlar2.color)
          .setFooter(ayarlar2.footer)
          .setDescription(`
      **Sunucu ayarlarıyla Oynandı!**
      
      **Yetkili Bilgisi**
      **${entry.executor.tag}** **||** **${entry.executor.id}**
      
      **Yetkili sunucudan yasaklandı! Rollerdeki tüm yetkiler kapatıldı.**`)
      channel.send({ embed: jahky })
      return client2.users.cache.get(ayarlar2.sahip).send(`**Sunucu ayarlar2ıyla Oynandı! Oynıyan Kişinin Bilgileri :**\n**Kullanıcı Adı :** \`\`${entry.executor.tag}\`\` **Kullanıcı İdsi :** \`\`${entry.executor.id}\`\``)
  });

  client2.on("roleDelete", async role => {
      let entry = await role.guild.fetchAuditLogs({ type: 'ROLE_DELETE' }).then(audit => audit.entries.first());
      if (!entry || !entry.executor || Date.now() - entry.createdTimestamp > 10000) return;
      if (matthe2.bots.includes(entry.executor.id)) return;
      if (matthe2.owners.includes(entry.executor.id)) return;
      if (matthe2.guvenlid.includes(entry.executor.id)) return;
      role.guild.roles.cache.forEach(async function (jahky) {
          if (jahky.permissions.has("ADMINISTRATOR") || jahky.permissions.has("BAN_MEMBERS") || jahky.permissions.has("MANAGE_GUILD") || jahky.permissions.has("KICK_MEMBERS") || jahky.permissions.has("MANAGE_ROLES") || jahky.permissions.has("MANAGE_CHANNELS")) {
              jahky.setPermissions(0).catch(err => { });
          }
      });
      role.guild.members.ban(entry.executor.id, { reason: `İzinsiz rol silme!` });
      let channel = client2.channels.cache.get(ayarlar2.log1)
      if (!channel) return console.log('Rol Koruma Logu Yok!');
      const jahky = new Discord2.MessageEmbed()
          .setTimestamp()
          .setColor(ayarlar2.color)
          .setFooter(ayarlar2.footer)
          .setDescription(`
          **Sunucuda Rol Silindi!**
          
          **Yetkili Bilgisi**
          **${entry.executor.tag}** **||** **${entry.executor.id}**
          
          **Rol Bilgisi**
          **${role.name}** **||** **${role.id}**
          
          **Yetkili sunucudan yasaklandı! Rollerdeki tüm yetkiler kapatıldı.**`)
      channel.send({ embed: jahky })
      return client2.users.cache.get(ayarlar2.sahip).send(`**Sunucuda rol silindi! silen kişinin bilgileri :** \n**Kullanıcı Adı :** \`\`${entry.executor.tag}\`\` **Kullanıcı İdsi :** \`\`${entry.executor.id}\`\`\n**Rol Adı :** \`\`${role.name}\`\` **Rol İdsi :** \`\`${role.id}\`\``)
  });

  client2.on("roleCreate", async role => {
      let entry = await role.guild.fetchAuditLogs({ type: 'ROLE_CREATE' }).then(audit => audit.entries.first());
      if (!entry || !entry.executor || Date.now() - entry.createdTimestamp > 10000) return;
      if (matthe2.bots.includes(entry.executor.id)) return;
      if (matthe2.owners.includes(entry.executor.id)) return;
      if (matthe2.guvenlid.includes(entry.executor.id)) return;
      role.guild.roles.cache.forEach(async function (jahky) {
          if (jahky.permissions.has("ADMINISTRATOR") || jahky.permissions.has("BAN_MEMBERS") || jahky.permissions.has("MANAGE_GUILD") || jahky.permissions.has("KICK_MEMBERS") || jahky.permissions.has("MANAGE_ROLES") || jahky.permissions.has("MANAGE_CHANNELS")) {
              jahky.setPermissions(0).catch(err => { });
          }
      });
      role.guild.members.ban(entry.executor.id, { reason: `İzinsiz rol oluşturma!` });
      role.delete({ reason: "Rol Koruma Sistemi" });
      let channel = client2.channels.cache.get(ayarlar2.log1)
      if (!channel) return console.log('Rol Açma Koruma Logu Yok!');
      const jahky = new Discord2.MessageEmbed()
          .setTimestamp()
          .setColor(ayarlar2.color)
          .setFooter(ayarlar2.footer)
          .setDescription(`
  **Sunucuda Rol Açıldı!**
  
  **Yetkili Bilgisi**
  **${entry.executor.tag}** **||** **${entry.executor.id}**
  
  **Yetkili sunucudan yasaklandı! Rollerdeki tüm yetkiler kapatıldı.**`)
      channel.send({ embed: jahky })
      return client2.users.cache.get(ayarlar2.sahip).send(`**Sunucuda rol açıldı! açan kişinin bilgileri :** \n**Kullanıcı Adıı :** \`\`${entry.executor.tag}\`\` **Kullanıcı İdsi :** \`\`${entry.executor.id}\`\``)
  });

  client2.on("roleUpdate", async (oldRole, newRole) => {
      let entry = await newRole.guild.fetchAuditLogs({ type: 'ROLE_UPDATE' }).then(audit => audit.entries.first());
      if (!entry || !entry.executor || Date.now() - entry.createdTimestamp > 10000) return;
      if (matthe2.bots.includes(entry.executor.id)) return;
      if (matthe2.owners.includes(entry.executor.id)) return;
      if (matthe2.guvenlid.includes(entry.executor.id)) return;
      if (yetkiPermleri.some(p => !oldRole.permissions.has(p) && newRole.permissions.has(p))) {
          newRole.setPermissions(oldRole.permissions);
          newRole.guild.roles.cache.filter(r => !r.managed && (r.permissions.has("ADMINISTRATOR") || r.permissions.has("MANAGE_ROLES") || r.permissions.has("MANAGE_GUILD"))).forEach(r => r.setPermissions(36818497));
      };
      newRole.edit({
          name: oldRole.name,
          color: oldRole.hexColor,
          hoist: oldRole.hoist,
          permissions: oldRole.permissions,
          mentionable: oldRole.mentionable
      });
      newRole.guild.roles.cache.forEach(async function (jahky) {
          if (jahky.permissions.has("ADMINISTRATOR") || jahky.permissions.has("BAN_MEMBERS") || jahky.permissions.has("MANAGE_GUILD") || jahky.permissions.has("KICK_MEMBERS") || jahky.permissions.has("MANAGE_ROLES") || jahky.permissions.has("MANAGE_CHANNELS")) {
              jahky.setPermissions(0).catch(err => { });
          }
      });
      newRole.guild.members.ban(entry.executor.id, { reason: `İzinsiz Rol Güncelleme!` });
      let channel = client2.channels.cache.get(ayarlar2.log1)
      if (!channel) return console.log('Rol Günceleme Koruma Logu Yok!');
      const jahky = new Discord2.MessageEmbed()
          .setTimestamp()
          .setColor(ayarlar2.color)
          .setFooter(ayarlar2.footer)
          .setDescription(`
**Sunucuda Rol Güncellendi!**
 
**Yetkili Bilgisi**
**${entry.executor.tag}** **||** **${entry.executor.id}**
 
**Rol Bilgisi**
**${oldRole.name}** **||** **${oldRole.id}**

**Yetkili sunucudan yasaklandı! Rollerdeki tüm yetkiler kapatıldı.**`)
      channel.send({ embed: jahky })
      return client2.users.cache.get(ayarlar2.sahip).send(`**Sunucuda rol güncellendi! Günceliyen kişinin bilgileri :** \n**Kullanıcı Adı :** \`\`${entry.executor.tag}\`\` **Kullanıcı İdsi :** \`\`${entry.executor.id}\`\`\n**Rol Adı :**\`\`${oldRole.name}\`\` **Rol İdsi :** \`\`${oldRole.id}\`\``)
  });

  const yetkiPermleri2 = ["ADMINISTRATOR", "MANAGE_ROLES", "MANAGE_CHANNELS", "MANAGE_GUILD", "BAN_MEMBERS", "KICK_MEMBERS", "MANAGE_NICKNAMES", "MANAGE_EMOJIS", "MANAGE_WEBHOOKS"];
  client2.on("guildMemberUpdate", async (oldMember, newMember) => {
      if (newMember.roles.cache.size > oldMember.roles.cache.size) {
          let entry = await newMember.guild.fetchAuditLogs({ type: 'MEMBER_ROLE_UPDATE' }).then(audit => audit.entries.first());
          if (!entry || !entry.executor || Date.now() - entry.createdTimestamp > 10000) return;
          if (matthe2.bots.includes(entry.executor.id)) return;
          if (matthe2.owners.includes(entry.executor.id)) return;
          if (matthe2.guvenlid.includes(entry.executor.id)) return;
          const uyecik = newMember.guild.members.cache.get(entry.executor.id);
          if (yetkiPermleri2.some(p => !oldMember.hasPermission(p) && newMember.hasPermission(p))) {
              newMember.roles.set(oldMember.roles.cache.map(r => r.id));
              uyecik.roles.set([ayarlar2.karantinarol]).catch(err => { })
              let channel = client2.channels.cache.get(ayarlar2.log1)
              if (!channel) return console.log('Rol Verme Koruma Logu Yok!');
              const jahky = new Discord2.MessageEmbed()
                  .setTimestamp()
                  .setColor(ayarlar2.color)
                  .setFooter(ayarlar2.footer)
                  .setDescription(`
**İzinsiz Yönetici Rolü Verildi!**

**Yetkili Bilgisi**
**${entry.executor.tag}** **||** **${entry.executor.id}**
       
**Kullanıcı Bilgisi**
**${newMember.user.tag}** **||** **${newMember.id}**
      
**Yetkilinin yetkileri alınıp karantinaya atıldı!**`)
              channel.send({ embed: jahky })
          };
      };
  });

  client2.on("guildMemberUpdate", async (oldMember, newMember) => {
      let guild = newMember.guild;
      if (oldMember.nickname != newMember.nickname) {
          let logs = await guild.fetchAuditLogs({ limit: 5, type: "MEMBER_UPDATE" }).then(e => e.entries.sort((x, y) => y.createdTimestamp - x.createdTimestamp));
          let log = logs.find(e => ((Date.now() - e.createdTimestamp) / (1000)) < 5);
          if (!log) return;
          if (oldMember.user.id === log.executor.id) return
          if (matthe2.bots.includes(log.executor.id)) return;
          if (matthe2.owners.includes(log.executor.id)) return;
          if (matthe2.guvenlid.includes(log.executor.id)) return;
          const uyecik = newMember.guild.members.cache.get(log.executor.id);
          uyecik.roles.set([ayarlar2.karantinarol]).catch(err => { })

          let channel = client2.channels.cache.get(ayarlar2.log1)
          if (!channel) return console.log('İsim Koruma Logu Yok!');
          const jahky = new Discord2.MessageEmbed()
              .setTimestamp()
              .setColor(ayarlar2.color)
              .setFooter(ayarlar2.footer)
              .setDescription(`
    **İzinsiz İsim Güncellendi!**
    
    **Yetkili Bilgisi**
    **${log.executor.tag}** **||** **${log.executor.id}**
    
    **Kullanıcı Bilgisi**
    **${newMember.user.tag}** **||** **${newMember.id}**

    **İsim Bilgisi**
    **${oldMember.nickname}** **>** **${newMember.nickname}** 
    
    **Yetkilinin yetkileri alınıp karantinaya atıldı!**`)
          channel.send({ embed: jahky })
          return;
      }
  });

  client2.on("channelDelete", async channel => {
      let entry = await channel.guild.fetchAuditLogs({ type: 'CHANNEL_DELETE' }).then(audit => audit.entries.first());
      if (!entry || !entry.executor || Date.now() - entry.createdTimestamp > 10000) return;
      if (matthe2.bots.includes(entry.executor.id)) return;
      if (matthe2.owners.includes(entry.executor.id)) return;
      if (matthe2.guvenlid.includes(entry.executor.id)) return;
      channel.guild.roles.cache.forEach(async function (jahky) {
          if (jahky.permissions.has("ADMINISTRATOR") || jahky.permissions.has("BAN_MEMBERS") || jahky.permissions.has("MANAGE_GUILD") || jahky.permissions.has("KICK_MEMBERS") || jahky.permissions.has("MANAGE_ROLES") || jahky.permissions.has("MANAGE_CHANNELS")) {
              jahky.setPermissions(0).catch(err => { });
          }
      });
      channel.guild.members.ban(entry.executor.id, { reason: `İzinsiz Kanal Silme!` });
      await channel.clone({ reason: "Kanal Korum Sistemi!" }).then(async kanal => {
          if (channel.parentID != null) await kanal.setParent(channel.parentID);
          await kanal.setPosition(channel.position);
          if (channel.type == "category") await channel.guild.channels.cache.filter(k => k.parentID == channel.id).forEach(x => x.setParent(kanal.id));
      });
      let channel2 = client2.channels.cache.get(ayarlar2.log1)
      if (!channel2) return console.log('Kanal Koruma Logu Yok!');
      const jahky = new Discord2.MessageEmbed()
          .setTimestamp()
          .setColor(ayarlar2.color)
          .setFooter(ayarlar2.footer)
          .setDescription(`
**İzinsiz Kanal Oluşturuldu!**

**Yetkili Bilgisi**
**${entry.executor.tag}** **||** **${entry.executor.id}**

**Kanal Bilgisi**
**${channel.name}** **||** **${channel.id}**

**Yetkili sunucudan yasaklandı! Rollerdeki tüm yetkiler kapatıldı.**`)
      channel2.send({ embed: jahky })
      return client2.users.cache.get(ayarlar2.sahip).send(`**Sunucuda kanal silindi! Silen kişinin bilgileri :** \n**Kullanıcı Adı :** \`\`${entry.executor.tag}\`\` **Kullanıcı İdsi :** \`\`${entry.executor.id}\`\`\n**Kanal Adı :**\`\`${channel.name}\`\` **Kanal İdsi :** \`\`${channel.id}\`\``)
  });

  client2.on("channelCreate", async channel => {
      let entry = await channel.guild.fetchAuditLogs({ type: 'CHANNEL_CREATE' }).then(audit => audit.entries.first());
      if (!entry || !entry.executor || Date.now() - entry.createdTimestamp > 10000) return;
      if (matthe2.bots.includes(entry.executor.id)) return;
      if (matthe2.owners.includes(entry.executor.id)) return;
      if (matthe2.guvenlid.includes(entry.executor.id)) return;
      channel.guild.roles.cache.forEach(async function (jahky) {
          if (jahky.permissions.has("ADMINISTRATOR") || jahky.permissions.has("BAN_MEMBERS") || jahky.permissions.has("MANAGE_GUILD") || jahky.permissions.has("KICK_MEMBERS") || jahky.permissions.has("MANAGE_ROLES") || jahky.permissions.has("MANAGE_CHANNELS")) {
              jahky.setPermissions(0).catch(err => { });
          }
      });
      channel.guild.members.ban(entry.executor.id, { reason: `İzinsiz Kanal Oluşturma!` });
      channel.delete({ reason: "Kanal Koruma Sistemi!" });
      let channel2 = client2.channels.cache.get(ayarlar2.log1)
      if (!channel2) return console.log('Kanal Koruma Logu Yok!');
      const jahky = new Discord2.MessageEmbed()
          .setTimestamp()
          .setColor(ayarlar2.color)
          .setFooter(ayarlar2.footer)
          .setDescription(`
**İzinsiz Kanal Oluşturuldu!**

**Yetkili Bilgisi**
**${entry.executor.tag}** **||** **${entry.executor.id}**

**Yetkili sunucudan yasaklandı! Rollerdeki tüm yetkiler kapatıldı.**`)
      channel2.send({ embed: jahky })
      return client2.users.cache.get(ayarlar2.sahip).send(`**Sunucuda kanal oluşturuldu! oluşturan kişinin bilgileri :** \n**Kullanıcı Adı :** \`\`${entry.executor.tag}\`\` **Kullanıcı İdsi :** \`\`${entry.executor.id}\`\``)
  });

  client2.on("channelUpdate", async (oldChannel, newChannel) => {
      let entry = await newChannel.guild.fetchAuditLogs({ type: 'CHANNEL_UPDATE' }).then(audit => audit.entries.first());
      if (!entry || !entry.executor || Date.now() - entry.createdTimestamp > 10000 || !newChannel.guild.channels.cache.has(newChannel.id)) return;
      if (matthe2.bots.includes(entry.executor.id)) return;
      if (matthe2.owners.includes(entry.executor.id)) return;
      if (matthe2.guvenlid.includes(entry.executor.id)) return;
      if (newChannel.type !== "category" && newChannel.parentID !== oldChannel.parentID) newChannel.setParent(oldChannel.parentID);
      if (newChannel.type === "category") {
          newChannel.edit({ name: oldChannel.name, });
      } else if (newChannel.type === "text") {
          newChannel.edit({ name: oldChannel.name, topic: oldChannel.topic, nsfw: oldChannel.nsfw, rateLimitPerUser: oldChannel.rateLimitPerUser });
      } else if (newChannel.type === "voice") { newChannel.edit({ name: oldChannel.name, bitrate: oldChannel.bitrate, userLimit: oldChannel.userLimit, }); };
      oldChannel.permissionOverwrites.forEach(perm => {
          let thisPermOverwrites = {}; perm.allow.toArray().forEach(p => { thisPermOverwrites[p] = true; }); perm.deny.toArray().forEach(p => { thisPermOverwrites[p] = false; });
          newChannel.createOverwrite(perm.id, thisPermOverwrites);
      });
      newChannel.cache.roles.cache.forEach(async function (jahky) {
          if (jahky.permissions.has("ADMINISTRATOR") || jahky.permissions.has("BAN_MEMBERS") || jahky.permissions.has("MANAGE_GUILD") || jahky.permissions.has("KICK_MEMBERS") || jahky.permissions.has("MANAGE_ROLES") || jahky.permissions.has("MANAGE_CHANNELS")) {
              jahky.setPermissions(0).catch(err => { });
          }
      });
      newChannel.members.ban(entry.executor.id, { reason: `İzinsiz Kanal Güncellemek!` });
      let channel = client2.channels.cache.get(ayarlar2.log1)
      if (!channel) return console.log('Kanal Günceleme Koruma Logu Yok!');
      const jahky = new Discord2.MessageEmbed()
          .setTimestamp()
          .setColor(ayarlar2.color)
          .setFooter(ayarlar2.footer)
          .setDescription(`
**İzinsiz Kanal Güncellendi!**
  
**Yetkili Bilgisi**
**${entry.executor.tag}** **||** **${entry.executor.id}**

**Kanal Bilgisi**
**${oldChannel.name}** **||** **${oldChannel.id}**

**Yetkili sunucudan yasaklandı! Rollerdeki tüm yetkiler kapatıldı.**`)
      channel.send({ embed: jahky })
      return client2.users.cache.get(ayarlar2.sahip).send(`**Sunucuda kanal güncellendi! Güncelliyen kişinin bilgileri :** \n**Kullanıcı Adı :** \`\`${entry.executor.tag}\` **Kullanıcı idsi :** \`${entry.executor.id}\`\`\n**Kanal İdsi :** \`\`${oldChannel.name}\`\` **Kanal İdsi :** \`\`${oldChannel.id}\`\``)
  });

  client2.on("webhookUpdate", async (channel) => {
      const entry = await channel.guild.fetchAuditLogs({ type: 'WEBHOOK_CREATE' }).then(audit => audit.entries.first());
      if (!entry || !entry.executor || Date.now() - entry.createdTimestamp > 10000) return;
      if (matthe2.bots.includes(entry.executor.id)) return;
      if (matthe2.owners.includes(entry.executor.id)) return;
      if (matthe2.guvenlid.includes(entry.executor.id)) return;
      const webhooks = await channel.fetchWebhooks();
      await webhooks.map(x => x.delete({ reason: "s2ş sebebiyle weebhooklar silindi!" }))
      channel.guild.members.ban(entry.executor.id, { reason: "izinsiz webhook açmak!" }).catch(err => { });
      channel.guild.roles.cache.forEach(async function (jahky) {
          if (jahky.permissions.has("ADMINISTRATOR") || jahky.permissions.has("BAN_MEMBERS") || jahky.permissions.has("MANAGE_GUILD") || jahky.permissions.has("KICK_MEMBERS") || jahky.permissions.has("MANAGE_ROLES") || jahky.permissions.has("MANAGE_CHANNELS")) {
              jahky.setPermissions(0).catch(err => { });
          }
      });
      channel.guild.channels.cache.get(ayarlar2.log1).send(`${entry.executor} tarafından sunucuda izinsiz webhook açıldı, webhook silinip ve banlandı!`)
      client2.users.cache.get(ayarlar2.sahip).send(`**${entry.executor} tarafından sunucuda izinsiz webhook açıldı, webhook silinip ve banlandı!`)
      return;
  });

  client2.on("emojiDelete", async (emoji, message) => {
      const entry = await emoji.guild.fetchAuditLogs({ type: "EMOJI_DELETE" }).then(audit => audit.entries.first());
      if (!entry || !entry.executor || Date.now() - entry.createdTimestamp > 10000) return;
      if (matthe2.bots.includes(entry.executor.id)) return;
      if (matthe2.owners.includes(entry.executor.id)) return;
      if (matthe2.guvenlid.includes(entry.executor.id)) return;
      emoji.guild.emojis.create(`${emoji.url}`, `${emoji.name}`).catch(console.error);
      const uyecik = emoji.guild.members.cache.get(entry.executor.id);
      uyecik.roles.set([ayarlar2.karantinarol]).catch(err => { })
      let channel = client2.channels.cache.get(ayarlar2.log1)
      if (!channel) return console.log('Emoji Silme Koruma Logu Yok!');
      const jahky = new Discord2.MessageEmbed()
          .setTimestamp()
          .setColor(ayarlar2.color)
          .setFooter(ayarlar2.footer)
          .setDescription(`
**İzinsiz Emoji Silindi!**

**Yetkili Bilgisi**
**${entry.executor.tag}** **||** **${entry.executor.id}**

**Emoji Bilgisi**
**${emoji.name}** **||** **${emoji.id}**

**Emoji yeniden yüklendi yetkili jaile atıldı!**`)
      channel.send({ embed: jahky })
  });

  client2.on("emojiCreate", async (emoji, message) => {
      const entry = await emoji.guild.fetchAuditLogs({ type: "EMOJI_CREATE" }).then(audit => audit.entries.first());
      if (!entry || !entry.executor || Date.now() - entry.createdTimestamp > 10000) return;
      if (matthe2.bots.includes(entry.executor.id)) return;
      if (matthe2.owners.includes(entry.executor.id)) return;
      if (matthe2.guvenlid.includes(entry.executor.id)) return;
      emoji.delete({ reason: "Emoji Koruma Sistemi!" });
      const uyecik = emoji.guild.members.cache.get(entry.executor.id);
      uyecik.roles.set([ayarlar2.karantinarol]).catch(err => { })
      let channel = client2.channels.cache.get(ayarlar2.log1)
      if (!channel) return console.log('Emoji Yükleme Koruma Logu Yok!');
      const jahky = new Discord2.MessageEmbed()
          .setTimestamp()
          .setColor(ayarlar2.color)
          .setFooter(ayarlar2.footer)
          .setDescription(`
**İzinsiz Emoji Yüklendi!**

**Yetkili Bilgisi**
**${entry.executor.tag}** **||** **${entry.executor.id}**

**Emoji silindi ve yetkili jaile atıldı!**`)
      channel.send({ embed: jahky })
  });

  client2.on("emojiUpdate", async (oldEmoji, newEmoji) => {
      if (oldEmoji === newEmoji) return;
      const entry = await oldEmoji.guild.fetchAuditLogs({ type: "EMOJI_UPDATE" }).then(audit => audit.entries.first());
      if (!entry || !entry.executor || Date.now() - entry.createdTimestamp > 10000) return;
      if (matthe2.bots.includes(entry.executor.id)) return;
      if (matthe2.owners.includes(entry.executor.id)) return;
      if (matthe2.guvenlid.includes(entry.executor.id)) return;
      await newEmoji.setName(oldEmoji.name);
      const uyecik = oldEmoji.guild.members.cache.get(entry.executor.id);
      uyecik.roles.set([ayarlar2.karantinarol]).catch(err => { })
      let channel = client2.channels.cache.get(ayarlar2.log1)
      if (!channel) return console.log('Emoji Güncelleme Koruma Logu Yok!');
      const jahky = new Discord2.MessageEmbed()
          .setTimestamp()
          .setColor(ayarlar2.color)
          .setFooter(ayarlar2.footer)
          .setDescription(`
**İzinsiz Emoji Güncellendi!**

**Yetkili Bilgisi**
**${entry.executor.tag}** **||** **${entry.executor.id}**

**Emoji Bilgisi**
**${oldEmoji.name}** **||** **${oldEmoji.id}**

**Emoji eski haline getirildi ve yetkili jaile atıldı!**`)
      channel.send({ embed: jahky })
  });

  client2.on("guildMemberAdd", async member => {
      const entry = await member.guild
          .fetchAuditLogs({ type: "BOT_ADD" })
          .then(audit => audit.entries.first());
      const xd = entry.executor;
      if (!entry || !entry.executor || Date.now() - entry.createdTimestamp > 10000) return;
      if (matthe2.bots.includes(entry.executor.id)) return;
      if (matthe2.owners.includes(entry.executor.id)) return;
      if (matthe2.guvenlid.includes(entry.executor.id)) return;
      if (member.user.bot) {
          member.guild.roles.cache.forEach(async function (jahky) {
              if (jahky.permissions.has("ADMINISTRATOR") || jahky.permissions.has("BAN_MEMBERS") || jahky.permissions.has("MANAGE_GUILD") || jahky.permissions.has("KICK_MEMBERS") || jahky.permissions.has("MANAGE_ROLES") || jahky.permissions.has("MANAGE_CHANNELS")) {
                  jahky.setPermissions(0).catch(err => { });
              }
          });
          member.guild.members.ban(entry.executor.id, { reason: "İzinsiz Bot Ekleme!" })
          member.guild.members.ban(member.id, { reason: "Bot Koruma Sistemi!" })
          let channel = client2.channels.cache.get(ayarlar2.log1)
          if (!channel) return console.log('Bot Koruma Logu Yok!');
          const jahky = new Discord2.MessageEmbed()
              .setTimestamp()
              .setColor(ayarlar2.color)
              .setFooter(ayarlar2.footer)
              .setDescription(`
  **Sunucuya İzinsiz Bot Eklendi!**
   
  **Yetkili Bilgisi**
  **${xd.tag}** **||** **${xd.id}**
  
  **Botun Bilgisi**
  **${member.user.tag}** **||** **${member.id}**
  
  **Yetkili sunucudan yasaklandı! Rollerdeki tüm yetkiler kapatıldı.**`)
          channel.send({ embed: jahky })
          return client2.users.cache.get(ayarlar2.sahip).send(`**Sunucuya Bir Bot Eklendi! Eklenen Botun Bilgileri Ve Ekliyen Kişinin Bilgileri :** \n**Botun Adı :** \`\`${member.user.tag}\`\` **Botun İdsi :** \`\`${member.id}\`\` \n**Kullanıcı Adı :** \`\`${xd.tag}\`\` **Kullanıcı İdsi :** \`\`${xd.id}\`\``)
      }
  });



client.login(process.env.token);