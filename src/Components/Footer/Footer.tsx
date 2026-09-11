import React from 'react';

import Footeritem from '../Footeritem/Footeritem';
import FooterLeft from '../FooterLeft/FooterLeft';

const Footer = () => {
    return (
        <footer>
             <div className="divider"></div>
            <div className="container mx-auto py-10">
                <div className="flex gap-32 items-center">
                    <FooterLeft />
                    <div>
                    <Footeritem />
                    </div>
                </div>

                <div className="border-t border-gray-200 mt-10 pt-6 flex justify-between items-center">
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