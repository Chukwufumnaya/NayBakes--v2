import React, { useState } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { TypeAnimation } from "react-type-animation";
import { info } from "../data/data";
import { reviews } from "../data/reviews";
import { FaInstagram, FaFacebook, FaXTwitter, FaHandPointUp } from "react-icons/fa6";

function FlippableCard({ item }) {
  const [flipped, setFlipped] = useState(false);

  // Detect if it's mobile (simple check)
  const isMobile = window.innerWidth < 640;

  const handleFlip = () => {
    setFlipped(f => !f);
  };

  return (
    <div
      className={`bg-[#D5C4A1] p-8 py-5 w-[270px] h-[280px] cursor-pointer [perspective:1000px] group rounded-xl shadow`}
      onClick={handleFlip}
    >
      {isMobile && !flipped && (
        <div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-black/70 text-white p-2 rounded-full shadow-xl`}
        >
          <FaHandPointUp size={24} className="rotate-45 animate-pulse" />
        </div>
      )}
      <div
        className={`relative h-[220px] w-full rounded-xl shadow-xl transition-all duration-1000 [transform-style:preserve-3d]
          ${flipped ? '[transform:rotateY(180deg)]' : ''}
          ${!flipped ? 'group-hover:[transform:rotateY(180deg)]' : ''}`}
      >
        <div className="absolute inset-0 h-[220px] w-[210px] rounded-xl [backface-visibility:hidden] overflow-hidden z-10">
          <img
            src={item.image}
            alt={item.name}
            loading="lazy"
            className="object-cover w-full h-full "
          />
        </div>
        <div className="absolute inset-0 h-full w-full rounded-xl [backface-visibility:hidden] [transform:rotateY(180deg)] flex flex-col items-center justify-center p-4 text-center text-xs z-20">
          <p>{item.description}</p>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 bg-opacity-50 [backface-visibility:hidden] text-right p-4 text-sm">
        <p>{item.name}</p>
      </div>
    </div>
  );
}

export default function MainPage() {

  const popularItems = info.filter(item => item.tags.includes('popular'));

  const popularCardContent = popularItems.map(item => (
    <FlippableCard key={item.id} item={item} />
  ))


  const topItems = info.filter(item => item.tags.includes('top'));

  const topCardContent = topItems.map(item => (
    <FlippableCard key={item.id} item={item} />
  ))

  const customerReviews = reviews.map(review => (
    <div key={review.id} className="bg-[#D5C4A1] p-5 w-[250px] h-[230px] rounded-xl flex flex-col justify-center items-center">
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
        <section className="relative grid w-full h-[50vh] sm:h-screen place-content-center">
          <img
            src="./images/hero.jpeg"
            alt="hero image"
            loading="lazy"
            className="absolute object-cover w-full h-full bg-no-repeat z-1 opacity-70" />
          <p className="relative w-full z-2 text-[#f5e0e0] font-edu sm:text-6xl text-3xl text-center">
            <TypeAnimation
              sequence={['Taste the freshness in every bite \u2665']}
              wrapper="span"
              cursor={true}
              repeat={0}
              speed={35}
            />
          </p>
        </section>
        <section className="p-4 mt-6 bg-[#D5C4A1] shadow w-[300px] sm:w-[630px] h-[250px] m-auto text-xs">
          <p className="text-2xl font-normal">Our Story</p>
          <div className="flex items-center justify-center gap-3 mt-2">
            <img src="./images/cafe-picture.jpg" alt="picture" className="w-[120px] rounded-sm object-cover" />
            <p>Our journey began with a simple, yet profound, dream shared by two friends with a passion for baking and coffee.<Link to="/about" className="text-[#6d675b] hover:text-[#6d675ba8]"> Read our full story</Link>
            </p>
            <img src="./images/cafe-picture.jpg" alt="picture" className="w-[620px] h-[180px] rounded-sm object-cover hidden sm:block" />
          </div>
        </section>
        <section className="mt-6 text-center">
          <HashLink to="/menu#menu">
            <button className="bg-[#D5C4A1] p-3 rounded-3xl text-sm sm:text-lg cursor-pointer hover:bg-[#9b8e73]">View our menu and place your order now!</button>
          </HashLink>
        </section>
        {/** Popular Items Section*/}
        <section className="flex flex-col items-center justify-center mt-6 text-center">
          <h2 className="mb-4 text-4xl font-normal">POPULAR ITEMS</h2>
          <p>These are popular with our customers.</p>
          <div className="grid items-center grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 mt-7 place-items-center mb-7">
            {popularCardContent}
          </div>
        </section>

        {/** Top Items Section*/}
        <section className="flex flex-col items-center justify-center mt-6 text-center">
          <h2 className="mt-6 mb-4 text-4xl font-normal">TOP PRODUCTS</h2>
          <p>These are our most sold out products this week.</p>
          <div className="grid items-center grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 mt-7 place-items-center">
            {topCardContent}
          </div>
        </section>

        {/** Reviews Section*/}
        <section className="flex flex-col items-center justify-center mt-6 text-center" id="reviews">
          <h2 className="mt-6 mb-4 text-4xl font-normal">REVIEWS</h2>
          <p>Here&apos;s what some of our customers have to say</p>
          <div className="grid items-center grid-cols-1 gap-10 text-xs bg-center sm:grid-cols-2 lg:grid-cols-3 mt-7 place-items">
            {customerReviews}
          </div>
        </section>
        <div className="border-2 border-[#d5c4a1b4] w-11/12 m-auto mt-7"></div>
      </main>

      <footer className="bg-[#000000b2] text-[#D5C4A1] flex justify-around items-center gap-20 mt-10 p-7 text-xs sm:text-sm">
        <div>
          <Link to="/menu">Menu</Link>
          <p><a href="#">New In</a></p>
          <p><a href="#">Weekly Picks</a></p>
        </div>
        <div>
          <Link to="/about">About us</Link>
          <a href="#"><p>Contact us</p></a>
          <a href="#"><p>Our Location</p></a>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <a href="#">
            <FaInstagram className="sm:h-8 sm:w-18" />
          </a>
          <a href="#">
            <FaFacebook className="sm:h-8 sm:w-18" />
          </a>
          <a href="#"><FaXTwitter className="sm:h-8 sm:w-18" /></a>
        </div>
      </footer>
    </>
  )
}