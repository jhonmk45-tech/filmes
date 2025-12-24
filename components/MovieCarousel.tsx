
import React, { useRef } from 'react';
import type { Movie } from '../types';
import MovieCard from './MovieCard';
import { ChevronLeftIcon, ChevronRightIcon } from './Icons';

interface MovieCarouselProps {
    title: string;
    movies: Movie[];
    isHero?: boolean;
    onCardClick: (movie: Movie) => void;
}

const MovieCarousel: React.FC<MovieCarouselProps> = ({ title, movies, isHero = false, onCardClick }) => {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const scrollTo = direction === 'left' 
                ? scrollLeft - clientWidth * 0.8
                : scrollLeft + clientWidth * 0.8;
            
            scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
        }
    };

    const cardContainerClasses = isHero 
        ? "grid-flow-col auto-cols-[45%] sm:auto-cols-[35%] md:auto-cols-[28%] lg:auto-cols-[23%] xl:auto-cols-[18%]"
        : "grid-flow-col auto-cols-[45%] sm:auto-cols-[35%] md:auto-cols-[24%] lg:auto-cols-[18%] xl:auto-cols-[15%]";

    return (
        <div className="relative group">
            {!isHero && <h2 className="text-lg md:text-xl lg:text-2xl font-bold mb-2 md:mb-4 px-4 sm:px-6 lg:px-12">{title}</h2>}
            
            <button 
                onClick={() => scroll('left')}
                className="absolute left-0 -translate-y-1/2 z-20 bg-black/50 h-[56.25%] w-12 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/70 cursor-pointer rounded-r-md"
                aria-label="Scroll left"
                style={{top: isHero ? '50%' : '59%'}}
            >
                <ChevronLeftIcon className="h-8 w-8 text-white" />
            </button>

            <div 
                ref={scrollRef} 
                className={`grid ${cardContainerClasses} gap-2 overflow-x-auto overflow-y-hidden scrollbar-hide px-4 sm:px-6 lg:px-12`}
            >
                {movies.map(movie => (
                    <MovieCard key={movie.id} movie={movie} isHero={isHero} onClick={onCardClick} />
                ))}
            </div>

            <button 
                onClick={() => scroll('right')}
                className="absolute right-0 -translate-y-1/2 z-20 bg-black/50 h-[56.25%] w-12 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/70 cursor-pointer rounded-l-md"
                aria-label="Scroll right"
                style={{top: isHero ? '50%' : '59%'}}
            >
                <ChevronRightIcon className="h-8 w-8 text-white" />
            </button>
        </div>
    );
};

export default MovieCarousel;
