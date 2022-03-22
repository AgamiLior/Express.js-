const {
    findMean,
    findMedian,
    findMode,
  } = require("./functions");
  
  describe("#findMedian", function(){
    it("finds the median of an even set", function(){ 
      expect(findMedian([13, 18, 13, 14, 13, 16, 14, 21, 13])).toEqual(14)
    })
  })
  
  describe("#findMean", function () {
    it("finds the mean of an empty array", function () { 
      expect(findMean([13, 18, 13, 14, 13, 16, 14, 21, 13])).toEqual(15)
    })
  })
  
  describe("#findMode", function () {
    it("finds the mode", function () { 
      expect(findMode([13, 18, 13, 14, 13, 16, 14, 21, 13])).toEqual(13)
    })
  })