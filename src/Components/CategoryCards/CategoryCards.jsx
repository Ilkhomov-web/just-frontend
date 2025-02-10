import React from "react";
import "./CategoryCards.css";
// import spinCard from "../../assets/spinCard.png";
// import snocksIcon from "../../assets/socksIcon.png";
// import sneakersIcon from '../../assets/sneakersIcon.png';
import { Link } from "react-router-dom";

export const CategoryCards = () => {
  return (
    <>
    <h1 className="Categoryh1">Turkumlar</h1>
    <div className="categoryCards">
      <Link to={"/justgame"}>
        <div className="categoryCard">
          {/* <img src={spinCard} alt="" /> */}
          <p>JustSpin</p>
        </div>
      </Link>
      <Link to={"/socks"}>
        <div className="categoryCard socks">
          {/* <img src={snocksIcon} alt="" /> */}
          <p>Paypoqlar</p>
        </div>
      </Link>
      <Link to={"sneakers"}>
        <div className="categoryCard sneaker">
          {/* <img src={sneakersIcon} alt=""  /> */}
          <p>Krossovkalar</p>
        </div>
      </Link>
      <Link to={"/pants"}>
        <div className="categoryCard pants" >
          {/* <img src={spinCard} alt="" /> */}
          <p>Shimlar</p>
        </div> 
      </Link>
      <Link to={'/caps'}>
        <div className="categoryCard caps" >
          {/* <img src={spinCard} alt="" /> */}
          <p>Kepkalar</p>
        </div>
      </Link>
      <Link to={'/slipper'}>
        <div className="categoryCard slipper" >
          {/* <img src={spinCard} alt="" /> */}
          <p>Tapchkalar</p>
        </div>
      </Link>
      <Link to={'/fudbolka'}>
        <div className="categoryCard fudbolka" >
          {/* <img src={spinCard} alt="" /> */}
          <p>Fudbolkalar</p>
        </div>
      </Link>
      <Link to={'/treko'}>
        <div className="categoryCard treko" >
          {/* <img src={spinCard} alt="" /> */}
          <p>Trekolar</p>
        </div>
      </Link>
      <Link to={'/sviter'}>
        <div className="categoryCard sviter" >
          {/* <img src={spinCard} alt="" /> */}
          <p>Sviterlar</p>
        </div>
      </Link>
      <Link to={'/nimcha'}>
        <div className="categoryCard nimcha" >
          {/* <img src={spinCard} alt="" /> */}
          <p>Nimchalar</p>
        </div>
      </Link>
      <Link to={'/makas'}>
        <div className="categoryCard makas" >
          {/* <img src={spinCard} alt="" /> */}
          <p>Makaslar</p>
        </div>
      </Link>
      <Link to={'/bag'}>
        <div className="categoryCard bag" >
          {/* <img src={spinCard} alt="" /> */}
          <p>So'mkalar</p>
        </div>
      </Link>
      <Link to={'/boshqa'}>
        <div className="categoryCard boshqa" >
          {/* <img src={spinCard} alt="" /> */}
          <p>Boshqalar</p>
        </div>
      </Link>
      <Link to={'/discount'}>
        <div className="categoryCard discount" >
          {/* <img src={spinCard} alt="" /> */}
          <p>Skidkalar</p>
        </div>
      </Link>
      <Link to={'/look'}>
        <div className="categoryCard look" >
          {/* <img src={spinCard} alt="" /> */}
          <p>Looklar</p>
        </div>
      </Link>
    </div>
    </>
  );
};


