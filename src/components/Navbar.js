import blackLogo from '../images/blackLogo.svg'

const Navbar = () => {
    return (
     <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-6 text-black'>
        <img src={blackLogo} alt="Black Logo" className="h-12 " />
        <ul className="flex">
            <li className="p-4">Contact</li>
        </ul>
     </div>
    )
}

export default Navbar