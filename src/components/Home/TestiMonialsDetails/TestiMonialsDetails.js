import React from 'react';

const TestiMonialsDetails = ({testiMonialDetail}) => {
    const {name, address, description, img} = testiMonialDetail;
    console.log("testiMonialDetail"+testiMonialDetail)
    return (
        <div className="item">
            <div className="shadow-effect font-mono">
                <img className='img-circle' src={img} alt="" />
                <p>{description}</p>
            </div>
            <div className="testimonial-name">
                <h5>{name}</h5>
                <small>{address}</small>
            </div>
        </div>
    );
};

export default TestiMonialsDetails;