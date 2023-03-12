import { Address } from "./Address.Model";
import { Company } from "./Company.Model";

export interface UserModel {
    id: number;
    name: string;
    username: string;
    email: string;
    profilepicture: string;
    address: Address;
    phone: string;
    website: string;
    company: Company;
}