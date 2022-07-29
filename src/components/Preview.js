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
            degree: "",
            field: "Law",
            gradMonth: "Aug",
            gradYear: "2004",
        };
        const isEducationEmpty = educationList[0].school + educationList[0].city + educationList[0].state + educationList[0].degree
        + educationList[0].field + educationList[0].gradMonth + educationList[0].gradYear == "" && !educationList[0].current;


        return (
            <div>
                <h1>{personal.firstName} {personal.lastName}</h1>
                <p>{personal.email} | {personal.phone}</p>
                <p>{personal.city}, {personal.state} {personal.zip}</p>
                <br />
                <h2>Experience</h2>
                <ul>
                    {isExperienceEmpty 
                        ? <li className="">
                            <p>{experienceExample.title} | {experienceExample.employer} - {experienceExample.city}, {experienceExample.state}</p>
                            <p>{experienceExample.startMonth} {experienceExample.startYear} - {experienceExample.endMonth} {experienceExample.endYear}</p>
                        </li>
                        : experienceList.map(item => 
                        <li className="" key={item.id}>
                            <p>{item.title} | {item.employer} - {item.city}, {item.state}</p>
                            <p>{item.startMonth} {item.startYear} - {item.current ? "Current" : item.endMonth + " " + item.endYear }</p>
                        </li>)
                    }
                </ul>
                <br />
                <h2>Education</h2>
                <ul>
                    {isEducationEmpty
                    ? <li>
                        <p>{educationExample.school} - {educationExample.city}, {educationExample.state}</p>
                        <p>{educationExample.degree} {educationExample.field}</p>
                        <p>{educationExample.gradMonth} {educationExample.gradYear}</p>
                    </li>
                    : educationList.map(item => 
                    <li key={item.id}>
                        <p>{item.school} - {item.city}, {item.state}</p>
                        <p>{item.degree} {item.field}</p>
                        <p>{item.current ? "Current" : item.gradMonth + " " + item.gradYear }</p>
                    </li>)
                    }
                </ul>
            </div>
        ); 
    }
}
export default Preview;