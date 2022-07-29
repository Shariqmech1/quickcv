import React from 'react';

const ExperienceItem = ({info, openEdit, deleteItem}) => {
    return (
        <div className="item" id={info.id}>
            <h3>{info.title}, {info.employer}</h3>
            <p>{info.city}, {info.state}</p>
            <p>{info.startMonth} {info.startYear} — {info.endMonth} {info.endYear}</p>
            <button onClick={openEdit}>Edit</button>
            <button onClick={deleteItem}>Delete</button>
        </div>
    );
}
export default ExperienceItem;