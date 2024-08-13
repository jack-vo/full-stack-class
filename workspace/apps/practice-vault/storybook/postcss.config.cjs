module.exports = {
    plugins: [
        require('postcss-prefix-selector')({
            transform: function (prefix, selector, prefixedSelector, filepath, rule) {
                // Practice vault
                const practiceVaultMatch = filepath.match(/\/answers\/(item-\d+)\//);

                if (practiceVaultMatch) {
                    return `[data-component="practice-vault-storybook"][data-item="${practiceVaultMatch[1]}"] ${selector}`;
                }

                // Homework
                const isHWAnswer = filepath.includes('homework-answer');

                if (isHWAnswer) {
                    const matches = filepath.match(/(week-\d+)|(item-\d+)/g);

                    if (matches) {
                        return `[data-component="homework-answer-storybook"][data-week="${matches[0]}"][data-item="${matches[1]}"] ${selector}`;
                    }
                }

                return rule;
            },
        }),
    ],
};
