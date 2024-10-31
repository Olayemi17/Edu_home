import "./body.css"
function Body (){
    return(
        <>
      <div className="sm:mt-44 mt-32">  
           <h1 className="mb-4 text-center leading-tight  font-extrabold text-white text-2xl sm:text-7xl ">Grow Your Skills to <br /> Advance Your Career path.</h1>
           <p className="mt-9 text-center text-lg  font-medium text-white">Educating, Inspiring, & Transforming Young Women. A Tuituon-Free Private Meddle School</p>
      </div>

         
     <div className="lg:flex lg:flex-1 lg:justify-center mt-20 gap-7 text-center">
            <button type="button" className="button text-black w-44 text-lg h-14 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:focus:ring-blue-800">Get Started</button>
            <div className="mt-1 flex"> 
          
             <svg width="48" className="ml-24 sm:-ml-2" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M18.2002 24.5V21.54C18.2002 17.72 20.9002 16.18 24.2002 18.08L26.7602 19.56L29.3202 21.04C32.6202 22.94 32.6202 26.06 29.3202 27.96L26.7602 29.44L24.2002 30.92C20.9002 32.82 18.2002 31.26 18.2002 27.46V24.5Z" stroke="#BCFBBA" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
               <path d="M24 44.5C35.0457 44.5 44 35.5457 44 24.5C44 13.4543 35.0457 4.5 24 4.5C12.9543 4.5 4 13.4543 4 24.5C4 35.5457 12.9543 44.5 24 44.5Z" stroke="#BCFBBA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
           <a href="https://youtu.be/Hh1UCOizzMc" className="ml-16 sm:ml-2 mt-3 sm:mt-3 text-white font-semibold cursor-pointer">Watch Video</a>  

         
           
           </div>
     
        <div className="">

         </div>
     </div>

          <div className="photo rtl:space-x-reverse -mt-4 ml-52">
          
         <p className="pa text-white font-sans font-normal">365 k+ enrolled students</p>
          
          <div className="flex -space-x-2">
          
          <img className="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800" src="src/components/body/picture-3.jpg" alt=""/>
          <img className="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800" src="src/components/body/picture-2.jpg" alt=""/>
          <img className="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800" src="src/components/body/picture-1.jpg" alt=""/>
          <img className="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800" src="src/components/body/picture-4.jpg" alt=""/>
          <img className="w-8 h-8 border-2 border-white rounded-full dark:border-gray-800" src="src/components/body/picture-5.jpg" alt=""/>
          <a className="flex items-center justify-center w-8 h-8 text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800" href="#">+99</a>
          </div>
        
          <div>
            
          </div>
        </div>
      
        </>
    )
}


export default Body