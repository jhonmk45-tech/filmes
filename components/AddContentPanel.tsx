
import React, { useState } from 'react';
import { NewContent } from '../types';

interface AddContentPanelProps {
    onAddContent: (content: NewContent) => void;
    onClose: () => void;
    existingCarousels: string[];
}

const AddContentPanel: React.FC<AddContentPanelProps> = ({ onAddContent, onClose, existingCarousels }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [category, setCategory] = useState<'movie' | 'series' | 'games'>('movie');
    const [carouselTitle, setCarouselTitle] = useState('');
    const [isNew, setIsNew] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!title || !description || !imageUrl || !carouselTitle) {
            alert('Por favor, preencha todos os campos.');
            return;
        }
        onAddContent({ title, description, imageUrl, category, carouselTitle, isNew });
    };

    const inputClasses = "mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-netflix-red focus:border-netflix-red";
    const labelClasses = "block text-sm font-medium text-gray-300";

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-netflix-dark text-white p-4">
            <div className="w-full max-w-2xl">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-3xl md:text-5xl">Adicionar Conteúdo</h1>
                    <button onClick={onClose} className="text-gray-400 hover:text-white">&times; Fechar</button>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="title" className={labelClasses}>Título</label>
                        <input id="title" type="text" value={title} onChange={e => setTitle(e.target.value)} className={inputClasses} required />
                    </div>
                    <div>
                        <label htmlFor="description" className={labelClasses}>Descrição</label>
                        <textarea id="description" value={description} onChange={e => setDescription(e.target.value)} className={inputClasses} required />
                    </div>
                    <div>
                        <label htmlFor="imageUrl" className={labelClasses}>URL da Imagem</label>
                        <input id="imageUrl" type="url" value={imageUrl} onChange={e => setImageUrl(e.target.value)} className={inputClasses} required />
                    </div>
                    <div>
                        <label htmlFor="category" className={labelClasses}>Categoria</label>
                        <select id="category" value={category} onChange={e => setCategory(e.target.value as any)} className={inputClasses}>
                            <option value="movie">Filme</option>
                            <option value="series">Série</option>
                            <option value="games">Jogo</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="carouselTitle" className={labelClasses}>Título do Carrossel (existente ou novo)</label>
                        <input id="carouselTitle" type="text" value={carouselTitle} onChange={e => setCarouselTitle(e.target.value)} className={inputClasses} list="carousel-options" required />
                        <datalist id="carousel-options">
                            {existingCarousels.map(title => <option key={title} value={title} />)}
                        </datalist>
                    </div>
                    <div className="flex items-center">
                        <input id="isNew" type="checkbox" checked={isNew} onChange={e => setIsNew(e.target.checked)} className="h-4 w-4 text-netflix-red bg-gray-700 border-gray-600 rounded focus:ring-netflix-red" />
                        <label htmlFor="isNew" className="ml-2 text-sm text-gray-300">Marcar como Novidade</label>
                    </div>
                    <div className="flex justify-end space-x-4 pt-4">
                        <button type="button" onClick={onClose} className="bg-gray-600 text-white font-bold rounded-md px-6 py-2 hover:bg-gray-500 transition-colors">Cancelar</button>
                        <button type="submit" className="bg-netflix-red text-white font-bold rounded-md px-6 py-2 hover:bg-red-700 transition-colors">Adicionar Conteúdo</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddContentPanel;
