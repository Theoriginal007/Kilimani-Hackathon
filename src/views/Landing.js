import React from "react";
// import { Link } from "react-router-dom";

// components

import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";
// import baraza from "../assets/img/baraza.jpeg"
export default function Landing() {
  return (
    <>
      <Navbar transparent />
      <main>
        

        <section className="pb-20 bg-blueGray-200  ">
          {/* <div className="container mx-auto px-4"> */}
            <div className="flex flex-wrap items-center">
              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto  mt-32" >
                
                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                Welcome to Kilimani Civic Engagement Portal
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                Empowering Kilimani residents with tools and resources to participate in local governance and urban planning. Join us in shaping the future of our community.
                </p>
                <div className="ml-3">
                  <div className="text-blueGray-500  p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                    <i className="fas fa-user-friends text-xl"></i>
                  </div>
                  <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                    <i className="fas fa-user-friends text-xl"></i>
                  </div>
                  <div className="text-blueGray-500  p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                    <i className="fas fa-user-friends text-xl"></i>
                  </div><div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                    <i className="fas fa-user-friends text-xl"></i>
                  </div> 
                </div>
                <div className="gap-2">
                <button
                className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
              >
                Visit Portal
              </button>
              <button
                className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
              >
                See Features
              </button>
              </div>
              <h5 className="text-2xl font-semibold mt-12 -ml-12">
  Used By
</h5>
<div className="flex flex-row gap-8 ml-4 items-center">
  <button
    className="bg-white text-lightBlue-400 shadow-lg font-normal h-16 w-16 items-center justify-center rounded-full outline-none focus:outline-none relative"
    type="button"
  >
    <i className="fas fa-city"></i>
  </button>
  <button
    className="bg-white text-lightBlue-400 shadow-lg font-normal h-16 w-16 items-center justify-center rounded-full outline-none focus:outline-none relative"
    type="button"
  >
    <i className="fas fa-building"></i>
  </button>
  <button
    className="bg-white text-lightBlue-400 shadow-lg font-normal h-16 w-16 items-center justify-center rounded-full outline-none focus:outline-none relative"
    type="button"
  >
    <i className="fas fa-map"></i>
  </button>
  <button
    className="bg-white text-lightBlue-400 shadow-lg font-normal h-16 w-16 items-center justify-center rounded-full outline-none focus:outline-none relative"
    type="button"
  >
    <i className="fas fa-chart-line"></i>
    <span className="absolute text-xs font-bold text-white bg-red-500 rounded-full p-1 -top-2 -right-2">3</span>
  </button>
</div>



              <div className="w-full md:w-4/12 px-4 mr-auto ml-auto mt-16">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-lightBlue-500">
                  <img
                    alt="People seated in a baraza"
                    src={require("assets/img/team-2-800x800.jpg").default}
                    // {require("assets/img/team-2-800x800.jpg").default}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-20">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-white fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                />
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4 mt-12">
                <div className="md:pr-12">
                  <div className="text-lightBlue-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-lightBlue-300">
                    <i className="fas fa-rocket text-xl"></i>
                  </div>
                  <h3 className="text-3xl font-semibold">Why choose us</h3>
                  <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                  The Kilimani Civic Engagement Portal is dedicated to enhancing public participation and civic education in Kilimani Ward, Nairobi County. Our mission is to create a transparent, responsive, and inclusive platform that empowers residents to actively engage in local governance and urban planning.
                  </p>
                  
                   <button
                className="bg-indigo-500 mt-4 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
              >
                See all
              </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-20 pb-48">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center text-center mb-24">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold">Here are our Testimonials</h2>
                <p className="text-lg leading-relaxed m-4 text-blueGray-500">
                  Testimonials
                </p>
              </div>
            </div>
            <div className="flex flex-wrap">
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src={require("assets/img/team-1-800x800.jpg").default}
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div className="pt-6 text-center">
                  <h2 className=" semi-font-bold">"I've never felt more connected to my community. This platform has given me a voice in local matters and made it easy to stay informed about new developments."</h2>
                    <h5 className="text-xl font-bold">Jane Mwangi</h5>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                    Resident
                    </p>
                    
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src={require("assets/img/team-2-800x800.jpg").default}
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div className="pt-6 text-center">
                  <h2 className=" semi-font-bold">"Public participation has always seemed complicated, but this portal makes it so easy to get involved and share my opinions on community projects."</h2>
                    <h5 className="text-xl font-bold">Amina Hassan</h5>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                    Student
                    </p>

                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src={require("assets/img/team-3-800x800.jpg").default}
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div className="pt-6 text-center">
                  <h2 className=" semi-font-bold">"Being able to track government responsiveness has been a game-changer. We're seeing real accountability and timely updates on issues affecting our area."</h2>
                    <h5 className="text-xl font-bold">Peter Kamau</h5>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                    Community Leader
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src={require("assets/img/team-4-470x470.png").default}
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div className="pt-6 text-center">
                  <h2 className=" semi-font-bold">"The issue reporting system is fantastic. I reported a network issue and received a prompt response. It's great to see our concerns being taken seriously."
</h2>
                    <h5 className="text-xl font-bold">David Otieno</h5>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                    Business Owner

                    
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap mt-24">
            <div className="w-full md:w-1/2 px-4 mb-6">
              <div className="text-center">
                <h1 className="text-5xl font-bold">
                  <span style={{color: "red"}}>15</span>
                  <span className="text-red-600">+</span>
                </h1>
                <h1>Years of experience</h1>
              </div>
            </div>
  <div className="w-full md:w-1/2 px-4 mb-6">
    <div className="text-center">
      <h1 className="text-5xl font-bold">
        <span style={{color: "red"}}>15</span>
        <span className="text-red-600">+</span>
      </h1>
      <h1>Years of experience</h1>
    </div>
  </div>
  <div className="w-full md:w-1/2 px-4 mb-6">
    <div className="text-center">
      <h1 className="text-5xl font-bold">
        <span style={{color: "red"}}>15</span>
        <span className="text-red-600">+</span>
      </h1>
      <h1>Years of experience</h1>
    </div>
  </div>
  <div className="w-full md:w-1/2 px-4 mb-6">
    <div className="text-center">
      <h1 className="text-5xl font-bold">
        <span style={{color: "red"}}>15</span>
        <span className="text-red-600">+</span>
      </h1>
      <h1>Years of experience</h1>
    </div>
  </div>
</div>


          </div>
        </section>

        <section className="pb-20 relative block bg-blueGray-800 mb-16">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-blueGray-800 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
            <div className="flex flex-wrap text-center justify-center">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold text-white">
                Features
                </h2>
                <p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-400">
                Our Key Features
                </p>
              </div>
            </div>
            <div className="flex flex-wrap mt-12 justify-center">
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-medal text-xl"></i>
                </div>
                <h6 className="text-xl mt-5 font-semibold text-white">
                Interactive Map
                </h6>
                <p className="mt-2 mb-4 text-blueGray-400">
                Explore current and planned developments in Kilimani.
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-poll text-xl"></i>
                </div>
                <h5 className="text-xl mt-5 font-semibold text-white">
                Public Participation Portal
                </h5>
                <p className="mt-2 mb-4 text-blueGray-400">
                Submit feedback, participate in surveys and polls.
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-lightbulb text-xl"></i>
                </div>
                <h5 className="text-xl mt-5 font-semibold text-white">
                Notifications
                </h5>
                <p className="mt-2 mb-4 text-blueGray-400">
                Stay informed with alerts on public meetings, proposals, and power outages.
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-lightbulb text-xl"></i>
                </div>
                <h5 className="text-xl mt-5 font-semibold text-white">
                Notifications
                </h5>
                <p className="mt-2 mb-4 text-blueGray-400">
                Stay informed with alerts on public meetings, proposals, and power outages.
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-lightbulb text-xl"></i>
                </div>
                <h5 className="text-xl mt-5 font-semibold text-white">
                Community Forum
                </h5>
                <p className="mt-2 mb-4 text-blueGray-400">
                Engage in discussions with fellow residents.                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-lightbulb text-xl"></i>
                </div>
                <h5 className="text-xl mt-5 font-semibold text-white">
                Educational Resources                </h5>
                <p className="mt-2 mb-4 text-blueGray-400">
                Access guides and documents on civic rights and participation.                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-lightbulb text-xl"></i>
                </div>
                <h5 className="text-xl mt-5 font-semibold text-white">
                Issue Reporting               </h5>
                <p className="mt-2 mb-4 text-blueGray-400">
                Report and track issues like power outages and network problems.
               </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-lightbulb text-xl"></i>
                </div>
                <h5 className="text-xl mt-5 font-semibold text-white">
                Responsiveness Tracker                </h5>
                <p className="mt-2 mb-4 text-blueGray-400">
                Monitor government agency responses to public concerns.                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-lightbulb text-xl"></i>
                </div>
                <h5 className="text-xl mt-5 font-semibold text-white">
                User Profile               </h5>
                <p className="mt-2 mb-4 text-blueGray-400">
                Manage your personal information and settings.                </p>
              </div>
            </div>
          </div>
        </section>
        <div className="flex flex-wrap mt-24 -mx-4 mb-12" style={{mb:"px"}}>
  {/* <!-- First Row: 3 Columns --> */}
  <div className="w-full md:w-4/12 px-4 mb-12">
    <div className="relative flex flex-col min-w-0 break-words bg-white w-full shadow-lg rounded-lg bg-lightBlue-500">
      <img
        alt="..."
        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
        className="w-full align-middle rounded-t-lg"
      />
      <blockquote className="relative p-8 mb-4">
        <svg
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 583 95"
          className="absolute left-0 w-full block h-95-px -top-94-px"
        >
          <polygon
            points="-30,95 583,95 583,65"
            className="text-lightBlue-500 fill-current"
          ></polygon>
        </svg>
        <h4 className="text-xl font-bold text-white">The Importance of Civic Engagement in Urban Planning</h4>
        <p className="text-md font-light mt-2 text-white">
          Understanding the role of residents in shaping the future of Kilimani through active participation in local governance.
        </p>
      </blockquote>
    </div>
  </div>
  <div className="w-full md:w-4/12 px-4 mb-6">
    <div className="relative flex flex-col min-w-0 break-words bg-white w-full shadow-lg rounded-lg bg-lightBlue-500">
      <img
        alt="..."
        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
        className="w-full align-middle rounded-t-lg"
      />
      <blockquote className="relative p-8 mb-4">
        <svg
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 583 95"
          className="absolute left-0 w-full block h-95-px -top-94-px"
        >
          <polygon
            points="-30,95 583,95 583,65"
            className="text-lightBlue-500 fill-current"
          ></polygon>
        </svg>
        <h4 className="text-xl font-bold text-white">How to Report Issues Effectively on Our Platform</h4>
        <p className="text-md font-light mt-2 text-white">
          A step-by-step guide to using our issue reporting system to ensure your concerns are heard and addressed promptly.
        </p>
      </blockquote>
    </div>
  </div>
  <div className="w-full md:w-4/12 px-4 mb-16">
    <div className="relative flex flex-col min-w-0 break-words bg-white w-full shadow-lg rounded-lg bg-lightBlue-500">
      <img
        alt="..."
        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
        className="w-full align-middle rounded-t-lg"
      />
      <blockquote className="relative p-8 mb-4">
        <svg
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 583 95"
          className="absolute left-0 w-full block h-95-px -top-94-px"
        >
          <polygon
            points="-30,95 583,95 583,65"
            className="text-lightBlue-500 fill-current"
          ></polygon>
        </svg>
        <h4 className="text-xl font-bold text-white">Upcoming Public Meetings and How to Participate</h4>
        <p className="text-md font-light mt-2 text-white">
          Stay informed about upcoming public meetings and learn how you can participate and make your voice heard.
        </p>
      </blockquote>
    </div>
  </div>
</div>

        <div className=" block py-24 lg:pt-0 bg-blueGray-800 mt-64">
          <div className="container mx-auto px-4 ">
            <div className="flex flex-wrap justify-center lg:-mt-64 ">
              <div className="w-full lg:w-6/12 px-4 ">
                <div className="relative flex flex-col  min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200">
                  <div className="flex-auto p-5 lg:p-10 ">
                    <h4 className="text-2xl font-semibold">
                      Want to work with us?
                    </h4>
                    <p className="leading-relaxed mt-1 mb-4 text-blueGray-500">
                      Complete this form and we will get back to you in 24
                      hours.
                    </p>
                    <div className="relative w-full mb-3 mt-8">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="full-name"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Full Name"
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Email"
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="message"
                      >
                        Message
                      </label>
                      <textarea
                        rows="4"
                        cols="80"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        placeholder="Type a message..."
                      />
                    </div>
                    <div className="text-center mt-6">
                      <button
                        className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
