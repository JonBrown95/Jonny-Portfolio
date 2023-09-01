import React from "react";
import { FiPhone, FiMail, } from "react-icons/fi";

const Contact = () => {
  return (
    <footer
      id="contact"
      className="snap-end bg-opacity-40 p-10 text-xs md:text-sm bg-slate-300 flex flex-col gap-5 text-black justify-center items-center w-screen h-[300dvh] min-h-[100px] max-h-[200px] font-bold subpixel-antialiased"
    >
      <div className="text-center md:max-w-[500px] max-w-[300px]">
        <p>Created by Jonathan Brown using React with Tailwind CSS</p>
      </div>

      <div className="text-center md:max-w-[500px] max-w-[300px]">
        <p className="mb-1">For inquiries, feel free to reach out:</p>
        <p>
          <FiPhone className="inline mr-1 text-[#00df9a]" />{" "}
          <a href="tel:+447803199773">07803 199 773</a> 
          <FiMail className="inline mx-1 text-[#00df9a]" />{" "}
          <a href="mailto:brownjon41@gmail.com">brownjon41@gmail.com</a>
        </p>
      </div>
    </footer>
  );
};

export default Contact;
