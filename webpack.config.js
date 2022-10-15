const path = require('path');
module.exports = {
    resolve: {
        extensions: ['', 'js', '.jsx', '.ts', '.tsx'],
        root: path.resolve(__dirname),
        alias: {
            hooks: './src/hooks'
        },
    },
};
