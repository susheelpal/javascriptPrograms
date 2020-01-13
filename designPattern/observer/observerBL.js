
/**
 * @module Subject
 */

function Subject() {
    this.observer = [];
}
Subject.prototype = {
    subscribe: function (obj) {
        this.observer.push(obj);

    },
    unsubscribe: function (obj) {
        this.observer = this.observer.filter(fn => {
            if (fn != obj) return fn;
        })
    },
    fire: function () {
        this.observer.forEach(obj => {
            obj.call();
        });
    }
}
function Observer1() {
    console.log(`hey this is observer1`);
}
function Observer2() {
    console.log(`hey this is observer2`);
}
module.exports = {
    Subject, Observer1, Observer2
}
