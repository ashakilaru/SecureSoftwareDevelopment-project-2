const crypto = require('crypto');

module.exports = (req, res, next) => {
    const nonce = crypto.randomBytes(16).toString('base64');
    res.setHeader("Content-Security-Policy",
        `default-src 'none'; script-src 'self' 'nonce-${nonce}'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; object-src 'none';`
    );
    res.locals.cspNonce = nonce;
    next();
};
