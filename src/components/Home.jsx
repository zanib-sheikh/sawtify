import React from "react";
import MyImage from '../assets/my-image.png';
import Play from '../assets/play.png';
import Call from '../assets/call.png';
import Message from '../assets/conversation.png';
import Calender from '../assets/calendar.png';
import bill from '../assets/bill.png';
import tick from '../assets/check-mark.png';
import customer from '../assets/customer.png';
import event from '../assets/event.png';
import mic from '../assets/mic.png';
import revenue from '../assets/revenue.png';
import analytics from '../assets/analytics.png';
import increase from '../assets/increase.png';
import service from '../assets/service.png';
import ai from '../assets/ai.png';
import shuttle from '../assets/shuttle.png';

const icons = [Call, Message, Calender, bill, tick, customer, event];

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-purple-900 via-black via-45% to-purple-950 text-white flex flex-col ">
     
      {/* Main Content */}

      <main className="text-center py-20 px-4">
      
       {/* Badge */}
<div
  className="bg-transparent mt-24 rounded-full px-5 py-2 inline-flex items-center justify-center text-lg font-normal text-white"
  style={{
    border: 'transparent',
    borderImage: 'linear-gradient(to right, #8B5CF6, #6B21A8, #FB923C) 1',
    boxShadow: 'inset 0px 4px 10px rgba(139, 92, 246, 0.5), inset 0px 6px 15px rgba(251, 146, 60, 0.5)', // Inner shadow with purple to orange
  }}
>
  <img 
    src="https://th.bing.com/th/id/R.ea3274d50a6a9341fd4692b45d34fce4?rik=z04oyVRDAaHoUQ&riu=http%3a%2f%2fclipart-library.com%2fimages_k%2fsparkles-transparent-png%2fsparkles-transparent-png-5.png&ehk=qF8Zpv2kIJQdNASVx3JQTq2yvjpX1s26eBXMy45d0aQ%3d&risl=&pid=ImgRaw&r=0" 
    alt="Sawtify Icon" 
    className="mr-2 w-5 h-5" 
  />
  Best AI Calling Agent
</div>



        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold py-6 leading-tight">
          AI Calling Agent To Resolve <br />
          <span className="text-pink-500">Calls Consistently</span>
        </h1>
        <p className="mt-4 text-gray-400">
          Lorem ipsum tobelt revant kant. Pretarade tresösm tivande ten. Plangar <br />
          preknonade analiga, mid. Telekropekådade.
        </p>

        {/* Input Section */}
<div className="mt-8 flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
  <div className="flex">
    <select className="bg-transparent text-gray-400 border border-gray-200 rounded-l-full px-4 py-2">
      <option>+1</option>
      <option>+44</option>
      <option>+92</option>
    </select>
    <input
      type="text"
      placeholder="Enter your phone number"
      className="bg-transparent border border-gray-200 text-gray-400 px-4 py-2 w-64 rounded-r-full"
    />
  </div>
  <button className="bg-gradient-to-t from-purple-600 to-pink-400 px-6 py-2 rounded-full text-white font-semibold">
    Call Me ➡
  </button>
</div>


 {/* Main Container */}
<div className="mt-20 flex flex-col md:flex-row justify-between items-start space-y-6 md:space-y-0 md:space-x-8">

{/* Additional Information (Left Side) */}
<div className="max-w-lg space-y-4 md:ml-20">
  <div className="flex justify-start mt-4">
    <div
      className="bg-transparent rounded-full px-5 py-2 inline-flex items-center justify-center text-lg text-white"
      style={{
        border: 'transparent',
        borderImage: 'linear-gradient(to right, #8B5CF6, #6B21A8, #FB923C) 1',
        boxShadow: 'inset 0px 4px 10px rgba(139, 92, 246, 0.5), inset 0px 6px 15px rgba(251, 146, 60, 0.5)', // Inner shadow with purple to orange
        marginLeft: '1rem', // Adjust margin as needed to move it further left
      }}
    >
      <img
        src="https://th.bing.com/th/id/R.ea3274d50a6a9341fd4692b45d34fce4?rik=z04oyVRDAaHoUQ&riu=http%3a%2f%2fclipart-library.com%2fimages_k%2fsparkles-transparent-png%2fsparkles-transparent-png-5.png&ehk=qF8Zpv2kIJQdNASVx3JQTq2yvjpX1s26eBXMy45d0aQ%3d&risl=&pid=ImgRaw&r=0"
        alt="Sawtify Icon"
        className="mr-2 w-5 h-6"
      />
      What is Swatify?
    </div>
  </div>
  <p className="text-gray-400 text-md pr-7 text-start">
    Lorem ipsum tobelt revant kant. Pretarade tresösm tivande ten.
    Plangar preknonade analiga, mid. Telekropekådade. Lorem ipsum tobelt
    revant kant. Pretarade tresösm tivande ten. Plangar preknonade
    analiga, mid.
  </p>
