'use strict';

module.exports = function(grunt) {
    require('time-grunt')(grunt);
    var dateVar = grunt.template.today("dddd, mmmm dS, yyyy, h:MM:ss TT");

    require('load-grunt-config')(grunt, {
        jitGrunt: {
            staticMappings: {
                'webpack-dev-server': 'node_modules/grunt-webpack/tasks/webpack-dev-server.js',
                assemble: 'grunt/assemble/'
            }
        },
        data: {dateVar: dateVar},
        init: true
    });

    grunt.registerTask('server', [
        'config:dev',
        'clean:pre',
        'jshint:dev',
        'copy:css',
        'copy:images',
        'copy:fonts',
        'copy:js',
        'assemble',
        'clean:post',
        'webpack-dev-server',
        'browserSync',
        'watch'
    ]);

    grunt.registerTask('build', [
        'config:prod',
        'clean:pre',
        'jshint:prod',
        'copy:css',
        'copy:images',
        'copy:fonts',
        'copy:js',
        'assemble',
        'webpack:prod',
        'clean:post'
    ]);

    grunt.registerTask('default', [
        'server'
    ]);

    grunt.registerTask('deploy', [
        'build',
        'aws_s3'
    ]);

};
