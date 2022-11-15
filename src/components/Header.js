import React from "react";
import ParticlesBg from "particles-bg";
import Fade from "react-reveal";
import styles from './Header.module.css';
import Button from 'react-bootstrap/Button';

function Header () {
    return (
      <header id="home" >
        <ParticlesBg type="circle" bg={true} />
        <div className={styles.header}>
        <div className="row banner">
          <div className="banner-text">
          <Fade bottom>
            <h1 className={styles.h1}>Quick CV</h1>
              </Fade>
              <hr />
            <h1 className={styles.description}>
                We give a sleek resume for every industry
              </h1>
              <p className={styles.description2}>
                With “Quick CV” you can create an outstanding and professional resume in minutes...<br/>
              </p>
             <br/>
              <Button variant="outline-primary">
              <a className={styles.smoothscroll} href="/Signup">Signup For Free</a>
                </Button>&nbsp;&nbsp;
                <Button variant="outline-primary">
              <a  className={styles.smoothscroll} href="/Login">Login</a>
                </Button>
          </div>
        </div>
</div>
    </header>
    );
  }


export default Header;



