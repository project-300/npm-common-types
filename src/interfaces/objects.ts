            /* Users */

interface UserBrief {
    userId: string;
    username: string;
    avatar: string;
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
}

export interface Driver extends User { }
export interface Passenger extends User { }
export interface Admin extends User { }

            /* Lifts */

export interface LiftObject {
    liftId: string;
    driver: DriverBrief[];
    passengers: PassengerBrief[];
    times: {
        createdAt: Date | string;
        leavingAt: Date | string;
        estimatedArrival: Date | string;
        startedAt?: Date | string;
        arrivedAt?: Date | string;
    };
    destination: Place;
    origin: Place;
    noOfSeats: number;
    pricePerSeat: number;
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
    lat: string;
    long: string;
    name: string;
}

export interface CollectionItem {
    [id: string]: string;
}