/**
 * DAFTAR TAMU UNDANGAN PERNIKAHAN WARSADI & DELLA
 * JavaScript Logic: Data, Search, Smooth Accordion & Mobile Interactions
 */

// Data Tamu Undangan Warsadi (84 nama)
const WARSADI_GUESTS = [
  "Lutfi Antrianto",
  "Saiful Bakrhri",
  "Wahyudistira",
  "Diki",
  "M. Pras",
  "Ludi",
  "Bastiar",
  "Wiyan",
  "Ardi",
  "Deni Setiawan",
  "Alvi Setiawan",
  "Hasbi Sis Daniel",
  "Khoirul Anam",
  "Tri Yogi Daman P",
  "Apoy",
  "Cenli Setiadi",
  "Adi Muhaman",
  "Adi. M",
  "Sabarno",
  "Cimek",
  "Alfin Adrian M",
  "Ardiyan",
  "Dimas",
  "Iqbal",
  "Sandi Kurniawan",
  "Krisna",
  "Asep",
  "Abdul Gofur",
  "Adha",
  "Wahyu",
  "Anang",
  "Dana",
  "Fahad Aris Budi",
  "Frendy Setiawan",
  "Firli",
  "Agim Irwansyah",
  "Abdul Rohman",
  "Andre",
  "Kang Dharma",
  "Kang Syarif",
  "Pak Erin",
  "Suhemin",
  "Bagus",
  "Sabarno",
  "Kang Mustakim",
  "Lutfi Haidar",
  "Deris",
  "Yayan Widianto",
  "Afrizal",
  "Fahmi",
  "Efful Bachri",
  "Bang Heru Shenar",
  "Bang Agus Shenar",
  "Komeng",
  "Ajat Shenar",
  "Gusar Shenar",
  "Mansur",
  "Asep Aryanto",
  "M. Abdul Kabar",
  "Supriyandi",
  "Sultan Hasanuddin",
  "Farhan Muhamad Arya",
  "Muhamad Rijal",
  "Wildiansya",
  "Lutfi",
  "Imam",
  "Gabriella",
  "Asep Muhamad Jepri",
  "Fajar Alamsyah",
  "Aliyudin",
  "Fahmi",
  "Mahdi",
  "Rita",
  "Yuni",
  "Fakhira Aulia Rahma",
  "Nurhepi Dahlia",
  "Nacuha Bintang",
  "Ullan",
  "Sheny",
  "Siti Fatimah",
  "Wowo Setiawan",
  "Tomi",
  "Ropik",
  "Nuryadi"
];

// Data Tamu Undangan Della (90 nama)
const DELLA_GUESTS = [
  "Rahma",
  "Japiran",
  "Nirus",
  "Cusin",
  "Mawar",
  "Mba Neni",
  "Kristin",
  "Gina",
  "Nian",
  "Teh Caca",
  "Cindia",
  "Shinta",
  "Mercin",
  "Tifani",
  "Nesa",
  "Nabila",
  "Kaladua",
  "Teh Cwindi",
  "Mba Meli",
  "Teh Enjel",
  "Cipa",
  "Nanda Nabila",
  "Ihsan",
  "Jidan",
  "Dwi",
  "Mba Windu",
  "Trisnawati",
  "Citra",
  "Widia",
  "Teh Nesa",
  "Mba Sofa",
  "Mba Nunung",
  "Deva",
  "Aca",
  "Anita",
  "AYA",
  "Fatimah",
  "Fitri Viola",
  "Ghea",
  "Nila",
  "Arisa",
  "Lintang",
  "Teh Enjel",
  "Uswatun",
  "Reva",
  "Yunita",
  "Lala",
  "Neta",
  "Dinda",
  "Teh Mela",
  "Winda",
  "Lisa",
  "Lulu",
  "Lusi",
  "Nurmala",
  "Alfin",
  "Subhan",
  "Dimas",
  "Firman",
  "Yoga",
  "Mang Riki",
  "Madan",
  "Egi",
  "Dandy",
  "Gilang",
  "Bagas",
  "Zaki",
  "Afik",
  "Rival",
  "Sahlan",
  "Rehan",
  "Pii",
  "Ka Bagus",
  "Rama",
  "Andrian",
  "Geri",
  "Jaya",
  "Kevin",
  "Bariron",
  "Gnana",
  "Depen",
  "Anisa",
  "Kasih",
  "Mang Andi",
  "Tantri",
  "Putri",
  "Aulia",
  "Ritaa",
  "Putram",
  "Amel"
];

// DOM Elements
const searchInput = document.getElementById('searchInput');
const clearSearchBtn = document.getElementById('clearSearchBtn');
const searchNotice = document.getElementById('searchNotice');