</div>

{/* Conversation Section (Right Side) */}
<div className="flex  mt-24 justify-center md:justify-end pr-2 md:pr-20 w-full md:w-auto">
  <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8 w-full">
    {/* Left Side Texts */}
    <div className="flex flex-col space-y-6 w-full md:w-[30%]">
      <div className="bg-transparent bg-opacity-40 shadow-sm shadow-pink-200 rounded-full px-8 py-2 text-sm text-gray-400">
        How are you doing?
      </div>
      <div className="bg-transparent shadow-sm bg-opacity-60 shadow-pink-200 rounded-full px-8 py-2 text-gray-400 text-sm">
        I'm talking from XEON Firm
      </div>
    </div>

    {/* Center Button */}
    <button className="p-8 rounded-full border-2 border-purple-900 bg-transparent shadow-2xl shadow-purple-500/60 flex items-center justify-center">
      <img src={mic} alt="mic" className="w-8 h-8" />
    </button>

    {/* Right Side Texts */}
    <div className="flex flex-col space-y-6 w-full md:w-[30%]">
      <div className="bg-transparent bg-opacity-60 shadow-sm shadow-pink-200 rounded-full px-8 py-2 text-sm text-gray-400">
        Have a nice day.
      </div>
      <div className="bg-transparent shadow-sm bg-opacity-60 shadow-pink-200 rounded-full px-8 py-2 text-sm text-gray-400">
        How can I help you?
      </div>
    </div>
  </div>
</div>
</div>





<div className="flex flex-col md:flex-row justify-between px-8 py-10 space-y-8 md:space-y-0 md:space-x-12 mt-20">


  {/* Left Section - "Why Choose Sawtify?" */}
  <div className="max-w-lg text-left">
    <h1 className="text-3xl md:text-4xl py-6 leading-tight">
      Why Choose <br />
      <span className="text-pink-500">Swatify?</span>
    </h1>
    <p className="text-gray-400">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi tempora consequuntur ex corrupti pariatur ratione minima. Molestias, tempora, minima optio illo eveniet ad molestiae cum libero, mollitia doloribus ullam saepe.
    </p>
    <button className="bg-gradient-to-r from-purple-600 to-orange-400 px-6 py-2 rounded-full text-white font-semibold mt-4">
      Request a Demo
    </button>
  </div>

  {/* Right Section - List of Benefits */}
<div className="flex flex-col mt-20 items-start mx-auto pl-4 md:ml-[-20%] py-2 text-left md:pr-20 w-full md:w-2/3 space-y-4">

{/* First Section */}
<div className="flex items-center space-x-4">
  <button className="p-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-400 text-white w-12 h-12 flex items-center justify-center">
    <img src={revenue} alt="ai" className="w-10 h-6" />
  </button>
  <div className="flex flex-col items-start">
    <h2 className="text-2xl font-semibold text-white">Increase Revenue</h2>
    <p className="text-white text-sm">Reduce staffing cost by automating tasks</p>
  </div>
</div>
<div className="border-t-2 border-slate-500 border-dashed w-full my-4 last:hidden"></div>

{/* Second Section */}
<div className="flex items-center space-x-4">
  <button className="p-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-400 text-white w-12 h-12 flex items-center justify-center">
    <img src={analytics} alt="ai" className="w-10 h-6" />
  </button>
  <div className="flex flex-col items-start">
    <h2 className="text-2xl leading-tight">Reduce Costs</h2>
    <p className="text-white">Reduce staffing cost by automating tasks</p>
  </div>
</div>
<div className="border-t-2 border-slate-500 border-dashed w-full my-4 last:hidden"></div>

{/* Third Section */}
<div className="flex items-center space-x-4">
  <button className="p-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-400 text-white w-12 h-12 flex items-center justify-center">
    <img src={increase} alt="ai" className="w-10 h-6" />
  </button>
  <div>
    <h2 className="text-2xl leading-tight">Increased Capacity</h2>
    <p className="text-white">Reduce staffing cost by automating tasks</p>
  </div>
