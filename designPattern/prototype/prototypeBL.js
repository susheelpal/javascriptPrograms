
/**
 * @class DogProtype
 * @class Labrador
 * @class Pug
 */
class DogPrototype {
    constructor(prototype) {
    }

    Clone() {
    }
}

class Labrador extends DogPrototype {
    constructor() {
        console.log("i am a labrador");
        super()
    }

    Clone() {

        console.log("hey i am the cutest labrador");
        return clone;
    }
}

class Pug extends DogPrototype {
    constructor() {
        console.log("i am a pug");
        super()
    }

    Clone() {
        console.log(" i am smallest in the size");
        return clone;
    }
}

init_Prototype = () => {
    var proto1 = new Labrador();
}

module.exports = {
    init_Prototype
}
