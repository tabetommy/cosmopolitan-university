import React from "react";
import home from '../../images/home.jpg';
import student_1 from '../../images/student_1.jpg';
import student_2 from '../../images/student_2.jpg';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './common-component.css';
import {Link} from 'react-router-dom';




const CommonComponent = () => {
    return (
        <div className="home-main">
            <div style={{ backgroundImage:`url(${home})`,backgroundRepeat:"no-repeat",
                backgroundSize:"cover",backgroundAttachment: "fixed", height:'100%',width:'100%'}} className="mb-1 d-flex justify-content-center pb-5 pt-5">
                <Card className="home-card">
                    <Card.Body>
                        <Card.Text>
                            Studying has never been easier. Study from the confort of your home with 
                            Cosmopolitan University 
                        </Card.Text>
                        <Link to="/programs">
                            <Button variant="dark">See our programs</Button>
                        </Link>
                    </Card.Body>
                </Card>
            </div>
            <div className="demo-con mb-1">
                <div className="w-size">
                    <img src={student_1} alt='student_1' className="w-100"/>
                </div>
                <Card className="w-size bg-dark">
                    <Card.Body>
                        <Card.Text  className="text-white">
                            Studying has never been easier. Study from the confort of your home with 
                            Cosmopolitan University 
                        </Card.Text>
                        <Link to="/programs">
                            <Button variant="primary">See our programs</Button>
                        </Link>
                    </Card.Body>
                </Card>   
            </div>
            <div  className="demo-con">
                <Card className="w-size bg-dark">
                    <Card.Body>
                        <Card.Text  className="text-white">
                            Studying has never been easier. Study from the confort of your home with 
                            Cosmopolitan University 
                        </Card.Text>
                        <Link to="/programs">
                            <Button variant="primary">See our programs</Button>
                        </Link>
                    </Card.Body>
                </Card>  
                <div className="w-size">
                    <img src={student_2} alt='student_1' className="w-100"/>
                </div> 
            </div>
        </div>

    );
}

export default CommonComponent