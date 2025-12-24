
import React from 'react';
import { Movie } from '../types';
import { PlayIcon, InfoIcon } from './Icons';

interface HeroBannerProps {
    movie: Movie;
    onPlay: () => void;
    onMoreInfo: () => void;
}

const HeroBanner: React.FC<HeroBannerProps> = ({ movie, onPlay, onMoreInfo }) => {
    return (
        <div className="relative h-[56.25vw] min-h-[400px] max-h-[800px] w-full">
            <img 
                src={movie.imageUrl} 
                alt={movie.title}
                className="absolute top-0 left-0 w-full h-full object-cover" 
            />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-netflix-dark via-transparent to-transparent" />

            <div className="relative z-10 h-full flex flex-col justify-center px-4 sm:px-6 lg:px-12 w-full md:w-2/3 lg:w-1/2">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white drop-shadow-lg">
                    {movie.title}
                </h1>
                <p className="mt-4 text-sm md:text-base lg:text-lg text-white/90 drop-shadow-md line-clamp-3">
                    {movie.description}
                </p>
                <div className="flex items-center space-x-3 mt-6">
                    <button 
                        onClick={onPlay}
                        className="flex items-center justify-center bg-white text-black font-bold rounded-md px-4 md:px-6 py-2 text-base md:text-lg hover:bg-white/80 transition-colors"
                    >
                        <PlayIcon className="h-6 w-6 md:h-8 md:w-8 mr-2" />
                        Assistir
                    </button>
                    <button 
                        onClick={onMoreInfo}
                        className="flex items-center justify-center bg-gray-500/70 text-white font-bold rounded-md px-4 md:px-6 py-2 text-base md:text-lg hover:bg-gray-500/50 transition-colors"
                    >
                        <InfoIcon className="h-6 w-6 md:h-7 md:w-7 mr-2" />
                        Mais informações
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HeroBanner;
