import React from 'react'
import './style/styleHeader.css'

const LocationCard = ({location}) => {


    const date = new Date(location?.created)
    const dateFormatted = date.toLocaleString()
    
  return (
    <article className='card-location'>
        <section className='location-text'>
            <h1 className='text-title'>{location?.name}</h1>
            <p className='text-date'><b>Created: </b>{dateFormatted}</p>
        </section>
        <section className='location-list-description'>
            <ul className='description-container-items'>
                <li className='item-description'><b>Type: </b>{location?.type}</li>
                <li className='item-description'><b>Dimension: </b>{location?.dimension}</li>
                <li className='item-description'><b>Populations: </b>{location?.residents.length}</li>
            </ul>
        </section>
    </article>
  )
}

export default LocationCard