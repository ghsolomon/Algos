/**
 * Sorted Squared Array
 *
 * Write a function that takes in a non-empty array of integers that are sorted
 * in ascending order and returns a new array of the same length with the
 * squares of the original integers also sorted in ascending order.
 *
 * Example:
 * array = [1, 2, 3, 5, 6, 8, 9]
 * result = [1, 4, 9, 25, 36, 64, 81]
 */

const sortedSquareArray = (array) =>
  array.map((val) => val * val).sort((a, b) => a - b);
