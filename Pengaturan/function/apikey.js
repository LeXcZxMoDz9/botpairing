// APIKEY ARIE PULSA
const ariekey = 'uEgczAgggcqYCvbVkJ0sI2ko0IUpcmMQ' // INPUT API KEY https://ariepulsa.com
const nomorKu = '6287743212449@s.whatsapp.net' //Ganti Nomormu

// SETTING KEUNTUNGAN MEMBER BERDASARKAN PERSEN (%)
const prmember = '5'
const prgold = '4'
const prplatinum = '3'
const prpartner = '2'

// API PAYDISINI
const keypaydis = '2d580b9ee0190217d7e5d36b33926917'
const merchpaydis = '' //Kosongkan Jika Belum Verifikasi Merchant
const servpaydis = '11' //Buat 11 Jika Belum Verifikasi Merchant
const batas_time = '1800'; //Batas waktu pembayaran (detik) minimal 1800 30 menit dan maximal 10800 3 jam
const fee_cus = '1'; //1 fee ditanggung customer 2 fee ditanggung merchant
const fee_owner = 350; //Fee Untuk Kamu Buat Meringankan Biaya Penarikan

module.exports = {
    ariekey,
    prmember,
    prgold,
    prplatinum,
    prpartner,
    keypaydis,
    merchpaydis,
    servpaydis,
    batas_time,
    fee_owner,
    fee_cus,
    nomorKu
}