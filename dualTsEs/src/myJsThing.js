const { tsFn, TsClass } = require('double-module'); // umd ftw!

export default function MyJsFn() {
    console.log('MyJsFn:');

    console.log(tsFn(123));
    const myComponent = new TsClass('instanceName');
    console.log(myComponent.getField());
}
