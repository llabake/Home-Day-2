

module.exports = {

    reverseString: function (str) {
        new_str = [];

        if (str.length === 0) {
            return null;
        } else if (typeof (str) != 'string') {
            return null;
        } else {
            for (var i = 0; i < str.length; i++) {
                new_str.unshift(str[i]);
            }
            new_str = new_str.join('');
            if (new_str === str) {
                return true;
            } else {
                return new_str;
            }
        }
    }
}
