import ProductCart from './ProductCart'

function ProductList({ products, onAddToCart }) {
  return (
    <section className="product-section" id="products">
      <div className="section-heading">
        <span>New collection</span>
        <h2>Featured fashion picks</h2>
      </div>

      <div className="product-grid">
        {products.map((product) => (
          <ProductCart
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </section>
  )
}

export default ProductList
