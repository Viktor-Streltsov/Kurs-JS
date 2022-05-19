class Valid2 extends Valid{
    constructor(email, password, isValid, emailError, passwordError) {
        super(email, password, isValid);
        this.emailError = '';
        this.passwordError = '';
    }       
    validade() {
        let valid = super.validade();
        if (this.password == '' && this.email == '' && valid == false) {
            this.emailError = 'email empty';
            this.passwordError = 'min length 6';
            return this.isValid;
        }else if(this.email == '' && valid == true) {
            this.emailError = 'email empty';
            return this.isValid;
        }else if (this.password == '' || this.password.length < 6 && valid == false) {
            this.passwordError = 'min length 6';
            return this.isValid;
        }else {
            return true;
        };
    }
}