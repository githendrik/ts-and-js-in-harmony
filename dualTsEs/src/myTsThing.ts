import {tsFn, TsClass} from 'double-module';

export function myTsFn() {
    console.log('myTsFn:');

    console.log(tsFn(123));
    const myComponent = new TsClass('instanceName');
    console.log(myComponent.getField());
}