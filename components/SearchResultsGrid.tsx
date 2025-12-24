
import React from 'react';
import { Movie } from '../types';
import MovieCard from './MovieCard';

interface SearchResultsGridProps {
    movies: Movie[];
    onCardClick: (movie: Movie) => void;
}

const SearchResultsGrid: React.FC<SearchResultsGridProps> = ({ movies, onCardClick }) => {
    return (
        <div className="px-4 sm:px-6 lg:px-12 py-8">
            <h2 className="text-xl md:text-2xl font-bold mb-4">Resultados da busca</h2>
            {movies.length > 0 ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2 md:gap-4">
                    {movies.map(movie => (
                        <MovieCard key={movie.id} movie={movie} onClick={onCardClick} />
                    ))}
                </div>
            ) : (
                <p className="text-netflix-gray">Nenhum resultado encontrado.</p>
            )}
        </div>
    );
};

export default SearchResultsGrid;
