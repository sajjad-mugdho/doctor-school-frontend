import { Collection, Db } from "mongodb";

import { clientPromise } from "@/lib/db/mongodb";

const useDatabase = () => {
  const getCollection = async (collectionName: string): Promise<Collection> => {
    const client = await clientPromise;
    const db: Db = client.db(process.env.DB_NAME);

    return db.collection(collectionName);
  };

  const findOne = async (collectionName: string, query: object) => {
    const collection = await getCollection(collectionName);

    return collection.findOne(query);
  };

  const updateOne = async (
    collectionName: string,
    filter: object,
    update: object,
  ) => {
    const collection = await getCollection(collectionName);

    return collection.updateOne(filter, update);
  };

  return {
    findOne,
    updateOne,
  };
};

export { useDatabase };
