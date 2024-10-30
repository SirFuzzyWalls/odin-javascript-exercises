const findTheOldest = function(arr) {
    const sortedByAge = arr.slice(0).sort((a,b) => {
        return (b.yearOfDeath - b.yearOfBirth) - (a.yearOfDeath - a.yearOfBirth);
    })
    return sortedByAge[0];
};

// Do not edit below this line
module.exports = findTheOldest;
