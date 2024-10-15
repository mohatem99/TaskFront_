import React from 'react'
import Notifications from '../../components/Notifications'
import SearchAdd from '../../components/SearchAdd'
export default function Navbar() {
  return (
    <div className="relative flex flex-col z-10 bg-white sticky top-0 md:sticky md:top-0 gap-4 p-2 sm:flex-col sm:gap-5 sm:mb-3  md:flex-row md:gap-5 md:mb-3 lg:flex-row lg:gap-5 justify-between">
            <div className="flex flex-col order-0 ml-2 ">
                <div className="basis-1/4">
                  <strong className="text-gray-400">Hello ,Jessica</strong>
                </div>
                <div className="basis-1/4">
                  <strong className="text-darkest hidden sm:block">You’ve got 8 tasks today</strong>
                </div>
            </div>
    
            <div className='order-last sm:order-last md:order-1 lg:order-1 '>
            <SearchAdd/>
            </div>
    
            <div className="hidden lg:block basis-36 order-2"></div>
    
               <div className='flex flex-cols-2 gap-1 sticky top-0  order-4 sm:order-2 bg-white '>        
                  <div className='flex flex-row items-center'>
                            <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-[19px] dark:bg-gray-600">
                                <svg className="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
                            </div>
                            <div>
                                <div className="font-bold text-darkest">Jessica Smith</div>
                                <div className="text-gray-500 text-sm">Jessica@gmail.com</div>
                            </div>
                  </div>
    
                  {/* notifications */}
                  <div className='flex-shrink-0 mt-2'>
                  <Notifications/>
                  </div>
    
               </div>
               
    
        </div>
      )
}