const cardWarsadi = document.getElementById('cardWarsadi');
const btnWarsadi = document.getElementById('btnWarsadi');
const listWarsadi = document.getElementById('listWarsadi');
const emptyWarsadi = document.getElementById('emptyWarsadi');
const warsadiBadgeText = document.getElementById('warsadiBadgeText');
const warsadiFooterText = document.getElementById('warsadiFooterText');

const cardDella = document.getElementById('cardDella');
const btnDella = document.getElementById('btnDella');
const listDella = document.getElementById('listDella');
const emptyDella = document.getElementById('emptyDella');
const dellaBadgeText = document.getElementById('dellaBadgeText');
const dellaFooterText = document.getElementById('dellaFooterText');

const totalGuestsCount = document.getElementById('totalGuestsCount');
const warsadiGuestsCount = document.getElementById('warsadiGuestsCount');
const dellaGuestsCount = document.getElementById('dellaGuestsCount');

const backToTopBtn = document.getElementById('backToTopBtn');

// Helper: Escape HTML string
function escapeHtml(text) {
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, m => map[m]);
}

// Helper: Highlight query inside name text
function highlightText(text, query) {
  if (!query) return escapeHtml(text);
  const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
  return escapeHtml(text).replace(regex, '<mark>$1</mark>');
}

// Generate Invitation Text Template
function generateInvitationText(name) {
  const encodedParam = encodeURIComponent(name).replace(/%20/g, '+');
  const invitationUrl = `https://warsadi.github.io/?to=${encodedParam}`;

  return `Yth. ${name}

Assalamualikum Wr. Wb

Dengan memohon Rahmat Dan Ridho Allah SWT, Dan tanpa mengurangi rasa hormat kami. melalui media sosial ini, kami *Warsadi & Della* mengundang Bapak/Ibu/Sdr/i untuk berkenan hadir di acara pernikahan kami.

*Detail Acara*:
${invitationUrl}
 
Merupakan suatu kehormatan dan kebahagiaan jika Anda bersedia hadir dan turut memberikan doa restu untuk kami

Terimakasih kami sampaikan Bapak/Ibu/Sdr/i.

Wassalamualaikum Wr.Wb
*Warsadi & Della*`;
}

// Copy to clipboard function with template text and UI animation (no popup toast)
function copyInvitation(name, btnElement) {
  const text = generateInvitationText(name);

  function onSuccess() {
    if (btnElement) {
      btnElement.classList.add('copied');
      setTimeout(() => {
        btnElement.classList.remove('copied');
      }, 1800);
    }
  }

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(onSuccess).catch(() => {
      fallbackCopy(text, onSuccess);
    });
  } else {
    fallbackCopy(text, onSuccess);
  }
}

// Fallback copy for environments where navigator.clipboard might be restricted
function fallbackCopy(text, onSuccess) {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.style.position = 'fixed';
  textarea.style.top = '0';
  textarea.style.left = '-9999px';
  document.body.appendChild(textarea);
  textarea.focus();
  textarea.select();
  try {
    document.execCommand('copy');
    onSuccess();
  } catch (err) {
    console.error('Gagal menyalin pesan');
  }
  document.body.removeChild(textarea);
}

// Render guest list
function renderList(container, emptyElem, guests, query = '') {
  container.innerHTML = '';
  
  const trimmedQuery = query.trim().toLowerCase();
  const filtered = trimmedQuery 
    ? guests.filter(name => name.toLowerCase().includes(trimmedQuery))
    : guests;

  if (filtered.length === 0) {
    emptyElem.style.display = 'flex';
  } else {
    emptyElem.style.display = 'none';
    filtered.forEach((name, index) => {
      const li = document.createElement('li');
      li.className = 'guest-item';
      
      const safeName = escapeHtml(name);
      const highlightedName = highlightText(name, trimmedQuery);

      li.innerHTML = `
        <div class="guest-left">
          <span class="guest-number">${index + 1}.</span>
          <span class="guest-name" title="${safeName}">${highlightedName}</span>
        </div>
        <button class="wa-copy-btn" data-name="${safeName}" title="Salin template undangan untuk ${safeName}" aria-label="Salin template undangan untuk ${safeName}">
          <svg class="wa-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          <svg class="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </button>
      `;

      // Copy click handler on WhatsApp icon button
      const copyBtn = li.querySelector('.wa-copy-btn');
      copyBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        copyInvitation(name, copyBtn);
      });

      container.appendChild(li);
    });
  }

  return filtered.length;
}

// Toggle Dropdown / Accordion
function toggleDropdown(card, button) {
  const isOpen = card.classList.contains('is-open');
  if (isOpen) {
    card.classList.remove('is-open');
    button.setAttribute('aria-expanded', 'false');
  } else {
    card.classList.add('is-open');
    button.setAttribute('aria-expanded', 'true');
  }
}

