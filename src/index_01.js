
// @flow

/**
 * Hello Flow
 * 如果操作运算类型不匹配，会报异常
 */
(function() {
    function foo(x) {
        return x * 10;
    }

    // foo('Hello, flow!');
    foo(2);
});