import { Market } from './market.type';
import { Model } from './model.type';
export declare type CategoryObject<T> = {
    ids: string[];
    categoriesDescriptions: T[];
};
export declare type Category = Model & {
    market: string | Market;
    categoryID: string;
    image: string;
    name: string;
    order: number;
    shape: string;
    banner: string;
    parent: string;
};
