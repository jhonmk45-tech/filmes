
import React, { useState, useEffect, useRef } from 'react';
import { SearchIcon, BellIcon, CaretDownIcon, CloseIcon } from './Icons';
import NotificationsPanel from './NotificationsPanel';
import ProfileDropdown from './ProfileDropdown';
import { Profile } from '../types';

const NetflixLogo = () => (
    <svg
        className="h-5 md:h-7 text-netflix-red"
        viewBox="0 0 111 30"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M105.062 14.2812C105.062 12.0312 104.25 10.125 102.625 8.5625C101 7 98.9062 6.1875 96.3438 6.1875C92.75 6.1875 90.0625 7.84375 88.25 11.1562V6.5H82.0312V29.3125H88.25V18.2812C90.25 14.75 92.9375 13 96.0938 13C97.6875 13 98.875 13.4375 99.6562 14.3125C100.438 15.1875 100.828 16.5312 100.828 18.3438V29.3125H107V16.9375C107 15.8438 106.312 14.8125 105.062 14.2812ZM80.8125 22.9375C80.6875 23.0312 80.5938 23.125 80.4688 23.25C80.2812 23.4375 80.0625 23.625 79.8125 23.8438C79.4375 24.1875 79.0312 24.5625 78.5938 24.9375C78.1562 25.3125 77.7188 25.6875 77.25 26.0938C74.0312 28.6875 70.3125 29.8125 66.0938 29.8125C62.8438 29.8125 60.1562 29.0625 58.0312 27.5625C55.9062 26.0625 54.2812 24 53.1562 21.375C52.0312 18.75 51.5 15.75 51.5 12.375V6.5H45.2812V29.3125H51.5V16.8125C51.5 18.4062 51.875 19.8125 52.625 21.0312C53.375 22.25 54.3438 23.2188 55.5312 23.9375C56.7188 24.6562 58.0312 25.0312 59.4688 25.0312C60.5312 25.0312 61.5312 24.8438 62.4688 24.5C63.4062 24.1562 64.2812 23.6562 65.0938 23C65.9062 22.3438 66.7188 21.625 67.5312 20.8438L69.3438 22.4062L80.8125 22.9375ZM38.4062 29.3125H44.625V6.5H38.4062V29.3125ZM30.25 29.3125H36.4688V6.5H30.25V29.3125ZM24.0312 6.5V29.3125H30.25V11.1562L24.0312 6.5ZM17.8125 29.3125H24.0312V6.5H17.8125V29.3125ZM4.96875 29.3125H11.1875V6.5H4.96875V29.3125ZM0 6.5V29.3125H6.21875V11.1562L0 6.5Z" />
    </svg>
);

interface HeaderProps {
    activeItem: string;
    onNavItemClick: (item: string) => void;
    searchQuery: string;
    onSearchChange: (query: string) => void;
    profiles: Profile[];
    currentProfile: Profile;
    onProfileChange: (profile: Profile) => void;
    onManageProfilesClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ activeItem, onNavItemClick, searchQuery, onSearchChange, profiles, currentProfile, onProfileChange, onManageProfilesClick }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isSearchActive, setIsSearchActive] = useState(false);
    const [showNotifications, setShowNotifications] = useState(false);
    const [showProfileDropdown, setShowProfileDropdown] = useState(false);
    
    const searchRef = useRef<HTMLDivElement>(null);
    const notificationsRef = useRef<HTMLDivElement>(null);
    const profileRef = useRef<HTMLDivElement>(null);
    const searchInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 10);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isSearchActive && searchInputRef.current) {
            searchInputRef.current.focus();
        }
    }, [isSearchActive]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
                if(!searchQuery) setIsSearchActive(false);
            }
            if (notificationsRef.current && !notificationsRef.current.contains(event.target as Node)) {
                setShowNotifications(false);
            }
            if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
                setShowProfileDropdown(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [searchQuery]);


    const navItems = ['Início', 'Séries', 'Filmes', 'Jogos', 'Bombando', 'Minha lista', 'Navegar por idiomas'];

    const handleProfileSelect = (profile: Profile) => {
        onProfileChange(profile);
        setShowProfileDropdown(false);
    };

    const handleManageProfilesClick = () => {
        setShowProfileDropdown(false);
        onManageProfilesClick();
    };

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${isScrolled || isSearchActive ? 'bg-netflix-dark' : 'bg-gradient-to-b from-black/70 to-transparent'}`}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
                <div className="flex items-center space-x-8">
                    <NetflixLogo />
                    <nav className="hidden lg:flex items-center space-x-4">
                        {navItems.map((item) => (
                            <button 
                                key={item} 
                                onClick={() => onNavItemClick(item)}
                                className={`text-sm transition-colors duration-200 hover:text-gray-300 ${activeItem === item ? 'font-semibold text-white' : 'text-gray-400'}`}
                            >
                                {item}
                            </button>
                        ))}
                    </nav>
                </div>
                <div className="flex items-center space-x-4 md:space-x-6">
                    <div ref={searchRef} className="flex items-center">
                        <div className={`flex items-center bg-netflix-dark transition-all duration-300 ${isSearchActive ? 'w-64 border border-white/80 p-1' : 'w-0'}`}>
                            <SearchIcon />
                            <input
                                ref={searchInputRef}
                                type="text"
                                value={searchQuery}
                                onChange={(e) => onSearchChange(e.target.value)}
                                placeholder="Títulos, gente e gêneros"
                                className={`bg-transparent text-white outline-none ml-2 transition-opacity duration-300 ${isSearchActive ? 'opacity-100 w-full' : 'opacity-0 w-0'}`}
                            />
                        </div>
                        <button onClick={() => setIsSearchActive(true)} className={`text-white hover:text-gray-300 transition-colors ${isSearchActive ? 'hidden' : 'block'}`}>
                            <SearchIcon />
                        </button>
                    </div>

                    <div ref={notificationsRef} className="relative">
                        <button onClick={() => setShowNotifications(prev => !prev)} className="text-white hover:text-gray-300 transition-colors">
                            <BellIcon />
                        </button>
                        {showNotifications && <NotificationsPanel />}
                    </div>

                    <div ref={profileRef} className="relative">
                        <button onClick={() => setShowProfileDropdown(prev => !prev)} className="flex items-center space-x-2 cursor-pointer">
                            <div className="w-8 h-8 bg-red-600 rounded-md overflow-hidden">
                                <img src={currentProfile.avatar} alt={currentProfile.name} className="w-full h-full object-cover" />
                            </div>
                            <CaretDownIcon className={`h-4 w-4 transition-transform duration-200 ${showProfileDropdown ? 'rotate-180' : ''}`} />
                        </button>
                        {showProfileDropdown && <ProfileDropdown 
                            profiles={profiles} 
                            currentProfile={currentProfile} 
                            onProfileSelect={handleProfileSelect} 
                            onManageProfilesClick={handleManageProfilesClick}
                        />}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
