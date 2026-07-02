// ===== Category Config =====
const catConfig = {
    scholarship: {
        label: 'Ù…Ù†Ø­Ø© Ø¯Ø±Ø§Ø³ÙŠØ©',
        icon: 'fa-graduation-cap',
        gradient: 'linear-gradient(135deg, #1e3a8a, #3b82f6)',
        accent: '#2563eb',
        title: 'Ø§Ù„Ù…Ù†Ø­ Ø§Ù„Ø¯Ø±Ø§Ø³ÙŠØ©',
        desc: 'ØªØ§Ø¨Ø¹ Ø£Ø­Ø¯Ø« Ø§Ù„Ù…Ù†Ø­ Ø§Ù„Ø¯Ø±Ø§Ø³ÙŠØ© Ø§Ù„Ø¬Ø§Ù…Ø¹ÙŠØ© ÙˆÙ…Ø§ Ø¨Ø¹Ø¯ Ø§Ù„ØªØ®Ø±Ø¬ Ù…Ù† Ø¬Ù…ÙŠØ¹ Ø£Ù†Ø­Ø§Ø¡ Ø§Ù„Ø¹Ø§Ù„Ù…'
    },
    job: {
        label: 'ÙØ±ØµØ© Ø¹Ù…Ù„',
        icon: 'fa-briefcase',
        gradient: 'linear-gradient(135deg, #065f46, #10b981)',
        accent: '#059669',
        title: 'ÙØ±Øµ Ø§Ù„Ø¹Ù…Ù„',
        desc: 'Ø£Ø­Ø¯Ø« ÙØ±Øµ Ø§Ù„Ø¹Ù…Ù„ ÙÙŠ Ù…Ø®ØªÙ„Ù Ø§Ù„Ù…Ø¬Ø§Ù„Ø§Øª ÙˆØ§Ù„ØªØ®ØµØµØ§Øª'
    },
    internship: {
        label: 'ØªØ¯Ø±ÙŠØ¨',
        icon: 'fa-laptop-code',
        gradient: 'linear-gradient(135deg, #92400e, #f59e0b)',
        accent: '#d97706',
        title: 'Ø§Ù„ØªØ¯Ø§Ø±ÙŠØ¨',
        desc: 'ÙØ±Øµ ØªØ¯Ø±ÙŠØ¨ Ù…Ù‡Ù†ÙŠØ© ÙˆØµÙŠÙÙŠØ© Ù…Ù…ÙŠØ²Ø©'
    },
    training: {
        label: 'ØªÙƒÙˆÙŠÙ† Ø£ÙˆÙ†Ù„Ø§ÙŠÙ†',
        icon: 'fa-video',
        gradient: 'linear-gradient(135deg, #5b21b6, #8b5cf6)',
        accent: '#7c3aed',
        title: 'Ø§Ù„ØªÙƒÙˆÙŠÙ† Ø£ÙˆÙ†Ù„Ø§ÙŠÙ†',
        desc: 'Ø¯ÙˆØ±Ø§Øª Ù…Ø¬Ø§Ù†ÙŠØ© ÙˆÙ…Ù†ØµØ§Øª ØªØ¹Ù„Ù… Ø¹Ù† Ø¨Ø¹Ø¯'
    },
    news: {
        label: 'Ø£Ø®Ø¨Ø§Ø±',
        icon: 'fa-newspaper',
        gradient: 'linear-gradient(135deg, #9d174d, #ec4899)',
        accent: '#db2777',
        title: 'Ø£Ø®Ø¨Ø§Ø±',
        desc: 'Ø¢Ø®Ø± Ø§Ù„Ù…Ø³ØªØ¬Ø¯Ø§Øª ÙÙŠ Ø¹Ø§Ù„Ù… Ø§Ù„ØªØ¹Ù„ÙŠÙ… ÙˆØ§Ù„ÙØ±Øµ'
    }
};

