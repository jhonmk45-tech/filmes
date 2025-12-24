
import React from 'react';
import { Movie } from '../types';
import { CloseIcon } from './Icons';

interface MovieDetailModalProps {
    movie: Movie;
    onClose: () => void;
}

const MovieDetailModal: React.FC<MovieDetailModalProps> = ({ movie, onClose }) => {
    return (
        <div 
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center"
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-labelledby="movie-title"
        >
            <div 
                className="bg-netflix-dark w-11/12 max-w-3xl rounded-lg overflow-hidden relative"
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
            >
                <button 
                    onClick={onClose}
                    className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-1 hover:bg-black/80 transition-colors z-20"
                    aria-label="Close modal"
                >
                    <CloseIcon className="h-6 w-6" />
                </button>
                <div className="relative aspect-video">
                    <img src={movie.imageUrl} alt={movie.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-netflix-dark via-netflix-dark/50 to-transparent" />
                </div>
                <div className="p-6 md:p-8">
                    <h2 id="movie-title" className="text-2xl md:text-3xl font-bold">{movie.title}</h2>
                    <p className="mt-4 text-base text-gray-300">{movie.description}</p>
                </div>
            </div>
        </div>
    );
};

export default MovieDetailModal;
