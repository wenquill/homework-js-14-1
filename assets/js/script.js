//1.1-----------------------------------------------------
function printNumbers(from, to, interval) {

    const intervalId = setInterval(() => {
      console.log(from);
      from++;
  
      if (from > to) {
        clearInterval(intervalId); 
      }
    }, interval);
  }

  printNumbers(1, 10, 1000);

//1.2-----------------------------------------------------
// function printNumbers(from, to, interval) {
//     if (from <= to) {
//       console.log(from);
//       from++; 

//       setTimeout(function () {
//         printNumbers(from, to, interval);
//       }, interval);
//     }
//   }

//   printNumbers(1, 10, 1000);