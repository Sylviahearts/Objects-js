// //question 1

function InstagramPost(HandleOfAuthor, content, ImageLink, NumOfViews, NumOfLikes) {
  this.HandleOfAuthor = HandleOfAuthor;
  this.content = content;
  this.ImageLink = ImageLink;
  this.NumOfViews = NumOfViews;
  this.NumOfLikes = NumOfLikes;
}

// //question 2
let InstagramPost2 = new InstagramPost("Sylviahearts", "casting my vote", "www.sylvia.com", 25, 50);
console.log(InstagramPost2);

let InstagramPost3 = new InstagramPost("Poshestjay", "2023 election vlog"," www.insta.com", 100, 350);
console.log(InstagramPost3);


// //question 3a
function CreatePerson(name, age, location) {
    return {
        name: name,
        age: age,
        location: location,
    };
  }
  
  const musa = CreatePerson("Musa", 19, "Lagos",);
  console.log(musa);


//   //question 3b
  function JambScores(eng, govt, lit,crk) {
    return {
        eng: eng,
        govt: govt,
        lit: lit,
        crk: crk,
    };
  }

  const MusaJambScore = JambScores(70, 31, 50, 76);
  console.log(MusaJambScore);


  musa.Scores = MusaJambScore
  console.log(musa)

//question 4
//WAYS OF CLONING AN OBJECT

//1. Object-assign metthod
//eg-
const Person1 ={
    name: "Sylvia",
    age: 24,
    location: "port-harcourt",
};
const Person2 = Object.assign({}, Person1);
Person2.name = "Sandra";
Person2.age = 20;
Person2.location = "lagos";

console.log(Person1);
console.log(Person2);

//2. Spread-syntax method
//eg-
const Person3 = { ...Person1 };
Person3.name = "Amaka";
Person3.location = "aba";

console.log(Person1);
console.log(Person3);

//2. JDON-parse method
//eg-
const Person4 = JSON.parse(JSON.stringify(Person1));
Person4.name = "Anita";
Person4.age = 27;

console.log(Person1);
console.log(Person4);



//question 5

const presidentialCandidates = {
    AAC: 'Omoyele Sowore',
    ACCORD: 'Christopher Imumolen',
    APC: 'Bola Ahmed Tinubu',
    LP: 'Peter Obi',
    NNPP: 'Rabiu Kwankwaso',
    PDP: 'Atiku Abubakar',
 }
 for (const value in presidentialCandidates) {
   console.log(presidentialCandidates[value] + 'is the presidential candidate of ' + value)   
   
  }
 