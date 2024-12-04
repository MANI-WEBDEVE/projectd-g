/**
 * Contact page
 *
 * This is the contact page. It's a simple page that displays a message
 * about how to get in touch with us.
 */

import { Input } from "@/components/ui/input";

const ContactPage = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center translate-y-10 px-4 md:px-8">
      {/* Centered container */}
      <div className="max-w-lg mx-auto text-center flex flex-col gap-5 ">
        {/* Title */}
        <h1 className="text-4xl font-bold tracking-widest">Get Into Touch</h1>
        {/* Text */}
        <p className="text-lg font-semibold tracking-tight leading-[1.2]">
          You can easily find us online through our website or by reaching out
          via social media and email. We’re always ready to connect and discuss
          how we can help bring your digital vision to life.
        </p>
      </div>
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 mt-10">
        <div className="p-5 flex flex-col gap-10">
          <div>
            <h2 className="font-bold text-lg mb-5">ADDRESS</h2>
            <span>7901 4th ST N Site 11869. ST Petersnurg, FL 33702-4305</span>
          </div>
          <div>
            <h2 className="font-bold text-lg mb-5">CALL US</h2>
            <span>+92 332 2732949</span>
          </div>
          <div>
            <h2 className="font-bold text-lg mb-5">CONTACT</h2>
            <span>info@digitalpencil.com</span>
          </div>
        </div>
        <div className="w-full lg:w-auto">
          <form className="flex flex-col gap-4 p-5 bg-gray-800 text-white rounded-md w-full max-w-2xl mx-auto lg:mx-0">
            <label className="flex flex-col">
              <span className="mb-1">Full Name</span>
              <Input
                type="text"
                className="p-2 bg-gray-700 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-white/70"
                placeholder="Enter your full name"
              />
            </label>
            <label className="flex flex-col">
              <span className="mb-1">Email</span>
              <Input
                type="email"
                className="p-2 bg-gray-700 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-white/70"
                placeholder="Enter your email"
              />
            </label>
            <label className="flex flex-col">
              <span className="mb-1">Contact Phone</span>
              <Input
                type="number"
                className="p-2 bg-gray-700 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-white/70"
                placeholder="Enter your contact phone"
              />
            </label>
            <label className="flex flex-col">
              <span className="mb-1">Subject</span>
              <Input
                type="text"
                className="p-2 bg-gray-700 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-white/70"
                placeholder="Enter the subject"
              />
            </label>
            <label className="flex flex-col">
              <span className="mb-1">Message</span>
              <textarea
                className="p-2 bg-gray-700 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-white/70"
                placeholder="Enter your message"
                rows={4}
              />
            </label>
            <button
              type="submit"
              className="mt-4 p-2 bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
