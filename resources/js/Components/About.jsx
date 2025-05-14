// resources/js/Components/About.jsx
const About = () => {
    return (
        <section id="about" className="bg-gradient-to-b from-gray-100 to-blue-50 py-20">
            <div className="container mx-auto px-6 text-center">
                <div className="relative mx-auto mb-6 inline-block">
                    <img
                        src="/images/profile.png"
                        alt="Profile"
                        className="h-40 w-40 transform rounded-full border-4 border-blue-600 shadow-lg transition duration-300 ease-in-out hover:scale-105"
                    />
                </div>
                <h3 className="mb-4 text-4xl font-extrabold tracking-tight text-blue-700">
                    M. Naufal Rafif Pratama
                </h3>
                <div className="mb-6 grid grid-cols-1 gap-2 text-lg font-medium text-gray-600 md:grid-cols-2 lg:grid-cols-3">
                    <p><strong>NIM:</strong> 09031282429112</p>
                    <p><strong>Program Studi:</strong> Sistem Informasi 24</p>
                    <p><strong>Kelas:</strong> SI Reguler 2A</p>
                    <p><strong>Fakultas:</strong> Ilmu Komputer</p>
                    <p><strong>Universitas:</strong> Sriwijaya</p>
                    <p><strong>Alamat:</strong> Gang Lampung 2</p>
                    <p><strong>No HP:</strong> 083146867066</p>
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
    );
};

export default About;
