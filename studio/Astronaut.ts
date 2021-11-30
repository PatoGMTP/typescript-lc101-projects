import { Payload } from './Payload';

export class Astronaut implements Payload{
    constructor (public massKg: number, public name: string) {}
 }
