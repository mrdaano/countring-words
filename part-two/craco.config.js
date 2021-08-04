const {CracoAliasPlugin, configPaths} = require('react-app-rewire-alias/lib/aliasDangerous');

module.exports = {
    plugins: [
        {
          plugin: CracoAliasPlugin,
          options: {alias: configPaths('./tsconfig.paths.json')}
        }
    ],
    style: {
        postcss: {
            plugins: [
                require('tailwindcss'),
                require('autoprefixer'),
            ],
        },
    },
}