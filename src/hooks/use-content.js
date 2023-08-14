import { useEffect, useState, useContext } from "react";
import { FirebaseContext } from "../context/firebase";

export default function useContent(target) {
    const [content, setContent] = useState([]);
    const { firebaseApp } = useContext(FirebaseContext);

    useEffect(() => {
        firebaseApp
            .firestore()
            .collection(target)
            .get()
            .then((snapshot) => {
                const allContent = snapshot.docs.map((contentObj) => ({
                    ...contentObj.data(),
                    docId: contentObj.id,
                }));
                setContent(allContent);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, [firebaseApp, target]); 

    return { [target]: content };
}
