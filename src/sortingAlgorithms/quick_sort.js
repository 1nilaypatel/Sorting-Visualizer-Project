export function getQuickSortAnimations(array) {
    //Setting Time complexities
    document.getElementById("Time_Worst").innerText="O(N^2)";
    document.getElementById("Time_Average").innerText="Θ(N log N)";
    document.getElementById("Time_Best").innerText="Ω(N log N)";

    //Setting Space complexity
    document.getElementById("Space_Worst").innerText="O(log N)";

    const animations = [];
    if (array.length <= 1) return array;
    quickSort(array, 0, array.length - 1, animations);
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

function quickSort(mainArray, startIdx, endIdx, animations) {
    if (startIdx >= endIdx) return;

    var pivot_pos = quick_partition(mainArray, startIdx, endIdx, animations);
    quickSort(mainArray, startIdx, pivot_pos - 1, animations);
    quickSort(mainArray, pivot_pos + 1, endIdx, animations);
}

function quick_partition(mainArray, startIdx, endIdx, animations) {
    var i = startIdx + 1;
    var piv = mainArray[startIdx];
    let animationStep = [startIdx, startIdx, 1];
    animations.push(animationStep);
    for (var j = startIdx + 1; j <= endIdx; j++) {
        if (piv > mainArray[j]) {
            let animationStep = [j, j, 1];
            animations.push(animationStep); // color change
            swap(mainArray, i, j, animations);
            animationStep = [i, j, 5];
            animations.push(animationStep);
            animationStep = [i, j, 5];
            animations.push(animationStep);
            i++;
        }
    }

    swap(mainArray, startIdx, i - 1, animations);

    for (var t = startIdx; t <= i; t++) {
        animationStep = [t, t, 3]; // color change
        animations.push(animationStep);
    }

    return i - 1;
}