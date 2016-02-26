// =============================================================================
// Mathigon | Grunt Configuration
// (c) 2016 Mathigon
// =============================================================================



const path = require('path');
const rollup = require('rollup');

const absolutePath = /^(?:\/|(?:[A-Za-z]:)?[\\|\/])/;
const libraries = ['../core.js/src', '../fermat.js/src', '../boost.js/src', '../slate.js/src'];
const cache = {};

module.exports = function(grunt) {

    function resolveId(importee, importer) {
        if (importee[0] === '.' || absolutePath.test(importee) || !importer) return null;
        if (importee in cache) return cache[importee];

        for (var p of libraries) {
            var testPath = path.join(__dirname, p, importee)  + '.js';
            if (grunt.file.exists(testPath)) return testPath;

            var folders= importee.split('/');
            testPath = path.join(__dirname, p, importee, folders[folders.length - 1])  + '.js';
            if (grunt.file.exists(testPath)) return testPath;
        }

        return null;
    }

    grunt.registerMultiTask('rollup', 'Rollup Grunt Plugin', function() {
        var done = this.async();
        var options = this.options({
            module: function() { return 'app'; },
            format: 'iife',
            exports: 'none'  // 'named', 'none'
        });
        // output format options: 'amd', 'cjs', 'es6', 'iife', 'umd'

        var promises = this.files.map(function(f) {
            if (f.src.length === 0) grunt.fail.warn('No entry point specified.');
            if (f.src.length > 1) grunt.fail.warn('Multiple entry points are not supported.');

            var entry = f.src[0];
            if (!grunt.file.exists(entry)) grunt.fail.warn(`Entry point "${entry}" not found.`);

            return rollup.rollup({
                entry: entry,
                plugins: [{ resolveId }]
            }).then(function(bundle) {
                var result = bundle.generate({
                    format: options.format,
                    exports: options.exports,
                    moduleId: options.module(f.src)
                });
                grunt.file.write(f.dest, result.code);
            });
        });

        Promise.all(promises)
            .then(done)
            .catch(grunt.fail.warn);
    });
};
