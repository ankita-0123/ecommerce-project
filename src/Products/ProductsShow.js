import './ProductsShow.module.css'
import ProductsAddCartForm from './ProductsAddCartForm'

const ProductsShow =(props)=>{
    const price=`$${props.price.toFixed(2)}`;
    return <li>
        <div>{props.imageUrl}</div><br/>
        <div><h3>{props.title}</h3>
        <div >{price}</div></div>
        <div><ProductsAddCartForm id={props.id} item={props}/></div>
    </li>
}
export default ProductsShow;