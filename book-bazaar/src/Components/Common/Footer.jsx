import { FaFacebookF, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-blue-100 text-blue-600">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Logo + Apps */}
        <div>
          <img src={logo} alt="Logo" className="h-20" />
        </div>

        {/* Shop */}
        <div>
          <h4 className="font-semibold mb-3">Shop</h4>
          <ul className="space-y-2 text-sm">
            <li>Bookstores</li>
            <li>Collections</li>
            <li>Categories</li>
            <li>Authors</li>
            <li>Shelves</li>
            <li>Series</li>
            <li>Gift cards</li>
          </ul>
        </div>

        {/* Sell & Explore */}
        <div>
          <h4 className="font-semibold mb-3">Sell & Explore</h4>
          <ul className="space-y-2 text-sm">
            <li>Sellers Resource Hub</li>
            <li>Market Guide</li>
            <li>Recent Listings Feed</li>
            <li>Pricing Hub</li>
          </ul>
        </div>

        {/* Company & Help */}
        <div className="grid grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold mb-3">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>About Us</li>
              <li>Trust and Safety</li>
              <li>Blog</li>
              <li>Ambassador</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Help</h4>
            <ul className="space-y-2 text-sm">
              <li>Help Center</li>
              <li>Contact Us</li>
              <li>PangoBucks FAQ</li>
              <li>Feature Requests</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-black mx-10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>© BookBazaar 2025. All rights reserved.</p>
          <div className="flex space-x-6 mt-3 md:mt-0">
            <a href="#">Terms and Conditions</a>
            <a href="#">Privacy Policy</a>
          </div>
          <div className="flex space-x-4 mt-3 md:mt-0 text-lg">
            <FaFacebookF />
            <FaXTwitter />
            <FaInstagram />
            <FaYoutube />
            <FaTiktok />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
