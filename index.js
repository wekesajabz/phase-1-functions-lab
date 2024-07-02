// Code your solution in this file!
// Define the headquarters location
const headquarters = 42;

// Function to calculate distance in blocks from HQ
function distanceFromHqInBlocks(someValue) {
    return Math.abs(someValue - headquarters);
}

// Function to calculate distance in feet from HQ
function distanceFromHqInFeet(someValue) {
    return distanceFromHqInBlocks(someValue) * 264; // 1 block = 264 feet
}

// Function to calculate distance travelled in feet
function distanceTravelledInFeet(start, destination) {
    return Math.abs(destination - start) * 264;
}

// Function to calculate fare price
function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    
    if (distance <= 400) {
        return 0; // free sample
    } else if (distance > 400 && distance <= 2000) {
        return (distance - 400) * 0.02; // 2 cents per foot over 400 feet
    } else if (distance > 2000 && distance <= 2500) {
        return 25; // flat fare for distance between 2000 and 2500 feet
    } else {
        return 'cannot travel that far'; // no rides over 2500 feet
    }
}
