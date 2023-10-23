export function getMergeSortAnimations(array) {
  //Setting Time complexities
  document.getElementById("Time_Worst").innerText="O(N log N)";
  document.getElementById("Time_Average").innerText="Θ(N log N)";
  document.getElementById("Time_Best").innerText="Ω(N log N)";

  //Setting Space complexity
  document.getElementById("Space_Worst").innerText="O(N)";

  const animations = [];
  if (array.length <= 1) return array;
  const auxiliaryArray = array.slice();
  mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
  for(var i = 0; i < array.length; i++){
    let animationStep = [i, i, 5];
    animations.push(animationStep);
  }
  return animations;
}

function mergeSortHelper(mainArray, startIdx, endIdx, auxiliaryArray, animations){
  if (startIdx === endIdx) return;  
  const middleIdx = Math.floor((startIdx + endIdx) / 2);
  let animationStep = [middleIdx, middleIdx, 1];
  animations.push(animationStep); // push to mark partition color
  // we will use aulixary in place of main arry because we are overwriting changes in main array
  // so go according to main array
  mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
  mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
  // This below 2 lines will give wrong answer reason explained above
  // mergeSortHelper(mainArray, startIdx, middleIdx, auxiliaryArray, animations);
  // mergeSortHelper(mainArray, middleIdx + 1, endIdx, auxiliaryArray, animations);
  doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
}

function doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations){
  let k = startIdx;
  let i = startIdx;
  let j = middleIdx + 1;
  while (i <= middleIdx && j <= endIdx) {
    let animationStep = [i, j, 2];
    animations.push(animationStep); // push to compare indices
    animationStep = [i, j, 3];
    animations.push(animationStep); // push to finalize the values in which comparision occured
    if (auxiliaryArray[i] <= auxiliaryArray[j]) {
      // We overwrite the value at index k in the original array with the
      // value at index i in the auxiliary array.
      animationStep = [k, auxiliaryArray[i], 4];
      animations.push(animationStep); // push to change the height
      mainArray[k++] = auxiliaryArray[i++];
    } else {
      animationStep = [k, auxiliaryArray[j], 4];
      animations.push(animationStep);
      mainArray[k++] = auxiliaryArray[j++];
    }
  }
  while (i <= middleIdx) {
    let animationStep = [i, i, 2];
    animations.push(animationStep);
    animationStep = [i, i, 3];
    animations.push(animationStep);
    animationStep = [k, auxiliaryArray[i], 4];
      animations.push(animationStep);
    mainArray[k++] = auxiliaryArray[i++];
  }
  while (j <= endIdx) {
    let animationStep = [j, j, 2];
    animations.push(animationStep); 
    animationStep = [j, j, 3];
    animations.push(animationStep);
    animationStep = [k, auxiliaryArray[j], 4];
      animations.push(animationStep);
    mainArray[k++] = auxiliaryArray[j++];
  }
}
