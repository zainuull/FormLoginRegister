import { useEffect, useState, useRef } from 'react';
import { BsGlobe2, BsGoogle, BsApple, BsFacebook } from 'react-icons/bs';
import Button from '../components/Button/Button';
import IconSign from '../components/IconSign/IconSign';
import Image from '../assets/image.png';
import { AuthLogin } from '../services/auth.services';

const Login = () => {
  const usernameRef = useRef(null);
  const [loginFailed, setLoginFailed] = useState()

  const handleLogin = (event) => {
    event.preventDefault();
    const data = {
      username: event.target.username.value,
      password: event.target.password.value,
    };
    AuthLogin(data, (status, res) => {
      if (status) {
        localStorage.setItem("token", res)
        window.location.href = "/product"
      } else {
        setLoginFailed(res.response.data)
      }
    })
  };

  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  return (
    <div className="min-h-screen bg-[var(--primary)] p-10 flex justify-center">
      <div className="bg-orange-100 w-4/5 p-10 rounded-lg flex flex-col items-center gap-y-14">
        <div className="w-full flex justify-end items-center gap-x-6">
          <BsGlobe2 size={20} />
          <h1>Sign Up</h1>
          <Button style="w-[150px] h-[40px] rounded-lg font-semibold">Request Demo</Button>
        </div>
        <div className="flex items-center justify-center gap-x-14">
          {/* Form */}
          <div className="w-[400px] h-[500px] bg-white rounded-lg flex flex-col items-center gap-y-4">
            <h1 className="text-xl font-semibold mt-12">Sign In</h1>
            <p className="w-[220px] text-center font-thin">Hey, Enter your details to login to your account</p>
            <form onSubmit={handleLogin} className="flex flex-col gap-y-4">
              <input id="username" type="text" ref={usernameRef} className="w-[300px] rounded-md border border-black p-2" placeholder="Enter Email / Phone No" />
              <input id="password" type="password" className="w-[300px] rounded-md border border-black p-2" placeholder="Password" />
              <Button style="w-[300px] h-[40px] rounded-lg font-semibold">Sign In</Button>
              <p className="text-red-600 text-center">{loginFailed}</p>
            </form>
            <p className="text-xs">- Or Sign in with -</p>
            <div className="flex gap-x-3">
              <IconSign icon={<BsGoogle />} name="Google" />
              <IconSign icon={<BsApple />} name="Apple" />
              <IconSign icon={<BsFacebook />} name="Meta" />
            </div>
            <p className="font-thin text-xs">
              Don't have an account yet? <span className="font-semibold">Register Now!</span>
            </p>
          </div>
          <div>
            <img src={Image} className="w-[450px] h-[450px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
