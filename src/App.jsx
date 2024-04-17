import { useState } from 'react'

import './App.css'
import Title from './components/Title'
import JobTitle from './components/JobTitle'
import Description from './components/Description'
import Expertise from './components/Expertise'
import Footer from './components/Footer'
import ProjectDisplay from './components/ProjectDisplay'

function App() {
  const [count, setCount] = useState(0)

  return (

    //this app.jsx is used for defining the structure of the app.

    <>
      <main>
        <div className='left'>
          <Title name="Krishna"/>
          <JobTitle />
          <Description />
          <Expertise />
          <Footer />
          
        </div>
        <div className='right'>
          <div style={{}}>
          <Title name={"Projects"} />
          </div>
          
          <div className="display">
            <ProjectDisplay projectName="Mern-GPT" gitLink={"Mern_bot_frontend"} projectLink={"mernbot-krishna-kaflays-projects.vercel.app/"} projectDescription={"Chat GPT clone with user authenticaion and token management made with NodeJS and ReactJS"}/>
            <ProjectDisplay projectName="Random Qoute Generator" gitLink={"random-quote-generator"} projectLink={"goatmil2k.github.io/random-quote-generator/"} projectDescription={"A web application that randomly generates a new quote upon button click, made with HTML/CSS and JavaScript"} />
            <ProjectDisplay projectName="TestYourKnowledge.com" gitLink={"cs50-final-project"} projectLink={"goatmil2k.pythonanywhere.com/"} projectDescription={"A simple web app for answering trivia questions made with Python Flask framework. This was my very first project in my programming journey"}/>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
