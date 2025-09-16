document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById("search");
  
    searchInput.addEventListener("input", function() {
      const searchText = searchInput.value.toLowerCase();
      const caseAnchors = document.querySelectorAll(".entry");
  
      caseAnchors.forEach(function(caseAnchor) {
        const div = caseAnchor.querySelector("div");
        const spans = div.querySelectorAll("span");
        let matchFound = false;
        spans.forEach(function(span) {
          const text = span.textContent.toLowerCase();
          if (text.includes(searchText)) {
            matchFound = true;
          }
        });
        if (matchFound) {
          caseAnchor.style.display = "block";
        } else {
          caseAnchor.style.display = "none";
        }
      });
    });
  });