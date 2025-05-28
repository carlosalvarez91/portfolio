import { ProjectType } from "./components/Project"
import { TimelineEvent } from "./components/Timeline"

export const experiences: TimelineEvent[] = [
    { 
      year: 'May 2022 - Dec 2024', 
      title: 'Frontend Engineer', 
      company: 'GoStudent', 
      description: <div className='flex flex-col gap-4'>
                 <span>EdTech Unicorn, GoStudent provides one to one online tutoring.</span>
                  <ul className='space-y-2'>
                    <li>● Led frontend development of Self-Booking Flow, a micro-frontend app enabling parents to book trial lessons independently from Sales. Achieving CAC -10% and Customer Acquisition +5%. Mentored Junior dev, onboarded 2 devs.</li>
                    <li>● Launched over 10 A/B test variants across the Self-Booking flow to optimize UX and conversion. Involved in architectural decisions to reduce tech debt and keep balance between speed and quality.</li>
                    <li>● Optimized Sales App by refactoring API calls, reducing search latency by 40% and enhancing workflow efficiency for 2,000+ sales reps.</li>
                    <li>● Developed and maintained an internal UI library, standardizing design across multiple projects.</li>
                    <li>● Collaborated directly with the CTO to implement the Self Checkout micro frontend in Next with Stripe.</li>
                    <li>● Implementation of Waiting Room micro frontend in Remix.</li>
                    <li>● Front End tech stack: React with TypeScript, Redux, and Tailwind CSS, unit tests with Jest and E2E with Playwright.</li>
                    <li>● Monitored crashes and UX analytics using DataDog, used Firebase events, A/B testing with Optimizely and Storybook for internal UI library.</li>
                  </ul>
                  </div>
  },
  { 
      year: 'Sept 2019 - Apr 2022', 
      title: 'Software Engineer', 
      company: 'Danalto', 
      description: <div className='flex flex-col gap-4'>
                    <span>Danalto is a low-power IoT platform which provides high-accuracy positioning intelligence services across large open
                    environments.</span>
                    <ul className='space-y-2'>
                      <li>● Led research of GIS solutions to build custom dashboards. Implemented a generic Asset Tracking dashboard in React and API in Django rest framework, reading geospatial data from InfluxDB.  Geofencing and historical positioning data were part of the dashboard among other features.</li>
                      <li>● Exposure to telecommunications engineering, acquiring general knowledge on LoRa 2.4GH, UWB, BLE and multilateration algorithms to locate assets by using a minimum infrastructure of at least 3 Anchors 1 Tag and 1 gateway.</li>
                      <li>● Responsible for prototyping and implementing a mobile app (PWA) for installing devices.</li>
                      <li>● Maintenance and performance improvements on Operations dashboard to monitor key IoT stats like device battery, lost messages vs Ideal messages based on keep alive frequencies, Gateway status, etc.</li>
                      <li>● Writing decoders for different types of sensors.</li>
                      <li>● Rotating the role of Scrum Master.</li>
                      <li>● Using Gitlab CI/CD Pipeline with different stages: static code analysis, unit & integration testing, deploy.</li>
                      <li>● Used AWS to manage EC2 instances per environment, monitored via CloudWatch, processed device data with Lambda functions, and stored device installation images in S3.</li> 
                      <li>● Used Grafana dashboards for monitoring Kafka cluster and RabbitMQ queue to ingest incoming kafka messages.</li>
                      <li>● Tech stack: React, Django, Celery, Postgres, DynamoDB,InfluxDB, Kafka, RabbitMQ, Docker, EC2, Lambda, SQS and S3.</li>
                    </ul>
                  </div> 
  },
  { 
      year: 'Jan 2018 - Aug 2019', 
      title: 'Full Stack Developer', 
      company: 'Visum', 
      description: <div className='flex flex-col gap-4'>
                    <span>
                    VISUM is part of IRIS Technology Group, based at University College Dublin, specialising in developing bespoke Quality Control improvement solutions across the Food, Pharma and Chemical sectors.                    </span>
                    <ul className='space-y-2'>
                      <li>● Collaborated on EU-funded projects: Sharebox, Agrimax, Workdeck, MyToolBox. </li>
                      <li>● Developed scalable dashboard (Visum Cloud) for real-time sensor monitoring for DairyGold – Milk factory in Ireland.</li>
                      <li>● Tech stack: Angular, Django / Falcon / Node JS (Depending on the project), Maria DB, PostgreSQL, Docker</li>
                    </ul>
                  </div> 
  },
  { 
      year: 'Jun 2017 - Dec 2017', 
      title: 'Internship', 
      company: 'Babylon Radio', 
      description: <div className='flex flex-col gap-4'>
                    <span>Multicultural community. Helps migrants integrate into Irish life. Info, articles, radio and events. Celebrating Cultures,
                    Promoting Integration.</span>
                    <ul className='space-y-2'>
                      <li>● Built from scratch a replica of the existing BabylonRadio website using KeystoneJS, a CMS based in Node, Express JS, MongoDB, Pug and Less.</li>
                      <li>● Strong communication and feedback within all team members and stakeholders.</li>
                      <li>● Using Agile methodologies - Iteratively analysing, designing, implementing and testing.</li>
                    </ul>
                  </div> 
  },
  ]
  
  
  export const projects: ProjectType[] = [
    {
      imgUrl: './roiexplorer.gif',
      title: 'ROI Explorer  ',
      description: 'ROI Explorer helps real estate investors visualize key metrics, calculate ROI, and get AI-powered insights to find profitable properties.',
      technologies: ['Next.js', 'Supabase (Postgres)', 'Python', 'Deepseek V3'],
      deployUrl: 'https://roiexplorer.com',
      githubUrl: 'https://github.com/carlosalvarez91/roiexplorer'
    },

    {
      imgUrl: './servook.png',
      title: 'Servook',
      description:"A platform for connecting with local professionals. Iterated and pivoted along the way from an initial concept of an 'App for booking Barbers' to a 'multi service, on demand, Uber-like platform' and finally simplified it to a 'Local services marketplace'.",
      technologies: ["React", "Apollo", "GraphQL", "Django", "Graphene", "Postgres", "Celery", "AWS SES (email) and S3 (storage)", "Firebase Cloud Messages", "WebSockets", "Nginx", "Supervisor", "Daphne"],
      deployUrl: 'https://servook.com',
      githubUrl: 'https://github.com/carlosalvarez91/servook'
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
      imgUrl: './nomap.png',
      title: 'Nomap',
      description: 'Digital Nomap helps you to connect with other Nomads while travelling, by providing a geolocalized chat room.',
      technologies: ['React Native', 'Firebase', 'Landing page in Next.js'],
      deployUrl: 'https://digitalnomap.com',
      githubUrl: 'https://github.com/carlosalvarez91/digitalnomap'
    },

    {
      imgUrl: 'gitlab-job-notifier.png',
      title: 'Gitlab Job Notifier',
      description: 'Chrome extension for Gitlab CI/CD Pipeline. It observes the current job and it will notify you when it changes the state to success or failure.',
      technologies: [ 'JS'],
      deployUrl: 'https://chromewebstore.google.com/detail/abjeghbndlapiblmkekepkmhmcooidbe/preview?hl=en-GB&authuser=0',
      githubUrl: 'https://github.com/carlosalvarez91/gitlab-job-notifier'
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
      imgUrl: 'commuter.png',
      title: 'Commuter',
      description: 'Mobile app for paying for the transport using NFC. Built in Ionic Framework (AngularJS), Loopback (NodeJS) as a Back-end and Arduino as a simulation of Transport payment machine.',
      technologies: [ 'Loopback', 'Ionic', 'Arduino'],
      deployUrl: '',
      githubUrl: 'https://github.com/carlosalvarez91/Commuter'
    },
    {
      imgUrl: 'backpackers_pms.jpeg',
      title: 'Hostel PMS',
      description: 'A desktop application for managing and printing receipts for Backpackers Citi Hostel Dublin. ',
      technologies: ['Electron', 'SQLite'],
      deployUrl: '',
      githubUrl: 'https://github.com/carlosalvarez91/electron-hostel-app'
    },
  ]