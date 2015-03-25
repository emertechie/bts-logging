var log4js = require('log4js');
var path = require('path');
var defaultLogLevel = process.env.LOG_LEVEL || 'INFO';
var debug = require('debug')('logging');

module.exports = function(baseDir, options) {
    var logCfgFile = options.logCfgFile ? path.resolve(baseDir, options.logCfgFile) : null;
    var logFilesDir = options.logFilesDir ? path.resolve(baseDir, options.logFilesDir) : null;

    debug('Default level "%s"; Cfg file "%s"; Log dir "%s"', defaultLogLevel, logCfgFile, logFilesDir);

    var log4jsOptions = logFilesDir ? { cwd: logFilesDir } : null;
    log4js.configure(logCfgFile, log4jsOptions);

    return {
        createLoggerFromFileName: function(fileName, level) {
            var loggerName = path.basename(fileName, '.js');
            return this.createLogger(loggerName, level);
        },
        createLogger: function(name, level) {
            level = level || defaultLogLevel;
            var logger = log4js.getLogger(name);
            logger.setLevel(level);
            return logger;
        }
    };
};