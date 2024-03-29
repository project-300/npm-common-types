/* Users */

import LatLng = google.maps.LatLng;

export type UserTypes = 'Passenger' | 'Driver' | 'Moderator' | 'Admin';

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
	driverConfirmedPickup: boolean; // Driver indicates they have been picked up
	passengerConfirmedPickup: boolean; // Passenger indicates they have been picked up
	driverCancelledPickup: boolean; // Driver indicates they have cancelled pickup for user
	passengerCancelledPickup: boolean; // Passengers indicates they cancelled lift
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
	journeysAsPassenger: Array<{ journeyId: string; createdAt: string }>;
	isDriving: boolean;
	connections: UserConnection[]; // Websocket connection ids (can be connected to multiple at same time)
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
	}
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

export interface Driver extends User {} // To be removed

export interface Passenger extends User {} // To be removed

export interface Admin extends User {} // To be removed

/* Journeys / Lifts */

export interface JourneyAction {
    description: string;
    time: string;
}

export interface JourneyRating {
    passenger: UserBrief;
    rating: number;
    times: {
    	ratedAt: string;
	}
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
    userJoined?: boolean; // Only set if the user calling a Journey (or list) has joined / accepted this lift
    isOwnedByUser?: boolean; // Only set if the user calling a Journey (or list) is the driver of the journey
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
	cronJobEvaluated: boolean; // A flag used to determine whether a cron job should be run on the journey
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

/* Driver Applications */

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

/* Universities */

export interface University {
	universityId: string;
	name: string;
	emailDomains: string[];
	times: {
		createdAt: Date | string;
		updatedAt?: Date | string;
	};
}

/* Chats & Messages */

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
    otherUser?: ChatUser; // Only set when querying a chat / multiple chats
    unreadCount?: number; // Only set when querying a chat / multiple chats
    readableDurations?: { // Only set when querying a chat / multiple chats
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
	userOwnMessage?: boolean; // Used to identify is current user has sent message
	localMessage?: boolean; // Used only on the client for identifying local messages not received by the backend
	deleted?: boolean;
	times: {
		createdAt: string;
		updatedAt?: string;
		deletedAt?: string;
	};
}

/* Google */

export interface GooglePlace extends google.maps.places.AutocompletePrediction {
	id: string;
}

export interface GooglePlaceDetails extends google.maps.places.PlaceResult {}

export interface GoogleDirectionsRoute extends google.maps.DirectionsRoute {}

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
