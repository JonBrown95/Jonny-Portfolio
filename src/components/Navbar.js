import blackLogo from '../images/blackLogo.svg'

const Navbar = () => {
    return (
        <nav className="sticky top-0 z-10 backdrop-filter backdrop-blur-lg bg-opacity-0 bg-white">
  <div className="w-full mx-auto px-4 fixed top-0 z-50 backdrop-blur-xl">
    <div className="flex items-center justify-between h-16">
    <img src={blackLogo} alt="Logo for Jonny's portfolio - initials JB in <> tags" className="h-14 w-14" />
      <div className="flex space-x-4 text-gray-900">
        
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  </div>
</nav>
    )}

export default Navbar