import React from 'react';
import { WalletContext } from '@solana/wallet-adapter-react';
import "./main.styles.css";


const Main = () => {
    const value = React.useContext(WalletContext);
    return (
        <div className="main">
            <div className="main-body">
                <p>
                    {
                        value.connected ? `Connected to ${value.wallet.adapter.name}` : "Please connect your wallet"
                    }
                </p>
            </div>
        </div>
    )
};

export default Main;
