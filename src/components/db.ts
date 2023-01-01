import Dexie from 'dexie';

export const db = new Dexie('espresso-time-db');

db.version(1).stores({
  espressoShots: '++id, shotTime' // Primary key and indexed props
});
