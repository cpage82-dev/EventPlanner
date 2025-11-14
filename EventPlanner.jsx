import React from 'react';
import './EventPlanner.css'; // Import CSS file for styling
import Footer from './Footer';
const EventPlanner = () => {
    return (
        <div className="event-planner-container">
            {/* Page Header */}
            <header>
                <h1>Welcome to Event Planner</h1>
            </header>
            {/* Section for describing the purpose or overview of the app */}
            <section className="description">
                {/* Description of the content goes here */}
                {/* Brief introduction or marketing message */}
                <p>
                    Plan and organize your events effortlessly with Event Planner. From
                    birthdays to corporate meetings, we've got you covered.
                </p>
                {/* Primary call-to-action button */}
                <button className="get-started-button">Get Started</button>
            </section>
            {/* Section to list or categorize different types of events */}
            <section className="events_categories">
                {/* Social Event Types */}
                <ul>
                    <h2>Social Events:</h2>
                        <li>Birthday Parties</li>
                        <li>Anniversary Celebrations</li>                   
                        <li>Wedding Receptions</li>
                        <li>Baby Showers</li>
                        <li>Graduation Parties</li>
                        <li>Family Reunions</li>
                </ul>
                {/* Entertainment-Based Event Types */}
                <ul>
                    <h2>Entertainment Events:</h2>
                        <li>Concerts</li>
                        <li>Musical Festivals</li>                   
                        <li>Film Screenings</li>
                        <li>Comedy Shows</li>
                        <li>Art Exhibitions</li>
                        <li>Cultural Events</li>
                </ul>
                {/* Community-Focused Event Types */}
                <ul>
                    <h2>Community Events:</h2>
                        <li>Fundraising Events</li>
                        <li>Charity Galas</li>                   
                        <li>Volunteer Drives</li>
                        <li>Neighborhood Block Parties</li>
                        <li>Community Festivals</li>
                        <li>Cultural Celebrations</li>
                </ul>
            </section>
            {/* Section to highlight app features or functionalities */}
            <section className="features">
                {/* Features content goes here */}
                {/* Section Heading */}
                <h2>Features</h2>
                {/* List of key platform features */}
                <ul>
                    <li>Easy event creation and management</li>
                    <li>Customizable event templates</li>
                    <li>Guest list management</li>
                    <li>Real-time collaboration</li>
                    <li>Reminders and notifications</li>
                </ul>
            </section>
            {/* Section to showcase user reviews or testimonials */}
            <section className="testimonials">
                {/* Testimonials content goes here */}
                <h2>Testimonials</h2>
                <div className="testimonial">
                    <p>"Event Planner made organizing my wedding a breeze. Highly recommended!"</p>
                    <p className="author">- Emily Johnson</p>
                </div>
                {/* Add another testimonial block */}
                <div className="testimonial">
                    <p>"I use Event Planner for all my corporate events. It saves me so much time and effort!"</p>
                    <p className="author">- John Smith</p>
                </div>
            </section>
            {/* Section to provide contact information or a contact form */}
            <section className="contact">
                {/* Contact content goes here */}
                {/* Section heading */}
                <h2>Contact Us</h2>
                {/* Contact form */}
                <form>
                    {/* Name input field */}
                    <input type="text" placeholder="Name" />
                    {/* Email input field */}
                    <input type="email" placeholder="Email" />
                    {/* Message input field */}
                    <textarea placeholder="Message"></textarea>
                    {/* Submit button */}
                    <button className="submit-button">Send</button>
                </form>
            </section>
            <Footer/>
        </div>
    );
};

export default EventPlanner;
