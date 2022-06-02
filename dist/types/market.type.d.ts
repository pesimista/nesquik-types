import { Banner } from './banner.type';
import { Category } from './categories.type';
import { Coordinates } from './coordinates.type';
import { Model } from './model.type';
export declare type Schedule = {
    initialTime: string;
    finalTime: string;
};
export declare type MarketImages = {
    profile: string;
    header: string;
    showcaseBackgroundImage: string;
    backgroundImage: string;
    marketing: string[];
    headerBackgroundColor: string;
};
export declare type Market = Model & {
    name: string;
    address: string;
    addressName: string;
    bikeDistance: number;
    coordinates: Coordinates;
    email: string;
    estimatedTime: number;
    hasFreeDelivery: boolean;
    hasPromo: boolean;
    isOnlyQuik: boolean;
    logo: string;
    marketID: string;
    maxDeliveryRange: number;
    radiusDistance: number;
    order: number;
    rating: number;
    schedule: Partial<Schedule>[];
    marketing: Banner[];
    images: MarketImages;
    categories: Category[] | string[];
};
