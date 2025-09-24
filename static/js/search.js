async function searchOnChange(evt) {
  let searchQuery = evt.target.value.trim();
  var inputEle = document.querySelectorAll("input#search");
  inputEle.forEach((el) => (el.value = searchQuery));

  if (searchQuery !== "") {
    if (!window.searchJson) {
      window.searchJson = await fetch("/index.json").then((res) => res.json());
    }

    let searchResults = searchJson.filter((item) => {
      return (
        (item.title && item.title.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (item.description && item.description.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (item.content && item.content.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    });

    if (searchResults.length > 0) {
      let html = searchResults
        .map(
          (item) => `<div class="card" style="border-left:4px solid var(--primary-color);">
                        <a href="${item.permalink}">
                          <div class="p-3">
                            <h5>${item.title}</h5>
                            <div>${item.description || ""}</div>
                          </div>
                        </a>
                      </div>`
        )
        .join("");
      document.getElementById("search-results").innerHTML = html;
    } else {
      document.getElementById(
        "search-results"
      ).innerHTML = `<p class="text-center py-3">❌ No results for "<b>${searchQuery}</b>"</p>`;
    }
    alignSearchContent();
    document.getElementById("search-content").style.display = "block";
  } else {
    document.getElementById("search-content").style.display = "none";
    document.getElementById("search-results").innerHTML = "";
  }
}

function alignSearchContent() {
  const searchEle = document.querySelectorAll("#search");
  if (searchEle.length === 0) return;

  let pos = searchEle[0].getBoundingClientRect();
  document.getElementById("search-content").style.width = window.innerWidth > 768 ? "500px" : "300px";
  document.getElementById("search-content").style.top = pos.top + 50 + "px";
  document.getElementById("search-content").style.left = pos.left + "px";
}

function resetSearch(e) {
  if (
    e.keyCode === 27 ||
    (e.target.id !== "search" && e.target.closest("section#search-content") === null)
  ) {
    if (document.getElementById("search-results").innerHTML !== "") {
      document.getElementById("search-content").style.display = "none";
      document.getElementById("search-results").innerHTML = "";
      document.querySelectorAll("input#search").forEach((el) => {
        el.value = "";
        el.blur();
      });
    }
  }
}

document.onkeyup = (event) => {
  if (event.keyCode === 27) resetSearch(event);
  if (event.keyCode === 75 && event.ctrlKey) document.getElementById("search").focus();
};
