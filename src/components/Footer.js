import { useState } from "react"
import "../style/Footer.css"
import { FaBeer } from 'react-icons/fa';
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

export default function Footer() {
  const [isNavExpanded, setIsNavExpanded] = useState(false)
  const toggle = () => setIsNavExpanded(!isNavExpanded);

  return (
    <>
        <div className="footer">
            Karishma Reddy Khan<br />
            <a href="https://github.com/kreddykhan/the-ring" target="_blank"> <FaGithub /> github.com/kreddykhan</a><br />
            <a href="https://twitter.com/kreddykhan" target="_blank"> <FaTwitter /> twitter.com/kreddykhan</a><br />
        </div> 
    </>
  );
}