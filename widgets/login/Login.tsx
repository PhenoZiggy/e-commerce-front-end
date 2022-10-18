import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import LoginBackground from '../../public/img/login.png';
import bg from '../../public/img/login.png';
import Google from '../../public/img/google.png';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import FacebookIcon from '@mui/icons-material/Facebook';
import LockIcon from '@mui/icons-material/Lock';
import Router from 'next/router';

const Login = () => {
  const onSubmit = (e: any) => {
    e.preventDefault();
    Router.push('/');
  };
  return (
    <div className="flex bg-white/40 rounded-2xl flex-col md:flex-row">
      <div className="flex-1 mx-auto">
        <div
          className={['relative', 'md:w-full', 'w-full', 'md:h-full', 'h-1/4', 'bg-center', 'bg-cover'].join(' ')}
          style={{
            backgroundImage: `url(${LoginBackground.src})`,
          }}
        ></div>
      </div>
      <div className="bg-white flex-1 rounded-lg md:rounded-none">
        <section className="md:py-28 md:px-14 py-10 px-3 space-y-4 rounded-lg">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold">Get's started.</h3>
            <span className="flex space-x-2">
              <p className="text-gray-400">Already have a account?</p>
              <Link href="/">
                <p className="text-[#3AA39F] cursor-pointer">Log In</p>
              </Link>
            </span>
          </div>
          <div className="flex space-x-2">
            <div className="flex-1 bg-gray-50 hover:bg-gray-100 rounded-md border border-gray-200 cursor-pointer py-2 flex items-center justify-center space-x-2 px-3">
              <Image src={Google} width="30" height="30" />
              <span>Sign up with Google</span>
            </div>
            <div className="flex-1 bg-[#4267B2] hover:bg-[#4267B6] rounded-md border border-gray-200 cursor-pointer py-2 flex items-center justify-center space-x-2 px-2">
              <FacebookIcon className="w-6 text-white" /> <span className=" text-white">Sign up with Facebook</span>
            </div>
          </div>
          <div>
            <hr />
          </div>
          <form className="space-y-5" onSubmit={onSubmit}>
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <div className="relative mt-1 rounded-md shadow-sm">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <MailOutlineIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="block w-full rounded-md border-gray-300 pl-10 duration-200 focus:outline-[#3AA39F] outline-none sm:text-sm py-4"
                  placeholder="you@example.com"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="relative mt-1 rounded-md shadow-sm">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <LockIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="block w-full rounded-md border-gray-300 pl-10 duration-200 focus:outline-[#3AA39F] outline-none sm:text-sm py-4"
                  placeholder="password"
                  required
                />
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <div className="flex h-5 items-center space-x-2">
                  <input
                    id="agree"
                    aria-describedby="comments-description"
                    name="agree"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-[#3AA39F]"
                    required
                  />
                  <div>
                    <span className="text-gray-400 font-light">I agree to Platform's </span> <span className="text-[#3AA39F] ">Terms of Service </span>{' '}
                    <span className="font-light text-gray-400">and </span>
                    <span className="text-[#3AA39F]">Privacy Policy</span>
                  </div>
                </div>
              </div>
              <div>
                <input
                  type="submit"
                  value="Register"
                  className="inline-flex items-center justify-center rounded-md border border-transparent bg-[#3AA39F] px-4 py-3 text-sm font-medium w-full text-white shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-700 focus:ring-offset-2"
                />
              </div>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Login;
