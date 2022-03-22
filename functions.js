
  function checkNumsArray(numsAsStrings) {
    let result = [];
  
    for (let i = 0; i < numsAsStrings.length; i++) {
      let num = Number(numsAsStrings[i]);
  
      if (Number.isNaN(num)) {
        return new Error(
          `Bad Request- Please insert number as value at index ${i}.`
        );
      }
  
      result.push(num);
    }
    return result;
  }

 
  function findMean(nums){
    if(nums.length === 0) return 0;
    return nums.reduce(function (currentVal, nextVal) {
      return currentVal + nextVal;
    }) / nums.length
  }
  
  function findMedian(nums){
    nums.sort((a, b) => a - b);

    let x = nums.length;
    let result;
    if (x % 2 === 0) {
        result = (nums[(x / 2)]);
        console.log('b', result)
    } else {
        let i = ((x+1) /2);
        result = nums[i];
        console.log('a', result)
    }
    return result

  }


  function findMode(arr) {
    let freqCounter = counter(arr);
    let count = 0;
    let mostFrequent;
  
    for (let key in freqCounter) {
      if (freqCounter[key] > count) {
        mostFrequent = key;
        count = freqCounter[key];
      }
    }
  
    return +mostFrequent;
  }
  

  function counter(arr) {
    return arr.reduce(function(currentVal, nextVal) {
        currentVal[nextVal] = (currentVal[nextVal] || 0) + 1;
      return currentVal;
    }, {});
  }
  
  
  
  module.exports = {
    checkNumsArray,
    findMean,
    findMedian,
    findMode,
  };
  