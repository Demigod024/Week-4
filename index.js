class Person {
    constructor(email, name, age) {
        this.email = email;
        this.name = name;
        this.age = age;
        this.score = 0;

    }
    // these are methods or actions a user can perform
    login() {
        console.log(this.email, `just logged in`);
        return this;
    }

    logout() {
        console.log(this.email, `just logged out`);
        return this;
    }
    updateScore() {
        this.score++;
        console.log(this.email, `your score is`);
        return this;
    }
    passedEntranceExam() {
        console.log(this.name, 'user passed the entrance exam')
    }
}
// school class inheriting some properties from person object, but still adding some extra methods or action
class School extends Person{
    deleteUser(user) {
// the user in here is passed as a parameter, becos its from the array we created to store users to be deleted
// updating the users
        users = users.filter(u => {
            return u.email != user.email;
// if userOne email == admin email, keep, Else if userTwo email is != admin email, delete UserTwo
        })
    }
}

//creating  new constructors [string objects{new persons}]
// this simply creates new user objects, instead of creating and repeating the same person object code
var userOne = new Person('boys@google.com', 'boys');
var userTwo = new Person('girls@yahoo.com', 'girls');
var userThree = new Person("you@google.com", 'you');
// created a new admin,that takes property from the school class, and the school class inherits property from the Peron class
var admin = new School('chuks@google.com', 'humans');


// to hold the data to be removed
// this array is to store the users so it can be filtered through when we want to delete a user 
// users is the nameof the array
var users = [userOne, userTwo,userThree, admin]

//here we call the user we want to delete
admin.deleteUser(userTwo);
userOne.login().updateScore();
console.log(users);