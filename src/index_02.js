// @flow

/**
 * Add type annotations 定义了参数类型值以及返回值类型
 * @param n
 * @returns {number}
 */
function square(n: number): number {
    return n * n;
}

console.log('result', square(2));