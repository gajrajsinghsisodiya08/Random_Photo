import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import "../spinner.css";

const inputFields = {
  width: "inherit",
  fontFamily: "arial",
  padding: "6px",
  boxSizing: "border-box",
};
const postBtnStyle = {
  border: "none",
  margin: 0,
  color: "#fff",
  fontWeight: "bold",
  padding: "16px 20px",
  background: "#7D4C92 ",
  width: "300px",
};

const mainFields = {
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-start",
  paddingTop: "30px",
};
const imgFields = {
  width: "300px",
  marginBottom: "20px",
  height: "auto",
};
const imagesFields = {
  width: "100%",
  objectFit: "cover",
  objectPosition: "top center",
};
const boxinputFields = {
  width: "300px",
  marginBottom: "15px",
};

function SimpleReactFileUpload() {
  const [imageUrl, setImageUrl] = useState(`https://picsum.photos`);
  const [category, setCategory] = useState();
  const [currentImageUrl, setCurrentImageUrl] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const random = Math.floor(Math.random() * 250 + 1);
    fetch(`${imageUrl}/${random}`)
      .then((res) => {
        console.log(res.url, "+++++++");
        if (res.status === 200) {
          setCurrentImageUrl(res.url);
          setIsLoading(false);
        }
      })
      .catch((e) => console.log(e, "error"));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (localStorage.getItem("category") === null) {
      const arr = {};
      arr[category] = [`${currentImageUrl}`];
      localStorage.setItem("category", JSON.stringify(arr));
      window.location.reload();
      alert("Your image has been saved");
    } else {
      const newCategory = JSON.parse(localStorage.getItem("category"));
      if (!newCategory[category]) {
        newCategory[category] = [`${currentImageUrl}`];
        window.location.reload();
        alert("Your image has been saved");
      } else {
        newCategory[category].push(`${currentImageUrl}`);
        window.location.reload();
        alert("Your image has been saved");
      }
      localStorage.setItem("category", JSON.stringify(newCategory));
    }
  };
  return (
    <>
      <Navbar />
      {isLoading ? (
        <div className="spinner-container">
          <div className="loading-spinner"></div>
        </div>
      ) : (
        <div style={mainFields}>
          <div style={imgFields}>
            <img
              style={imagesFields}
              src={`${currentImageUrl}`}
              alt="Random Image!"
            />
          </div>
          <div style={boxinputFields}>
            <input
              style={{}}
              style={inputFields}
              type="text"
              placeholder="Enter Category Title"
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
          <button onClick={handleSubmit} style={postBtnStyle}>
            Post
          </button>
        </div>
      )}
    </>
  );
}
export default SimpleReactFileUpload;
