import { EspressoShot } from "../types/espresso-shot";
import { db } from "./db";

export const useDB = () => {
    const addShot = (shot: EspressoShot) => {
       return db.espressoShots.add(shot);
    };

    const getShot = (id: number) => {
        return db.espressoShots.get(id);
    };

    const getAllShots = () => {
        return db.espressoShots.toArray();
    };

    const deleteShot = (id: number) => {
        return db.espressoShots.delete(id);
    };

    const refreshShots = async () => {
        const shots = await getAllShots();
        
    };

    return {
        addShot,
        getShot,
        getAllShots,
        deleteShot
    }
}