const postsData = [
    {
        id: 1,
        title: 'Ù…Ù†Ø­Ø© Ø¬Ø§Ù…Ø¹Ø© Ø¨ÙˆØ³Ø·Ù† Ø§Ù„Ø±Ø¦Ø§Ø³ÙŠØ© 2026 ÙÙŠ Ø£Ù…Ø±ÙŠÙƒØ§',
        excerpt: 'Ù…Ù†Ø­Ø© Ø¯Ø±Ø§Ø³ÙŠØ© Ø¬Ø²Ø¦ÙŠØ© Ø¨Ù‚ÙŠÙ…Ø© 25,000 Ø¯ÙˆÙ„Ø§Ø± Ø³Ù†ÙˆÙŠØ§Ù‹ ÙÙŠ ÙˆØ§Ø­Ø¯Ø© Ù…Ù† Ø£Ø¹Ø±Ù‚ Ø§Ù„Ø¬Ø§Ù…Ø¹Ø§Øª Ø§Ù„Ø£Ù…Ø±ÙŠÙƒÙŠØ©. Ø§Ù„ØªÙ‚Ø¯ÙŠÙ… Ù…ÙØªÙˆØ­ Ù„Ù„Ø·Ù„Ø§Ø¨ Ø§Ù„Ø¯ÙˆÙ„ÙŠÙŠÙ†.',
        category: 'scholarship',
        date: '28 ÙŠÙˆÙ†ÙŠÙˆ 2026',
        author: 'ÙØ±ÙŠÙ‚ Ù…Ù†Ø­Ø© Ù„Ø§ÙŠÙ',
        slug: 'boston-university-presidential-scholarship'
    },
    {
        id: 2,
        title: 'Ù…Ù†Ø­Ø© Ø§Ù„Ø­ÙƒÙˆÙ…Ø© Ø§Ù„Ø¨Ø±ØªØºØ§Ù„ÙŠØ© 2026-2027 | Ø¯Ù„ÙŠÙ„Ùƒ Ø§Ù„Ø´Ø§Ù…Ù„ Ù„Ù„Ø¯Ø±Ø§Ø³Ø© ÙÙŠ Ø£ÙˆØ±ÙˆØ¨Ø§',
        excerpt: 'Ø¯Ù„ÙŠÙ„Ùƒ Ø§Ù„Ø´Ø§Ù…Ù„ Ù„ÙÙ‡Ù… Ø§Ù„Ù†Ø¸Ø§Ù… Ø§Ù„Ø­Ù‚ÙŠÙ‚ÙŠ Ù„Ù„Ø¯Ø±Ø§Ø³Ø© ÙˆØ§Ù„Ù…Ù†Ø­ ÙÙŠ Ø§Ù„Ø¨Ø±ØªØºØ§Ù„. ØªØ­Ø°ÙŠØ± Ù‡Ø§Ù… Ù…Ù† Ù…Ø¹Ù„ÙˆÙ…Ø§Øª Ù…Ø¶Ù„Ù„Ø© Ø¹Ù† Ù…Ù†Ø­ ÙˆÙ‡Ù…ÙŠØ©. Ø§ÙƒØªØ´Ù Ø§Ù„Ù…Ù†Ø­ Ø§Ù„Ø­Ù‚ÙŠÙ‚ÙŠØ© Ø§Ù„Ù…ØªØ§Ø­Ø©.',
        category: 'scholarship',
        date: '28 ÙŠÙˆÙ†ÙŠÙˆ 2026',
        author: 'ÙØ±ÙŠÙ‚ Ù…Ù†Ø­Ø© Ù„Ø§ÙŠÙ',
        slug: 'portugal-government-scholarships'
    },
    {
        id: 3,
        title: 'ØªØ¯Ø±ÙŠØ¨ Ù…Ù†Ø¸Ù…Ø© Ø§Ù„ØªØ¹Ø§ÙˆÙ† Ø§Ù„Ø§Ù‚ØªØµØ§Ø¯ÙŠ ÙˆØ§Ù„ØªÙ†Ù…ÙŠØ© (OECD) 2026-27 ÙÙŠ ÙØ±Ù†Ø³Ø§',
        excerpt: 'ØªØ¯Ø±ÙŠØ¨ Ù…Ø¯ÙÙˆØ¹ Ø§Ù„Ø£Ø¬Ø± ÙÙŠ Ù…Ù†Ø¸Ù…Ø© Ø§Ù„ØªØ¹Ø§ÙˆÙ† Ø§Ù„Ø§Ù‚ØªØµØ§Ø¯ÙŠ ÙˆØ§Ù„ØªÙ†Ù…ÙŠØ© Ø¨Ø¨Ø§Ø±ÙŠØ³. Ø¨Ø¯Ù„ Ø´Ù‡Ø±ÙŠ 1,000 ÙŠÙˆØ±Ùˆ. Ø§Ù„ØªÙ‚Ø¯ÙŠÙ… Ù…Ø³ØªÙ…Ø± Ø·ÙˆØ§Ù„ Ø§Ù„Ø¹Ø§Ù….',
        category: 'internship',
        date: '28 ÙŠÙˆÙ†ÙŠÙˆ 2026',
        author: 'ÙØ±ÙŠÙ‚ Ù…Ù†Ø­Ø© Ù„Ø§ÙŠÙ',
        slug: 'oecd-internship'
    },
    {
        id: 4,
        title: 'ØªØ¯Ø±ÙŠØ¨ Netflix Ø§Ù„ØµÙŠÙÙŠ 2026 | Ø§Ù†Ø¶Ù… Ø¥Ù„Ù‰ Ø¹Ù…Ù„Ø§Ù‚ Ø§Ù„ØªØ±ÙÙŠÙ‡ Ø§Ù„Ø¹Ø§Ù„Ù…ÙŠ',
        excerpt: 'ÙØ±ØµØ© ØªØ¯Ø±ÙŠØ¨ Ù…Ø¯ÙÙˆØ¹Ø© Ø§Ù„Ø£Ø¬Ø± ÙÙŠ Netflix Ø¨Ø±ÙˆØ§ØªØ¨ ØªØµÙ„ Ø¥Ù„Ù‰ 110 Ø¯ÙˆÙ„Ø§Ø± Ù„Ù„Ø³Ø§Ø¹Ø©. Ù…ÙˆØ§Ù‚Ø¹ Ù…ØªØ¹Ø¯Ø¯Ø©: Ø£Ù…Ø±ÙŠÙƒØ§ØŒ Ø§Ù„Ù‡Ù†Ø¯ØŒ Ø§Ù„ÙŠØ§Ø¨Ø§Ù†ØŒ Ø¨ÙˆÙ„Ù†Ø¯Ø§.',
        category: 'internship',
        date: '28 ÙŠÙˆÙ†ÙŠÙˆ 2026',
        author: 'ÙØ±ÙŠÙ‚ Ù…Ù†Ø­Ø© Ù„Ø§ÙŠÙ',
        slug: 'netflix-summer-internship'
    }
];

