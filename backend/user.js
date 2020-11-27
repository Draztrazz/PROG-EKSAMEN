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

var peter = new User("Peter", "Dreyer", "Male", "Dreyer123", "elskerminhunde123", "Dreyer@gmail.com", [christian, oscar, laura], [], [oscar, laura])
var christian = new User("Christian", "Bredgaard", "Male", "Chrille321", "gnarlover666", "Chrille@gmail.com", [emilie], [peter], [emilie])
var oscar = new User("Oscar", "Pedersen", "Male", "Oscarraw", "oskay123", "Peder@hotmail.com", [peter], [christian], [peter])
var emilie = new User("Emilie", "Lindgren", "Female", "Emilie123", "321eilimE", "Emilie@gmail.com", [christian], [], [christian])
var laura = new User("Laura", "Laurasen", "Female", "Lauramus123", "Fido123", "Laurahund123@gmail.com", [peter], [], [laura])