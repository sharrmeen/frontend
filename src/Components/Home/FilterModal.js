import React,{useEffect,useState} from 'react';
import PropTypes from "prop-types"; //for type checking props
import "../../CSS/FilterModal.css";
import "react-input-range/lib/css/index.css";
import InputRange from "react-input-range";


const FilterModal = ({selectedFilters,onFilterChange,onClose }) => {
  
        const[priceRange,setPriceRange]=useState({
            min: selectedFilters.priceRange?.min || 600,
            max: selectedFilters.priceRange?.max || 30000,

        });

        const [propertyType, setPropertyType]=useState(
            selectedFilters.propertyType || ""
        );

        const[roomType,setRoomType]=useState(
            selectedFilters.roomType || ""
        );
        const[amenities,setAmenities]=useState(
            selectedFilters.Amenities || []
        );

        //useEffect hook to update states when selectedFilter prop changes
        useEffect(() =>{
            setPriceRange({
                min:selectedFilters.priceRange?.min || 600,
                max:selectedFilters.priceRange?.max || 30000,
            })

            setPropertyType(selectedFilters.propertyType || "")
            setRoomType(selectedFilters.roomType || "")
            setAmenities(selectedFilters.amenities || [])
        } ,[selectedFilters])

        const handlePriceRangeChange =(value) =>{
            setPriceRange(value)
        }

        const handleMinInputChange =(e) =>{
            const minValue = parseInt(e.target.value,10)
            setPriceRange((prev) => ({ ...prev,min: minValue}))
        }
        const handleMaxInputChange =(e) =>{
            const maxValue = parseInt(e.target.value,10)
            setPriceRange((prev) => ({ ...prev,max: maxValue}))
        }

        const handleFilterChange=()=>{
            onFilterChange("minPrice",priceRange.min)
            onFilterChange("maxPrice",priceRange.max)
            onFilterChange("propertyType",propertyType)
            onFilterChange("roomType",roomType)
            onFilterChange("amenities",amenities)
            onClose()

        }

        //option for property types

        const propertyTypeOptions =[

            {
                value:"House",
                label:"House",
                icon:"home"
            },
            
            {
                value:"Flat",
                label:"Flat",
                icon:"apartment"

            },

            {
                value:"Guest House",
                label:"Guest House",
                icon:"hotel"
            },

            {
                value:"Hotel",
                label:"Hotel",
                icon:"meeting_room"
            }
        ]

        //option for room types

        const roomTypeOptions =[
            {
                value:"Entire Room",
                label:"Entire Room",
                icon:"hotel"
            },

            {
                value:"Room",
                label:"Room",
                icon:"meeting_room"
            },

            {
                value:"AnyType",
                label:"Any Type",
                icon:"apartment"
            }

        ]

        //amenities options

        const amenitiesOPtion=[
            {
                value:"Wifi",
                label:"Wifi ",
                icon:"wifi",
            },

            {
                value:"Kitchen",
                label:"Kitchen",
                icon:"kitchen",
            },

            {
                value:"Ac",
                label:"AC",
                icon:"ac_unit",
            },

            {
                value:"Washing Machine",
                label:"Washing MAchine",
                icon:"local_laundry_services",
            },

            {
                value:"Tv",
                label:"Tv",
                icon:"tv",
            },

            {
                value:"Pool",
                label:"Pool",
                icon:"pool",
            },
            
            {
                value:"Free Parking",
                label:"Free Parking",
                icon:"local_parking",
            },

        ] ;

        //function to clear filters

        const handleClearFilters=()=>{
            setPriceRange({min:600,max:30000})
            setPropertyType("");
            setRoomType("");
            setAmenities([]);
        };

        //handle changes in amenities

        const handleAmenitiesChange=(selectedAmenity)=> {
            setAmenities((prevAmenities) =>
                prevAmenities.includes(selectedAmenity)
                     ? prevAmenities.filter((item) => item !== selectedAmenity)
                        :[...prevAmenities,selectedAmenity]
            );
        }

        //function to handle changes in property type

        const handlePropertyChange=(selectedType)=>{
            setPropertyType((prevType)=>
            prevType===selectedType ? "":selectedType);
        }

        //function to handle room type

        const handleRoomTypeChange=(selectedType)=>{
            setPropertyType((prevType)=>
            prevType===selectedType ? "":selectedType);
        };






    
        return <div className='modal-backdrop'>
            <div className='modal-content'>
                <h4>
                    Filters<hr></hr>
                </h4>
                <button className='close-button' onClick={onClose}>
                    <span>&times;</span>
                </button>

                {/* Filterr sections */}
                <div className='modal-filters-container'>
                    <div className='filter-section'>
                        <label>Price range:</label>
                        <InputRange
                        minValue={600}
                        maxValue={30000}
                        value={priceRange}
                        onChange={handlePriceRangeChange}
                        />

                        <div className='range-inputs'>
                            <input 
                            type='number'
                            value={priceRange.min}
                            onChange={handleMinInputChange}
                            >
                            </input>
                        <spam></spam>
                        <input 
                            type='number'
                            value={priceRange.max}
                            onChange={handleMaxInputChange}
                        />

                        </div>
                    </div>

                    {/* property type filter */}
                    <div className='filter-section'>
                        <label>
                            Property Type:
                        </label>

                        <div className='icon-box'>
                            {propertyTypeOptions.map((options)=>(
                                <div 
                                key={options.value}
                                className={`selectable-box ${propertyType===options.value? "selected" : ""
                                }` }
                                onClick={()=>handlePropertyChange(options.value)} 
                                >

                                    <span className='material-icons'>{options.icon}</span>
                                    <span>{options.label}</span>

                                </div>

                            ))}
                        </div>
                    </div>

                </div>




            </div>
        </div>
  
}

export default FilterModal