module.exports = {
    plugins: [
        require('postcss-prefix-selector')({
            transform: function (prefix, selector, prefixedSelector, filepath, rule) {
                const match = filepath.match(/\/answers\/(item-\d+)\//);

                if (match) {
                    return `[data-item="${match[1]}"] ${selector}`;
                }

                return rule;
            },
        }),
    ],
};
