
import React from 'react';
import type { Movie } from '../types';

interface MovieCardProps {
    movie: Movie;
    isHero?: boolean;
    onClick: (movie: Movie) => void;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie, isHero = false, onClick }) => {
    return (
        <div 
            className="aspect-video rounded-md overflow-hidden cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:z-10 relative"
            onClick={() => onClick(movie)}
            role="button"
            aria-label={`View details for ${movie.title}`}
        >
            <img 
                src={movie.imageUrl} 
                alt={movie.title} 
                className="w-full h-full object-cover"
                loading="lazy"
            />
             {movie.isNew && (
                <div className="absolute bottom-2 md:bottom-4 left-0 bg-netflix-red text-white text-xs font-bold px-2 py-1 rounded-r-sm">
                    Novidade
                </div>
            )}
        </div>
    );
};

export default MovieCard;
