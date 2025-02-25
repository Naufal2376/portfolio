import { FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const LandingPage = ({ projects }) => {
    console.log(projects);
    return (
        <div className="min-h-screen bg-gray-50 text-gray-800">
            {/* Header */}
            <header className="fixed left-0 top-0 z-50 w-full bg-white shadow-lg">
                <div className="container mx-auto flex items-center justify-between px-6 py-4">
                    <h1 className="text-2xl font-bold text-blue-600">
                        My Portfolio
                    </h1>
                    <nav>
                        <ul className="flex space-x-6">
                            <li>
                                <a
                                    href="#about"
                                    className="hover:text-blue-600"
                                >
                                    About
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#projects"
                                    className="hover:text-blue-600"
                                >
                                    Projects
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#contact"
                                    className="hover:text-blue-600"
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>

            {/* Hero Section */}
            <section className="bg-gradient-to-r from-blue-600 to-purple-500 pt-20 text-white">
                <div className="container mx-auto px-6 py-20 text-center">
                    <h2 className="text-4xl font-bold md:text-6xl">
                        Welcome to My Portfolio
                    </h2>
                    <p className="mt-4 text-lg">
                        Showcasing my best projects and creative works.
                    </p>
                    <a
                        href="#projects"
                        className="mt-6 inline-block rounded-lg bg-white px-6 py-3 font-bold text-blue-600 shadow-md hover:bg-gray-200"
                    >
                        View Projects
                    </a>
                </div>
            </section>

            {/* About Section */}
            <section
                id="about"
                className="bg-gradient-to-b from-gray-100 to-blue-50 py-20"
            >
                <div className="container mx-auto px-6 text-center">
                    <div className="relative mx-auto mb-6 inline-block">
                        <img
                            src="images/profile.png"
                            alt="Profile"
                            className="h-40 w-40 transform rounded-full border-4 border-blue-600 shadow-lg transition duration-300 ease-in-out hover:scale-105"
                        />
                    </div>
                    <h3 className="mb-4 text-4xl font-extrabold tracking-tight text-blue-700">
                        M. Naufal Rafif Pratama
                    </h3>
                    <div className="mb-6 text-lg font-medium text-gray-600">
                        <p>
                            <strong>NIM:</strong> 09031282429112
                        </p>
                        <p>
                            <strong>Program Studi:</strong> Sistem Informasi 24
                        </p>
                        <p>
                            <strong>Kelas:</strong> SI Reguler 2A
                        </p>
                        <p>
                            <strong>Fakultas:</strong> Ilmu Komputer
                        </p>
                        <p>
                            <strong>Universitas:</strong> Sriwijaya
                        </p>
                        <p>
                            <strong>Alamat:</strong> Gang Lampung 2
                        </p>
                        <p>
                            <strong>No HP:</strong> 083146867066
                        </p>
                    </div>
                    <p className="text-lg leading-relaxed text-gray-700">
                        Sebagai mahasiswa Sistem Informasi di Fakultas Ilmu
                        Komputer Universitas Sriwijaya, saya memiliki passion
                        besar dalam teknologi dan pengembangan web. Dengan
                        semangat untuk terus belajar dan berinovasi, saya
                        bercita-cita menciptakan solusi digital yang relevan dan
                        bermanfaat.
                    </p>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="py-20">
                <div className="container mx-auto px-6">
                    <h3 className="mb-12 text-center text-3xl font-bold text-blue-600">
                        My Projects
                    </h3>
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {projects.map((project) => (
                            <div
                                key={project.id}
                                className="overflow-hidden rounded-lg bg-white shadow-lg transition-shadow duration-300 hover:shadow-2xl"
                            >
                                <img
                                    src={`storage/${project.image}`}
                                    alt={project.title}
                                    className="h-48 w-full object-cover"
                                />
                                <div className="p-6">
                                    <h4 className="text-lg font-bold text-gray-800">
                                        {project.title}
                                    </h4>
                                    <p className="mt-2 text-gray-600">
                                        {project.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section
                id="contact"
                className="bg-gradient-to-r from-purple-500 to-blue-600 py-20 text-white"
            >
                <div className="container mx-auto px-6 text-center">
                    <h3 className="mb-6 text-4xl font-bold">Contact Me</h3>
                    <p className="mb-8 text-lg">
                        Jika Anda memiliki ide proyek, peluang kolaborasi, atau
                        hanya ingin terhubung, jangan ragu untuk menghubungi
                        saya melalui salah satu kontak di bawah ini!
                    </p>
                    <div className="flex justify-center space-x-8">
                        {/* GitHub */}
                        <a
                            href="https://github.com/naufal2376"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-4xl text-white hover:text-gray-200"
                        >
                            <FaGithub />
                        </a>
                        {/* LinkedIn */}
                        <a
                            href="https://www.linkedin.com/in/m-naufal-rafif-pratama-252aa72a0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-4xl text-white hover:text-gray-200"
                        >
                            <FaLinkedin />
                        </a>
                        {/* Email */}
                        <a
                            href="mailto:naufalbhurr@gmail.com"
                            className="text-4xl text-white hover:text-gray-200"
                        >
                            <FaEnvelope />
                        </a>
                        {/* Phone */}
                        <a
                            href="https://wa.me/+6283146867066"
                            className="text-4xl text-white hover:text-gray-200"
                        >
                            <FaWhatsapp />
                        </a>
                    </div>
                    <p className="mt-6 text-lg">
                        Atau hubungi saya langsung melalui nomor telepon:{' '}
                        <span className="font-bold">+62 831-4686-7066</span>
                    </p>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-800 py-6 text-gray-200">
                <div className="container mx-auto text-center">
                    <p>
                        &copy; {new Date().getFullYear()} My Portfolio. All
                        rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;
