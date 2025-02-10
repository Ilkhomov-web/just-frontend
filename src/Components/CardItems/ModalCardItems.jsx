import React from "react";
import "./CardItems.css";
import Maps from "../Maps/Maps";

const ModalCardItems = ({
  toggleModal,
  modalIsOpen,
  handleSendUserInfo,
  setUserName,
  setUserPhone,
  setUserMap,
}) => {
  return (
    <div className={` ${modalIsOpen ? "noneModal" : "modalPayments"}`}>
      <div className="modalHeader">
        <h1>To'lov</h1>
        <button onClick={toggleModal}>X</button>
      </div>
      <div className="modalBody">
        <div className="mapPayment">
          <h2>
            Xaritadan Belgilang <br />
            <span style={{ color: "white", fontSize: "16px" }}>
              Xaritani bosing va manzilni yuboring
            </span>
          </h2>
          <Maps setUserMap={setUserMap} />
        </div>
        <form onSubmit={handleSendUserInfo} className="inputPayment">
          <input
            onChange={(e) => setUserName(e.target.value)}
            type="text"
            placeholder="Ismingiz"
          />
          <input
            onChange={(e) => setUserPhone(e.target.value)}
            type="text"
            placeholder="Telefon Raqamingiz"
          />
          <input type="submit" />
        </form>
      </div>
      <div className="modalFooter"></div>
    </div>
  );
};

export default ModalCardItems;
