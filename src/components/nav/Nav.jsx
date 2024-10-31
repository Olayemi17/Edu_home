 'use client'
 import "./nav.css"
 import { useState } from 'react'
 import {
   Dialog,
   DialogPanel,
   Disclosure,
   DisclosureButton,
   DisclosurePanel,
   Popover,
   PopoverButton,
   PopoverGroup,
   PopoverPanel,
 } from '@headlessui/react'
 import {
   ArrowPathIcon,
   Bars3Icon,
   ChartPieIcon,
   CursorArrowRaysIcon,
   FingerPrintIcon,
   SquaresPlusIcon,
   XMarkIcon,
 } from '@heroicons/react/24/outline'
 import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'

 const products = [
   { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
   { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
   { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
   { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
   { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
 ]
 const callsToAction = [
   { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
   { name: 'Contact sales', href: '#', icon: PhoneIcon },
 ]

 export default function Nav() {
   const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

   return (
     <> 
     <div className="container fixed sm:-mt-4 -mt-6">
             <div className="main-circle sm:absolute -mt-32 pt-1 -ml-9 sm:-mt-40">
                 <div className="circle1"></div>
                 <div className="circle2"></div><span className="educax">Educax</span>
              </div>
      
     <header className="container relat sm:-mt-40 pt-1 -mt-16">
       <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
         <div className="flex lg:flex-1">
         </div>
         <div className="flex lg:hidden">
           <button
             type="button"
             onClick={() => setMobileMenuOpen(true)}
             className="btn -m-2.5 inline-flex items-center justify-center rounded-md p-3 text-white"
           >
             <span className="sr-only">Open main menu</span>
             <Bars3Icon aria-hidden="true" className="h-6 w-6"/>
           </button>
         </div>
         <PopoverGroup className="hidden lg:flex lg:gap-x-9 mt-3 -ml-6">
           <Popover className="relative">
             <PopoverButton className="flex items-center gap-5 text-xl font-semibold leading-6 text-white">
               Homes +
             </PopoverButton>
             <PopoverPanel
               transition
               className="absolute -left-8 top-full z-10 mt-3 h-52  w-52 overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-white/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
             >
               <div className="p-4">
                       <p className="text-gray-600 hover:bg-gray-200 leading-9 p-1 text-lg cursor-pointer font-semibold">Homes 1</p>
                       <p className="text-gray-600 hover:bg-gray-200 leading-9 p-1 text-lg cursor-pointer font-semibold">Homes 2</p>
                       <p className="text-gray-600 hover:bg-gray-200 leading-9 p-1 text-lg cursor-pointer font-semibold">Homes 3</p>
                       <p className="text-gray-600 hover:bg-gray-200 leading-9 p-1 text-lg cursor-pointer font-semibold">Homes 4</p>
                     {/* </div> */}
                   </div>
             </PopoverPanel>
           </Popover>

           <Popover className="relative">
             <PopoverButton className="flex items-center gap-5 text-xl font-semibold leading-6 text-white">
               Courses +
             </PopoverButton>
             <PopoverPanel
               transition
               className="absolute -left-8 top-full z-10 mt-3 h-64  w-56 overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-white/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
             >
               <div className="p-4 -mt-3">
                       <p className="text-gray-600 hover:bg-gray-200 leading-10 p-1 text-lg cursor-pointer font-semibold">Courses</p>
                       <p className="text-gray-600 hover:bg-gray-200 leading-10 p-1 text-lg cursor-pointer font-semibold">Courses Details</p>
                       <p className="text-gray-600 hover:bg-gray-200 leading-10 p-1 text-lg cursor-pointer font-semibold">Courses Category</p>
                       <p className="text-gray-600 hover:bg-gray-200 leading-10 p-1 text-lg cursor-pointer font-semibold">Mentors</p>
                       <p className="text-gray-600 hover:bg-gray-200 leading-10 p-1 text-lg cursor-pointer font-semibold">Mentors Details</p>
                   </div>
             </PopoverPanel>
           </Popover>

           <Popover className="relative">
             <PopoverButton className="flex items-center gap-5 text-xl font-semibold leading-6 text-white">
               Blogs +
             </PopoverButton>
             <PopoverPanel
               transition
               className="absolute -left-8 top-full z-10 mt-3 h-40  w-56 overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-white/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
             >
               <div className="p-4 -mt-3">
                       <p className="text-gray-600 hover:bg-gray-200 leading-10 p-1 text-lg cursor-pointer font-semibold">Blogs</p>
                       <p className="text-gray-600 hover:bg-gray-200 leading-10 p-1 text-lg cursor-pointer font-semibold">Blogs 2</p>
                       <p className="text-gray-600 hover:bg-gray-200 leading-10 p-1 text-lg cursor-pointer font-semibold">Blog Details</p>
                   </div>
             </PopoverPanel>
           </Popover>
           <Popover className="relative">
             <PopoverButton className="flex items-center gap-5 text-xl font-semibold leading-6 text-white">
               Pages +
             </PopoverButton>
             <PopoverPanel
               transition
               className="absolute -left-8 top-full z-10 mt-3 h-auto  w-56 overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-white/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
             >
               <div className="p-4 -mt-3">
                       <p className="text-gray-600 hover:bg-gray-200 leading-10 p-1 text-lg cursor-pointer font-semibold">About Us</p>
                       <p className="text-gray-600 hover:bg-gray-200 leading-10 p-1 text-lg cursor-pointer font-semibold">Gallery</p>
                       <p className="text-gray-600 hover:bg-gray-200 leading-10 p-1 text-lg cursor-pointer font-semibold">Cart</p>
                       <p className="text-gray-600 hover:bg-gray-200 leading-10 p-1 text-lg cursor-pointer font-semibold">Checkout</p>
                       <p className="text-gray-600 hover:bg-gray-200 leading-10 p-1 text-lg cursor-pointer font-semibold">Sign Up</p>
                       <p className="text-gray-600 hover:bg-gray-200 leading-10 p-1 text-lg cursor-pointer font-semibold">Sign In</p>
                       <p className="text-gray-600 hover:bg-gray-200 leading-10 p-1 text-lg cursor-pointer font-semibold">Reset Password</p>
                       <p className="text-gray-600 hover:bg-gray-200 leading-10 p-1 text-lg cursor-pointer font-semibold">404 Error</p>
                       
                   </div>
             </PopoverPanel>
           </Popover>
           <a href="#" className="text-xl font-semibold leading-6 text-white">
           Contact Us +
           </a>
         </PopoverGroup>


         
         <div className="hidden -mt-14 lg:flex lg:flex-1 lg:justify-end">
           <a href="#" className="sign p-5 w-36 absolute h-16  text-center rounded-full text-lg font-medium leading-6 text-black">
             Sign Up
           </a>
         </div>
       </nav>
       <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
         <div className="fixed inset-0 z-10"/>
         <DialogPanel className="fixed inset-y-0 right-0 z-10  overflow-y-auto bg-white px-6 py-6 w-11/12 sm:ring-1 sm:ring-white/10">
           <div className="flex items-center justify-between">
           <div className="container -mt-4 -ml-9">
             <div className="main-circle">
                 <div className="circle1"></div>
                 <div className="circle2"></div><span className="educax">Educax</span>
              </div>
      </div>
             <button
               type="button"
               onClick={() => setMobileMenuOpen(false)}
               className="-m-2.5 -mt-3 rounded-md p-2.5 text-black"
             >
               <XMarkIcon aria-hidden="true" className="h-6 w-6" />
             </button>
           </div>
           <div className="mt-6 flow-root">
             <div className="-my-6">
               <div className="space-y-2 py-6">
                 <Disclosure as="div" className="-mx-3 mt-3">
                   <DisclosureButton className="group divide-y divide-gray-400 flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-6 text-black hover:bg-gray-50">
                     Homes +
                   </DisclosureButton>
                   <DisclosurePanel className="mt-2 space-y-2">
                     <div className="p-4 -mt-3 divide-y divide-gray">
                       <p className="text-gray-600 leading-10 p-1 text-lg cursor-pointer font-semibold">Home 1</p>
                       <p className="text-gray-600 leading-10 p-1 text-lg cursor-pointer font-semibold">Home 2</p>
                       <p className="text-gray-600 leading-10 p-1 text-lg cursor-pointer font-semibold">Home 3</p>
                       <p className="text-gray-600 leading-10 p-1 text-lg cursor-pointer font-semibold">Home 4</p>
                   </div>
                   </DisclosurePanel>
                     
                 </Disclosure><hr />
                 
                
                 <Disclosure as="div" className="-mx-3">
                   <DisclosureButton className="group divide-y divide-gray-400 flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-6 text-black hover:bg-gray-50">
                     Courses +
                   </DisclosureButton>
                   <DisclosurePanel className="mt-2 space-y-2">
                   <div className="p-4 -mt-3 divide-y divide-gray-500/10">
                       <p className="text-gray-600 hover:bg-gray-200 leading-10 p-1 text-lg cursor-pointer font-semibold">Courses</p>
                       <p className="text-gray-600 hover:bg-gray-200 leading-10 p-1 text-lg cursor-pointer font-semibold">Courses Details</p>
                       <p className="text-gray-600 hover:bg-gray-200 leading-10 p-1 text-lg cursor-pointer font-semibold">Courses Category</p>
                       <p className="text-gray-600 hover:bg-gray-200 leading-10 p-1 text-lg cursor-pointer font-semibold">Mentors</p>
                       <p className="text-gray-600 hover:bg-gray-200 leading-10 p-1 text-lg cursor-pointer font-semibold">Mentors Details</p>
                   </div>
                   </DisclosurePanel>
                     
                 </Disclosure><hr />
                 
                 <Disclosure as="div" className="-mx-3 divide-y divide-gray-500/10">
                   <DisclosureButton className="group divide-y divide-gray-400 flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-6 text-black hover:bg-gray-50">
                     Blogs +
                   </DisclosureButton>
                   <DisclosurePanel className="mt-2 space-y-2">
                   <div className="p-4 -mt-3 divide-y divide-gray-500/10">
                       <p className="text-gray-600 hover:bg-gray-200 leading-10 p-1 text-lg cursor-pointer font-semibold">Blogs</p>
                       <p className="text-gray-600 hover:bg-gray-200 leading-10 p-1 text-lg cursor-pointer font-semibold">Blogs 2</p>
                       <p className="text-gray-600 hover:bg-gray-200 leading-10 p-1 text-lg cursor-pointer font-semibold">Blog Details</p>
                   </div>
                   </DisclosurePanel>
                     
                 </Disclosure><hr />
                 <Disclosure as="div" className="-mx-3 divide-y divide-gray-500/10">
                   <DisclosureButton className="group divide-y divide-gray-400 flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-6 text-black hover:bg-gray-50">
                     Pages +
                   </DisclosureButton>
                   <DisclosurePanel className="mt-2 space-y-2">
                   <div className="p-4 -mt-3 divide-y divide-gray-500/10">
                       <p className="text-gray-600 hover:bg-gray-200 leading-10 p-1 text-lg cursor-pointer font-semibold">About Us</p>
                       <p className="text-gray-600 hover:bg-gray-200 leading-10 p-1 text-lg cursor-pointer font-semibold">Gallery</p>
                       <p className="text-gray-600 hover:bg-gray-200 leading-10 p-1 text-lg cursor-pointer font-semibold">Cart</p>
                       <p className="text-gray-600 hover:bg-gray-200 leading-10 p-1 text-lg cursor-pointer font-semibold">Checkout</p>
                       <p className="text-gray-600 hover:bg-gray-200 leading-10 p-1 text-lg cursor-pointer font-semibold">Sign Up</p>
                       <p className="text-gray-600 hover:bg-gray-200 leading-10 p-1 text-lg cursor-pointer font-semibold">Sign In</p>
                       <p className="text-gray-600 hover:bg-gray-200 leading-10 p-1 text-lg cursor-pointer font-semibold">Reset Password</p>
                       <p className="text-gray-600 hover:bg-gray-200 leading-10 p-1 text-lg cursor-pointer font-semibold">404 Error</p>
                       
                   </div>
                   </DisclosurePanel>
                     
                 </Disclosure><hr />
                 <a
                   href="#"
                   className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-black hover:bg-gray-50"
                 >
                   Contact Us 
                 </a>
               </div>
               <div className="py-6">
                 {/* <a
                   href="#"
                   className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-black hover:bg-gray-50"
                 >
                   Log in
                 </a> */}
               </div>
             </div>
           </div>
         </DialogPanel>
       </Dialog>
     </header>
     </div>
     </>
      
   )
 }

