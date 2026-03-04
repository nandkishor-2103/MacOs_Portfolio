import WindowControls from '#components/WindowControls';
import WindowWrapper from '#hoc/WindowWrapper';
import useWindowStore from '#store/window';
import {dockApps} from '#constants/index';
import { Trash2, RotateCcw, AlertCircle } from 'lucide-react';
import clsx from 'clsx';

const Trash = () => {
    const { trash, restoreFromTrash, emptyTrash } = useWindowStore();

    const handleImageClick = (item) => {
        alert(`Please restore "Photo to view it in full size.`);
    };

    return (
        /* Width ko 5xl set kiya hai taaki window screenshots se badi dikhe */
        <div className="flex flex-col h-127.5 w-192.5 max-w-5xl bg-white rounded-xl overflow-hidden shadow-2xl border border-gray-200">

            {/* Header: Centered title without overlapping traffic lights */}
            <div id='window-header' className="flex items-center justify-between px-6 py-4 bg-gray-50 border-b border-gray-200 shrink-0">
                <div className="flex items-center gap-4">
                    <WindowControls target='trash' />
                </div>

                <h2 className="text-sm font-bold text-gray-500 uppercase tracking-widest">
                    {dockApps[5].name}
                </h2>

                <div className="w-24 flex justify-end">
                    {trash.length > 0 && (
                        <button
                            onClick={emptyTrash}
                            className='text-[10px] bg-red-50 text-red-600 px-3 py-1.5 rounded-full border border-red-200 hover:bg-red-100 transition-all font-bold uppercase tracking-tighter'
                        >
                            Empty Trash
                        </button>
                    )}
                </div>
            </div>

            {/* Content Area: Large Bento Grid with Scrolling */}
            <div className="flex-1 overflow-y-auto p-6 custom-scrollbar bg-white">
                {trash.length === 0 ? (
                    <div className="flex flex-col items-center justify-center h-full text-gray-300 gap-4 opacity-40">
                        <Trash2 size={80} strokeWidth={1} />
                        <p className="text-lg font-medium">Trash is empty</p>
                    </div>
                ) : (
                    /* 6 column grid taaki bada space use ho sake */
                    <ul className="grid grid-cols-6 gap-4 auto-rows-[120px]">
                        {trash.map((item, index) => (
                            <li
                                key={item.id}
                                className={clsx(
                                    "relative group cursor-pointer overflow-hidden rounded-xl border border-gray-100 shadow-sm transition-all duration-500",
                                    // Gallery-style Bento logic
                                    index % 10 === 0 ? "col-span-3 row-span-3" :
                                        index % 10 === 3 ? "col-span-2 row-span-2" :
                                            index % 10 === 7 ? "col-span-3 row-span-2" : "col-span-1 row-span-1"
                                )}
                                onClick={() => handleImageClick(item)}
                            >
                                <img
                                    src={item.img}
                                    className="size-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110"
                                    alt={`Deleted ${item.id}`}
                                />

                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            restoreFromTrash(item);
                                        }}
                                        className="bg-white px-4 py-2 rounded-full text-blue-600 shadow-2xl hover:scale-110 active:scale-95 transition-transform flex items-center gap-2 font-bold text-[11px] uppercase"
                                    >
                                        <RotateCcw size={16} />
                                        <span>Restore</span>
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            {/* Large Footer Status */}
            <div className="px-6 py-3 bg-gray-50 border-t border-gray-100 flex justify-between items-center shrink-0">
                <p className="text-[11px] text-gray-400 font-bold uppercase flex items-center gap-2">
                    <AlertCircle size={14} className="text-gray-400" />
                    {trash.length} {trash.length === 1 ? 'item' : 'items'} waiting to be restored
                </p>
                <p className="text-[10px] text-gray-300 font-medium italic">
                    Media Storage Archive
                </p>
            </div>
        </div>
    );
};

const TrashWindow = WindowWrapper(Trash, 'trash');
export default TrashWindow;