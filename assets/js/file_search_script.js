// PDF List — Add more anytime
const pdfFiles = [
  // History
  { name: "Ancient India -Time Table.pdf", path: "assets/pdf/history/" },
  { name: "Gupta Empire.pdf", path: "assets/pdf/history/" },
  { name: "Mauryan Empire.pdf", path: "assets/pdf/history/" },
   { name: "Buddhism.pdf", path: "assets/pdf/history/" },
    { name: "Jainism.pdf", path: "assets/pdf/history/" },
     { name: "Mahajanapadas.pdf", path: "assets/pdf/history/" },
      { name: "Vedic period & vedic literature.pdf", path: "assets/pdf/history/" },

  // Add More Categories Below
  // { name: "filename.pdf", path: "assets/pdf/geography/" },
  // { name: "filename.pdf", path: "assets/pdf/social/" },
];

const searchInput = document.getElementById("searchInput");
const resultsBox = document.getElementById("searchResults");

searchInput.addEventListener("input", function () {
  const query = searchInput.value.toLowerCase();
  resultsBox.innerHTML = "";

  // Show results only if more than 2 characters typed
  if (query.trim().length < 3) {
    resultsBox.style.display = "none";
    return;
  }

  const filtered = pdfFiles.filter((file) =>
    file.name.toLowerCase().includes(query)
  );

  if (filtered.length === 0) {
    resultsBox.innerHTML = `<div class="no-result">No files found</div>`;
  } else {
    filtered.forEach((file) => {
      const div = document.createElement("div");
      div.classList.add("search-item");
      div.innerHTML = `
        <a href="${file.path + file.name}" target="_blank">
          <i class="fa-solid fa-file-pdf me-2"></i> ${file.name}
        </a>`;
      resultsBox.appendChild(div);
    });
  }

  resultsBox.style.display = "block";
});
