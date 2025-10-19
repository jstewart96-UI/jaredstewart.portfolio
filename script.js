// Make search history items clickable
document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('searchInput');
  const searchHistory = document.getElementById('searchHistory');

  // Define searchable items
  const searchItems = [
    { text: 'resume', url: 'resume.html/index.html' },
    { text: 'about', url: 'about.html/index.html' },
    { text: 'work', url: 'work.html/index.html' },
    { text: 'projects', url: 'work.html/index.html' },
    { text: 'photography', url: '#', disabled: true },
    { text: 'contact', url: 'index.html' },
    { text: 'jared stewart', url: 'index.html' },
    { text: 'ux design', url: 'work.html/index.html' },
    { text: 'portfolio', url: 'index.html' },
        // Specific projects
        { text: 'brew to grow', url: 'work.html/index.html' },
        { text: 'philo', url: 'work.html/index.html' },
        { text: 'philo sign-in', url: 'work.html/index.html' },
        { text: 'philo redesign', url: 'work.html/index.html' },
        { text: 'peets coffee', url: 'work.html/index.html' },
        { text: 'peets coffee mobile', url: 'work.html/index.html' },
        { text: 'mobile app', url: 'work.html/index.html' },
        { text: 'sustainability', url: 'work.html/index.html' },
        { text: 'coffee', url: 'work.html/index.html' },
        { text: 'streaming', url: 'work.html/index.html' },
        { text: 'accessibility', url: 'work.html/index.html' },
        { text: 'sign-in', url: 'work.html/index.html' },
        { text: 'authentication', url: 'work.html/index.html' }
  ];

  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();
    
    if (query.length === 0) {
      searchHistory.style.display = 'none';
      return;
    }

    // Filter items that match the query
    const matches = searchItems.filter(item => 
      item.text.toLowerCase().includes(query)
    );

    if (matches.length > 0) {
      displaySuggestions(matches);
    } else {
      searchHistory.style.display = 'none';
    }
  });

  searchInput.addEventListener('focus', () => {
    if (searchInput.value.trim().length > 0) {
      const query = searchInput.value.toLowerCase().trim();
      const matches = searchItems.filter(item => 
        item.text.toLowerCase().includes(query)
      );
      if (matches.length > 0) {
        displaySuggestions(matches);
      }
    }
  });

  searchInput.addEventListener('blur', () => {
    setTimeout(() => {
      searchHistory.style.display = 'none';
    }, 150);
  });

  function displaySuggestions(matches) {
    searchHistory.innerHTML = '';
    
    matches.forEach(match => {
      const li = document.createElement('li');
      li.textContent = match.text;
      li.addEventListener('click', () => {
        if (!match.disabled) {
          window.location.href = match.url;
        }
      });
      searchHistory.appendChild(li);
    });
    
    searchHistory.style.display = 'block';
  }

      // Dark mode functionality
      const darkModeToggle = document.getElementById('darkModeToggle');
      const body = document.body;
      const html = document.documentElement;

      // Check for saved theme preference or default to light mode
      const currentTheme = localStorage.getItem('theme') || 'light';
      body.setAttribute('data-theme', currentTheme);
      html.setAttribute('data-theme', currentTheme);
      updateToggleState(currentTheme);

      darkModeToggle.addEventListener('change', () => {
        const newTheme = darkModeToggle.checked ? 'dark' : 'light';

        body.setAttribute('data-theme', newTheme);
        html.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
      });
  
  function updateToggleState(theme) {
    darkModeToggle.checked = theme === 'dark';
  }

  // Header scroll effect
  const header = document.querySelector('header');
  let lastScrollY = window.scrollY;

  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    const currentTheme = body.getAttribute('data-theme');
    
    if (currentTheme === 'dark') {
      if (currentScrollY > 50) {
        header.style.background = 'rgba(18, 18, 18, 0.95)';
        header.style.backdropFilter = 'blur(20px)';
        header.style.webkitBackdropFilter = 'blur(20px)';
        header.style.borderBottom = '1px solid rgba(255, 255, 255, 0.15)';
      } else {
        header.style.background = 'rgba(18, 18, 18, 0.8)';
        header.style.backdropFilter = 'blur(10px)';
        header.style.webkitBackdropFilter = 'blur(10px)';
        header.style.borderBottom = '1px solid rgba(255, 255, 255, 0.1)';
      }
    } else {
      if (currentScrollY > 50) {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.backdropFilter = 'blur(20px)';
        header.style.webkitBackdropFilter = 'blur(20px)';
        header.style.borderBottom = '1px solid rgba(0, 0, 0, 0.15)';
      } else {
        header.style.background = 'rgba(255, 255, 255, 0.8)';
        header.style.backdropFilter = 'blur(10px)';
        header.style.webkitBackdropFilter = 'blur(10px)';
        header.style.borderBottom = '1px solid rgba(0, 0, 0, 0.1)';
      }
    }
    
    lastScrollY = currentScrollY;
  });

  // Dark mode header scroll effect
  function updateHeaderForTheme(theme) {
    const currentScrollY = window.scrollY;
    
    if (theme === 'dark') {
      if (currentScrollY > 50) {
        header.style.background = 'rgba(18, 18, 18, 0.95)';
        header.style.backdropFilter = 'blur(20px)';
        header.style.webkitBackdropFilter = 'blur(20px)';
        header.style.borderBottom = '1px solid rgba(255, 255, 255, 0.15)';
      } else {
        header.style.background = 'rgba(18, 18, 18, 0.8)';
        header.style.backdropFilter = 'blur(10px)';
        header.style.webkitBackdropFilter = 'blur(10px)';
        header.style.borderBottom = '1px solid rgba(255, 255, 255, 0.1)';
      }
    } else {
      if (currentScrollY > 50) {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.backdropFilter = 'blur(20px)';
        header.style.webkitBackdropFilter = 'blur(20px)';
        header.style.borderBottom = '1px solid rgba(0, 0, 0, 0.15)';
      } else {
        header.style.background = 'rgba(255, 255, 255, 0.8)';
        header.style.backdropFilter = 'blur(10px)';
        header.style.webkitBackdropFilter = 'blur(10px)';
        header.style.borderBottom = '1px solid rgba(0, 0, 0, 0.1)';
      }
    }
  }

  // Update header when theme changes
  darkModeToggle.addEventListener('change', () => {
    const newTheme = darkModeToggle.checked ? 'dark' : 'light';
    updateHeaderForTheme(newTheme);
  });

  // Initialize header for current theme
  updateHeaderForTheme(currentTheme);
});
