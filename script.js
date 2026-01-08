const startBtn = document.getElementById("startBtn");
const landing = document.getElementById("landing");
const categories = document.getElementById("categories");
const gallery = document.getElementById("gallery");
const imageGrid = document.getElementById("imageGrid");
const galleryTitle = document.getElementById("galleryTitle");
const backBtn = document.getElementById("backBtn");
const categoryCards = document.querySelectorAll(".category-card");

/* Modal elements */
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const captionText = document.getElementById("caption");
const closeBtn = document.querySelector(".close");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentImages = [];
let currentIndex = 0;

/* Image data per category */
const images = {
  wildlife: [
    "https://picsum.photos/id/1024/600/400",
    "https://picsum.photos/id/1069/600/400",
    "https://picsum.photos/id/237/600/400"
  ],
  celebrities: [
    "https://picsum.photos/id/1005/600/400",
    "https://picsum.photos/id/1011/600/400",
    "https://picsum.photos/id/1012/600/400"
  ],
  movies: [
    "https://picsum.photos/id/1040/600/400",
    "https://picsum.photos/id/1031/600/400",
    "https://picsum.photos/id/1037/600/400"
  ],
  memes: [
    "https://picsum.photos/id/1050/600/400",
    "https://picsum.photos/id/1057/600/400",
    "https://picsum.photos/id/1060/600/400"
  ],
  fashion: [
    "https://picsum.photos/id/1062/600/400",
    "https://picsum.photos/id/1067/600/400",
    "https://picsum.photos/id/1070/600/400"
  ],
  cars: [
    "https://picsum.photos/id/1074/600/400",
    "https://picsum.photos/id/1080/600/400",
    "https://picsum.photos/id/1084/600/400"
  ],
  buildings: [
    "https://picsum.photos/id/1019/600/400",
    "https://picsum.photos/id/1022/600/400",
    "https://picsum.photos/id/1033/600/400"
  ]
};

/* Landing → Categories */
startBtn.addEventListener("click", () => {
  landing.classList.add("slide-out");
  setTimeout(() => {
    landing.style.display = "none";
    categories.classList.add("show");
  }, 800);
});

/* Categories → Gallery */
categoryCards.forEach(card => {
  card.addEventListener("click", () => {
    const category = card.dataset.category;
    currentImages = images[category];

    categories.classList.remove("show");
    gallery.classList.add("show");

    galleryTitle.textContent = category.toUpperCase();
    imageGrid.innerHTML = "";

    currentImages.forEach(src => {
      const img = document.createElement("img");
      img.src = src;
      img.loading = "lazy";
      imageGrid.appendChild(img);
    });
  });
});

/* Back button */
backBtn.addEventListener("click", () => {
  gallery.classList.remove("show");
  categories.classList.add("show");
});

/* ---------------- MODAL ---------------- */
imageGrid.addEventListener("click", (e) => {
  if (e.target.tagName === "IMG") {
    currentIndex = Array.from(imageGrid.children).indexOf(e.target);
    openModal(currentIndex);
  }
});

function openModal(index) {
  modal.style.display = "block";
  showImage(index);
}

function showImage(index) {
  modalImg.src = currentImages[index];
  captionText.textContent = `Image ${index + 1} of ${currentImages.length}`;
}

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % currentImages.length;
  showImage(currentIndex);
});

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
  showImage(currentIndex);
});
