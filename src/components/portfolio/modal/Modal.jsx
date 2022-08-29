import {AiOutlineClose} from "react-icons/ai"

function Modal({object:{image,type,modalDetails},setOpenModal}){
  
  return(
    
      <div className="fixed inset-0  mx-auto p-5 border w-100 shadow-lg overflow-y-auto bg-opacity-95 bg-gray-600">
        <div className="mt-3 text-center "> 
            <div className=" mt-4 w-50 h-30 mx-auto">
              <div className="flex justify-end " onClick={()=>setOpenModal(false)}><AiOutlineClose size={30} /></div>
              <img className="" src={image} alt="portfolio project demo" />
            </div>
            <div className="flex flex-col justify-start text-blue-700">
              <div><p>Tech Stack: {modalDetails[0].language}</p></div>
              <div><button>{modalDetails[0].link}</button></div>
              <div><p>Project: {type} </p></div>
            </div>
        </div>
      </div>
    
  )
}

export default Modal