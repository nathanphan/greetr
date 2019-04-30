(function(global, $) {
    var Greetr = function (firstname, lastname, lang) {
        return new Greetr.init(firstname, lastname, lang);
    };

    var suportedLanguage = ['en', 'es'];
    var greetings = {
        en: 'Hello',
        es: 'Hola', 
    };
    var formalGreetings = {
        en: 'Greetings',
        es: 'Saludos'
    };
    var logMessages = {
        en: 'logged in',
        es: 'Incisio session'
    };

    Greetr.prototype = {
        fullname: function () {
            return this.firstname + ' ' + this.lastname;
        },

        greeting: function() {
            return greetings[this.lang] + ' ' + this.firstname;
        },

        formalGreeting: function() {
            return formalGreetings[this.lang] + ' ' + this.fullname();
        },

        validate: function() {
            if (suportedLanguage.indexOf(this.lang) === -1) {
                throw "Invalid language";
            }
        },
        greet: function(formal) {
            var msg;
            if (formal) {
                msg  = this.formalGreeting();
            }
            else {
                msg = this.greeting();
            }

            if (console) {
                console.log(msg);
            }
            return this;
        },
        log: function() {
            if (console) {
                console.log(logMessages[this.lang]) + ' ' + this.fullname;
            }
        },
        setLang: function(lang) {
            this.lang = lang;

            this.validate();
            return this;
        }
    };

    Greetr.init = function (firstname, lastname, lang) {
        var self = this;
        self.firstname = firstname || '';
        self.lastname = lastname || '';
        self.lang = lang || 'en';
    };

    Greetr.init.prototype = Greetr.prototype;

    global.Greetr = global.G$ = Greetr;
}(window, jQuery));