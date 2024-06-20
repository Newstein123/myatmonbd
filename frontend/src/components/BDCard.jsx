import React from "react";
import HTMLFlipBook from "react-pageflip";
import Page from "./Page";

const BDCard = () => {
  return (
    <HTMLFlipBook width={400} height={600}>
      <Page number="1">
        <img
          src="images/card/1.png"
          alt="birthday-card"
          width={400}
          height={600}
        />
      </Page>
      <Page number="2">
        <img
          src="images/card/2.png"
          alt="birthday-card"
          width={400}
          height={600}
        />
      </Page>
      <Page number="3">
        <img
          src="images/card/3.png"
          alt="birthday-card"
          width={400}
          height={600}
        />
      </Page>
      <Page number="4">
        <img
          src="images/card/4.png"
          alt="birthday-card"
          width={400}
          height={600}
        />
      </Page>
    </HTMLFlipBook>
  );
};

export default BDCard;
