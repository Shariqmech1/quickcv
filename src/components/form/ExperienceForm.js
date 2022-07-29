import React from 'react';

const ExperienceForm = ({info, onChange, closeEdit}) => {
    return (
        <form id={info.id} onSubmit={closeEdit}>
            <div className="row">
                <div className="col-6">
                    <label htmlFor="title">Job Title</label>
                    <input type="text" id="title" name="title" placeholder='e.g. Lawyer' value={info.title} onChange={onChange}/>
                </div>
                <div className="col-6">
                    <label htmlFor="employer">Employer</label>
                    <input type="text" id="employer" name="employer" placeholder='e.g. HH&M Law Firm' value={info.employer} onChange={onChange}/>
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <label htmlFor="city">City</label>
                    <input type="text" id="city" name="city" placeholder='e.g. Albuquerque' value={info.city} onChange={onChange}/>
                </div>
                <div className="col-6">
                    <label htmlFor="state">State</label>
                    <input type="text" id="state" name="state" placeholder='e.g. New Mexico' value={info.state} onChange={onChange}/>
                </div>
            </div>
            <div className="row">
                <div className="col-3">
                    <label>Start Date</label>
                    <select type="select" id="startMonth" name="startMonth" value={info.startMonth} onChange={onChange}>
                        <option value="" disabled>Month</option>
                    </select>
                </div>
                <div className="col-3">
                    <label>&nbsp;</label>
                    <select type="select" id="startYear" name="startYear" value={info.startYear} onChange={onChange}>
                        <option value="" disabled>Year</option>
                    </select>
                </div>
                <div className="col-3">
                    <label>End Date</label>
                    <select type="select" id="endMonth" name="endMonth" placeholder='Month' value={info.endMonth} onChange={onChange}>
                        <option value="" disabled>Month</option>
                    </select>
                </div>
                <div className="col-3">
                    <label>&nbsp;</label>
                    <select type="select" id="endYear" name="endYear" placeholder='Year' value={info.endYear} onChange={onChange}>
                        <option value="" disabled>Year</option>
                    </select>
                </div>
            </div>
            <div className="row">
                <div className="col-6"></div>
                <div className="col-6">
                    <input type="checkbox" id="current" name="current" onChange={onChange}/>
                    <label htmlFor="current">I currntly work here</label>
                </div>
            </div>
            <button type="submit">Save</button>
        </form>
    );
}
export default ExperienceForm;