import useWindowStore from '#store/window';
import {useGSAP} from '@gsap/react';
import gsap from 'gsap';
import {useLayoutEffect, useRef} from 'react';
import {Rnd} from 'react-rnd';
import {windowDefaults} from '#constants';

const WindowWrapper = (Component, windowKey) => {
    const Wrapped = (props) => {
        const {focusWindow, windows} = useWindowStore();
        const {isOpen, zIndex} = windows[windowKey];
        const ref = useRef(null); // ref for the inner section

        // Animation when window opens
        useGSAP(() => {
            const el = ref.current;
            if (!el || !isOpen) return;

            el.style.display = 'block';

            gsap.fromTo(
                el,
                {scale: 0.8, opacity: 0, y: 40},
                {scale: 1, opacity: 1, y: 0, duration: 0.2, ease: 'power3.out'},
            );
        }, [isOpen]);

        // Display control
        useLayoutEffect(() => {
            const el = ref.current;
            if (!el) return;
            el.style.display = isOpen ? 'block' : 'none';
        }, [isOpen]);

        if (!isOpen) return null;

        return (
            <Rnd id={windowKey} default={windowDefaults[windowKey] || {x: 100, y: 100, width: 600, height: 400}}
                 minWidth={300} minHeight={200} bounds="main" style={{zIndex}}
                 onDragStart={() => focusWindow(windowKey)}
                 onResizeStart={() => focusWindow(windowKey)}
            >
                <section ref={ref} className="w-full h-full">
                    <Component {...props} />
                </section>
            </Rnd>
        );
    };

    Wrapped.displayName = `WindowWrapper(${Component.displayName || Component.name || 'Component'})`;

    return Wrapped;
};

export default WindowWrapper;
