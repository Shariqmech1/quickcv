/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/jsx-no-undef */
import React from 'react';
import uniqid from 'uniqid';
// import  { useEffect, useState } from "react";
// import { auth } from "./firebase";
import './styles/App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import MyResume from './components/pages/MyResume';
import Login from './components/pages/Login';
import Signup from './components/pages/Signup';


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
    
  //   const [userName, setUserName] = useState("");

  // useEffect(() => {
  //   auth.onAuthStateChanged((user) => {
  //     if (user) {
  //       setUserName(user.displayName);
  //     } else setUserName("");
  //   });
  // },);
    // const {personal, experienceList, educationList, currentPage} = this.state;
    // const buttons = {
    //   backPage: this.backPage, 
    //   nextPage: this.nextPage, 
    //   downloadPDF: this.downloadPDF
    // }

    return (
      <div className="">
      <Router>
        <Routes>
          <Route  path='/' exact element={<Home/>} />
          <Route  path='/MyResume' exact element={<MyResume/>} />
          <Route  path='/Login' exact element={<Login/>} />
          <Route  path='/Signup' exact element={<Signup/>} />
        </Routes>
      </Router>
    </div>
     );
}
}


     