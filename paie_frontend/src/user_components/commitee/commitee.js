import React from "react";
import Header from "../header/header";
import gurupic from '../../Assets/guruji_1.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../commitee/commitee.css';
function Commitee(){
    return(
        <>
        <Header/>
        <div className="body">
        <h1>PAIE CELL COMMITTEE</h1>
           <br/>
          <div class="table-responsive text-center" >
            <table class="table" >

                <tr>
                     <th>S.no</th>
                     <th>Name of the Member</th>
                     <th>Department</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Dr. M.Jagapathi Raju</td>
                    <td>PRINCIPAL</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Dr. P. Bhavani</td>
                    <td>Chemistry</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Sri S.S. Mohana Reddy</td>
                    <td>ECE</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Sri ACSV Prasad</td>
                    <td>Civil</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Prof. DSN Raju</td>
                    <td>Mechanical</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Dr. V. Chandra Sekhar</td>
                    <td>CSE</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>Sri D. Chandra Sekhar</td>
                    <td>Chemistry</td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>Sri PV Narasimha Raju</td>
                    <td>Library</td>
                </tr>
                <tr>
                    <td>9</td>
                    <td>Sri K. Prasada Raju</td>
                    <td>EEE</td>
                </tr>
                <tr>
                    <td>10</td>
                    <td>Sri S. Rama Gopala Reddy</td>
                    <td>IT</td>
                </tr>
                <tr>
                    <td>11</td>
                    <td>Sri N. Sagar</td>
                    <td>English</td>
                </tr><tr>
                    <td>12</td>
                    <td>Sri N. Bangar Raju</td>
                    <td>Office</td>
                </tr>

            </table>
            </div>
        <h1>PAIE (PEOPLE ASSOCIATIONS FOR INNER ENGINEERING) </h1>
        <div id="mampic">
          <img src={gurupic} width="220px" height="270px" />
        </div>
        <div className="writin"><p>
            Headed by <span>Dr. P. Bhavani</span>, Associate Professor, Department of Engineering Chemistry, is formed with a vision to bring awareness about one’s self. Under PAIE (SRKR) we have been organizing 
            YOGA training programs with the association of “The Art of Living Foundation” for the past 10 years. The activities of PAIE include:
            <li>To bring awareness about health and happiness.</li>
             <li>   To offer stress reduction techniques.</li>
               <li> To build positive attitude and self-confidence in people.</li>
             <li>   To bring environmental awareness.</li>
              <li>  To nurture human values and inspire students to take up social responsibility.</li>
              </p>
            <li><span>PAIE</span> cell is organised by <span>Dr.P.Ramesh raju</span>, Yoga teacher ,<span>PAIE</span> cell.</li>
          </div><br/>
          <br/><br/>
          
        </div>
        </>
    )
}
export default Commitee;