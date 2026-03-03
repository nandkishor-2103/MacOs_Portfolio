import gsap from 'gsap';
import {Draggable} from 'gsap/all';
import {Navbar, Welcome, Dock, Home, GlobalSearch} from '#components';
import {
    Terminal,
    Safari,
    Resume,
    Finder,
    Text,
    Image,
    Contact,
    Gallery,
    Trash,
} from '#windows';

gsap.registerPlugin(Draggable);

const App = () => {
    return (
        <main>
            <Navbar/>
            <GlobalSearch/>
            <Welcome/>
            <Dock/>

            <Terminal/>
            <Safari/>
            <Resume/>
            <Finder/>
            <Text/>
            <Image/>
            <Contact/>
            <Gallery/>
            <Trash/>
            <Home/>
        </main>
    );
};

export default App;
