import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen bg-gray-50 text-gray-800">
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
