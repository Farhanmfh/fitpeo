import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import tourPlaces from "../TourCard/dummyTourData";

import "./styles.css";

const Tour = () => {
    const [tourDetails, setTourDetails] = useState();
    const params = useParams();

    useEffect(() => {
        const tourId = params.tourId;
        const currentTourDetails = tourPlaces.find(
            (tour) => tour.id === Number(tourId)
        ); // should fetch from backend instead of using dummy data
        setTourDetails(currentTourDetails);
    }, []);

    console.log(tourDetails);
    return (
        <div className="sample-page">
            <h1>{tourDetails && tourDetails.name} </h1>
            {tourDetails && <img src={tourDetails.img} /> }
            
        </div>
    );
};

export default Tour;
