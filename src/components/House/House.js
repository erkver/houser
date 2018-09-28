import React from "react";
import "./House.css"


function House(props) {
  const { id, image_url, name, address, city, state, zip, mortgage_amt, monthly_rent } = props.house;
  // console.log(id)
  return (
    <div className="main-house-cont">
      <img 
        className="img-cont"
        src={image_url} 
        alt="Not working" />
      <div className="house-info-cont" >
        <p className="house-info">Property Name: {name}</p>
        <p className="house-info">Address: {address}</p>
        <p className="house-info">City: {city}</p>
        <p className="house-info">State: {state}</p>
        <p className="house-info">Zip: {zip}</p>
      </div>
      <div className="cost-info-cont">
        <p className="cost-info">Monthly Mortgage: {mortgage_amt}</p>
        <p className="cost-info">Desired Rent: {monthly_rent}</p>
      </div>
      <button 
        className="delete-btn"
        onClick={() => props.deleteHouse(id)}>X</button>
    </div>
  )
}

export default House;