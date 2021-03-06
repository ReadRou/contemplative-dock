const CryptoJS = require('crypto-js');
const circularJson = require('circular-json');
const key = 'HhxxGADC4qrqJP1BK4ZMzzlgPF80zGRp';

module.exports = {
    encrypt(data) {
        return CryptoJS.AES.encrypt(circularJson.stringify(data), CryptoJS.enc.Utf8.parse(key), {
            mode: CryptoJS.mode.ECB,
            padding: CryptoJS.pad.Pkcs7,
        }).toString();
    },
    decrypt(encrypt) {
        return circularJson.parse(CryptoJS.AES.decrypt(encrypt, CryptoJS.enc.Utf8.parse(key), {
            mode: CryptoJS.mode.ECB,
            padding: CryptoJS.pad.Pkcs7,
        }).toString(CryptoJS.enc.Utf8));
    },
    async getIP() {
        const interfaces = require('os').networkInterfaces();
        for (const devName in interfaces) {
            const iface = interfaces[devName];
            for (let i = 0; i < iface.length; i++) {
                var alias = iface[i];
                if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
                    return alias.address;
                }
            }
        }
    }
};