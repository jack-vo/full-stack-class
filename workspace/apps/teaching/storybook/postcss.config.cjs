module.exports = {
    plugins: [
        require('postcss-prefix-selector')({
            transform: function (prefix, selector, prefixedSelector, filepath, rule) {
                const matches = filepath.match(/(week-\d+)/g);

                if (matches) {
                    const type = filepath.includes('/homework') ? 'homework' : 'teaching';
                    const weekPrefix = matches[0];
                    const regex = new RegExp(
                        type === 'homework'
                            ? `/homework/(.*?)\/`
                            : `/${weekPrefix}/(.*?)\/`
                    );
                    const itemMatch = filepath.match(regex);

                    return `[data-component="${type}"][data-prefix="${weekPrefix}"][data-item="${itemMatch[1]}"] ${selector}`;
                }

                return rule;
            },
        }),
    ],
};
