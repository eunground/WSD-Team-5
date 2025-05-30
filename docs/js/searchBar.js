const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("search-input");

function handleSearch() {
  const query = searchInput.value.trim();
  if (query) {
    localStorage.setItem("searchQuery", query);
    window.location.href = "./search.html";
  } else {
    localStorage.removeItem("searchQuery");
  }
}

searchBtn.addEventListener("click", handleSearch);
searchInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    handleSearch();
  }
});
