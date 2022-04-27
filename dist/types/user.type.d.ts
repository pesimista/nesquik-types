import { Address } from './address.type';
import { Model } from './model.type';
export declare type User = Model & {
    addresses: Address[];
    birthdate?: unknown;
    currentAddress: Address;
    email: string;
    lastName: string;
    name: string;
    nickname: string;
    points: number;
    pointsEarned: number;
    pointsSpent: number;
    status: 'active' | 'banned' | 'inactive' | 'invalid';
    stripeCustomerID?: string;
    transactionsCompleted: number;
    requestsCompleted: number;
    lastRequestDate: Date;
    lastLoginDate: Date;
    userID?: string;
    directory: ContactInfo[];
};
export declare type ContactInfo = {
    contactName: string;
    serviceCode: string;
    subServiceCode: string;
    phoneNumber: string;
};
