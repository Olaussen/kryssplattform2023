interface CelestialBodyI {
  name: string;
  mass?: number;
}

type CelestialBody = {
  name: string;
  mass: number;
};

class Satellite implements CelestialBodyI {
  name: string;
  mass: number;
  constructor(name: string, mass: number) {
    this.name = name;
    this.mass = mass;
  }

  printInfo() {
    console.log(`Name: ${this.name}, Mass: ${this.mass}`);
  }
}

class Planet extends Satellite {
  positionInSolarSystem: number
  constructor(name: string, mass: number) {
    super(name, mass);
    this.positionInSolarSystem = 0;
  }

  logInfo() {
    super.printInfo();
  }
}

const earth = new Planet("Earth", 5.972e24);

type Ola = {
  name: string;
}

let myObject = {} as Ola;
myObject.name = "Ola";
