
import React from 'react';
import { Profile } from '../types';
import { PencilIcon } from './Icons';

interface ManageProfilesProps {
    profiles: Profile[];
    onDone: () => void;
}

const ManageProfiles: React.FC<ManageProfilesProps> = ({ profiles, onDone }) => {
    const handleProfileClick = (profileName: string) => {
        alert(`Editando o perfil: ${profileName}`);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-white">
            <h1 className="text-3xl md:text-5xl mb-8">Gerenciar perfis:</h1>
            <div className="flex items-center justify-center space-x-4">
                {profiles.map(profile => (
                    <div key={profile.name} className="flex flex-col items-center group">
                        <button 
                            onClick={() => handleProfileClick(profile.name)}
                            className="relative w-24 h-24 md:w-36 md:h-36 rounded-md overflow-hidden"
                            aria-label={`Edit profile ${profile.name}`}
                        >
                            <img src={profile.avatar} alt={profile.name} className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <PencilIcon className="h-8 w-8 text-white" />
                            </div>
                        </button>
                        <span className="mt-2 text-gray-400 group-hover:text-white cursor-pointer">{profile.name}</span>
                    </div>
                ))}
            </div>
            <button
                onClick={onDone}
                className="mt-12 bg-transparent border border-gray-500 text-gray-500 font-semibold px-8 py-2 text-lg hover:border-white hover:text-white transition-colors"
            >
                Concluído
            </button>
        </div>
    );
};

export default ManageProfiles;
