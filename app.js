 const correctPasswordHash = "a3f77aa0de977dff19a84929f37c53831939c28fdb07ab903a655eed06678273";
        let selectedPhotos = [];
        const maxPhotos = 10;
        const whatsappNumber = "5511981242403"; // Substitua pelo número desejado

        // Gerar fotos de exemplo usando SVGs coloridos
  const photos = [
  "assets/img/Photos-1-001/ft1.jpg","assets/img/Photos-1-001/ft2.jpg","assets/img/Photos-1-001/ft3.jpg","assets/img/Photos-1-001/ft4.jpg","assets/img/Photos-1-001/ft5.jpg","assets/img/Photos-1-001/ft6.jpg","assets/img/Photos-1-001/ft7.jpg","assets/img/Photos-1-001/ft8.jpg","assets/img/Photos-1-001/ft9.jpg","assets/img/Photos-1-001/ft10.jpg",
  "assets/img/Photos-1-001/ft11.jpg","assets/img/Photos-1-001/ft12.jpg","assets/img/Photos-1-001/ft13.jpg","assets/img/Photos-1-001/ft14.jpg","assets/img/Photos-1-001/ft15.jpg","assets/img/Photos-1-001/ft16.jpg","assets/img/Photos-1-001/ft17.jpg","assets/img/Photos-1-001/ft18.jpg","assets/img/Photos-1-001/ft19.jpg","assets/img/Photos-1-001/ft20.jpg",
  "assets/img/Photos-1-001/ft21.jpg","assets/img/Photos-1-001/ft22.jpg","assets/img/Photos-1-001/ft23.jpg","assets/img/Photos-1-001/ft24.jpg","assets/img/Photos-1-001/ft25.jpg","assets/img/Photos-1-001/ft26.jpg","assets/img/Photos-1-001/ft27.jpg","assets/img/Photos-1-001/ft28.jpg","assets/img/Photos-1-001/ft29.jpg","assets/img/Photos-1-001/ft30.jpg",
  "assets/img/Photos-1-001/ft31.jpg","assets/img/Photos-1-001/ft32.jpg","assets/img/Photos-1-001/ft33.jpg","assets/img/Photos-1-001/ft34.jpg","assets/img/Photos-1-001/ft35.jpg","assets/img/Photos-1-001/ft36.jpg","assets/img/Photos-1-001/ft37.jpg","assets/img/Photos-1-001/ft38.jpg","assets/img/Photos-1-001/ft39.jpg","assets/img/Photos-1-001/ft40.jpg",
  "assets/img/Photos-1-001/ft41.jpg","assets/img/Photos-1-001/ft42.jpg","assets/img/Photos-1-001/ft43.jpg","assets/img/Photos-1-001/ft44.jpg","assets/img/Photos-1-001/ft45.jpg","assets/img/Photos-1-001/ft46.jpg","assets/img/Photos-1-001/ft47.jpg","assets/img/Photos-1-001/ft48.jpg","assets/img/Photos-1-001/ft49.jpg","assets/img/Photos-1-001/ft50.jpg",
  "assets/img/Photos-1-001/ft51.jpg","assets/img/Photos-1-001/ft52.jpg","assets/img/Photos-1-001/ft53.jpg","assets/img/Photos-1-001/ft54.jpg","assets/img/Photos-1-001/ft55.jpg","assets/img/Photos-1-001/ft56.jpg","assets/img/Photos-1-001/ft57.heic","assets/img/Photos-1-001/ft58.heic","assets/img/Photos-1-001/ft59.jpg","assets/img/Photos-1-001/ft60.heic",
  "assets/img/Photos-1-001/ft61.heic","assets/img/Photos-1-001/ft62.heic","assets/img/Photos-1-001/ft63.heic","assets/img/Photos-1-001/ft64.heic","assets/img/Photos-1-001/ft65.heic","assets/img/Photos-1-001/ft66.heic","assets/img/Photos-1-001/ft67.jpg","assets/img/Photos-1-001/ft68.jpg","assets/img/Photos-1-001/ft69.jpg","assets/img/Photos-1-001/ft70.jpg",
  "assets/img/Photos-1-001/ft71.heic","assets/img/Photos-1-001/ft72.heic","assets/img/Photos-1-001/ft73.heic","assets/img/Photos-1-001/ft74.heic","assets/img/Photos-1-001/ft75.heic","assets/img/Photos-1-001/ft76.heic","assets/img/Photos-1-001/ft77.heic","assets/img/Photos-1-001/ft78.heic","assets/img/Photos-1-001/ft79.heic","assets/img/Photos-1-001/ft80.heic",
  "assets/img/Photos-1-001/ft81.jpg","assets/img/Photos-1-001/ft82.jpg","assets/img/Photos-1-001/ft83.jpg","assets/img/Photos-1-001/ft84.jpg","assets/img/Photos-1-001/ft85.jpg","assets/img/Photos-1-001/ft86.jpg","assets/img/Photos-1-001/ft87.jpg","assets/img/Photos-1-001/ft88.jpg","assets/img/Photos-1-001/ft89.jpg","assets/img/Photos-1-001/ft90.jpg",
  "assets/img/Photos-1-001/ft91.jpg","assets/img/Photos-1-001/ft92.jpg","assets/img/Photos-1-001/ft93.jpg","assets/img/Photos-1-001/ft94.jpg","assets/img/Photos-1-001/ft95.jpg","assets/img/Photos-1-001/ft96.jpg","assets/img/Photos-1-001/ft97.jpg","assets/img/Photos-1-001/ft98.jpg","assets/img/Photos-1-001/ft99.jpg","assets/img/Photos-1-001/ft100.jpg",
  "assets/img/Photos-1-001/ft101.jpg","assets/img/Photos-1-001/ft102.jpg","assets/img/Photos-1-001/ft103.jpg","assets/img/Photos-1-001/ft104.jpg","assets/img/Photos-1-001/ft105.jpg","assets/img/Photos-1-001/ft106.jpg","assets/img/Photos-1-001/ft107.jpg","assets/img/Photos-1-001/ft108.jpg","assets/img/Photos-1-001/ft109.jpg","assets/img/Photos-1-001/ft110.jpg",
  "assets/img/Photos-1-001/ft111.jpg","assets/img/Photos-1-001/ft112.jpg","assets/img/Photos-1-001/ft113.jpg","assets/img/Photos-1-001/ft114.jpg","assets/img/Photos-1-001/ft115.jpg","assets/img/Photos-1-001/ft116.jpg","assets/img/Photos-1-001/ft117.jpg","assets/img/Photos-1-001/ft118.jpg","assets/img/Photos-1-001/ft119.jpg","assets/img/Photos-1-001/ft120.jpg",
  "assets/img/Photos-1-001/ft121.jpg","assets/img/Photos-1-001/ft122.jpg","assets/img/Photos-1-001/ft123.jpg","assets/img/Photos-1-001/ft124.jpg","assets/img/Photos-1-001/ft125.jpg","assets/img/Photos-1-001/ft126.jpg","assets/img/Photos-1-001/ft127.jpg","assets/img/Photos-1-001/ft128.jpg","assets/img/Photos-1-001/ft129.jpg","assets/img/Photos-1-001/ft130.jpg",
  "assets/img/Photos-1-001/ft131.jpg","assets/img/Photos-1-001/ft132.jpg","assets/img/Photos-1-001/ft133.jpg","assets/img/Photos-1-001/ft134.jpg","assets/img/Photos-1-001/ft135.jpg","assets/img/Photos-1-001/ft136.jpg","assets/img/Photos-1-001/ft137.jpg","assets/img/Photos-1-001/ft138.jpg","assets/img/Photos-1-001/ft139.jpg","assets/img/Photos-1-001/ft140.jpg",
  "assets/img/Photos-1-001/ft141.jpg","assets/img/Photos-1-001/ft142.jpg"
  ]



  async function hashPassword(password) {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(hashBuffer))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

  // -------- Login --------
