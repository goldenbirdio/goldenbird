module.exports = {
    options: {
        accessKeyId: '<%= secret.key %>',
        secretAccessKey: '<%= secret.secret',
        uploadConcurrency: 50,
        progress: 'progressBar'
    },
    dev: {
        options: {
            bucket: '<%= secret.s3_bucket %>'
        },
        expand: true,
        src: '**',
        cwd: '<%= config.dist %>/',
        dest: '/'
    },
    production: {
        options: {
            bucket: '<%= secret.s3_bucket %>'
        },
        expand: true,
        src: '**/*',
        dest: '/',
        cwd: '<%= config.dist %>'
    },
    devClear: {
        options: {
            differential: true,
            bucket: '<%= secret.s3_bucket %>'
        },
        action: 'delete',
        cwd: '<%= config.dist %>/',
        dest: '/',
        region: 'us-west-1'
    },
    productionClear: {
        options: {
            differential: true,
            bucket: '<%= secret.s3_bucket %>'
        },
        action: 'delete',
        cwd: '<%= config.dist %>/',
        dest: '/',
        region: '<%= secret.region %>'
    }
};