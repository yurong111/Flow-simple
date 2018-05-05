// @flow

/**
 * Array 数组类型检查
 * @param numbers
 * @returns {number}
 */
function total(numbers: Array<number>) {
    var result = 0;
    for (var i = 0; i < numbers.length; i++) {
        result += numbers[i];
    }
    return result;
}

// total([1, 2, 3, 'Hello']);
total([1, 2, 3, 4]);