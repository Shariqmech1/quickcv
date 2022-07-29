import React from 'react';

const EducationItem = ({info, openEdit, deleteItem}) => {
    return (
        <div className="item" id={info.id}>
            <h3>{info.school}, {info.degree} {info.field}</h3>
            <p>{info.city}, {info.state}</p>
            <p>{info.gradMonth} {info.gradYear}</p>
            <button onClick={openEdit}>Edit</button>
            <button onClick={deleteItem}>Delete</button>
        </div>
    );
}
export default EducationItem;