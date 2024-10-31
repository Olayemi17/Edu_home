import "./footer2.css"
function Footer2 (){
    return (
          <>
             <div className="bg-white mt-32 pt-24">
                 <div className="flex ">
                     <h5 className="h22 text-xl sm:text-5xl leading-tight font-bold ml-16">Latest News, <br /> Blog & Articles</h5>
                 <div className="lg:flex lg:flex-1 lg:justify-end pl-24 sm:pr-16">
                     <a href="#" className="btnnn float-right sm:text-lg text-base text-center text-white sm:mt-9 sm:p-4 p-3 rounded-full font-medium sm:w-40 sm:h-14 cursor-pointer w-28 h-12">View Now</a>
                </div>
                 </div>

                <div className="sm:flex gap-3">
                <div className="mainnn rounded-lg  bg-white sm:mt-20 m-auto mt-12 sm:ml-16 max-w-xs">
                     <a href="#">
                         <img className="iimmage  cursor-default max-w-xs hover:transition hover:ease-in-out rounded-t-lg" src="src/components/footer2/Art2.png" alt="" />
                     <div className="p-5 cursor-pointer">
                         <p className="paraaa3  rounded-full h-7  w-28 text-sm sm:text-xs font-medium p-1 pl-3">Art & Design</p>
                         <h6 className="hh55 font-bold mt-2 sm:text-xl  sm:font-sans">Why Product Thinking is the <br /> next big thing in UX Design</h6><hr className="mt-7" />
                         <p className="jan text-lg mt-5">30 January 2024</p>
                    </div>
                  </a>
                
                 </div>  
                 <div className="mainnn rounded-lg m-auto bg-white sm:mt-20 mt-12 sm:ml-4 max-w-xs">
                     <a href="#">
                         <img className="iimmage cursor-default max-w-xs hover:transition hover:ease-in-out rounded-t-lg" src="src/components/footer2/Business2.png" alt="" />
                     <div className="p-5 cursor-pointer">
                     <p className="paraaa2 flex rounded-full h-7 w-20 text-sm font-medium p-1 pl-3">Business</p>
                         <h5 className="hh55 font-bold mt-2 text-xl font-sans">Range Input That Looks <br /> Consistent Across All Browser</h5><hr className="mt-7" />
                         <p className="jan text-lg mt-5">13 March 2024</p>
                    </div>
                  </a>
                
                 </div>  
                 <div className="mainnn rounded-lg m-auto bg-white sm:mt-20 mt-12 sm:ml-4 max-w-xs">
                     <a href="#">
                         <img className="iimmage  cursor-default max-w-xs hover:transition hover:ease-in-out rounded-t-lg" src="src/components/footer2/Develop.png" alt="" />
                     <div className="p-5 cursor-pointer">
                         <p className="paraaa flex rounded-full h-7 w-28 text-sm font-medium p-1 pl-3">Development</p>
                         <h5 className="hh55 font-bold mt-2 text-xl font-sans">Generating RPG Tethered : <br /> Phase of Development</h5><hr className="mt-7" />
                         <p className="jan text-lg mt-5">21 April 2024</p>
                    </div>
                  </a>
                 </div> 
               </div> 
               <div className="sm:mt-32 mt-16">
                     <h1 className="text-center font-medium sm:text-xl text-2xl font-sans">Trusted by 4,000+ companies</h1>
                <div className="flex sm:mt-16 mt-9">
                  <marquee behavior="scroll" direction="" scrollamount="15">
                    <div className="flex sm:gap-16 gap-6">
                         <img src="src/components/footer2/Boltshift.png" alt="" />
                         <img src="src/components/footer2/Lightbox.png" alt="" />
                         <img src="src/components/footer2/FeatherDev.png" alt="" />
                         <img src="src/components/footer2/Spherule.png" alt="" />
                         <img src="src/components/footer2/GlobalBank.png" alt="" />
                    </div>
                  </marquee>
                </div>
               </div>

               <div className="footer-cointainer max-w-sm  sm:max-w-5xl m-auto rounded-2xl h-80 mt-32">
                  <div className="p-5 ">
                   <h2 className="text-center pt-10 text-white font-bold text-3xl sm:text-5xl font-sans leading-tight">Get free Pro membership for <br /> your high school class</h2>
                   <div className="justify-center text-center mt-14">
                   <button   className="signss w-40 sm:w-44 font-medium text-lg  pt-1 rounded-full h-14">
                    Join With Us
                    </button>
                   </div>
                </div>
               </div>
             </div>
          </>
        
    )
}



export default Footer2