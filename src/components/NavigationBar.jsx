'use client'

import React from 'react'

export function NavigationBar() {
    const onSignUpClick = () => {

    }
  return (
    <div className="relative w-full bg-white">
        <div className="mt-10 flex max-w-7xl items-center justify-between px-10 py-2 sm:px-6 lg:px-8">
            <div className="inline-flex items-center space-x-2">
                <span className="font-volkhov text-21xl">WanderSolo</span>
                <div className="relative top-[20px] left-[-120px] rounded-6xs bg-papayawhip w-[84px] h-3" />
                <div className="relative top-[-25px] left-[-163px] rounded-6xs bg-papayawhip w-5 h-3" />
                <div className="relative top-[20px] left-[-320px] rounded-6xs bg-papayawhip w-5 h-3" />
            </div>
            <div className="space-x-5 relative left-[600px]">
                <button
                    type="button"
                    className="px-3 py-2 font-abhaya-libre-medium cursor-pointer bg-white text-3xl-6 box-border rounded-[7px] border-[0.25px]  border-gray-500"
                    onClick={onSignUpClick}
                >
                    Sign Up
                </button>
                <button
                    type="button"
                    className="rounded-md font-abhaya-libre-medium  px-3 py-2 cursor-pointer bg-white text-3xl-6"
                >
                    Log In
                </button>
            </div>

        </div>
    </div>
  )
}
