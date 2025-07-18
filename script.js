const toggleButton = document.getElementById("toggle-dark-mode");

toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  // Simpan preferensi user ke local storage
  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});

// Saat halaman dibuka, cek preferensi user
window.addEventListener("load", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark");
  }
});
// Untuk animasi fade saat scroll
const sections = document.querySelectorAll('.fade-section');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.1
});

sections.forEach(section => {
  observer.observe(section);
});
// Hapus efek blink setelah animasi selesai
const judul = document.getElementById("judul");

setTimeout(() => {
  judul.classList.remove("typing-cursor");

  // Tambahan: hapus garis "|" sepenuhnya
  judul.style.borderRight = "none";
}, 1600); // waktu ini harus sama dengan durasi animasi typing
