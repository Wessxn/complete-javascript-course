// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// // const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// // 1) Understanding the problem
// // - What is temp amplitude? AnserL differnce between highest and loewst temp
// // - How to compute max and min temperature?
// // - What's a sensor error? And what to do?

// // 2) Breaking up into sub-problems
// // - How to ignore errors?
// // - Find max value
// // - Find min value
// // - Subtract min from max and return it

// //Problem 2
// // Function should now receive two arrays of temperatures

// // 1) Understanding the problem
// // - With 2 arrays, should we imploment functionity twice? No, just merge two arrrays

// // 2) Break down
// //- Merge 2 arrays?
// /*
// const calcTempAmplitudebug = function (t1, t2) {
//   const temps = t1.concat(t2);
//   console.log(temps);

//   let max = temps[0];
//   let min = temps[0];

//   for (let index = 0; index < temps.length; index++) {
//     const curTemp = temps[index];
//     if (typeof curTemp !== 'number') continue;

//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min); 
//   return max - min;
// };
// const amplitude = calcTempAmplitudebug([3, 5, 1], [9, 0, 5]);
// console.log(amplitude);
// */

// const measureKelvin = function () {
//   const measurement = {
//     type: 'temp',
//     unit: 'celsius',
//     //C) Fix
//     // value: Number(prompt('Degrees celsius')),
//     value: 10,
//   };

//   //B) Find the bug
//   console.table(measurement);

//   // console.log(measurement.value);
//   // console.error(measurement.value);
//   // console.warn(measurement.value);

//   const kelvin = measurement.value + 273;
//   return kelvin;
// };
// // A) IDENTIFY
// console.log(measureKelvin());

// // Using a debugger
// const calcTempAmplitudebug = function (t1, t2) {
//   const temps = t1.concat(t2);
//   console.log(temps);

//   let max = temps[0];
//   let min = temps[0];

//   for (let index = 0; index < temps.length; index++) {
//     const curTemp = temps[index];
//     if (typeof curTemp !== 'number') continue;

//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };
// const amplitudebug = calcTempAmplitudebug([3, 5, 1], [9, 4, 5]);
// // A) Indentify
// console.log(amplitudebug);

// 1) Understanding the problem 
// Should the arrays be concat?
// How do I display the degrees symbol 
// 

// 2) Break down 
// Should the arrays be concat?
// How do I display the degrees symbol
// Do I need to 

const printForecast = function(arr){
  console.log();
}