function ProductCart({ product, onAddToCart }) {
  return (
    <article className="product-card">
      <img src={product.image} alt={product.name} />
      <div className="product-info">
        <span className="product-category">{product.category}</span>
        <h3>{product.name}</h3>
        <div className="product-bottom">
          <strong>${product.price}</strong>
          <button type="button" onClick={() => onAddToCart(product)}>
            Add to cart
          </button>
        </div>
      </div>
    </article>
  )
}

export default ProductCart
