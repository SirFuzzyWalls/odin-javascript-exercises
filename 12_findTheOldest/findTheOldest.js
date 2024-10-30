const findTheOldest = function(arr) {
    const sortedByAge = arr.slice(0).sort((a,b) => {
        const currentYear = new Date().getFullYear();
        const ageA = (a.yearOfDeath || currentYear) - a.yearOfBirth;
        const ageB = (b.yearOfDeath || currentYear) - b.yearOfBirth;
        return ageB - ageA;
    })
    return sortedByAge[0];
};

// Do not edit below this line
module.exports = findTheOldest;
