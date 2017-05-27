import {Component, doStuff} from "double-module";

export function doMoreStuff() {
    let boing : string = 'hello';

    console.log(boing);
    const doStuffResult : string = doStuff();
    const myComponent = new Component('yay');
    const gettingFoo : string = myComponent.getFoo();
    console.log(gettingFoo);
}