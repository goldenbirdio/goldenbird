var path = require('path');

module.exports = function(grunt, options) {
    function getSecretCreds(environment) {
        try {
            var secretCreds = grunt.file.read('./configs/secret/' + environment + 'Config.json', {encoding: 'utf-8'});
            if (secretCreds) {
                secretCreds = JSON.parse(secretCreds)
            }
            return secretCreds
        } catch (err) {
            console.log('Error reading secret credentials: ', err);
            return false;
        }
    }

    return {
        dev: {
            options: {
                variables: {
                    environment: 'dev',
                    secret: getSecretCreds('dev')
                }
            }
        },
        prod: {
            options: {
                variables: {
                    environment: 'production',
                    secret: getSecretCreds('production')
                }
            }
        },
        aws: grunt.file.read(path.join(process.cwd(), 'configs/sample_s3Config.json'), {encoding: 'utf-8'}),
        content: 'src/pages',
        dist: 'dist',
        temp: 'temp',
        src: 'src'
    };
};
