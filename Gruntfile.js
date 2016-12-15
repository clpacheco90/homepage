module.exports = function(grunt) {

    var banner = '// <%= pkg.name %> is developed by Calvin Pacheco - https://calvinpacheco.com\n';
    banner += '// ₢ CopyRight 2016\n';
    banner += '// Last time updated: <%= grunt.template.today("UTC:yyyy-mm-dd h:MM:ss TT Z") %>\n\n';
    //banner += '\'use strict\';\n\n';

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),        
        usebanner: {
            dist: {
                options: {
                    position: 'top',
                    banner: banner
                },
                files: {
                    src: ['public/*.js']
                }
            }
        },
        jade: {
            compile: {
                options: {
                    pretty: true,
                },
                files: [
                    // includes files within path
                    {
                        expand: true,
                        cwd: 'src/views/',
                        src: ['**/*.jade'],
                        dest: 'public/',
                        filter: 'isFile',
                        ext: '.html'
                    }
                ]                
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    //grunt.loadNpmTasks('grunt-contrib-uglify');
    //grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-closure-compiler');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-text-replace');
    grunt.loadNpmTasks('grunt-banner');
    grunt.loadNpmTasks('grunt-contrib-jade');

    // Default task(s).
    grunt.registerTask('default', ['jade', 'usebanner']);
};