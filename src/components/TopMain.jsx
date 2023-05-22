import { FaShoppingBasket, FaUser } from 'react-icons/fa';
import { BiCategory } from 'react-icons/bi';
import { useFetch } from '../hooks/useFetch';
import { useFetchUsers } from '../hooks/useFetchUsers';

const TopMain = () => {
	const [products, info] = useFetch('http://localhost:3003/api/products');
  const [users, usersInfo] = useFetchUsers('http://localhost:3003/api/users');

	const topDivsStyles =
    'w-full max-w-full px-3 mb-6 sm:w-1/2 sm:flex-none xl:mb-0 xl:w-1/4';
  const internalTopDivsStyles =
    'relative flex flex-col min-w-0 break-words bg-[#383D49] shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border';

	return (
		<div className="flex flex-wrap -mx-3">
        <div className={topDivsStyles}>
          <div className={internalTopDivsStyles}>
            <div className="flex-auto p-4">
              <div className="flex flex-row -mx-3">
                <div className="flex-none w-2/3 max-w-full px-3">
                  <p className="mb-0 font-sans font-semibold leading-normal uppercase text-white text-sm">
                    Total de Productos
                  </p>
                  <h5 className="mb-2 font-bold text-2xl text-[#ADB0BB]">
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
                  <h5 className="mb-2 font-bold text-2xl text-[#ADB0BB]">
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
                  <h5 className="mb-2 text-2xl font-bold text-[#ADB0BB]">
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
                  <h5 className="mb-2 text-2xl font-bold text-[#ADB0BB]">4</h5>
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
	)
}

export default TopMain