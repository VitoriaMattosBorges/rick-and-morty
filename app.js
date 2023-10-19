document.addEventListener('DOMContentLoaded', function () {
    const charsContainer = document.querySelector('.chars-container');
    const loadMoreButton = document.getElementById('load-more');
  
    let page = 1; 
  
    const loadCharacters = async () => {
      try {
        const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`);
        const data = await response.json();
  
        if (data.results.length > 0) {
          data.results.forEach(character => {
            const charElement = createCharacterElement(character);
            charsContainer.appendChild(charElement);
          });
  
          page++;
        } else {
          loadMoreButton.disabled = true;
        }
      } catch (error) {
        console.error('Erro ao carregar personagens:', error);
      }
    };
  
    const createCharacterElement = character => {
      const charElement = document.createElement('div');
      charElement.classList.add('char');
  
      const imgElement = document.createElement('img');
      imgElement.src = character.image;
      imgElement.alt = character.name;
  
      const charInfoElement = document.createElement('div');
      charInfoElement.classList.add('char-info');
  
      const nameElement = document.createElement('h3');
      nameElement.textContent = character.name;
  
      const speciesElement = document.createElement('span');
      speciesElement.textContent = character.species;
  
      charInfoElement.appendChild(nameElement);
      charInfoElement.appendChild(speciesElement);
  
      charElement.appendChild(imgElement);
      charElement.appendChild(charInfoElement);
  
      return charElement;
    };
  
    loadMoreButton.addEventListener('click', loadCharacters);
  
    loadCharacters();
  });

  
  document.addEventListener('DOMContentLoaded', function () {
    const charsContainer = document.querySelector('.chars-container');
    const loadMoreButton = document.getElementById('load-more');
    const nameFilterInput = document.getElementById('name');
  
    let page = 1;
  
    const loadCharacters = async () => {
      try {
        const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`);
        const data = await response.json();
  
        if (data.results.length > 0) {
          data.results.forEach(character => {
            const charElement = createCharacterElement(character);
            charsContainer.appendChild(charElement);
          });
  
          page++;
        } else {
          loadMoreButton.disabled = true;
        }
      } catch (error) {
        console.error('Erro ao carregar personagens:', error);
      }
    };
  
    const createCharacterElement = character => {
      const charElement = document.createElement('div');
      charElement.classList.add('char');
  
      const imgElement = document.createElement('img');
      imgElement.src = character.image;
      imgElement.alt = character.name;
  
      const charInfoElement = document.createElement('div');
      charInfoElement.classList.add('char-info');
  
      const nameElement = document.createElement('h3');
      nameElement.textContent = character.name;
  
      const speciesElement = document.createElement('span');
      speciesElement.textContent = character.species;
  
      charInfoElement.appendChild(nameElement);
      charInfoElement.appendChild(speciesElement);
  
      charElement.appendChild(imgElement);
      charElement.appendChild(charInfoElement);
  
      return charElement;
    };
  
    const filterCharacters = async () => {
      charsContainer.innerHTML = '';
      page = 1;
  
      const searchName = nameFilterInput.value.trim();
  
      if (searchName !== '') {
        try {
          const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${searchName}`);
          const data = await response.json();
  
          if (data.results.length > 0) {
            data.results.forEach(character => {
              const charElement = createCharacterElement(character);
              charsContainer.appendChild(charElement);
            });
          } else {
            charsContainer.innerHTML = '<p>Nenhum personagem encontrado.</p>';
          }
        } catch (error) {
          console.error('Erro ao filtrar personagens:', error);
        }
      } else {
        loadCharacters();
      }
    };
  
    loadMoreButton.addEventListener('click', loadCharacters);
  
    nameFilterInput.addEventListener('input', filterCharacters);
  
    loadCharacters();
  });

  
  document.addEventListener('DOMContentLoaded', function () {
    const charsContainer = document.querySelector('.chars-container');
    const loadMoreButton = document.getElementById('load-more');
    const nameFilterInput = document.getElementById('name');
  
    let allCharacters = [];
    let displayedCharacters = [];
    let page = 1;
  
    const loadCharacters = async () => {
      try {
        const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`);
        const data = await response.json();
  
        allCharacters = allCharacters.concat(data.results);
  
        filterCharacters();
  
        page++;
      } catch (error) {
        console.error('Erro ao carregar personagens:', error);
      }
    };
  
    const createCharacterElement = character => {
      const charElement = document.createElement('div');
      charElement.classList.add('char');
  
      const imgElement = document.createElement('img');
      imgElement.src = character.image;
      imgElement.alt = character.name;
  
      const charInfoElement = document.createElement('div');
      charInfoElement.classList.add('char-info');
  
      const nameElement = document.createElement('h3');
      nameElement.textContent = character.name;
  
      const speciesElement = document.createElement('span');
      speciesElement.textContent = character.species;
  
      charInfoElement.appendChild(nameElement);
      charInfoElement.appendChild(speciesElement);
  
      charElement.appendChild(imgElement);
      charElement.appendChild(charInfoElement);
  
      return charElement;
    };
  
    const filterCharacters = () => {
      const searchName = nameFilterInput.value.trim().toLowerCase();
  
      displayedCharacters = allCharacters.filter(character =>
        character.name.toLowerCase().includes(searchName)
      );
  
      renderCharacters();
    };
  
    const renderCharacters = () => {
      charsContainer.innerHTML = '';
  
      if (displayedCharacters.length > 0) {
        displayedCharacters.forEach(character => {
          const charElement = createCharacterElement(character);
          charsContainer.appendChild(charElement);
        });
      } else {
        charsContainer.innerHTML = '<p>Nenhum personagem encontrado.</p>';
      }
    };
  
    loadMoreButton.addEventListener('click', loadCharacters);
  
    nameFilterInput.addEventListener('input', filterCharacters);
  
    loadCharacters();
  });

  document.addEventListener('DOMContentLoaded', function () {
    const charsContainer = document.querySelector('.chars-container');
    const loadMoreButton = document.getElementById('load-more');
    const nameFilterInput = document.getElementById('name');
    const speciesFilterSelect = document.getElementById('species');
    const genderFilterSelect = document.getElementById('gender');
    const statusFilterSelect = document.getElementById('status');
  
    let page = 1;
  
    const loadCharacters = async () => {
      try {
        const filters = buildFilters();
        const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}${filters}`);
        const data = await response.json();
  
        if (data.results.length > 0) {
          data.results.forEach(character => {
            const charElement = createCharacterElement(character);
            charsContainer.appendChild(charElement);
          });
  
          page++;
        } else {
          loadMoreButton.disabled = true;
        }
      } catch (error) {
        console.error('Erro ao carregar personagens:', error);
      }
    };
  
    const createCharacterElement = character => {
      const charElement = document.createElement('div');
      charElement.classList.add('char');
  
      const imgElement = document.createElement('img');
      imgElement.src = character.image;
      imgElement.alt = character.name;
  
      const charInfoElement = document.createElement('div');
      charInfoElement.classList.add('char-info');
  
      const nameElement = document.createElement('h3');
      nameElement.textContent = character.name;
  
      const speciesElement = document.createElement('span');
      speciesElement.textContent = character.species;
  
      charInfoElement.appendChild(nameElement);
      charInfoElement.appendChild(speciesElement);
  
      charElement.appendChild(imgElement);
      charElement.appendChild(charInfoElement);
  
      return charElement;
    };
  
    const buildFilters = () => {
      const nameFilter = nameFilterInput.value.trim().toLowerCase();
      const speciesFilter = speciesFilterSelect.value;
      const genderFilter = genderFilterSelect.value;
      const statusFilter = statusFilterSelect.value;
  
      let filters = '';
  
      if (nameFilter !== '') filters += `&name=${nameFilter}`;
      if (speciesFilter !== '') filters += `&species=${speciesFilter}`;
      if (genderFilter !== '') filters += `&gender=${genderFilter}`;
      if (statusFilter !== '') filters += `&status=${statusFilter}`;
  
      return filters;
    };
  
    const filterCharacters = async () => {
      charsContainer.innerHTML = '';
      page = 1;
  
      const filters = buildFilters();
  
      try {
        const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}${filters}`);
        const data = await response.json();
  
        if (data.results.length > 0) {
          data.results.forEach(character => {
            const charElement = createCharacterElement(character);
            charsContainer.appendChild(charElement);
          });
        } else {
          charsContainer.innerHTML = '<p>Nenhum personagem encontrado.</p>';
        }
      } catch (error) {
        console.error('Erro ao filtrar personagens:', error);
      }
    };
  
    nameFilterInput.addEventListener('input', filterCharacters);
    speciesFilterSelect.addEventListener('change', filterCharacters);
    genderFilterSelect.addEventListener('change', filterCharacters);
    statusFilterSelect.addEventListener('change', filterCharacters);
  
    loadMoreButton.addEventListener('click', loadCharacters);
  
    loadCharacters();
  });

  document.addEventListener('DOMContentLoaded', function () {
    const charsContainer = document.querySelector('.chars-container');
    const loadMoreButton = document.getElementById('load-more');
    const nameFilterInput = document.getElementById('name');
    const speciesFilterSelect = document.getElementById('species');
    genderFilterSelect = document.getElementById('gender');
    statusFilterSelect = document.getElementById('status');
  
    let page = 1;
  
    const loadCharacters = async () => {
      try {
        const filters = buildFilters();
        const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}${filters}`);
        const data = await response.json();
  
        if (data.results.length > 0) {
          data.results.forEach(character => {
            const charElement = createCharacterElement(character);
            charsContainer.appendChild(charElement);
          });
  
          page++;
        } else {
          loadMoreButton.disabled = true;
        }
      } catch (error) {
        console.error('Erro ao carregar personagens:', error);
      }
    };
  
    const createCharacterElement = character => {
      const charElement = document.createElement('div');
      charElement.classList.add('char');
  
      const imgElement = document.createElement('img');
      imgElement.src = character.image;
      imgElement.alt = character.name;
  
      const charInfoElement = document.createElement('div');
      charInfoElement.classList.add('char-info');
  
      const nameElement = document.createElement('h3');
      nameElement.textContent = character.name;
  
      const speciesElement = document.createElement('span');
      speciesElement.textContent = character.species;
  
      charInfoElement.appendChild(nameElement);
      charInfoElement.appendChild(speciesElement);
  
      charElement.appendChild(imgElement);
      charElement.appendChild(charInfoElement);
  
      return charElement;
    };
  
    const buildFilters = () => {
      const nameFilter = nameFilterInput.value.trim().toLowerCase();
      const speciesFilter = speciesFilterSelect.value;
      const genderFilter = genderFilterSelect.value;
      const statusFilter = statusFilterSelect.value;
  
      let filters = '';
  
      if (nameFilter !== '') filters += `&name=${nameFilter}`;
      if (speciesFilter !== '') filters += `&species=${encodeURIComponent(speciesFilter)}`;
      if (genderFilter !== '') filters += `&gender=${genderFilter}`;
      if (statusFilter !== '') filters += `&status=${statusFilter}`;
  
      return filters;
    };
  
    const filterCharacters = async () => {
      charsContainer.innerHTML = '';
      page = 1;
  
      await loadCharacters();
    };

    nameFilterInput.addEventListener('input', filterCharacters);
    speciesFilterSelect.addEventListener('change', filterCharacters);
    genderFilterSelect.addEventListener('change', filterCharacters);
    statusFilterSelect.addEventListener('change', filterCharacters);
  
    loadMoreButton.addEventListener('click', loadCharacters);
    loadCharacters();
  });

  document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.carousel-slide');
    let currentSlide = 0;

    const showSlide = (index) => {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? 'block' : 'none';
            slide.style.opacity = i === index ? '1' : '0';
        });
    };

    setInterval(() => {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }, 5000);
});

document.addEventListener('DOMContentLoaded', function () {
  const slides = document.querySelectorAll('.carousel-slide');
  let currentSlide = 0;

  const showSlide = (index) => {
      slides.forEach((slide, i) => {
          if (i === index) {
              slide.style.opacity = '1';
              slide.style.zIndex = '1';
          } else {
              slide.style.opacity = '0';
              slide.style.zIndex = '0';
          }
      });
  };

  const nextSlide = () => {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
      setTimeout(nextSlide, 5000); // Altere o valor para atrasar a transição
  };

  // Inicie a primeira transição
  showSlide(currentSlide);
  // Inicie o ciclo de transição automática
  setTimeout(nextSlide, 5000);
});


document.addEventListener('DOMContentLoaded', function () {
  const charsSection = document.querySelector('.chars');
  const locationsSection = document.querySelector('.locations');
  const locationsContainer = document.querySelector('.locations-container');
  const loadLocationsButton = document.createElement('button');
  loadLocationsButton.textContent = 'Carregar Localizações';
  locationsSection.appendChild(loadLocationsButton);

  let page = 1; // Página inicial

  const loadLocations = async () => {
      try {
          const response = await fetch(`https://rickandmortyapi.com/api/location/?page=${page}`);
          const data = await response.json();

          if (data.results.length > 0) {
              data.results.forEach(location => {
                  const locationElement = createLocationElement(location);
                  locationsContainer.appendChild(locationElement);
              });

              page++; // Atualiza a próxima página
          } else {
              loadLocationsButton.disabled = true; // Desativa o botão se não houver mais localizações
          }
      } catch (error) {
          console.error('Erro ao carregar localizações:', error);
      }
  };

  const createLocationElement = location => {
      const locationElement = document.createElement('div');
      locationElement.classList.add('location');

      const nameElement = document.createElement('h3');
      nameElement.textContent = location.name;

      const typeElement = document.createElement('span');
      typeElement.textContent = `Type: ${location.type}`;

      const dimensionElement = document.createElement('span');
      dimensionElement.textContent = `Dimension: ${location.dimension}`;

      locationElement.appendChild(nameElement);
      locationElement.appendChild(typeElement);
      locationElement.appendChild(dimensionElement);

      return locationElement;
  };

  loadLocationsButton.addEventListener('click', loadLocations);

  loadLocationsButton.addEventListener('click', function () {
      charsSection.style.display = 'none';
      locationsSection.style.display = 'block';
      loadLocations();
  });

  // Inicializa o carregamento das localizações
  loadLocations();
});

  