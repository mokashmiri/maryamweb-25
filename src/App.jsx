import React, { useState, useMemo, useEffect } from 'react';

const newLocal = './Photos/Projects/Current/Rosebush/01.jpg';
// --- Data for the artwork ---
const allArtwork = [
    // --- Current Projects ---
    {
        id: 1,
        title: 'Rose bush',
        year: '2024',
        imageUrl: './Photos/Projects/Current/Rosebush/01.jpg',
        category: 'Current',
        description: 'Description for Rose bush project.',
        // To add YouTube videos, uncomment the line below and replace the IDs
        // youtubeVideoIds: ['YOUTUBE_ID_1'],
        // To add local videos, uncomment the line below and add the file paths
        // localVideos: ['./Photos/Projects/Current/-video.mp4'],
        images: [
            newLocal,
            './Photos/Projects/Current/Rosebush/02.jpg',
            './Photos/Projects/Current/Rosebush/03.jpg',
            './Photos/Projects/Current/Rosebush/04.jpg',
            './Photos/Projects/Current/Rosebush/05.jpg',
            './Photos/Projects/Current/Rosebush/06.jpg',
            './Photos/Projects/Current/Rosebush/07.jpg',
            './Photos/Projects/Current/Rosebush/08.jpg',
            './Photos/Projects/Current/Rosebush/09.jpg',
            './Photos/Projects/Current/Rosebush/010.jpg',
            './Photos/Projects/Current/Rosebush/011.jpg',
            './Photos/Projects/Current/Rosebush/013.jpg',
            './Photos/Projects/Current/Rosebush/014.jpg',
            './Photos/Projects/Current/Rosebush/015.jpg',
            './Photos/Projects/Current/Rosebush/018.jpg',
            './Photos/Projects/Current/Rosebush/020.jpg',
        ]
    },
    {
        id: 2,
        title: 'Inside',
        year: '2024',
        imageUrl: './Photos/Projects/Current/Inside/01.jpg',
        category: 'Current',
        description: 'Description for Inside project.',
        // To add YouTube videos, uncomment the line below and replace the IDs
        // youtubeVideoIds: ['YOUTUBE_ID_1'],
        //localVideos: ['./Photos/Projects/Current/2-Inside/video.mp4']
        images: [
            './Photos/Projects/Current/Inside/01.jpg',
            './Photos/Projects/Current/Inside/02.jpg',
            './Photos/Projects/Current/Inside/03.jpg',
            './Photos/Projects/Current/Inside/04.jpg',
            './Photos/Projects/Current/Inside/05.jpg',
            './Photos/Projects/Current/Inside/06.jpg',
            './Photos/Projects/Current/Inside/07.jpg',
            './Photos/Projects/Current/Inside/08.jpg',
            './Photos/Projects/Current/Inside/09.jpg',
            './Photos/Projects/Current/Inside/010.jpg',
            './Photos/Projects/Current/Inside/011.jpg',
            './Photos/Projects/Current/Inside/012.jpg',
            './Photos/Projects/Current/Inside/013.jpg',
            './Photos/Projects/Current/Inside/014.jpg',
            './Photos/Projects/Current/Inside/015.jpg',
            './Photos/Projects/Current/Inside/016.jpg',
            './Photos/Projects/Current/Inside/017.jpg',
        ]
    },
    {
        id: 3,
        title: 'Layers',
        year: '2024',
        imageUrl: './Photos/Projects/Current/Leyers/01.jpg',
        category: 'Current',
        description: 'Description for Leyer-s project.',
        // To add YouTube videos, uncomment the line below and replace the IDs
        // youtubeVideoIds: ['YOUTUBE_ID_1'],
        // To add local videos, uncomment the line below and add the file paths
        // localVideos: ['./Photos/Projects/Current/3-Leyers/video.mp4'],
        images: [
            './Photos/Projects/Current/Leyers/01.jpg',
            './Photos/Projects/Current/Leyers/02.jpg',
            './Photos/Projects/Current/Leyers/03.jpg',
            './Photos/Projects/Current/Leyers/04.jpg',
            './Photos/Projects/Current/Leyers/05.jpg',
            './Photos/Projects/Current/Leyers/06.jpg',
            './Photos/Projects/Current/Leyers/07.jpg',
            './Photos/Projects/Current/Leyers/08.jpg',
            './Photos/Projects/Current/Leyers/09.jpg',
            './Photos/Projects/Current/Leyers/010.jpg',
            './Photos/Projects/Current/Leyers/011.jpg',
            './Photos/Projects/Current/Leyers/012.jpg',
            './Photos/Projects/Current/Leyers/013.jpg',
            './Photos/Projects/Current/Leyers/014.jpg',
            './Photos/Projects/Current/Leyers/015.jpg',
            './Photos/Projects/Current/Leyers/016.jpg',
            './Photos/Projects/Current/Leyers/017.jpg',
            './Photos/Projects/Current/Leyers/018.jpg',
        ]
    },
        {
        id: 6,
        title: 'Privacy',
        year: '2018',
        imageUrl: './Photos/Projects/Archive/Privacy/05.jpg',
        category: 'Archive',
        description: 'A study of personal space and boundaries in the modern world.',
        // To add YouTube videos, uncomment the line below and replace the IDs
        // youtubeVideoIds: ['YOUTUBE_ID_1'],
        // To add local videos, uncomment the line below and add the file paths
        // localVideos: ['./Photos/Projects/Archive/Privacy/video.mp4'],
        images: [
            './Photos/Projects/Archive/Privacy/01.jpg',
            './Photos/Projects/Archive/Privacy/02.jpg',
            './Photos/Projects/Archive/Privacy/03.jpg',
            './Photos/Projects/Archive/Privacy/04.jpg',
            './Photos/Projects/Archive/Privacy/05.jpg',
            './Photos/Projects/Archive/Privacy/06.jpg',
        ]
    },

    // --- Archive Projects ---
    {
        id: 4,
        title: 'Eating and Being eaten',
        year: '2018',
        imageUrl: './Photos/Projects/Archive/Eating/01.jpg',
        category: 'Archive',
        description: 'A project exploring themes of consumption and existence.',
        // To add YouTube videos, uncomment the line below and replace the IDs
        // youtubeVideoIds: ['YOUTUBE_ID_1'],
        // To add local videos, uncomment the line below and add the file paths
        // localVideos: ['./Photos/Projects/Archive/Eating/video.mp4'],
        images: [
            './Photos/Projects/Archive/Eating/01.jpg',
            './Photos/Projects/Archive/Eating/02.jpg',
            './Photos/Projects/Archive/Eating/03.jpg',
            './Photos/Projects/Archive/Eating/04.jpg',
            './Photos/Projects/Archive/Eating/05.jpg',
            './Photos/Projects/Archive/Eating/06.jpg',
            './Photos/Projects/Archive/Eating/07.jpg',
            './Photos/Projects/Archive/Eating/08.jpg',
            './Photos/Projects/Archive/Eating/09.jpg',
            './Photos/Projects/Archive/Eating/010.jpg',
            './Photos/Projects/Archive/Eating/011.jpg',
            './Photos/Projects/Archive/Eating/012.jpg',
            './Photos/Projects/Archive/Eating/013.jpg',
            './Photos/Projects/Archive/Eating/014.jpg',
            './Photos/Projects/Archive/Eating/015.jpg',
        ]
    },
    {
        id: 5,
        title: 'Encountering',
        year: '2020',
        imageUrl: './Photos/Projects/Archive/Flatland/01.jpg',
        category: 'Archive',
        description: 'An exploration of landscapes and perception.',
        // To add YouTube videos, uncomment the line below and replace the IDs
        // youtubeVideoIds: ['YOUTUBE_ID_1'],
        localVideos: ['./Photos/Projects/Archive/Flatland/vid1.mp4'],
        images: [
            './Photos/Projects/Archive/Flatland/01.jpg',
            './Photos/Projects/Archive/Flatland/02.jpg',
            './Photos/Projects/Archive/Flatland/03.jpg',
            './Photos/Projects/Archive/Flatland/04.jpg',
        ]
    },
];


