class Valid{
    constructor(email, password, isValid) {
        this.email = email;
        this.password = password;
        this.isValid = false;
    }
    validade() {
        if (this.password.length < 6) {
            return this.isValid;
        }else if (this.password.length > 6) {
            return true;
        };
    }
}