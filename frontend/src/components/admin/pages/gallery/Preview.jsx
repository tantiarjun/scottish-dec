import axios from "axios";
import { useEffect, useState } from "react";

const Preview = ({ event }) => {
    const [galleryData, setGalleryData] = useState([]);

    useEffect(() => {
        const fetchGalleryData = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_REACT_API_URL}/gallery`);
                const reversedEvents = response.data.reverse();

                // Filter the gallery data based on the passed `event` prop
                const filteredEvents = reversedEvents.filter(item => item.eventType === event);

                setGalleryData(filteredEvents);
            } catch (error) {
                console.error('Error fetching gallery data:', error);
            }
        };

        fetchGalleryData();
    }, [event]); // Add `event` as a dependency so the effect runs whenever the prop changes

    return (
        <div className="ml-28 mt-10 grid grid-cols-4">
            {galleryData.map((item, index) => (
                <div className="m-3" key={index}>
                    <img className="rounded-md w-full h-48" src={item.imageUrl} alt={`event-${item.eventType}`} />
                </div>
            ))}
        </div>
    );
};

export default Preview;
