const items = [
  {name:"Mi canal personal", type:"Telegram", desc:"Actualizaciones, publicaciones y novedades de Juan Bello 947.", url:"https://t.me/Juanbell947", icon:"✦"},
  {name:"Tu canal aquí", type:"Telegram", desc:"Espacio preparado para publicar un canal de Telegram.", url:"https://t.me/Juanbell947", icon:"TG"},
  {name:"Tu grupo aquí", type:"Comunidades", desc:"Espacio preparado para publicar un grupo o comunidad.", url:"https://t.me/Juanbell947", icon:"◎"},
  {name:"Tu proyecto aquí", type:"Proyectos", desc:"Promoción informativa de proyectos y páginas seleccionadas.", url:"https://t.me/Juanbell947", icon:"↗"}
];

const directory = document.getElementById("directory");
const empty = document.getElementById("empty");
const search = document.getElementById("search");
let filter = "Todos";

function render(){
  const q = search.value.trim().toLowerCase();
  const data = items.filter(x =>
    (filter === "Todos" || x.type === filter) &&
    (!q || `${x.name} ${x.type} ${x.desc}`.toLowerCase().includes(q))
  );
  directory.innerHTML = data.map(x => `
    <article class="directory-card">
      <div class="card-top"><span class="tag">${x.type}</span><span class="card-icon">${x.icon}</span></div>
      <h3>${x.name}</h3>
      <p>${x.desc}</p>
      <a class="card-link" href="${x.url}" target="_blank" rel="noopener">Abrir enlace ↗</a>
    </article>
  `).join("");
  empty.hidden = data.length !== 0;
}
document.querySelectorAll(".filter").forEach(btn => btn.addEventListener("click", () => {
  document.querySelectorAll(".filter").forEach(b => b.classList.remove("active"));
  btn.classList.add("active"); filter = btn.dataset.filter; render();
}));
search.addEventListener("input", render);
document.getElementById("year").textContent = new Date().getFullYear();
render();
