import React from "react"
import Header from "../components/Header"

export default function About() {
  return (
    <>
      <Header />
      <main>
        <section className="w-3/4 p-3 m-auto mt-6 text-lg text-center">
          <h2 className="mb-4 text-4xl font-normal">ABOUT US</h2>
          <img
            src="/images/sourdough-icon.png"
            alt="A picture of the cafe"
            className="object-cover m-auto" />
          <p>
            Welcome to Naybakes! Our journey began with a simple, yet profound, dream shared by two friends with a passion
            for baking and coffee. We envisioned a place where the aroma of freshly baked goods mingles with the rich scent
            of coffee, creating an inviting sanctuary for our community.
          </p>
          <p className="mt-4 mb-4">
            After years of perfecting our craft, experimenting with recipes, and sourcing the finest ingredients, we proudly
            opened our doors in 2025. We believe that food and drink have the power to connect people, create memories, and
            uplift spirits, and that belief is the foundation of everything we do.
          </p>

          <p>
            Naybakes is your daily escape. We bring you the best of both worlds: a delightful selection of freshly baked
            treats and perfectly crafted coffee and beverages. Whether you&apos;re grabbing a quick bite or settling in for a cozy moment, we&apos;re here to brighten your day with delicious flavors and a friendly smile. <br /> Simple pleasures made
            extraordinary &#128522;
          </p>
        </section>
      </main>
    </>

  )
}






