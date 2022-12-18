import React from 'react'

import Card from "./units/card";
import "./style/cards.scss";

import img1 from "../assets/1.webp"
import img2 from "../assets/2.webp"
import img3 from "../assets/3.webp"
import img4 from "../assets/4.webp"
import img5 from "../assets/5.webp"
import img6 from "../assets/6.webp"

import img2_1 from "../assets/2_1.webp"
import img2_2 from "../assets/2_2.webp"
import img2_3 from "../assets/2_3.webp"
import img2_4 from "../assets/2_4.webp"
import img2_5 from "../assets/2_5.jpg"
import img2_6 from "../assets/2_6.webp"
const Cards = () => {

  const articles1 = [
    {
      image:img1,
      title:"How to Time Your Pre and Post Workout Nutrition Intake",
      desc:"Pre and post workout nutrition is not only about consuming the right nutrients, but also about timing. Learn what the research shows regarding nutrient timing for optimal performance and recovery.",
      reads:"15k",
      comments:"3"

    },
    {
      image:img2,
      title:"What You Should Know About Fasted Cardio",
      desc:"In this article you'll learn what the research shows regarding fasted cardio and fat loss loss. Hint: it could be a useful tool to help you reach your goals.",
      reads:"4.7K",
      comments:"5"

    },
    {
      image:img3,
      title:"How To Choose Your Next Training Program (Plus Program Recommendations)",
      desc:"One of the most frequently asked questions we receive is, 'What program should I move to after I finish my current programming cycle?' This step-by-step guide will help answer that.",
      reads:"12.9K",
      comments:"4"

    },
    {
      image:img4,
      title:"What To Eat Before You Workout with Samantha Jerring",
      desc:"Nutrex athlete and IFBB Pro, Samantha Jerring, gives M&S a sneak peek at what her pre-workout nutrition looks like before she heads deep into her 2022 Olympia Prep!",
      reads:"6.7K",
      comments:"0"

    },
    {
      image:img6,
      title:"6 Advanced Exercises to Build a Big and Wide Back (Plus Free Workout!)",
      desc:"Take your back development to the next level with these advanced movements. These exercises can be added to your next pulling session, back workout, or full-body training session.",
      reads:"8.7K",
      comments:"0"

    },
    {
      image:img5,
      title:"45-Minute Kettlebell and Bodyweight Workout for Fat Loss",
      desc:"This simple, yet effective full body workout maximizes fat loss and overall fitness performance. With very minimal equipment you can burn calories and start moving better.",
      reads:"35.5K",
      comments:"8"

    }

  ];
  const articles2=[
    {
      image:img2_1,
      title:"Dumbbell Only Workout: 5 Day Dumbbell Workout Split",
      desc:"This 5 day dumbbell only workout program only requires dumbbells and is perfect for those looking to build lean muscle mass at home or on the go!",
      reads:"15k",
      comments:"3"

    },
    {
      image:img2_2,
      title:"10 Week Mass Building Program",
      desc:"This workout is designed to increase your muscle mass as much as possible in 10 weeks. Works each muscle group hard once per week using mostly heavy compound exercises.",
      reads:"4.7K",
      comments:"5"

    },
    {
      image:img2_3,
      title:"6 Day Push/Pull/Legs (PPL) Powerbuilding Workout Split & Meal Plan",
      desc:"This 6 day push/pull/legs workout routine split is a high volume, rest-pause system designed for intermediate lifters looking to gain muscle and strength.",
      reads:"12.9K",
      comments:"4"

    },
    {
      image:img2_4,
      title:"Dumbbell Only Workout: 3 Day Full Body Dumbbell Workout",
      desc:"This workout program only requires dumbbells, has just the right amount of volume to promote muscle growth, and is perfect to do at home or on the go.",
      reads:"6.7K",
      comments:"0"

    },
    {
      image:img2_5,
      title:"12 Week Fat Destroyer: Complete Fat Loss Workout & Diet Program",
      desc:"This is a complete 12 week program to help you get ripped. Feature includes detailed diet plan and cardio schedule, along with a 4 day upper/lower muscle building split.",
      reads:"8.7K",
      comments:"0"

    },
    {
      image:img2_6,
      title:"8 Week Mass Building Hypertrophy Workout",
      desc:"This 4-day program will help intermediate and advanced trainees gain size and strength. Rest-pause set, drop sets, and negatives will kick your muscle gains into high gear!",
      reads:"35.5K",
      comments:"8"

    }
  ]
  return (
    <div className='cards' style={{display:"grid",gridTemplateColumn:"auto auto auto auto"}}>
        <div className='card-title'>
            <h1>NEW AT MUSCLE & STRENGTH</h1>
        </div>
        <div className='cards-container'>
            {articles1.map(({image,title,desc,reads,comments}) => <Card key={image} img={image} title={title} desc={desc} reads={reads} comments={comments} />
            
            )}
        </div>
        <div className='card-title'>
            <h1>TRENDING IN ARTICLES</h1>
        </div>
        <div className='cards-container'>
            {articles2.map(({image,title,desc,reads,comments}) => <Card key={image} img={image} title={title} desc={desc} reads={reads} comments={comments} />

            )}
        </div>
    </div>
  )
}

export default Cards