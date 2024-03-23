import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getAllProperties } from "../../Store/Property/property-action";
import { propertyAction } from "../../Store/Property/property-slice";
import { Link } from "react-router-dom";


const Card = ({id, image, name, address, price }) => {
  return (
    <figure className="property">
      <Link to={`/propertylist/${id}`}><img src={image} alt="Propertyimg" /></Link>
      
      <h4>{name}</h4>
      <figcaption>
        <main className="propertyDetails">
          <h5>{name}</h5>
          <h6>
            <span className="material-symbols-outlined houseicon">
              home_pin
            </span>
            {address}
          </h6>
          <p>
            <span className="price">
              <span className="material-symbols-outlined">currency_rupee</span>
              {price}
            </span>{" "}
            per night
          </p>
        </main>
      </figcaption>
    </figure>
  );
};

const PropertyList = () => {
  const [currentPage, setCurrentPage] = useState({ page: 1 });

  const { properties, totalProperties } = useSelector(
    (state) => state.properties
  );

  const lastpage = Math.ceil(totalProperties / 12);

  const dispatch = useDispatch();

  useEffect(() => {
    //console.log("Current Page:", currentPage); // Check if currentPage updates correctly
    const fetchProperties = async (page) => {
      dispatch(propertyAction.updateSearchParams( page ));
      //console.log("Fetching Properties for Page:", page); // Check if the action is dispatched with the correct page
      dispatch(getAllProperties());
    };
    fetchProperties(currentPage);
  }, [currentPage, dispatch]);

  return (
    <>
      {properties.length === 0 ? (
        <p className="not_found">"Property not found ...."</p>
      ) : (
        <div className="propertylist">
          {properties.map((property) => (
            <Card
              key={property._id}
              id={property._id}
              image={property.images[0].url}
              name={property.propertyName}
              address={`${property.address.city},${property.address.state},${property.address.pincode}`}
              price={property.price}
            />
          ))}
        </div>
      )}
      {/* Pagination control */}
      <div className="pagination">
        {/* previous button */}
        <button
          className="previous_btn"
          onClick={() =>
            setCurrentPage((prev) => ({
              page: prev.page - 1,
            }))
          }
          disabled={currentPage.page === 1}
        >
          <span className="material-symbols-outlined">arrow_back_ios_new</span>
        </button>

        {/* next button */}
        <button
          className="next_btn"
          onClick={() =>
            setCurrentPage((prev) => ({
              page: prev.page + 1,
            }))
          }
          disabled={properties.length < 12 || currentPage.page === lastpage}
        >
          <span className="material-symbols-outlined">arrow_forward_ios</span>
        </button>
      </div>
    </>
  );
};

export default PropertyList;