// Set Dropdown State Explicitly
function setDropdownState(card, button, open) {
  if (open) {
    card.classList.add('is-open');
    button.setAttribute('aria-expanded', 'true');
  } else {
    card.classList.remove('is-open');
    button.setAttribute('aria-expanded', 'false');
  }
}

// Perform Search
function handleSearch() {
  const query = searchInput.value.trim();
  
  if (query.length > 0) {
    clearSearchBtn.style.display = 'flex';
  } else {
    clearSearchBtn.style.display = 'none';
  }

  const warsadiMatches = renderList(listWarsadi, emptyWarsadi, WARSADI_GUESTS, query);
  const dellaMatches = renderList(listDella, emptyDella, DELLA_GUESTS, query);

  if (query.length > 0) {
    // Show match badges
    if (warsadiBadgeText) warsadiBadgeText.textContent = `${warsadiMatches} Tamu Cocok`;
    if (dellaBadgeText) dellaBadgeText.textContent = `${dellaMatches} Tamu Cocok`;
    if (warsadiFooterText) warsadiFooterText.textContent = `${warsadiMatches} Tamu Ditemukan (List Warsadi)`;
    if (dellaFooterText) dellaFooterText.textContent = `${dellaMatches} Tamu Ditemukan (List Della)`;

    // Show search summary notice
    const totalFound = warsadiMatches + dellaMatches;
    searchNotice.style.display = 'flex';
    searchNotice.innerHTML = `<span>Hasil pencarian: <strong>${totalFound}</strong> tamu ditemukan</span>`;

    // Auto-expand cards that have results
    if (warsadiMatches > 0) {
      setDropdownState(cardWarsadi, btnWarsadi, true);
    } else {
      setDropdownState(cardWarsadi, btnWarsadi, false);
    }

    if (dellaMatches > 0) {
      setDropdownState(cardDella, btnDella, true);
    } else {
      setDropdownState(cardDella, btnDella, false);
    }

    // If neither has matches, keep both open to show empty state
    if (warsadiMatches === 0 && dellaMatches === 0) {
      setDropdownState(cardWarsadi, btnWarsadi, true);
      setDropdownState(cardDella, btnDella, true);
    }

  } else {
    // Reset to normal state
    if (warsadiBadgeText) warsadiBadgeText.textContent = `${WARSADI_GUESTS.length} Tamu Undangan`;
    if (dellaBadgeText) dellaBadgeText.textContent = `${DELLA_GUESTS.length} Tamu Undangan`;
    if (warsadiFooterText) warsadiFooterText.textContent = `Total ${WARSADI_GUESTS.length} Tamu Undangan Warsadi`;
    if (dellaFooterText) dellaFooterText.textContent = `Total ${DELLA_GUESTS.length} Tamu Undangan Della`;

    searchNotice.style.display = 'none';
    searchNotice.innerHTML = '';
  }
}

// Initialize Application
function init() {
  // Update header stats
  warsadiGuestsCount.textContent = WARSADI_GUESTS.length;
  dellaGuestsCount.textContent = DELLA_GUESTS.length;
  totalGuestsCount.textContent = WARSADI_GUESTS.length + DELLA_GUESTS.length;

  if (warsadiBadgeText) warsadiBadgeText.textContent = `${WARSADI_GUESTS.length} Tamu Undangan`;
  if (dellaBadgeText) dellaBadgeText.textContent = `${DELLA_GUESTS.length} Tamu Undangan`;
  if (warsadiFooterText) warsadiFooterText.textContent = `Total ${WARSADI_GUESTS.length} Tamu Undangan Warsadi`;
  if (dellaFooterText) dellaFooterText.textContent = `Total ${DELLA_GUESTS.length} Tamu Undangan Della`;

  // Initial render of lists
  renderList(listWarsadi, emptyWarsadi, WARSADI_GUESTS);
  renderList(listDella, emptyDella, DELLA_GUESTS);

  // Accordion click listeners
  btnWarsadi.addEventListener('click', () => {
    toggleDropdown(cardWarsadi, btnWarsadi);
  });

  btnDella.addEventListener('click', () => {
    toggleDropdown(cardDella, btnDella);
  });

  // Search input listeners
  searchInput.addEventListener('input', handleSearch);

  // Clear search button
  clearSearchBtn.addEventListener('click', () => {
    searchInput.value = '';
    searchInput.focus();
    handleSearch();
  });

  // Scroll to top button visibility
  window.addEventListener('scroll', () => {
    if (window.scrollY > 250) {
      backToTopBtn.classList.add('show');
    } else {
      backToTopBtn.classList.remove('show');
    }
  }, { passive: true });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// Run on DOM ready
document.addEventListener('DOMContentLoaded', init);
