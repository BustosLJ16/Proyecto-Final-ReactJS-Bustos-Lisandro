import { initializeApp } from "firebase/app";
import { getFirestore, getDocs, collection, query, where, doc, getDoc } from 'firebase/firestore';

// Configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBq078GcGRvcQm6fKvIfHi8_9RxGusBnho",
    authDomain: "proyecto-final-reactjs-7d477.firebaseapp.com",
    projectId: "proyecto-final-reactjs-7d477",
    storageBucket: "proyecto-final-reactjs-7d477.appspot.com",
    messagingSenderId: "866246923756",
    appId: "1:866246923756:web:f7a0ac3501827dcdef9cc9"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Obtengo La Colección De Mis Productos con Filtrado por Categoría
export async function getProducts(category = null) {
    try {
        const productsCollectionRef = collection(db, 'ProductList');
        let productsQuery;

        // Si existe una categoría seleccionada, se filtra.
        if (category) {
            productsQuery = query(productsCollectionRef, where('category', '==', category));
        } else {
            productsQuery = productsCollectionRef; // Si no existe, se descarta el filtrado.
        }

        // Obtengo los documentos de mis productos
        const productsCollection = await getDocs(productsQuery);
        const productsList = productsCollection.docs.map(document => ({
            id: document.id,
            ...document.data()
        }));

        return productsList;
    } catch (error) {
        console.log(error);
        return [];
    }
}

// Obtengo UN producto filtrado por el ID
export async function getSingleProduct(id) {
    const documentRef = doc(db, 'ProductList', id);

    try {
        const singleProductDetail = await getDoc(documentRef);
        if(singleProductDetail.exists()){
            return singleProductDetail.data();
        }
        else {
            console('Lo sentimos, no encontramos el Detalle del producto Seleccionado.')
        }
    } catch (error) {
        console.log('el error es:' + error)
    }
}

export { db };