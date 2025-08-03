import { useEffect, useState } from "react";
import Filter from "../Components/Filters/Filter";
import Pagination from "../Components/Pagination/Pagination";
import { getAllProducts } from "../Services_Utility/ProductsList_api";
const ProductsList = () => {
  const [product, setProduct] = useState([]);
  const [limit, setLimit] = useState(12);
  const [skip, setSkip] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const fetchProductData = async ({ ...params }) => {
      try {
        const result = await getAllProducts(params);
        const { products, limit, skip, total } = result;
        // Assuming the API returns an object with a 'products' array
        if (!Array.isArray(products)) {
          throw new Error("Invalid product data format");
        }
        console.log("object :>>1 ", total);
        setProduct(products);
        setSkip(skip);
        setTotal(total);
        // setLimit(limit);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };
    fetchProductData({ limit, skip });
  }, [skip]);

  // Loading or error state
  if (!product) return <p>Loading product details...</p>;
  return (
    <div className="container-fluid mt-5">
      <h2 className="text-center">Product List</h2>
      <div className="row">
        <div className="col-lg-3">
          <Filter />
        </div>
        <div className="col-lg-9">
          <div className="row">
            {product.map((product) => (
              <div
                className="col-md-3 col-sm-6 col-12 mt-5 mb-3"
                key={product.id}
              >
                <div
                  key={product.id}
                  className="card g-4 h-100 d-flex flex-column"
                  style={{ width: "18rem" }}
                >
                  <img
                    className="card-img-top"
                    src={product.thumbnail}
                    alt="Card image cap"
                    loading="lazy"
                  />
                  <div className="card-body mt-auto">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#" class="btn btn-primary">
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="justify-content-center d-flex mt-5">
            {total > 0 && (
              <Pagination
                total={total}
                limit={limit}
                skip={skip}
                onPageChange={setSkip}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsList;
