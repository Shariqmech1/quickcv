import React from 'react';
import DateSelect from './DateSelect';

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
                    <DateSelect type="month" name="startMonth" value={info.startMonth} onChange={onChange}/>
                </div>
                <div className="col-3">
                    <label>&nbsp;</label>
                    <DateSelect type="year" name="startYear" value={info.startYear} onChange={onChange}/>
                </div>
                <div className="col-3">
                    <label>End Date</label>
                    <DateSelect type="month" name="endMonth" value={info.endMonth} onChange={onChange} disabled={info.current}/>
                </div>
                <div className="col-3">
                    <label>&nbsp;</label>
                    <DateSelect type="year" name="endYear" value={info.endYear} onChange={onChange} disabled={info.current}/>
                </div>
            </div>
            <div className="row">
                <div className="col-6"></div>
                <div className="col-6">
                    <input type="checkbox" id="current" name="current" onChange={onChange} checked={info.current}/>
                    <label htmlFor="current">I currntly work here</label>
                </div>
            </div>
            <button type="submit">Save</button>
        </form>
    );
}
export default ExperienceForm;