import { useState } from "react"
import { IoMdArrowDropup,IoMdArrowDropdown } from "react-icons/io";


const Dropdown = () => {
  const[isOpen,setIsOpen] = useState(false);
  return (
    <div className="relative flex flex-col items-center w-[340px] h-[340px] rounded-lg" >
      <button onClick={() => setIsOpen((prev)=> !prev)} className="bg-blue-400 p-4 w-full flex items-center justify-between font-bold text-lg rounded-lg border-4 border-transparent active:border-white duration-300 active:text-white"
      >Dropdown
      {!isOpen ? (
        <IoMdArrowDropup className="h-8"/>)
        :(<IoMdArrowDropdown className="h-8"/>
      )}
      </button>
    

      {/* { {isOpen && (
        <div className="bg-blue-400 absolute">
          {DropdoenList.map((item,i) => (
              <div>
                <h3>{item.}</h3>

              </div>

          )
        
        
        
        )} 
        }
        </div>
      )} */}
    </div>
  )
}

export default Dropdown
