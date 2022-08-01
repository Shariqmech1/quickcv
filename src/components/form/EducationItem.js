import React from 'react';

const EducationItem = ({info, openEdit, deleteItem}) => {
    return (
        <div className="item" id={info.id}>
            <div>
                <h3>{info.school}, {info.degree} {info.field}</h3>
                <p>{info.city}, {info.state}</p>
                <p>{info.current ? "Current" : info.gradMonth + " " + info.gradMonth}</p>
            </div>
            <div>
                <a onClick={openEdit}>Edit</a>
                <a onClick={deleteItem}>Delete</a>
            </div>        
        </div>
    );
}
export default EducationItem;