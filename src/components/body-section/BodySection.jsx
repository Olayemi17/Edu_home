import "./body-section.css"
import Carousel from 'react-bootstrap/Carousel';
function BodySection(){
    return (
        <>
          <div>
            <div className="mt-24">
               <h3 className="text-white font-bold text-center sm:mt-24 text-4xl sm:text-5xl">Our Most Popular Courses</h3>
               <p className="text-center text-white mt-5 font-medium text-base sm:text-lg">Minim mollit non deserunt ullamco est sit aliqua <br /> dolor do amet sint. duis enim velit mollit. <br /> Exercitation veniam consequat.</p>   
            </div>

           <div className="mt-14">
           <marquee behavior="scroll" direction="left" scrollamount="15">
          
         
            <div className="flex gap-7">
            <div className="rounded-lg shadow bg-white dark:border-gray-700">
                 <a href="#">
                   <img className="imgg cursor-grab max-w-5xl hover:transition hover:ease-in-out rounded-t-lg" src="src/components/body-section/web-development.png" alt="" />
                     <div className="p-5 cursor-grab">
                         <p className="paraaa flex rounded-full h-7 w-32 text-xs font-medium p-2 pl-3">Web Development</p>
                           <div className="flex float-end -mt-7 gap-2">
                               <p className="main-para">4.9</p>
                               <img className="main-para w- h-4 mt-1" src="src/components/body-section/star.png" alt="" /><span>(536)</span>                  
                             </div>
                             <h6 className="mt-3 font-semibold text-xl">Contrar to popular belieif loreme <br /> ipsum is an not consectetur cites...</h6>
                               <div className="flex">
                                 <img className="mt-5" src="src/components/body-section/john.png" alt="" />  
                                 <p className="para44 mt-6 ml-2 ">John Doe</p>
                               </div>
                              <div className="float-end flex gap-2 -mt-7">
                                 <p className="para444 ">$100</p>
                                 <p className="para55 text-2xl -mt-1">$50.00</p> 
                               </div>
                       </div>
                  </a>
            </div>

            <div className="rounded-lg shadow bg-white dark:border-gray-700">
                 <a href="#">
                   <img className="imgg cursor-grab max-w-5xl hover:transition hover:ease-in-out rounded-t-lg" src="src/components/body-section/English.png" alt="" />
                     <div className="p-5 cursor-grab">
                         <p className="paraaa flex rounded-full h-7 w-16 text-xs font-medium p-2 pl-3">English</p>
                           <div className="flex float-end -mt-7 gap-2">
                               <p className="main-para">4.9</p>
                               <img className="main-para w- h-4 mt-1" src="src/components/body-section/star.png" alt="" /><span>(536)</span>                  
                             </div>
                             <h6 className="mt-3 font-semibold text-xl">How To Learn Basic English <br /> Strategy For Research</h6>
                               <div className="flex">
                     <img className="mt-5" src="src/components/body-section/wilson.png" alt="" />  
                      <p className="para44 mt-6 ml-2 ">Jenny Wilsone</p>
                   </div>
                     <div className="float-end flex gap-2 -mt-7">
                     <p className="para444 ">$100</p>
                     <p className="para55 text-2xl -mt-1">$50.00</p> 
                   </div>
                       </div>
                  </a>
            </div>
 
            <div className="rounded-lg shadow bg-white dark:border-gray-700">
                 <a href="#">
                   <img className="imgg cursor-grab max-w-5xl hover:transition hover:ease-in-out rounded-t-lg" src="src/components/body-section/web-development.png" alt="" />
                     <div className="p-5 cursor-grab">
                         <p className="paraaa flex rounded-full h-7 w-32 text-xs font-medium p-2 pl-3">Web Development</p>
                           <div className="flex float-end -mt-7 gap-2">
                               <p className="main-para">4.9</p>
                               <img className="main-para w- h-4 mt-1" src="src/components/body-section/star.png" alt="" /><span>(536)</span>                  
                             </div>
                             <h6 className="mt-3 font-semibold text-xl">Contrar to popular belieif loreme <br /> ipsum is an not consectetur cites...</h6>
                               <div className="flex">
                                 <img className="mt-5" src="src/components/body-section/john.png" alt="" />  
                                 <p className="para44 mt-6 ml-2 ">John Doe</p>
                               </div>
                              <div className="float-end flex gap-2 -mt-7">
                                 <p className="para444 ">$100</p>
                                 <p className="para55 text-2xl -mt-1">$50.00</p> 
                               </div>
                       </div>
                  </a>
            </div>

            <div className="rounded-lg shadow bg-white dark:border-gray-700">
                 <a href="#">
                   <img className="imgg cursor-grab max-w-5xl  hover:transition hover:ease-in-out rounded-t-lg" src="src/components/body-section/English.png" alt="" />
                     <div className="p-5 cursor-grab">
                         <p className="paraaa flex rounded-full h-7 w-16 text-xs font-medium p-2 pl-3">English</p>
                           <div className="flex float-end -mt-7 gap-2">
                               <p className="main-para">4.9</p>
                               <img className="main-para w- h-4 mt-1" src="src/components/body-section/star.png" alt="" /><span>(536)</span>                  
                             </div>
                             <h6 className="mt-3 font-semibold text-xl">How To Learn Basic English <br /> Strategy For Research</h6>
                               <div className="flex">
                     <img className="mt-5" src="src/components/body-section/wilson.png" alt="" />  
                      <p className="para44 mt-6 ml-2 ">Jenny Wilsone</p>
                   </div>
                     <div className="float-end flex gap-2 -mt-7">
                     <p className="para444 ">$100</p>
                     <p className="para55 text-2xl -mt-1">$50.00</p> 
                   </div>
                       </div>
                  </a>
            </div>
            
            <div className="rounded-lg shadow bg-white dark:border-gray-700">
                 <a href="#">
                   <img className="imgg cursor-grab max-w-5xl hover:transition hover:ease-in-out rounded-t-lg" src="src/components/body-section/content-writing.png" alt="" />
                     <div className="p-5 cursor-grab">
                         <p className="paraaa2 flex rounded-full h-7 w-28 text-xs font-medium p-2 pl-3">Content Writing</p>
                           <div className="flex float-end -mt-7 gap-2">
                               <p className="main-para">4.9</p>
                               <img className="main-para w- h-4 mt-1" src="src/components/body-section/star.png" alt="" /><span>(326)</span>                  
                             </div>
                             <h6 className="mt-3 font-semibold text-xl">Content Is King:Writing Killer <br /> Conte-nt Web & Marketing</h6>
                               <div className="flex">
                     <img className="mt-5" src="src/components/body-section/theresa.png" alt="" />  
                      <p className="para44 mt-6 ml-2 ">Theresa Webb</p>
                   </div>
                     <div className="float-end flex gap-2 -mt-7">
                     <p className="para444 ">$100</p>
                     <p className="para55 text-2xl -mt-1">$50.00</p> 
                   </div>
                       </div>
                  </a>
            </div>

            <div className="rounded-lg shadow bg-white dark:border-gray-700">
                 <a href="#">
                   <img className="imgg2 cursor-grab max-w-5xl  hover:transition hover:ease-in-out rounded-t-lg" src="src/components/body-section/art&design.png" alt="" />
                     <div className="p-5 cursor-grab">
                         <p className="paraaa3 flex rounded-full h-7  w-24 text-xs font-medium p-1 pl-3">Art & Design</p>
                           <div className="flex float-end -mt-7 gap-2">
                               <p className="main-para">4.5</p>
                               <img className="main-para w- h-4 mt-1" src="src/components/body-section/star.png" alt="" /><span>(2326)</span>                  
                             </div>
                             <h6 className="mt-3 font-semibold text-xl">How To Learn Basic English <br /> Strategy For Research</h6>
                               <div className="flex">
                     <img className="mt-5" src="src/components/body-section/wade.png" alt="" />  
                      <p className="para44 mt-6 ml-2 ">Wade Warren</p>
                   </div>
                     <div className="float-end flex gap-2 -mt-7">
                     <p className="para444 ">$100</p>
                     <p className="para55 text-2xl -mt-1">$50.00</p> 
                   </div>
                       </div>
                  </a>
            </div>
            </div>
            
            </marquee>
           </div>
          




            </div>

          
          
        </>
    )
}


export default BodySection