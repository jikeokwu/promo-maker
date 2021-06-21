import React, { useRef, useState, useEffect } from "react";
import avatar from "./avatar.jpeg";
import mil from "./1mil.jpeg";
import placeholder from "./placeholder.png";
import SetNumbers from "./SetNumbers";

function Canvas() {
  const canvasRef = useRef(null);
  const [image, setImage] = useState("");
  const [name, setName] = useState("Default Name");
  const [num, setNum] = useState("0");

  let drawBoat = (ctx) => {
    let background = document.getElementById("img");
    ctx.drawImage(background, 0, 0, 1080, 1080);
  };

  const handleUpload = (event) => {
    setImage(URL.createObjectURL(event.target.files[0]));
  };

  CanvasRenderingContext2D.prototype.roundRect = function (x, y, w, h, r) {
    if (w < 2 * r) r = w / 2;
    if (h < 2 * r) r = h / 2;
    this.beginPath();
    this.moveTo(x + r, y);
    this.arcTo(x + w, y, x + w, y + h, r);
    this.arcTo(x + w, y + h, x, y + h, r);
    this.arcTo(x, y + h, x, y, r);
    this.arcTo(x, y, x + w, y, r);
    this.closePath();
    return this;
  };

  let a = 519;
  let b = 227;
  let c = 420;
  let d = 420;
  // let e = 550 // This is for Short Name
  let e = 490; // This is for Medium Name
  // let e = 400 // This is for Long Name
  let f = 540;

  const updateNum = (val1, val2, val3, val4, val5, val6) => {
    a = val1;
    b = val2;
    c = val3;
    d = val4;
    e = val5;
    f = val6;

    console.log(e);
    console.log(f);
  };

  const imageOnAvatar = (ctx) => {
    let avatar = document.getElementById("avatar");
    console.log(e, "in");
    console.log(f, "in");
    ctx.save();
    ctx.font = "50px Impact";
    ctx.fillText(name, e, 790);
    ctx.font = "75px Impact";
    ctx.fillStyle = "white";
    ctx.fillText(num, f, 900);
    ctx.roundRect(a, b, c, d, 360);
    ctx.clip();
    ctx.drawImage(avatar, a, b, c, d);
    ctx.restore();
  };

  const handleChange = (func, e) => {
    e.preventDefault();
    func(e.target.value);
  };

  let avatarDisplay;

  if (image) {
    avatarDisplay = (
      <img src={image} alt="avatar" id="avatar" width="300" height="300" />
    );
  } else {
    avatarDisplay = (
      <img
        src={placeholder}
        alt="avatar"
        id="avatar"
        width="300"
        height="300"
        className="preview"
      />
    );
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    drawBoat(ctx);
    imageOnAvatar(ctx);
  });

  const download = (e) => {
    const canvas = e.target;
    canvas.toBlob(
      (blob) => {
        const anchor = document.createElement("a");
        anchor.download = "my-file-name.jpg"; // optional, but you can give the file a name
        anchor.href = URL.createObjectURL(blob);

        anchor.click(); // ✨ magic!

        URL.revokeObjectURL(anchor.href); // remove it from memory and save on memory! 😎
      },
      "image/png",
      1
    );
  };

  const divStyle = {
    display: "inline-block",
    border: "2px solid black",
    padding: "10px",
    margin: "3px",
    borderRadius: "5px",
  };

  return (
    <>
      <div className="upload">
        {avatarDisplay}
        <div className="input">
          <input type="file" onChange={handleUpload} />{" "}
          <input
            type="submit"
            value="Download Avatar"
            onClick={(e) => {
              document.getElementById("my-canvas").click();
            }}
          />
        </div>
      </div>

      <br />

      <div style={divStyle}>
        <p>Name</p>
        <input onBlur={(e) => setName(e.target.value)} />
      </div>

      <div style={divStyle}>
        <p>Num Outreaches</p>
        <input onBlur={(e) => setNum(e.target.value)} />
      </div>

      <img src={mil} alt="product" id="img" style={{ display: "none" }} />
      <br />

      <SetNumbers a={a} b={b} c={c} d={d} e={e} f={f} updateNum={updateNum} />

      <input
        type="submit"
        onClick={() => {
          const canvas = canvasRef.current;
          const ctx = canvas.getContext("2d");
          drawBoat(ctx);
          imageOnAvatar(ctx);
        }}
      />
      <canvas
        ref={canvasRef}
        width="1080"
        height="1080"
        id="my-canvas"
        onClick={(e) => {
          e.target.toBlob(
            (blob) => {
              const anchor = document.createElement("a");
              anchor.download = "pks.png"; // optional, but you can give the file a name
              anchor.href = URL.createObjectURL(blob);

              anchor.click(); // ✨ magic!

              URL.revokeObjectURL(anchor.href); // remove it from memory and save on memory! 😎
            },
            "image/png",
            1
          );
        }}
      />
    </>
  );
}

export default Canvas;
