module.exports = function (cli, options, done) {
  
  cli.flag('--port', '-p')
    .handler(function (num, done) {
      
      cli.set('port', num);
      done();
    });
  
  cli.flag('--host', '--hostname')
    .handler(function (hostname, done) {
      
      cli.set('hostname', hostname);
      done();
    });
  
  cli.flag('--config', '-c')
    .handler(function (config, done) {
      
      cli.set('config', config);
      done();
    });
  
  cli.flag('--debug')
    .handler(function (shouldDebug, done) {
      
      cli.set('debug', shouldDebug);
      done();
    });
  
  cli.flag('--gzip')
    .handler(function (shouldCompress, done) {
      
      cli.set('gzip', shouldCompress);
      done();
    });
  
  cli.flag('--version',  '-v')
    .handler(function (v, done) {
      
      var pkg = require('../../package.json');
      console.log(pkg.version);
      process.exit(0);
    });
  
  // TODO: test this
  cli.flag('--live', '-l')
    .handler(function (isLive, done) {
      
      cli.set('live', true);
      done();
    });
  
  done();
};