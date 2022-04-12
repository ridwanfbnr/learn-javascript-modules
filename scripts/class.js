export class Person {
    constructor(names) {
        this.names = names;
    }

    sayHello(name) {
        console.info(`Hello ${name}, My Names Is ${this.names}`);
    }
};