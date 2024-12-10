import React, { useState } from 'react';
import { app, analytics } from "./firebase";
import Avatar from './components/Avatar';
import Card from './components/Card';
import Project, { ProjectType } from './components/Project';
import Button from './components/Button';
import Modal from './components/Modal';
import GithubIcon from './components/GithubIcon';
import LinkedInIcon from './components/LinkedinIcon';
import Input from './components/Input';
import Textarea from './components/TextArea';


const projects: ProjectType[] = [
  {
    imgUrl: './work-in-progress.png',
    title: 'DigitalNomap',
    description: 'A digital nomad community platform.',
    technologies: ['React Native', 'Firebase'],
    deployUrl: '',
    githubUrl: ''
  },
  {
    imgUrl: './servook.png',
    title: 'Servook',
    description:"A platform for connecting with local professionals. Iterated and pivoted along the way from an initial concept of an 'App for booking Barbers' to a 'multi service, on demand, Uber-like platform' and finally simplified it to a 'Local services marketplace'.",
    technologies: ["React", "Apollo", "GraphQL", "Django", "Graphene", "Postgres", "Celery", "AWS SES (email) and S3 (storage)", "Firebase Cloud Messages", "WebSockets", "Nginx", "Supervisor", "Daphne"],
    deployUrl: 'https://servook.com',
    githubUrl: ''
  },
  {
    imgUrl: 'standup-timer.png',
    title: 'Standup Timer',
    description: 'Chrome extension for managing sprint standup participants and timer.',
    technologies: [ 'JS'],
    deployUrl: 'https://chromewebstore.google.com/detail/cakffpfihkncphdcebdpjfdlbncliioj/preview?hl=en-GB&authuser=0',
    githubUrl: 'https://github.com/carlosalvarez91/standup-timer'
  },
  {
    imgUrl: './timezone-converter.png',
    title: 'Timezone Converter',
    description: <span><p>A tool to convert between timezones, e.g: I have a meeting at 9:00 AM in New York, but I want to know what time that is in Bangkok. </p> <p>It uses the <a className='underline' href='https://momentjs.com/timezone/' target='_blank' rel="noreferrer">moment-timezone</a> library to handle timezone conversions. </p> <p>It also uses the <a className='underline' href='https://docs.mapbox.com/mapbox-gl-js/api/' target='_blank' rel="noreferrer">mapbox-gl </a>library to display a map of the world with timezones highlighted. </p> <p>The geojson data that is used to display the timezones map is taken from <a className='underline' href='https://github.com/evansiroky/timezone-boundary-builder' target='_blank' rel="noreferrer">timezone-boundary-builder </a>and I also use <a className='underline' href='https://www.npmjs.com/package/countries-and-timezones' target='_blank' rel="noreferrer">countries-and-timezones</a> library to query timezone data.</p></span>,
    technologies: ['React', 'Mapbox'],
    deployUrl: 'https://timezone-converter.surge.sh/',
    githubUrl: 'https://github.com/carlosalvarez91/timezone-converter'
  },
  {
    imgUrl: './3D-meeting-room.png',
    title: '3D Classroom',
    description: <span>A 3D virtual space forked from <a className='underline' href='https://github.com/AidanNelson/threejs-webrtc' target='_blank' rel="noreferrer">here</a> as a starting point in a hackathon project for <a className='underline' href='https://www.gostudent.org/' target='_blank' rel="noreferrer"> GoStudent.</a></span>,
    technologies: ['Express', 'Socket IO', 'WebRTC', 'Three.js'],
    deployUrl: 'https://meeting-room-3d.herokuapp.com/',
    githubUrl: 'https://github.com/carlosalvarez91/threejs-webrtc'
  },
  {
    imgUrl: 'building3D.png',
    title: '3D building in Mapbox',
    description: <span><p>Georeferenced 3D floorplan overlayed on top of a map.</p><p> Experiement for <a className='underline' href='https://www.danalto.com/' target='_blank' rel="noreferrer">Danalto</a>.</p></span>,
    technologies: ['Mapbox', 'Sketch Up'],
    deployUrl: 'https://mapboxgl_3d.surge.sh/',
    githubUrl: 'https://github.com/carlosalvarez91/mapbox-gl-indoor'
  },
  {
    imgUrl: 'gitlab-job-notifier.png',
    title: 'Gitlab Job Notifier',
    description: 'Chrome extension for Gitlab CI/CD Pipeline Job, it will notify you when the current job finishes.',
    technologies: [ 'JS'],
    deployUrl: 'https://chromewebstore.google.com/detail/abjeghbndlapiblmkekepkmhmcooidbe/preview?hl=en-GB&authuser=0',
    githubUrl: 'https://github.com/carlosalvarez91/gitlab-job-notifier'
  },
  {
    imgUrl: 'backpackers_pms.jpeg',
    title: 'Hostel PMS',
    description: 'A desktop application for managing and and printing receipts for Backpackers Citi Hostel Dublin. ',
    technologies: ['Electron', 'SQLite'],
    deployUrl: '',
    githubUrl: 'https://github.com/carlosalvarez91/electron-hostel-app'
  },
  {
    imgUrl: 'commuter.png',
    title: 'Commuter',
    description: 'Mobile payment application for the transport using NFC. Built in Ionic Framework (AngularJS), Loopback (NodeJS) as a Back-end and Arduino as a simulation of Transport payment machine.',
    technologies: [ 'Loopback', 'Ionic', 'Arduino'],
    deployUrl: '',
    githubUrl: 'https://github.com/carlosalvarez91/Commuter'
  },
]

