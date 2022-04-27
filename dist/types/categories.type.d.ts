import { Model } from './model.type';
export declare type CategoryObject<T> = {
    ids: string[];
    categoriesDescriptions: T[];
};
export declare type Category = Model & {
    categoryID: string;
    parent: string;
    image?: string;
    name: string;
    order?: string;
    shape?: string;
    banner?: string;
};
export declare type MarketCategory = Model & {
    marketID: string;
    order: number;
    name: string;
    categoryID: string;
    image: string;
    schedule: string[];
    affiliateID: string;
    banner?: string;
    shape?: string;
    parent?: string;
};
