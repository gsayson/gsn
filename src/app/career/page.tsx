'use client';

import "../globals.css"
import ParticlesBackground from "@/components/particles";
import Navbar from "@/components/navbar";
import Link from "next/link";

export default function Career() {
    return (
        <div>
            <br/>
            <div className="center">
                <Navbar/>
            </div>
            <br/>
            <ParticlesBackground></ParticlesBackground>
            <div>
                <div className="container">
                    <h1>Studenthood</h1>
                    <p>I have been studying in Singapore ever since I was born. I&apos;m taking <span style={{
                        color: "rgb(45,255,196)"
                    }}>
                        Pure Physics
                    </span> and <span style={{
                        color: "rgb(45,255,196)"
                    }}>
                        Pure Chemistry
                    </span> for the <Link href="https://www.seab.gov.sg/home/examinations/gce-o-level/about-gce-o-level" style={{
                        color: "rgb(45,150,255)"
                    }}>Singapore-Cambridge &apos;O&apos; Levels</Link>, along with <span style={{
                        color: "rgb(45,255,196)"
                    }}>
                        Additional Mathematics
                    </span> and <span style={{
                        color: "rgb(45,255,196)"
                    }}>
                        History
                    </span>.</p>
                    <br/><br/>
                    <h1>Software Engineering</h1>
                    <p>I have written plenty of code in <span style={{
                        color: "rgb(45,255,196)"
                    }}>
                        Java
                    </span>&nbsp;<span style={{
                        color: "gray"
                    }}>
                        (a great programming language, albeit a bit too verbose)
                    </span>&nbsp; since I was seven years old. Now, I&apos;m writing efficient code in Java and <span style={{
                        color: "rgb(45,255,196)"
                    }}>
                        Rust
                    </span>, and I&apos;m also picking up <span style={{
                        color: "rgb(45,255,196)"
                    }}>
                        TypeScript
                    </span>, <span style={{
                        color: "rgb(45,255,196)"
                    }}>
                        NextJS
                    </span>&nbsp;<span style={{
                        color: "gray"
                    }}>
                        (which this website is built on)
                    </span> and <span style={{
                        color: "rgb(45,255,196)"
                    }}>
                        React
                    </span>.</p>
                    <br/>
                </div>
            </div>
        </div>
    )
}