import React from "react";


function House(props) {
  const { id, image_url, name, address, city, state, zip, mortgage_amt, monthly_rent } = props.house;
  console.log(id)
  return (
    <div>
      <button onClick={() => props.deleteHouse(id)}>X</button>
      <img src={image_url} alt="Not working" />
      <p>Property Name: {name}</p>
      <p>Address: {address}</p>
      <p>City: {city}</p>
      <p>State: {state}</p>
      <p>Zip: {zip}</p>
      <p>Monthly Mortgage: {mortgage_amt}</p>
      <p>Desired Rent: {monthly_rent}</p>
    </div>
  )
}

export default House;