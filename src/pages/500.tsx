'use client';

import "../app/globals.css"
import ParticlesBackground from "@/components/particles";
import {useEffect, useState} from "react";

const greetings: string[] = [
    "Something happened on our part.",
    "Is the problem on your end or mine?",
    "Try to refresh again. Hopefully, it works!",
    "I pray to God that this won't keep happening."
]

export default function Custom500() {
    let [text, setText] = useState("React isn't doing its job!");
    useEffect(() => {
        setText(greetings[Math.floor(Math.random() * greetings.length)])
    }, []);
    return (
        <div className="container" style={{
            paddingTop: "20vw"
        }}>
            <ParticlesBackground/>
            <h1 style={{
                fontSize: "6vw",
                color: "orange"
            }}>500</h1>
            <div style={{
                fontSize: "2vw",
                fontFamily: "Playfair Display, serif"
            }}>{text}</div>
        </div>
    )
}