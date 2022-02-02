/**
 * Two Number Sum
 *
 * Write a function that takes in a non-empty array of distinct integers and
 * an integer representing a target sum.  If any two numbers in the input array
 * sum to the target sum, the function should return them in an array, in any
 * order.  If no two numbers sum up to the target sum, the function should
 * return an empty array.
 *
 * Note that the target sum has to be obtained by summing two different integers
 * in the array; you can't add a single integer to itself in order to obtain the
 * target sum.
 *
 * You can assume that there will be at most one pair of numbers summing up to
 * the target sum.
 *
 * Example:
 * array = [3, 5, -4, 8, 11, 1, -1, 6]
 * targetSum = 10
 * result: [-1, 22]
 */

const twoNumberSum = (array, targetSum) => {
  const sortedArray = [...array].sort((a, b) => a - b);
  let botIdx = 0,
    topIdx = sortedArray.length - 1;
  while (botIdx !== topIdx) {
    const lowNum = sortedArray[botIdx],
      highNum = sortedArray[topIdx];
    if (lowNum + highNum === targetSum) {
      return [lowNum, highNum];
    } else if (lowNum + highNum > targetSum) {
      topIdx--;
    } else {
      botIdx++;
    }
  }
  return [];
};
