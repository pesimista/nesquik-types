import { Coordinates } from './coordinates.type';
import { Model } from './model.type';
export declare type Address = Model & {
    name: string;
    coordinates: Coordinates;
    phoneNumber: string;
    personName: string;
    description: string;
    addressReference: string;
};
