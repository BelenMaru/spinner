
const character = ['\r|   ','\r/   ' , "\r-   ", "\r\\   ", '\r| ', '\r- ', '\r| ']
 
const spinner = function(character) {
  let delay = 0;
  for ( const array of character) {
    setTimeout(() => {
      process.stdout.write(array);
    }, delay);
    delay += 200;
  }

  };
  spinner(character);

