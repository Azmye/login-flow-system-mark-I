import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <header className="bg-slate-300 text-black/80 font-semibold">
      <div className="px-4 lg:px-0 container mx-auto">
        <div className="py-4 flex justify-between">
          <div>
            <h1 className="">Homepage</h1>
          </div>
          <nav>
            <ul className="flex gap-1">
              <li>
                <NavLink>Home</NavLink>
              </li>
              <li>
                <NavLink>Pricing</NavLink>
              </li>
              <li>
                <NavLink>About</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
