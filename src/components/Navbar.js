import blackLogo from '../images/blackLogo.svg'

const Navbar = () => {
    return (
     <div className='flex justify-between backdrop-blur-xl items-center h-20 max-w-[1240px] mx-auto px-6 text-black'>
        <img src={blackLogo} alt="Black Logo" className="h-12 " />
        <ul className="flex">
            <li className="p-4">Contact</li>
        </ul>
     </div>
    )
}

export default Navbar