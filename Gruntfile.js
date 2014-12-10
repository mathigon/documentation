// ================================================================================================
// Mathigon Gruntfile
// (c) 2014 Mathigon
// ================================================================================================


/* jshint node: true */

module.exports = function (grunt) {

    // Dynamically load npm tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    var libraries = ['../core.js/dist/core.js', '../fermat.js/dist/fermat.js',
                     '../boost.js/dist/boost.js', '../slate.js/dist/slate.js'];

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),
        src: 'src',
        out: (grunt.cli.tasks[0] === 'prod' ? 'prod' : 'dev'),
        banner: '/* Mathigon JavaScript Tools */\n' +
                '/* MIT License (https://github.com/Mathigon/core.js/blob/master/LICENSE) */\n\n',

        clean: ['<%= out %>'],


        // ----------------------------------------------------------------------------------------
        // JavaScript Files

        concat: {
            options: {
                separator: '\n'
            },
            utilities: {
                src: libraries,
                dest: '<%= out %>/scripts/utilities.js'
            },
            site: {
                src: '<%= src %>/scripts/*.js',
                dest: '<%= out %>/scripts/docs.js'
            }
        },

        uglify: {
            options: { banner: '<%= banner %>', mangle: false },
            all: {
                src: ['<%= out %>/scripts/*.js'],
                expand: true
            },
            core:   { src: libraries.slice(0, 1), dest: '<%= out %>/download/core.min.js' },
            fermat: { src: libraries.slice(0, 2), dest: '<%= out %>/download/fermat.min.js' },
            boost:  { src: libraries.slice(0, 3), dest: '<%= out %>/download/boost.min.js' },
            slate:  { src: libraries.slice(0, 4), dest: '<%= out %>/download/mathigon.min.js' }
        },


        // ----------------------------------------------------------------------------------------
        // CSS Files

        less: { all: {
            files: [{
                expand: true,
                src: 'styles/*.less',
                dest: '<%= out %>',
                cwd: '<%= src %>',
                ext: '.css'
            }]
        }},

        autoprefixer: { all: {
            files: [{
                expand: true,
                flatten: true,
                src: '<%= out %>/styles/*.css',
                dest: '<%= out %>/styles'
            }]
        }},

        cssmin: { all: {
            options: { banner: '<%= banner %>' },
            files: [{
                expand: true,
                flatten: true,
                src: '<%= out %>/styles/*.css',
                dest: '<%= out %>/styles'
            }]
        }},


        // ----------------------------------------------------------------------------------------
        // Images

        imagemin: { all: {
            options: {
                optimizationLevel: 4,
                progressive: true,
                interlaced: true
            },
            files: [{
                expand: true,
                cwd: '<%= src %>',
                src: ['**/*.{png,jpg,gif}', '!**/uri/*'],
                dest: '<%= out %>'
            }]
        }},


        // ----------------------------------------------------------------------------------------
        // HTML Bake
        // https://github.com/MathiasPaumgarten/grunt-bake

        bake: { all: {
            options: { content: (this.out === 'dev' ? { dev: 'true' } : { prod: 'prod' }) },
            files: [{
                expand: true,
                cwd: '<%= src %>',
                src: ['**/*.html', '!**/templates/*'],
                dest: '<%= out %>'
            }]

        }},

        htmlmin: { all: {
            options: {
                keepClosingSlash: true,
                removeComments: true,
                collapseWhitespace: true,
                removeEmptyAttributes: true,
                removeRedundantAttributes: true,
                collapseBooleanAttributes: true
            },
            files: [{
                expand: true,
                cwd: '<%= out %>',
                src: ['**/*.html'],
                dest: '<%= out %>'
            }]
        }},

        sitemap: { all: {
            siteRoot: 'prod/',
            homepage: 'http://mathigon.org'
        }},


        // ----------------------------------------------------------------------------------------
        // Static Files

        copy: {
            globalCss: {
                src: '../boost.js/dist/global.css',
                dest: '<%= out %>/styles/global.css'
            },
            vendor: {
                files: [{
                    expand: true,
                    cwd: '<%= src %>',
                    src: ['vendor/**/*'],
                    dest: '<%= out %>'
                }]
            },
            dev: {
                files: [{
                    expand: true,
                    cwd: '<%= src %>',
                    src: ['**/*.{gif,png,jpg,ico,json,xml,mp3,mp4,svg,otf,ttf,eot,woff,pdf}', '!**/uri/*'],
                    dest: '<%= out %>'
                }]
            },
            prod: {
                files: [{
                    expand: true,
                    cwd: '<%= src %>',
                    src: ['**/*.{ico,json,xml,mp3,mp4,svg,otf,ttf,eot,woff,pdf}', '!**/uri/*'],
                    dest: '<%= out %>'
                }]
            }
        },


        // ----------------------------------------------------------------------------------------
        // File Watchers and Syncing

        sync: { all: {
            files: [{
                cwd: 'src',
                src: ['**', '!**/*.less', '!**/*.html', '!**/uri/*'],
                dest: '<%= out %>'
            }],
            verbose: true
        }},

        watch: {
            html: {
                files: 'src/**/*.{html,svg}',
                tasks: ['bake']
            },
            less: {
                files: 'src/**/*.less',
                tasks: ['less', 'autoprefixer']
            },
            js: {
                files: 'src/scripts/*.js',
                tasks: ['concat']
            },
            static: {
                files: 'src/**/*.{gif,png,jpg,ico,json,xml,mp3,mp4,svg,otf,ttf,eot,woff,png}',
                tasks: ['sync']
            }
        },

        concurrent: {
            options: { limit: 5, logConcurrentOutput: true },
            dev: {
                tasks: ['watch:html', 'watch:less', 'watch:js', 'watch:static', 'connect:dev']
            },
            prod: {
                tasks: ['connect:prod']
            }
        },


        // ----------------------------------------------------------------------------------------
        // FTP Upload

        connect: {
            dev: {
                options: {
                    port: 8020,
                    base: 'dev',
                    keepalive: true
                }
            },
            prod: {
                options: {
                    port: 8021,
                    base: 'prod',
                    keepalive: true
                }
            }
        },

        'ftp-deploy': {
            prod: {
                auth: {
                    host: 'mathigon.org',
                    port: 21,
                    authKey: 'mathigon'
                },
                src: 'dev',
                dest: '/public_html/mathigon-io',
                exclusions: []
            }
        }
    });

    // ============================================================================================

    // Default (dev) task
    grunt.registerTask('default', [
        'clean',
        'concat:utilities',
        'concat:site',
        'less:all',
        'autoprefixer:all',
        'copy:vendor',
        'copy:globalCss',
        'bake:all',
        'copy:dev',
        'uglify:core',
        'uglify:fermat',
        'uglify:boost',
        'uglify:slate',
        'concurrent:dev'
    ]);

    // Build (dist) task
    grunt.registerTask('prod', [
        'clean',
        'concat:utilities',
        'concat:site',
        'uglify:all',
        'less:all',
        'autoprefixer:all',
        'copy:vendor',
        'copy:globalCss',
        'cssmin:all',
        'imagemin:all',
        'bake:all',
        'htmlmin:all',
        'copy:prod',
        'uglify:core',
        'uglify:fermat',
        'uglify:boost',
        'uglify:slate',
        'sitemap:all',
        'concurrent:prod'
    ]);

    // Deploy task
    grunt.registerTask('deploy', [
        'ftp-deploy:prod'
    ]);
};
