import React, { useState } from "react";
import toast from "react-hot-toast";
import SuccessBtn from "./SuccessBtn";

const WishForm = () => {
  const [data, setData] = useState({
    name: "",
    text: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, isSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (data.name == "" || data.text == "") {
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("http://localhost:4000/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      if (result.success) {
        isSuccess(true);
        setData({
          name: "",
          text: "",
        });
        toast.success("Wish sent successfully");
      }
    } catch (error) {
      toast.error("Something Wrong");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="wish-container">
      <h2 className="title"> Send Love Wish to Her </h2>
      {/* message  */}
      <div className="wish-form">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter your name"
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
            required
          />
          <textarea
            name="wish"
            id="wish"
            placeholder="Make a wish"
            value={data.text}
            onChange={(e) => setData({ ...data, text: e.target.value })}
            required
          />
          {success ? (
            <SuccessBtn />
          ) : (
            <button
              type="submit"
              className="wish-btn"
              disabled={loading && true}
            >
              {loading ? "Sending wishes...." : "Send Now"}
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default WishForm;
