// ========================================
// GLOBAL VARIABLES
// ========================================
// Lista de fotos - 292 fotos válidas de la sesión previa
const PHOTO_FILES = ['DJI_20251123155400_0009_D.JPG', 'DJI_20251123155404_0010_D.JPG', 'DJI_20251123155406_0011_D.JPG', 'DJI_20251123155409_0012_D.JPG', 'DJI_20251123155411_0013_D.JPG', 'DJI_20251123155414_0014_D.JPG', 'DJI_20251123155416_0015_D.JPG', 'DJI_20251123155418_0016_D.JPG', 'DJI_20251123155432_0017_D.JPG', 'DJI_20251123155434_0018_D.JPG', 'DJI_20251123155437_0019_D.JPG', 'DJI_20251123155442_0020_D.JPG', 'DJI_20251123155445_0021_D.JPG', 'DJI_20251123162137_0022_D.JPG', 'DJI_20251123162140_0023_D.JPG', 'DJI_20251123162202_0024_D.JPG', 'DJI_20251123162208_0025_D.JPG', 'DJI_20251123162210_0026_D.JPG', 'DJI_20251123162211_0027_D.JPG', 'DJI_20251123162222_0028_D.JPG', 'DJI_20251123162224_0029_D.JPG', 'DJI_20251123162225_0030_D.JPG', 'DJI_20251123164521_0031_D.JPG', 'DJI_20251123164524_0032_D.JPG', 'DJI_20251123164526_0033_D.JPG', 'DJI_20251123164528_0034_D.JPG', 'DJI_20251123164530_0035_D.JPG', 'DJI_20251123164531_0036_D.JPG', 'DJI_20251123164532_0037_D.JPG', 'DJI_20251123164533_0038_D.JPG', 'DJI_20251123164535_0039_D.JPG', 'DJI_20251123164536_0040_D.JPG', 'DJI_20251123164538_0041_D.JPG', 'DJI_20251123164539_0042_D.JPG', 'DJI_20251123164540_0043_D.JPG', 'DJI_20251123164542_0044_D.JPG', 'DJI_20251123164543_0045_D.JPG', 'DJI_20251123164544_0046_D.JPG', 'DJI_20251123164547_0047_D.JPG', 'DJI_20251123164549_0048_D.JPG', 'DJI_20251123164551_0049_D.JPG', 'DJI_20251123164552_0050_D.JPG', 'DJI_20251123164554_0051_D.JPG', 'DJI_20251123164555_0052_D.JPG', 'DJI_20251123164556_0053_D.JPG', 'DJI_20251123164557_0054_D.JPG', 'DJI_20251123164558_0055_D.JPG', 'DJI_20251123164600_0056_D.JPG', 'DJI_20251123164601_0057_D.JPG', 'DJI_20251123164624_0058_D.JPG', 'DJI_20251123164625_0059_D.JPG', 'DJI_20251123164627_0060_D.JPG', 'DJI_20251123164632_0061_D.JPG', 'DJI_20251123164633_0062_D.JPG', 'DJI_20251123164634_0063_D.JPG', 'DJI_20251123164637_0064_D.JPG', 'DJI_20251123164639_0065_D.JPG', 'DJI_20251123164641_0066_D.JPG', 'DJI_20251123164643_0067_D.JPG', 'DJI_20251123164646_0068_D.JPG', 'DJI_20251123164648_0069_D.JPG', 'DJI_20251123164650_0070_D.JPG', 'DJI_20251123164758_0071_D.JPG', 'DJI_20251123164923_0072_D.JPG', 'DJI_20251123165618_0073_D.JPG', 'DJI_20251123165633_0074_D.JPG', 'DJI_20251123165643_0075_D.JPG', 'DJI_20251123165644_0076_D.JPG', 'DJI_20251123165647_0077_D.JPG', 'DJI_20251123165649_0078_D.JPG', 'DJI_20251123165700_0079_D.JPG', 'DJI_20251123165701_0080_D.JPG', 'DJI_20251123_154752_363.JPG', 'DJI_20251123_154830_763.JPG', 'DJI_20251123_154847_278.JPG', 'DJI_20251123_154907_649.JPG', 'DJI_20251123_154910_513.JPG', 'DJI_20251123_154914_984.JPG', 'DJI_20251123_154917_143.JPG', 'DJI_20251123_155002_323.JPG', 'DJI_20251123_155005_412.JPG', 'DJI_20251123_155037_213.JPG', 'DJI_20251123_155045_375.JPG', 'DJI_20251123_155050_115.JPG', 'DJI_20251123_155207_770.JPG', 'DJI_20251123_155211_399.JPG', 'DJI_20251123_155214_175.JPG', 'DJI_20251123_160519_285.JPG', 'DJI_20251123_160527_956.JPG', 'DJI_20251123_160532_426.JPG', 'DJI_20251123_160538_216.JPG', 'DJI_20251123_160541_934.JPG', 'DJI_20251123_160929_934.JPG', 'DJI_20251123_160932_439.JPG', 'DJI_20251123_160935_229.JPG', 'DJI_20251123_160937_944.JPG', 'DJI_20251123_160942_023.JPG', 'DJI_20251123_160944_889.JPG', 'DJI_20251123_161529_300.JPG', 'DJI_20251123_161533_182.JPG', 'DJI_20251123_161535_764.JPG', 'DJI_20251123_161539_124.JPG', 'DJI_20251123_161612_275.JPG', 'DJI_20251123_161614_645.JPG', 'DJI_20251123_162257_504.JPG', 'DJI_20251123_164048_965.JPG', 'DJI_20251123_164057_711.JPG', 'DJI_20251123_164102_211.JPG', 'DJI_20251123_164104_773.JPG', 'DJI_20251123_164107_612.JPG', 'DJI_20251123_164110_071.JPG', 'DJI_20251123_164112_456.JPG', 'DJI_20251123_164115_336.JPG', 'DJI_20251123_164118_381.JPG', 'DJI_20251123_164121_321.JPG', 'DJI_20251123_164126_811.JPG', 'DJI_20251123_164132_884.JPG', 'DJI_20251123_164136_783.JPG', 'DJI_20251123_164139_935.JPG', 'DJI_20251123_164142_425.JPG', 'DJI_20251123_164144_720.JPG', 'DJI_20251123_164147_060.JPG', 'DJI_20251123_164149_205.JPG', 'DJI_20251123_164151_755.JPG', 'DJI_20251123_164154_515.JPG', 'DJI_20251123_164156_958.JPG', 'DJI_20251123_164159_914.JPG', 'DJI_20251123_164206_425.JPG', 'DJI_20251123_164208_914.JPG', 'DJI_20251123_164212_964.JPG', 'DJI_20251123_164215_155.JPG', 'DJI_20251123_164218_064.JPG', 'DJI_20251123_164223_014.JPG', 'DJI_20251123_164230_019.JPG', 'DJI_20251123_164234_219.JPG', 'DJI_20251123_164240_819.JPG', 'DJI_20251123_164244_748.JPG', 'DJI_20251123_164247_345.JPG', 'DJI_20251123_164249_518.JPG', 'DJI_20251123_164251_979.JPG', 'DJI_20251123_164254_242.JPG', 'DJI_20251123_164257_664.JPG', 'DJI_20251123_164300_018.JPG', 'DJI_20251123_164302_059.JPG', 'DJI_20251123_164305_074.JPG', 'DJI_20251123_164307_669.JPG', 'DJI_20251123_164310_473.JPG', 'DJI_20251123_164334_940.JPG', 'DJI_20251123_164342_273.JPG', 'DJI_20251123_164344_582.JPG', 'DJI_20251123_164349_937.JPG', 'DJI_20251123_164352_788.JPG', 'DJI_20251123_164356_043.JPG', 'DJI_20251123_164359_672.JPG', 'DJI_20251123_164402_116.JPG', 'DJI_20251123_164405_162.JPG', 'DJI_20251123_164407_172.JPG', 'DJI_20251123_164410_532.JPG', 'DJI_20251123_164412_975.JPG', 'DJI_20251123_164416_096.JPG', 'DJI_20251123_164419_966.JPG', 'DJI_20251123_164423_178.JPG', 'DJI_20251123_164426_432.JPG', 'DJI_20251123_164430_422.JPG', 'DJI_20251123_164433_405.JPG', 'DJI_20251123_164437_246.JPG', 'DJI_20251123_164444_040.JPG', 'DJI_20251123_164446_876.JPG', 'DJI_20251123_164449_758.JPG', 'DSC_5375.JPG', 'DSC_5376.JPG', 'DSC_5377.JPG', 'DSC_5378.JPG', 'DSC_5379.JPG', 'DSC_5380.JPG', 'DSC_5381.JPG', 'DSC_5382.JPG', 'DSC_5383.JPG', 'DSC_5384.JPG', 'DSC_5385.JPG', 'DSC_5386.JPG', 'DSC_5387.JPG', 'DSC_5388.JPG', 'DSC_5389.JPG', 'DSC_5390.JPG', 'DSC_5391.JPG', 'DSC_5392.JPG', 'DSC_5393.JPG', 'DSC_5394.JPG', 'DSC_5395.JPG', 'DSC_5396.JPG', 'DSC_5397.JPG', 'DSC_5398.JPG', 'DSC_5399.JPG', 'DSC_5400.JPG', 'DSC_5401.JPG', 'DSC_5402.JPG', 'DSC_5403.JPG', 'DSC_5404.JPG', 'DSC_5405.JPG', 'DSC_5406.JPG', 'DSC_5407.JPG', 'DSC_5408.JPG', 'DSC_5409.JPG', 'DSC_5410.JPG', 'DSC_5411.JPG', 'DSC_5412.JPG', 'DSC_5413.JPG', 'DSC_5414.JPG', 'DSC_5415.JPG', 'DSC_5416.JPG', 'DSC_5417.JPG', 'DSC_5418.JPG', 'DSC_5419.JPG', 'DSC_5420.JPG', 'DSC_5421.JPG', 'DSC_5422.JPG', 'DSC_5423.JPG', 'DSC_5424.JPG', 'DSC_5425.JPG', 'DSC_5426.JPG', 'DSC_5427.JPG', 'DSC_5428.JPG', 'DSC_5429.JPG', 'DSC_5430.JPG', 'DSC_5431.JPG', 'DSC_5432.JPG', 'DSC_5433.JPG', 'DSC_5434.JPG', 'DSC_5435.JPG', 'DSC_5436.JPG', 'DSC_5437.JPG', 'DSC_5438.JPG', 'DSC_5439.JPG', 'DSC_5440.JPG', 'DSC_5441.JPG', 'DSC_5442.JPG', 'DSC_5443.JPG', 'DSC_5444.JPG', 'DSC_5445.JPG', 'DSC_5446.JPG', 'DSC_5447.JPG', 'DSC_5448.JPG', 'DSC_5449.JPG', 'DSC_5450.JPG', 'DSC_5451.JPG', 'DSC_5452.JPG', 'DSC_5453.JPG', 'DSC_5454.JPG', 'DSC_5455.JPG', 'DSC_5456.JPG', 'DSC_5457.JPG', 'DSC_5458.JPG', 'DSC_5459.JPG', 'DSC_5460.JPG', 'DSC_5461.JPG', 'DSC_5462.JPG', 'DSC_5463.JPG', 'DSC_5464.JPG', 'DSC_5465.JPG', 'DSC_5466.JPG', 'DSC_5467.JPG', 'DSC_5468.JPG', 'DSC_5469.JPG', 'DSC_5470.JPG', 'DSC_5471.JPG', 'DSC_5472.JPG', 'DSC_5473.JPG', 'DSC_5474.JPG', 'DSC_5475.JPG', 'DSC_5476.JPG', 'DSC_5477.JPG', 'DSC_5478.JPG', 'DSC_5479.JPG', 'DSC_5480.JPG', 'DSC_5481.JPG', 'DSC_5482.JPG', 'DSC_5483.JPG', 'DSC_5484.JPG', 'DSC_5485.JPG', 'DSC_5486.JPG', 'DSC_5487.JPG', 'DSC_5488.JPG', 'DSC_5489.JPG', 'DSC_5490.JPG', 'DSC_5491.JPG', 'DSC_5492.JPG', 'DSC_5493.JPG', 'DSC_5494.JPG', 'DSC_5495.JPG', 'DSC_5496.JPG', 'DSC_5497.JPG'];

