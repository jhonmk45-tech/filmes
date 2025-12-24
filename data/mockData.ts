
import type { CarouselData } from '../types';

export const carouselsData: CarouselData[] = [
  {
    title: 'Hero', // This title is not displayed for hero
    movies: [
      { id: 1, title: 'Matrix', imageUrl: 'https://picsum.photos/seed/matrix/800/450', description: 'Um hacker de computador descobre a verdade chocante sobre sua realidade e seu papel na guerra contra seus controladores.' },
      { id: 2, title: 'Transformers', imageUrl: 'https://picsum.photos/seed/transformers/500/281', description: 'Uma antiga luta entre duas raças de robôs Cybertronianas, os heróicos Autobots e os malvados Decepticons, chega à Terra.' },
      { id: 3, title: 'Shazam', imageUrl: 'https://picsum.photos/seed/shazam/500/281', isNew: true, description: 'Um garoto adotivo recém-chegado de 14 anos pode se transformar em um super-herói adulto, Shazam, cortesia de um antigo mago.' },
      { id: 4, title: 'Avatar', imageUrl: 'https://picsum.photos/seed/avatar/500/281', description: 'Um paraplégico Fuzileiro Naval despachado para a lua Pandora em uma missão única se vê dividido entre seguir ordens e proteger o mundo que ele sente ser seu lar.' },
      { id: 5, title: 'Dune', imageUrl: 'https://picsum.photos/seed/dune/500/281', description: 'Adaptação do romance de ficção científica de Frank Herbert sobre o filho de uma família nobre encarregado da proteção do bem mais valioso e do elemento mais vital da galáxia.' },
      { id: 6, title: 'Inception', imageUrl: 'https://picsum.photos/seed/inception/500/281', description: 'Um ladrão que rouba segredos corporativos através do uso da tecnologia de compartilhamento de sonhos recebe a tarefa inversa de plantar uma ideia na mente de um CEO.' },
    ],
  },
  {
    title: 'Capricórnio nasceu para comandar',
    category: 'series',
    movies: [
      { id: 7, title: 'Além do Direito', imageUrl: 'https://picsum.photos/seed/direito/400/225', description: 'Descrição para Além do Direito.' },
      { id: 8, title: 'Unicórnio Implacável', imageUrl: 'https://picsum.photos/seed/unicornio/400/225', description: 'Descrição para Unicórnio Implacável.' },
      { id: 9, title: 'Gostinho de Amor', imageUrl: 'https://picsum.photos/seed/amor/400/225', description: 'Descrição para Gostinho de Amor.' },
      { id: 10, title: 'Hometown Cha-Cha-Cha', imageUrl: 'https://picsum.photos/seed/hometown/400/225', description: 'Descrição para Hometown Cha-Cha-Cha.' },
      { id: 11, title: 'Vincenzo', imageUrl: 'https://picsum.photos/seed/vincenzo/400/225', description: 'Descrição para Vincenzo.' },
      { id: 12, title: 'Crash Landing on You', imageUrl: 'https://picsum.photos/seed/crash/400/225', description: 'Descrição para Crash Landing on You.' },
      { id: 13, title: 'Itaewon Class', imageUrl: 'https://picsum.photos/seed/itaewon/400/225', description: 'Descrição para Itaewon Class.' },
    ],
  },
  {
    title: 'Em alta',
    movies: [
      { id: 14, title: 'Squid Game', imageUrl: 'https://picsum.photos/seed/squid/400/225', description: 'Centenas de jogadores com dificuldades financeiras aceitam um convite estranho para competir em jogos infantis. Um prêmio tentador os aguarda - com apostas mortais.' },
      { id: 15, title: 'Money Heist', imageUrl: 'https://picsum.photos/seed/heist/400/225', description: 'Um grupo incomum de ladrões tenta realizar o roubo mais perfeito da história espanhola - roubar 2,4 bilhões de euros da Casa da Moeda Real da Espanha.' },
      { id: 16, title: 'The Witcher', imageUrl: 'https://picsum.photos/seed/witcher/400/225', description: 'Geralt de Rivia, um caçador de monstros solitário, luta para encontrar seu lugar em um mundo onde as pessoas muitas vezes se mostram mais perversas do que as bestas.' },
      { id: 17, title: 'Stranger Things', imageUrl: 'https://picsum.photos/seed/stranger/400/225', description: 'Quando um menino desaparece, sua mãe, um chefe de polícia e seus amigos devem confrontar forças aterrorizantes para trazê-lo de volta.' },
      { id: 18, title: 'Bridgerton', imageUrl: 'https://picsum.photos/seed/bridgerton/400/225', isNew: true, description: 'A riqueza, a luxúria e a traição se desenrolam na alta sociedade da Regência de Londres, vistas através dos olhos da poderosa família Bridgerton.' },
      { id: 19, title: 'The Queen\'s Gambit', imageUrl: 'https://picsum.photos/seed/gambit/400/225', description: 'A órfã prodígio do xadrez Beth Harmon luta contra o vício em uma busca para se tornar a maior jogadora de xadrez do mundo.' },
      { id: 20, title: 'Cobra Kai', imageUrl: 'https://picsum.photos/seed/cobra/400/225', description: 'Décadas depois de seu confronto no Torneio de Karatê All Valley de 1984, Johnny Lawrence e Daniel LaRusso estão novamente em rivalidade.' },
    ],
  },
   {
    title: 'Jogos',
    category: 'games',
    movies: [
        { id: 33, title: 'The Last of Us', imageUrl: 'https://picsum.photos/seed/lastofus/400/225', description: 'Descrição para The Last of Us.' },
        { id: 34, title: 'God of War', imageUrl: 'https://picsum.photos/seed/godofwar/400/225', description: 'Descrição para God of War.' },
        { id: 35, title: 'Red Dead Redemption 2', imageUrl: 'https://picsum.photos/seed/rdr2/400/225', description: 'Descrição para Red Dead Redemption 2.' },
        { id: 36, title: 'Cyberpunk 2077', imageUrl: 'https://picsum.photos/seed/cyberpunk/400/225', description: 'Descrição para Cyberpunk 2077.' },
        { id: 37, title: 'Elden Ring', imageUrl: 'https://picsum.photos/seed/eldenring/400/225', description: 'Descrição para Elden Ring.' },
        { id: 38, title: 'Hades', imageUrl: 'https://picsum.photos/seed/hades/400/225', description: 'Descrição para Hades.' },
    ],
  },
  {
    title: 'Séries de Ficção Científica',
    category: 'series',
    movies: [
        { id: 21, title: 'Black Mirror', imageUrl: 'https://picsum.photos/seed/mirror/400/225', description: 'Uma série de antologia que explora um futuro distorcido e de alta tecnologia, onde as maiores inovações da humanidade e seus instintos mais sombrios colidem.' },
        { id: 22, title: 'The Mandalorian', imageUrl: 'https://picsum.photos/seed/mando/400/225', description: 'As viagens de um caçador de recompensas solitário nos confins da galáxia, longe da autoridade da Nova República.' },
        { id: 23, title: 'Westworld', imageUrl: 'https://picsum.photos/seed/westworld/400/225', description: 'Em um parque de diversões futurista com tema do Velho Oeste, um grupo de "anfitriões" andróides desvia da programação de seus engenheiros.' },
        { id: 24, title: 'Altered Carbon', imageUrl: 'https://picsum.photos/seed/carbon/400/225', description: 'Situado em um futuro onde a consciência pode ser digitalizada e transferida, um prisioneiro retorna à vida em um novo corpo e deve resolver um assassinato para ganhar sua liberdade.' },
        { id: 25, title: 'The Expanse', imageUrl: 'https://picsum.photos/seed/expanse/400/225', description: 'Um detetive no cinturão de asteróides, o primeiro oficial de um cargueiro de gelo e uma executiva da Terra descobrem uma vasta conspiração que ameaça a colônia rebelde do sistema.' },
        { id: 26, title: 'Dark', imageUrl: 'https://picsum.photos/seed/dark/400/225', description: 'O desaparecimento de duas crianças em uma cidade alemã expõe as relações fraturadas, as vidas duplas e o passado sombrio de quatro famílias que vivem lá, e revela um mistério que abrange três gerações.' },
    ],
  },
  {
    title: 'Filmes de Ação e Aventura',
    category: 'movie',
    movies: [
        { id: 27, title: 'Mad Max: Fury Road', imageUrl: 'https://picsum.photos/seed/madmax/400/225', description: 'Em um deserto pós-apocalíptico, uma mulher se rebela contra um governante tirânico em busca de sua terra natal com a ajuda de um grupo de prisioneiras e um vagabundo chamado Max.' },
        { id: 28, title: 'John Wick', imageUrl: 'https://picsum.photos/seed/johnwick/400/225', description: 'Um ex-assassino de aluguel sai da aposentadoria para rastrear os gângsteres que levaram tudo dele.' },
        { id: 29, title: 'Gladiator', imageUrl: 'https://picsum.photos/seed/gladiator/400/225', description: 'Um ex-general romano busca vingança contra o imperador corrupto que assassinou sua família e o mandou para a escravidão.' },
        { id: 30, title: 'The Dark Knight', imageUrl: 'https://picsum.photos/seed/darkknight/400/225', description: 'Quando a ameaça conhecida como Coringa emerge de seu passado misterioso, ele causa estragos e caos nas pessoas de Gotham.' },
        { id: 31, title: 'Edge of Tomorrow', imageUrl: 'https://picsum.photos/seed/tomorrow/400/225', description: 'Um soldado lutando contra alienígenas revive o mesmo dia repetidamente, o dia se reiniciando toda vez que ele morre.' },
        { id: 32, title: 'Casino Royale', imageUrl: 'https://picsum.photos/seed/royale/400/225', description: 'Em sua primeira missão como 007, James Bond deve derrotar um banqueiro privado que financia terroristas em um jogo de pôquer de altas apostas.' },
    ]
  }
];
