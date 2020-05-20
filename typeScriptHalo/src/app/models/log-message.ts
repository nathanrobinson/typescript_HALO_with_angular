export interface IDebugLog {
    message: string;
}

export interface ITraceLog {
    action: string;
    metric: number;
}

export interface IErrorLog {
    error: Error;
}

export type LogItem = IDebugLog | ITraceLog | IErrorLog;

export function logMessage(item: LogItem) {
    // console.debug(item.message);

    // console.log(item.action, item.metric);

    // console.error(item.error);

    // console.dir(item);
}
