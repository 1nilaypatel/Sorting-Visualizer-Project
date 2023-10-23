export function getBubbleSortAnimations(array) {
    //Setting Time complexities
    document.getElementById("Time_Worst").innerText="O(N^2)";
    document.getElementById("Time_Average").innerText="Θ(N^2)";
    document.getElementById("Time_Best").innerText="Ω(N)";

    //Setting Space complexity
    document.getElementById("Space_Worst").innerText="O(1)";
    
    const animations = [];
    if (array.length <= 1) return array;
    bubbleSort(array, 0, array.length - 1, animations);
    for(var i = 0; i < array.length; i++){
        let animationStep = [i, i, 5];
        animations.push(animationStep);
    }
    return animations;
}

function swap(mainArray, i, j, animations){
    let animationStep;
    animationStep = [i, i, 2];
    animations.push(animationStep);
    animationStep = [j, j, 2];
    animations.push(animationStep);

    var temp = mainArray[i];
    mainArray[i] = mainArray[j];
    mainArray[j] = temp;

    animationStep = [i, i, 2];
    animations.push(animationStep);
    animationStep = [j, j, 2];
    animations.push(animationStep);
    animationStep = [i, mainArray[i], 4];
    animations.push(animationStep);
    animationStep = [j, mainArray[j], 4];
    animations.push(animationStep);
}

function bubbleSort(mainArray, startIdx, endIdx, animations) {
    let animationStep;
    for (let i = startIdx; i <= endIdx; i++){
        let j;
        for(j = 0; j <= endIdx - i - 1; j++){
            animationStep = [j, j, 1];
            animations.push(animationStep);
            if(mainArray[j] > mainArray[j + 1]){
                swap(mainArray, j, j + 1, animations);
            }
            animationStep = [j, j, 5];
            animations.push(animationStep);
        }
        animationStep = [j, j, 3];
        animations.push(animationStep);
    }
    animationStep = [0, 0, 3];
    animations.push(animationStep);
}