</div>
<div className="border-t-2 border-slate-500 border-dashed w-full my-4 last:hidden"></div>

{/* Fourth Section */}
<div className="flex items-center space-x-4">
  <button className="p-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-400 text-white w-12 h-12 flex items-center justify-center">
    <img src={service} alt="service" className="w-10 h-6" />
  </button>
  <div>
    <h2 className="text-2xl leading-tight">Improved Customer Service</h2>
    <p className="text-white">Reduce staffing cost by automating tasks</p>
  </div>
</div>
<div className="border-t-2 border-slate-500 border-dashed w-full my-4 last:hidden"></div>

{/* Fifth Section */}
<div className="flex items-center space-x-4">
  <button className="p-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-400 text-white w-12 h-12 flex items-center justify-center">
    <img src={ai} alt="ai" className="w-12 h-6" />
  </button>
  <div>
    <h2 className="text-2xl leading-tight">Stay Ahead with AI</h2>
    <p className="text-white">Reduce staffing cost by automating tasks</p>
  </div>
</div>
<div className="border-t-2 border-slate-500 border-dashed w-full my-4"></div>
</div>




</div>
  

<div class="flex flex-col items-center justify-center  p-8">
 {/* <!-- Title Section --> */}
  <h1 class="text-4xl md:text-5xl font-bold mb-4 text-center">
    How Our <span class="text-pink-500">Voice Agent</span> Works for You
  </h1>
  <p class="text-lg text-gray-400 text-center max-w-lg mb-16">
    Easily automate call handling and appointment scheduling, freeing up your team to focus on what matters.
  </p>

  {/* Cards Section */}
{/* Cards Section */}
<div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
  {/* First Row */}
  <div className="bg-transparent border border-gray-300 p-6 text-left rounded-2xl shadow-lg shadow-gray-500/50 flex flex-col items-start space-y-2">
    {/* Icon, Heading, and Paragraph */}
    <div className="flex flex-col items-start space-y-2">
      <span className="bg-gradient-to-t from-purple-600 to-pink-500 p-2 rounded-full">
        <img 
          src={shuttle} 
          alt="shuttle" 
          className="w-7 h-7" 
        />
      </span>
      <h2 className="text-xl font-semibold">Get Started With Minimal Effort</h2>
      <p className="text-gray-400">Our voice agent integrates smoothly with your existing setup, getting you up and running fast—no complex configurations.</p>
    </div>
  </div>

  <div className="bg-transparent border border-gray-300 p-6 rounded-2xl text-left shadow-lg shadow-gray-500/50 flex flex-col items-start space-y-2">
    {/* Icon, Heading, and Paragraph */}
    <div className="flex flex-col items-start space-y-2">
      <span className="bg-gradient-to-t from-purple-600 to-pink-500 p-2 rounded-full">
        <img 
          src={Call} 
          alt="phone" 
          className="w-7 h-7" 
        />
      </span>
      <h2 className="text-xl font-semibold">Let Your Agent Handle The Basics</h2>
      <p className="text-gray-400">Our solution answers calls, gathers essential information, and schedules appointments, reducing manual tasks.</p>
    </div>
  </div>

  {/* Second Row */}
  <div className="bg-transparent border border-gray-300 p-6 text-left rounded-2xl shadow-lg shadow-gray-500/50 flex flex-col items-start space-y-2">
    {/* Icon, Heading, and Paragraph */}
    <div className="flex flex-col items-start space-y-2">
      <span className="bg-gradient-to-t from-purple-600 to-pink-500 p-2 rounded-full">
        <img 
          src={shuttle} 
          alt="shuttle" 
          className="w-7 h-7" 
        />
      </span>
      <h2 className="text-xl font-semibold">Monitor Key Interactions</h2>
      <p className="text-gray-400">Stay informed with real-time insights and easily track appointments and call outcomes from a simple dashboard.</p>
    </div>
  </div>

  <div className="bg-transparent border border-gray-300 p-6 text-left rounded-2xl shadow-lg shadow-gray-500/50 flex flex-col items-start space-y-2">
    {/* Icon, Heading, and Paragraph */}
    <div className="flex flex-col items-start space-y-2">
      <span className="bg-gradient-to-t from-purple-600 to-pink-500 p-2 rounded-full">
        <img 
          src={Call} 
          alt="phone" 
          className="w-7 h-7" 
        />
      </span>
      <h2 className="text-xl font-semibold">Ongoing Updates & Enhancements</h2>
      <p className="text-gray-400">Our voice agent continuously adapts and improves to keep meeting your evolving needs.</p>
    </div>
  </div>
