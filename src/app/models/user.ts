import {Address} from './address'

export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at: Date;
    created_at: Date;
    updated_at: Date;
    fecha_nacimiento: Date;
    edad: number;
    domicilio: Address;
}