import { useFetch } from "../hooks/useFetch";

const BottomMain = () => {
  const [products, info] = useFetch('http://localhost:3003/api/products');

  return (
    <div className="w-full max-w-full mt-6 mb-6 lg:mb-0 overflow-x-auto ps">
      <div className="relative flex flex-col min-w-0 break-words bg-[#383D49] border-0 border-solid shadow-xl border-black-125 rounded-2xl bg-clip-border">
        <div className="p-4 pb-0 mb-0 rounded-t-4">
          <div className="text-center">
            <h6 className="mb-2 text-white inline-flex rounded bg-[#13C296] py-1 px-2 text-sm font-medium text-white hover:bg-opacity-90">
              Listado de productos
            </h6>
          </div>
        </div>
        <div className="overflow-x-auto">
          {products?.length > 0 && (
            <table className="items-center w-full mb-4 align-top border-collapse border-gray-200">
              <tbody>
                {products.map(product => (
                  <tr key={product.id}>
                    <td className="p-2 align-middle bg-transparent border-b w-3/10 whitespace-nowrap">
                      <div className="flex items-center px-2 py-1">
                        <div className="ml-6">
                          <p className="mb-0 font-semibold leading-tight text-[#ADB0BB] text-xs">
                            {product.name}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="p-2 bg-transparent border-b w-2/10 whitespace-nowrap">
                      <div className="text-center">
                        <p className="mb-0 font-semibold leading-tight text-[#ADB0BB] text-xs">
                          {product.categories.name}
                        </p>
                      </div>
                    </td>
                    <td className="p-2 leading-normal align-middle bg-transparent border-b w-2/10 whitespace-nowrap">
                      <div className="text-center">
                        <p className="mb-0 font-semibold leading-tight text-[#ADB0BB] text-xs">
                          ${product.price}
                        </p>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default BottomMain;
