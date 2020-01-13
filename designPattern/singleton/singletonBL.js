/**
 * @class Singleton
 */
let object = null
class Singleton {
    constructor(name) {
        this.name = name;
        object = this;
    }

    getObject() {
        if (object == null) {
            object = new Singleton('Object1');
        }
        else
            return object;
    }
}
module.exports = {
    Singleton
}