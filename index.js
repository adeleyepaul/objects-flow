// create an InstagramPost() constructor function 
    function InstagramPost(authorHandle, postContent, imageLink, viewsCount, likesCount) {
        this.authorHandle = authorHandle;
        this.postContent = postContent;
        this.imageLink = imageLink;
        this.viewsCount = viewsCount;
        this.likesCount = likesCount;
    }

// Create 2 Instagram post objects from the constructor function you created above
    const post1 = new InstagramPost('johndoe', 'Check out this amazing sunset!', 'https://example.com/sunset.jpg', 1000, 50);
    const post2 = new InstagramPost('janedoe', 'I believe I saw a shooting star!', 'https://example.com/shootingstar.jpg', 500, 25);

// Using the factory method, implement a createPerson() factory function that takes name, age and location as arguments. Afterwards, create an object representing Musa from the factory function. 
    function createPerson(name, age, location) {
        return {
        name,
        age,
        location,
        };
    }

// Also, implement a factory function createJambScores() that takes eng, govt, lit, crk as arguments. Then create an object representing Muse’s JAMB scores. Add the object as a property to Musa object you created above in (a) above
function createJambScores(eng, govt, lit, crk) {
    return {
      ENG: eng,
      GOVT: govt,
      LIT: lit,
      CRK: crk,
    };
  }
 const musaJambScores = createJambScores(70, 85, 82, 94);

//  What are the different ways you can clone an object? Give examples for each of them.
1. Object.assign() method
const originalObj = {a: 1, b: 2};
const clonedObj = Object.assign({}, originalObj);
console.log(clonedObj); // Output: {a: 1, b: 2}

2. Spread operator
const originalObj = {a: 1, b: 2};
const clonedObj = {...originalObj};
console.log(clonedObj); // Output: {a: 1, b: 2}

3. JSON.parse() and JSON.stringify() methods
const originalObj = {a: 1, b: 2};
const clonedObj = JSON.parse(JSON.stringify(originalObj));
console.log(clonedObj); // Output: {a: 1, b: 2}

4. Object.create() method
const originalObj = {a: 1, b: 2};
const clonedObj = Object.create(originalObj);
console.log(clonedObj); // Output: {}

// Using any of the enumeration methods
for (const party in presidentialCandidates) {
    const candidate = presidentialCandidates[party];
    console.log(`${candidate} is the presidential candidate of ${party}`);
  }
  
