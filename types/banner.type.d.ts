import { Coordinates } from './coordinates.type';
export declare type HomeBanners = {
    [key: string]: Banner[];
};
export declare type Banner = {
    bannerID: string;
    image: string;
    largeImage?: string;
    largeImagesArray?: string[];
    type: 'lead' | 'category' | 'promo' | 'service';
    name: string;
    priority: number;
    isHidden: boolean;
    url: string;
    queryParams?: BannerQueryParams;
    disabled?: boolean;
    caption?: string;
    isDelivery?: boolean;
    coordinates?: Coordinates;
    radiusDistance?: number;
    affiliateID?: string;
    col?: string;
    dateIn?: string;
    dateOut?: string;
    schedule?: string[];
    gender?: 'male' | 'female';
    ageRange?: string[];
    backgroundColor?: string;
    exclusiveFor: 'mobile' | 'desktop' | 'both';
    gallery?: [];
};
declare type BannerQueryParams = {
    storeid: string;
    productID: string;
};
export {};
