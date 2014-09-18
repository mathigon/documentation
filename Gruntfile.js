// ================================================================================================
// Mathigon Gruntfile
// (c) 2014 Mathigon
// ================================================================================================


'use strict';


module.exports = function (grunt) {

    // Dynamically load npm tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);


    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        project: {
            src: 'src',
            banner: '// (c) 2014, Mathigon\n\n'
        },


        // ----------------------------------------------------------------------------------------
        // Clean files and folders
        // https://github.com/gruntjs/grunt-contrib-clean

        clean: {
            dev:  ['dev'],
            prod: ['prod']
        },


        // ----------------------------------------------------------------------------------------
        // Uglify (minify) JavaScript files
        // https://github.com/gruntjs/grunt-contrib-uglify

        uglify: {
            options: {
                banner: '<%= project.banner %>',
                mangle: false
            },
            scripts: {
                files: [
                    { dest: 'prod/scripts/utilities.js',
                      src: ['src/scripts/prototype.js',
                            'src/scripts/fermat.js', 'src/scripts/browser.js'] },
                    { dest: 'prod/scripts/layout.js', src: ['src/scripts/layout.js'] },
                ],
            },
            prod: {
                files: [{
                    expand: true,
                    src: ['resources/**/*.js'],
                    cwd: 'src',
                    dest: 'prod',
                }]
            }
        },


        // ----------------------------------------------------------------------------------------
        // Compile LESS files
        // https://github.com/gruntjs/grunt-contrib-less

        less: {
            dev: {
                files: [{
                    expand: true,
                    src: 'styles/*.less',
                    dest: 'dev',
                    cwd: 'src',
                    ext: '.css'
                }]
            },
            prod: {
                files: [{
                    expand: true,
                    src: 'styles/*.less',
                    dest: 'prod',
                    cwd: 'src',
                    ext: '.css'
                }]
            }
        },


        // ----------------------------------------------------------------------------------------
        // Autoprefixer
        // https://github.com/nDmitry/grunt-autoprefixer

        autoprefixer: {
           options: {
                browsers: [
                    'last 2 version',
                    'safari 6',
                    'ie 9',
                    'opera 12.1',
                    'ios 6',
                    'android 4'
                ]
            },            
            dev: {
                files: [{
                    expand: true,
                    flatten: true,
                    src: 'dev/styles/*.css',
                    dest: 'dev/styles'
                }]
            },
            prod: {
                files: [{
                    expand: true,
                    flatten: true,
                    src: 'prod/styles/*.css',
                    dest: 'prod/styles'
                }]
            }
        },


        // ----------------------------------------------------------------------------------------
        // CSSMin
        // https://github.com/gruntjs/grunt-contrib-cssmin

        cssmin: {
            options: {
                banner: '<%= project.banner %>'
            },
            prod: {
                files: [{
                    expand: true,
                    flatten: true,
                    src: 'prod/styles/*.css',
                    dest: 'prod/styles'
                }]
            }
        },


        // ----------------------------------------------------------------------------------------
        // IMG Minification

        imagemin: {
            options: {
                optimizationLevel: 4,
                progressive: true,
                interlaced: true
            },
            prod: {
                files: [{
                    expand: true,
                    cwd: 'src',
                    src: ['**/*.{png,jpg,gif}', '!**/uri/*'],
                    dest: 'prod'
                }]
            }
        },


        // ----------------------------------------------------------------------------------------
        // HTML Bake
        // https://github.com/MathiasPaumgarten/grunt-bake

        bake: {
            dev: {
                options: { content: { dev: "true" } },
                files: [{
                    expand: true,
                    cwd: 'src',
                    src: ['**/*.html', '!**/templates/*'],
                    dest: 'dev'
                }]
            },
            prod: {
                options: { content: { prod: "prod" } },
                files: [{
                    expand: true,
                    cwd: 'src',
                    src: ['**/*.html', '!**/templates/*'],
                    dest: 'prod'
                }]
            }
        },


        // ----------------------------------------------------------------------------------------
        // HTML Minification

        htmlmin: {
            prod: {
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
                    cwd: 'prod',
                    src: ['**/*.html'],
                    dest: 'prod'
                }]
            }
        },


        // ----------------------------------------------------------------------------------------
        // Copy Static Files

        copy: {
            dev: {
                files: [{
                    expand: true,
                    cwd: 'src',
                    src: ['**/*.{js,gif,png,jpg,ico,json,mp3,mp4,svg,otf,ttf}', '!**/uri/*'],
                    dest: 'dev'
                }]
            },
            prod: {
                files: [{
                    expand: true,
                    cwd: 'src',
                    src: ['**/*.{ico,json,mp3,mp4,svg,otf,ttf}', '!**/uri/*'],
                    dest: 'prod'
                }]
            }
        },


        // ----------------------------------------------------------------------------------------
        // Sitemaps

        sitemap: {
            prod: {
                siteRoot: 'prod/',
                homepage: 'http://mathigon.io'
            }
        },


        // ----------------------------------------------------------------------------------------
        // Start Web Server
        // https://github.com/jsoverson/grunt-open

        connect: {
            dev: {
                options: {
                    port: 8010,
                    base: 'dev',
                    keepalive: true
                }
            },
            prod: {
                options: {
                    port: 8011,
                    base: 'prod',
                    keepalive: true
                }
            }
        },


        // ----------------------------------------------------------------------------------------
        // Watch Files
        // https://github.com/tomusdrw/grunt-sync
        // https://github.com/sindresorhus/grunt-concurrent
        // https://github.com/gruntjs/grunt-contrib-watch

        sync: {
            dev: {
                files: [{
                    cwd: 'src',
                    src: ['**', '!**/*.less', '!**/*.html', '!**/uri/*'],
                    dest: 'dev',
                }],
                verbose: true
            }
        },

        watch: {
            html: {
                files: 'src/**/*.{html,svg}',
                tasks: ['bake:dev']
            },
            less: {
                files: 'src/**/*.less',
                tasks: ['less:dev', 'autoprefixer:dev']
            },
            dev: {
                files: 'src/**/*.{js,gif,png,jpg,ico,json,mp3,mp4,svg,otf,ttf}',
                tasks: ['sync:dev']
            }
        },

        concurrent: {
            dev: {
                tasks: ['watch:html', 'watch:less', 'watch:dev', 'connect:dev'],
                options: {
                    limit: 4,
                    logConcurrentOutput: true
                }
            },
            prod: {
                tasks: ['connect:prod'],
                options: {
                    limit: 1,
                    logConcurrentOutput: true
                }
            }
        },


        // ----------------------------------------------------------------------------------------
        // FTP Upload
        // https://github.com/zonak/grunt-ftp-deploy

        'ftp-deploy': {
            prod: {
                auth: {
                    host: 'mathigon.org',
                    port: 21,
                    authKey: 'mathigon'
                },
                src: 'prod',
                dest: '/public_html/mathigon-io',
                exclusions: []
            },
            dev: {
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
        'clean:dev',
        'less:dev',
        'autoprefixer:dev',
        'copy:dev',
        'bake:dev',
        'concurrent:dev'
    ]);

    // Build (dist) task
    grunt.registerTask('prod', [
        'clean:prod',
        'less:prod',
        'autoprefixer:prod',
        'cssmin:prod',
        'uglify:scripts',
        'uglify:prod',
        'imagemin:prod',
        'bake:prod',
        'htmlmin:prod',
        'copy:prod',
        'sitemap:prod',
        'concurrent:prod'
    ]);

    // Deploy task
    grunt.registerTask('deploy-prod', [
        'ftp-deploy:prod'
    ]);

    // Deploy task
    grunt.registerTask('deploy-dev', [
        'ftp-deploy:dev'
    ]);
};
