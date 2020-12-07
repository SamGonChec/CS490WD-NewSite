import React from 'react';
import '../styles/App.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Card from '../components/Card';

function Contact() {
    return (
        <>
        <Navbar></Navbar>
        <div className="pages-background">
            <div className="pages-container">
                
                    <h1 className="pages-banner">Our Contact Information</h1>
                    <h1 className="h1-banner"> Call and Schedule an Appointment Today</h1>
                
              <div className="pages-parent">
                <Card
                    title="Contact Information ☎"
                    body="Telephone Number: 816-470-2131
                        Fax Number: 816-470-7171"
                ></Card>
                  <Card
                    title="Hours of Operation 🕒"
                    body="Monday-Friday: 7:30 AM - 5:00 PM
                        Saturday: 8:00 AM - 12:00 PM
                        Sunday: Closed
                        "
                ></Card>
                <Card
                    title="Holiday Hours of Operation"
                    body="
                        We are closed major Holidays: Memorial Day, 4th of July, Labor Day, Thanksgiving, Christmas, New Year’s Day"
                ></Card>
                </div>
            </div>
        </div>
        <Footer></Footer>
        </>
    )
}

export default Contact;