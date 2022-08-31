const { template } = require('@babel/core')
const { basename } = require('discord.js')

function minMedMax(n1, n2, n3) {
  let sortNumberArray = [n1, n2, n3]
  let compareNumber
  function sortNumberInArray(a, b) {
    if (sortNumberArray[a] > sortNumberArray[b]) {
      compareNumber = sortNumberArray[a]
      sortNumberArray[a] = sortNumberArray[b]
      sortNumberArray[b] = compareNumber
    }
  }
  sortNumberInArray(0,2)
  sortNumberInArray(0,1)
  sortNumberInArray(1,2)
  return {min: sortNumberArray[0], mid: sortNumberArray[1], max: sortNumberArray[2]}
}
module.exports = minMedMax
