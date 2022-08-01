import React from 'react';

const Personal = ({info, onChange, buttons}) => {
    return (
        <div className="">
            <h2 className='form-title'>Personal</h2>
            <form>
                <div className="row">
                    <div className="col-6">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" id="firstName" name="firstName" placeholder='e.g. Saul' onChange={onChange} value={info.firstName}/>
                    </div>
                    <div className="col-6">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" id="lastName" name="lastName" placeholder='e.g. Goodman' onChange={onChange} value={info.lastName}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <label htmlFor="city">City</label>
                        <input type="text" id="city" name="city" placeholder='e.g. Albuquerque' onChange={onChange} value={info.city}/>
                    </div>
                    <div className="col-3">
                        <label htmlFor="state">State</label>
                        <input type="text" id="state" name="state" placeholder='e.g. New Mexico' onChange={onChange} value={info.state}/>
                    </div>
                    <div className="col-3">
                        <label htmlFor="zip">Zip</label>
                        <input type="text" id="zip" name="zip" placeholder='e.g. 12345' onChange={onChange} value={info.zip}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <label htmlFor="phone">Phone</label>
                        <input type="tel" id="phone" name="phone" placeholder='e.g. 505-503-4455' onChange={onChange} value={info.phone}/>
                    </div>
                    <div className="col-6">
                        <label htmlFor="email">Email</label>
                        <input type="text" id="email" name="email" placeholder='e.g. sualgoodman@gmail.com' onChange={onChange} value={info.email}/>
                    </div> 
                </div>
                <div className="row">
                    <div className="col-12">
                        <label htmlFor="summary">Proffesional Summary</label>
                        <textarea name="summary" id="summary" rows="10" onChange={onChange} value={info.summary}></textarea>
                    </div>
                </div>
            </form>
            <div className="buttons-row">
                <button className="back-btn" onClick={buttons.backPage} disabled>Back</button>
                <button className="next-btn" onClick={buttons.nextPage}>Next</button>
            </div>
        </div>
    );
}
export default Personal;