const App = () => {
  console.log("Firebase App initialized:", app);
  console.log("Firebase Analytics initialized:", analytics);
  const [isContactModalActive, setIsContactModalActive] = useState(false);
  const [textValue, setTextValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [loading, setLoading] = useState(false);

  return <div className='flex flex-col gap-5 w-full bg-[radial-gradient(#80808080_1px,transparent_1px)] [background-size:16px_16px]'>
           {/* Profile */}
           <div className='flex flex-col gap-5 w-full pt-20 items-center'>

              <Avatar
              imageUrl='./yo.png' 
              />

              <div className='flex flex-row gap-2 w-11/12 sm:w-[480px] justify-between'>
                <Button onClick={()=>setIsContactModalActive(true)} >Contact Me</Button>
                <Button onClick={()=>{
                  window.open('https://drive.google.com/uc?id=1hMh1wI-nfIcghD6VTN-Vd4g2deJopKnD&export=download', '_blank')
                }} >Download CV</Button>
                <Button onClick={()=>{
                  window.open('https://buymeacoffee.com/carlosalvarez13')
                }} >Buy me a coffee &nbsp; 🫶</Button>
              </div>

              <Card className=' w-11/12 sm:w-[480px] p-6 pr-2 flex flex-col text-sm font-semibold  gap-3 items-start'>
                  <span>
                    🦄 &nbsp; 50% Frontend 35% Backend 15% UX.
                  </span>
                  <span>
                    💻 &nbsp; Over 6 years of experience in the EdTech and IoT Industry.
                  </span>
                  <span>
                    ✅ &nbsp; Strong skills in React, Django, Postgres, InfluxDB, etc.
                  </span>
                  <span>
                    🚀 &nbsp; Passionate about contributing to innovative startups.
                  </span>
                  <span>
                    🌏 &nbsp; Remote only.
                  </span>

                  <div className='flex flex-row gap-3 absolute bottom-3 right-3'>
                    <a href='https://github.com/carlosalvarez91'  target='_blank' rel='noreferrer'>
                    <GithubIcon />
                    </a>
                    <a href='https://www.linkedin.com/in/carlos-alvarez91/'  target='_blank' rel='noreferrer'>
                    <LinkedInIcon />
                    </a>
                  </div>
              </Card>

              <Modal active={isContactModalActive} setActive={setIsContactModalActive}>
                <div className='flex flex-col gap-2 w-full items-center'>
                  <Input className='w-full' value={emailValue} setValue={setEmailValue} placeholder='Email' />
                  <Textarea value={textValue} setValue={setTextValue} placeholder='Type your message here' />
                  <Button
                  className='w-20 flex justify-center'
                  disabled={!emailValue || !textValue || loading}
                  onClick={async () => {
                    setLoading(true);
                    try {
                      const response = await fetch('https://formspree.io/f/mgeronye', {
                        method: 'POST',
                        headers: {
                          'Content-Type': 'application/json',
                          'Accept': 'application/json'
                        },
                        body: JSON.stringify({
                          email: emailValue,
                          message: textValue
                        })
                      });

                      if (response.ok) {
                        setLoading(false);
                        setEmailValue('');
                        setTextValue('');
                        setIsContactModalActive(false);
                      }
                    } catch (error) {
                      setLoading(false);
                      console.error('Error sending message:', error);
                      setIsContactModalActive(false);
                    }
                  }}
                  >Send</Button>
                </div>
              </Modal>
           </div>
           {/* Projects */}
          <div className='flex flex-col w-full items-center mb-5'>
            <span className='text-xl font-bold mb-5'>Projects</span>
            <div className='flex'>
              <div className="masonry sm:masonry-sm md:masonry-md">
                 {projects.map((e)=>{
                   return <Project 
                    key={e.title}
                    className=" break-inside w-72"
                    {...e}
                    />
                 })}

              </div>
              </div>
              <p className='mt-5 font-semibold'>Contact me to see more projects.</p>
          </div>

    </div>
};

export default App;
