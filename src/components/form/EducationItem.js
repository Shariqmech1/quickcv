import React from 'react';

const EducationItem = ({info, openEdit}) => {
    return (
        <div className="item" id={info.id}>
            <h3>{info.school}, {info.degree} {info.field}</h3>
            <p>{info.city}, {info.state}</p>
            <p>{info.gradMonth} {info.gradYear}</p>
            <button onClick={openEdit}>Edit</button>
        </div>
    );
}
export default EducationItem;