'use client';

import "./globals.css"
import Image from "next/image";
import ParticlesBackground from "@/components/particles";
import { IoLogoGithub } from "react-icons/io5"
import Navbar from "@/components/navbar";
import { FaDiscord } from "react-icons/fa";

export default function Home() {
    return (
        <div>
            <br/>
            <div className="center">
                <Navbar/>
            </div>
            <br/>
            <ParticlesBackground></ParticlesBackground>
            <div>
                <div className="center" style={{
                    marginTop: "25px"
                }}>
                    <Image
                        src="/avatar.jpg"
                        alt=""
                        width="250"
                        height="250"
                        className="avatar"
                        priority={true}
                    ></Image>
                </div>
                <div className="container">
                    <h1>Welcome.</h1>
                    <p>I&apos;m <span style={{
                        color: "rgb(45,255,196)"
                    }}>Gerard Sayson</span>, a computer scientist and aspiring mathematician based in <span style={{
                        color: "rgb(45,255,196)"
                    }}>Singapore</span>. I&apos;m known online by plenty of names, namely <span style={{
                            color: "rgb(45,255,196)"
                        }}>Big Rat</span> and <span style={{
                            color: "rgb(45,255,196)"
                        }}>Rin</span> (Please don&apos;t ask me why).</p>
                    <br/>
                    <p>In my free time, I watch <span style={{
                        color: "rgb(45,255,196)"
                    }}>hololive</span>, play <span style={{
                        color: "rgb(45,255,196)"
                    }}>Team Fortress 2</span> or do absolutely nothing.</p>
                    <br/>
                    <p>By the way, I&apos;m not taken. You most likely don&apos;t want to know this <span style={{
                        color: "gray"
                    }}>(you probably don&apos;t even care about it)</span>, but I&apos;ll leave it here; this is my
                    personal website after all.</p>
                    <br/><br/>
                    <div className="center" style={{
                        flexDirection: "row",
                        width: "100%"
                    }}>
                        <button onClick={
                            () => {
                                //https://discordapp.com/users/865552521631105034
                                window.location.assign("https://github.com/gsayson")
                            }
                        }><IoLogoGithub/>&nbsp;My GitHub</button>
                        <button onClick={
                            () => {
                                window.location.assign("https://discordapp.com/users/865552521631105034")
                            }
                        }><FaDiscord/>&nbsp;My Discord</button>
                    </div>
                    <br/>
                </div>
            </div>
        </div>
  )
}