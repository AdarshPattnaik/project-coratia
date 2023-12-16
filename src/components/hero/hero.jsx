import React from "react";
import Link from "next/link";
import { herocontent } from "../../../config/content/Hero";
import "./Hero.css";
const ytlink = "https://www.youtube.com/watch?v=e1lyC_ipKfQ";

export default function Hero() {
  return (
    <>
      <div className="hero-section w-full max-w-full overflow-hidden">
        <img
          src={herocontent.video}
          alt=""
          className="hero-image fixed object-cover w-full max-w-full h-[550px] -z-20 overflow-hidden"
        />

        <div className="hero-child absolute w-full top-[260px] sm:top-[240px] z-0">
          <div className="hero-wrapper relative w-[700px] mx-auto">
            <p className="drop-1 hero-text mx-auto text-center p-3 
                font-bold text-white text-6xl">
              Revolutionizing Underwater Inspection
            </p>

            <div className="drop-2">
              <Link
                href={ytlink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-[260px] h-[52px] p-3 mx-auto text-center
               text-white btn text-base mt-7 rounded-full font-semibold bg-slate-900
                transition hover:bg-slate-800"
              >
                <img
                  src="https://res.cloudinary.com/dgjzygzgx/image/upload/v1702630222/play_kmg3ur.png"
                  alt=""
                  className="mr-2.5 w-[28px] h-[28px]"
                />
                Enhance Your Experience
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
