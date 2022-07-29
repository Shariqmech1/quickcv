import React from 'react';

const EducationItem = ({info, openEdit, deleteItem}) => {
    return (
        <div className="item" id={info.id}>
            <h3>{info.school}, {info.degree} {info.field}</h3>
            <p>{info.city}, {info.state}</p>
            <p>{info.current ? "Current" : info.gradMonth + " " + info.gradMonth}</p>
            <button onClick={openEdit}>Edit</button>
            <button onClick={deleteItem}>Delete</button>
        </div>
    );
}
export default EducationItem;