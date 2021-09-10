module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
    extends: [
        'plugin:react/jsx-runtime',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
    ],
    rules: {
        'react/react-in-jsx-scope': 0,
        'react/jsx-uses-react': 0,
        'react/prop-types': 0,
        '@typescript-eslint/explicit-module-boundary-types': 0,
        quotes: [2, 'single', 'avoid-escape'],
    },
};
