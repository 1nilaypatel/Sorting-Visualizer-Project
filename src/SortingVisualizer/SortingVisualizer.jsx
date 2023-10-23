import React from 'react';
import { getMergeSortAnimations } from '../sortingAlgorithms/merge_sort.js';
import { getQuickSortAnimations } from '../sortingAlgorithms/quick_sort.js';
import { getHeapSortAnimations } from '../sortingAlgorithms/heap_sort.js';
import { getBubbleSortAnimations } from '../sortingAlgorithms/bubble_sort.js';
import './SortingVisualizer.css';

const DEFAULT_COLOR = '#3498db';
const PARTITION_COLOR = '#9b59b6';
const COMPARE_COLOR = '#e74c3c';
const FINAL_COLOR = '#2ecc71';

export default class SortingVisualizer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arraySize: 80,
      animationSpeed: 500,
      selectedSpeed: 'medium',
      array: [],
    };
  }

  componentDidMount() {
    this.resetArray();
  }

  resetArray() {
    const array = [];
    for (let i = 0; i < this.state.arraySize; i++) {
      const min = 5;
      const max = 385;
      array.push(Math.floor(Math.random() * (max - min + 1) + min));
    }
    this.setState({ array });
  }

  async mergeSort() {
    const animations = getMergeSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const [a, b, c] = animations[i];
      if (c === 1) {
        setTimeout(() => {
          const barOneStyle = arrayBars[a].style;
          const barTwoStyle = arrayBars[b].style;
          const color = PARTITION_COLOR;
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * this.state.animationSpeed);
      } else if (c === 4) {
        setTimeout(() => {
          const barOneStyle = arrayBars[a].style;
          barOneStyle.height = `${b}px`;
        }, i * this.state.animationSpeed);
      }else if (c === 5) {
        setTimeout(() => {
          const barOneStyle = arrayBars[a].style;
          const barTwoStyle = arrayBars[b].style;
          const color = DEFAULT_COLOR;
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * this.state.animationSpeed); 
      }else {
        setTimeout(() => {
          const barOneStyle = arrayBars[a].style;
          const barTwoStyle = arrayBars[b].style;
          const color = c === 2 ? COMPARE_COLOR : FINAL_COLOR;
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * this.state.animationSpeed);
      }
    }
  }

  async quickSort() {
    const animations = getQuickSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const [a, b, c] = animations[i];
      if (c === 1) {
        setTimeout(() => {
          const barOneStyle = arrayBars[a].style;
          const barTwoStyle = arrayBars[b].style;
          const color = PARTITION_COLOR;
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * this.state.animationSpeed);
      } else if (c === 4) {
        setTimeout(() => {
          const barOneStyle = arrayBars[a].style;
          barOneStyle.height = `${b}px`;
        }, i * this.state.animationSpeed);
      }else if (c === 5) {
        setTimeout(() => {
          const barOneStyle = arrayBars[a].style;
          const barTwoStyle = arrayBars[b].style;
          const color = DEFAULT_COLOR;
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * this.state.animationSpeed); 
      }else {
        setTimeout(() => {
          const barOneStyle = arrayBars[a].style;
          const barTwoStyle = arrayBars[b].style;
          const color = c === 2 ? COMPARE_COLOR : FINAL_COLOR;
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * this.state.animationSpeed);
      }
    }
  }

  async heapSort() {
    const animations = getHeapSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const [a, b, c] = animations[i];
      if (c === 1) {
        setTimeout(() => {
          const barOneStyle = arrayBars[a].style;
          const barTwoStyle = arrayBars[b].style;
          const color = PARTITION_COLOR;
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * this.state.animationSpeed);
      } else if (c === 4) {
        setTimeout(() => {
          const barOneStyle = arrayBars[a].style;
          barOneStyle.height = `${b}px`;
        }, i * this.state.animationSpeed);
      }else if (c === 5) {
        setTimeout(() => {
          const barOneStyle = arrayBars[a].style;
          const barTwoStyle = arrayBars[b].style;
          const color = DEFAULT_COLOR;
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * this.state.animationSpeed); 
      }else {
        setTimeout(() => {
          const barOneStyle = arrayBars[a].style;
          const barTwoStyle = arrayBars[b].style;
          const color = c === 2 ? COMPARE_COLOR : FINAL_COLOR;
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * this.state.animationSpeed);
      }
    }
  }

  async bubbleSort() {
    const animations = getBubbleSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const [a, b, c] = animations[i];
      if (c === 1) {
        setTimeout(() => {
          const barOneStyle = arrayBars[a].style;
          const barTwoStyle = arrayBars[b].style;
          const color = PARTITION_COLOR;
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * this.state.animationSpeed);
      } else if (c === 4) {
        setTimeout(() => {
          const barOneStyle = arrayBars[a].style;
          barOneStyle.height = `${b}px`;
        }, i * this.state.animationSpeed);
      }else if (c === 5) {
        setTimeout(() => {
          const barOneStyle = arrayBars[a].style;
          const barTwoStyle = arrayBars[b].style;
          const color = DEFAULT_COLOR;
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * this.state.animationSpeed); 
      }else {
        setTimeout(() => {
          const barOneStyle = arrayBars[a].style;
          const barTwoStyle = arrayBars[b].style;
          const color = c === 2 ? COMPARE_COLOR : FINAL_COLOR;
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * this.state.animationSpeed);
      }
    }
  }

  handleArraySizeChange = (event) => {
    const newSize = parseInt(event.target.value);
    this.setState({ arraySize: newSize }, () => this.resetArray());
  };

  handleSpeedButtonClick = (speed) => {
    this.setState({ selectedSpeed: speed, animationSpeed: this.getSpeedValue(speed) });
  };

  getSpeedValue = (speed) => {
    switch (speed) {
      case 'slow':
        return 600;
      case 'medium':
        return 200;
      case 'fast':
        return 3;
      default:
        return 200;
    }
  };

  render() {
    const { array } = this.state;

    return (
      <div className="sorting-visualizer">
        <div className="toolbar">
          <div className="complexity-info">
            <div className="complexity-column">
              <div className="time-complexity">
                  <h2>TIME COMPLEXITY</h2>
                <div className="complexity-cases">
                  <div>
                    <p class="Sub_Heading">Worst case:</p>
                    <p id="Time_Worst"></p>
                  </div>
                  <div>
                    <p class="Sub_Heading">Average case:</p>
                    <p id="Time_Average"></p>
                  </div>
                  <div>
                    <p class="Sub_Heading">Best case:</p>
                    <p id="Time_Best"></p>
                  </div>
                </div>
              </div>
              <div className="space-complexity">
                <h2>SPACE COMPLEXITY</h2>
              <div className="complexity-cases">
                <div>
                  <p class="Sub_Heading">Worst case:</p>
                  <p id="Space_Worst"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
          <div className="button-container">
            <button className="generate-array-button" onClick={() => this.resetArray()}>
              Generate New Array
            </button>
            <button className="sorting-button" onClick={() => this.mergeSort()}>
              Merge Sort
            </button>
            <button className="sorting-button" onClick={() => this.quickSort()}>
              Quick Sort
            </button>
            <button className="sorting-button" onClick={() => this.heapSort()}>
              Heap Sort
            </button>
            <button className="sorting-button" onClick={() => this.bubbleSort()}>
              Bubble Sort
            </button>
          </div>
          <div className="array-inputs">
            <div className="label">Size of the array</div>
            <div className="slider-container">
              <input
                id="a_size"
                type="range"
                min={10}
                max={115}
                step={1}
                value={this.state.arraySize}
                onChange={this.handleArraySizeChange}
              />
            </div>
            <div className="label">Sorting Speed</div>
            <div className="speed-buttons">
              <button
                className={this.state.selectedSpeed === 'slow' ? 'selected' : ''}
                onClick={() => this.handleSpeedButtonClick('slow')}
              >
                Slow
              </button>
              <button
                className={this.state.selectedSpeed === 'medium' ? 'selected' : ''}
                onClick={() => this.handleSpeedButtonClick('medium')}
              >
                Medium
              </button>
              <button
                className={this.state.selectedSpeed === 'fast' ? 'selected' : ''}
                onClick={() => this.handleSpeedButtonClick('fast')}
              >
                Fast
              </button>
            </div>
          </div>
        </div>
        <div className="array-container">
          {array.map((value, idx) => (
            <div
              className="array-bar"
              key={idx}
              style={{ height: `${value}px` }}
            ></div>
          ))}
        </div>
      </div>
    );
  }
}








// import React from 'react';
// import {getMergeSortAnimations} from '../sortingAlgorithms/merge_sort.js';
// import './SortingVisualizer.css';

// const PARTITION_COLOR = '#9b59b6';
// const COMPARE_COLOR = '#e74c3c';
// const FINAL_COLOR = '#2ecc71';


// // The code below is the beginning of a React component called SortingVisualizer. This component is intended to create a visual representation of sorting algorithms using bars that represent values to be sorted.

// // export default class SortingVisualizer extends React.Component: This line exports the SortingVisualizer class as the default export from the module. The class extends React.Component, meaning it's a React component that can be used in your application.
// export default class SortingVisualizer extends React.Component {
//   // constructor(props): The constructor is a special method that runs when an instance of the class is created. It initializes the state and other properties of the component.
//   constructor(props) {
//     // super(props): This line calls the constructor of the parent class (React.Component). It's necessary to call this when you're extending a class in JavaScript.
//     super(props);
//     // this.state = { array: [] };: Here, the initial state of the component is defined. The state is an object that holds data that can change over time and affect the rendering of the component. In this case, the state has a property called array, which will store the values to be sorted.
//     this.state = {
//       arraySize: 80,      // Initial array size
//       animationSpeed: 500,  // Initial animation speed
//       selectedSpeed: 'medium',
//       array: [],
//       isSorting: false,
//     };
//   }

//   // componentDidMount(): This is a lifecycle method in React that runs after the component is inserted into the DOM. It's a good place to perform actions that need to happen once the component is ready. In this case, it generates a random array using the generateRandomArray method and updates the component's state with the generated array.
//   componentDidMount() {
//     this.resetArray();
//   }
  
//   resetArray() {
//     const array = [];
//     for (let i = 0; i < this.state.arraySize; i++) {
//       const min = 10;
//       const max = 545;
//       array.push(Math.floor(Math.random() * (max - min + 1) + min));
//     }
//     this.setState({array});
//   }


//   async mergeSort() {
//     this.setState({ isSorting: true }); // Disable buttons and slider
//   //     Inside your sorting methods, update the array state after each comparison and swap, so that the changes are reflected in the visualization steps of the Merge Sort algorithm
//     const animations = getMergeSortAnimations(this.state.array);
//     for (let i = 0; i < animations.length; i++) {
//       // select and store a collection of HTML elements with the class name 'array-bar' in the arrayBars variable DOM(documet object models)
//       const arrayBars = document.getElementsByClassName('array-bar');
//       const [a, b, c] = animations[i];
//       if(c == 1){ // when we partion it 
//         setTimeout(() => {
//           const barOneStyle = arrayBars[a].style;
//           const barTwoStyle = arrayBars[b].style;
//           const color = PARTITION_COLOR;
//           barOneStyle.backgroundColor = color;
//           barTwoStyle.backgroundColor = color;
//         }, i * this.state.animationSpeed); // i is necessary to introduce variability 
//       }else if(c == 4){ // when we update the height
//         setTimeout(() => {
//           const barOneStyle = arrayBars[a].style;
//           barOneStyle.height = `${b}px`;
//         }, i * this.state.animationSpeed);
//       }else{ // when we compare indices and put correct at it's place
//         setTimeout(() => {
//           const barOneStyle = arrayBars[a].style;
//           const barTwoStyle = arrayBars[b].style;
//           const color = c === 2 ? COMPARE_COLOR : FINAL_COLOR;
//           barOneStyle.backgroundColor = color;
//           barTwoStyle.backgroundColor = color;
//         }, i * this.state.animationSpeed);
//       }
//     }
//     this.setState({ isSorting: false }); // Enable buttons and slider
//   }

//   quickSort() {
//     // We leave it as an exercise to the viewer of this code to implement this method.
//   }

//   heapSort() {
//     // We leave it as an exercise to the viewer of this code to implement this method.
//   }

//   bubbleSort() {
//     // We leave it as an exercise to the viewer of this code to implement this method.
//   }


//   // an event handler, it takes an event object as a parameter. This object contains information about the event that occurred, including the new value of the slider.
//   handleArraySizeChange = (event) => {
//     // extract the new size value from the slider using event.target.value, value is string so use parseInt to convert it into an integer
//     const newSize = parseInt(event.target.value); 
//     // after setting the new size we do reset array to make a new array with updated size
//     this.setState({ arraySize: newSize }, () => this.resetArray());
//   };

//   handleSpeedButtonClick = (speed) => {
//     this.setState({ selectedSpeed: speed, animationSpeed: this.getSpeedValue(speed) });
//   };

//   // Map speed names to values
//   getSpeedValue = (speed) => {
//     switch (speed) {
//       case 'slow':
//         return 600;
//       case 'medium':
//         return 100;
//       case 'fast':
//         return 1;
//       default:
//         return 100; // Default to 'medium' speed
//     }
//   };


  
//   // Rendering the Array: This is a method in a React component class that returns the JSX (JavaScript XML) to be rendered in the browser.
//   render() {
//     // This destructures the array property from the component's state. It assumes that there's a state property named array that holds the data to be visualized.
//     const {array} = this.state;

//     return (
//       <div className="sorting-visualizer">
//         <div className="toolbar">
//           <div className="button-container">
//             <button className="generate-array-button" onClick={() => this.resetArray()} disabled={this.state.isSorting}>
//               Generate New Array
//             </button>
//             <button className="sorting-button" onClick={() => this.mergeSort()} disabled={this.state.isSorting}>
//               Merge Sort
//             </button>
//             <button className="sorting-button" onClick={() => this.quickSort()} disabled={this.state.isSorting}>
//               Quick Sort
//             </button>
//             <button className="sorting-button" onClick={() => this.heapSort()} disabled={this.state.isSorting}>
//               Heap Sort
//             </button>
//             <button className="sorting-button" onClick={() => this.bubbleSort()} disabled={this.state.isSorting}>
//               Bubble Sort
//             </button>
//           </div>
//           <div className="array-inputs">
//             <div className="label">Size of the array</div>
//             <div className="slider-container">
//               <input
//                 id="a_size"
//                 type="range"
//                 min={10}
//                 max={115}
//                 step={1}
//                 value={this.state.arraySize}
//                 onChange={this.handleArraySizeChange}
//                 disabled={this.state.isSorting} // Disable when sorting
//               />
//             </div>
//             <div className="label">Sorting Speed</div>
//             <div className="speed-buttons">
//               <button
//                 className={this.state.selectedSpeed === 'slow' ? 'selected' : ''}
//                 onClick={() => this.handleSpeedButtonClick('slow')}
//               >
//                 Slow
//               </button>
//               <button
//                 className={this.state.selectedSpeed === 'medium' ? 'selected' : ''}
//                 onClick={() => this.handleSpeedButtonClick('medium')}
//               >
//                 Medium
//               </button>
//               <button
//                 className={this.state.selectedSpeed === 'fast' ? 'selected' : ''}
//                 onClick={() => this.handleSpeedButtonClick('fast')}
//               >
//                 Fast
//               </button>
//             </div>
//           </div>
//         </div>
//         <div className="array-container">
//           {array.map((value, idx) => (
//             <div
//               className="array-bar"
//               key={idx}
//               style={{ height: `${value}px` }}
//             ></div>
//           ))}
//         </div>
//       </div>
//     );
//   }
// }






























//   // NOTE: This method will only work if your sorting algorithms actually return
//   // the sorted arrays; if they return the animations (as they currently do), then
//   // this method will be broken.
//   testSortingAlgorithms() {
//     for (let i = 0; i < 100; i++) {
//       const array = [];
//       const length = randomIntFromInterval(1, 1000);
//       for (let i = 0; i < length; i++) {
//         array.push(randomIntFromInterval(-1000, 1000));
//       }

// // array: This refers to the array of values that you have in your React component's state. It's the array you're intending to sort.

// // .slice(): The slice() method is used to create a shallow copy of the original array. This is done to ensure that the original array remains unchanged, as the subsequent sort() operation modifies the array in place.

// // .sort((a, b) => a - b): This is the sorting operation itself. The sort() method sorts the elements of the array in place and returns the sorted array. The comparison function (a, b) => a - b is used as an argument to the sort() method. This function determines the sorting order by subtracting b from a.

// // If the result of a - b is negative, a will be placed before b in the sorted array.
// // If the result is positive, b will be placed before a in the sorted array.
// // If the result is zero, the order of a and b remains unchanged.
//       const javaScriptSortedArray = array.slice().sort((a, b) => a - b);

//       const mergeSortedArray = getMergeSortAnimations(array.slice());
//       console.log(arraysAreEqual(javaScriptSortedArray, mergeSortedArray));
//     }
//   }

// function arraysAreEqual(arrayOne, arrayTwo) {
  //   if (arrayOne.length !== arrayTwo.length) return false;
  //   for (let i = 0; i < arrayOne.length; i++) {
    //     if (arrayOne[i] !== arrayTwo[i]) {
      //       return false;
      //     }
      //   }
      //   return true;
      // }
      