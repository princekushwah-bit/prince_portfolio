
import React from "react";
import { Camera, BookOpen } from "lucide-react";

import photo1 from "../assets/photography/photo1.jpeg";
import photo2 from "../assets/photography/photo2.jpeg";
import photo3 from "../assets/photography/photo3.jpeg";
import photo4 from "../assets/photography/photo4.jpeg";
import photo5 from "../assets/photography/photo5.jpeg";
import photo6 from "../assets/photography/photo6.jpeg";

const photos = [photo1, photo2, photo3, photo4, photo5, photo6];

export const HobbiesSection = () => {
  return (
    <section id="hobbies" className="py-24 px-4 bg-background text-foreground">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Hobbies</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          
          {/* 1. Non-Fiction Reading */}
          <div className="rounded-xl border border-border p-6 bg-card shadow-sm h-full">
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="text-primary" size={28} />
              <h3 className="text-xl font-semibold">Non-Fiction Reading</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              I am a Non-Fiction enthusiast who loves diving into biographies and 
              thought-provoking books. It helps me explore diverse perspectives and 
              mental models—ensuring my learning never stops at the terminal.
            </p>
          </div>

          {/* 2. Photography - Mobile Friendly Version */}
          <div className="group rounded-xl border border-border bg-card overflow-hidden transition-all duration-700 
                          min-h-[400px] md:max-h-[380px] md:hover:max-h-[800px] flex flex-col">
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Camera className="text-primary" size={28} />
                <h3 className="text-xl font-semibold">Photography</h3>
              </div>

              <p className="text-muted-foreground mb-6">
                Photography allows me to capture moments, perspectives, and stories through visuals.
              </p>

              {/* Photo Grid */}
              <div className="grid grid-cols-2 gap-3">
                {photos.map((photo, index) => (
                  <div key={index} className="overflow-hidden rounded-lg h-32 md:h-40">
                    <img
                      src={photo}
                      alt={`Photography ${index + 1}`}
                      className="object-cover h-full w-full transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Hint for Laptop Users */}
            <div className="hidden md:block text-center text-[10px] uppercase tracking-widest text-muted-foreground py-2 opacity-50 group-hover:opacity-0 transition-opacity">
              Hover to expand gallery
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
