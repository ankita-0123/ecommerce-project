const ProductsShow =(props)=>{
    const price=`$${props.price.toFixed(2)}`;
    return <li>
        <div>{props.imageUrl}</div>
        <div><h3>{props.title}</h3>
        <div >{price}</div></div>
    </li>
}
export default ProductsShow;