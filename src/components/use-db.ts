import { EspressoShot } from "../types/espresso-shot";
import { db } from "./db";

export const useDB = () => {
    const addShot = (shot: {shotTime: number, date: string}) => {
       return db.espressoShots.add(shot);
    };

    const getShot = (id: number): Promise<EspressoShot> => {
        return db.espressoShots.get(id);
    };

    const getAllShots = () => {
        return db.espressoShots.toArray();
    };

    const deleteShot = (id: number) => {
        return db.espressoShots.delete(id);
    };

    const clearAllShots = () => {
        return db.espressoShots.clear();
    };

    const refreshShots = async () => {
        const shots = await getAllShots();
        
    };

    return {
        addShot,
        clearAllShots,
        getShot,
        getAllShots,
        deleteShot
    }
}
