export const firstName = "Eko";
export const middleName = "Kurniawan";
export const lastName = "Khannedy";

export function hello(name) {
    console.info(`Hello ${name}`);
}

export class Person {
    constructor(name) {
        this.name = name;
    }

    sayHello() {
        console.info(`Hello My Name is ${this.name}`);
    }
}