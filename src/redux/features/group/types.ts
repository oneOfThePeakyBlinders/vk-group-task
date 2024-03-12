export interface GetGroupsResponse {
    result?: 1 | 0,
    data?: IGroup[],
    status: Status,
    privacyFilter: string;
    colorFilter: string;
    friendsFilter: string;
}

export interface IGroup {
    "id": number,
    "name": string,
    "closed": boolean,
    "avatar_color"?: string,
    "members_count": number,
    "friends"?: User[]
}

export interface User {
    "first_name": string,
    "last_name": string
}

export enum Status {
    LOADING = 'loading',
    SUCCESS = 'completed',
    ERROR = 'error',
}

