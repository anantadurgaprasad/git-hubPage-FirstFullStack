const crypto = require('crypto');

const algorithm = 'aes-256-ctr';
const secretKey = 'vOVH6sdmpNWjRRIqCc7rdxs01lwHzfr3';
const iv = crypto.randomBytes(16);

const encrypt = (text) => {

    const cipher = crypto.createCipheriv(algorithm, secretKey, iv);

    const encrypted = Buffer.concat([cipher.update(text), cipher.final()]);

    // return {
    //     // iv: iv.toString('hex'),
    //     // content: encrypted.toString('hex')
    //     encrypted.toString('hex')
    // };
    return encrypted.toString()
};

module.exports = {
    encrypt
};