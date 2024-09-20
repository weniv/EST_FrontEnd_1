import { collection, addDoc, Timestamp, deleteDoc, doc } from "firebase/firestore";
import { appfireStore } from "../firebase/config";
import { useReducer } from "react";

const initState = {
    document: null,
    isPending: false,
    error: null,
    isSuccess: false
}


const storeReducer = (state, action) => {
    switch (action.type) {
        case 'isPending':
            return {
                document: null,
                isPending: true,
                error: null,
                isSuccess: false
            }
        case 'addDoc':
            return {
                document: action.payload,
                isPending: false,
                error: null,
                isSuccess: true
            }
        case 'deleteDoc':
            return {
                document: null,
                isPending: false,
                error: null,
                isSuccess: true
            }
        case 'error':
            return {
                document: null,
                isPending: false,
                error: action.payload,
                isSuccess: false
            }
        default:
            return state;
    }
}


export const useFireStore = (transaction) => {

    const [response, dispatch] = useReducer(storeReducer, initState);

    const colRef = collection(appfireStore, transaction);

    const addDocument = async (doc) => {
        dispatch({ type: "isPending" });

        try {
            const createdTime = Timestamp.fromDate(new Date());
            const docRef = await addDoc(colRef, { ...doc, createdTime });

            dispatch({ type: "addDoc", payload: docRef });
        } catch (error) {
            dispatch({ type: "error", payload: error.message });
            console.error(error.message);
        }

    }

    const delDocument = async (id) => {
        dispatch({ type: "isPending" });

        try {
            const docRef = await deleteDoc(doc(colRef, id));

            dispatch({ type: "deleteDoc", payload: docRef });
        } catch (error) {
            dispatch({ type: "error", payload: error.message });
            console.error(error.message);
        }
    }

    return { addDocument, delDocument, response }
}