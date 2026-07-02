// ===== Category Config =====
const catConfig = {
    scholarship: {
        label: 'منحة دراسية',
        icon: 'fa-graduation-cap',
        gradient: 'linear-gradient(135deg, #1e3a8a, #3b82f6)',
        accent: '#2563eb',
        title: 'المنح الدراسية',
        desc: 'تابع أحدث المنح الدراسية الجامعية وما بعد التخرج من جميع أنحاء العالم'
    },
    job: {
        label: 'فرصة عمل',
        icon: 'fa-briefcase',
        gradient: 'linear-gradient(135deg, #065f46, #10b981)',
        accent: '#059669',
        title: 'فرص العمل',
        desc: 'أحدث فرص العمل في مختلف المجالات والتخصصات'
    },
    internship: {
        label: 'تدريب',
        icon: 'fa-laptop-code',
        gradient: 'linear-gradient(135deg, #92400e, #f59e0b)',
        accent: '#d97706',
        title: 'التداريب',
        desc: 'فرص تدريب مهنية وصيفية مميزة'
    },
    training: {
        label: 'تكوين أونلاين',
        icon: 'fa-video',
        gradient: 'linear-gradient(135deg, #5b21b6, #8b5cf6)',
        accent: '#7c3aed',
        title: 'التكوين أونلاين',
        desc: 'دورات مجانية ومنصات تعلم عن بعد'
    },
    news: {
        label: 'أخبار',
        icon: 'fa-newspaper',
        gradient: 'linear-gradient(135deg, #9d174d, #ec4899)',
        accent: '#db2777',
        title: 'أخبار',
        desc: 'آخر المستجدات في عالم التعليم والفرص'
    }
};

const postsData = [
    {
        id: 1,
        title: 'منحة جامعة بوسطن الرئاسية 2026 في أمريكا',
        excerpt: 'منحة دراسية جزئية بقيمة 25,000 دولار سنوياً في واحدة من أعرق الجامعات الأمريكية. التقديم مفتوح للطلاب الدوليين.',
        category: 'scholarship',
        date: '28 يونيو 2026',
        author: 'فريق منحة لايف',
        slug: 'boston-university-presidential-scholarship'
    },
    {
        id: 2,
        title: 'منحة الحكومة البرتغالية 2026-2027 | دليلك الشامل للدراسة في أوروبا',
        excerpt: 'دليلك الشامل لفهم النظام الحقيقي للدراسة والمنح في البرتغال. تحذير هام من معلومات مضللة عن منح وهمية. اكتشف المنح الحقيقية المتاحة.',
        category: 'scholarship',
        date: '2 يوليو 2026',
        author: 'فريق منحة لايف',
        slug: 'portugal-government-scholarships'
    },
    {
        id: 3,
        title: 'تدريب منظمة التعاون الاقتصادي والتنمية (OECD) 2026-27 في فرنسا',
        excerpt: 'تدريب مدفوع الأجر في منظمة التعاون الاقتصادي والتنمية بباريس. بدل شهري 1,000 يورو. التقديم مستمر طوال العام.',
        category: 'internship',
        date: '28 يونيو 2026',
        author: 'فريق منحة لايف',
        slug: 'oecd-internship'
    },
    {
        id: 4,
        title: 'تدريب Netflix الصيفي 2026 | انضم إلى عملاق الترفيه العالمي',
        excerpt: 'فرصة تدريب مدفوعة الأجر في Netflix برواتب تصل إلى 110 دولار للساعة. مواقع متعددة: أمريكا، الهند، اليابان، بولندا.',
        category: 'internship',
        date: '28 يونيو 2026',
        author: 'فريق منحة لايف',
        slug: 'netflix-summer-internship'
    },
    {
        id: 5,
        title: 'برنامج قيادة منتدى IATSS 2027 في اليابان | دليل شامل لبرنامج تدريبي ممول بالكامل',
        excerpt: 'دليلك الشامل للتقديم على برنامج قيادة ممول بالكامل في اليابان لمدة 8 أسابيع. تغطية كاملة للسفر والإقامة والوجبات.',
        category: 'training',
        date: '2 يوليو 2026',
        author: 'فريق منحة لايف',
        slug: 'iatss-forum-2027'
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
        postsGrid.innerHTML = '<div class="no-results"><i class="fas fa-inbox" style="font-size:3rem;display:block;margin-bottom:16px;color:#cbd5e1;"></i>لا توجد فرص متاحة حالياً. سيتم إضافة فرص جديدة قريباً.</div>';
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
                    <a href="article-${post.slug}.html" class="post-link">اقرأ المزيد <i class="fas fa-arrow-left"></i></a>
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
