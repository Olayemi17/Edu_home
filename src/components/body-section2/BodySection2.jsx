import "./body-section2.css"


function BodySection2(){
    return(
        <>
           <div className="mt-40 bg-white w-full">
                 <div className="">
                     <h6 className="textt sm:text-5xl sm:p-32 p-12 text-3xl font-bold text-center">Our Success Story</h6>
                     <p className="textt2 text-center sm:-mt-24 -mt-5 leading-6 font-medium text-lg">Amet minim mollit non deserunt ullamco <br /> est sit aliqua dolor do amet sint. Velit <br /> officia consequat duis enim velit mollit. <br /> Exercitation veniam consequat sunt <br /> nostrud amet.</p>
                 </div>
                 
                 <div className="-ml-12 sm:mt-3 -mt-16">
                     <img className="sm:w-11/12 ml-12 sm:ml-20 w-96 mt-24 pl-3 rounded-3xl" src="src/components/body-section2/imagee.png" alt="" />
                     <img className="m-auto -mt-24  sm:-mt-80 sm:w-36 w-11 cursor-pointer" src="src/components/body-section2/big-play-icon.png" alt="" />
                 </div>
           
                <div>
                <div className="sm:flex relative sm:mt-72 mt-32">
                 <div className="mt-">
                     <h5 className="expert sm:ml-10 ml-5 sm:text-5xl text-4xl font-bold">Meet Our Expert</h5>
                     <p className="expert2 mt-6 sm:ml-10 block ml-5 sm:text-lg text-base font-medium">Clarity gives you the blocks & components you <br /> need to create a truly professional website, landing page or admin <br /> panel for your saas components you needto create a truly</p>
                     <button id="btn" className="sm:ml-10 ml-2 sm:text-lg text-base text-white sm:mt-9 mt-9 p-4 rounded-full font-medium sm:w-48 w-40 h-14">All Members</button>
                 </div>
                 <div className="image-container sm:flex gap-6 sm:ml-3 mt-5">
                    <img className="immgg cursor-pointer h-auto max-w-full rounded-3xl ml- sm:w-64 w-full p-3 sm:p-0" src="src/components/body-section2/Marvin.png" alt="" />
                    <div className="overlay font-bold text-center"><h2 className="ml-40 mt-48 text-xl">Jenny Wilson</h2> </div>
                    <div className="overlay"><p className="ml-40 mt-60 text-lg font-medium">UI Designer</p></div>
                    <img className="immgg cursor-pointer h-auto max-w-full rounded-3xl ml- sm:w-64 w-full p-3 sm:p-0" src="src/components/body-section2/Fox.png" alt="" />
                    
                 </div>
                 
                 </div>
                 <div className="sm:flex sm:ml-10 gap-5 mt-7 pb-32">
                    <img className="immgg cursor-pointer h-auto max-w-full rounded-3xl sm:w-64 w-full p-3 sm:p-0" src="src/components/body-section2/Lane.png" alt="" />
                    <img className="immgg cursor-pointer h-auto max-w-full rounded-3xl sm:w-64 w-full p-3 sm:p-0" src="src/components/body-section2/D-bell.png" alt="" />
                    <img className="immgg cursor-pointer h-auto max-w-full rounded-3xl sm:w-64 w-full p-3 sm:p-0" src="src/components/body-section2/McKl.png" alt="" />
                    <img className="immgg cursor-pointer h-auto max-w-full rounded-3xl sm:w-64 w-full p-3 sm:p-0" src="src/components/body-section2/Darrell.png" alt="" />

                 </div>
                </div>
                 
           </div>
        </>
    )
}



export default BodySection2