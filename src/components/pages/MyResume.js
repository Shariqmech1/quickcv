import React from 'react';
import uniqid from 'uniqid';
import Footer from '../Footer';
import Experience from '../form/Experience';
import Personal from '../form/Personal';
import Preview from '../Preview';
import Print from '../Print';
import Education from '../form/Education';
import Navbar from '../Navbar'
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
  
 class MyResume extends React.Component {
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
          email: "",
          summary: ""
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
            [e.target.name]: (e.target.type === 'checkbox') ? e.target.checked : e.target.value
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
            [e.target.name]: (e.target.type === 'checkbox') ? e.target.checked : e.target.value
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
    addEducationItem = (callback) => {
      this.setState({
        educationList: this.state.educationList.concat({
          ...emptyEducation,
          id: uniqid()
        })
      }, callback);
    }
  
    deleteExperienceItem = (e, callback) => {
      if(this.state.experienceList.length > 1)
        this.setState({
          experienceList: this.state.experienceList.filter(x => x.id !== e.currentTarget.parentNode.parentNode.id)
        });
      else 
        this.setState({
          experienceList: [{
            ...emptyExperience,
            id: uniqid()
          }]
        }, callback);
    }
    deleteEducationItem = (e, callback) => {
      if(this.state.educationList.length > 1)
        this.setState({
          educationList: this.state.educationList.filter(x => x.id !== e.currentTarget.parentNode.parentNode.id)
        });
      else
        this.setState({
          educationList: [{
            ...emptyEducation,
            id: uniqid()
          }]
        }, callback);
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
  
    setComponentRef = (ref) => {
      this.componentRef = ref;
    }
    
    render() {
      const {personal, experienceList, educationList, currentPage} = this.state;
      const buttons = {
        backPage: this.backPage, 
        nextPage: this.nextPage, 
        downloadPDF: this.downloadPDF
      }
  return (
    <>  
     <div>
    <Navbar/>
    </div>
    <div className="row content">
 
    <div className='form-container'>
          {currentPage === 1 && <Personal info={personal} onChange={this.onPersonalChange} buttons={buttons}/>}
          {currentPage === 2 && <Experience list={experienceList} onChange={this.onExperienceChange} addItem={this.addExperienceItem} deleteItem={this.deleteExperienceItem} buttons={buttons}/>}
          {currentPage === 3 && <Education list={educationList} onChange={this.onEducationChange} addItem={this.addEducationItem} deleteItem={this.deleteEducationItem} buttons={buttons} previewRef={this.componentRef}/>}
    </div>
    <div className='preview-container'>
          <Preview info={this.state}/>   
        </div>
    </div>
    <div className="print-container">
          <Print info={this.state} ref={this.setComponentRef}/>
        </div>
        <div>
        <Footer/>
        </div>
 
    </>
    
  );
}


}
export default MyResume;  