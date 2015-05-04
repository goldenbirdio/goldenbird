var path = require('path');

module.exports = {
    dist: {
        options: {
            cacheLocation: '<%= config.temp %>/.sass-cache',
            precision: 3,
            style: 'collapsed',
            sourcemap: 'file'
        },
        files: [
            {
                src: '<%= config.src %>/assets/css/styles.scss',
                dest: '<%= config.dist %>/assets/css/main.css'
            }
        ]
    }
};
