import Component from './components/Component'

function doStuff() {
    const myComponent = new Component('bar');
    return myComponent.getFoo();
}

export {doStuff, Component}