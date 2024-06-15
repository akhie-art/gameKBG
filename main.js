// Get  to DOM elements
const gameContainer = document.querySelector(".container"),
  userResult = document.querySelector(".user-result img"),
  cpuResult = document.querySelector(".cpu-result img"),
  result = document.querySelector(".result"),
  optionImages = document.querySelectorAll(".option-image");

optionImages.forEach((image, index) => {
  image.addEventListener("click", (e) => {
    image.classList.add("aktif");
    userResult.src = cpuResult.src = "images/rock.png";
    result.textContent = "Tunggu...";

    optionImages.forEach((image2, index2) => {
      index !== index2 && image2.classList.remove("aktif");
    });
    gameContainer.classList.add("mulai");

    let imageSrc = e.target.querySelector("img").src;
    userResult.src = imageSrc;

    let waktu = setTimeout(() => {
      gameContainer.classList.remove("mulai");
      let ramdomNumber = Math.floor(Math.random() * 3);
      let cpuImages = [
        "images/rock.png",
        "images/paper.png",
        "images/scissors.png",
      ];
      cpuResult.src = cpuImages[ramdomNumber];
      let cpuValue = ["K", "B", "G"][ramdomNumber];
      let userValue = ["K", "B", "G"][index];
      let outComes = {
        BB: "Draw",
        BK: "Musuh",
        BG: "User",
        KK: "Draw",
        KB: "User",
        KG: "Musuh",
        GG: "Draw",
        GB: "Musuh",
        GK: "User",
      };

      let outComeValue = outComes[userValue + cpuValue];
      result.textContent =
        userValue == cpuValue ? "Pertandingan Seri" : `${outComeValue} Menang!`;
    }, 2500);
  });
});
