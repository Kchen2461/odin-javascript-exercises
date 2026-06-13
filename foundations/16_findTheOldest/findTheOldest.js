const findTheOldest = function(people) {

    if (people.length == 0) {
        return 0;
    }

    let oldest_person = people[0];
    
    people.reduce((oldest_age, person) => {

        let age = 0;

        // If the person has not died yet, use today's date to calculate their age
        if (!("yearOfDeath" in person)) {
            let curr_date = new Date();
            age = curr_date.getFullYear() - person["yearOfBirth"];
        } else {
            age = person["yearOfDeath"] - person["yearOfBirth"];
        }

        if (age > oldest_age) {
            oldest_person = person;
            return age;
        }
    }, 0);

    return oldest_person;
};

// Do not edit below this line
module.exports = findTheOldest;
