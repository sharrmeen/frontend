import React,{ useEffect,useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { getAllProperties } from '../../Store/Property/property-action';
import { propertyAction } from '../../Store/Property/property-slice';

const Card =({image,address,price,name})=>{

    return(<figure className='property'>
        <img src={image} alt="Propertyimg"/>
        <h4>{name}</h4>
        <figcaption>
            <main className='propertydetails'>
                <h5>{name}</h5>
                <h6>
                <span class="material-symbols-outlined houseicon">home_pin</span>
                {address}
                </h6>
                <p>
                    <span className='price'>₹ {price}

                    </span> per night
                </p>
            </main>
        </figcaption>
    </figure>)

}

const PropertyList = () => {
  
    const [currentPage,setCurrentPage]=useState({page:1});
    const {properties,totalProperties}=useSelector(
        (state)=>state.properties
    );

  const lastpage=Math.ceil(totalProperties/12);
  const dispatch =useDispatch();
  
  useEffect(()=>{
    const fetchProperties = async(page) => {
        dispatch(propertyAction.updateSearchParams(page));
        dispatch(getAllProperties());
    };

        fetchProperties(currentPage);

  },[currentPage,dispatch]);

  return (
    <div className='propertylist'>
        {cardsData.map((card)=>(
            <Card
                key={card.id}
                image={card.image}
                name={card.name}
                address={card.address}
                price={card.price}
            />
        ))}
    </div>
  )
}

export default PropertyList