"use client";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
const ContactPage = () => {
  // State to manage form input values
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    phone: "",
    email: "",
    message: "",
  });

  // State to manage submission status
  const [status] = useState("");

  // Handle change for input fields
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle change for textarea field
  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response  = await axios.post("/api/send-email", formData);
      const data = await response.data
      if (data.status === 200) {
        toast.success(data.message)
       
        setFormData({
          name: "",
          subject: "",
          phone: "",
          email: "",
          message: "",
        });
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to send email.");
    }
  };



  return (
    <div className="w-full h-full flex flex-col items-center justify-center mt-28 px-4 relative">
      {/* Centered container */}
      <div className="max-w-lg mx-auto text-center flex flex-col gap-5 ">
        {/* Title */}
        <h1 className="text-6xl font-bold "><span className="text-blue-500 font-thin uppercase">get</span> Into <span className="text-blue-500 font-thin uppercase">Touch</span></h1>
        {/* Text */}  
        <p className="text-md font-extralight tracking-tight leading-[1.2] ">
          You can easily find us online through our website or by reaching out
          via social media and email. We’re always ready to connect and discuss
          how we can help bring your digital vision to life.
        </p>
      </div>
      {/* <div className="w-full h-full absolute -z-[999] left-0 md:-left-[28rem]  top-[0.5rem]">
        <iframe src="https://app.endlesstools.io/embed/a1ca7120-c627-43c7-b542-9c4a53d39f6b" className="w-full h-full"></iframe>
      </div> */}
      <div className="w-full  flex flex-col lg:flex-row items-start justify-center gap-10 mt-12">
        <div className="w-full py-5 px-2 flex flex-col items-center justify-center gap-10 text-center mt-4 relative">
          <div className="w-[30%] h-[30%] bg-emerald-500 absolute rounded-full blur-[180px] animate-pulse"></div>
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
        <div className="w-full flex items-center justify-center ">
        <form className="flex flex-col gap-4  p-5 bg-gray-800 text-white rounded-md w-[100%] md:w-[66%]  lg:mx-0">
            <label className="flex flex-col">
              <span className="mb-1">Your Name</span>
              <Input
                type="text"
                required
                className="p-2 bg-gray-700 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-white/70"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    name: e.target.value,
                  })
                }
              />
            </label>
            <label className="flex flex-col">
              <span className="mb-1">Email</span>
              <Input
                type="email"
                required
                className="p-2 bg-gray-700 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-white/70"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                name="email"
              />
            </label>
            <label className="flex flex-col">
              <span className="mb-1">Contact Phone</span>
              <Input
                type="number"
                required
                className="p-2 bg-gray-700 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-white/70"
                placeholder="Enter your contact phone"
                value={formData.phone}
                onChange={handleChange}
                name="phone"
              />
            </label>
            <label className="flex flex-col">
              <span className="mb-1">Subject</span>
              <Input
                type="text"
                required
                className="p-2 bg-gray-700 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-white/70"
                placeholder="Enter the subject"
                value={formData.subject}
                onChange={handleChange}
                name="subject"
              />
            </label>
            <label className="flex flex-col">
              <span className="mb-1">Message</span>
              <textarea
                required
                className="p-2 bg-gray-700 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-white/70"
                placeholder="Enter your message"
                rows={4}
                value={formData.message}
                onChange={handleTextAreaChange}
                name="message"
              />
            </label>
            <button
              type="submit"
              onClick={handleSubmit}
              className="mt-4 p-2 bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Send Message
            </button>
            {status}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
