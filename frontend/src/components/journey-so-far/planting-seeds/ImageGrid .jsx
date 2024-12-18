import React from 'react';

const ImageGrid = () => {

    return (
        <div className=" md:ml-5  md:mt-20 xl:mt-5 mb-14 bg-[#FEF2E4] p-3 md:w-2/5 xl:w-2/6">
            <div className="grid grid-cols-2 gap-4 ">
                <img className="rounded-lg overflow-hidden" src="/Images/journey-so-far/img-1.jpg" alt="" />
                <img className="rounded-lg overflow-hidden " src="/Images/journey-so-far/img-2.jpg" alt="" />
                <img className="rounded-lg overflow-hidden" src="/Images/journey-so-far/img-3.jpg" alt="" />
                <img className="rounded-lg overflow-hidden  -mt-10" src="/Images/journey-so-far/img-4.jpg" alt="" />
            </div>
        </div>
    );
};

export default ImageGrid;


