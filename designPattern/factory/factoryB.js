
/**
 * @class Android
 * @class Ios
 * @class Ubuntu
 * @class OSFactory
 */
class Android {
    constructor(name) {
        this.name = name;
        this.type = 'Android'
    }
}

class Ios {
    constructor(name) {
        this.name = name;
        this.type = 'Ios'
    }
}
class Ubuntu {
    constructor(name) {
        this.name = name;
        this.type = 'Ubuntu'
    }
}

class OSFactory {
    create(name) {
        if (name == 'Android') {
            return new Android('open source');
        }
        else if (name == 'Ios') {
            return new Ios('high cost');
        }
        else if (name == 'Ubuntu') {
            return new Ubuntu('universal');
        }
    }
}
module.exports = {
    OSFactory
}
