/**
 * @flow
 * 引入第三方库，自定义相关接口，增加interfaces路径下自定义的的moment.js接口文件，并将.flowconfig中的libs只保留interfaces/
 */


import moment from 'moment'

var date = moment('2018-05-05');

console.log('date', date.format('MM-DD-YYYY'));