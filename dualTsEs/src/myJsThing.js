const { doStuff, Component } = require('double-module');

export default function Boing() {

    const foo = doStuff();
    console.log(foo);

    const myComponent = new Component(); // no type checking. Will call new Component with undefined!
    console.log(myComponent);

    return 'whaaaat!';
}