async function checkPassword() {
  const input = document.getElementById("passwordInput");
  const errorMessage = document.getElementById("errorMessage");

  const hashedInput = await hashPassword(input.value);

  if (hashedInput === correctPasswordHash) {
    document.getElementById("loginScreen").classList.add("hidden");
    document.getElementById("galleryScreen").classList.remove("hidden");
    generateGallery();
  } else {
    errorMessage.classList.remove("hidden");
    input.value = "";
    input.focus();

    hashPassword("15022003").then(console.log);
  }
}

// -------- Galeria --------
let photosPerPage = 20;
let currentPage = 0;

function generateGallery() {
  const grid = document.querySelector(".grid");
  
  // Limpa o grid só na primeira página
  if (currentPage === 0) grid.innerHTML = "";

  const start = currentPage * photosPerPage;
  const end = Math.min(start + photosPerPage, photos.length);

  for (let i = start; i < end; i++) {
    const src = photos[i];
    const photoElement = document.createElement("div");
    photoElement.className = "photo-item relative cursor-pointer rounded-xl overflow-hidden aspect-square shadow-lg";

    photoElement.innerHTML = `
      <img src="${src}" alt="Foto ${i + 1}" class="w-full h-full object-cover" loading="lazy" />
      <div class="absolute top-2 right-2 w-6 h-6 bg-white rounded-full border-2 border-gray-300 hidden" id="check-${i}">
        <svg class="w-4 h-4 text-blue-500 absolute top-0.5 left-0.5" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
        </svg>
      </div>
    `;

    photoElement.onclick = () => togglePhoto(i);
    grid.appendChild(photoElement);
  }

  currentPage++;
}

// Exemplo: carregar mais ao rolar até o fim
window.addEventListener("scroll", () => {
  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 200) {
    if (currentPage * photosPerPage < photos.length) {
      generateGallery();
    }
  }
});
function togglePhoto(photoIndex) {
  const checkElement = document.getElementById(`check-${photoIndex}`);

  if (selectedPhotos.includes(photoIndex)) {
    // Remover seleção
    selectedPhotos = selectedPhotos.filter((id) => id !== photoIndex);
    checkElement.classList.add("hidden");
  } else {
    // Adicionar seleção (até limite)
    if (selectedPhotos.length < maxPhotos) {
      selectedPhotos.push(photoIndex);
      checkElement.classList.remove("hidden");
    }
  }

  updateUI();
}

// -------- UI --------
function updateUI() {
  const countElement = document.getElementById("selectedCount");
  const sendButton = document.getElementById("sendButton");

  countElement.textContent = `${selectedPhotos.length}/${maxPhotos}`;

  if (selectedPhotos.length === maxPhotos) {
    sendButton.disabled = false;
    countElement.classList.add("text-green-400");
    countElement.classList.remove("text-white");
  } else {
    sendButton.disabled = true;
    countElement.classList.remove("text-green-400");
    countElement.classList.add("text-white");
  }
}

// -------- WhatsApp --------
function sendToWhatsApp() {
  if (selectedPhotos.length !== maxPhotos) return;

  const selectedPhotoNames = selectedPhotos
    .map((i) => `Foto ${i + 1}`)
    .join(", ");

  const message = `Olá! Selecionei ${maxPhotos} fotos da galeria: ${selectedPhotoNames}`;
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;

  window.open(whatsappUrl, "_blank");
}

// -------- Login com Enter --------
document.getElementById("passwordInput").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    checkPassword();
  }
});