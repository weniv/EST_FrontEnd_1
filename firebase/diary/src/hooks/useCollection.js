import { onSnapshot, collection, query, where, orderBy } from "firebase/firestore";
import { appfireStore } from "../firebase/config";
import { useEffect, useState } from "react"

export const useCollection = (transaction, myQuery) => {

    const [documents, setDocuments] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {

        let q;
        if (myQuery) {
            q = query(collection(appfireStore, transaction), where(...myQuery), orderBy("createdTime", "desc"));
        }

        const unsubscribe = onSnapshot(myQuery ? q : collection(appfireStore, transaction), (snapshot) => {
            const result = [];
            snapshot.docs.forEach((doc) => {
                result.push({ ...doc.data(), id: doc.id })
            });

            setDocuments(result);
        }, (error) => {
            setError(error.message);
            console.error(error.message);
        });

        return () => {
            unsubscribe();
        }
    }, []);

    return { documents, error }
}