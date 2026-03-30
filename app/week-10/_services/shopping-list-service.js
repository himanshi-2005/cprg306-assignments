import { db } from "../../utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export const getItems = async (userId) => {
  const items = [];

  try {
    const itemsRef = collection(db, "users", userId, "items");

    const q = query(itemsRef);
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      items.push({
        id: doc.id,
        ...doc.data(),
      });
    });

  } catch (error) {
    console.error("Error getting items:", error);
  }

  return items;
};

export const addItem = async (userId, item) => {
  try {
    const itemsRef = collection(db, "users", userId, "items");

    const docRef = await addDoc(itemsRef, item);

    return docRef.id;

  } catch (error) {
    console.error("Error adding item:", error);
  }
};