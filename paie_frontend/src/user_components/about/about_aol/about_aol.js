import React from "react";
import Header from "../../header/header";
import gurupic from '../../../Assets/guruji_1.jpg';
function Aboutaol(){
    return(
        <>
        <Header/>
        <div className="body">
        <h1>ABOUT ART OF LIVING </h1>
        <div id="gurupic">
          <img src={gurupic} />
        </div>
        <div className="writin"><p>
        The Art of Living Foundation is a volunteer-based, humanitarian and educational non-governmental organization (NGO).
        It was founded in 1981 by Ravi Shankar. The Art of Living Foundation has its centers in 180 countries.</p>
          <div id="organization">
            <h3>Organization:</h3>
            <p>Art of Living Foundation has been an educational and humanitarian organization in the U.S. since 1989.Accredited as a 
            United Nations non-governmental organization in 1996, it works in special consultative status with the UN's Economic and Social 
            Council.The majority of the officers of the organization, along with most of its teachers and staff, are volunteers.Many of its programs 
            are conducted through, or in conjunction with a partner organization, the International Association for Human Values (IAHV). It's programs draw 
            on Advaita Vedanta tradition and practices. The Foundation operates as a charitable or a non-profit organization with chapters in many parts of the world.
            According to the tax return filed by the American chapter, AOL Foundation had total revenues of $US5.5 million, an income of $US3.5 million from course fees
             and expenditure of $US3.4 million from July 2006 to June 2007. Net assets at the beginning of July 2007 amounted to $US7.7 million.</p>
          </div>
          <div id="courses">
            <h3>Programmes and courses:</h3>
            <p>
            Its stress-elimination and self-development programs are based on the breathing technique Sudarshan Kriya, meditation and yoga.
             This technique is a major part of Art of Living courses. These courses have been conducted for students and faculty, government officials,firemen,ex-militants,
              and prisoners.</p>
          </div>
          <div id="service">
            <h3>Social service:</h3>
            <p>Its areas of work cover disaster relief, poverty alleviation, prisoner rehabilitation,empowerment of women, campaigns against female foeticide,and environmental sustainability.<br/>

<span>Project Vidarbha</span><br/>
In 2007, with the support of state government, volunteers from the foundation provided training to farmers in six Vidarbha districts in organic and zero-budget farming,
 rainwater harvesting and multiple cropping as well as teaching them the Art of Living course. The next year, the foundation said it had to reduce the scale of its work after
  the state government announced loan waiver for farmers and pulled back funding to the foundation's project

In 2008, Ravi Shankar announced the extension of the program to Andhra Pradesh to end farmer suicides from financial stress in that state.<br/>

<span>Mission Green Earth</span><br/>
in 2008, the foundation launched 'Mission Green Earth Stand Up Take Action' campaign to plant 100 million trees to help reduce global warming and protect the environment, in partnership with United Nations Millennium Campaign and United Nations Environment Programme.<br/>

<span>River Rejuvenation Projects</span><br/>
In February 2013, the foundation launched a three-year program to rejuvenate the Kumudavathi River (in Bangalore) under its 'Volunteer for Better India' campaign along with civic authorities and environmentalists to address water shortage problems Ravi Shankar led a walkathon in Bangalore to create awareness about the program.
The project had revived five water-recharge wells, constructed 74 boulder checks, cleaned up 18 step wells and planted 2,350 saplings in seven villages by June 2014.
Similar efforts were held to revive Pallar River in Andhra Pradesh, Manjra river in Maharashtra, and Vedavathi River in Karnataka.<br/>

<span>Volunteer For a Better India</span><br/>
The Art of Living, along with UN agencies, NGOs and civil society, launched Volunteer For a Better India (VFABI) on 5 December 2012.

VFABI protested against the 2012 Delhi gang-rape case. In May 2013, 1,634 volunteers distributed medicines worth Rs. 2.2 million under the guidance of 262 doctors to over 20,000 slum dwellers
 in Delhi through 108 free health camps organized in collaboration with the Indian Medical Association.

In September 2013, the 'I vote for better India' initiative was launched to increase awareness of the importance of voting as a responsibility towards the nation.</p>
          </div>
          
        </div>
        </div>
      
        </>
    )
}
export default Aboutaol;
