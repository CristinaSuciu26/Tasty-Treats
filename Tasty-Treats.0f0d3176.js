async function e() {
  try {
    let e = await fetch("/data/masterclasses.json");
    if (!e.ok) throw Error(`Failed to fetch: ${e.status}`);
    let t = await e.json();
    return console.log("Parsed JSON data:", t), t;
  } catch (e) {
    throw (console.error("Error fetching masterclasses:", e), e);
  }
}
const t = () =>
    new Swiper(".swiper", {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: !0,
      autoplay: { delay: 3e3, disableOnInteraction: !1 },
      pagination: { el: ".swiper-pagination", clickable: !0 },
      breakpoints: {
        768: { slidesPerView: 1 },
        1024: { slidesPerView: 1 },
        1280: { slidesPerView: 2 },
      },
    }),
  o = () => {
    let e = document.getElementById("order-now-modal"),
      t = document.getElementById("open-order-now-modal"),
      o = document.getElementById("close-order-now-modal");
    t.addEventListener("click", () => {
      (e.style.display = "block"), (document.body.style.overflow = "hidden");
    }),
      o.addEventListener("click", () => {
        (e.style.display = "none"), (document.body.style.overflow = "auto");
      });
  },
  l = () => {
    let e = document.getElementById("sidebar"),
      t = document.getElementById("close-sidebar");
    document.querySelectorAll("#open-sidebar").forEach((t) => {
      t.addEventListener("click", function () {
        (e.style.display = "flex"),
          console.log("openSidebar clicked"),
          console.log("Sidebar style:", e.style.display);
      });
    }),
      t.addEventListener("click", function () {
        e.style.display = "none";
      });
    let o = () => {
      window.innerWidth > 768 && (e.style.display = "none");
    };
    window.addEventListener("resize", o), o();
  },
  d = () => {
    let e = document.querySelectorAll(
        "#theme-toggle-light, #theme-toggle-dark, #theme-toggle-sidebar"
      ),
      t = document.getElementById("dark-theme-logo"),
      o = document.getElementById("light-theme-logo"),
      l = (e) => {
        (t.style.display = e ? "flex" : "none"),
          (o.style.display = e ? "none" : "flex");
      },
      d = localStorage.getItem("theme"),
      n = window.matchMedia("(prefers-color-scheme: dark)").matches,
      a = "dark" === d || (!d && n);
    document.body.classList.toggle("dark-theme", a),
      l(a),
      e.forEach((t) => {
        (t.checked = a),
          t.addEventListener("change", () => {
            let t = document.body.classList.toggle("dark-theme");
            l(t),
              e.forEach((e) => {
                e.checked = t;
              }),
              localStorage.setItem("theme", t ? "dark" : "light");
          });
      });
  };
document.addEventListener("DOMContentLoaded", function () {
  try {
    e()
      .then((e) => {
        console.log("Parsed JSON data:", e);
        let o = document.getElementById("masterclass-list");
        e.forEach((e) => {
          let t = document.createElement("div");
          t.classList.add("masterclass-item", "swiper-slide");
          let l = document.createElement("div");
          l.classList.add("image-container");
          let d = document.createElement("img");
          (d.src = e.cook.imgUrl),
            (d.alt = e.cook.name),
            d.classList.add("chef-img"),
            t.appendChild(d);
          let n = document.createElement("img");
          (n.src = e.topic.imgUrl),
            n.classList.add("food-img"),
            l.appendChild(n);
          let a = document.createElement("p");
          (a.textContent = e.topic.name),
            a.classList.add("topic-name"),
            l.appendChild(a),
            t.appendChild(l),
            o.appendChild(t);
        }),
          setTimeout(() => {
            t().update();
          }, 100);
      })
      .catch((e) => {
        console.error("Error fetching masterclasses:", e);
      }),
      d(),
      l(),
      o();
  } catch (e) {
    console.error("Error in script:", e);
  }
});
//# sourceMappingURL=Tasty-Treats.0f0d3176.js.map
