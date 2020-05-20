export function Title(title: string) {
    console.log(`Called Title decorator with "${title}"`);

    // tslint:disable-next-line: only-arrow-functions
    return function<T extends new(...args: any[]) => {}>(constructor: T) {
        console.log(`Applying Title decorator with "${title}" to ${constructor.name}`);

        return class extends constructor {
            // defaultTitle = title;
            title = title;
        };
    };
}
