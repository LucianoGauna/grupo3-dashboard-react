import { Link, useParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';

const ProductDetail = () => {
  const { id } = useParams();
  const [products] = useFetch(`http://localhost:3003/api/products`);
  console.log(id);

  // Verificamos si no se encontró ningún producto
  if (!products || products.length === 0) {
    return <p>No product found</p>;
  }

  // Buscamos el producto que coincide con el ID de la URL
  const productId = parseInt(id);
  const product = products.find(product => product.id === productId);

  return (
    <div className="flex flex-col h-screen items-center justify-center">
      <div className="bg-[#282C34] shadow-lg p-8 rounded-xl">
        <div className="px-5 pb-5 flex flex-col items-center justify-center">
          <div className="mb-4">
            <p className="max-w-md text-[#E6E5E8] mx-auto font-bold overflow-hidden md:max-w-2xl">
              {product.name}
            </p>
          </div>
          <img
            className="p-8 rounded-t-lg"
            src={product.image}
            alt="product image"
          />
          <div className="flex items-center mb-6 justify-between">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">
              $546
            </span>
          </div>
          <div>
            <Link to="/products">
              <button
                type="button"
                className="bg-[#FB9678] text-white py-2 px-8 rounded-lg hover:bg-[#ED7B5A] transition-colors"
              >
                Volver
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
