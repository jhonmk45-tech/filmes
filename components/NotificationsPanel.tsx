
import React from 'react';

const notifications = [
    { id: 1, img: 'https://picsum.photos/seed/notif1/80/45', title: 'Nova temporada de Stranger Things já disponível!', time: '1 dia atrás' },
    { id: 2, img: 'https://picsum.photos/seed/notif2/80/45', title: 'The Witcher: Lembrete de estreia amanhã.', time: '2 dias atrás' },
    { id: 3, img: 'https://picsum.photos/seed/notif3/80/45', title: 'Adicionado à sua lista: Black Mirror.', time: '5 dias atrás' },
];

const NotificationsPanel: React.FC = () => {
    return (
        <div className="absolute top-full right-0 mt-2 w-80 bg-black/80 border border-gray-700 rounded-md shadow-lg backdrop-blur-sm">
            <ul className="divide-y divide-gray-700">
                {notifications.map(notif => (
                    <li key={notif.id} className="flex items-center p-3 hover:bg-netflix-gray/20 cursor-pointer">
                        <img src={notif.img} alt={notif.title} className="w-20 h-auto object-cover rounded-sm" />
                        <div className="ml-3">
                            <p className="text-sm text-white">{notif.title}</p>
                            <p className="text-xs text-gray-400 mt-1">{notif.time}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default NotificationsPanel;
