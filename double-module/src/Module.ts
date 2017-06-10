// Styles
import './components/Component.styles'

// Pass-Through
import TsClass from './components/Component'

// Own things
function tsFn(fnParam : number) {
    const myComponent = new TsClass(`TsClass${fnParam}`);
    return myComponent.getField();
}

export {tsFn, TsClass}