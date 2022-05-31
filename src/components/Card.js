import { IconContext } from "react-icons";
import { IoLocationSharp } from 'react-icons/io5';

function Card(props) {
    return (
        <>
            <div className="card">
                <div className='img-parent'>
                    <img src={`${props.imageUrl}`} alt={props.title} />
                </div>
                <div className="card-info">
                    <div className='location-parent'>
                        <IconContext.Provider value={{ className: "location-icon" }}>
                            <IoLocationSharp />
                        </IconContext.Provider>
                        <span className="location">{props.location}</span>
                        <a className='maps-link' href={props.googleMapsUrl}>View on Google Maps</a>
                    </div>
                    <p className='title'>{props.title}</p>
                    <div>
                        <span className='date'>{props.startDate} - </span>
                        <span className='date'>{props.endDate}</span>
                    </div>
                    <p className='description'>{props.description}</p>
                </div>
            </div>
            <hr />
        </>
    );
}

export default Card;