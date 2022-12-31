import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useStore from '../Hooks/Store';

const Home = () => {
  document.body.classList = 'bg-slate-100';
  const navigate = useNavigate();
  const users = useStore((state) => state.users);
  const [loading, setLoading] = useState(true);
  const { user } = users;
  return (
    <div className="container mx-auto">
      <section id="dashboard" className="px-4">
        <div className="w-full my-5 mx-auto lg:w-1/2 bg-slate-200 rounded-lg overflow-hidden">
          <div className="bg-slate-300 px-4 py-2 flex justify-between items-center">
            <h2 className="font-semibold">Dashboard</h2>
            <button className="bg-red-500 px-2 py-1 rounded-lg text-white">
              <Link to={'/signin'}>Sign Out</Link>
            </button>
          </div>
          <div className="p-4">
            <p>{user !== undefined || null ? `Hello, ${user.userName}` : <Link to={'/signin'}>Click Here To Sign in</Link>}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
