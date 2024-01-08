//useStateを使って、配列を追加する
import React, { useState } from 'react'

const Basic2 = () => {

    const [products, setProducts] = useState([])
    const newProduct = () => {
        setProducts([...products, {
            id: products.length,
            name: 'Hello React'
        }])
    }
  return (
    <div>
        <button onClick={newProduct}>Add New Product</button>
        <ul>
            {products.map(product => (
                <li key={product.id}>{product.name} id: {product.id}</li>
            ))
            }
        </ul>        
    </div>
  )
}
// export default は一つのファイルに一つだけ
export default Basic2