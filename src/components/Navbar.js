import blackLogo from '../images/blackLogo.svg'

const Navbar = () => {
    return (
        <nav className="sticky top-0 z-10 backdrop-filter backdrop-blur-lg bg-opacity-0 bg-white">
  <div className="max-w-5xl mx-auto px-4">
    <div className="flex items-center justify-between h-16">
      <span className="text-2xl text-gray-900 font-semibold">Jonny</span>
      <div className="flex space-x-4 text-gray-900">
        
        <a href="#">About</a>
        <a href="#">Projects</a>
        <a href="#">Contact</a>
      </div>
    </div>
  </div>
</nav>
    )}

export default Navbar