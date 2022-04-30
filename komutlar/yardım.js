const Discord = require("discord.js");
const db = require('quick.db');
const ayarlar = require('../ayarlar.json');
let prefix = ayarlar.prefix

module.exports.run= async(client, message, args) => {
   
let embed = new Discord.MessageEmbed()
.setTitle(client.user.username+" Yardım Menüsü")
.setColor("BLUE")
.setThumbnail(client.user.avatarURL())
.setDescription(`
  ▬▬▬▬▬▬▬▬ \`\`\Bilgilendirme\`\`\ ▬▬▬▬▬▬▬▬
> :notepad_spiral:\`${prefix}ping\` **: Pingimi Görürsünüz.**
> :notepad_spiral:**Şuan Kullanılan Prefix =** \`${prefix}\`
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
:white_small_square:\`${prefix}yetkilerim\` **: Bu Sunucuda Ne Kadar Yetkiniz Olduğunu Görürsünüz.**
:white_small_square:\`${prefix}kick\` **: Sunucudan Birini Atarsınız.**
:white_small_square:\`${prefix}yavaş-mod\` **: Kanala Yavaş Mod Eklersiniz.**
:white_small_square:\`${prefix}istatistik\` **: Botun İstatistiklerini Görürsünüz.**
:white_small_square:\`${prefix}ban\` **: Sunucudan Birini Yasaklarsınız.**
:white_small_square:\`${prefix}sil\` **: Mesaj Silersiniz.**
:white_small_square:\`${prefix}yaz\` **: Bota Mesaj Yazdırırsınız.**
:white_small_square:\`${prefix}unban\` **: Birinin Yasağını Kaldırırsınız.**
:white_small_square:\`${prefix}avatar\` **: Birinin Ya Da Kendinizin Profilini Görüntülersiniz.**


`)

message.channel.send(embed)
}
module.exports.conf = {
aliases: ['help']
}

module.exports.help = {
name: "yardım" 
}