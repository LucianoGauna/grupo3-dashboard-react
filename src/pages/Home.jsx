import { useFetch } from '../hooks/useFetch';
import { useEffect } from 'react';
import TopMain from '../components/TopMain';
import MiddleMain from '../components/MiddleMain';
import BottomMain from '../components/BottomMain';

const Home = () => {
  return (
    <div className="w-full px-6 py-28 lg:pl-80 p-8 mx-auto">
      <TopMain />  
      <MiddleMain />
      <BottomMain /> 
    </div>
  );
};

export default Home;
