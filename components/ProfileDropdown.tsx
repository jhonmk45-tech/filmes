
import React from 'react';
import { PencilIcon, UserCircleIcon, QuestionMarkCircleIcon } from './Icons';
import { Profile } from '../types';

interface ProfileDropdownProps {
    profiles: Profile[];
    currentProfile: Profile;
    onProfileSelect: (profile: Profile) => void;
    onManageProfilesClick: () => void;
}

const ProfileDropdown: React.FC<ProfileDropdownProps> = ({ profiles, currentProfile, onProfileSelect, onManageProfilesClick }) => {
    
    const otherProfiles = profiles.filter(p => p.name !== currentProfile.name);
    
    const handleActionClick = (action: string) => {
        alert(`Navegando para ${action}...`);
    };

    return (
        <div className="absolute top-full right-0 mt-3 w-52 bg-black/90 border border-gray-700 rounded-md shadow-lg backdrop-blur-sm text-white text-sm">
            <div className="absolute -top-2 right-4 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-b-8 border-b-gray-300" />
            <ul className="p-3">
                {otherProfiles.map(profile => (
                    <li key={profile.name} className="mb-3">
                        <button onClick={() => onProfileSelect(profile)} className="flex items-center space-x-3 w-full text-left hover:underline">
                            <img src={profile.avatar} alt={profile.name} className="w-8 h-8 rounded-md" />
                            <span>{profile.name}</span>
                        </button>
                    </li>
                ))}
                <li>
                    <button onClick={onManageProfilesClick} className="flex items-center space-x-3 w-full text-left hover:underline">
                        <PencilIcon className="h-5 w-5 text-gray-400" />
                        <span>Gerenciar Perfis</span>
                    </button>
                </li>
            </ul>
            <ul className="border-t border-gray-600 p-3 space-y-3">
                <li>
                     <button onClick={() => handleActionClick('Conta')} className="flex items-center space-x-3 w-full text-left hover:underline">
                        <UserCircleIcon className="h-5 w-5 text-gray-400" />
                        <span>Conta</span>
                    </button>
                </li>
                <li>
                    <button onClick={() => handleActionClick('Central de Ajuda')} className="flex items-center space-x-3 w-full text-left hover:underline">
                        <QuestionMarkCircleIcon className="h-5 w-5 text-gray-400" />
                        <span>Central de Ajuda</span>
                    </button>
                </li>
            </ul>
            <div className="border-t border-gray-600 p-3">
                <button onClick={() => handleActionClick('Sair da Netflix')} className="w-full text-center hover:underline">
                    <span>Sair da Netflix</span>
                </button>
            </div>
        </div>
    );
};

export default ProfileDropdown;
