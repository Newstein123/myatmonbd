import React from "react";
import BDCard from "./components/BDCard";
import Memories from "./components/Mermories";
import WishForm from "./components/WishForm";
import GiftCard from "./components/GiftCard";
import { Typewriter } from "react-simple-typewriter";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <React.Fragment>
      <Toaster />
      <div className="warpper">
        <div className="container">
          {/* banner section */}
          <section className="banner-section">
            <div className="banner">
              <div className="text-effect">
                {/* header  */}
                <h1>
                  Happy 25 <sup> th </sup> Birthday
                </h1>
                <h2
                  style={{
                    color: "pink",
                    fontWeight: "bold",
                    fontSize: "50px",
                  }}
                >
                  {/* Style will be inherited from the parent element */}
                  <Typewriter
                    words={["Myat Mon", "My Love"]}
                    loop={Infinity}
                    cursor
                    cursorStyle="_"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </h2>
                <p>
                  <Typewriter
                    words={[
                      "Wishing you the happiest of birthdays, my love!",
                      "May your day be filled with laughter, your heart with love, and your future with endless possibilities.",
                    ]}
                    loop={Infinity}
                    cursor
                    cursorStyle="_"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </p>
              </div>
              <div className="birthday-card-container">
                <div className="bithday-card">
                  <BDCard />
                </div>
              </div>
            </div>
          </section>
          {/* gallery section  */}
          <section className="gallery-section ">
            <h1 className="title"> Our Memories </h1>
            <div className="section">
              <Memories />
            </div>
          </section>
          {/* wish message  */}
          <section className="wish-section">
            <WishForm />
            <GiftCard />
          </section>
          {/* sent her virtual gift  */}
          <section></section>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
