import React from 'react';

class Preview extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {personal, experienceList, educationList} = this.props.info;
        personal = {
            firstName: personal.firstName + personal.lastName == "" ? "Saul" : personal.firstName,
            lastName: personal.firstName + personal.lastName == "" ? "Goodman" : personal.lastName,
            city: personal.city == "" ? "Albuquerque" : personal.city,
            state: personal.state == "" ? "New Mexico" : personal.state,
            zip: personal.zip == "" ? "12345" : personal.zip,
            phone: personal.phone == "" ? "505-503-4455" : personal.phone,
            email: personal.email == "" ? "sualgoodman@gmail.com" : personal.email,
            summary: personal.summary == "" ? `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.` : personal.summary,
        };
        const experienceExample = {
            title: "Lawyer",
            employer: "HH&M Law Firm",
            city: "Albuquerque",
            state: "New Mexico",
            startMonth: "Jan",
            startYear: "2001",
            endMonth: "Aug",
            endYear: "2004",
        };
        const isExperienceEmpty = experienceList[0].title + experienceList[0].employer + experienceList[0].city + experienceList[0].state + experienceList[0].startMonth
        + experienceList[0].startYear + experienceList[0].endMonth + experienceList[0].endYear == "" && !experienceList[0].current;
        const educationExample = {
            school: "University of American Samoa's",
            city: "Albuquerque",
            state: "New Mexico",
            degree: "J.D.",
            field: "Law",
            gradMonth: "Aug",
            gradYear: "2004",
        };
        const isEducationEmpty = educationList[0].school + educationList[0].city + educationList[0].state + educationList[0].degree
        + educationList[0].field + educationList[0].gradMonth + educationList[0].gradYear == "" && !educationList[0].current;


        return (
            <div className='preview-border'>
                <div className="preview-content">
                    <h1>{personal.firstName} {personal.lastName}</h1>
                    <p>{personal.city}, {personal.state} {personal.zip}</p>
                    <p>{personal.phone}</p>
                    <p>{personal.email}</p>
                    <br />
                    <h2>Proffesional Summary</h2>
                    <hr/>
                    <p>{personal.summary}</p>
                    <br />
                    <h2>Experience</h2>
                    <hr/>
                    <ul>
                        {isExperienceEmpty 
                            ? <li className="">
                                <div className="date-row">  
                                    <p><b>{experienceExample.title}</b> | {experienceExample.employer}</p>
                                    <p>{experienceExample.startMonth} {experienceExample.startYear} ⁠— {experienceExample.endMonth} {experienceExample.endYear}</p>
                                </div>
                                <p>{experienceExample.city}, {experienceExample.state}</p>
                            </li>
                            : experienceList.map(item => 
                            <li className="" key={item.id}>
                                <div className="date-row">
                                    <p><b>{item.title}</b> | {item.employer}</p>
                                    <p>{item.startMonth} {item.startYear} ⁠— {item.current ? "Current" : item.endMonth + " " + item.endYear }</p>
                                </div>
                                <p>{item.city}, {item.state}</p>
                            </li>)
                        }
                    </ul>
                    <br />
                    <h2>Education</h2>
                    <hr/>
                    <ul>
                        {isEducationEmpty
                        ? <li>
                            <div className="date-row">
                                <p><b>{educationExample.school}</b></p>
                                <p>{educationExample.gradMonth} {educationExample.gradYear}</p>
                            </div>
                            <p>{educationExample.city}, {educationExample.state}</p>
                            <p>{educationExample.degree} {educationExample.field}</p>
                        </li>
                        : educationList.map(item => 
                        <li key={item.id}>
                            <div className="date-row">
                                <p><b>{item.school}</b></p>
                                <p>{item.current ? "Current" : item.gradMonth + " " + item.gradYear }</p>
                            </div>
                            <p>{item.city}, {item.state}</p>
                            <p>{item.degree} {item.field}</p>
                        </li>)
                        }
                    </ul>
                </div>
            </div>
        ); 
    }
}
export default Preview;