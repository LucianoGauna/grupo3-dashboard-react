import { Link } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';

const Cards = () => {
  const [products] = useFetch(`http://localhost:3003/api/products`);

  return (
    <div className="pt-28">
      <h1 className="text-4xl text-[#E6E5E8] font-bold mb-10">Productos</h1>
      <div className="text-gray-300 grid grid-cols-1 gap-8 ">
        {products?.length > 0 &&
          products.map((product, index) => (
            <div
              className="bg-[#282C34] shadow-lg p-8 flex flex-col items-center justify-between xl:flex-row rounded-xl w-full sm:w-auto"
              key={product.id}
            >
              <div className="mb-4">
                <p className="max-w-md text-[#E6E5E8] mx-auto font-bold overflow-hidden md:max-w-2xl">
                  {product.name}
                </p>
              </div>
              <div className="mb-4">
                <img
                  src={`http://localhost:3003/api/products/${product.id}`}
                  alt={product.name}
                  className="max-w-md mx-auto"
                />
              </div>
              <div className="flex justify-between text-[#ADB0BB] mb-4">
                Categoría: <p className="ml-2">{product.categories.name}</p>
              </div>
              <Link to={`/products/productDetail/${product.id}`}>
                <button
                  type="button"
                  className="bg-[#FB9678] text-white py-2 px-8 rounded-lg hover:bg-[#ED7B5A] transition-colors"
                >
                  Ver
                </button>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Cards;
