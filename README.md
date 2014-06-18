# grunt-build-json

> Copy, combine, and transform JSON files programmatically.

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-build-json --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-build-json');
```

## The "buildjson" task

### Overview
In your project's Gruntfile, add a section named `buildjson` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  buildjson: {
    options: {
      indent: '    ',
      collapse: true, 
      processPropertyName: function( filepath ) {
        return 'parentPropertyName';
      }
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

#### options.indent
Type: `String`
Default value: `'    '`

Whitespace used for indentation/prettification.

#### options.collapse
Type: `Boolean`
Default value: `true`

When set to true parsed objects are extended into each other. When set to false, parsed objects are separated into different properties by file.

#### options.processPropertyName
Type: `Function`

Should take a source file's filepath return the property name the parsed value will be nested under. (Not used if `collapse` is true)

### Usage Examples

#### Default Options
In this example, the default options are used to take two JSON files and combine them into one object. So if the `alpha.json` file has the content `{"alpha":"albert"}` and the `beta.json` file had the content `{"beta":"benjamin"}`, the generated result would be `{"alpha":"albert","beta":"benjamin"}`. (Note : The default settings would make it so this was indented/prettified.)

```js
grunt.initConfig({
  buildjson: {
    options: {},
    files: {
      'dest/master.json': ['src/alpha.json', 'src/beta.json'],
    },
  },
});
```

#### Custom Options
In this example, the custom options are used to take two JSON files and combine them into one object. So if the `alpha.json` file has the content `{"alpha":"albert"}` and the `beta.json` file had the content `{"beta":"benjamin"}`, the generated result would be :``

```js
{
    "ALPHA": {
        "alpha": "albert"
    },
    "BETA": {
        "beta": "benjamin"
    }
}
```

```js
grunt.initConfig({
  buildjson: {
    options: {
      indent: '  ',
      collapse: false,
      processPropertyName: function(filepath) {
        var segments = filepath.split("/");
        return segments[segments.length-1].split(".")[0].toUpperCase();
      }
    },
    files: {
      'dest/master.json': ['src/alpha.json', 'src/beta.json'],
    },
  },
});
```

## Contributing
I don't know what to put here.

## Release History
_(Nothing yet)_
