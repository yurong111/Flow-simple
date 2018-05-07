/**
 * @flow
 * 引入第三方库，使用flow-typed生成相应接口，将.flowconfig中的libs只保留flow-typed/npm/
 */


var moment = require('moment');

var date = moment('2018-05-05');

console.log('date', date.format('MM-DD-YYYY'));