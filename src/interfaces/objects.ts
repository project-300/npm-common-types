            /* Users */

interface UserBrief {
    userId: string;
    username: string;
    firstName: string;
    lastName: string;
    avatar: string;
    userType: 'Passenger' | 'Driver' | 'Admin';
}

export interface DriverBrief extends UserBrief { }

export interface PassengerBrief extends UserBrief { }

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
}

export interface Driver extends User {
    isDriving: boolean;
}

export interface Passenger extends User {
    journeysAsPassenger: string[];
}

export interface Admin extends User { }

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
    routeTravelled: Coords[];
}

            /* Driver Applications */

export interface DriverApplicationObject {
    userId: string;
    approved?: boolean;
    times: {
        applied: string;
        approved?: string;
    };
}

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
    [id: string]: string;
}
