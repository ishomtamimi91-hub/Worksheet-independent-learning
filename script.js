const pages = document.querySelectorAll(".page");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentPage = 0;

function updateBook() {
  pages.forEach((page, index) => {
    page.style.display = index === currentPage ? "block" : "none";
  });
}

nextBtn.onclick = () => {
  if (currentPage < pages.length - 1) {
    currentPage++;
    updateBook();
  }
};

prevBtn.onclick = () => {
  if (currentPage > 0) {
    currentPage--;
    updateBook();
  }
};

updateBook();