</div>



</div>

{/*<!-- new -->*/}

<div className="flex flex-col md:flex-row px-8 justify-between py-12 space-y-8 md:space-y-0 md:space-x-12">
  <div className="max-w-lg text-left">
    <h1 className="text-2xl md:text-4xl font-sans font-semibold text-white mb-6">
      <span className="text-violet-700">Sawtify</span> Simplifies Your <br /> Business
    </h1>
    <p className="text-md text-white">
      Sawtify voice agents can handle a wide range of essential tasks, helping you serve clients faster, stay organized, and focus on growth. See how it can make a difference in your daily operations.
    </p>
  </div>
</div>

<div className="flex flex-col md:flex-row px-6 max-w-screen-xl mx-auto space-y-6 md:space-y-0 md:space-x-6 justify-center items-center">
  {/* Left Side: Grid */}
  <div className="w-full md:w-[35%] grid grid-cols-1 gap-2 text-left text-white">
    {[
      'Call Routing',
      'Answering FAQs',
      'Bookings & Reservations',
      'Billing Inquiries & Appointments',
      'Client Intake Pre-Screening',
      'Prequalifying New Clients',
      'Service Scheduling',
    ].map((item, index) => (
      <div
        key={index}
        className="bg-transparent border-2 border-gray-500 p-3 rounded-3xl shadow-lg shadow-gray-500/50 flex items-center space-x-3 w-full mx-auto"
      >
        {/* Round Icon Container with Image */}
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-purple-600 to-pink-400">
          <img src={icons[index]} alt={`${item} icon`} className="w-5 h-5" />
        </div>

        {/* Text */}
        <span className="text-sm">{item}</span>
      </div>
    ))}
  </div>

  {/* Right Side: Card */}
  <div className="w-full md:w-[35%] mt-4 mx-auto bg-transparent border border-purple-300 text-left p-4 rounded-3xl shadow-lg shadow-gray-500/50 flex flex-col justify-between">
    <h2 className="text-lg md:text-xl font-bold text-purple-200 mt-3 p-2">Call Routing</h2>
    <p className="text-white text-sm mb-2">
      Efficiently direct calls to the right person or department, improving response times and customer satisfaction.
    </p>
    <p className="text-pink-500 text-sm mb-2">
      Reduces caller wait time by 30-45%, leading to quicker resolutions and happier clients.
    </p>

    {/* Additional Card */}
    <div className="mt-3 p-3 bg-transparent border border-purple-300 rounded-3xl shadow-lg shadow-gray-500/50 flex flex-col justify-between">
      <h3 className="text-sm md:text-lg font-semibold text-purple-200 mb-2">Demo</h3>
      <p className="text-white text-xs mb-2">
        Efficiently direct calls to the right person or department.<br />Improving response time and customer satisfaction.
      </p>

      {/* Image container with relative positioning */}
      <div className="relative w-full mt-3">
        <img
          src={MyImage}
          alt="Demo Illustration"
          className="w-full h-40 rounded-xl mx-auto"  // Adjusted image height
        />

        {/* Centered round button */}
        <button
          className="absolute inset-0 flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 bg-opacity-60 text-white border border-gray-400 rounded-full shadow-lg shadow-purple-400"
          style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
        >
          <img
            src={Play}
            alt="Play Icon"
            className="w-6 h-6"
          />
        </button>
      </div>
    </div>
  </div>
</div>



<div className="w-full max-w-5xl mx-auto mt-16 py-20 px-6 rounded-3xl bg-gradient-to-br from-purple-700 via-pink-400 to-orange-500 shadow-lg text-white">
  <h1 className="text-4xl md:text-5xl font-semibold font-serif mb-4 py-2 text-center">
    Ready to start <br /> your project
  </h1>
  <p className="text-sm md:text-lg mb-6 text-center">
    Contact us today to schedule a free consultation or <br /> request a demo for our solutions
  </p>
  <div className="flex justify-center">
    <button className="bg-white text-pink-500 px-6 py-3 rounded-full font-semibold text-lg hover:bg-purple-500 hover:text-white transition-all">
      Request A Demo ➡
    </button>
  </div>
</div>





      </main>
    </div>
  );
}

export default Home;
