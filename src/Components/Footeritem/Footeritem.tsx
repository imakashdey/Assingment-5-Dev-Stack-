import React from 'react';

const Footeritem = () => {
    return (
        
        <div className="flex gap-50">
            <div>
                <h4 className="text-sm font-semibold text-black mb-4">PRODUCT</h4>
                <ul className="flex flex-col gap-1">
                    <li>
                        <a href="#" className="text-sm text-[#64748B] hover:text-gray-900 hover:underline transition-colors">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-sm text-[#64748B] hover:text-gray-900 hover:underline transition-colors">
                            Technologies
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-sm text-[#64748B] hover:text-gray-900 hover:underline transition-colors">
                            Projects
                        </a>
                    </li>
                </ul>
            </div>

            <div>
                <h4 className="text-sm font-semibold text-black mb-4">COMPANY</h4>
                <ul className="flex flex-col gap-1">
                    <li>
                        <a href="#" className="text-sm text-[#64748B] hover:text-gray-900 hover:underline transition-colors">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-sm text-[#64748B] hover:text-gray-900 hover:underline transition-colors">
                            Contact
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-sm text-[#64748B] hover:text-gray-900 hover:underline transition-colors">
                            Careers
                        </a>
                    </li>
                </ul>
            </div>

            <div>
                <h4 className="text-sm font-semibold text-black mb-4">LEGAL</h4>
                <ul className="flex flex-col gap-1">
                    <li>
                        <a href="#" className="text-sm text-[#64748B] hover:text-gray-900 hover:underline transition-colors">
                            Privacy Policy
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-sm text-[#64748B] hover:text-gray-900 hover:underline transition-colors">
                            Terms of Service
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Footeritem;