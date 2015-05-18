module.exports = {
    css: {
        files: [{
            cwd: '<%= config.src %>/assets/css',
            src: '*.css',
            dest: '<%= config.dist %>/assets/css',
            expand: true
        }]
    },
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
    },
    js: {
        files: [{
            cwd: '<%= config.src %>/assets/js/vendors',
            src: '*.js',
            dest: '<%= config.dist %>/assets/js',
            expand: true
        }]
    }
};