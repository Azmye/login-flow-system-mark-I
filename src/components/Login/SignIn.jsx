import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import useStore from '../../Hooks/Store';
import ModalCard from './Modal/ModalCard';

const SignIn = () => {
  document.body.classList = 'bg-slate-100';
  const navigate = useNavigate();
  const [wrongPassword, setWrongPassword] = useState(false);
  const [userNotFound, setUserNotFound] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [userName, setUserName] = useState('');
  const users = useStore((state) => state.users);
  const { user } = users;

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
    if (user === undefined) {
      setUserNotFound(true);
    } else if (userName === user.userName && password === user.password) {
      navigate('/');
    } else if (userName === user.userName && password !== user.password) {
      setWrongPassword(true);
    } else {
      setUserNotFound(true);
    }
  };

  return (
    <div className="w-full h-[100vh] flex justify-center items-center relative">
      <div className="flex flex-col lg:flex-row items-center justify-center">
        <div className="w-1/3 hidden lg:block">
          <div className="px-4 py-5  lg:px-5 lg:py-24 bg-slate-200 lg:rounded-l-lg">
            <h1 className="font-bold text-3xl text-sky-500">Hello, There!</h1>
            <p className="font-semibold text-xl">Sign in to your account!</p>
            <p className="text-lg text-black/70 font-semibold">To be Reminded, that once you create a new account an old one would be replace, you can see the Source Code Here ...</p>
          </div>
        </div>
        <div className="px-4 lg:px-0 lg:w-[412px]">
          <div className="w-[350px] lg:w-full bg-white/80 p-5 rounded-xl shadow-xl shadow-slate-300">
            <h1 className="font-bold text-3xl mb-3">
              WELC<span className="text-sky-400">O</span>ME BACK
            </h1>
            <div>
              <h4 className="text-xl mb-3">SIGN IN</h4>
              <form onSubmit={handleOnSubmit}>
                <div className="mb-3">
                  <input type="text" placeholder="Username" className="w-full outline-none border-b-2 p-4 hover:border-sky-500 focus:border-sky-500" value={userName} onChange={(e) => setUserName(e.target.value)} required />
                </div>
                <div className="flex items-center mb-3 relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
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
                <div className="w-full flex items-center justify-between mb-3">
                  <div className="flex items-center">
                    <input type="checkbox" name="remember-me" />
                    <label htmlFor="remember-me">Remember me</label>
                  </div>
                  <button className="px-4 py-2 bg-sky-400 rounded-lg text-white/80 font-semibold hover:text-white">SIGN IN</button>
                </div>
                <div className="flex justify-center">
                  <Link to={'/password-reset'} className="group">
                    Forgot <span className="group-hover:text-sky-500">password</span>?
                  </Link>
                </div>
              </form>
              <hr className="my-3" />
              <div className="flex justify-center">
                <button className="px-4 py-2 bg-green-500 font-semibold text-white/80 rounded-lg hover:text-white">
                  <Link to={'/signup'}>Create New Account</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {wrongPassword && <ModalCard onClick={(e) => setWrongPassword(false)} infoDetails={'Opps, Wrong Password!'} />}
      {userNotFound && <ModalCard onClick={(e) => setUserNotFound(false)} infoDetails={'User Not Found!'} />}
    </div>
  );
};

export default SignIn;
