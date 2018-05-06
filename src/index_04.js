// @flow

/**
 * 引入第三方库
 */

var moment = require('moment');

function toParse(datestr: string) {
    return moment(datestr);
}


var date = toParse('2018-05-05');

console.log('date', date.format('MM-DD-YYYY'));