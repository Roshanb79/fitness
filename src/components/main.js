import React from 'react'
import "./style/main.scss";
import { Link } from "react-router-dom";

import main from "../assets/main.jpg"
import mobile2 from "../assets/mobile2.webp"
import desktop2 from "../assets/desktop2.webp"

import { TbMilk } from 'react-icons/tb';
import { CgGym } from 'react-icons/cg';
import { GiMuscleUp } from 'react-icons/gi';
import { RiArticleLine} from 'react-icons/ri';
import { MdFoodBank} from 'react-icons/md';
import { SlCalculator } from 'react-icons/sl';

const Main = () => {
    return ( 

        <>
        
        <div style={{position:"relative"}}>
            <div className='main'>
                <img src={main} alt="" />                
            </div>
            <div className='main-overlay'>
                <h1>Welcome to <br />Muscle & Strength</h1>
                <p>We provide the tools you need to build the body you want. All Free.</p>
                <Link to={"#"}>
                        <button className='main-learnMore-btn'>Learn More</button>
                </Link>            
            </div>
        </div>
        <div className='main-nav-container'>
        <div className='main-navs'>
            <Link to={"#"}>
                <div className='main-nav'>
                <TbMilk />
                <p>Store</p>
                </div>
            </Link>
            <Link to={"#"}>
                <div className='main-nav'>
                <CgGym />
                <p>Workout</p>
                </div>
            </Link>
            <Link to={"#"}>
                <div className='main-nav'>
                <GiMuscleUp />
                <p>Exercise</p>
                </div>
            </Link>
            <Link to={"#"}>
                <div className='main-nav'>
                <RiArticleLine />
                <p>Articles</p>
                </div>
            </Link>
            <Link to={"#"}>
                <div className='main-nav'>
                <MdFoodBank />
                <p>Diet Plans</p>
                </div>
            </Link>
            <Link to={"#"}>
                <div className='main-nav'>
                <SlCalculator />
                <p>Tools</p>
                </div>
            </Link>
        </div>
        <div className='mobilead2'>
            <img src={mobile2} alt=""></img>
        </div>
        <div className='desktopad2'>
            <img src={desktop2} alt=""></img>
        </div>
    </div></>
     );
}
 
export default Main;