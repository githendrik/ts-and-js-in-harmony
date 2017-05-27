import * as _ from "lodash"; // Listed as peerDependency, and added as external to webpack.config

export default class Component {
    private foo : string;

    constructor(foo : string) {
        this.foo = foo;
    }

    getFoo() {
        return _.upperCase(this.foo);
    }
}