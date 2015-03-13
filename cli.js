#!/usr/bin/env node
'use strict';
var pkg = require('./package.json');
var funnelenvysays = require('./');

require('taketalk')({
  init: function (input, options) {
    console.log(funnelenvysays(input, options));
  },
  help: function () {
    console.log([
      '',
      '  ' + pkg.description,
      '',
      '  Usage',
      '    funnelenvysays <string>',
      '    funnelenvysays <string> --maxLength 8',
      '    echo <string> | funnelenvysays',
      '',
      '  Example',
      '    funnelenvysays "Sindre is a horse"',
      funnelenvysays('Sindre is a horse')
    ].join('\n'));
  },
  version: pkg.version
});
