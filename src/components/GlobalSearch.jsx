import { useState, useEffect, useRef } from 'react';
import { Search as SearchIcon } from 'lucide-react';
import useWindowStore from '#store/window';
import { searchItems } from '#constants/index'; // Dedicated data set import karein

const GlobalSearch = () => {
    const { isSearchOpen, setSearch, openWindow } = useWindowStore();
    const [query, setQuery] = useState('');
    const [selectedIndex, setSelectedIndex] = useState(0);
    const inputRef = useRef(null);

    useEffect(() => {
        if (isSearchOpen) {
            inputRef.current?.focus();
            setQuery('');
            setSelectedIndex(0);
        }
    }, [isSearchOpen]);

    if (!isSearchOpen) return null;

    // Filter logic using dedicated searchItems
    const filteredResults = searchItems.filter(item => {
        const searchTerm = query.toLowerCase().trim();
        if (!searchTerm) return false;

        // Priority 1: Name starts with search term
        const nameMatch = item.name.toLowerCase().startsWith(searchTerm);

        // Priority 2: ID starts with search term (e.g., searching 'terminal' for 'Skills')
        const idMatch = item.id.toLowerCase().startsWith(searchTerm);

        return nameMatch || idMatch;
    }).slice(0, 6);

    const handleKeyDown = (e) => {
        if (e.key === 'ArrowDown') {
            setSelectedIndex(prev => (prev < filteredResults.length - 1 ? prev + 1 : prev));
        } else if (e.key === 'ArrowUp') {
            setSelectedIndex(prev => (prev > 0 ? prev - 1 : prev));
        } else if (e.key === 'Enter' && filteredResults[selectedIndex]) {
            openWindow(filteredResults[selectedIndex].type);
            setSearch(false);
        } else if (e.key === 'Escape') {
            setSearch(false);
        }
    };

    return (
        <div
            className="fixed inset-0 z-[1000] flex items-start justify-center pt-[15vh] bg-black/20 backdrop-blur-[2px]"
            onClick={() => setSearch(false)}
        >
            <div
                className="w-[550px] bg-white/80 backdrop-blur-2xl border border-white/40 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex items-center p-4 gap-4">
                    <SearchIcon size={24} className="text-gray-500" />
                    <input
                        ref={inputRef}
                        type="text"
                        placeholder="Spotlight Search"
                        className="bg-transparent border-none outline-none w-full text-2xl text-gray-800 placeholder:text-gray-400 font-light"
                        value={query}
                        onChange={(e) => {
                            setQuery(e.target.value);
                            setSelectedIndex(0);
                        }}
                        onKeyDown={handleKeyDown}
                    />
                </div>

                {query && (
                    <div className="p-2 border-t border-gray-200/50">
                        {filteredResults.length > 0 ? (
                            filteredResults.map((item, index) => (
                                <div
                                    key={item.id}
                                    className={`flex items-center gap-4 p-2 rounded-lg cursor-pointer transition-all group ${
                                        selectedIndex === index ? 'bg-blue-600 text-white' : 'hover:bg-gray-100/50'
                                    }`}
                                    onClick={() => {
                                        openWindow(item.type);
                                        setSearch(false);
                                    }}
                                >
                                    {/* Dedicated Icon Rendering */}
                                    <div className={`size-10 rounded-lg flex items-center justify-center overflow-hidden shadow-sm ${
                                        selectedIndex === index ? 'bg-white/20' : 'bg-gray-100/50'
                                    }`}>
                                        <img
                                            src={item.icon}
                                            alt={item.name}
                                            className="w-full h-full object-contain p-1.5"
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-sm font-medium">{item.name}</p>
                                        {/* Match Badge for clarity */}
                                        {item.id.toLowerCase().startsWith(query.toLowerCase()) && item.name !== item.id && (
                                            <p className={`text-[10px] ${selectedIndex === index ? 'text-white/70' : 'text-gray-400'}`}>
                                                Found via: {item.id}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className="text-center py-6 text-gray-400 text-sm italic">No results found</p>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default GlobalSearch;