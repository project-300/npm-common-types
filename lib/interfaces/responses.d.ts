import { PublishType } from '../enums';
import { CollectionItem } from "./objects";
export declare type SubscriptionPayloadData = CollectionItem | CollectionItem[] | string;
export interface SubscriptionPayload {
    subscription: string | undefined;
    type: PublishType;
    objectId: string;
    isCollection: boolean;
    data: SubscriptionPayloadData;
    notice?: string;
}
export interface SubscriptionRequest {
    subscription: string;
    subscribe: boolean;
    userId: string;
}
export interface SubscriptionError {
    subscription?: string | undefined;
    error?: string;
}
export interface HTTPRequest {
    [x: string]: any;
}
export interface HTTPResponse {
    success: boolean;
}
