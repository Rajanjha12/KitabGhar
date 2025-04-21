import React from 'react'

const Contact = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen ">
        <div className="flex flex-col items-center justify-center bg-gray-800 border-2 shadow-lg rounded-lg p-6 w-96 mt-20">
          <h2 className="text-4xl font-bold text-white text-center mt-4 mb-6">Contact Us</h2>
          
          <div className="w-full">
            <div className="mb-4">
              <label className="block text-white font-medium mb-1 mr-80">Name</label>
              <input
                type="text"
                placeholder="Enter Your Name"
                className="w-full px-3 py-2 border rounded-md outline-none"
              />
            </div>

            <div className="mb-4">
              <label className="block text-white font-medium mb-1 mr-80">Email</label>
              <input
                type="email"
                placeholder="Enter Your Email"
                className="w-full px-3 py-2 border rounded-md outline-none"
              />
            </div>

            <div className="mb-5">
              <label className="block text-white font-medium mb-1 mr-80">Message</label>
              <textarea
                placeholder="Enter Your Message"
                className="w-full px-3 py-2 border rounded-md outline-none resize-none"
                rows={4}
              />
            </div>
            <button className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact