
import React, { useState } from 'react';
import { CloseIcon } from './Icons';

interface AdminLoginModalProps {
    onLogin: (password: string) => boolean;
    onClose: () => void;
}

const AdminLoginModal: React.FC<AdminLoginModalProps> = ({ onLogin, onClose }) => {
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const success = onLogin(password);
        if (!success) {
            setError('Senha incorreta. Tente novamente.');
        }
    };

    return (
        <div 
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center"
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-labelledby="admin-login-title"
        >
            <div 
                className="bg-netflix-dark w-11/12 max-w-md rounded-lg overflow-hidden relative p-8"
                onClick={(e) => e.stopPropagation()}
            >
                <button 
                    onClick={onClose}
                    className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-1 hover:bg-black/80 transition-colors z-20"
                    aria-label="Close modal"
                >
                    <CloseIcon className="h-6 w-6" />
                </button>
                
                <h2 id="admin-login-title" className="text-2xl font-bold mb-4">Login de Administrador</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-300">Senha</label>
                    <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="mt-1 block w-full bg-gray-700 border border-gray-600 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-netflix-red focus:border-netflix-red"
                        required
                    />
                    {error && <p className="mt-2 text-sm text-netflix-red">{error}</p>}
                    <button
                        type="submit"
                        className="mt-6 w-full bg-netflix-red text-white font-bold rounded-md py-2 text-lg hover:bg-red-700 transition-colors"
                    >
                        Entrar
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AdminLoginModal;
