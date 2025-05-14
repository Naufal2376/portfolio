import Layout from '../Components/Layout';
import ProjectContent from '../Components/Projects';

const ProjectsPage = ({ projects }) => {
    return (
        <Layout>
            <ProjectContent projects={projects} />
        </Layout>
    );
};

export default ProjectsPage;
