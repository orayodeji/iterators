//PART 1

var users = [
  {
    username: 'larry',
    email: 'larry@foo.com',
    yearsExperience: 22.1,
    favoriteLanguages: ['Perl', 'Java', 'C++'],
    favoriteEditor: 'Vim',
    hobbies: ['Fishing', 'Sailing', 'Hiking'],
    hometown: {
      city: 'San Francisco',
      state: 'CA'
    }
  },
  {
    username: 'jane',
    email: 'jane@test.com',
    yearsExperience: 33.9,
    favoriteLanguages: ['Haskell', 'Clojure', 'PHP'],
    favoriteEditor: 'Emacs',
    hobbies: ['Swimming', 'Biking', 'Hiking'],
    hometown: {
      city: 'New York',
      state: 'NY'
    }
  },
  {
    username: 'sam',
    email: 'sam@test.com',
    yearsExperience: 8.2,
    favoriteLanguages: ['JavaScript', 'Ruby', 'Python', 'Go'],
    favoriteEditor: 'Atom',
    hobbies: ['Golf', 'Cooking', 'Archery'],
    hometown: {
      city: 'Fargo',
      state: 'SD'
    }
  },
  {
    username: 'anne',
    email: 'anne@test.com',
    yearsExperience: 4,
    favoriteLanguages: ['C#', 'C++', 'F#'],
    favoriteEditor: 'Visual Studio Code',
    hobbies: ['Tennis', 'Biking', 'Archery'],
    hometown: {
      city: 'Albany',
      state: 'NY'
    }
  },
  {
    username: 'david',
    email: 'david@test.com',
    yearsExperience: 12.5,
    favoriteLanguages: ['JavaScript', 'C#', 'Swift'],
    favoriteEditor: 'VS Code',
    hobbies: ['Volunteering', 'Biking', 'Coding'],
    hometown: {
      city: 'Los Angeles',
      state: 'CA'
    }
  }
];

//solutions
//part 1
function printEmails(){
  users.forEach(function(val){
  return console.log(val["email"])})};

  function printHobbies(){
    users.map(function(val){
    return console.log(val["hobbies"])})};
    

    function findHometownBystate(stat){
      return users.find(function(val){
      return val["hometown"].state === stat})};


      function allLanguages(){
        var empty = [];
        var newArr = []
        users.map(function(val){
        empty.push(val["favoriteLanguages"])})
        return newArr = empty.flat(5);};

        function hasFavoriteEditor(value){
          return users.some(function(val){
         return val["favoriteEditor"] === value})};

         function findByUsername(str){
          return users.filter(function(val){
          return val["username"] === str})};
          

//Part 2



function removeVowels(str){
  var emptyArr = [];
  var hum = str.split("");
  hum.map(function(val){
  if(val != "a" &&  val != "e" && val != "i" && val != "o" && val != "u" ){
  emptyArr.push(val)};})
  return emptyArr;};

  function countVowel(str) {
    var strArr = str.toLowerCase().split('');
    var obj = {};
    strArr.forEach(function(val) {
      if ('aeiou'.indexOf(val) !== -1) {
        obj[val] = (obj[val] || 0 ) + 1;
      }
    });
    return obj;
  }




    