import React from 'react';
import DateSelect from './DateSelect';

const EducationForm = ({info, onChange, closeEdit}) => {
    return (
        <form id={info.id} onSubmit={closeEdit}>
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
                    <DateSelect type="degree" name="degree" value={info.degree} onChange={onChange}/>
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <label htmlFor="field">Field of Study:</label>
                    <input type="text" id="field" name="field" placeholder='e.g. Law' value={info.field} onChange={onChange}/>
                </div>
                <div className="col-3">
                    <label>Graduation Date</label>
                    <DateSelect type="month" name="gradMonth" value={info.gradMonth} onChange={onChange}/>
                </div>
                <div className="col-3">
                    <label>&nbsp;</label>
                    <DateSelect type="year" name="gradYear" value={info.gradYear} onChange={onChange}/>
                </div>
            </div>
            <div className="row">
                <div className="col-6"></div>
                <div className="col-6">
                    <input type="checkbox" id="current" name="current" onChange={onChange}/>
                    <label htmlFor="current">I currntly attend here</label>
                </div>
            </div>
            <button>Save</button>
        </form>
    );
}
export default EducationForm;