import React, { useRef, useState } from "react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import "./side-bar.styles.css";
import { ReactComponent as TokenIcon } from "../../assets/token.svg";
import { ReactComponent as JetIcon } from "../../assets/jet.svg";
import { ReactComponent as NFTIcon } from "../../assets/nft.svg";
import { ReactComponent as DocIcon } from "../../assets/doc.svg";
import { ReactComponent as TwitterIcon } from "../../assets/twitter.svg";
import { ReactComponent as TelegramIcon } from "../../assets/telegram.svg";
import { ReactComponent as BuiltOnIcon } from "../../assets/builtOn.svg";
import { ReactComponent as LogoIcon } from "../../assets/logo.svg";

const SideBar = () => {
    const [icon, toggleIcon] = useState(false);
    const hamburger = useRef(null);
    const sidebar = useRef(null);
    console.log(window.innerWidth)

    const handleDropdown = () => {
        const btn = hamburger.current;
        const nodes = [...sidebar?.current?.children];
        if (!icon) {
            btn.style = "background-color: transparent;";
            btn.animate({ rotate: ["0deg", "135deg"] }, { duration: 300, fill: "forwards", pseudoElement: "::after" });
            btn.animate({ top: "-5px", rotate: ["0deg", "-135deg"] }, { duration: 300, fill: "forwards", pseudoElement: "::before" });
            nodes.forEach(elem => {
                if (elem.className === "side-bar-footer") {
                    elem.style = "display: flex;"
                } else {
                    elem.style = "display: block;"
                }
            })
            toggleIcon(true);
        } else {
            btn.style = "background-color: black;";
            btn.animate({ rotate: ["135deg", "0deg"] }, { duration: 300, fill: "forwards", pseudoElement: "::after" });
            btn.animate({ top: "-10px", rotate: ["-135deg", "0deg"] }, { duration: 300, fill: "forwards", pseudoElement: "::before" });
            nodes.forEach(elem => {
                if (elem.className !== "side-bar-hamburger" && window.innerWidth <= 768) {
                    elem.style = "display: none;"
                }
            })
            toggleIcon(false);
        }
    }

    return (
        <div className="side-bar" ref={sidebar}>
            <div className="side-bar-hamburger">
                <span className="hamburger" ref={hamburger} onClick={handleDropdown}>&nbsp;</span>
            </div>
            <div className="side-bar-header">
                <LogoIcon />
            </div>
            <div className="side-bar-btn">
                <WalletMultiButton />
            </div>

            <div className="side-bar-body">
                <div className="side-bar-body-item active">
                    <TokenIcon />
                    <p>Token Management</p>
                </div>
                <div className="side-bar-body-item">
                    <JetIcon />
                    <p>Apply for IDO</p>
                </div>
                <div className="side-bar-body-item">
                    <NFTIcon />
                    <p>NFT</p>
                </div>
                <div className="side-bar-body-item">
                    <DocIcon />
                    <p>Documentation</p>
                </div>
            </div>

            <div className="side-bar-footer">
                <p style={{fontSize: "12px"}}>
                    Connect with us
                </p>
                <div className="footer-icons">
                    <div className="icon">
                        <TwitterIcon />
                    </div>
                    <div className="icon">
                        <TelegramIcon />
                    </div>
                </div>

                <div className="footer-copyright">
                    <BuiltOnIcon />
                    <p> &copy; Solminter 2021</p>
                </div>
            </div>
                
        </div>
    );
}   

export default SideBar;
