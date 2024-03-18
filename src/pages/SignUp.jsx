import React from 'react'
import googleIcon from '/googleIcon.svg'
import travellerImage from '/traveller-1@2x.png'
import { NavigationBar } from '../components/NavigationBar'

function SignUp() {
    const continueClicked = (e) => {
        e.preventDefault()
    }
    const signUpUsWithGoogle = () => {
        
    }
  return (
    <div className="blur-container">
        <NavigationBar />
        <section className="relative top-[10px] left-[300px]  p-5 w-4/12">
        <div className="flex items-center justify-center rounded-3xl bg-white px-4 py-10 ">
            <div className="w-4/5 max-w-md">
            <h2 className="text-[32px] font-karla-bold leading-tight text-[#212B27]">Sign Up</h2>
            <form action="#" method="POST" className="mt-8 font-noto-sans ">
                <div className="space-y-5">
                <div>
                    <label htmlFor="name" className="text-base font-noto-sans text-gray-900">
                    {' '}
                    Full Name{' '}
                    </label>
                    <div className="mt-2">
                    <input
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 placeholder:font-noto-sans focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 cursor-text"
                        type="text"
                        placeholder="Full Name"
                        id="name"
                        ></input>
                    </div>
                </div>
                <div className="flex justify-between">
                    <div>
                    <label htmlFor="city" className="text-base text-gray-900">
                    {' '}
                    City{' '}
                    </label>
                    <div className="mt-2">
                    <input
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 placeholder:font-noto-sans focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        type="text"
                        placeholder="City"
                        id="city"
                        ></input>
                    </div>

                    </div>
                    <div>
                        <label htmlFor="state" className="text-base text-gray-900">
                        {' '}
                        State{' '}
                        </label>
                        <div className="mt-2">
                        <input
                            className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 placeholder:font-noto-sans focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                            type="text"
                            placeholder="State"
                            id="state"
                            ></input>
                        </div>
                    </div>
                </div>
                <div>
                    <label htmlFor="mobile" className="text-base text-gray-900">
                    
                    Mobile Number
                    </label>
                    <div className="mt-2">
                    <input
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 placeholder:font-noto-sans focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        type="mobile"
                        placeholder="+91"
                        id="mobile"
                        ></input>
                    </div>
                </div>
                <div>
                    <label htmlFor="email" className="text-base text-gray-900">
                    
                    Email address
                    </label>
                    <div className="mt-2">
                    <input
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 placeholder:font-noto-sans focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        type="email"
                        placeholder="Email"
                        id="email"
                        ></input>
                    </div>
                </div>
                <div>
                    <div className="flex items-center justify-between">
                    <label htmlFor="password" className="text-base  text-gray-900">
                        {' '}
                        Password{' '}
                    </label>
                    </div>
                    <div className="mt-2">
                    <input
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 placeholder:font-noto-sans focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        type="password"
                        placeholder="Password"
                        id="password"
                        ></input>
                    </div>
                </div>
                <div>
                    <div className="flex items-center justify-between">
                    <label htmlFor="password" className="text-base text-gray-900">
                        {' '}
                        Confirm Password{' '}
                    </label>
                    </div>
                    <div className="mt-2">
                    <input
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 placeholder:font-noto-sans focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        type="password"
                        placeholder="Confirm Password"
                        id="password"
                        ></input>
                    </div>
                </div>
                    <div>
                        <p className="mt-2 text-base font-poppins text-gray-600">
                            Already have an account?{' '}
                            <a
                            href="#"
                            title=""
                            className="font-poppins text-[#FF477E] transition-all duration-200 "
                            >
                            Sign In
                            </a>
                        </p>
                        <div className="mt-3 space-y-3">
                            <button
                            type="button"
                            onClick={signUpUsWithGoogle}
                            className="relative inline-flex w-9/12 items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-poppins text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
                            >
                            <span className="mr-2 inline-block ">
                                <img src={googleIcon} alt="google icon" />
                            </span>
                            Sign up with Google
                            </button>
                        <button
                        type="button"
                        onClick={continueClicked}
                        className="inline-flex w-9/12 items-center justify-center rounded-md bg-[#FF477E] px-3.5 py-2.5 font-poppins leading-7 text-white hover:bg-[#FF477E]/80"
                        >
                        Continue
                        </button>
                        </div>
                    </div>
                </div>
            </form>
            
            </div>
            </div>
        </section>
        <img
        className="absolute top-[140px] left-[752px] w-[1018px] h-[1016px] object-cover "
        alt=""
        src={travellerImage}
      />
    </div>
  )
}
export default SignUp