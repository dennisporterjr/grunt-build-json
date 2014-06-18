/*
 * grunt-build-json
 * https://github.com/dennisporterjr/grunt-build-json
 *
 * Copyright (c) 2014 Dennis Porter Jr
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

    function extend(){
        for(var i=1; i<arguments.length; i++) {
            for(var key in arguments[i]) {
                if(arguments[i].hasOwnProperty(key)) {
                    arguments[0][key] = arguments[i][key];
                }
            }
        }
        return arguments[0];
    }

    grunt.registerMultiTask('buildjson', 'Copy, combine, and transform JSON files programmatically.', function() {
        // Merge task-specific and/or target-specific options with these defaults.
        var options = this.options({
            indent : '    ',
            collapse : true,
            processPropertyName : function( filePath ) {
                var segments = filePath.split("/");
                return segments[segments.length-1].split(".")[0];
            }
        });

        // Iterate over all specified file groups.
        this.files.forEach(function(f) {
            var json_object = {}, output = "";

            f.src.filter(function(filepath) {

                if (!grunt.file.exists(filepath)) {
                    grunt.log.warn('Source file "' + filepath + '" not found.');
                    return false;
                } else {
                    return true;
                }
            }).map(function(filepath) {
                var content = grunt.file.read(filepath), obj = {};

                try {
                    obj = JSON.parse( content );
                } catch( e ) {
                    grunt.fail.warn("grunt-build-json couldn't parse " + filepath + "." );
                }

                if( options.collapse ) {
                    json_object = extend({}, json_object, obj);
                } else {
                    json_object[ options.processPropertyName( filepath ) ] = obj;
                }

                return true;
            });

            output = JSON.stringify( json_object, null, options.indent ) + "\n";

            // Write the destination file.
            grunt.file.write( f.dest, output );

            // Print a success message.
            grunt.log.writeln( 'File "' + f.dest + '" created.' );

        });

    });

};
