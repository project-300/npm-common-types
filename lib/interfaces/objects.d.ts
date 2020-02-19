/// <reference types="googlemaps" />
export interface UserBrief {
    userId: string;
    username: string;
    firstName: string;
    lastName: string;
    avatar: string;
    userType: 'Passenger' | 'Driver' | 'Moderator' | 'Admin';
}
export interface DriverBrief extends UserBrief {
    lastLocation?: Coords;
}
export interface PassengerBrief extends UserBrief {
    driverConfirmedPickup: boolean;
    passengerConfirmedPickup: boolean;
    lastLocation?: Coords;
    times: {
        joinedAt: Date | string;
        pickedUpAt?: Date | string;
    };
}
export interface User extends UserBrief {
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
    currentJourneyId: string;
    interests?: string[];
    journeysAsPassenger: Array<{
        journeyId: string;
        createdAt: string;
    }>;
    isDriving: boolean;
}
export interface Vehicle {
    fuelType?: 'petrol' | 'diesel' | 'petrolHybrid' | 'dieselHybrid' | 'electric';
    yearOfManufacture: number;
    make: string;
    model: string;
    colour: string;
}
export interface Driver extends User {
}
export interface Passenger extends User {
}
export interface Admin extends User {
}
export interface Journey {
    journeyId: string;
    journeyStatus: 'NOT_STARTED' | 'STARTED' | 'ARRIVED' | 'FINISHED' | 'CANCELLED';
    driver: DriverBrief;
    passengers: PassengerBrief[];
    times: {
        createdAt: Date | string;
        updatedAt?: Date | string;
        leavingAt: Date | string;
        estimatedArrival?: Date | string;
        startedAt?: Date | string;
        endedAt?: Date | string;
        arrivedAt?: Date | string;
    };
    readableDurations?: {
        createdAt?: string;
        updatedAt?: string;
        leavingAt?: string;
        estimatedArrival?: string;
        startedAt?: string;
        endedAt?: string;
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
    name: string;
    times: {
        createdAt: Date | string;
    };
}
export interface SubscriptionConnection {
    connectionId: string;
    userId?: string;
    times: {
        subscribedAt: Date | string;
    };
}
export interface Subscription {
    connections: SubscriptionConnection[];
    times: {
        createdAt: Date | string;
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
