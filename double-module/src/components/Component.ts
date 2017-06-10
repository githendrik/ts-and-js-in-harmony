import * as _ from "lodash"; // Listed as peerDependency, and added as external to webpack.config

export default class TsClass {
    private field : string;

    constructor(field : string) {
        this.field = field;
    }

    getField() {
        return _.upperCase(this.field);
    }
}