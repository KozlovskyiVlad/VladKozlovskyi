const Validator = {
    validateEmail: function (string) {
        const rexEmail = /^\w[a-zA-Z0-9.+-]{1,19}@[\d\w\^\$\.\|\?\*\+\!\%\&\=\/\_\-]{1,15}\.\w{1,5}$/;
        return rexEmail.test(string);
    },
    validatePhone: function (string) {
        const rexPhone = /^(\+?([- ]*)(\d[- ]*){2})?([- ]*)((\(([- ]*)(\d[- ]*){3}\))|(([- ]*)(\d[- ]*){3}))([- ]*)(\d[- ]*){7}$/gm;
        return rexPhone.test(string);
    },
    validatePassword: function (string) {
        const rexPassword = /(?=\w+[A-Z])(?=\w+[a-z])(?=.+\d)\w{8,}$/gm;
        return rexPassword.test(string);
    }
}