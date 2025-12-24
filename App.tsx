
import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import MovieCarousel from './components/MovieCarousel';
import HeroBanner from './components/HeroBanner';
import MovieDetailModal from './components/MovieDetailModal';
import SearchResultsGrid from './components/SearchResultsGrid';
import ManageProfiles from './components/ManageProfiles';
import AdminLoginModal from './components/AdminLoginModal';
import AddContentPanel from './components/AddContentPanel';
import { carouselsData } from './data/mockData';
import { profiles } from './data/profiles';
import type { CarouselData, Movie, Profile, NewContent } from './types';

const App: React.FC = () => {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [activeNavItem, setActiveNavItem] = useState('Início');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentProfile, setCurrentProfile] = useState<Profile>(profiles[0]);
  const [isManagingProfiles, setIsManagingProfiles] = useState(false);
  const [isAdminLoginOpen, setIsAdminLoginOpen] = useState(false);
  const [isAdminPanelOpen, setIsAdminPanelOpen] = useState(false);
  const [dynamicCarousels, setDynamicCarousels] = useState<CarouselData[]>(carouselsData);

  const heroMovie = dynamicCarousels[0].movies[0];

  const handleCardClick = (movie: Movie) => {
    setSelectedMovie(movie);
  };

  const handleCloseModal = () => {
    setSelectedMovie(null);
  };

  const handleProfileChange = (profile: Profile) => {
    setCurrentProfile(profile);
    console.log(`Switched to profile: ${profile.name}`);
  };

  const handleManageProfiles = () => {
    setIsManagingProfiles(true);
  };

  const handleDoneManaging = () => {
    setIsManagingProfiles(false);
  };

  const handleAdminLogin = (password: string): boolean => {
    if (password === '4545') {
      setIsAdminLoginOpen(false);
      setIsAdminPanelOpen(true);
      return true;
    }
    return false;
  };

  const handleAddContent = (newContent: NewContent) => {
    setDynamicCarousels(prevCarousels => {
      const updatedCarousels = [...prevCarousels];
      const newMedia: Movie = {
        id: Date.now(), // Simple unique ID
        title: newContent.title,
        description: newContent.description,
        imageUrl: newContent.imageUrl,
        isNew: newContent.isNew,
      };

      const targetCarouselIndex = updatedCarousels.findIndex(c => c.title === newContent.carouselTitle);

      if (targetCarouselIndex > -1) {
        // Add to existing carousel
        updatedCarousels[targetCarouselIndex].movies.push(newMedia);
      } else {
        // Create new carousel
        updatedCarousels.push({
          title: newContent.carouselTitle,
          movies: [newMedia],
          category: newContent.category,
        });
      }
      return updatedCarousels;
    });
    setIsAdminPanelOpen(false);
  };


  const contentCarousels = dynamicCarousels.slice(1);

  const filteredCarousels = contentCarousels.filter(carousel => {
    if (activeNavItem === 'Início') return true;
    if (activeNavItem === 'Séries') return carousel.category === 'series';
    if (activeNavItem === 'Filmes') return carousel.category === 'movie';
    if (activeNavItem === 'Jogos') return carousel.category === 'games';
    return false;
  });

  const searchResults = useMemo(() => {
    if (!searchQuery) return [];
    const allMovies = contentCarousels.flatMap(carousel => carousel.movies);
    const uniqueMovies = Array.from(new Map(allMovies.map(movie => [movie.id, movie])).values());
    return uniqueMovies.filter(movie => 
      movie.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, contentCarousels]);

  const isSearching = searchQuery.length > 0;

  if (isAdminPanelOpen) {
    return <AddContentPanel 
              onAddContent={handleAddContent} 
              onClose={() => setIsAdminPanelOpen(false)} 
              existingCarousels={dynamicCarousels.map(c => c.title)}
            />;
  }

  return (
    <div className="bg-netflix-dark min-h-screen text-white">
      {!isManagingProfiles && (
        <Header 
          activeItem={activeNavItem} 
          onNavItemClick={setActiveNavItem} 
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          profiles={profiles}
          currentProfile={currentProfile}
          onProfileChange={handleProfileChange}
          onManageProfilesClick={handleManageProfiles}
        />
      )}
      <main className={!isManagingProfiles ? "pt-16 md:pt-20" : ""}>
        {isManagingProfiles ? (
          <ManageProfiles profiles={profiles} onDone={handleDoneManaging} />
        ) : (
          <>
            {isSearching ? (
              <SearchResultsGrid movies={searchResults} onCardClick={handleCardClick} />
            ) : (
              <>
                {activeNavItem === 'Início' && <HeroBanner movie={heroMovie} onPlay={() => handleCardClick(heroMovie)} onMoreInfo={() => handleCardClick(heroMovie)} />}
                
                <div className={`space-y-4 md:space-y-8 lg:space-y-12 relative z-10 ${activeNavItem === 'Início' ? '-mt-12 md:-mt-24 lg:-mt-32' : 'pt-8'}`}>
                    {filteredCarousels.length > 0 ? (
                        filteredCarousels.map((carousel: CarouselData) => (
                            <MovieCarousel 
                                key={carousel.title} 
                                title={carousel.title} 
                                movies={carousel.movies} 
                                onCardClick={handleCardClick}
                            />
                        ))
                    ) : (
                      <div className="text-center text-netflix-gray px-4 sm:px-6 lg:px-12 py-16">
                          <h2 className="text-2xl font-bold">Conteúdo indisponível</h2>
                          <p className="mt-2">Não há conteúdo para exibir nesta categoria ainda.</p>
                      </div>
                    )}
                </div>
              </>
            )}
          </>
        )}
      </main>
      {!isManagingProfiles && (
        <footer className="py-12 mt-12 text-center text-netflix-gray text-sm">
          <p>Built with React, TypeScript, and Tailwind CSS.</p>
          <p>This is a UI clone for educational purposes.</p>
          <button onClick={() => setIsAdminLoginOpen(true)} className="mt-2 text-xs text-netflix-gray hover:text-white">Admin</button>
        </footer>
      )}
      {selectedMovie && !isManagingProfiles && (
        <MovieDetailModal movie={selectedMovie} onClose={handleCloseModal} />
      )}
      {isAdminLoginOpen && (
        <AdminLoginModal onLogin={handleAdminLogin} onClose={() => setIsAdminLoginOpen(false)} />
      )}
    </div>
  );
};

export default App;