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
In this example, the default options are used to do something with whatever. So if the `testing` file has the content `Testing` and the `123` file had the content `1 2 3`, the generated result would be `Testing, 1 2 3.`

```js
grunt.initConfig({
  buildjson: {
    options: {},
    files: {
      'dest/master.json': ['src/menu.json', 'src/settings.json'],
    },
  },
});
```

#### Custom Options
In this example, custom options are used to do something else with whatever else. So if the `testing` file has the content `Testing` and the `123` file had the content `1 2 3`, the generated result in this case would be `Testing: 1 2 3 !!!`

```js
grunt.initConfig({
  buildjson: {
    options: {
      indent: '  ',
      collapse: true
    },
    files: {
      'dest/master.json': ['src/messages.json', 'src/data.json'],
    },
  },
});
```

## Contributing
I don't know what to put here.

## Release History
_(Nothing yet)_
