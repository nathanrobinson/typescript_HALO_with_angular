import { Title } from '../decorators/title';
import { OnChange } from '../decorators/on-change';

// @Title('I Have a Title!')
export class WithDecorator {
    private _title: string;
    set title(value: string) {
        if (this._title !== value) {
            this._title = value;
            this.onTitleChanged(value);
        }
    }
    get title(): string {
        return this._title;
    }

    // @OnChange<WithDecorator>(x => x.onTitleChanged(x.title)) title: string;

    onTitleChanged(title: string) {
        console.log(`Title Changed to ${title}`);
    }
}