const photos = PHOTO_FILES.map(filename => `fotos/${filename}`);

// LIMITS FOR ISIS'S PACKAGE
const LIMITS = {
    impresion: 100,    // Máximo 80 fotos para impresión
    ampliacion: 1     // Máximo 1 foto para ampliación
    // redes_sociales: sin límite
    // web: sin límite
};

const STORAGE_KEY = 'maria_esther_xv_photo_selections';
let photoSelections = {};
let currentPhotoIndex = null;
let currentFilter = 'all';

// ========================================
// LOCAL STORAGE FUNCTIONS
// ========================================
function loadSelections() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            photoSelections = JSON.parse(saved);
            console.log('Selecciones cargadas desde localStorage:', photoSelections);
        }
    } catch (error) {
        console.error('Error cargando selecciones:', error);
        photoSelections = {};
    }
}

function saveSelections() {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(photoSelections));
        console.log('Selecciones guardadas en localStorage');
    } catch (error) {
        console.error('Error guardando selecciones:', error);
        showToast('Error al guardar. Verifica el espacio del navegador.', 'error');
    }
}

function clearAllSelections() {
    if (confirm('¿Estás segura de que quieres borrar TODAS las selecciones? Esta acción no se puede deshacer.')) {
        photoSelections = {};
        saveSelections();
        renderGallery();
        updateStats();
        updateFilterButtons();
        showToast('Todas las selecciones han sido eliminadas', 'success');
    }
}

