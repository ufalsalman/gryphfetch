(function () {
  const container = document.getElementById("download-config");

  if (!container) return;

  const baseUrl = container.dataset.baseUrl;
  const fileName = container.dataset.fileName;
  const parts = parseInt(container.dataset.parts, 10);

  const list = document.getElementById("links");
  if (!list) return;

  for (let i = 1; i <= parts; i++) {
    const partNumber = String(i).padStart(3, "0");

    const fullName = `${fileName}.${partNumber}`;
    const fullUrl = `${baseUrl}/${fullName}`;

    const li = document.createElement("li");
    const a = document.createElement("a");

    a.href = fullUrl;
    a.textContent = fullName;
    a.target = "_blank";
    a.rel = "noopener";

    li.appendChild(a);
    list.appendChild(li);
  }
})();
