//#region Random Number Generation

/**
 * 
 * @param {number} max 
 * @param {number} min 
 */
function rand(max, min = 0) {
    return Math.floor(Math.random() * (max + 1)) + min;
}

function RandomPanjang() {
    let result  = {
        skala: 0,
        sebenarnya: 0,
        dalampeta: 0
    }

    result.skala = rand(100, 1) * 50000;
    result.dalampeta = rand(25, 1) ;
    result.sebenarnya = result.skala * result.dalampeta / 100000;

    return result;
}

function RandomLuas() {
    let result  = {
        skala: 0,
        sebenarnya: 0,
        dalampeta: 0
    }

    result.skala = rand(3, 1) * 50;
    result.dalampeta = Math.pow(rand(10, 1), 2);
    result.sebenarnya = result.skala * result.skala * result.dalampeta / 10000;

    return result;
}

//#endregion

//#region Panjang

/**
 * @param {number} skala skala
 * @param {number} beneran nomor beneran
 * @param {number} ver 0/1
 * @returns {string}
 */
function CariPanjangDalamPeta(skala, beneran, ver) {
    var result = '';

    switch (ver) {
        case 0:
            result += 'Jika peta memiliki skala 1:';
            result += skala.toString();
            result += ' dan jarak Kota A dan Kota B sebenarnya '
            result += beneran.toString();
            result += 'km, jarak Kota A dan Kota B di peta berapa centimeter?'
            break;
        case 1:
            result += 'Jika peta memiliki skala 1:';
            result += skala.toString();
            result += ' dan lebar Kota A sebenarnya '
            result += beneran.toString();
            result += 'km, lebar Kota A di peta berapa centimeter?'
            break;
            
    }

    return result;
}

/**
 * 
 * @param {number} skala 
 * @param {number} dlmpeta 
 * @param {number} ver 0 / 1
 * @returns {string}
 */
function CariPanjangSebenarnya(skala, dlmpeta, ver) {
    var result = '';

    switch (ver) {
        case 0:
            result += 'Jika peta memiliki skala 1:';
            result += skala.toString();
            result += ' dan jarak Kota A dan Kota B dalam peta '
            result += dlmpeta.toString();
            result += 'cm, jarak Kota A dan Kota B sebenarnya berapa kilometer?'
            break;
        case 1:
            result += 'Jika peta memiliki skala 1:';
            result += skala.toString();
            result += ' dan lebar Kota A dalam peta '
            result += dlmpeta.toString();
            result += 'cm, lebar Kota A sebenarnya berapa kilometer?'
            break;
            
    }

    return result;
}

/**
 * 
 * @param {number} sebenarnya 
 * @param {number} dalampeta 
 * @param {number} ver 0/1
 */
function CariSkala(sebenarnya, dalampeta, ver) {
    var result = '';

    switch (ver) {
        case 0:
            result += 'Jika lebar kota A ';
            result += sebenarnya
            result +='km dan pada peta ';
            result += dalampeta
            result += 'cm, berapa skala peta tersebut?';
            break;
        case 1:
            result += 'Jika jarak kota A dan kota B ';
            result += sebenarnya
            result +='km dan pada peta ';
            result += dalampeta
            result += 'cm, berapa skala peta tersebut?';
            break;
            
    }

    return result;
}

//#endregion

//#region Luas

/**
 * @param {number} skala skala
 * @param {number} beneran nomor beneran
 * @returns {string}
 */
function CariLuasDalamDenah(skala, beneran) {
    var result = '';

    result += 'Jika denah memiliki skala 1:';
    result += skala.toString();
    result += ' dan luas tanah sebenarnya '
    result += beneran.toString();
    result += 'km persegi, luas tanah di denah berapa centimeter?'
    
    return result;
}

/**
 * 
 * @param {number} skala 
 * @param {number} dlmpeta 
 * @returns {string}
 */
function CariLuasSebenarnya(skala, dlmpeta) {
    var result = '';

    result += 'Jika denah memiliki skala 1:';
    result += skala.toString();
    result += ' dan luas tanah dalam denah '
    result += dlmpeta.toString();
    result += 'cm, persegi luas tanah sebenarnya berapa kilometer?'

    return result;
}

/**
 * 
 * @param {number} sebenarnya 
 * @param {number} dalampeta 
 */
function CariSkalaLuas(sebenarnya, dalampeta) {
    var result = '';

    result += 'Jika luas sebenarnya, ';
    result += sebenarnya.toString();
    result += 'km persegi dan luas tanah di denah '
    result += dalampeta.toString();
    result += 'cm persegi, skala di denah berapa?'
    

    return result;
}

//#endregion
