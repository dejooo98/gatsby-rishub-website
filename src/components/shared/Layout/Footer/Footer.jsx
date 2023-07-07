import React from "react"
import {
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineHome,
  AiOutlineClockCircle,
} from "react-icons/ai"
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa"

import "../../../../styles/main.scss"
import logo from "../../../../assets/images/rishub-logo.png"

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <>
      <footer className="footer">
        <div className="footer-column">
          <img src={logo} alt="Logo" className="footer-logo" />
          <p>
            Regionalni inovacioni startup centar u Užicu osnovan je sa ciljem
            sistemske podrške inovacijama.
          </p>
        </div>
        <div className="footer-column">
          <h3>Contact</h3>
          <ul className="contact-list">
            <li>
              <AiOutlineMail className="contact-icon" />
              <a href="mailto:office@rrazlatibor.rs">office@rrazlatibor.rs</a>
            </li>
            <li>
              <AiOutlinePhone className="contact-icon" />
              <a href="tel:+38131523065">+381 31 52 30 65</a>
            </li>
            <li>
              <AiOutlineHome className="contact-icon" />
              <span>Norveških interniraca 1v, Užice 31000, Србија</span>
            </li>
            <li>
              <AiOutlineClockCircle className="contact-icon" />
              <span>Radno vreme: Ponedeljak - Petak 08h - 16h</span>
            </li>
          </ul>
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a
              href="https://www.instagram.com/rishubue/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="social-icon instagram" />
            </a>
            <a
              href="https://www.facebook.com/rishubue/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="social-icon facebook" />
            </a>
            <a
              href="https://www.youtube.com/channel/UCuwTCTFX2QZvThzvNQELzAg/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube className="social-icon youtube" />
            </a>
          </div>
        </div>
        <div className="footer-column">
          <h3>Navigation</h3>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/services">Services</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Privacy</h3>
          <ul>
            <li>
              <a href="/privacy-policy">Privacy Policy</a>
            </li>
            <li>
              <a href="/terms-of-service">Terms of Service</a>
            </li>
            <li>
              <a href="/cookie-policy">Cookie Policy</a>
            </li>
            <li>
              <a href="/disclaimer">Disclaimer</a>
            </li>
          </ul>
        </div>
      </footer>
      <div className="footer-copyright">
        &copy; {currentYear} Your Company. All rights reserved.
      </div>
    </>
  )
}
