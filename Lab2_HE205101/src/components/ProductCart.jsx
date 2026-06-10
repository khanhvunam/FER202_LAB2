import { useState } from 'react'

function ProductCart({ product, onAddToCart }) {
  const [isAdded, setIsAdded] = useState(false)

  const handleAddToCart = () => {
    if (isAdded) {
      return
    }

    onAddToCart(product)
    setIsAdded(true)
  }

  return (
    <article className="product-card">
      <img src={product.image} alt={product.name} />
      <div className="product-info">
        <span className="product-category">{product.category}</span>
        <h3>{product.name}</h3>
        <div className="product-bottom">
          <strong>${product.price}</strong>
          <button
            type="button"
            className={isAdded ? 'added-button' : ''}
            onClick={handleAddToCart}
            disabled={isAdded}
          >
            {isAdded ? 'Added' : 'Add to cart'}
          </button>
        </div>
      </div>
    </article>
  )
}

export default ProductCart
