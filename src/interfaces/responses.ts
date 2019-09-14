import { PublishType } from '../enums';
import { CollectionItem } from "./objects";

export interface SubscriptionPayload {
    subscription: string | undefined;
    type: PublishType;
    objectId: string;
    isCollection: boolean;
    data: CollectionItem | CollectionItem[];
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
