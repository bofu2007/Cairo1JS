"use server";

import Image from 'next/image';
import styles from './page.module.css';
import { Center } from '@chakra-ui/react';
import { ChakraProvider } from '@chakra-ui/react';
import ReactPlayer from 'react-player';

import starknetjsImg from "../../public/Images/bofu.png";
import { DisplayConnected } from './components/client/DisplayConnected';
import LowerBanner from './components/client/LowerBanner';

export default async function Page() {
    return (
        <ChakraProvider>
            <div>
                <p className={styles.bgText}>
                    NFT music
                </p>
                <Center>
                    <Image src={starknetjsImg} alt="starknet.js" width={150} />
                </Center>
                <p className={styles.bgText}>
                    Please connect to Sepolia Testnet network
                </p>
                <div>
                    <DisplayConnected />
                </div>
                <div style={{ marginTop: "2rem", textAlign: "center" }}>
                    <h3>Enjoy Music</h3>
                    {/* Music Player */}
                    <ReactPlayer
                        url="https://soundcloud.com/bofu-337905126/cheetah"
                        controls
                        width="100%"
                        height="50px"
                    />
                </div>
                <LowerBanner />
            </div>
        </ChakraProvider>
    );
}
