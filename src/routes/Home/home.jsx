import { collection, onSnapshot, query, getDocs } from 'firebase/firestore';
import { db } from '../../firestore';
import Header from '../../components/Header/header'
import Product from '../../components/Product-Card/product-card'


export default function Home(){
    const [products, setProducts] = useState([])

    const ref = firebase.firestore().collection("products");

    return(
        <div>
            <Header/>
            <h1> This is the home page</h1>
            <Product/>

            <h1> Shop </h1>
            {
                products.map((products) =>(
                    <div key = {products.id}>
                        <h2>{products.title}</h2>
                        <p>{products.price}</p>
                    </div>
                ))
            }
            
        </div>
        
    );
}