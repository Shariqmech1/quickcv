import React from 'react';

const EducationForm = ({info, onChange}) => {
    return (
        <form id={info.id}>
            <div className="row">
                <div className="col-6">
                    <label htmlFor="school">School</label>
                    <input type="text" id="school" name="school" placeholder="e.g. University of American Samoa's" value={info.school} onChange={onChange}/>
                </div>
                <div className="col-6">
                    <label htmlFor="city">City</label>
                    <input type="text" id="city" name="city" placeholder="e.g. Albuquerque" value={info.city} onChange={onChange}/>
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <label htmlFor="state">State</label>
                    <input type="text" id="state" name="state" placeholder='e.g. New Mexico' value={info.state} onChange={onChange}/>
                </div> 
                <div className="col-6">
                    <label htmlFor="degree">Degree</label>
                    <select type="select" id="degree" name="degree" value={info.degree} onChange={onChange}>
                        <option value="" disabled>Select</option>
                    </select>
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <label htmlFor="field">Field of Study:</label>
                    <input type="text" id="field" name="field" placeholder='e.g. Law' value={info.field} onChange={onChange}/>
                </div>
                <div className="col-3">
                    <label>Graduation Date</label>
                    <select type="select" id="gradMonth" name="gradMonth" value={info.gradMonth} onChange={onChange}>
                        <option value="" disabled>Month</option>
                    </select>
                </div>
                <div className="col-3">
                    <label>&nbsp;</label>
                    <select type="select" id="gradYear" name="gradYear" value={info.gradYear} onChange={onChange}>
                        <option value="" disabled>Year</option>
                    </select>
                </div>
            </div>
            <div className="row">
                <div className="col-6"></div>
                <div className="col-6">
                    <input type="checkbox" id="current" name="current" onChange={onChange}/>
                    <label htmlFor="current">I currntly attend here</label>
                </div>
            </div>
        </form>
    );
}
export default EducationForm;