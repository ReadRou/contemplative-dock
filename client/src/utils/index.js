import CryptoJS     from "crypto-js";
import circularJson from "circular-json";

const key = 'HhxxGADC4qrqJP1BK4ZMzzlgPF80zGRp';

export default {
    encrypt(data) {
        return CryptoJS.AES.encrypt(circularJson.stringify(data), CryptoJS.enc.Utf8.parse(key), {
            mode   : CryptoJS.mode.ECB,
            padding: CryptoJS.pad.Pkcs7,
        }).toString();
    },
    decrypt(encrypt) {
        return circularJson.parse(CryptoJS.AES.decrypt(encrypt, CryptoJS.enc.Utf8.parse(key), {
            mode   : CryptoJS.mode.ECB,
            padding: CryptoJS.pad.Pkcs7,
        }).toString(CryptoJS.enc.Utf8));
    }
}
