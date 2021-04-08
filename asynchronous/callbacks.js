
// Documentation: http://callbackhell.com

function squareCallback(value, callback) {
    setTimeout(() => {
      callback(value, value * value);
    }, 0 | Math.random() * 1000);
  }

  // This is a Callback Hell
  squareCallback(0, (value, result) => {

    console.log("Start Callback");

    console.log(`Callback: ${value}, ${result}`);
    squareCallback(1, (value, result) => {
      console.log(`Callback: ${value}, ${result}`);
      squareCallback(2, (value, result) => {
        console.log(`Callback: ${value}, ${result}`);
        squareCallback(3, (value, result) => {
          console.log(`Callback: ${value}, ${result}`);
          squareCallback(4, (value, result) => {
            console.log(`Callback: ${value}, ${result}`);
            squareCallback(5, (value, result) => {
              console.log(`Callback: ${value}, ${result}`);

              console.log("End Callback 😈");

            });
          });
        });
      });
    });
  }); 
