import React, { useContext, useState, useEffect } from "react";
import { ShopContext } from "../../Contex/ShopContext";
import "./CardItems.css";
import remove_icon from "../../assets/cart_cross_icon.png";
import ModalCardItems from "./ModalCardItems";
import { BACKEND_API } from "../../config";
import LoadSkleton from "../LoadScleton/LoadSkleton";

const CardItems = () => {
  const [modalIsOpen, setModalIsOpen] = useState(true);
  const [userName, setUserName] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [userMap, setUserMap] = useState("");
  const [promoCode, setPromoCode] = useState("");
  const [promoError, setPromoError] = useState(false);

  const {
    getTotalCardAmount,
    all_product,
    cardItems,
    removeFromCard,
    clearCardItems,
  } = useContext(ShopContext);
  console.log(cardItems.length);

  const toggleModal = () => {
    setModalIsOpen(!modalIsOpen);
  };

  const resetForm = () => {
    setUserName("");
    setUserPhone("");
    setUserMap("");
    clearCardItems();
    toggleModal();
  };

  const handleSendUserInfo = async (e) => {
    e.preventDefault();
    if (!userName || !userPhone || !userMap) {
      alert("Please fill in all the fields.");
      return;
    }

    const buyurtma = {
      userName,
      userPhone,
      userDate: Date.now(),
      userMap: JSON.stringify(userMap),
      product: all_product
        .filter((e) => cardItems[e.id])
        .map((e) => ({
          name: e.name,
          count: cardItems[e.id],
          size: e.size,
          image: e.image,
          price: e.new_price,
          total: e.new_price * cardItems[e.id],
        })),
    };
    await fetch(`${BACKEND_API}/orders/`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("auth-token"),
      },
      body: JSON.stringify(buyurtma),
    })
      .then((resp) => resp.json())
      .then((data) => {
        if (data.success) {
          alert("Sotib olish Mufaqiyatli Yakunlandi");
          resetForm();
        } else {
          alert("Nimadur Xato ");
        }
      });
  };

  const handlePromoSubmit = () => {
    const validPromoCodes = ["PROMO10", "DISCOUNT20"];
    if (!validPromoCodes.includes(promoCode)) {
      const handleWindowClick = () => {
        setPromoError(false);
      };
      setPromoError(true);
      setTimeout(handleWindowClick, 3000);
    } else {
      setPromoError(false);
      // Apply discount logic here if needed
    }
  };

  return (
    <div className="cardItems">
      <div className="cardItems-format-main">
        <p>Mahsulot</p>
        <p>Nomi</p>
        <p>Narxi</p>
        <p>Qancha</p>
        <p>Hammasi</p>
        <p>Bekor qilish</p>
      </div>
      <hr />
      {all_product.length > 0 &&
        all_product.map((e) => {
          if (cardItems[e.id] > 0) {
            return (
              <div key={e.id}>
                <div className="cardItems-format cardItems-format-main">
                  <img src={e.image} alt="" className="cardicon-product-icon" />
                  <p>{e.name}</p>
                  <p>{e.new_price} so'm</p>
                  <button className="cardItems-quantity">
                    {cardItems[e.id]}
                  </button>
                  <p>{e.new_price * cardItems[e.id]} so'm</p>
                  <img
                    className="cardItems-remove-icon"
                    src={remove_icon}
                    onClick={() => {
                      removeFromCard(e.id);
                    }}
                    alt=""
                  />
                </div>
                <hr />
              </div>
            );
          }
          return null;
        })}
      <div className="cardItems-down">
        <div className="cardItems-total">
          <h1>Barcha hisob</h1>
          <div>
            <div className="cardItems-total-item">
              <p>Mahsulotlar Narxi</p>
              <p>{getTotalCardAmount()} so'm</p>
            </div>
            <hr />
            <div className="cardItems-total-item">
              <p>Yetkazish Shahar uchun</p>
              <p>Bepul</p>
            </div>
            <hr />
            <div className="cardItems-total-item">
              <h1>Barchasi</h1>
              <h1 style={{ fontSize: "20px" }}>{getTotalCardAmount()} so'm</h1>
            </div>
          </div>
          <button onClick={toggleModal}>Buyurtma Berish</button>
        </div>
        <ModalCardItems
          toggleModal={toggleModal}
          modalIsOpen={modalIsOpen}
          handleSendUserInfo={handleSendUserInfo}
          setUserName={setUserName}
          setUserPhone={setUserPhone}
          setUserMap={setUserMap}
        />
        <div className="cardItems-promocode">
          <p>Agar sizda promo-kod bo'lsa, uni shu yerga kiriting</p>
          <div className="cardItems-promoBox">
            <input
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
              type="text"
              placeholder="Promo"
            />
            {promoError && (
              <p style={{ color: "red" }} className="promoErr">
                Bunday PromoCode mavjud emas !
              </p>
            )}
            <button onClick={handlePromoSubmit}>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardItems;
