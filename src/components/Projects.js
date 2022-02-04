import React from 'react';


const Projects = () => {
  return (
    <>
    <div className='w-2/3 mx-auto'>
        <div className='ml-8'>
          <span className="inline-flex p-3 rounded-full"><svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg></span>
          <h1 className="text-2xl">Projects</h1>
          <p>Here are some of my projects</p>
        </div>
    </div>
    <div className='flex flex-wrap flex-row justify-start w-2/3 mx-auto my-auto'>  
      <div >
              <a className='projects  m-8 w-56 bg-neutral-200 dark:bg-black h-52 flex flex-col justify-between items-center ' target='_blank' href="https://goga-google-copy.netlify.app" rel="noopener noreferrer">
                <div>
                  <h1 className='text-lg text-center'> Google Copy</h1>
                  <div>
                     <p className='m-5'>Search anything to your hearts content</p>
                  </div>
                </div>
                <div className='mb-3'>
                  <span className="rounded-sm bg-buttonday dark:bg-button p-1 mr-2 text-xs ">
                      React
                  </span> 
                  <span className="rounded-sm bg-buttonday dark:bg-button p-1 mb-2 mr-2 text-xs ">
                      Tailwind
                  </span>
                </div>
              </a>
      </div>
      <div >
        <a className='projects dark:bg-black m-8 w-56 bg-neutral-200 h-52 flex flex-col justify-between items-center ' target='_blank' href="https://goga-memories.netlify.app/" rel="noopener noreferrer">
          <div>
             <h1 className='text-lg text-center'>Memories App</h1>
             <p className='mr-2 m-5'>Post interesting events that happened to you</p>
          </div>
          <div className='mb-3'>
             <span className="rounded-sm bg-buttonday dark:bg-button p-1 mr-2 text-xs ">
                React
             </span> 
             <span className="rounded-sm bg-buttonday dark:bg-button p-1 mb-2 mr-2 text-xs ">
                Node.js
             </span>
             <span className="rounded-sm bg-buttonday dark:bg-button p-1 mb-2 mr-2 text-xs ">
                Redux
          </span>
          </div>
        </a>
      </div>
      <div >
              <a className='projects dark:bg-black m-8 w-56 bg-neutral-200 h-52 flex flex-col justify-between items-center ' target='_blank' href="https://goga-student-management.netlify.app/" rel="noopener noreferrer">
                <div>
                  <h1 className='text-lg text-center'> Student's Management</h1>
                  <p className='mr-2 m-5'>Manage students using this app</p>
                </div>
                <div className='mb-3'>
                  <span className="rounded-sm bg-buttonday dark:bg-button p-1 mr-2 text-xs ">
                      React
                  </span> 
                  <span className="rounded-sm bg-buttonday dark:bg-button p-1 mb-2 mr-2 text-xs ">
                      Node.JS
                  </span>
                  <span className="rounded-sm bg-buttonday dark:bg-button p-1 mb-2 mr-2 text-xs ">
                    MongoDB
                </span>
                </div>
              </a>
      </div>
      <div >
            <a className='projects dark:bg-black m-8 w-56 bg-neutral-200 h-52 flex flex-col justify-between items-center ' target='_blank' href="https://goga-chat-app.herokuapp.com/" rel="noopener noreferrer">
              <div>
                <h1 className='text-lg text-center'> Chat App</h1>
                <p className='mr-2 m-5'> Choose a room and start chatting.</p>
              </div>
              <div className='mb-3'>
                <span className="rounded-sm bg-buttonday dark:bg-button p-1 mr-2 text-xs ">
                    Node.js
                </span> 
                <span className="rounded-sm bg-buttonday dark:bg-button p-1 mb-2 mr-2 text-xs ">
                    Socket.io
                </span>
              </div>
            </a>
      </div>
      <div >
          <a className='projects dark:bg-black m-8 w-56 bg-neutral-200 h-52 flex flex-col justify-between items-center ' target='_blank' href="https://goga-weather-app-1.herokuapp.com/" rel="noopener noreferrer">
            <div>
              <h1 className='text-lg text-center'> Weather App</h1>
              <p className='mr-2 m-5'> Enter coordinates and get weather for any location</p>
            </div>
            <div className='mb-3'>
              <span className="rounded-sm bg-buttonday dark:bg-button p-1 mr-2 text-xs ">
                  Node.js
              </span> 
              <span className="rounded-sm bg-buttonday dark:bg-button p-1 mb-2 mr-2 text-xs ">
                  Geolocation
              </span>
            </div>
          </a>
      </div>  
    </div> 
    </>  
  )
};

export default Projects;
