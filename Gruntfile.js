// ================================================================================================
// Mathigon | Grunt Configuration
// (c) Mathigon, 2016
// ================================================================================================


module.exports = function(grunt) {

    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
    require('./grunt-rollup')(grunt)

    grunt.initConfig({

        banner: '/* (c) Mathigon, 2016 */\n' +
                '/* MIT License (https://github.com/Mathigon/mathigon.io/blob/master/LICENSE) */\n\n',

        clean: ['build'],

        // ----------------------------------------------------------------------------------------

        rollup: { app: {
            files: { 'build/scripts.js': 'src/scripts.js' }
        }},

        babel: { app: {
            options: { presets: ['es2015'] },
            src: ['build/scripts.js'],
            dest: 'build/scripts.js'
        }},

        uglify: { app: {
            options: { banner: '<%= banner %>' },
            src: ['build/scripts.js'],
            dest: 'build/scripts.js'
        }},

        // ----------------------------------------------------------------------------------------

        less: { app: {
            files: { 'build/styles.css': 'src/styles.less' }
        }},

        autoprefixer: { app: {
            src: ['build/styles.css'],
            dest: 'build/styles.css'
        }},

        cssmin: { app: {
            options: { banner: '<%= banner %>' },
            src: ['build/styles.css'],
            dest: 'build/styles.css'
        }},

        // -------------------------------------------------------------------------

        jade: { app: {
            files: [{
                expand: true,
                cwd: 'src',
                src: ['*.jade', '!_template.jade'],
                dest: 'build',
                ext: '.html'
            }]
        }},

        // ----------------------------------------------------------------------------------------

        copy: { app: {
            files: [{
                expand: true,
                cwd: 'src',
                src: ['vendor/**', 'images/**', 'favicon.ico'],
                dest: 'build'
            }]
        }},

        // ----------------------------------------------------------------------------------------

        sync: { app: {
            files: [{
                cwd: 'src',
                src: ['vendor/**', 'images/**', 'favicon.ico'],
                dest: 'build'
            }]
        }},

        watch: {
            jade: {
                files: ['src/*.jade', '../*.js/docs/*.md'],
                tasks: ['jade']
            },
            less: {
                files: 'src/*.less',
                tasks: ['less', 'autoprefixer']
            },
            js: {
                files: 'src/*.js',
                tasks: ['rollup', 'babel']
            },
            static: {
                files: ['vendor/**', 'images/**', 'favicon.ico'],
                tasks: ['sync']
            }
        },

        // ----------------------------------------------------------------------------------------

        connect: { app: {
            options: {
                port: 8081,
                base: 'build',
                keepalive: true
            }
        } },

        concurrent: { app: {
            options: { limit: 5, logConcurrentOutput: true },
            tasks: ['watch:jade', 'watch:less', 'watch:js', 'watch:static', 'connect']
        } },

        buildcontrol: { app: {
            options: {
                dir: 'build',
                commit: true,
                push: true,
                message: 'Built %sourceName% from commit %sourceCommit% on branch %sourceBranch%',
                remote: 'git@github.com:Mathigon/mathigon.github.io.git',
                branch: 'master'
            }
        }}
    });

    grunt.registerTask('default', ['rollup', 'babel', 'less', 'autoprefixer', 'jade', 'copy']);

    grunt.registerTask('dev', ['default', 'concurrent']);
    grunt.registerTask('deploy', ['clean', 'default', 'uglify', 'cssmin', 'buildcontrol']);
};
