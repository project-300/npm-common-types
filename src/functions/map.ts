import { Coords, Place } from '../interfaces';

export function GetMidpoint(a: Place, b: Place): Coords {
    return {
        latitude: (a.latitude + b.latitude) / 2,
        longitude: (a.longitude + b.longitude) / 2
    }
};
