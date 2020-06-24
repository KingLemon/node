let _private = {};

// @TODO: replace with crypto.randomBytes
_private.getRandomInt = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

/**
 * Return a unique identifier with the given `len`.
 *
 * @param {Number} maxLength
 * @return {String}
 * @api private
 */
module.exports.uid = function uid(maxLength) {
    const buf = [];
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charLength = chars.length;
    let i;

    for (i = 0; i < maxLength; i = i + 1) {
        buf.push(chars[_private.getRandomInt(0, charLength - 1)]);
    }

    return buf.join('');
};
