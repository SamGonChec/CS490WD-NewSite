import React from 'react';
import '../styles/App.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Card from '../components/Card';

function About() {
  return (
    <>
      <Navbar/>
      {/* content */}
      
      <div className="pages-background">
      <div className="pages-container">  
      <div className="banner">
        <h1 className="pages-banner">Our Staff</h1>
      </div>
      <div className="pages-parent">
      <Card
      title ='Mrs. Barbara McCullough, FNP-C'
      imageURL ="img/barbfamilyphoto.jpg"
      body='Is from the Chillicothe area, and has grown up in a family practice setting. Her mother is a recently retired family physician, and Barb worked in her clinic while growing up. 
            She has done many roles throughout the years, working in a dialysis clinic, as an RN in Labor and Delivery, 
            and finally with our clinic as a Family Nurse Practitioner. 
            She has 3 children, 1 stepdaughter, and 1 granddaughter. During the summer she enjoys spending time at the lake with her family, 
            and hopes to move to Florida one day… though we hope not too soon, as she has been an amazing fit for our clinic!'></Card>
       <Card title='Mrs. Emilee Lam-Stevens, FNP-C'
       imageURL='img/emileefamphoto.jpg'
       body='Emilee is a 2019 graduate of the University of Central Missouri Nurse Practitioner program, and is board certified in Family Practice. She is a graduate of Hardin Central, 
       and still resides in Hardin with her husband Kyle, daughter Lynlee, son Barrett, (and one on the way… shhhh… no one knows yet)… 
       she has always wanted to live and provide care in her community and enjoys spending time with her family in their new camper, when not at the office.'></Card>    
         <Card title='Mrs. Jackie Sattler, FNP-C' 
         imageURL='img/jackieandtimmy.jpg' 
         body='Jackie Sattler has been a Nurse Practitioner since 2006, and is a graduate of Richmond High School. 
         She attended the University of Central Missouri in Warrensburg to obtain her Nurse Practitioner degree, and is Board Certified in Family Practice. 
         She resides in Richmond with her husband, Dr. Jeff Sattler, and her son Timmy. 
         She enjoys watching her son compete in golf matches and play in band, as well as her two rescue pups, Daisy and Charlie.'>

         </Card>
         <Card title='Dr. Jamie Honeycutt, MD, Board Certified Family Physician'
         imageURL='img/honeycuttfamily.jpg'
         body='Dr. Honeycutt grew up in the Richmond area, graduating from Orrick High School. She attended UMKC school of Medicine, and did her Family Practice residency at the University of Illinois in Peoria. 
         She always knew she wanted to come back to her hometown and provide care for her community, and raise her family here. 
         She resides in the Richmond area with her husband and two sons, and enjoys watching them play sports, and show their livestock at local and national livestock competition shows. 
         She started with Richmond Family Clinic in 2006, while it was owned by Meritas Health. Meritas Health wanted to close their Richmond location in 2007, 
         so Dr. Honeycutt along with Dr. Nathan Inzerillo opened privately under the Richmond Family Clinic name on February 18th, 2008. 
         She has been providing care to the Richmond and surrounding communities for over 10 years now, and enjoys watching her patients and their families grow, and has no plans to leave the area.  '>

         </Card>
       </div>
       </div>
       </div>


      <Footer />

    </>
  );
}

export default About;