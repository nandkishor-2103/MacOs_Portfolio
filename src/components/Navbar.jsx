import {useState, useEffect} from 'react';
import dayjs from 'dayjs';
import {navIcons, navLinks} from '#constants/index';
import useWindowStore from '#store/window';

const Navbar = () => {
    const {openWindow, toggleSearch} = useWindowStore();
    const [time, setTime] = useState(dayjs().format('ddd D MMM hh:mm A'));
    const [isUserHovered, setIsUserHovered] = useState(false);

    useEffect(() => {
        // Real-time Clock Sync
        const timer = setInterval(() => {
            setTime(dayjs().format('ddd D MMM hh:mm A'));
        }, 1000);

        // Global Shortcut: Cmd + K or Ctrl + K
        const handleKeyDown = (e) => {
            if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
                e.preventDefault();
                toggleSearch();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => {
            clearInterval(timer);
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [toggleSearch]);

    return (
        <nav>
            <div className="flex items-center gap-5">
                <img src='/images/logo.svg' alt='logo' className='w-3'/>
                <p className='text-md font-bold '>Nandkishor's Portfolio</p>

                <ul className="flex items-center gap-5 max-sm:hidden">
                    {navLinks.map(({id, name, type}) => (
                        <li key={id} onClick={() => openWindow(type)} className="cursor-pointer">
                            <p className="text-sm hover:underline transition-all">{name}</p>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="flex items-center gap-5">
                <ul className="flex items-center gap-5">
                    {navIcons.map(({id, img}) => (
                        <li
                            key={id}
                            className="relative flex items-center justify-center"
                            onMouseEnter={() => id === 3 && setIsUserHovered(true)}
                            onMouseLeave={() => id === 3 && setIsUserHovered(false)}
                        >
                            <img
                                src={img}
                                className='icon cursor-pointer active:scale-90 transition-transform'
                                alt={`icon-${id}`}
                                onClick={() => {
                                    if (id === 2) toggleSearch(); // Search Trigger
                                }}
                            />

                            {/* User Hover Name Tooltip */}
                            {id === 3 && isUserHovered && (
                                <div
                                    className="absolute top-8 right-0 bg-black/80 backdrop-blur-md text-white text-[10px] px-2 py-1 rounded shadow-lg border border-white/10 whitespace-nowrap">
                                    Nandkishor Mandal
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
                <time className="text-sm font-medium text-black">{time}</time>
            </div>
        </nav>
    );
};

export default Navbar;