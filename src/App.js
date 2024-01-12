import React from 'react';
import './App.css';
import Header from './components/Header.js';
import Hero from './components/Hero.js';
import Card from './components/Card.js';
import Registrationform from './components/Registrationform.js';
import FAQs from './components/Accordian/FAQs.js';

function App() {
  
  return (
    <div className="App">
    <Header />
    <Hero />
    <div class="events">
    <h1><a id='event-details' >Event Details</a></h1>
    <div className='card-container'>

    <Card 
    title="HTML WorkShop" 
    location="Jaipur" 
    date="Januray 15, 2024" 
    description="A full blown workshop on HTML.Ignite your HTML spirit at the Workshop.
     Register to learn from industry experts, participate in startup simulations, and turn your business ideas into web-reality." />

    <Card 
    title="Sports Event" 
    location="Jaipur" 
    date="Januray 15, 2024" 
    description="Introducing Various sports.Unleash your competitive spirit at the Sports Event. Register to participate in a variety of sports tournaments, enjoy friendly competition, and celebrate the thrill of athleticism on campus." />

    <Card 
    title="InnovateU Conference" 
    location="Jaipur" 
    date="February 15, 2024" 
    description="Explore the latest trends in innovation and technology. Join us for a day of inspiring keynotes, 
    interactive workshops, and networking opportunities. Register now to be part of the innovation revolution!" />

    <Card 
    title="Artistry Unleashed Exhibition" 
    location="Jaipur" 
    date="March 10, 2024" 
    description="Unleash your creativity at our annual Artistry Unleashed Exhibition. Register to showcase your artistic talents, 
    connect with fellow artists, and celebrate the diverse expressions of creativity on campus." />


    <Card 
    title= 'Leadership Summit 2024' 
    date='April 5-6, 2024' 
    location='Student Union Ballroom' 
    description='Elevate your leadership skills at the Leadership Summit 2024. Two days of dynamic workshops, inspiring speakers, and collaborative activities. Register now to become the leader you aspire to be!'
    />

    <Card 
     title= 'Global Impact Hackathon' 
     date='May 20-22, 2024' 
     location= 'Engineering Building' 
     description= 'Tackle global challenges through innovation at the Global Impact Hackathon. Register now to join a diverse team of problem solvers, developers, and designers in creating solutions that make a difference.'
     />
     
     <Card 
     title = 'Cultural Fusion Festival' 
     date = 'June 8, 2024' 
     location = 'Outdoor Amphitheater' 
     description = 'Celebrate diversity at the Cultural Fusion Festival. Register to experience a day of cultural performances, international cuisine, and interactive exhibits that showcase the rich tapestry of our student community.' 
     />

     <Card
     title = 'Sports Extravaganza 2024' 
     date ='July 15-17, 2024' 
     location = 'Athletic Complex' 
     description = 'Unleash your competitive spirit at the Sports Extravaganza 2024. Register to participate in a variety of sports tournaments, enjoy friendly competition, and celebrate the thrill of athleticism on campus.'
     />

     <Card 
     title = 'Entrepreneurship Bootcamp' 
     date ='August 12-14, 2024' 
     location = 'Business School Auditorium' 
     description = 'Ignite your entrepreneurial spirit at the Entrepreneurship Bootcamp. Register to learn from industry experts, participate in startup simulations, and turn your business ideas into reality.' 
     />

     <Card 
     title = 'Health and Wellness Expo' 
     date = 'September 5, 2024' 
     location = 'Student Health Center' 
     description = 'Prioritize your well-being at the Health and Wellness Expo. Register to explore fitness demos, mental health workshops, and discover resources for a healthier lifestyle.'
     />
    </div>
    </div>
    <hr class="horizontal-rule"/>
    <Registrationform />
    
    
    <FAQs />
    <small id="copyright">&copy2024 Umesh Agarwal</small>

    </div>
  );
}

export default App;
