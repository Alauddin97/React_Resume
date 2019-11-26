import React from "react";
import "./css/home.css";
import Work from './Work';
import Skill2 from './image/Skill2.jpg'

function Home() {
  return (
    <div>
      <fieldset>
        <legend>Career Objectives</legend>
        <p>
          Self-motivated and hardworking fresher seeking for an opportunity to
          work in a challenging environment to prove coding skills and utilize
          knowledge of various databases in the growth of organization.
        </p>
      </fieldset>
      <fieldset>
        <legend>Education Qualification</legend>
        <table border="1px">
          <tr>
            <th>Course</th>
            <th>Percentage / Cgpa</th>
            <th>School / College</th>
          </tr>
          <tr>
            <td>
              <label>Graduation</label>
            </td>
            <td>pursuing 7th Sem (7.69 cgpa )</td>
            <td>Ghousia College Of Engineering</td>
          </tr>
          <tr>
            <td>
              <label>HS:</label>
            </td>
            <td>77.5% </td>
            <td>Bongaigaon Higher Secondary School</td>
          </tr>
          <tr>
            <td>
              <label>HSLC:</label>
            </td>
            <td>84.5% </td>
            <td>Bongaigaon Higher Secondary English Medium School</td>
          </tr>      
        </table>
      </fieldset>
      <fieldset>
        <legend>Work Experience</legend>
          <Work/>
      </fieldset>
      <fieldset>
        <legend>Skills</legend>
        <img src={Skill2} alt="error"/>
      </fieldset>
    </div>
  );
}

export default Home;
