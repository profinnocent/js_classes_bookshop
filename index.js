import User from './models/User.js';

const okay = new User("Okay", "Obi", "okayobi@gmail.com","Okay@12345678"," ")
console.log(okay._firstname)
console.log(okay.getFirstname)

const prof = new User("Prof", "Obi", "prof@gmail.com","Prof@12345678"," ")
console.log(prof.loginUser())