// ===== Page Detection =====
const body = document.body;
const page = body.dataset.page || 'home';
const catForPage = page === 'home' ? 'all' : page;

// ===== DOM References =====
const postsGrid = document.getElementById('postsGrid');
const filterBtns = document.querySelectorAll('.filter-btn');
const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');
const header = document.getElementById('header');
const backToTop = document.getElementById('backToTop');
const searchInput = document.getElementById('searchInput');
const searchSubmit = document.getElementById('searchSubmit');
const categoryCards = document.querySelectorAll('.category-card');

// ===== Set active nav =====
const pageToFile = { home: 'index', scholarship: 'scholarships', job: 'jobs', internship: 'internships', training: 'training', news: 'news', contact: 'contact', about: 'about', privacy: 'privacy', terms: 'terms', popular: 'popular' };
const currentFile = (pageToFile[page] || page) + '.html';
document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentFile) {
        link.classList.add('active');
    }
});

// ===== Render Posts =====
function renderPosts(posts) {
    if (!postsGrid) return;
    if (posts.length === 0) {
        postsGrid.innerHTML = '<div class="no-results"><i class="fas fa-inbox" style="font-size:3rem;display:block;margin-bottom:16px;color:#cbd5e1;"></i>Ù„Ø§ ØªÙˆØ¬Ø¯ ÙØ±Øµ Ù…ØªØ§Ø­Ø© Ø­Ø§Ù„ÙŠØ§Ù‹. Ø³ÙŠØªÙ… Ø¥Ø¶Ø§ÙØ© ÙØ±Øµ Ø¬Ø¯ÙŠØ¯Ø© Ù‚Ø±ÙŠØ¨Ø§Ù‹.</div>';
        return;
    }
    postsGrid.innerHTML = posts.map(post => {
        const cfg = catConfig[post.category];
        return `
            <article class="post-card">
                <div class="post-visual" style="background: ${cfg.gradient};">
                    <i class="fas ${cfg.icon}"></i>
                </div>
                <div class="post-body">
                    <span class="post-badge badge-${post.category}">${cfg.label}</span>
                    <div class="post-meta">
                        <span><i class="fas fa-calendar-alt"></i> ${post.date}</span>
                        <span><i class="fas fa-user"></i> ${post.author}</span>
                    </div>
                    <h3>${post.title}</h3>
                    <p>${post.excerpt}</p>
                    <a href="article-${post.slug}.html" class="post-link">Ø§Ù‚Ø±Ø£ Ø§Ù„Ù…Ø²ÙŠØ¯ <i class="fas fa-arrow-left"></i></a>
                </div>
            </article>
        `;
    }).join('');
}

