import React from "react";
import Header from "../components/Header";
import { TypeAnimation } from "react-type-animation";
import { info } from "../data/data";
import { reviews } from "../data/reviews";
import { FaInstagram, FaFacebook, FaXTwitter } from "react-icons/fa6";



export default function MainPage() {

  const popularItems = info.filter(item => item.tags.includes('popular'));

  const popularCardContent = popularItems.map(items => (
    <div key={items.id} className="bg-[#D5C4A1] p-8 w-[300px] h-[450px] cursor-pointer [perspective:1000px] group rounded-xl">

      <div className="relative h-[350px] w-full rounded-xl shadow-xl transition-all duration-1000 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

        <div className="absolute inset-0 h-[350px] w-[250px] rounded-xl [backface-visibility:hidden] overflow-hidden">
          <img
            src={items.image}
            alt={items.name}
            loading="lazy"
            className="object-cover w-full h-full "
          />
        </div>

        <div className="absolute inset-0 h-full w-full rounded-xl [backface-visibility:hidden] [transform:rotateY(180deg)] flex flex-col items-center justify-center p-4 text-center">
          <p>{items.description}</p>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 bg-opacity-50 [backface-visibility:hidden] text-right p-4">
        <p>
          {items.name}
        </p>
      </div>

    </div>
  ))


  const topItems = info.filter(item => item.tags.includes('top'));

  const topCardContent = topItems.map(items => (
    <div key={items.id} className="bg-[#D5C4A1] p-8 w-[300px] h-[450px] cursor-pointer [perspective:1000px] group rounded-xl">

      <div className="relative h-[350px] w-full rounded-xl shadow-xl transition-all duration-1000 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

        <div className="absolute inset-0 h-[350px] w-[250px] rounded-xl [backface-visibility:hidden] overflow-hidden">
          <img
            src={items.image}
            alt={items.name}
            loading="lazy"
            className="object-cover w-full h-full "
          />
        </div>

        <div className="absolute inset-0 h-full w-full rounded-xl [backface-visibility:hidden] [transform:rotateY(180deg)] flex flex-col items-center justify-center p-4 text-center">
          <p>{items.description}</p>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 bg-opacity-50 [backface-visibility:hidden] text-right p-4">
        <p>
          {items.name}
        </p>
      </div>

    </div>
  ))

  const customerReviews = reviews.map(review => (
    <div key={review.id} className="bg-[#D5C4A1] p-8 w-[300px] h-[300px] rounded-xl flex flex-col justify-center items-center">
      <img
        src={review.avatar}
        alt="avatar"
        loading="lazy"
        className="w-[80px] m-4" />
      <p>&quot; {review.review} &quot;</p>
    </div>
  ))


  return (
    <>
      <Header />
      <main>
        <section className="relative grid w-full h-screen place-content-center">
          <img
            src="/src/assets/images/hero.jpeg"
            alt="hero image"
            loading="lazy"
            className="absolute object-cover w-full h-full bg-no-repeat z-1 opacity-70" />
          <p className="relative w-full z-2 text-[#f5e0e0] font-edu text-6xl text-center">
            <TypeAnimation
              sequence={['Taste the freshness in every bite \u2665']}
              wrapper="span"
              cursor={true}
              repeat={0}
              speed={35}
            />
          </p>
        </section>
        <section className="p-3 mt-6 text-lg text-center">
          <h2 className="mb-4 text-4xl font-normal">ABOUT US</h2>
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
            treats and perfectly crafted coffee and beverages. Whether you&apos;re grabbing a quick bite or settling in for a cozy moment, we&apos;re here to brighten your day with delicious flavors and a friendly smile. Simple pleasures made
            extraordinary
          </p>
        </section>

        {/** Popular Items Section*/}
        <section className="flex flex-col items-center justify-center mt-6">
          <h2 className="mb-4 text-4xl font-normal">POPULAR ITEMS</h2>
          <p>These are popular with our customers.</p>
          <div className="grid items-center grid-cols-1 gap-10 sm:grid-cols-3 mt-7 place-items-center mb-7">
            {popularCardContent}
          </div>
        </section>

        {/** Top Items Section*/}
        <section className="flex flex-col items-center justify-center mt-6">
          <h2 className="mt-6 mb-4 text-4xl font-normal">TOP PRODUCTS</h2>
          <p>These are our most sold out products this week.</p>
          <div className="grid items-center grid-cols-1 gap-10 sm:grid-cols-3 mt-7 place-items-center">
            {topCardContent}
          </div>
        </section>

        {/** Reviews Section*/}
        <section className="flex flex-col items-center justify-center mt-6">
          <h2 className="mt-6 mb-4 text-4xl font-normal">REVIEWS</h2>
          <p>Here&apos;s what some of our customers have to say</p>
          <div className="grid items-center grid-cols-1 gap-10 sm:grid-cols-3 mt-7 place-items-center">
            {customerReviews}
          </div>
        </section>
        <div className="border-2 border-[#d5c4a1b4] w-11/12 m-auto mt-7"></div>
      </main>

      <footer className="bg-[#000000b2] text-[#D5C4A1] flex justify-around items-center gap-20 mt-10 p-7">
        <div>
          <p><a href="#">Menu</a></p>
          <p><a href="#">New In</a></p>
          <p><a href="#">Weekly Picks</a></p>
        </div>
        <div>
          <a href="#"><p>About us</p></a>
          <a href="#"><p>Contact us</p></a>
          <a href="#"><p>Our Location</p></a>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <a href="#">
            <FaInstagram className="h-8 w-18" />
          </a>
          <a href="#">
            <FaFacebook className="h-8 w-18" />
          </a>
          <a href="#"><FaXTwitter className="h-8 w-18" /></a>
        </div>
      </footer>
    </>
  )
}