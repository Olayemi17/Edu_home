import "./body3.css"
function Body3 (){
    return (
       <>
       <div className="bg-white p-3 sm:p-3 w-full sm:flex  justify-around">
          <div className="">
                 <img className="sm:ml-16 sm:mt-40 sm:absolute rounded-3xl sm:w-2/5" src="src/components/body3/about.png" alt="" />
             </div>
             <div className=" sm:mt-96 sm:relative sm:ml-48">
                 <img className="sm:h-64 sm:ml-11 sm:mt-7 -mt-20 ml-24 h-44" src="src/components/body2/about2.png" alt="" />
                 {/* <img className="sm:-mt-40 cursor-pointer sm:ml-36 -mt-28 ml-36" src="src/components/body2/play-icon.png" alt="" /> */}
                <a href="https://youtu.be/Hh1UCOizzMc"><img className="sm:-mt-40 cursor-pointer sm:ml-36 -mt-28 ml-36" src="src/components/body2/play-icon.png" alt="" /></a>
               
             </div>
         <div className="main w-96 sm:pb-32">
           <p className="about  font-semibold sm:mt-40 mt-24 text-xl sm:ml-">About Us_______</p>
           <h2 className="about2 sm:ml- sm:mt-7 mt-6 sm: text-3xl leading-none font-bold sm:flex">We Are Maximize  Your Learning  Growth</h2>
           <p className="sm:ml- sm:pl- sm:mt-10 mt-7 text-gray-500 font-sans sm:pr- ">Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempo.</p>
           <div className=" sm:flex sm:justify-around sm:-ml-7 -ml-1 mt-7 sm:mt-10">
            <p className="para flex gap-4 p-1 "><img className="" src="src/components/body3/correct-icon2.png" alt="" />Training Services</p>
            <p className="para flex gap-4 p-1"><img src="src/components/body3/correct-icon2.png" alt="" />Expert Training</p> 
           </div>
           <div className="sm:flex sm:gap-16 sm:mt-10 -ml-1">
           <p className="para flex gap-4 p-1"><img src="src/components/body3/correct-icon2.png" alt="" /> Big Experience</p> 
           <p className="para flex gap-4 p-1 sm:-ml-2"><img src="src/components/body3/correct-icon2.png" alt="" />Lifetime access</p> 
           </div>
           <button id="btn" className="justify-center text-lg text-white mt-6 sm:mt-9  cursor-pointer text-center rounded-full font-medium w-48 h-14" >
            Explore More +
         </button>  
           
        </div>
                
              














            
        
       
  </div>
       </>


    )
}


export default Body3