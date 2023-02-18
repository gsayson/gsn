'use client';

import "./globals.css"
import Image from "next/image";
import ParticlesBackground from "@/components/particles";
import { IoLogoGithub, IoLogoDiscord } from "react-icons/io5"

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
                    }}>Gerard Sayson</span>, a computer scientist and aspiring mathematician based in <span style={{
                        color: "rgb(45,255,196)"
                    }}>Singapore</span>. People call me by a lot of names online, namely <span style={{
                            color: "rgb(45,255,196)"
                        }}>Big Rat</span> and <span style={{
                            color: "rgb(45,255,196)"
                        }}>Rin</span>.</p>
                    <br/>
                    <p>Currently, I&apos;m <em>very</em> interested in compiler design.</p>
                    <br/><br/>
                    <div className="center" style={{
                        flexDirection: "row",
                        width: "100%"
                    }}>
                        <button onClick={
                            () => {
                                window.location.assign("https://github.com/gsayson")
                            }
                        }><IoLogoGithub/>&nbsp;My GitHub</button>
                        <button><IoLogoDiscord/>&nbsp;My Discord</button>
                    </div>
                    <br/>
                </div>
            </div>
        </div>
  )
}