// ========================================
// STATS FUNCTIONS
// ========================================
function getStats() {
    const stats = {
        ampliacion: 0,
        impresion: 0,
        redes_sociales: 0,
        descartada: 0,
        sinClasificar: photos.length
    };

    Object.values(photoSelections).forEach(selection => {
        if (selection.ampliacion) stats.ampliacion++;
        if (selection.impresion) stats.impresion++;
        if (selection.redes_sociales) stats.redes_sociales++;
        if (selection.descartada) stats.descartada++;
    });

    stats.sinClasificar = photos.length - Object.keys(photoSelections).length;

    return stats;
}

function updateStats() {
    const stats = getStats();

    // Update counters
    document.getElementById('countAmpliacion').textContent = stats.ampliacion;
    document.getElementById('countImpresion').textContent = stats.impresion;
    document.getElementById('countRedesSociales').textContent = stats.redes_sociales;
    document.getElementById('countDescartada').textContent = stats.descartada;
    document.getElementById('countSinClasificar').textContent = stats.sinClasificar;

    // Add warning class if limits exceeded
    const ampliacionCard = document.querySelector('.stat-card.ampliacion');
    const impresionCard = document.querySelector('.stat-card.impresion');

    if (ampliacionCard) {
        if (stats.ampliacion > LIMITS.ampliacion) {
            ampliacionCard.classList.add('exceeded');
        } else {
            ampliacionCard.classList.remove('exceeded');
        }
    }

    if (impresionCard) {
        if (stats.impresion > LIMITS.impresion) {
            impresionCard.classList.add('exceeded');
        } else {
            impresionCard.classList.remove('exceeded');
        }
    }
}

