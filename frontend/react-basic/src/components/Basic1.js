import React, { useState } from 'react'

const Basic1 = () => {


    // practice useState
    const [product, setProducts] = useState({name: '', price: ''});

  return (
    <>
    <form>
        <input type="text" value={product.name} 
        onChange={evt => setProducts({
            // ... オブジェクトの中身を分解させる
            ...product,
            // name だけ上書きする
            name: evt.target.value
        })}/>
        <input type="text" value={product.price}
        onChange={evt => setProducts({
            ...product,
            price: evt.target.value
        })}/>
    </form>
    <h1>Product name is {product.name}</h1>
    <h1>Product price is {product.price}</h1>

    </>

  )
}

export default Basic1