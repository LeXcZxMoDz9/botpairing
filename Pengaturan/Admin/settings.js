const chalk = require("chalk")
const fs = require("fs")

//______________________[ PERLENGKAPAN ]_______________________//
global.owner = '6287743212449' //Ganti Jadi No Lu
global.ownerku = ['6287743212449']
global.ownerNomor = '6287743212449'
global.botname = 'LeXcZ' //Ganti Jadi Nama Bot Lu
global.namabot = 'LeXcZ' 
global.ownername = 'LeXcZ' 
global.ownerName = 'LeXcZ' //Ganti Jadi Nama Lu
global.footer = 'LeXcZ'
global.packname = `LeXcZ` 
global.struk = `LeXcZ` 
global.toko = `©PT LEXCZ DIGITAL PAYMENT`
global.youtube = `@LexczXModz`
global.sessionName = `arie`

//______________________[ THUMBNAIL ]_______________________//
global.qris = fs.readFileSync("./image/qris.png") //Sesuaikan Dengan Nama Gambar Qris Di Folder Image

//______________________[ GC MEMBER ]_______________________//
global.gcresmi = 'https://chat.whatsapp.com/' //Ganti Dengan Link Groupmu

//______________________[ DATA REKENING ]_______________________//
global.rekening = `

》 *SCAN QRIS HANYA UNTUK DANA SELAIN DANA UANG AKAN DITAHAN 1x24 JAM*

》 Silahkan Transfer Ke Salah Satu Rekening
》 DANA : 085282397502 / SYA SAP
》 SHOPEE : 087815990608 / AN 
》 GOPAY : 085282397602 / SYA SAP
》 MANDIRI : -
》 BRI : -
》 BCA : -
》 SEABANK : -
》 JENIUS / BTPN : -
》 BANK JAGO : -

`

//______________________[ INFO UPLEVEL ]_______________________//
global.hargalevel = `Keuntungan UPLEVEL Kamu Akan Mendapatkan Harga Special Dan Yang Pasti Lebih Murah.
Khusus Level Partner Akan Mendapatkan Pelayanan Khsusus Dari Kami.

LIST BIAYA UPLEVEL :
*GOLD : Rp 50.000*
*PLATINUM : Rp 100.000*
*PARTNER : Rp 150.000*
`

global.mess = {
    wait: 'Sedang DiProses',
    succes: 'Sukses',
    admin: 'Layanan Khsusus Admin',
    botAdmin: 'BOT Harus Jadi Admin',
    owner: 'Layanan Khusus Owner',
    group: 'Hanya Bisa Didalam Group',
    private: 'Silahkan Private Chat Dengan BOT',
    bot: 'Fitur Special BOT',
    error: 'Layanan Error',    
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})