// ===== Filter Posts =====
function filterPosts(category) {
    let filtered;
    if (category === 'all') {
        filtered = postsData;
    } else {
        filtered = postsData.filter(p => p.category === category);
    }
    renderPosts(filtered);
}

// ===== Category Cards (home only) =====
categoryCards.forEach(card => {
    card.addEventListener('click', function() {
        const filter = this.dataset.filter;
        filterBtns.forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.filter === filter) btn.classList.add('active');
        });
        filterPosts(filter);
        const blog = document.getElementById('blog');
        if (blog) blog.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

// ===== Filter Buttons (home only) =====
filterBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        filterBtns.forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        filterPosts(this.dataset.filter);
        const blog = document.getElementById('blog');
        if (blog) blog.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

// ===== Search =====
function performSearch() {
    const query = searchInput ? searchInput.value.trim().toLowerCase() : '';
    if (!query) {
        filterPosts(catForPage);
        return;
    }
    const results = postsData.filter(p =>
        p.title.toLowerCase().includes(query) ||
        p.excerpt.toLowerCase().includes(query)
    );
    renderPosts(results);
    const blog = document.getElementById('blog');
    if (blog) blog.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
if (searchSubmit) searchSubmit.addEventListener('click', performSearch);
if (searchInput) searchInput.addEventListener('keyup', function(e) {
    if (e.key === 'Enter') performSearch();
});

// ===== Mobile Menu =====
if (menuToggle) {
    menuToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        nav.classList.toggle('open');
    });
}
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        if (menuToggle) menuToggle.classList.remove('active');
        if (nav) nav.classList.remove('open');
    });
});

// ===== Header Scroll =====
window.addEventListener('scroll', function() {
    if (header) header.classList.toggle('scrolled', window.scrollY > 50);
    if (backToTop) backToTop.classList.toggle('show', window.scrollY > 400);
});

// ===== Back to Top =====
if (backToTop) {
    backToTop.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ===== Intersection Observer for Animations =====
const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);
document.querySelectorAll('.post-card, .category-card, .about-card, .policy-section').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ===== Share Function =====
function shareOn(platform) {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(document.title);
    const urls = {
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
        twitter: `https://twitter.com/intent/tweet?url=${url}&text=${title}`,
        whatsapp: `https://api.whatsapp.com/send?text=${title}%20${url}`,
        telegram: `https://t.me/share/url?url=${url}&text=${title}`
    };
    window.open(urls[platform], '_blank', 'width=600,height=500');
}

// ===== OneSignal Notifications =====
const notifBtn = document.getElementById('notifToggle');
const notifDot = document.getElementById('notifDot');

function updateNotifDot() {
  if (!notifDot) return;
  if (!('Notification' in window)) { notifDot.style.display = 'none'; return; }
  if (Notification.permission === 'granted') {
    notifDot.style.display = 'none';
  } else {
    notifDot.style.display = 'block';
  }
}

if (notifBtn && 'OneSignal' in window) {
  notifBtn.addEventListener('click', async function() {
    if (Notification.permission === 'granted') return;
    OneSignal.showSlidedown();
  });
}

updateNotifDot();

// ===== Init =====
filterPosts(catForPage);
