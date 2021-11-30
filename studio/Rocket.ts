import { Astronaut } from './Astronaut';
import { Payload } from './Payload';
import { Cargo } from './Cargo';

export class Rocket {
    cargoItems: Cargo[] = [];
    astronauts: Astronaut[] = [];

    constructor (public name: string, public totalCapacityKg: number) {}

    sumMass( items: Payload[] ): number
    {
        return items.reduce((a,c) => a+c.massKg, 0);
    }

    currentMassKg(): number
    {
        return this.sumMass(this.cargoItems) + this.sumMass(this.astronauts);
    }

    canAdd(item: Payload): boolean
    {
        return (this.currentMassKg() + item.massKg) <= this.totalCapacityKg;
    }

    addCargo(cargo: Cargo): boolean
    {
        if (this.canAdd(cargo))
        {
            this.cargoItems.push(cargo);
            return true;
        }

        return false;
    }

    addAstronaut(astronaut: Astronaut): boolean
    {
        if (this.canAdd(astronaut))
        {
            this.astronauts.push(astronaut);
            return true;
        }

        return false;
    }
}