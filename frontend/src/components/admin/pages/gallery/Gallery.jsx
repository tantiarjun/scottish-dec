
import { useEffect, useRef, useState } from "react";
import axios from 'axios';
import { FiUpload } from "react-icons/fi";
import Preview from "./Preview";

const Gallery = () => {
    const [events, setEvents] = useState([]);
    const [photo, setPhoto] = useState(null);
    const [fileError, setFileError] = useState(null);
    const [successMsg, setSuccessMsg] = useState(null);
    const [preview, setPreview] = useState(null); // For image preview
    const [event, selectedEvent] = useState("International Yoga Day");
    // console.log(events[0].eventTitle);

    const eventTypeEL = useRef(null);
    const imageEL = useRef(null);


    const handleEvent = (e) => {
        selectedEvent(e.target.value);
    }



    const handlePhotoChange = (e) => {
        const file = e.target.files[0];
        if (file && file.size > 2 * 1024 * 1024) {
            setFileError('File size greater then 2 MB');
            setPreview(null); // Reset the preview if the file is invalid
        } else {
            setFileError(null);
            setPhoto(file);
            setPreview(URL.createObjectURL(file)); // Create preview URL for the image
        }
    };

    const handleGallerySubmission = async (e) => {
        e.preventDefault();

        const event = eventTypeEL.current.value;
        const formData = new FormData();

        formData.append('eventType', event);
        formData.append('image', photo);

        try {
            await axios.post(`${import.meta.env.VITE_REACT_API_URL}/gallery`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
            });

            setSuccessMsg('Data sent successfully');
            setPhoto(null); // Reset file after submission
            setPreview(null); // Reset preview after submission
            imageEL.current.value = null;

        } catch (error) {
            console.log('error:', error);
        }
    };

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_REACT_API_URL}/events`);
                const reversedEvents = response.data.reverse();
                setEvents(reversedEvents);
            } catch (error) {
                console.error('Error fetching events:', error);
            }
        };

        fetchEvents();
    }, []);

    return (
        <div className="p-1 mb-4" style={{ boxShadow: '0 0 60px #CDCDCD' }}>
            <div className="m-3 p-10 rounded-md" style={{ boxShadow: '0 0 60px rgba(212,204,204,0.8)' }}>
                <h1 className="text-md text-[#FA7C0B] font-semibold">Event Categories</h1>


                <form onSubmit={handleGallerySubmission}>
                    <select onChange={handleEvent} ref={eventTypeEL} className="block border-[#D9D9D9] border-2 px-1 rounded-md py-1 mt-3 text-sm">
                        {events.map(event => (
                            <option key={event.eventTitle}>{event.eventTitle}</option>
                        ))}
                    </select>

                    <p className="mt-5 text-md text-[#FA7C0B] font-semibold">Image Setting</p>


                    <div className="flex justify-center">
                        <div>
                            <h1 className="text-center text-green-500">{successMsg}</h1>
                            <p className="text-center text-red-500">{fileError}</p>

                            <div
                                className=" rounded-md w-96 h-52 mt-7 border-soild border-2 bg-[#F1F1F5] border-[#D9D9D9] flex flex-col justify-center items-center cursor-pointer"
                                onClick={() => imageEL.current.click()} // Trigger input click on div click
                            >

                                {preview ? (
                                    <img src={preview} alt="Preview" className="object-top  w-full h-full object-cover" />
                                ) : (
                                    <>
                                        <div className="flex justify-center items-center">
                                            <FiUpload className="mr-2 mt-2 " style={{ fontSize: "17px" }} />
                                            <p className="text-md mt-2">Upload</p>
                                        </div>

                                        <p className="text-xs mt-3">Max file size should not exceed 2 MB</p>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>

                    <input
                        ref={imageEL}
                        className="hidden"
                        type="file"
                        accept="image/*"
                        onChange={handlePhotoChange}
                    />

                    <div className="flex justify-center">
                        <button className="bg-orange-500 text-white py-2 px-8 mt-4 rounded-md hover:bg-orange-600">Submit</button>
                    </div>
                </form>

                <h1 className=" mt-2 text-md text-[#FA7C0B] font-semibold">Preview</h1>
                <Preview event={event} />
            </div>


        </div>
    );
};

export default Gallery;





