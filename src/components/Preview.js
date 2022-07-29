import React from 'react';

class Preview extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {personal, experienceList, educationList} = this.props.info;
        console.log(this.props.info.experienceList);
        personal = {
            firstName: personal.firstName == "" && personal.lastName == "" ? "Saul" : personal.firstName,
            lastName: personal.firstName == "" && personal.lastName == "" ? "Goodman" : personal.lastName,
            city: personal.city == "" ? "Albuquerque" : personal.city,
            state: personal.state == "" ? "New Mexico" : personal.state,
            zip: personal.zip == "" ? "12345" : personal.zip,
            phone: personal.phone == "" ? "505-503-4455" : personal.phone,
            email: personal.email == "" ? "sualgoodman@gmail.com" : personal.email,
        };
        /*experienceList[0] = {
            title: experienceList.title == "" ? "Lawyer" : experienceList.title,
            employer: experienceList.employer == "" ? "HH&M Law Firm" : experienceList.employer,
            city: experienceList.city == "" ? "Albuquerque" : experienceList.city,
            state: experienceList.state == "" ? "New Mexico" : experienceList.state,
            startMonth: experienceList.startMonth == "" ? "Jan" : experienceList.startMonth,
            startYear: experienceList.startYear == "" ? "2001" : experienceList.startYear,
            endMonth: experienceList.endMonth == "" ? "Aug" : experienceList.endMonth,
            endYear: experienceList.endYear == "" ? "2004" : experienceList.endYear,
            current: experienceList.current,
            id: experienceList.id
        };*/

        

        return (
            <div>
                <h1>{personal.firstName} {personal.lastName}</h1>
                <p>{personal.email} | {personal.phone}</p>
                <p>{personal.city}, {personal.state} {personal.zip}</p>
                <br />
                <h2>Experience</h2>
                <ul>
                    {experienceList.map(item => 
                        <li className="" key={item.id}>
                            <p>{item.title} | {item.employer} - {item.city}, {item.state}</p>
                            <p>{item.startMonth} {item.startYear} - {item.endMonth} {item.endYear}</p>;
                        </li>
                    )}
                </ul>
                <br />
                <h2>Education</h2>
                <ul>
                    {educationList.map(item => 
                        <li key={item.id}>
                            <p>{item.school} - {item.city}, {item.state}</p>
                            <p>{item.degree} {item.field}</p>
                            <p>{item.gradMonth} {item.gradYear}</p>;
                        </li>
                    )}
                </ul>
            </div>
        ); 
    }
}
export default Preview;