import React from 'react';
import '../styles/App.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Card from '../components/Card';
import Button from '../components/Button'

function Services() {
    return (
        <>
        <Navbar></Navbar>
        <div className="pages-background">
            <div className="pages-container">
            <div className="pages-banner"><h1>The Services We Offer</h1></div>
            <div className="pages-parent">

            <Card
            title ='Current Patients: Office Visit'
            body='We are very simple in terms of our pricing. If you are a current patient the price for a Regular Office visit is $110.00
             if paid on the day of visit we do offer a 20% discount totaling in $88.00'></Card>
            <Card
            title ='Current Patients: Extended Office Visit'
            body='If you are a current patient the price for an Extended Office visit is $168.00
             .If paid on the day of visit we do offer a 20% discount totaling in $134.40'></Card>
            <Card
            title ='New Patients: Office Visit'
            body='If you are a new patient, we recommend contacting your insurance company to ensure Dr. Honeycutt is in your network. The price for a Regular Office visit is $120.00
             if paid on the day of visit we do offer a 20% discount totaling in $96.00'></Card>
            <Card
            title ='New Patients: Extended Office Visit'
            body='If you are a new patient, we recommend contacting your insurance company to ensure Dr. Honeycutt is in your network. The price for an Extended Office visit is $170.00
             if paid on the day of visit we do offer a 20% discount totaling in $136.00'></Card>
        </div>
        <div className="pages-banner">
            <Button sizeButton='button--large'>Contact us to schedule an appointment</Button>
        </div>
        </div>

        </div>
        <Footer></Footer>
        </>
    )
}

export default Services;