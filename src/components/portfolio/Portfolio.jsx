import React, {useState} from "react";
import PortfolioData from "./portfolioData";
import Modal from "./modal/Modal";

const Portfolio = () => {
  const [showModal, setShowModal] = useState(false);
  const [activeObject,setId] = useState(null);

  return (
    <>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6 px-auto justify-center "> 
          {
            PortfolioData.map((item) => {
              const { id, type, image,modalDetails } = item;         
              return (

                
                  <div 
                    onClick={()=>{
                      setShowModal(true)
                      setId({id,type,image,modalDetails})
                    }}
                    className="cursor-pointer w-70 h-70 mx-auto rounded-md items-center justify-center"
                    key={id}
                  >
                    
                      <img className="w-70 h-40" src={image} alt="portfolio project demo" />
                      <div><h3 className="flex justify-center align-center">{type}</h3></div>
                    </div>
                  

                
              );
            })
          }
        </div>
       {showModal ? <Modal setOpenModal={setShowModal} object ={activeObject}/> : null}
      
    </>
  );
};

export default Portfolio;
