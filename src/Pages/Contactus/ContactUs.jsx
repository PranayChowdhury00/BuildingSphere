import callGirlImage from '../../../src/assets/callGirl.jpeg'; 

const ContactUs = () => {
  return (
    <div className="min-h-screen max-w-7xl mx-auto bg-white flex flex-col md:flex-row items-center gap-5 justify-center p-4">
      <div className="md:w-1/2 mb-8 md:mb-0">
        <img className="w-[500px] h-[550px] rounded-lg shadow-lg " src={callGirlImage} alt="Call Girl" />
      </div>
      <div className="w-full  bg-white shadow-lg rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-sky-500 mb-6 text-center">Contact Us</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sky-500 mb-1 font-medium">Full Name</label>
            <input 
              type="text" 
              placeholder="Enter your name" 
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-sky-500 focus:outline-none" 
              required 
            />
          </div>
          <div>
            <label className="block text-sky-500 mb-1 font-medium">Email</label>
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-sky-500 focus:outline-none" 
              required 
            />
          </div>
          <div>
            <label className="block text-sky-500 mb-1 font-medium">Message</label>
            <textarea 
              placeholder="Enter your message" 
              rows="5" 
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-sky-500 focus:outline-none" 
              required
            ></textarea>
          </div>
          <button 
            type="submit" 
            className="w-full bg-sky-500 text-white py-3 rounded-lg text-lg font-medium hover:bg-sky-600 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
