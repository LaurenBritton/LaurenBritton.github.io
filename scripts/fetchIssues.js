// Shows titles of open issues labelled `task`
(async () => {
  const ul = document.getElementById("issues");
  if (!ul) return;

  const res = await fetch("https://api.github.com/repos/LaurenBritton/your-repo-name/issues?labels=task&state=open");
  const issues = await res.json();

  issues.forEach(issue => {
    const li = document.createElement("li");
    li.innerHTML = `<a href="${issue.html_url}" target="_blank">${issue.title}</a>`;
    ul.appendChild(li);
  });
})();
