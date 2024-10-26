import Layout from "../Layouts/layout";

const ProductDetail = () => {

    return (
        <Layout>
            <div className="product-detail">
                <div className="product-detail__image">
                    <img src="https://via.placeholder.com/150" alt="product" />
                </div>
                <div className="product-detail__info">
                    <h1>Product Name</h1>
                    <p>Product Description</p>
                    <p>Price: $10.00</p>
                    <button>Add to Cart</button>
                </div>
            </div>
        </Layout>
    )
}

export default ProductDetail;