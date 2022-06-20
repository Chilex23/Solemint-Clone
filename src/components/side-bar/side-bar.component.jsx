import React from "react";
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
    return (
        <div className="side-bar">
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
