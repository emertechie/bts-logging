bts-logging
===========

Very simple logger factory based on log4js

# Install

```
npm install bts-logging
```

# Overview

Small logger factory just to save me rewriting something similar for every project.

Supports a global log level set via environment variable (to override the default level of 'INFO') and per-logger log levels.  

# Configuration

Define a `logging.js` file in your application project as follows:
 
```
module.exports = require('bts-logging')(__dirname, {
    logCfgFile: '../config/logging.json',
    logFilesDir: '../logs'
});

```

Adjust paths to configuration file and log directory as appropriate obviously.

A sample [logging.json](logging.json.example) file is provided in this project. Copy to your own application and adjust as necessary.
Log4js documenation is [here](https://github.com/nomiddlename/log4js-node). 

# Usage

```
var logging = require('./logging');                            // Path to your logging.js file as described above

var logger = logging.createLogger('foo');                      // Use default log level of 'INFO'
var logger = logging.createLogger('bar', 'DEBUG');             // Use custom log level
var logger = logging.createLoggerFromFileName(__filename);     // If __filename is 'foo.js', creates a logger with name 'foo' 

// Use log4js logger returned. See log4js docs linked above for details
logger.trace('blah');
logger.info('etc');

```

Run your app with `LOG_LEVEL=X`, where X = 'TRACE' | 'DEBUG' | 'INFO' | 'WARN' | 'ERROR', to override the default log level of 'INFO'

# License

MIT
