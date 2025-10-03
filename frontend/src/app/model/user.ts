import { Device } from "./device";
import { Plant } from "./plant";

export class User {
    id?: number;
    username?: string;
    email?: string;
    profileImage?: string;
    isOnline?: boolean;
    devices?: number[];
    plants?: number[];
    posts?: number[];
    followers?: number[];
    following?: number[];
    address?: string;
    city?: string
}
