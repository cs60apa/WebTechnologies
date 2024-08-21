const imageUpload = document.getElementById("imageUpload");
const topText = document.getElementById("topText");
const bottomText = document.getElementById("bottomText");
const memeCanvas = document.getElementById("memeCanvas");
const downloadMeme = document.getElementById("downloadMeme");
const ctx = memeCanvas.getContext("2d");

imageUpload.addEventListener("change", () => {
  const reader = new FileReader();
  reader.onload = function (event) {
    const img = new Image();
    img.onload = function () {
      memeCanvas.width = img.width;
      memeCanvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      drawText();
    };
    img.src = event.target.result;
  };
  reader.readAsDataURL(imageUpload.files[0]);
});

topText.addEventListener("input", drawText);
bottomText.addEventListener("input", drawText);

function drawText() {
  ctx.clearRect(0, 0, memeCanvas.width, memeCanvas.height);
  const img = new Image();
  img.src = memeCanvas.toDataURL();

  img.onload = function () {
    ctx.drawImage(img, 0, 0);

    ctx.font = "bold 30px Impact";
    ctx.textAlign = "center";
    ctx.fillStyle = "white";
    ctx.strokeStyle = "black";
    ctx.lineWidth = 3;

    if (topText.value) {
      ctx.fillText(topText.value.toUpperCase(), memeCanvas.width / 2, 50);
      ctx.strokeText(topText.value.toUpperCase(), memeCanvas.width / 2, 50);
    }

    if (bottomText.value) {
      ctx.fillText(
        bottomText.value.toUpperCase(),
        memeCanvas.width / 2,
        memeCanvas.height - 20
      );
      ctx.strokeText(
        bottomText.value.toUpperCase(),
        memeCanvas.width / 2,
        memeCanvas.height - 20
      );
    }
  };
}

downloadMeme.addEventListener("click", () => {
  const link = document.createElement("a");
  link.download = "meme.png";
  link.href = memeCanvas.toDataURL();
  link.click();
});
