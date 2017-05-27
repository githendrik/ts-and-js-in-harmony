export default class Component {
    private foo : string;

    constructor(foo : string) {
        this.foo = foo;
    }

    getFoo() {
        return this.foo;
    }
}