
import Footeritem from '../Footeritem/Footeritem';
import FooterLeft from '../FooterLeft/FooterLeft';

const Footer = () => {
    return (
        <footer>
            <div className="divider"></div>
            <div className="container mx-auto px-4 py-10">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-32 items-start">
                    <FooterLeft />
                    <div>
                        <Footeritem />
                    </div>
                </div>

                <div className="border-t border-gray-200 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-gray-400">
                        © 2026 Dev Stack. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-sm text-gray-400">
                        <a href="#" className="hover:text-gray-700 transition-colors">
                            Privacy
                        </a>
                        <a href="#" className="hover:text-gray-700 transition-colors">
                            Terms
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
