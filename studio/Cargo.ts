import { Payload } from './Payload';

export class Cargo implements Payload{
    constructor (public massKg: number, public material: string) {}
}
