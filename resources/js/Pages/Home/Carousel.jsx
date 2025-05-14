// resources/js/Components/Carousel.jsx
import { useEffect, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const carouselImages = [
        '/images/goku.jpg',
        '/images/madara.jpg',
        '/images/piece.jpg',
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) =>
            prev === carouselImages.length - 1 ? 0 : prev + 1,
        );
    };

    const prevSlide = () => {
        setCurrentSlide((prev) =>
            prev === 0 ? carouselImages.length - 1 : prev - 1,
        );
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000);

        return () => clearInterval(interval);
    }, [carouselImages.length]);

    return (
        <section className="relative h-screen w-full overflow-hidden">
            {/* Slides Container */}
            <div
                className="flex h-full transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
                {carouselImages.map((image, index) => (
                    <div
                        key={index}
                        className="relative h-full w-full flex-shrink-0"
                    >
                        <img
                            src={image}
                            alt={`Carousel ${index + 1}`}
                            className="h-full w-full object-cover"
                        />
                    </div>
                ))}
            </div>

            {/* Navigation Arrows */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/30 p-3 text-white transition-all hover:bg-black/50"
                aria-label="Previous slide"
            >
                <FaChevronLeft size={24} />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/30 p-3 text-white transition-all hover:bg-black/50"
                aria-label="Next slide"
            >
                <FaChevronRight size={24} />
            </button>

            {/* Navigation Dots */}
            <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-2">
                {carouselImages.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`h-3 w-3 rounded-full transition-all ${currentSlide === index ? 'w-6 bg-white' : 'bg-white/50'}`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
};

export default Carousel;
