 const correctPassword = "15022003";
        let selectedPhotos = [];
        const maxPhotos = 10;
        const whatsappNumber = "5511999999999"; // Substitua pelo número desejado

        // Gerar fotos de exemplo usando SVGs coloridos
        const photos = [];
        const colors = [
            'from-red-400 to-pink-500', 'from-blue-400 to-purple-500', 'from-green-400 to-teal-500',
            'from-yellow-400 to-orange-500', 'from-purple-400 to-indigo-500', 'from-pink-400 to-rose-500',
            'from-indigo-400 to-blue-500', 'from-teal-400 to-cyan-500', 'from-orange-400 to-red-500',
            'from-cyan-400 to-blue-500', 'from-rose-400 to-pink-500', 'from-lime-400 to-green-500',
            'from-violet-400 to-purple-500', 'from-amber-400 to-yellow-500', 'from-emerald-400 to-teal-500',
            'from-sky-400 to-blue-500', 'from-fuchsia-400 to-pink-500', 'from-slate-400 to-gray-500',
            'from-red-500 to-orange-500', 'from-blue-500 to-indigo-500', 'from-green-500 to-emerald-500',
            'from-purple-500 to-violet-500', 'from-pink-500 to-rose-500', 'from-yellow-500 to-amber-500'
        ];

        for (let i = 1; i <= 24; i++) {
            photos.push({
                id: i,
                gradient: colors[i - 1],
                name: `Foto ${i}`
            });
        }

        function checkPassword() {
            const input = document.getElementById('passwordInput');
            const errorMessage = document.getElementById('errorMessage');
            
            if (input.value === correctPassword) {
                document.getElementById('loginScreen').classList.add('hidden');
                document.getElementById('galleryScreen').classList.remove('hidden');
                generateGallery();
            } else {
                errorMessage.classList.remove('hidden');
                input.value = '';
                input.focus();
            }
        }

        function generateGallery() {
            const grid = document.querySelector('.grid');
            grid.innerHTML = '';
            
            photos.forEach(photo => {
                const photoElement = document.createElement('div');
                photoElement.className = `photo-item relative cursor-pointer rounded-xl overflow-hidden aspect-square bg-gradient-to-br ${photo.gradient} shadow-lg`;
                photoElement.onclick = () => togglePhoto(photo.id);
                
                photoElement.innerHTML = `
                    <div class="absolute inset-0 flex items-center justify-center">
                        <svg class="w-12 h-12 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                        </svg>
                    </div>
                    <div class="absolute bottom-2 left-2 text-white text-sm font-medium bg-black/30 px-2 py-1 rounded">
                        ${photo.name}
                    </div>
                    <div class="absolute top-2 right-2 w-6 h-6 bg-white rounded-full border-2 border-gray-300 hidden" id="check-${photo.id}">
                        <svg class="w-4 h-4 text-blue-500 absolute top-0.5 left-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                        </svg>
                    </div>
                `;
                
                grid.appendChild(photoElement);
            });
        }

        function togglePhoto(photoId) {
            const photoElement = document.querySelector(`.photo-item:nth-child(${photoId})`);
            const checkElement = document.getElementById(`check-${photoId}`);
            
            if (selectedPhotos.includes(photoId)) {
                // Remover seleção
                selectedPhotos = selectedPhotos.filter(id => id !== photoId);
                photoElement.classList.remove('photo-selected');
                checkElement.classList.add('hidden');
            } else {
                // Adicionar seleção (se não exceder o limite)
                if (selectedPhotos.length < maxPhotos) {
                    selectedPhotos.push(photoId);
                    photoElement.classList.add('photo-selected');
                    checkElement.classList.remove('hidden');
                }
            }
            
            updateUI();
        }

        function updateUI() {
            const countElement = document.getElementById('selectedCount');
            const sendButton = document.getElementById('sendButton');
            
            countElement.textContent = `${selectedPhotos.length}/${maxPhotos}`;
            
            if (selectedPhotos.length === maxPhotos) {
                sendButton.disabled = false;
                countElement.classList.add('text-green-400');
                countElement.classList.remove('text-white');
            } else {
                sendButton.disabled = true;
                countElement.classList.remove('text-green-400');
                countElement.classList.add('text-white');
            }
        }

        function sendToWhatsApp() {
            if (selectedPhotos.length !== maxPhotos) return;
            
            const selectedPhotoNames = selectedPhotos.map(id => `Foto ${id}`).join(', ');
            const message = `Olá! Selecionei ${maxPhotos} fotos da galeria: ${selectedPhotoNames}`;
            const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
            
            window.open(whatsappUrl, '_blank');
        }

        // Permitir login com Enter
        document.getElementById('passwordInput').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                checkPassword();
            }
        });