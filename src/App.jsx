/**
 * @copyright 2024 subbareddyk
 * @license Apache-2.0
 */

/**
 * Components
 */

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skill from "./components/Skill";

const App = () => {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <About />
                <Skill />
            </main>
        </>
    );
};

export default App;
