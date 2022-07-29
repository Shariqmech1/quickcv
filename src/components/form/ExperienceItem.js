import React from 'react';

const ExperienceItem = ({info, openEdit}) => {
    return (
        <div className="item" id={info.id}>
            <h3>{info.title}, {info.employer}</h3>
            <p>{info.city}, {info.state}</p>
            <p>{info.startMonth} {info.startYear} — {info.endMonth} {info.endYear}</p>
            <button onClick={openEdit}>Edit</button>
        </div>
    );
}
export default ExperienceItem;