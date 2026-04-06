import React from 'react';
import Dock from '../Components/Footer/DockItem';
import { CiFacebook } from "react-icons/ci";
import { SiInstagram } from "react-icons/si";
import { RiLinkedinBoxLine } from "react-icons/ri";
import { FaGithubSquare } from "react-icons/fa";

const items = [
    { icon: <CiFacebook size={18} />, label: 'Facebook' },
    { icon: <SiInstagram size={18} />, label: 'Instagram' },
    { icon: <RiLinkedinBoxLine size={18} />, label: 'LinkedIn' },
    { icon: <FaGithubSquare size={18} />, label: 'Github' },
];

const Footer = () => {
    return (
        <footer className="bottom-0 left-0 w-full h-24  px-10 bg-transparent">
            <div className="relative flex h-full items-center justify-between gradient-top-border">
                <div className="text-white text-xl font-semibold">
                    @SamirAnsari
                </div>
                <div className="absolute left-1/2 -translate-x-1/2">
                    <Dock
                        items={items}
                        panelHeight={68}
                        baseItemSize={50}
                        magnification={70}
                    />
                </div>
                <div className="text-sm text-neutral-400">
                    © {new Date().getFullYear()} Samir Ansari
                </div>
            </div>
        </footer>
    );
};

export default Footer;
