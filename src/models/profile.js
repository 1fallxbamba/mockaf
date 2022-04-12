class Profile {
    constructor(id, fullName, username, age, gender, phone, email, address, picture) {
        this.id = id;
        this.fullName = fullName;
        this.username = username;
        this.age = age;
        this.gender = gender;
        this.phone = phone;
        this.email = email;
        this.address = address;
        this.picture = picture;
    }
}

module.exports = Profile;