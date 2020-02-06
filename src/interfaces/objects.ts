            /* Users */

export interface UserBrief {
    userId: string;
    username: string;
    firstName: string;
    lastName: string;
    avatar: string;
    userType: 'Passenger' | 'Driver' | 'Admin';
}

export interface DriverBrief extends UserBrief {
    lastLocation?: Coords;
}

export interface PassengerBrief extends UserBrief {
    driverConfirmedPickup: boolean; // Driver indicates they have been picked up
    passengerConfirmedPickup: boolean; // Passenger indicates they have been picked up
    lastLocation?: Coords;
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
    interests?: string[];
    journeysAsPassenger: string[];
    isDriving: boolean;
}

export interface Driver extends User { } // To be removed

export interface Passenger extends User { } // To be removed

export interface Admin extends User { } // To be removed

            /* Journeys / Lifts */

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

            /* Driver Applications */

export interface DriverApplicationObject {
    userId: string;
    user: UserBrief;
    approved?: boolean;
    times: {
        applied: string;
        approved?: string;
    };
}

            /* Google */

export interface GooglePlace extends google.maps.places.AutocompletePrediction {
    id: string;
}

export interface GooglePlaceDetails extends google.maps.places.PlaceResult { }

export interface GoogleDirectionsRoute extends google.maps.DirectionsRoute { }

            /* Miscellaneous */

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
    name: string;
    times: {
        createdAt: Date | string;
    }
}
