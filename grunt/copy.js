module.exports = {
    images: {
        files: [{
            cwd: '<%= config.src %>/assets/images',
            src: '**/*',
            dest: '<%= config.dist %>/assets/images',
            expand: true
        }]
    }
};