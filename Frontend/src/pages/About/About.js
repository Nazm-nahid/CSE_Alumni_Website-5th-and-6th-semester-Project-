import React from 'react'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import './about.css';

const About = () => {

  const authToken = localStorage.getItem("sacAuthToken");

  return (
       <Card className="about-card">
      <CardMedia
        component="img"
        height="140"
        image="https://www.ruet.ac.bd/public/storage/sliders/5th-convocation.jpg"
        alt="ruet"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Rajshahi University of Engineering & Technology (RUET)
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Rajshahi University of Engineering & Technology (RUET) is the 2nd oldest prestigious public Engineering University of Bangladesh offers quality education and research in the field of engineering and technology. The university established in 1964 as Rajshahi Engineering College with three Engineering departments namely Mechanical Engineering, Electrical & Electronic Engineering and Civil Engineering. The institute started with Bachelor degree program and limited number of students (122) enrolled in three departments each year. Later it was converted to Bangladesh Institute of Technology (BIT), Rajshahi in 1986 to enhance the technical education. The institute is upgraded as Rajshahi University of Engineering & Technology (RUET) in September, 2003 to enhance the technical education and research. The university is financed by the Government through the university Grants Commission of Bangladesh. The university is an autonomous statutory organization of the Government of Bangladesh functioning within the "Rajshahi University of Engineering &Technology Act 2003. Currently, the university comprises 14 departments including engineering and sciences offers under-graduate and post-graduate degrees. Every year 725 most brilliant students are enrolled for the undergraduate program (session 2014-2015) through transparent and standard admission test. About 3000 students are pursuing their higher study in this green campus including under-graduate and post-graduate with over 200 prominent faculty members of diverse field of expertise. In graduate level, M.Sc. Engg., M. Engg., M.Phil and PhD programs and research are continuing in a qualitative manner under the faculties. The university also receive a significant numbers of international students are continuing their higher study in this campus. The medium of instruction and necessary assessment of this university is English.
        </Typography>
        <br></br>
        <Typography gutterBottom variant="h5" component="div">
        CSE Alumni website!!! Why This?
        </Typography>
        <Typography variant="body2" color="text.secondary">
        RUET CSE is one of the major department having more than 1000 alumni studens who are working as a  <b>Faculty</b>,
         <b>researcher</b> ,  <b>software engineer</b>, <b>machine learning engineer</b>, <b>PhD holders</b>,<b>Data Scientist</b> .
         So we try to make a collection of data (Contact Info , Job info) of them in single box and also gives them a platform
         to express their experience in a single post. 
   
        </Typography>
        <br></br>
        {
          authToken===null 
          ?
          <Typography variant="body2" color="red">
         <b>If you are a present student or alumni of RUET CSE department.
         Please Sign In with your Informations.</b>
        </Typography>
        : null
        }
        
      </CardContent>
       
    </Card>
   
  )
}
export default About;