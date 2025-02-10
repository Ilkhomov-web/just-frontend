import React, { useState } from "react";
import { useRef } from "react";
import "./SpinGame.css";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
import {BACKEND_API} from '../../config'

export const SpinGame = () => {
  const [selectedItem, setSelectedItem] = useState("Qaytadan");
  const [canSpin, setCanSpin] = useState(true);
  const boxRef = useRef(null);
  const elementRef = useRef(null);
  const userToken = localStorage.getItem('auth-token');

  function shuffle(array) {
    var currentIndex = array.length,
      randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex], // Corrected the assignment here
      ];
    }
    return array;
  }

  const spin = async () => {
    const winner = {
      userName: userToken,
      spinWin: selectedItem,
      date: Date.now(),
    };
    await fetch(`${BACKEND_API}/spinGame/`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("auth-token"),
      },
      body: JSON.stringify(winner),
    })

    if (userToken) {
      const box = boxRef.current;
      const element = elementRef.current;
      if (!canSpin) return;
      setCanSpin(false);
      let AC = shuffle([1890, 2250, 2610]);
      let Camera = shuffle([1850, 2210, 2570]);
      let Zont = shuffle([1770, 2130, 2490]);
      let PS = shuffle([1810, 2170, 2530]);
      let Headset = shuffle([1850, 2110, 2470]);
      let Droe = shuffle([1630, 1990, 2350]);
      let ROG = shuffle([1570, 1930, 2290]);
  
      let results = shuffle([
        AC[0],
        Camera[0],
        Zont[0],
        PS[0],
        Headset[0],
        Droe[0],
        ROG[0],
      ]);
  
      let selected = "";
  
      if (results[0] === AC[0]) selected = "Naski 1ta";
      else if (results[0] === Camera[0]) selected = "Afsuski Bo'sh";
      else if (results[0] === Zont[0]) selected = "Qaytadan";
      else if (results[0] === PS[0]) selected = "Naski 2x";
      else if (results[0] === Headset[0]) selected = "Tekin Yetkazish";
      else if (results[0] === Droe[0]) selected = "Afsuski Bo'sh";
      else if (results[0] === ROG[0]) selected = "krasofka -5%";
  
      setSelectedItem(selected);
  
      box.style.setProperty("transition", "all ease 5s");
      box.style.transform = "rotate(" + results[0] + "deg)";
      element.classList.remove("animate");
  
  
      setTimeout(function () {
        box.style.setProperty("transition", "initial");
        box.style.transform = "rotate(90deg)";
  
        // Open modal after 3 seconds
        setTimeout(function () {
          Swal.fire({
            title: "Good job!",
            text: `Siznig Yutug'ingiz: ${selectedItem}!`,
            icon: "success",
          });
        }, 100);
        setCanSpin(true);
      }, 6000);
  
      // Yutuq qachon chiqsa, localStorage ga ma'lumot saqlaymiz
      localStorage.setItem("lastSpin", Date.now());
      localStorage.setItem("winner", selectedItem);
    } else {
      alert("Iltimos Ro'yhatdan O'ting");
    }
  }
  
  // Natijani tekshirish va qayta spin qilish
  function checkAndSpin() {
    const lastSpin = localStorage.getItem("lastSpin");
    const selectWin = localStorage.getItem("winner");
    if (!lastSpin) {
      // Agar avvalgi spin bo'lmagan bo'lsa yana spin ishga tushadi
      spin();
    } else {
      const lastSpinTime = parseInt(lastSpin);
      const currentTime = Date.now();
      const hoursPassed = (currentTime - lastSpinTime) / (1000 * 60 * 60);
      if (hoursPassed >= 24) {
        // Agar oxirgi spin 24 soatdan ortiq bo'lsa yana spin ishga tushadi
        spin();
      } else {
        if(selectWin === "Qaytadan"){
          spin();
        }else{
          // Aks holda foydalanuvchi 24 soat o'tkazishga to'g'ri keladi
        const hoursLeft = 24 - hoursPassed;
        Swal.fire({
          title: "Eslatma",
          text: `Keyingi Urinish ${hoursLeft.toFixed(1)} Soatdan Keyin.`,
          icon: "info",
        });
        }
      }
    }
  }



  return (
    <div className="body">
      <div className="mainbox" ref={elementRef}>
        <div className="box" ref={boxRef}>
          <div className="box1">
            <span className="font span1 spaan">
              <h5>Just Shopdan -5%</h5>
            </span>
            <span className="font span2 spaan">
              <h5>krasofka -5%</h5>
            </span>
            <span className="font span3 spaan">
              <h5>Naski 1ta</h5>
            </span>
            <span className="font span4 spaan">
              <h5>Just Shopdan -10%</h5>
            </span>
            <span className="font span5 spaan">
              <h5>Naski 2x</h5>
            </span>
          </div>
          <div className="box2">
            <span className="font span1 spaan">
              <h5>Qaytadan</h5>
            </span>
            <span className="font span2 spaan">
              <h5>Tekin Yetkazish</h5>
            </span>
            <span className="font span3 spaan">
              <h5>Hammasiga -10%</h5>
            </span>
            <span className="font span4 spaan">
              <h5>Jordan 350 -5%</h5>
            </span>
            <span className="font span5 spaan">
              <h5>Afsuski Bo'sh</h5>
            </span>
          </div>
        </div>
        <button className="spin" onClick={checkAndSpin}>
          SPIN
        </button>
      </div>
    </div>
  );
};
