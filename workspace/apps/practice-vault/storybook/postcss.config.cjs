module.exports = {
    plugins: [
        require('postcss-prefix-selector')({
            transform: function (prefix, selector, prefixedSelector, filepath, rule) {
                if (filepath.includes('practice-vault')) {
                    const regex = new RegExp('/answers/(.*?)\/');
                    const itemMatch = filepath.match(regex);

                    if (itemMatch) {
                        return `[data-component="practice"][data-item="${itemMatch[1]}"] ${selector}`;
                    }
                }

                return rule;
            },
        }),
    ],
};
