// resources/js/Components/Hero.jsx
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
    return (
        <section className="h-screen bg-gradient-to-r from-blue-600 to-purple-500 pt-20 text-white">
            <div className="container mx-auto px-6 py-32 text-center">
                <h2 className="mb-4 text-4xl font-bold md:text-6xl">
                    <Typewriter
                        words={[
                            'Welcome to My Portfolio',
                            'Discover My Work',
                            'Explore My Projects',
                        ]}
                        loop={true}
                        cursor
                        cursorStyle="_"
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                </h2>
                <p className="mt-4 text-lg">
                    <Typewriter
                        words={[
                            'Showcasing my best projects and creative works.',
                            'Innovative solutions for modern problems.',
                            'Passionate about creating impactful digital experiences.',
                        ]}
                        loop={true}
                        cursor
                        cursorStyle="|"
                        typeSpeed={50}
                        deleteSpeed={30}
                        delaySpeed={1500}
                    />
                </p>
                <a
                    href="#projects"
                    className="mt-6 inline-block rounded-lg bg-white px-6 py-3 font-bold text-blue-600 shadow-md hover:bg-gray-200"
                >
                    View Projects
                </a>
            </div>
        </section>
    );
};

export default Hero;
