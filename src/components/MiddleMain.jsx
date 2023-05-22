import { useFetch } from "../hooks/useFetch";

const MiddleMain = () => {
  const [products, info] = useFetch('http://localhost:3003/api/products');

  return (
    <div className="flex flex-wrap mt-6 -mx-3">
      <div className="flex-grow text-center max-w-full px-3 mt-0 mb-6 lg:w-1/2 lg:flex-none">
        <div className="border-black/12.5 shadow-xl relative flex min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-[#383D49] bg-clip-border">
          <div className="p-4 pb-3 text-center rounded-t-4">
            <h6 className="mb-0 text-white inline-flex rounded bg-[#13C296] py-1 px-2 text-sm font-medium text-white hover:bg-opacity-90">
              Último producto añadido
            </h6>
          </div>
          <div className="flex items-center justify-center">
            {products && products.length > 0 && (
              <img
                src={`http://localhost:3003/images/products/${
                  products[products.length - 1].images[0].name
                }`}
                alt={products[products.length - 1].name}
                className="object-contain w-48 h-auto"
              />
            )}
          </div>
          <div className="p-6">
            <h4 className="mb-3 text-xl font-semibold text-black dark:text-white">
              {products?.length > 0 && products[products.length - 1].name}
            </h4>
            <p className="font-medium text-[#ADB0BB]">
              {products?.length > 0 &&
                products[products.length - 1].description}
            </p>
          </div>
        </div>
      </div>

      <div className="flex-grow max-w-full px-3 mt-0 lg:w-1/2 lg:flex-none">
        <div className="border-black/12.5 shadow-xl relative flex min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-[#383D49] bg-clip-border">
          <div className="flex justify-between">
            <div className="p-4 pb-0 text-center rounded-t-4">
              <h6 className="mb-0 text-white inline-flex rounded bg-[#13C296] py-1 px-2 text-sm font-medium text-white hover:bg-opacity-90">
                Categorías
              </h6>
            </div>
            <div className="p-4 pb-0 text-center rounded-t-4">
              <h6 className="mb-0 text-white inline-flex rounded bg-[#13C296] py-1 px-2 text-sm font-medium text-white hover:bg-opacity-90">
                Productos
              </h6>
            </div>
          </div>
          {products?.length > 0 && (
            <div className="flex">
              <div className="flex-1 p-4">
                <ul className="flex flex-col pl-0 mb-0 rounded-lg">
                  {Array.from(
                    new Set(products.map(product => product.categories.name))
                  ).map(category => (
                    <li
                      key={category}
                      className="relative flex justify-between py-2 pr-4 mb-2 border-0 rounded-t-lg rounded-xl text-inherit"
                    >
                      <div className="flex items-center">
                        <h6 className="mb-1 leading-normal text-sm text-[#ADB0BB]">
                          {category}
                        </h6>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex p-4">
                <ul className="flex flex-col pl-0 mb-0 rounded-lg">
                  {info?.countByCategory &&
                    Object.entries(info.countByCategory).map(
                      ([category, count]) => (
                        <li
                          key={category}
                          className="relative flex justify-between py-2 pr-4 mb-2 border-0 rounded-t-lg rounded-xl text-inherit"
                        >
                          <div className="flex items-center">
                            <h6 className="mb-1 leading-normal text-sm text-[#ADB0BB]">
                              {count}
                            </h6>
                          </div>
                        </li>
                      )
                    )}
                </ul>
              </div>
            </div>
          )}
          <div>
            <h1></h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiddleMain;
