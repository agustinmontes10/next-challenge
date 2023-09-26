export type BaseReducerPropsType = {
    something: any,
    somethingStatus: ServerStatus
}

export enum ServerStatus { idle, error, fetch, fetching }