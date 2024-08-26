module.exports = {
    plugins: [
        require('postcss-prefix-selector')({
            transform: function (prefix, selector, prefixedSelector, filepath, rule) {
                const matches = filepath.match(/(exam-\d+)/g);

                if (matches) {
                    const type = filepath.includes('/monthly-exams') ? 'monthly-exams' : 'final-exams';
                    const examItem = matches[0];

                    return `[data-component="${type}"][data-item="${examItem}"] ${selector}`;
                }

                return rule;
            },
        }),
    ],
};
