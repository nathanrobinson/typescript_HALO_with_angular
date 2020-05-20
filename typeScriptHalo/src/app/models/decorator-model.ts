import { Log } from '../decorators/log';

const counter = { counter: 0 };

@Log('first class', counter)
@Log('second class', counter)
export class WithDecorator {

    @Log('first accessor', counter)
    @Log('second accessor', counter)
    get helloWorldText(): string {
        return this.text;
    }

    @Log('first property', counter)
    @Log('second property', counter)
    text = 'Hello, world!';

    @Log('first method', counter)
    @Log('second method', counter)
    getHelloWorldText(): string {
        return this.text;
    }
}
