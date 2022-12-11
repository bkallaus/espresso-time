import Dexie, { Table } from 'dexie';

export interface EspressoShot {
  id?: number;
  shotTime: number;
  quality: number;
  date: string;
}

export class MySubClassedDexie extends Dexie {
  espressoShots!: Table<EspressoShot>; 

  constructor() {
    super('espresso-time-db');
    this.version(1).stores({
        espressoShots: '++id, shotTime' // Primary key and indexed props
    });
  }
}

export const db = new MySubClassedDexie();