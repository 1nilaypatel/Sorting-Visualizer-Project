export function getHeapSortAnimations(array) {
    //Setting Time complexities
    document.getElementById("Time_Worst").innerText="O(N log N)";
    document.getElementById("Time_Average").innerText="Θ(N log N)";
    document.getElementById("Time_Best").innerText="Ω(N log N)";

    //Setting Space complexity
    document.getElementById("Space_Worst").innerText="O(1)";
    
    const animations = [];
    if (array.length <= 1) return array;
    heapSort(array, array.length, animations);
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
    animationStep = [i, i, 5];
    animations.push(animationStep);
    animationStep = [j, j, 5];
    animations.push(animationStep);
}

function max_heapify(mainArray, size, i, animations){
    let animationStep;
    var largest = i;
    var l = (2 * i) + 1;
    var r = (2 * i) + 2;

    if(l < size && mainArray[l] > mainArray[largest]){
        if(largest != i){
            animationStep = [largest, largest, 5];
            animations.push(animationStep);
        }
        largest = l;
        animationStep = [largest, largest, 2];
        animations.push(animationStep);
    }

    if(r < size && mainArray[r] > mainArray[largest]){
        if(largest != i){
            animationStep = [largest, largest, 5];
            animations.push(animationStep);
        }
        largest = r;
        animationStep = [largest, largest, 2];
        animations.push(animationStep);
    }

    if(largest != i){
        swap(mainArray, i, largest, animations);
        max_heapify(mainArray, size, largest, animations);
    }
}

function heapSort(mainArray, n, animations) {
    let animationStep;
    // build heap
    for(var i = Math.floor(n / 2) - 1; i >= 0; i--){
        max_heapify(mainArray, n, i, animations);
    }
    // send the max element to the last position and apply heapify on size - 1 array
    for(var i = n - 1; i > 0; i--){
        swap(mainArray, 0, i, animations);
        animationStep = [i, i, 3];
        animations.push(animationStep);
        animationStep = [i, i, 1];
        animations.push(animationStep);

        max_heapify(mainArray, i, 0, animations);

        animationStep = [i, i, 5];
        animations.push(animationStep);
        animationStep = [i, i, 3];
        animations.push(animationStep);
    }
    animationStep = [i, i, 3];
    animations.push(animationStep);
}















// Complexity Analysis of Heap Sort
// Time Complexity: O(N log N)
// Auxiliary Space: O(log n), due to the recursive call stack. However, auxiliary space can be O(1) for iterative implementation.

// Important points about Heap Sort:
// Heap sort is an in-place algorithm. 
// Its typical implementation is not stable but can be made stable (See this)
// Typically 2-3 times slower than well-implemented QuickSort.  The reason for slowness is a lack of locality of reference.
// Advantages of Heap Sort:
// Efficient Time Complexity: Heap Sort has a time complexity of O(n log n) in all cases. This makes it efficient for sorting large datasets. The log n factor comes from the height of the binary heap, and it ensures that the algorithm maintains good performance even with a large number of elements.
// Memory Usage – Memory usage can be minimal because apart from what is necessary to hold the initial list of items to be sorted, it needs no additional memory space to work
// Simplicity –  It is simpler to understand than other equally efficient sorting algorithms because it does not use advanced computer science concepts such as recursion.
// Disadvantages of Heap Sort:
// Costly: Heap sort is costly.
// Unstable: Heap sort is unstable. It might rearrange the relative order.
// Efficient: Heap Sort is not very efficient when working with highly complex data. 
// Frequently Asked Questions Related to Heap Sort
// Q1. What are the two phases of Heap Sort?

// The heap sort algorithm consists of two phases. In the first phase, the array is converted into a max heap. And in the second phase, the highest element is removed (i.e., the one at the tree root) and the remaining elements are used to create a new max heap.

// Q2. Why Heap Sort is not stable?

// The heap sort algorithm is not a stable algorithm. This algorithm is not stable because the operations that are performed in a heap can change the relative ordering of the equivalent keys.

// Q3. Is Heap Sort an example of the “Divide and Conquer” algorithm?

// Heap sort is NOT at all a Divide and Conquer algorithm. It uses a heap data structure to efficiently sort its element and not a “divide and conquer approach” to sort the elements.

// Q4. Which sorting algorithm is better – Heap sort or Merge Sort?

// The answer lies in the comparison of their time complexity and space requirements. The Merge sort is slightly faster than the Heap sort. But on the other hand merge sort takes extra memory. Depending on the requirement, one should choose which one to use.

// Q5. Why is Heap sort better than Selection sort?

// Heap sort is similar to selection sort, but with a better way to get the maximum element. It takes advantage of the heap data structure to get the maximum element in constant time 

