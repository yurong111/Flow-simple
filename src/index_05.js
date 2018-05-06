/**
 * @flow
 * 原生代码引入第三方库
 */


var moment = require('moment');

var date = moment('2018-05-05');

console.log('date', date.format('MM-DD-YYYY'));