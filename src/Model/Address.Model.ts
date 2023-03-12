import { GeoLocation } from "./GeoLocation.Model";

export interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: GeoLocation;
}