// resources/js/Components/Projects.jsx
import { motion } from 'framer-motion';

const Projects = ({ projects }) => {
    return (
        <section id="projects" className="py-20">
            <div className="container mx-auto px-6">
                <h3 className="mb-12 text-center text-3xl font-bold text-blue-600">
                    My Projects
                </h3>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-100px' }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.1,
                                ease: 'easeOut',
                            }}
                            className="overflow-hidden rounded-lg bg-white shadow-lg transition-shadow duration-300 hover:shadow-2xl"
                        >
                            <img
                                src={`/storage/${project.image}`}
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
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