// ========================================
// GALLERY FUNCTIONS
// ========================================
function renderGallery() {
    const grid = document.getElementById('photosGrid');
    grid.innerHTML = '';

    photos.forEach((photo, index) => {
        const selection = photoSelections[index] || {};
        const hasAny = selection.ampliacion || selection.impresion || selection.redes_sociales || selection.descartada;

        const card = document.createElement('div');
        card.className = 'photo-card';
        card.dataset.index = index;

        // Add category classes
        if (selection.descartada) {
            card.classList.add('has-descartada');
        } else {
            const categories = [];
            if (selection.ampliacion) categories.push('ampliacion');
            if (selection.impresion) categories.push('impresion');
            if (selection.redes_sociales) categories.push('redes_sociales');
            
            if (categories.length > 1) {
                card.classList.add('has-multiple');
            } else if (categories.length === 1) {
                card.classList.add(`has-${categories[0]}`);
            }
        }

        // Build badges HTML
        let badgesHTML = '';
        if (hasAny) {
            badgesHTML = '<div class="photo-badges">';
            if (selection.ampliacion) badgesHTML += '<span class="badge badge-ampliacion">🖼️ Ampliación</span>';
            if (selection.impresion) badgesHTML += '<span class="badge badge-impresion">📸 Fotolibro</span>';
            if (selection.redes_sociales) badgesHTML += '<span class="badge badge-redes-sociales">📱 Redes</span>';
            if (selection.descartada) badgesHTML += '<span class="badge badge-descartada">❌ Descartada</span>';
            badgesHTML += '</div>';
        }

        card.innerHTML = `
            <div class="photo-image-container">
                <img src="${photo}" alt="Foto ${index + 1}" loading="lazy">
            </div>
            <div class="photo-number">Foto ${index + 1}</div>
            ${badgesHTML}
        `;

        card.addEventListener('click', () => openModal(index));
        grid.appendChild(card);
    });

    applyFilter();
}

