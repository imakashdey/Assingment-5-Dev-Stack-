import React from 'react';
import footerLogo from "../../assets/logo-text.png";

const FooterLeft = () => {
    return (
        <div>
            <img src={footerLogo} alt="footerLogo" />

            <p className="text-[#64748B] font-normal text-[13px] py-5">
                Curated tools, technologies, and resources for developers building
                <br />
                modern software.
            </p>

            <div className="flex gap-6 font-semibold text-sm text-black">

                <a
                    href="https://github.com/iamakashdey"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-900 hover:underline transition-colors"
                >
                    GitHub
                </a>

                <a
                    href="https://twitter.com/iamakashdey"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-900 hover:underline transition-colors"
                >
                    Twitter
                </a>

                <a
                    href="https://linkedin.com/in/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-900 hover:underline transition-colors"
                >
                    LinkedIn
                </a>

            </div>
        </div>
    );
};

export default FooterLeft;