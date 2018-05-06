
// @flow

/**
 * Hello Flow
 * 如果操作运算类型不匹配，会报异常;
 * 如果是提供给外部使用，需要增加类型注解，否则不会报异常
 */

function multiplicative(x: number): number {
    return x * 10;
}

function add(x: number): number {
    return x + 10;
}

// foo('Hello, flow!');
// foo(2);