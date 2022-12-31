import { Link, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useState } from 'react';
import useStore from '../../Hooks/Store';

const SignUp = () => {
  document.body.classList = 'bg-slate-100';
  const navigate = useNavigate();
  const addUser = useStore((state) => state.addUser);
  const [showPassword, setShowPassword] = useState(false);
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');

  const handleBtnShowPass = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };
  const handlePassOnChange = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const user = {
      firstName,
      lastName,
      email,
      userName,
      password,
    };
    addUser(user);
    navigate('/');
  };

  return (
    <div className="w-full h-[100vh] flex justify-center items-center">
      <div className="px-4 flex lg:justify-center lg:items-center">
        <div className="lg:px-4 py-44 bg-slate-200 rounded-l-lg hidden lg:block"></div>
        <div className="lg:px-0 w-full lg:w-[412px]">
          <div className="bg-white/80 p-5 rounded-xl shadow-xl shadow-slate-300">
            <h1 className="font-bold text-3xl mb-3 uppercase">
              Register N<span className="text-sky-500">o</span>w!
            </h1>
            <div>
              <h4 className="text-xl mb-3">SIGN UP</h4>
              <form onSubmit={handleOnSubmit}>
                <div className="flex gap-3">
                  <input type="text" placeholder="First name" className="w-1/2 outline-none border-b-2 p-4 hover:border-sky-500 focus:border-sky-500 " value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
                  <input type="text" placeholder="Last name" className="w-1/2 outline-none border-b-2 p-4 hover:border-sky-500 focus:border-sky-500 " value={lastName} onChange={(e) => setLastName(e.target.value)} required />
                </div>
                <div className="mb-3">
                  <input type="text" placeholder="Username" className="w-full outline-none border-b-2 p-4 hover:border-sky-500 focus:border-sky-500 " value={userName} onChange={(e) => setUserName(e.target.value)} required />
                </div>
                <div className="mb-3">
                  <input type="email" placeholder="Email" className="w-full outline-none border-b-2 p-4 hover:border-sky-500 focus:border-sky-500 " value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className="flex items-center mb-3 relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    minLength="8"
                    placeholder="New Password"
                    className="w-full outline-none border-b-2 p-4 hover:border-sky-500 focus:border-sky-500 "
                    value={password}
                    onChange={handlePassOnChange}
                    required
                  />
                  {password !== '' && (
                    <div className="absolute right-3">
                      <button onClick={handleBtnShowPass}>{showPassword ? <FaEye size={20} /> : <FaEyeSlash size={20} />}</button>
                    </div>
                  )}
                </div>

                <div className="mb-3">
                  <p className="text-sm">
                    By clicking Sign Up, you agree to our <span className="text-blue-500">Terms and Policy</span>.
                  </p>
                </div>
                <div className="w-full flex items-center justify-between mb-3">
                  <p className="group hover:border-b-2 hover:border-sky-400 cursor-pointer">
                    <Link to={'/signin'}>
                      Click Here to <span className="group-hover:text-sky-500">Return!</span>
                    </Link>
                  </p>
                  <button className="px-4 py-2 bg-sky-400 rounded-lg text-white/80 font-semibold hover:text-white">SIGN UP</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
