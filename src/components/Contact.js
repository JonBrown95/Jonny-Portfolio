const Contact = () => {
  return (
    <footer
      id="contact"
      class="snap-end bg-opacity-40 p-10 text-xs md:text-sm bg-slate-300 flex flex-col gap-5 text-black gap-4 justify-center items-center w-screen h-[300dvh] min-h-[100px] max-h-[200px] font-bold subpixel-antialiased "
    >
      <div className="text-center md:max-w-[500px] max-w-[300px]    ">
        <p>Created by Jonathan Brown using React with Tailwind CSS </p>
        
      </div>

      <div className="text-center md:max-w-[500px] max-w-[300px]     ">
        <p>Whats up |</p>
      </div>

      <div className="text-center md:max-w-[500px] max-w-[300px]   underline   ">
        <p>www.google.com</p>
      </div>
    </footer>
  );
};

export default Contact;
