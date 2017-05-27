import {Component, doStuff} from "double-module";

export function doMoreStuff() {
    let boing : string = 'hello';

    console.log(boing);
    //console.log();
    const doStuffResult : string = doStuff();
    const myComponent = new Component('yay');
    myComponent.getFoo();
}