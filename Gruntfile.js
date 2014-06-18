/*
 * grunt-build-json
 * https://github.com/dennisporterjr/grunt-build-json
 *
 * Copyright (c) 2014 Dennis Porter Jr
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp']
    },

    // Configuration to be run (and then tested).
    buildjson: {
      default_options: {
        options: {},
        files: {
          'tmp/theta.json': ['test/fixtures/alpha.json', 'test/fixtures/beta.json']
        }
      },
      custom_options: {
        options: {
          indent: ''
        },
        files: {
          'tmp/delta.json': ['test/fixtures/alpha.json', 'test/fixtures/beta.json']
        }
      },
      nocollapse_options: {
        options: {
            collapse : false
        },
        files: {
          'tmp/zeta.json': ['test/fixtures/alpha.json', 'test/fixtures/beta.json']
        }
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*test.js']
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'buildjson', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
