import React,{useState} from 'react'
import FilterModal from './FilterModal';
const Filter = () => {
    //state for controlling popup visibility
    const [isModalOpen, setIsModalOpen] =useState(false);
    const [selectedFilters, setSelectedFilters]=useState({})
    //function to handle opening the modal

    const handleOpenModal =()=>{
        setIsModalOpen(true);
    };

    const handleCloseModal =()=>{
        setIsModalOpen(false);
    }

    const handleFilterChange =(filterName,value)=>{
        //updated selected filters with new values
        setSelectedFilters((prevFilters)=>({
            ...prevFilters,
            [filterName]:value,
        }));
    }; 

  return( <>
  {/* click event to open the modal(popup) */}
  <span class="material-symbols-outlined filter"onClick={handleOpenModal}>tune</span>
    {isModalOpen && (<FilterModal
        selectedFilters={selectedFilters}
        onFilterChange={handleFilterChange}
        onClose={handleCloseModal}
    
    />)}

  
  </>
  );
};

export default Filter;