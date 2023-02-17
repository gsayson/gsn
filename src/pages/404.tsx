'use client';

import "../app/globals.css"
import ParticlesBackground from "@/components/particles";
import {useEffect, useState} from "react";

const greetings: string[] = [
    "Sorry, there's absolutely nothing here except me and the 404 above.",
    "Get a life!",
    "The Dirichlet integral is a fascinating integral with no elementary antiderivative. It can be calculated algebraically using the Laplace transform.",
    "Private hangout spot lies here.",
    "How are you here?",
    "The background is a simulation of particles, which should collide vigorously according to the Kinetic Particle Theory of Matter."
]

export default function Custom404() {
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
            }}>404</h1>
            <div style={{
                fontSize: "2vw",
                fontFamily: "Playfair Display, serif"
            }}>{text}</div>
        </div>
    )
}