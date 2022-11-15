/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const ExperienceItem = ({info, openEdit, deleteItem}) => {
    return (
        <div className="item" id={info.id}>
            <div>
                <h3>{info.title}, {info.employer}</h3>
                <p>{info.city}, {info.state}</p>
                <p>{info.startMonth} {info.startYear} — {info.current ? "Current" : info.endMonth + " " + info.endYear }</p>
            </div>
            <div>
                <a onClick={openEdit}><i className="fa-solid fa-pen-to-square"></i></a>
                <a onClick={deleteItem}><i className="fa-solid fa-trash" ></i></a>
            </div>
        </div>
    );
}
export default ExperienceItem;