import React from 'react';
import uniqid from 'uniqid';
import Education from './components/form/Education';
import Experience from './components/form/Experience';
import Personal from './components/form/Personal';
import './styles/App.css';
import './styles/Forms.css';

const emptyExperience = {
  title: "",
  employer: "",
  city: "",
  state: "",
  startMonth: "",
  startYear: "",
  endMonth: "",
  endYear: "",
  current: false
};
const emptyEducation = {
  school: "",
  city: "",
  state: "",
  degree: "",
  field: "",
  gradMonth: "",
  gradYear: "",
  current: false
};

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      personal: {
        firstName: "",
        lastName: "",
        city: "",
        state: "",
        zip: "",
        phone: "",
        email: ""
      },
      experienceList: [{
        ...emptyExperience,
        id: uniqid()
      }],
      educationList: [{
        ...emptyEducation,
        id: uniqid()
      }],
      currentPage: 1
    }
  }

  onPersonalChange = (e) => {
    this.setState({
      personal: {
        ...this.state.personal,
        [e.target.name]: e.target.value
      }
    });
  }
  onExperienceChange = (e) => {
    const list = this.state.experienceList;
    const index = list.findIndex(x => x.id === e.target.form.id);

    this.setState({
      experienceList: [
        ...list.slice(0, index),
        {
          ...list[index],
          [e.target.name]: (e.target.type == 'checkbox') ? e.target.checked : e.target.value
        },
        ...list.slice(index + 1),
      ]
    });
  }
  onEducationChange = (e) => {
    const list = this.state.educationList;
    const index = list.findIndex(x => x.id === e.target.form.id);

    this.setState({
      educationList: [
        ...list.slice(0, index),
        {
          ...list[index],
          [e.target.name]: (e.target.type == 'checkbox') ? e.target.checked : e.target.value
        },
        ...list.slice(index + 1),
      ]
    });
  }

  addExperienceItem = (callback) => {
    console.log(this.state.experienceList)
    this.setState({
      experienceList: this.state.experienceList.concat({
        ...emptyExperience,
        id: uniqid()
      })
    }, callback);
  }
  addEducationItem = () => {
    this.setState({
      educationList: this.state.educationList.concat({
        ...emptyEducation,
        id: uniqid()
      })
    });
  }

  backPage = () => {
    this.setState({
      currentPage: this.state.currentPage - 1
    });
  }
  nextPage = () => {
    this.setState({
      currentPage: this.state.currentPage + 1
    });
  }

  downloadPDF = () => {

  }
  
  render() {
    const {personal, experienceList, educationList, currentPage} = this.state;
    const buttons = {
      backPage: this.backPage, 
      nextPage: this.nextPage, 
      downloadPDF: this.downloadPDF
    }

    return (
      <div className="row">
        <div className="col-6">
          <div className='form-container'>
            {currentPage == 1 && <Personal info={personal} onChange={this.onPersonalChange} buttons={buttons}/>}
            {currentPage == 2 && <Experience list={experienceList} onChange={this.onExperienceChange} addItem={this.addExperienceItem} buttons={buttons}/>}
            {currentPage == 3 && <Education list={educationList} onChange={this.onEducationChange} addItem={this.addEducationItem} buttons={buttons}/>}
          </div>
        </div>
        <div className="col-6">
          <div className='preview-container'>
            
          </div>
        </div>
      </div>
      
    );
  }
}