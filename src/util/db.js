import {connectToDatabase} from "@/util/mongo";

const {db} = await connectToDatabase();

/**
 * @function get
 * @description fetch data from database
 * @param collection{string}
 * @param query{object}
 * @param limit{number}
 * @param sort{object}
 * @return {Promise<*>}
 */
export async function get(collection = 'data', query = {}, limit = 10, sort = { _id: 1 }) {
    const projection = {
        _id: 0,
        _key: 0
    };

    try {
        return await db.collection(collection).find(query).sort(sort).project(projection).limit(limit).toArray()
    } catch (e) {
        console.log(e);
        throw new Error('Failed to fetch data from database' + e);
    }
}