// ========================================
// FILTER FUNCTIONS
// ========================================
function isPhotoVisible(index) {
    const selection = photoSelections[index] || {};
    let show = false;

    switch (currentFilter) {
        case 'all':
            show = true;
            break;
        case 'ampliacion':
            show = selection.ampliacion === true;
            break;
        case 'impresion':
            show = selection.impresion === true;
            break;
        case 'redes_sociales':
            show = selection.redes_sociales === true;
            break;
case 'descartada':
            show = selection.descartada === true;
            break;
        case 'sin_clasificar':
            show = !selection.ampliacion && !selection.impresion && !selection.redes_sociales && !selection.descartada;
            break;
    }
    return show;
}

function applyFilter() {
    const cards = document.querySelectorAll('.photo-card');

    cards.forEach(card => {
        const index = parseInt(card.dataset.index);
        card.classList.toggle('hidden', !isPhotoVisible(index));
    });
}

function setFilter(filter) {
    console.log('Setting filter to:', filter);
    currentFilter = filter;
    applyFilter();

    // Update button states
    document.querySelectorAll('.btn-filter').forEach(btn => {
        btn.classList.remove('active');
    });

    const activeBtn = document.querySelector(`[data-filter="${filter}"]`);
    if (activeBtn) {
        activeBtn.classList.add('active');
    }
}

function updateFilterButtons() {
    const stats = getStats();

    document.getElementById('btnFilterAll').textContent = `Todas (${photos.length})`;
    document.getElementById('btnFilterAmpliacion').textContent = `Ampliación (${stats.ampliacion}/${LIMITS.ampliacion})`;
    document.getElementById('btnFilterImpresion').textContent = `Fotolibro (${stats.impresion}/${LIMITS.impresion})`;
    document.getElementById('btnFilterRedesSociales').textContent = `Redes (${stats.redes_sociales})`;
    document.getElementById('btnFilterDescartada').textContent = `Descartadas (${stats.descartada})`;
    document.getElementById('btnFilterSinClasificar').textContent = `Sin Clasificar (${stats.sinClasificar})`;
}

function findNextVisiblePhoto(startIndex, direction) {
    let newIndex = startIndex;
    const totalPhotos = photos.length;

    if (direction === 'next') {
        for (let i = startIndex + 1; i < totalPhotos; i++) {
            if (isPhotoVisible(i)) {
                return i;
            }
        }
    } else { // 'prev'
        for (let i = startIndex - 1; i >= 0; i--) {
            if (isPhotoVisible(i)) {
                return i;
            }
        }
    }

    return null;
}

