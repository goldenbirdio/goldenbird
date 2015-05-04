module.exports = {
    fonts: {
       files: [{
           cwd: '<%= config.src %>/assets/css/fonts',
           src: '*.{woff,tff,svg,eot}',
           dest: '<%= config.dist %>/assets/css/fonts',
           expand: true
       }]
    },
    images: {
        files: [{
            cwd: '<%= config.src %>/assets/images',
            src: '**/*',
            dest: '<%= config.dist %>/assets/images',
            expand: true
        }]
    }
};