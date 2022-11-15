import React from 'react';
import Select from './Select';

const EducationForm = ({ info, onChange, closeEdit }) => {
    return (
        <form className="item-form" id={info.id} onSubmit={closeEdit}>
            <div className="row">
                <div className="col-6">
                    <label htmlFor="school">School</label>
                    <input type="text" id="school" name="school" placeholder="e.g. RTMNU Nagpur" value={info.school} onChange={onChange} />
                </div>
                <div className="col-6">
                    <label htmlFor="city">City</label>
                    <input type="text" id="city" name="city" placeholder="e.g. Nagpur" value={info.city} onChange={onChange} />
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <label htmlFor="state">State</label>
                    <input type="text" id="state" name="state" placeholder='e.g. Maharashtra' value={info.state} onChange={onChange} />
                </div>
                <div className="col-6">
                    <label htmlFor="degree">Degree</label>
                    <Select type="degree" name="degree" value={info.degree} onChange={onChange} />
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <label htmlFor="field">Field of Study:</label>
                    <input type="text" id="field" name="field" placeholder='e.g. BTECh' value={info.field} onChange={onChange} />
                </div>
                <div className="col-3">
                    <label>Graduation Date</label>
                    <Select type="month" name="gradMonth" value={info.gradMonth} onChange={onChange} disabled={info.current} />
                </div>
                <div className="col-3">
                    <label>&nbsp;</label>
                    <Select type="year" name="gradYear" value={info.gradYear} onChange={onChange} disabled={info.current} />
                </div>
            </div>
            <div className="row">
                <div className="col-6"></div>
                <div className="col-6">
                    <input type="checkbox" id="current" name="current" onChange={onChange} checked={info.current} />
                    <label htmlFor="current">I currntly attend here</label>
                </div>
            </div>
            <div>
                <button className="save-btn" type="submit">Save</button>
            </div>
        </form>
    );
}
export default EducationForm;
