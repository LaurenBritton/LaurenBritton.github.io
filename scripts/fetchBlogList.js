// Creates a bulleted list of every .html file inside /blog/
(async () => {
  const list = document.getElementById("blog-list");
  if (!list) return;

  const res = await fetch("https://api.github.com/repos/LaurenBritton/your-repo-name/contents/blog");
  const files = await res.json();

  files
    .filter(f => f.name.endsWith(".html"))
    .sort((a, b) => new Date(b.last_modified) - new Date(a.last_modified))
    .forEach(f => {
      const li = document.createElement("li");
      li.innerHTML = `<a href="blog/${f.name}">${f.name.replace(/[-_]/g, " ").replace(".html", "")}</a>`;
      list.appendChild(li);
    });
})();