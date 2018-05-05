// @flow

/**
 * 引入第三方库
 */

import comment from '../common/comment';

function toParse(datestr: string) {
    return comment(datestr);
}


var date = toParse('2018-05-05');

console.log('date', date.format('MM-DD-YYYY'));