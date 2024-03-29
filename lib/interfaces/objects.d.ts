/// <reference types="googlemaps" />
export declare type UserTypes = 'Passenger' | 'Driver' | 'Moderator' | 'Admin';
export interface DBItem {
    pk: string;
    sk: string;
    sk2?: string;
    sk3?: string;
    entity: string;
}
export interface UserBrief {
    userId: string;
    firstName: string;
    lastName: string;
    avatar: string;
    userType: UserTypes;
}
export interface DriverBrief extends UserBrief {
    lastLocation?: Coords;
}
export interface PassengerBrief extends UserBrief {
    driverConfirmedPickup: boolean;
    passengerConfirmedPickup: boolean;
    driverCancelledPickup: boolean;
    passengerCancelledPickup: boolean;
    lastLocation?: Coords;
    times: {
        joinedAt: string;
        driverConfirmPickUpAt?: string;
        passengerConfirmPickUpAt?: string;
        driverCancelPickUpAt?: string;
        passengerCancelPickUpAt?: string;
    };
}
export interface UserConnection {
    deviceId: string;
    connectionId: string;
    connectedAt: string;
}
export interface User extends UserBrief, DBItem {
    email: string;
    phone: string;
    times: {
        confirmedAt?: Date | string;
        createdAt: Date | string;
        lastLogin?: Date | string;
    };
    vehicle?: Vehicle;
    confirmed: boolean;
    isOnJourney: boolean;
    interests?: string[];
    university?: {
        universityId: string;
        name: string;
    };
    journeysAsPassenger: Array<{
        journeyId: string;
        createdAt: string;
    }>;
    isDriving: boolean;
    connections: UserConnection[];
    currentJourney?: {
        journeyId: string;
        createdAt: string;
        travellingAs: UserTypes;
    };
    averageRating: number;
    totalRatings: number;
    statistics: {
        emissions: number;
        distance: number;
        fuel: number;
        liftsGiven: number;
        liftsTaken: number;
    };
}
export interface Vehicle {
    fuelType: 'petrol' | 'diesel' | 'petrolHybrid' | 'dieselHybrid' | 'electric';
    yearOfManufacture: number;
    make: {
        Make_ID: string;
        Make_Name: string;
    };
    model: {
        Model_ID: string;
        Model_Name: string;
    };
    colour?: string;
}
export interface Driver extends User {
}
export interface Passenger extends User {
}
export interface Admin extends User {
}
export interface JourneyAction {
    description: string;
    time: string;
}
export interface JourneyRating {
    passenger: UserBrief;
    rating: number;
    times: {
        ratedAt: string;
    };
}
export interface Journey extends DBItem {
    journeyId: string;
    journeyStatus: 'NOT_STARTED' | 'PICKUP' | 'WAITING' | 'STARTED' | 'PAUSED' | 'ARRIVED' | 'FINISHED' | 'CANCELLED';
    driver: DriverBrief;
    passengers: PassengerBrief[];
    times: {
        createdAt: string;
        updatedAt?: string;
        leavingAt: string;
        estimatedArrival?: string;
        startedPickupAt?: string;
        waitingAt?: string;
        startedAt?: string;
        pausedAt?: string;
        resumedAt?: string;
        endedAt?: string;
        cancelledAt?: string;
        arrivedAt?: string;
    };
    readableDurations?: {
        createdAt?: string;
        updatedAt?: string;
        leavingAt?: string;
        estimatedArrival?: string;
        startedPickupAt?: string;
        waitingAt?: string;
        startedAt?: string;
        pausedAt?: string;
        resumedAt?: string;
        endedAt?: string;
        cancelledAt?: string;
        arrivedAt?: string;
    };
    destination: Place;
    origin: Place;
    midpoint: Coords;
    totalNoOfSeats: number;
    seatsLeft: number;
    pricePerSeat: number;
    plannedRoute: Coords[];
    routeTravelled: Coords[];
    searchText: string;
    mapMidpointImage?: string;
    available: boolean;
    userJoined?: boolean;
    isOwnedByUser?: boolean;
    distanceTravelled?: number;
    actionLogs: JourneyAction[];
    ratings: JourneyRating[];
    estimatedDuration: number;
    estimatedDistance: number;
    statistics: {
        emissions: number;
        distance: number;
        fuel: number;
    };
    cronJobEvaluated: boolean;
}
export interface CreateJourney {
    times: {
        leavingAt: Date | string;
    };
    destination: Place;
    origin: Place;
    totalNoOfSeats: number;
    pricePerSeat: number;
    plannedRoute: Coords[];
    estimatedDuration: number;
    estimatedDistance: number;
}
export interface DriverApplicationObject {
    userId: string;
    user: UserBrief;
    approved?: boolean;
    vehicle: Vehicle;
    times: {
        applied: string;
        approved?: string;
    };
}
export interface University {
    universityId: string;
    name: string;
    emailDomains: string[];
    times: {
        createdAt: Date | string;
        updatedAt?: Date | string;
    };
}
export interface ChatUser extends UserBrief {
    unreadCount: number;
}
export interface Chat extends DBItem {
    chatId: string;
    messageCount: number;
    lastMessage?: string;
    started: boolean;
    users: ChatUser[];
    times: {
        createdAt: string;
        updatedAt?: string;
    };
    otherUser?: ChatUser;
    unreadCount?: number;
    readableDurations?: {
        createdAt?: string;
        updatedAt?: string;
    };
}
export interface Message extends DBItem {
    messageId: string;
    chatId: string;
    text: string;
    createdBy: UserBrief;
    readByRecipient: boolean;
    userOwnMessage?: boolean;
    localMessage?: boolean;
    deleted?: boolean;
    times: {
        createdAt: string;
        updatedAt?: string;
        deletedAt?: string;
    };
}
export interface GooglePlace extends google.maps.places.AutocompletePrediction {
    id: string;
}
export interface GooglePlaceDetails extends google.maps.places.PlaceResult {
}
export interface GoogleDirectionsRoute extends google.maps.DirectionsRoute {
}
export interface Place {
    latitude: number;
    longitude: number;
    name: string;
}
export interface Coords {
    latitude: number;
    longitude: number;
}
export interface CollectionItem {
    [id: string]: any;
}
export interface Interest {
    interestId: string;
    universityId: string;
    name: string;
    times: {
        createdAt: Date | string;
    };
}
export interface Subscription extends DBItem {
    connectionId: string;
    subscriptionId: string;
    itemType: string;
    itemId: string;
    deviceId: string;
    userId?: string;
    times: {
        subscribedAt: string;
    };
}
export interface University {
    universityId: string;
    name: string;
    emailDomains: string[];
    times: {
        createdAt: Date | string;
        updatedAt?: Date | string;
    };
}
export interface VehicleMake {
    Make_ID: number;
    Make_Name: string;
}
export interface VehicleModel {
    Make_ID: number;
    Make_Name: string;
    Model_ID: number;
    Model_Name: string;
}
export interface UserStatistics {
    userId: string;
    emissions: number;
    distance: number;
    fuel: number;
    passengersEmissions?: number;
}
export interface DayStatistics extends DayStatisticsBrief {
    passengers: UserStatistics[];
    drivers: UserStatistics[];
}
export interface DayStatisticsBrief extends DBItem {
    emissions: number;
    distance: number;
    fuel: number;
    times: {
        createdAt: Date | string;
        updatedAt?: Date | string;
    };
}
