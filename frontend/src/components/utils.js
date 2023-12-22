// Function to calculate the average of an array of numbers
function calculateAverage(array) {
    if (!array || array.length === 0) {
      return 0; // Return 0 if the array is empty or undefined
    }
  
    const sum = array.reduce((acc, rating) => acc + rating, 0);
    const average = sum / array.length;
    return average;
  }
  
  // Export the function to make it accessible in other files
  module.exports = { calculateAverage };