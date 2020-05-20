export function Log(context: string, logCounter: { counter: number }) {
    // console.log(`Called Log Decorator for ${context} invocation: ${logCounter.counter++}`);
    // tslint:disable-next-line: only-arrow-functions
    return function(target: any, ...args: any[]) {
        // console.log(
        //     `Evaluated Log Decorator for ${context} on ${
        //         target?.name || target?.constructor?.name
        //     } with ${
        //         !!args?.length ? JSON.stringify(args) : ''
        //     } invocation: ${logCounter.counter++}`
        //     );
    };
}
