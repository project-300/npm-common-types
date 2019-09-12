import { PublishType } from '../enums';

export interface WebsocketResponse {
    subscription: string | undefined;
    type?: PublishType;
    objectId?: string;
    isCollection?: boolean;
    data?: object | string;
    notice?: string;
    error?: string;
}
