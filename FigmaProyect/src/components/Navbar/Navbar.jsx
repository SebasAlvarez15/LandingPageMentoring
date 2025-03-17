import React,{useState} from 'react'
import Logo from '../../assets/Logo.svg'
import Button from '../Atoms/Button/Button'

const navbarLinks = [
    {
        id: 1,
        title: "Home",
        link: "/"
    },
    {
        id: 2,
        title: "Service",
        link: "#" //Esto quiere decir que no va para ninguna parte
    },
    {
        id: 3,
        title: "Feature",
        link: "#"
    },
    {
        id: 4,
        title: "Product",
        link: "#"
    },
    {
        id: 5,
        title: "Testimonial",
        link: "#"
    },
    {
        id: 6,
        title: "FAQ",
        link: "#"
    }
]

const Navbar = () => {

    const [isOPen, setIsOpen] = useState(false);
    
    const toggleMenu = () => {
        setIsOpen(!isOPen)
    }
  return (
    <nav className='fixed top-0 left-0 w-full bg-[#F5F7FA] bg-opaity-30 backdrop-blur-md z-50'>
        <div className='flex justify-between items-center sm:px-12 sm:py-6 px-4 py-3'>
        <div>
                    <img src={Logo} alt='Logo del sitio' className='w-[100px]' />
                </div>
        <button onClick={toggleMenu} className='md:hidden text-black'>
                    <svg
                    className='w-6 h-6'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    >
                        {isOPen ? ( <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                        
                        />) : ( <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d="M4 6h16M4 12h16M4 18h16 "
                            
                            />)}
                       
                       

                    </svg>
                </button>
    <div className='hidden md:block'>
                    <ul className='flex sm:space-x-8 space-x-4'>
                        {navbarLinks.map((link) => (
                            <li key={link.id}>
                                <a className='text-black sm:text-lg text-sm hover:text-sky-800 transition-transform hover:scale-110 transform inline-block duration-300' 
                                href={link.link}>{link.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='flex gap-4'>
                <Button
                backgroundColor="#F5F7FA"
                textColor="#4CAF4F"
                title="Login"
                width={91}
                height={40}
                onClick={() => console.log("Clicked!")}
                loading={false}
                />
                <Button
                backgroundColor="#4CAF4F"
                textColor="#FFFFFF"
                title="Sign up"
                width={91}
                height={40}
                onClick={() => console.log("Clicked!")}
                loading={false}
                />
                </div>
                </div>
                <div className={`md:hidden absolute w-full bg-[#4CAF4F] transition-all duration-300 ${isOPen ? "opacity-100 visible":"opacity-0 invisible"}`}>
                <ul className='flex flex-col px-4 py-2'>
                        {navbarLinks.map((link) => (
                            <li key={link.id} className='py-2 text-center'>
                                <a 
                                className='text-white hover:text-sky-200' 
                                href={link.link} 
                                onClick={() => setIsOpen(false)}
                                >{link.title}</a>
                            </li>
                        ))}
                    </ul>
                    
                </div>
    </nav>
  )
}

export default Navbar