const ayarlar = {
  TOKEN: "", // ASSAGIYI OKU
  sahip: "BOTUNUZUN SAHİP ID", //Doldurmak Zorunda Değilsiniz!
  prefix: ".", //Bot Prefixi Yazın!
  url: "academy", //Alınmasını İstediğiniz Özel Discord Sunucu URL'sini Yazın!
  sunucuID: "849635327903924265", //Url'nin Alınacağı Sunucu ID'sini Yazın!
  log: "914225398634676295", //URL Alınır İse Bilgi Verilecek Log Kanal ID Yazın!
  durum: "false", //false=Botu Durdur | true=Botu Başlat Demekdir!
  botHızı: "50000" //1000 = 1 Saniye | 1 = 1 Milisaniye | En Az 50 Milisaniye Yazmanız Önerilir 50MS Altında Proje Discord Apiden Yasaklanır ve Çalşımayı Durdurur!
};

module.exports = ayarlar;

//BOT TOKENINIZI EGER BOT GLITCHDE KALACAK
//ISE .ENV DOSYASINA
//EGER VDS YE KURACAK ISENIZ YUKARIYA 1. SATIRA YAZIN