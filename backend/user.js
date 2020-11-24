class User{
    constructor(firstName, lastName, gender, userName, password, email, liked, disliked, matched){
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.userName = userName;
        this.password = password;
        this.email = email;
        this.liked = liked;
        this.disliked = disliked;
        this.matched = matched;
    }}

var peter = new User("Peter", "Dreyer", "Male", "Dreyer123", "elskerminhunde123", "Dreyer@gmail.com", [christian, oscar], [], [])
var christian = new User("Christian", "Bredgaard", "Male", "Chrille321", "gnarlover666", "Chrille@gmail.com", [], [peter], [])
var oscar = new User("Oscar", "Pedersen", "Male", "Oscarraw", "oskay123", "Peder@hotmail.com", [peter], [christian], [])