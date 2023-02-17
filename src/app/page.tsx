'use client';

import "./globals.css"
import Image from "next/image";
import ParticlesBackground from "@/components/particles";

export default function Home() {
    return (
        <div>
            <ParticlesBackground></ParticlesBackground>
            <div>
                <div className="center" style={{
                    marginTop: "150px"
                }}>
                    <Image
                        src="/avatar.jpg"
                        alt=""
                        width="250"
                        height="250"
                        className="avatar"
                    ></Image>
                </div>
                <div className="container">
                    <h1>Welcome.</h1>
                    <p>I&apos;m <span style={{
                        color: "rgb(45,255,196)"
                    }}>Gerard Sayson</span>, a computer scientist and aspiring mathematician.</p>
                    <br/>
                </div>
            </div>
        </div>
  )
}