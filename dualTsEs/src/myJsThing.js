const { tsFn, TsClass } = require('double-module'); // same as import

export default function MyJsFn() {
    console.log('MyJsFn:');

    console.log(tsFn(123));
    const myComponent = new TsClass('instanceName');
    console.log(myComponent.getField());
}