// ========================================
// MODAL FUNCTIONS
// ========================================
function openModal(index) {
    currentPhotoIndex = index;
    const modal = document.getElementById('photoModal');
    const modalImage = document.getElementById('modalImage');
    const modalPhotoNumber = document.getElementById('modalPhotoNumber');

    modalImage.src = photos[index];
    modalPhotoNumber.textContent = `Foto ${index + 1}`;

    // Load current selections
    const selection = photoSelections[index] || {};

    document.querySelectorAll('.option-btn').forEach(btn => {
        const category = btn.dataset.category;
        btn.classList.toggle('selected', selection[category] === true);
    });

    // Update navigation button states
    updateNavigationButtons();

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function updateNavigationButtons() {
    const btnPrev = document.getElementById('btnPrevPhoto');
    const btnNext = document.getElementById('btnNextPhoto');

    if (btnPrev && btnNext) {
        const prevIndex = findNextVisiblePhoto(currentPhotoIndex, 'prev');
        const nextIndex = findNextVisiblePhoto(currentPhotoIndex, 'next');

        btnPrev.disabled = prevIndex === null;
        btnPrev.style.opacity = prevIndex === null ? '0.3' : '1';
        btnPrev.style.cursor = prevIndex === null ? 'not-allowed' : 'pointer';

        btnNext.disabled = nextIndex === null;
        btnNext.style.opacity = nextIndex === null ? '0.3' : '1';
        btnNext.style.cursor = nextIndex === null ? 'not-allowed' : 'pointer';
    }
}

function hasUnsavedChanges() {
    if (currentPhotoIndex === null) return false;

    const savedSelection = photoSelections[currentPhotoIndex] || {};
    const currentSelection = {};
    document.querySelectorAll('.option-btn.selected').forEach(btn => {
        currentSelection[btn.dataset.category] = true;
    });

    const savedKeys = Object.keys(savedSelection).filter(k => savedSelection[k]);
    const currentKeys = Object.keys(currentSelection);

    if (savedKeys.length !== currentKeys.length) return true;

    const allKeys = new Set([...savedKeys, ...currentKeys]);

    for (const key of allKeys) {
        if (!!savedSelection[key] !== !!currentSelection[key]) {
            return true;
        }
    }

    return false;
}

function navigatePhoto(direction) {
    if (currentPhotoIndex === null) return;

    const proceed = () => {
        const newIndex = findNextVisiblePhoto(currentPhotoIndex, direction);

        if (newIndex !== null) {
            currentPhotoIndex = newIndex;
            const modalImage = document.getElementById('modalImage');
            const modalPhotoNumber = document.getElementById('modalPhotoNumber');

            modalImage.src = photos[newIndex];
            modalPhotoNumber.textContent = `Foto ${newIndex + 1}`;

            const selection = photoSelections[newIndex] || {};
            document.querySelectorAll('.option-btn').forEach(btn => {
                const category = btn.dataset.category;
                btn.classList.toggle('selected', selection[category] === true);
            });

            updateNavigationButtons();
        }
    };

    if (hasUnsavedChanges()) {
        if (confirm('¿Deseas guardar los cambios antes de continuar?')) {
            saveModalSelection(proceed);
        } else {
            proceed();
        }
    } else {
        proceed();
    }
}

function closeModal() {
    const doClose = () => {
        const modal = document.getElementById('photoModal');
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
        currentPhotoIndex = null;
    };

    if (hasUnsavedChanges()) {
        if (confirm('¿Deseas guardar los cambios antes de salir?')) {
            saveModalSelection(doClose);
        } else {
            doClose();
        }
    } else {
        doClose();
    }
}

function saveModalSelection(callback) {
    if (currentPhotoIndex === null) return;

    const selectedCategories = {};
    let hasAnySelection = false;

    document.querySelectorAll('.option-btn').forEach(btn => {
        const category = btn.dataset.category;
        const isSelected = btn.classList.contains('selected');
        selectedCategories[category] = isSelected;
        if (isSelected) hasAnySelection = true;
    });

    // Only save if there's at least one selection
    if (hasAnySelection) {
        photoSelections[currentPhotoIndex] = selectedCategories;
    } else {
        // Remove from selections if nothing is selected
        delete photoSelections[currentPhotoIndex];
    }

    saveSelections();
    renderGallery();
    updateStats();
    updateFilterButtons();
    showToast('Selección guardada correctamente', 'success');

    if (callback && typeof callback === 'function') {
        callback();
    } else {
        closeModal();
    }
}

// ========================================
// EXPORT FUNCTIONS
// ========================================
function exportToJSON() {
    const exportData = {
        INSTRUCCIONES: '⚠️ IMPORTANTE: Por favor envía este archivo por WhatsApp al 4779203776',
        whatsapp: '4779203776',
        fecha_exportacion: new Date().toISOString(),
        total_fotos: photos.length,
        estadisticas: getStats(),
        selecciones: []
    };

    photos.forEach((photo, index) => {
        const selection = photoSelections[index];
        if (selection && (selection.ampliacion || selection.impresion || selection.redes_sociales || selection.descartada)) {
            exportData.selecciones.push({
                numero_foto: index + 1,
                archivo: PHOTO_FILES[index],
                ampliacion: selection.ampliacion || false,
                impresion: selection.impresion || false,
                redes_sociales: selection.redes_sociales || false,
                descartada: selection.descartada || false
            });
        }
    });

    const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `seleccion-isis-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);

    showToast('📥 Reporte descargado. ¡Envíalo por WhatsApp al 4779203776!', 'success');
}

function generateTextSummary() {
    const stats = getStats();
    let summary = '📸 SELECCIÓN DE FOTOS - XV AÑOS ISIS FRANCIA SARABI\n';
    summary += '═══════════════════════════════════════\n\n';
    summary += `📊 RESUMEN GENERAL:\n`;
    summary += `   Total de fotos: ${photos.length}\n`;
    summary += `   🖼️  Para ampliación: ${stats.ampliacion}\n`;
    summary += `   📸 Para impresión: ${stats.impresion}\n`;
    summary += `   📱 Para redes sociales: ${stats.redes_sociales}\n`;
    summary += `   🌐 Para web: ${stats.web}\n`;
    summary += `   ❌ Descartadas: ${stats.descartada}\n`;
    summary += `   ⭕ Sin clasificar: ${stats.sinClasificar}\n\n`;

    const categories = ['ampliacion', 'impresion', 'redes_sociales', 'descartada'];
    const categoryNames = {
        ampliacion: '🖼️  AMPLIACIÓN',
        impresion: '📸 IMPRESIÓN',
        redes_sociales: '📱 REDES SOCIALES',
        web: '🌐 WEB',
        descartada: '❌ DESCARTADAS'
    };

    categories.forEach(category => {
        const photosInCategory = [];
        photos.forEach((photo, index) => {
            const selection = photoSelections[index];
            if (selection && selection[category]) {
                photosInCategory.push(index + 1);
            }
        });

        if (photosInCategory.length > 0) {
            summary += `${categoryNames[category]}:\n`;
            summary += `   Fotos: ${photosInCategory.join(', ')}\n`;
            summary += `   Total: ${photosInCategory.length}\n\n`;
        }
    });

    summary += `\n📅 Generado el: ${new Date().toLocaleString('es-MX')}\n`;
    summary += `\n📱 WhatsApp: 477-920-3776\n`;

    return summary;
}

function copyToClipboard() {
    const summary = generateTextSummary();

    navigator.clipboard.writeText(summary).then(() => {
        showToast('Resumen copiado al portapapeles', 'success');
    }).catch(() => {
        const textarea = document.createElement('textarea');
        textarea.value = summary;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        showToast('Resumen copiado al portapapeles', 'success');
    });
}

// ========================================
// TOAST NOTIFICATION
// ========================================
function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.className = `toast ${type}`;

    setTimeout(() => {
        toast.classList.add('show');
    }, 100);

    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// ========================================
// EVENT LISTENERS
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    // Load saved selections
    loadSelections();

    // Render gallery
    renderGallery();

    // Update stats
    updateStats();

    // Update filter buttons
    updateFilterButtons();

    // Filter buttons
    document.getElementById('btnFilterAll').addEventListener('click', () => setFilter('all'));
    document.getElementById('btnFilterAmpliacion').addEventListener('click', () => setFilter('ampliacion'));
    document.getElementById('btnFilterImpresion').addEventListener('click', () => setFilter('impresion'));
    document.getElementById('btnFilterRedesSociales').addEventListener('click', () => setFilter('redes_sociales'));
    document.getElementById('btnFilterDescartada').addEventListener('click', () => setFilter('descartada'));
    document.getElementById('btnFilterSinClasificar').addEventListener('click', () => setFilter('sin_clasificar'));

    // Set data-filter attributes
    document.getElementById('btnFilterAll').dataset.filter = 'all';
    document.getElementById('btnFilterAmpliacion').dataset.filter = 'ampliacion';
    document.getElementById('btnFilterImpresion').dataset.filter = 'impresion';
    document.getElementById('btnFilterRedesSociales').dataset.filter = 'redes_sociales';
    document.getElementById('btnFilterDescartada').dataset.filter = 'descartada';
    document.getElementById('btnFilterSinClasificar').dataset.filter = 'sin_clasificar';

    // Set initial active filter
    document.getElementById('btnFilterAll').classList.add('active');

    // Action buttons
    document.getElementById('btnExport').addEventListener('click', exportToJSON);
    document.getElementById('btnShare').addEventListener('click', copyToClipboard);
    document.getElementById('btnClear').addEventListener('click', clearAllSelections);

    // Modal controls
    document.querySelector('.modal-close').addEventListener('click', closeModal);
    document.getElementById('btnCancelSelection').addEventListener('click', closeModal);
    document.getElementById('btnSaveSelection').addEventListener('click', saveModalSelection);

    // Option buttons
    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const category = btn.dataset.category;
            const isCurrentlySelected = btn.classList.contains('selected');

            // If selecting descartada, deselect all others
            if (category === 'descartada' && !isCurrentlySelected) {
                document.querySelectorAll('.option-btn').forEach(b => {
                    if (b !== btn) b.classList.remove('selected');
                });
            }

            // If selecting any other, deselect descartada
            if (category !== 'descartada' && !isCurrentlySelected) {
                document.querySelector('.option-btn[data-category="descartada"]').classList.remove('selected');
            }

            btn.classList.toggle('selected');

            // Show warning if exceeding recommended limit
            if (!isCurrentlySelected && LIMITS[category]) {
                const stats = getStats();
                const futureCount = stats[category] + 1;
                if (futureCount > LIMITS[category]) {
                    const messages = {
                        impresion: `⚠️ Nota: Has seleccionado ${futureCount} fotos para impresión (se recomiendan ${LIMITS.impresion})`,
                        ampliacion: `⚠️ Nota: Has seleccionado ${futureCount} fotos para ampliación (se recomienda ${LIMITS.ampliacion})`
                    };
                    showToast(messages[category], 'warning');
                }
            }
        });
    });

    // Close modal on outside click
    document.getElementById('photoModal').addEventListener('click', (e) => {
        if (e.target.id === 'photoModal') {
            closeModal();
        }
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        const modal = document.getElementById('photoModal');
        if (modal.classList.contains('active')) {
            if (e.key === 'Escape') {
                closeModal();
            } else if (e.key === 'Enter') {
                saveModalSelection();
            } else if (e.key === 'ArrowLeft') {
                e.preventDefault();
                navigatePhoto('prev');
            } else if (e.key === 'ArrowRight') {
                e.preventDefault();
                navigatePhoto('next');
            }
        }
    });

    // Navigation button click handlers
    const btnPrevPhoto = document.getElementById('btnPrevPhoto');
    const btnNextPhoto = document.getElementById('btnNextPhoto');

    if (btnPrevPhoto) {
        btnPrevPhoto.addEventListener('click', (e) => {
            e.stopPropagation();
            navigatePhoto('prev');
        });
    }

    if (btnNextPhoto) {
        btnNextPhoto.addEventListener('click', (e) => {
            e.stopPropagation();
            navigatePhoto('next');
        });
    }

    console.log('Selector de fotos inicializado');
    console.log(`Total de fotos: ${photos.length}`);
});

// ========================================
// AUTO-SAVE ON VISIBILITY CHANGE
// ========================================
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        console.log('Página oculta - guardando selecciones...');
        saveSelections();
    }
});

// ========================================
// BEFORE UNLOAD WARNING
// ========================================
window.addEventListener('beforeunload', (e) => {
    saveSelections();
});

// ========================================
// PROTECCIÓN DE IMÁGENES
// ========================================
// Bloquear click derecho en todas las imágenes
document.addEventListener('contextmenu', (e) => {
    if (e.target.tagName === 'IMG') {
        e.preventDefault();
        showToast('Las imágenes están protegidas', 'warning');
        return false;
    }
});

// Prevenir arrastrar imágenes
document.addEventListener('dragstart', (e) => {
    if (e.target.tagName === 'IMG') {
        e.preventDefault();
        return false;
    }
});

// Prevenir selección de imágenes
document.addEventListener('selectstart', (e) => {
    if (e.target.tagName === 'IMG') {
        e.preventDefault();
        return false;
    }
});