// --- Reusable Components ---

// Header Component
const Header = ({ activePage, setActivePage, setFilter, setSelectedArtwork }) => {
    const navLinks = ['INDEX', 'STUDIO', 'TEXT', 'ABOUT'];
    const [openMenu, setOpenMenu] = useState(null);

    const handleNavClick = (page) => {
        setActivePage(page);
        setSelectedArtwork(null);
        if (page === 'INDEX') setFilter('all');
        if (page === 'ABOUT') setActivePage('BIOGRAPHY');
    };
    
    const handleFilterClick = (newFilter) => {
        setFilter(newFilter);
        setActivePage('INDEX');
        setSelectedArtwork(null);
        setOpenMenu(null);
    };

    const handleAboutSubmenuClick = (page) => {
        setActivePage(page);
        setSelectedArtwork(null);
        setOpenMenu(null);
    };

    // Dedicated function to handle returning to the homepage
    const handleHomeClick = () => {
        setActivePage('INDEX');
        setFilter('all');
        setSelectedArtwork(null);
    };

    return (
        <header className="p-6 md:p-8">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                {/* Font size increased here */}
                <h1 className="text-2xl md:text-3xl font-bold tracking-wider uppercase">
                    <a href="#" onClick={(e) => { e.preventDefault(); handleHomeClick(); }}>Maryam Keshmiri</a>
                </h1>
                <nav>
                    <ul className="flex space-x-6 md:space-x-8 text-sm md:text-base tracking-widest">
                        {navLinks.map(link => (
                             <li key={link} onMouseEnter={() => setOpenMenu(link)} onMouseLeave={() => setOpenMenu(null)} className="relative">
                                <a href="#" className={`nav-link py-2 hover:underline ${activePage === link || (link === 'ABOUT' && ['BIOGRAPHY', 'CONTACT'].includes(activePage)) ? 'underline' : ''}`} onClick={(e) => { e.preventDefault(); handleNavClick(link); }}>{link}</a>
                                {link === 'INDEX' && openMenu === 'INDEX' && (
                                    <div className="absolute left-0 top-full pt-2 w-48 z-10"><div className="bg-white shadow-lg rounded-md overflow-hidden">
                                        <a href="#" onClick={(e) => {e.preventDefault(); handleFilterClick('all');}} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">ALL</a>
                                        <a href="#" onClick={(e) => {e.preventDefault(); handleFilterClick('Current');}} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">CURRENT</a>
                                        <a href="#" onClick={(e) => {e.preventDefault(); handleFilterClick('Archive');}} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">ARCHIVE</a>
                                    </div></div>
                                )}
                                {link === 'ABOUT' && openMenu === 'ABOUT' && (
                                    <div className="absolute right-0 top-full pt-2 w-48 z-10"><div className="bg-white shadow-lg rounded-md overflow-hidden">
                                        <a href="#" onClick={(e) => {e.preventDefault(); handleAboutSubmenuClick('BIOGRAPHY');}} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">BIOGRAPHY</a>
                                        <a href="#" onClick={(e) => {e.preventDefault(); handleAboutSubmenuClick('CONTACT');}} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">CONTACT ME</a>
                                    </div></div>
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

// Gallery Item Component
const GalleryItem = ({ artwork, onSelect }) => (
    <div className="group cursor-pointer" onClick={() => onSelect(artwork)}>
        <div className="aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden">
            <img src={artwork.imageUrl} alt={artwork.title} className="w-full h-full object-cover object-center transition-opacity duration-300 group-hover:opacity-80" onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/600x400/f87171/fff?text=Image+Error'; }} />
        </div>
        <div className="mt-2 text-center">
            <p className="font-semibold uppercase text-xs tracking-wider">{artwork.title}</p>
            <p className="text-xs text-gray-500 uppercase">{artwork.category}</p>
        </div>
    </div>
);

// Gallery Component
const Gallery = ({ items, onSelectArtwork }) => (
    <main className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {items.map(item => <GalleryItem key={item.id} artwork={item} onSelect={onSelectArtwork} />)}
        </div>
    </main>
);

// YouTube Player Component with Lazy Loading
const YouTubePlayer = ({ videoId }) => {
    const [loadVideo, setLoadVideo] = useState(false);
    const videoThumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

    if (!loadVideo) {
        return (
            <div 
                className="relative aspect-w-16 aspect-h-9 mb-8 cursor-pointer group"
                onClick={() => setLoadVideo(true)}
            >
                <img src={videoThumbnailUrl} alt="Video thumbnail" className="w-full h-full object-cover rounded-lg shadow-lg" />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 transition-opacity duration-300 group-hover:bg-opacity-20">
                    <svg className="w-20 h-20 text-white opacity-80" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"></path>
                    </svg>
                </div>
            </div>
        );
    }

    return (
        <div className="aspect-w-16 aspect-h-9 mb-8">
            <iframe 
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                className="w-full h-full rounded-lg shadow-lg"
            ></iframe>
        </div>
    );
};

// Local Video Player Component
const LocalVideoPlayer = ({ videoSrc }) => {
    const getMimeType = (src) => {
        if (src.endsWith('.mp4')) return 'video/mp4';
        if (src.endsWith('.mov')) return 'video/quicktime';
        return 'video/mp4'; // Default fallback
    };

    return (
        <div className="aspect-w-16 aspect-h-9 mb-8">
            <video controls className="w-full h-full rounded-lg shadow-lg">
                <source src={videoSrc} type={getMimeType(videoSrc)} />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};


// Artwork Detail Component
const ArtworkDetail = ({ artwork, onBack, onImageSelect }) => (
    <main className="max-w-7xl mx-auto px-6 md:px-8">
        <button onClick={onBack} className="mb-8 text-sm hover:underline">&larr; Back to Index</button>
        <div className="text-center mb-8">
            <h2 className="text-3xl font-bold">{artwork.title}</h2>
            <p className="max-w-3xl mx-auto mt-2 text-gray-600">{artwork.description}</p>
        </div>
        
        {artwork.youtubeVideoIds && artwork.youtubeVideoIds.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                {artwork.youtubeVideoIds.map((videoId, index) => (
                    <YouTubePlayer key={`youtube-${index}`} videoId={videoId} />
                ))}
            </div>
        )}

        {artwork.localVideos && artwork.localVideos.length > 0 && (
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                {artwork.localVideos.map((videoSrc, index) => (
                    <LocalVideoPlayer key={`local-${index}`} videoSrc={videoSrc} />
                ))}
            </div>
        )}

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {artwork.images.map((imgSrc, index) => (
                <div key={index} className="cursor-pointer group aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden" onClick={() => onImageSelect(index)}>
                    <img src={imgSrc} alt={`${artwork.title} - image ${index + 1}`} className="w-full h-full object-cover object-center transition-opacity duration-300 group-hover:opacity-80" />
                </div>
            ))}
        </div>
    </main>
);

// Fullscreen Lightbox Component
const Lightbox = ({ images, startIndex, onClose }) => {
    const [currentIndex, setCurrentIndex] = useState(startIndex);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };
    
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowRight') handleNext();
            if (e.key === 'ArrowLeft') handlePrev();
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    return (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
            <button onClick={onClose} className="absolute top-4 right-4 text-white text-3xl font-bold">&times;</button>
            <button onClick={handlePrev} className="absolute left-4 text-white text-4xl font-bold">&#8249;</button>
            <img src={images[currentIndex]} alt="Fullscreen artwork" className="max-h-[90vh] max-w-[90vw] object-contain" />
            <button onClick={handleNext} className="absolute right-4 text-white text-4xl font-bold">&#8250;</button>
        </div>
    );
};

// Contact Page Component
const ContactPage = () => {
    return (
        <div className="max-w-7xl mx-auto px-6 md:px-8">
            <h2 className="text-2xl mb-8 text-center">Contact Me</h2>
            <div className="flex flex-col items-center text-center">
                <p className="text-gray-600 mb-8 max-w-md">
                    For inquiries, collaborations, or just to say hello, please feel free to reach out through email or social media.
                </p>
                <div className="flex flex-col items-center space-y-6">
                    <a href="mailto:Maryamkeshmiri10@gmail.com" title="Email" className="flex items-center space-x-4 text-gray-500 hover:text-black group">
                        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path></svg>
                        <span className="text-lg group-hover:underline">Maryamkeshmiri10@gmail.com</span>
                    </a>
                    <a href="https://www.instagram.com/kashmiri.maryam" target="_blank" rel="noopener noreferrer" title="Instagram" className="flex items-center space-x-4 text-gray-500 hover:text-black group">
                        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.069-4.85.069s-3.585-.011-4.85-.069c-3.252-.149-4.771-1.699-4.919-4.92-.058-1.265-.069-1.644-.069-4.849s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z"></path>
                        </svg>
                        <span className="text-lg group-hover:underline">@kashmiri.maryam</span>
                    </a>
                </div>
            </div>
        </div>
    );
};


// Footer Component
const Footer = () => (
    <footer className="text-center p-6 md:p-8 mt-8">
        <p className="text-xs text-gray-500">&copy; 2025 Maryam Keshmiri. All rights reserved.</p>
        <p className="text-xs text-gray-500 mt-1">Designed by Mohamad Keshmiri</p>
    </footer>
);

// --- Main App Component ---
export default function App() {
    const [activePage, setActivePage] = useState('INDEX');
    const [filter, setFilter] = useState('all');
    const [selectedArtwork, setSelectedArtwork] = useState(null);
    const [lightboxStartIndex, setLightboxStartIndex] = useState(null);
    const [studioLightboxIndex, setStudioLightboxIndex] = useState(null);

    const studioImages = ['./Photos/Studio/02.jpg', './Photos/Studio/04.jpg'];

    const filteredArtwork = useMemo(() => {
        if (filter === 'all') return allArtwork;
        return allArtwork.filter(item => item.category === filter);
    }, [filter]);

    const PageContent = ({ title, children }) => (
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-8"><h2 className="text-2xl mb-4 font-bold">{title}</h2><div>{children}</div></div>
    );
    
    const renderContent = () => {
        if (selectedArtwork) {
            return <ArtworkDetail artwork={selectedArtwork} onBack={() => setSelectedArtwork(null)} onImageSelect={setLightboxStartIndex} />;
        }
        
        switch(activePage) {
            case 'INDEX':
                return <Gallery items={filteredArtwork} onSelectArtwork={setSelectedArtwork} />;
            case 'STUDIO':
                return (
                    <PageContent title="The Studio">
                        <div className="flex flex-col md:flex-row gap-8 items-start">
                            <div className="md:w-1/2 grid grid-cols-2 gap-4">
                                <div className="aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden cursor-pointer" onClick={() => setStudioLightboxIndex(0)}>
                                    <img src="./Photos/Studio/02.jpg" alt="Studio view 1" className="w-full h-full object-cover object-center"/>
                                </div>
                                <div className="aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden cursor-pointer" onClick={() => setStudioLightboxIndex(1)}>
                                    <img src="./Photos/Studio/04.jpg" alt="Studio view 2" className="w-full h-full object-cover object-center"/>
                                </div>
                                {/* Placeholders for more images/videos */}
                                <div className="bg-gray-200 rounded-lg aspect-w-1 aspect-h-1"></div>
                                <div className="bg-gray-200 rounded-lg aspect-w-1 aspect-h-1"></div>
                            </div>
                            <div className="md:w-1/2">
                                <p className="text-gray-700 leading-relaxed">
                                    Description will be updated soon.
                                </p>
                            </div>
                        </div>
                    </PageContent>
                );
            case 'TEXT':
                return <PageContent title="Text"><p>This is the text page content.</p></PageContent>;
            case 'BIOGRAPHY':
                return (
                    <div className="max-w-7xl mx-auto px-6 md:px-8 py-8 text-center">
                        <h2 className="text-2xl mb-8 font-bold">Know About Me</h2>
                        <div className="flex justify-center">
                            <p className="text-lg text-gray-800 leading-relaxed max-w-3xl">
                                Maryam Keshmiri's practice engages the intricate relationships between sculpture, literature, and the construction of spatial experience. She utilizes forms, often derived from nature, as vessels to explore profound concepts such as intimacy, the complexities of perception, interaction, and the nuances of translation. Recent inquiries have focused on the inherent limitations of both tactile and visual perception. Currently, her work is deeply informed by experiences of displacement and cultural translation, where personal encounters with new geographies evoke memories and challenge established understandings. This ongoing negotiation between conveying personal meaning and shared understanding manifests as a compelling, constantly shifting space where reality and abstraction converge.
                            </p>
                        </div>
                    </div>
                );
            case 'CONTACT':
                return <ContactPage />;
            default:
                return <Gallery items={filteredArtwork} onSelectArtwork={setSelectedArtwork} />;
        }
    };

    const projectLightbox = lightboxStartIndex !== null && selectedArtwork ? (
        <Lightbox images={selectedArtwork.images} startIndex={lightboxStartIndex} onClose={() => setLightboxStartIndex(null)} />
    ) : null;

    const studioLightbox = studioLightboxIndex !== null ? (
        <Lightbox images={studioImages} startIndex={studioLightboxIndex} onClose={() => setStudioLightboxIndex(null)} />
    ) : null;

    return (
        <div className="bg-white text-black font-sans">
            <Header activePage={activePage} setActivePage={setActivePage} setFilter={setFilter} setSelectedArtwork={setSelectedArtwork} />
            {renderContent()}
            {projectLightbox}
            {studioLightbox}
            <Footer />
        </div>
    );
}
