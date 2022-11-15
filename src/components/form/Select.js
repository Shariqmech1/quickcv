import React from 'react';

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const YEARS = [...Array(2022 - 1962 + 1).keys()].map(x => x + 1962).reverse();
const DEGREES = ['High School Diploma', 'GED', 'Associate of Arts', 'Associate of Science', 'Associate of Applied Science', 
'Bachelors of Arts', 'Bachelors of Science', 'BBA', 'Masters of Arts', 'Masters of Science', 'MBA', 'J.D.', 'M.D.', 'P.H.D.'];

const Select = ({type, name, value, onChange, disabled}) => {
    const monthOptions = MONTHS.map(month => <option value={month} key={month}>{month}</option>);
    const yearOptions = YEARS.map(year => <option value={year} key={year}>{year}</option>);
    const degreeOptions = DEGREES.map(degree => <option value={degree} key={degree}>{degree}</option>);

    return (
        <select type="select" id={name} name={name} value={value} onChange={onChange} disabled={disabled}>
            {type === 'month' && <option value="" disabled>Month</option>} {type === 'month' && monthOptions}
            {type === 'year' && <option value="" disabled>Year</option>} {type === 'year' && yearOptions}
            {type === 'degree' && <option value="" disabled>Select</option>} {type === 'degree' && degreeOptions}
        </select>
    );
}
export default Select; 