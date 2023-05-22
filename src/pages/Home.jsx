import { Link, useParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import { useFetchUsers } from '../hooks/useFetchUsers';
import { useEffect } from 'react';
import { FaShoppingBasket, FaUser } from 'react-icons/fa';
import { BiCategory } from 'react-icons/bi';

const Home = () => {
  const [products, info] = useFetch('http://localhost:3003/api/products');
  const [users, usersInfo] = useFetchUsers('http://localhost:3003/api/users');

  const topDivsStyles =
    'w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4';
  const internalTopDivsStyles =
    'relative flex flex-col min-w-0 break-words bg-[#282C34] shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border';

  return (
    <div className="w-full px-6 py-28 lg:pl-80 p-8 mx-auto">
      <div className="flex flex-wrap -mx-3">
        <div className={topDivsStyles}>
          <div className={internalTopDivsStyles}>
            <div className="flex-auto p-4">
              <div className="flex flex-row -mx-3">
                <div className="flex-none w-2/3 max-w-full px-3">
                  <p className="mb-0 font-sans font-semibold leading-normal uppercase text-white text-sm">
                    Total de Productos
                  </p>
                  <h5 className="mb-2 font-bold text-[#ADB0BB]">
                    {info && info.count}
                  </h5>
                </div>
                <div className="px-3 text-right basis-1/3">
                  <div className="inline-block w-12 h-12 text-center rounded-full bg-[#FB9678]">
                    <FaShoppingBasket className="text-lg relative top-3.5 left-3.5 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={topDivsStyles}>
          <div className={internalTopDivsStyles}>
            <div className="flex-auto p-4">
              <div className="flex flex-row -mx-3">
                <div className="flex-none w-2/3 max-w-full px-3">
                  <p className="mb-0 font-sans font-semibold leading-normal uppercase text-white text-sm">
                    Total Categorías
                  </p>
                  <h5 className="mb-2 font-bold text-[#ADB0BB]">
                    {info &&
                      info.countByCategory &&
                      Object.keys(info.countByCategory).length}
                  </h5>
                </div>
                <div className="px-3 text-right basis-1/3">
                  <div className="inline-block w-12 h-12 text-center rounded-full bg-[#03C9D7]">
                    <BiCategory className="text-lg relative top-3.5 left-3.5 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={topDivsStyles}>
          <div className={internalTopDivsStyles}>
            <div className="flex-auto p-4">
              <div className="flex flex-row -mx-3">
                <div className="flex-none w-2/3 max-w-full px-3">
                  <p className="mb-0 font-sans font-semibold leading-normal text-white uppercase text-sm">
                    Usuarios registrados
                  </p>
                  <h5 className="mb-2 font-bold text-[#ADB0BB]">
                    {usersInfo && usersInfo.count}
                  </h5>
                </div>
                <div className="px-3 text-right basis-1/3">
                  <div className="inline-block w-12 h-12 text-center rounded-full bg-[#FB9678]">
                    <FaUser className="text-lg relative top-3.5 left-3.5 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={topDivsStyles}>
          <div className={internalTopDivsStyles}>
            <div className="flex-auto p-4">
              <div className="flex flex-row -mx-3">
                <div className="flex-none w-2/3 max-w-full px-3">
                  <p className="mb-0 font-sans font-semibold leading-normal uppercase text-white text-sm">
                    Total de marcas
                  </p>
                  <h5 className="mb-2 font-bold text-[#ADB0BB]">4</h5>
                </div>
                <div className="px-3 text-right basis-1/3">
                  <div className="inline-block w-12 h-12 text-center rounded-full bg-[#03C9D7]">
                    <i></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap mt-6 -mx-3">
        <div className="w-full max-w-full px-3 mt-0 mb-6 lg:mb-0 lg:w-7/12 lg:flex-none">
          <div className="relative flex flex-col min-w-0 break-words bg-[#282C34] border-0 border-solid shadow-xl border-black-125 rounded-2xl bg-clip-border">
            <div className="p-4 pb-0 mb-0 rounded-t-4">
              <div className="flex justify-between">
                <h6 className="mb-2 text-white">Últimos productos creados</h6>
              </div>
            </div>
            {products?.length > 0 &&
              products.slice(-4).map(product => (
                <div className="overflow-x-auto ps">
                  <table className="items-center w-full mb-4 align-top border-collapse border-gray-200 ">
                    <tbody>
                      <tr>
                        <td className="p-2 align-middle bg-transparent border-b w-3/10 whitespace-nowrap ">
                          <div className="flex items-center px-2 py-1">
                            <div className="ml-6">
                              <p className="mb-0 font-semibold leading-tight text-[#ADB0BB] text-xs ">
                                {product.name}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="p-2  bg-transparent border-b whitespace-nowrap">
                          <div className="text-center">
                            <p className="mb-0 font-semibold leading-tight text-[#ADB0BB] text-xs ">
                              {product.categories.name}
                            </p>
                          </div>
                        </td>
                        <td className="p-2 leading-normal align-middle bg-transparent border-b text-sm whitespace-nowrap">
                          <div className="text-center">
                            <p className="mb-0 font-semibold leading-tight text-[#ADB0BB] text-xs ">
                              Precio
                            </p>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              ))}
          </div>
        </div>
        <div className="w-full max-w-full px-3 mt-0 lg:w-5/12 lg:flex-none">
          <div className="border-black/12.5 shadow-xl relative flex min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-[#282C34] bg-clip-border">
            <div className="flex justify-between">
              <div className="p-4 pb-0 text-center rounded-t-4">
                <h6 className="mb-0 text-white ">Categorías</h6>
              </div>
              <div className="p-4 pb-0 text-center rounded-t-4">
                <h6 className="mb-0 text-white ">Productos</h6>
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
    </div>
  );
};

export default Home;
