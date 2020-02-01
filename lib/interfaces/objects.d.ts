/// <reference types="googlemaps" />
export interface UserBrief {
    userId: string;
    username: string;
    firstName: string;
    lastName: string;
    avatar: string;
    userType: 'Passenger' | 'Driver' | 'Admin';
}
export interface DriverBrief extends UserBrief {
    lastLocation: Coords;
}
export interface PassengerBrief extends UserBrief {
    driverConfirmedPickup: boolean;
    passengerConfirmedPickup: boolean;
    lastLocation: Coords;
}
export interface User extends UserBrief {
    email: string;
    phone: string;
    times: {
        confirmedAt?: Date | string;
        createdAt: Date | string;
        lastLogin?: Date | string;
    };
    confirmed: boolean;
    isOnJourney: boolean;
    currentJourneyId: string;
    interests: string[];
}
export interface Driver extends User {
    isDriving: boolean;
}
export interface Passenger extends User {
    journeysAsPassenger: string[];
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
    destination: Place;
    origin: Place;
    totalNoOfSeats: number;
    seatsLeft: number;
    pricePerSeat: number;
    plannedRoute: Coords[];
    routeTravelled: Coords[];
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
    approved?: boolean;
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
