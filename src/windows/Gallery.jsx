import { useState } from 'react';
import WindowControls from '#components/WindowControls';
import { photosLinks, dockApps } from '#constants/index';
import WindowWrapper from '#hoc/WindowWrapper';
import useWindowStore from '#store/window';
import { Trash2 } from 'lucide-react';
import clsx from 'clsx';

const Gallery = () => {
    const { openWindow, galleryData, moveToTrash } = useWindowStore();
    const [activeTab, setActiveTab] = useState(1);

    // Filter photos by active tab
    const filteredPhotos = galleryData.filter((item) => {
        if (activeTab === 1) return true;
        return item.category === activeTab;
    });

    return (
        <>
            {/* Header */}
            <div id="window-header">
                <WindowControls target="photos" />
                <h2>{dockApps[2].name}</h2>
            </div>

            {/* Main layout: sidebar + gallery side by side */}
            <div id="photos">
                {/* Sidebar */}
                <div className="sidebar">
                    <h2>PHOTOS</h2>
                    <ul>
                        {photosLinks.map((link) => (
                            <li
                                key={link.id}
                                onClick={() => setActiveTab(link.id)}
                                className={clsx(
                                    activeTab === link.id
                                        ? '!bg-blue-100 !text-blue-700'
                                        : '!bg-transparent !text-gray-700'
                                )}
                            >
                                <img src={link.icon} alt={link.title} />
                                <p>{link.title}</p>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Gallery Content */}
                <div className="gallery">
                    <ul key={activeTab}>
                        {filteredPhotos.map((item) => (
                            <li
                                key={item.id}
                                className="cursor-pointer group relative"
                                onClick={() =>
                                    openWindow('imgfile', {
                                        name: `Photo ${item.id}`,
                                        imageUrl: item.img,
                                    })
                                }
                            >
                                <img src={item.img} alt={`Photo ${item.id}`} />

                                {/* Delete Button */}
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        moveToTrash(item);
                                    }}
                                    className="absolute top-2 right-2 p-1.5 bg-white/80 backdrop-blur rounded-full text-red-500 opacity-0 group-hover:opacity-100 transition-opacity shadow-sm hover:bg-white"
                                    title="Move to Trash"
                                >
                                    <Trash2 size={14} />
                                </button>
                            </li>
                        ))}
                    </ul>

                    {filteredPhotos.length === 0 && (
                        <div className="flex-center h-full text-gray-400">
                            No photos found in this category.
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

const GalleryWindow = WindowWrapper(Gallery, 'photos');
export default GalleryWindow;
