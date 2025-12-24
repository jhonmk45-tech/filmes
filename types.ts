
export interface Movie {
  id: number;
  title: string;
  imageUrl: string;
  description: string;
  isNew?: boolean;
}

export interface CarouselData {
  title: string;
  movies: Movie[];
  category?: 'series' | 'movie' | 'games';
}

export interface Profile {
  name: string;
  avatar: string;
}

export interface NewContent {
    title: string;
    description: string;
    imageUrl: string;
    category: 'series' | 'movie' | 'games';
    carouselTitle: string;
    isNew: boolean;
}
