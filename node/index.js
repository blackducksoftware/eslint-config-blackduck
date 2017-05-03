module.exports = {
    extends: [
        'blackduck',
        'blackduck/es6'
    ],
    env: {
        'node': true
    },
    rules: {
        'callback-return': 'off',

        'global-require': 'warn',

        'handle-callback-err': 'warn',

        'no-mixed-requires': [
            'warn',
            false
        ],

        // disallow new operators with calls to require
        'no-new-require': 'off',

        // disallow string concatenation with __dirname and __filename
        'no-path-concat': 'warn',

        // The process.env object in Node.js is used to store deployment/configuration
        // parameters. Littering it through out a project could lead to maintenance
        // issues as it’s another kind of global dependency. As such, it could lead
        // to merge conflicts in a multi-user setup and deployment issues in a
        // multi-server setup. Instead, one of the best practices is to define all
        // those parameters in a single configuration/settings file which could be
        // accessed throughout the project.
        'no-process-env': 'warn',

        // The process.exit() method in Node.js is used to immediately
        // stop the Node.js process and exit. This is a dangerous
        // operation because it can occur in any method at any point in time,
        // potentially stopping a Node.js application completely when an error occurs.
        'no-process-exit': 'error',

        'no-restricted-modules': 'off',

        'no-sync': 'off'
    }
};
