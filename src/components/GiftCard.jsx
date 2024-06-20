import React, { useState } from "react";
import giftData from "../data/gift.json";
import SuccessBtn from "./SuccessBtn";
import toast from "react-hot-toast";

const GiftCard = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [name, setName] = useState("");
  const numRows = Math.ceil(giftData.length / 3);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const generateTableRows = () => {
    let rows = [];

    for (let i = 0; i < numRows - 1; i++) {
      rows.push(
        <tr key={i}>
          {giftData.slice(i * 3, i * 3 + 3).map((item) => (
            <td
              className={`${
                item.id === selectedItem ? "gift-selected" : "gift-item"
              }`}
              key={item.id}
              onClick={() => setSelectedItem(item.id)}
            >
              <img
                src={item.imageUrl}
                alt="gift-item"
                title={item.description}
              />
            </td>
          ))}
        </tr>
      );
    }

    // Add the last row with one column spanning all columns
    rows.push(
      <tr key={numRows}>
        <td
          colSpan="3"
          className={`${
            giftData[9].id === selectedItem ? "gift-selected" : "gift-item"
          }`}
          onClick={() => setSelectedItem(giftData[9].id)}
        >
          <img
            src={giftData[9].imageUrl}
            alt="gift-item"
            title={giftData[9].description}
          />
        </td>
      </tr>
    );

    return rows;
  };

  async function submit(e) {
    e.preventDefault();
    setLoading(true);
    const filteredItem = giftData.filter((item) => item.id == selectedItem);
    const url = filteredItem[0].imageUrl;

    try {
      const res = await fetch("https://myatmonbd.vercel.app/send-gift", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          url,
        }),
      });

      if (res.ok) {
        const result = await res.json();
        if (result.success) {
          setName("");
          setSelectedItem(null);
          setSuccess(true);
          toast.success("Gift Send Successfully");
        } else {
          toast.error("Something Wrong");
        }
      }
    } catch (error) {
      console.log(error);
      toast.error("Something Wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <h2 className="title"> Send Virtual Gift </h2>
      <form onSubmit={submit}>
        <table className="gift-container">
          <tbody> {generateTableRows()} </tbody>
        </table>

        {/* your name  */}
        {selectedItem && (
          <input
            type="text"
            value={name}
            className="name"
            placeholder="Enter your name"
            onChange={(e) => setName(e.target.value)}
            required
          />
        )}
        {success ? (
          <SuccessBtn />
        ) : (
          <button type="submit" className="gift-btn">
            {loading ? "Sending..." : "Send Gift"}
          </button>
        )}
      </form>
    </div>
  );
};

export default GiftCard;
