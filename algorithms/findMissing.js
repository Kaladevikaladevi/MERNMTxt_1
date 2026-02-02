const findMissing = require('./findMissing');

const nums = [4,3,2,7,8,2,3,1];

function findMissing(nums) {
  const missing = [];

  for (let i = 0; i < nums.length; i++) {
    const index = Math.abs(nums[i]) - 1;

    if (nums[index] > 0) {
      nums[index] = -nums[index];
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      missing.push(i + 1);
    }
  }

  return missing;
}

module.exports = findMissing;

console.log('Missing:', findMissing([...nums]));
