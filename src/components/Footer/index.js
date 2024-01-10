import React from "react";
import "./style.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import SendIcon from "@mui/icons-material/Send";
import { RWebShare } from "react-web-share";

function Footer() {
  return (
    <div className="footer">
      <a href="/">
        <h2 style={{ color: "#fff" }}>CryptoTracker.</h2>
      </a>

      <div className="socials-flex">
        <a href="/">
          <FacebookIcon className="socials-icon" />
        </a>
        <a href="/">
          <InstagramIcon className="socials-icon" />
        </a>
        <a href="mailto:ramkrishnaroy624@gmail.com">
          <EmailIcon className="socials-icon" />
        </a>
        <RWebShare
          data={{
            text: "Crypto Dashboard made using React JS in 2023",
            url: "https://resonant-sopapillas-af5a07.netlify.app/",
            title: "Crypto Dashboard",
          }}
          onClick={() => console.log("shared successfully!")}
        >
          <SendIcon className="socials-icon" />
        </RWebShare>
      </div>
    </div>
  );
}

export default Footer;