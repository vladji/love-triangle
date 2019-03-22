/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let arrTriangles = [];
  next:
  for (let i = 0; i < preferences.length; i++) {
    let elementOne = preferences[i];
    let elementTwo = preferences[elementOne - 1];
    let elementThr = preferences[elementTwo - 1];
    if (elementThr == elementTwo) continue next;
    if (elementThr === i + 1) {
      let sortArr = [];
      sortArr.push(elementOne,elementTwo,elementThr);
      sortArr.sort();
      let getElementToCount = sortArr[0] + ':' + sortArr[1] + ':' + sortArr[2];
        if (arrTriangles.indexOf(getElementToCount) == -1)
        arrTriangles.push(getElementToCount);
    }
  }
  return arrTriangles.length;
};
