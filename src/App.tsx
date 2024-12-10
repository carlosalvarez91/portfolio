import React, { useState } from 'react';
import { app, analytics } from "./firebase";
import Avatar from './components/Avatar';
import Card from './components/Card';
import Project from './components/Project';
import Button from './components/Button';
import Modal from './components/Modal';
import GithubIcon from './components/GithubIcon';
import LinkedInIcon from './components/LinkedinIcon';
import Input from './components/Input';
import Textarea from './components/TextArea';
import Timeline from './components/Timeline';
import { experiences, projects } from './constants';



const App = () => {
  console.log("Firebase App initialized:", app);
  console.log("Firebase Analytics initialized:", analytics);
  const [isContactModalActive, setIsContactModalActive] = useState(false);
  const [textValue, setTextValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [loading, setLoading] = useState(false);

  return <div className='flex flex-col gap-5 w-full bg-[radial-gradient(#80808080_1px,transparent_1px)] [background-size:16px_16px] 
              animate-background-shimmer bg-fixed bg-center overflow-hidden relative'>
           {/* Profile */}
           <div className='flex flex-col gap-5 w-full pt-20 items-center'>

              <Avatar
              imageUrl='./yo.png' 
              />
              <span className='text-xl font-bold'>Carlos Álvarez</span>

              <Card className='p-0 w-11/12 sm:w-[450px] flex flex-col items-start'>
                  <div className='px-6 py-3 flex flex-row justify-between items-center w-full border-b-2 border-border'>
                    <span className='text-xl font-bold'>About</span>
                    <div className='flex flex-row gap-3'>
                      <a href='https://github.com/carlosalvarez91'  target='_blank' rel='noreferrer'>
                      <GithubIcon />
                      </a>
                      <a href='https://www.linkedin.com/in/carlos-alvarez91/'  target='_blank' rel='noreferrer'>
                      <LinkedInIcon />
                      </a>
                    </div>
                  </div>
                  <div className='w-full flex flex-col text-xs sm:text-sm font-normal  gap-3 items-start p-6 pr-2'>
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
                  </div>
              </Card>

              <div className='flex flex-row gap-2 w-11/12 sm:w-[480px] justify-center'>
                <Button onClick={()=>setIsContactModalActive(true)} >Contact Me</Button>
                <Button onClick={()=>{
                  window.open('https://drive.google.com/uc?id=1hMh1wI-nfIcghD6VTN-Vd4g2deJopKnD&export=download', '_blank')
                }} >Download CV</Button>
                {/* <Button onClick={()=>{
                  window.open('https://buymeacoffee.com/carlosalvarez13')
                }} >Buy me a coffee &nbsp; 🫶</Button> */}
              </div>

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
           {/* Experience */}
            <div className='flex flex-col w-full items-center'>
              <span className='text-xl font-bold'>Experience</span>
              <Timeline events={experiences} />
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
                  <p className='mt-5 font-semibold'>👉 &nbsp;<span className='underline cursor-pointer' onClick={()=>setIsContactModalActive(true)}>Contact me</span> to see more.</p>
            </div>

    </div>
};

export default App;
