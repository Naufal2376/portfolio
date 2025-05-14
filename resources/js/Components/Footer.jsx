// resources/js/Components/Footer.jsx
const Footer = () => {
    return (
        <footer className="bg-gray-800 py-6 text-gray-200">
            <div className="container mx-auto text-center">
                <p>
                    &copy; {new Date().getFullYear()} My Portfolio. All rights
                    reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
