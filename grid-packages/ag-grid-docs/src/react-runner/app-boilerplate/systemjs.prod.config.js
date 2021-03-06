(function(global) {
    // simplified version of Object.assign for es3
    function assign() {
        var result = {};
        for (var i = 0, len = arguments.length; i < len; i++) {
            var arg = arguments[i];
            for (var prop in arg) {
                result[prop] = arg[prop];
            }
        }
        return result;
    }

    var sjsPaths = {};
    if (typeof systemJsPaths !== "undefined") {
        sjsPaths = systemJsPaths;
    }
    System.config({
        transpiler: 'plugin-babel',
        defaultExtension: 'js',
        paths: assign(
            {
                // paths serve as alias
                "npm:": "https://unpkg.com/",
            }, sjsPaths),
        map: assign(
            {
                // css plugin
                'css': 'npm:systemjs-plugin-css/css.js',

                // babel transpiler
                'plugin-babel': 'npm:systemjs-plugin-babel@0.0.25/plugin-babel.js',
                'systemjs-babel-build': 'npm:systemjs-plugin-babel@0.0.25/systemjs-babel-browser.js',

                // react
                react: 'npm:react@16.12.0',
                'react-dom': 'npm:react-dom@16.12.0',
                'react-dom-factories': 'npm:react-dom-factories',
                redux: 'npm:redux@3.6.0',
                'react-redux': 'npm:react-redux@5.0.6',
                'prop-types': 'npm:prop-types',
                'object-assign': 'npm:object-assign',
                'cookie': 'npm:cookie',
                'react-color': 'npm:react-color@2.17.3',
                'reactcss': 'npm:reactcss@1.2.3',
                'lodash': 'npm:lodash@4.17.15',
                'material-colors': 'npm:material-colors@1.2.6',
                '@icons/material': 'npm:@icons/material@0.2.4',
                'tinycolor2': 'npm:tinycolor2@1.4.1',
                'prismjs': 'npm:prismjs@1.21.0',

                app: appLocation + 'app'
            },
            systemJsMap
        ), // systemJsMap comes from index.html

        packages: {
            react: {
                main: './umd/react.production.min.js'
            },
            'react-dom': {
                main: './umd/react-dom.production.min.js'
            },
            'prop-types': {
                main: './prop-types.min.js',
                defaultExtension: 'js'
            },
            redux: {
                main: './dist/redux.min.js',
                defaultExtension: 'js'
            },
            'react-redux': {
                main: './dist/react-redux.min.js',
                defaultExtension: 'js'
            },
            'react-color': {
                main: './lib/index.js',
                map: {
                    './lib/components/common': './lib/components/common/index.js'
                }
            },
            'reactcss': {
                main: './lib/index.js',
            },
            'lodash': {
                main: './lodash.min.js',
            },
            'material-colors': {
                main: './dist/colors.js',
            },
            'tinycolor2': {
                main: './dist/tinycolor-min.js',
            },
            app: {
                defaultExtension: 'jsx'
            }
        },
        meta: {
            '*.jsx': {
                babelOptions: {
                    react: true
                }
            },
            '*.css': { loader: 'css' }
        }
    });
})(this);
