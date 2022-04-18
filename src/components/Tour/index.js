import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import tourPlaces from "../TourCard/dummyTourData";

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

    return <div>{tourDetails && tourDetails.name}</div>;
};

export default Tour;
