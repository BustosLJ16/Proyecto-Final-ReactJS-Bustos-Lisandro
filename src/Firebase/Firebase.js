import { initializeApp } from "firebase/app";
import { getFirestore, getDocs, collection, query, where, doc, getDoc, addDoc, updateDoc } from 'firebase/firestore';
import Swal from 'sweetalert2'

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

// Genero Una Orden de compra.
export async function sendOrder(order) {
    const ordersCollection = collection(db, 'Orders')

    try {
        const docRef = await addDoc(ordersCollection, order);
        Swal.fire({ //Alerta mostrando la generación satisfactoria de mi Orden
            icon: 'success',
            title: 'Felicitaciones!',
            text: `Tu ID de orden de compra es: ` + docRef.id,
        });
        return docRef.id
        
    } catch (error) {
        console.log(error)
    }
}

// Función para actualizar un producto

export async function updateProducts(productId, toUpdate) {
    const itemRef = doc(db, 'ProductList', productId); // Usamos el ID del producto
    try {
        await updateDoc(itemRef, toUpdate);
        console.log("Producto actualizado con éxito!");
    } catch (error) {
        console.log('Error de Actualización:' + error);
    }
}
