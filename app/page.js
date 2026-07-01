"use client";
import React, { useState, useEffect, useRef } from 'react';
import Papa from 'papaparse';
 
/* ───────────────────────────────────────────────
   GOOGLE SHEET LİNKİ (CSV)
   Sheet-ə yeni kitab əlavə etdikcə sayt avtomatik
   yeniləyəndə (refresh) yeni məlumatları göstərəcək.
─────────────────────────────────────────────── */
const SHEET_CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ2lhYaH-Di_vFwSNkfks9fDkbGD33iGr2TkMiuRRCVitC9K1XfWRENUq1YAYkWZQ1yhhZKekve8k4y/pub?gid=0&single=true&output=csv";
 
/* ───────────────────────────────────────────────
   SABİT MƏLUMATLAR (endirim və aksesuarlar hələ kodda qalır)
─────────────────────────────────────────────── */
/* ───────────────────────────────────────────────
   Endirimli kitablar artıq Sheet-dəki "onSale" sütunundan gəlir
─────────────────────────────────────────────── */
 
const ACCESSORIES_DATA = [
  {id:"a1", title:"Premium Hədiyyə Paketləməsi", desc:"Xüsusi möhürlü və qoxulu sənətkar kağızı", price:1.50, type:"packaging"},
  {id:"a2", title:"Minimalist Kitab Ayracı",    desc:"Əlimizdə olan xüsusi dizaynlı incə ayrac", price:0.30, type:"bookmark"},
  {id:"a3", title:"Klassik Estetik Ayrac",       desc:"Kitabsevərlər üçün təmiz vizual toxunuş", price:0.30, type:"bookmark"},
];
 
/* ───────────────────────────────────────────────
   DİL TƏRCÜMƏLƏRİ (interfeys mətnləri üçün)
─────────────────────────────────────────────── */
const DICT = {
  az: {
    all: "Hamısı", newBooks: "Yeni Kitablar", usedBooks: "İkinci Əl", accessories: "Ayrac & Paketləmə",
    search: "Axtar...", cart: "Səbət",
    heroTag: "Yeni, İkinci Əl və Xüsusi Ayraclar",
    heroTitle: "Hər kitab yeni bir hekayədir.",
    heroDesc: "İstər tam yeni premium nəşrlər, istərsə də büdcənizə uyğun təmiz ikinci əl variantlar. Əl işi ayraclar və xüsusi paketləmə ilə.",
    heroBtn: "Kitablara bax", heroLink: "Ayraclar və Paketləmə →",
    sectionAll: "Bütün Kitablar", sectionNew: "Yeni Kitablar", sectionUsed: "İkinci Əl Kitablar",
    cats: ['Hamısı','Bədii','Elmi','Uşaq','Biznes','Özünüinkişaf','Tarix'],
    bestseller: "Bestseller", newTag: "Yeni", usedTag: "İkinci Əl", saleTag: "Endirim",
    addBtn: "Əlavə et", added: "Səbətdə",
    accTitle: "Kitab Ayracları & Paketləmə",
    accDesc: "Sizin üçün hazırladığımız xüsusi kitab ayracları və premium estetik hədiyyə paketləmələri.",
    accAdd: "Səbətə at", accAdded: "Əlavə edildi",
    saleTitle: "Xüsusi Təkliflər",
    footerDesc: "Naxçıvanın minimalist dizaynlı premium kitab və oxu aksesuarları mağazası.",
    footerCollections: "Koleksiyalar", footerNewEd: "Yeni Nəşrlər", footerUsedB: "İkinci Əl Kitablar", footerBookmarks: "Kitab Ayracları",
    footerService: "Xidmət", footerDelivery: "Çatdırılma: Naxçıvan", footerWhatsapp: "WhatsApp Sifariş",
    footerRights: "Bütün hüquqlar qorunur.",
    cartTitle: "Səbətiniz", cartEmpty: "Səbətiniz boşdur.",
    suggText: "Bu sifarişi estetik hədiyyə paketi etmək istəyirsiniz?", suggBtn: "+ 1.50 ₼ Əlavə Et",
    cartTotal: "Ümumi Məbləğ:", checkout: "Sifarişi WhatsApp ilə Tamamla",
    addedToast: (title) => `"${title}" səbətə əlavə edildi`,
    checkoutToast: "Sifarişiniz WhatsApp-a yönləndirildi!",
    waMsgIntro: "Salam, folio. mağazasından sifariş etmək istəyirəm:",
    waNew: "(Yeni)", waUsed: "(2-ci Əl)", waUnit: "ədəd", waTotal: "Cəmi Məbləğ:", waAddr: "Çatdırılma ünvanı:", waConfirm: "Sifarişi təsdiqləməyinizi gözləyirəm.",
    loadingText: "Kitablar yüklənir...", errorText: "Kitablar yüklənmədi, bir az sonra yenidən yoxlayın.",
  },
  tr: {
    all: "Tümü", newBooks: "Yeni Kitaplar", usedBooks: "İkinci El", accessories: "Ayraç & Paketleme",
    search: "Ara...", cart: "Sepet",
    heroTag: "Yeni, İkinci El ve Özel Ayraçlar",
    heroTitle: "Her kitap yeni bir hikayedir.",
    heroDesc: "İster yepyeni premium baskılar, isterse bütçenize uygun temiz ikinci el seçenekler. El yapımı ayraçlar ve özel paketleme ile.",
    heroBtn: "Kitaplara göz at", heroLink: "Ayraçlar ve Paketleme →",
    sectionAll: "Tüm Kitaplar", sectionNew: "Yeni Kitaplar", sectionUsed: "İkinci El Kitaplar",
    cats: ['Tümü','Edebiyat','Bilim','Çocuk','İş','Kişisel Gelişim','Tarih'],
    bestseller: "Çok Satan", newTag: "Yeni", usedTag: "İkinci El", saleTag: "İndirim",
    addBtn: "Ekle", added: "Sepette",
    accTitle: "Kitap Ayraçları & Paketleme",
    accDesc: "Sizin için hazırladığımız özel kitap ayraçları ve premium estetik hediye paketleri.",
    accAdd: "Sepete ekle", accAdded: "Eklendi",
    saleTitle: "Özel Teklifler",
    footerDesc: "Nahçıvan'ın minimalist tasarımlı premium kitap ve okuma aksesuarları mağazası.",
    footerCollections: "Koleksiyonlar", footerNewEd: "Yeni Baskılar", footerUsedB: "İkinci El Kitaplar", footerBookmarks: "Kitap Ayraçları",
    footerService: "Hizmet", footerDelivery: "Teslimat: Nahçıvan", footerWhatsapp: "WhatsApp Sipariş",
    footerRights: "Tüm hakları saklıdır.",
    cartTitle: "Sepetiniz", cartEmpty: "Sepetiniz boş.",
    suggText: "Bu siparişi estetik hediye paketi yapmak ister misiniz?", suggBtn: "+ 1.50 ₼ Ekle",
    cartTotal: "Toplam Tutar:", checkout: "Siparişi WhatsApp ile Tamamla",
    addedToast: (title) => `"${title}" sepete eklendi`,
    checkoutToast: "Siparişiniz WhatsApp'a yönlendirildi!",
    waMsgIntro: "Merhaba, folio. mağazasından sipariş vermek istiyorum:",
    waNew: "(Yeni)", waUsed: "(İkinci El)", waUnit: "adet", waTotal: "Toplam Tutar:", waAddr: "Teslimat adresi:", waConfirm: "Siparişin onaylanmasını bekliyorum.",
    loadingText: "Kitaplar yükleniyor...", errorText: "Kitaplar yüklenemedi, lütfen daha sonra tekrar deneyin.",
  },
  en: {
    all: "All", newBooks: "New Books", usedBooks: "Used", accessories: "Bookmarks & Wrapping",
    search: "Search...", cart: "Cart",
    heroTag: "New, Used & Handcrafted Bookmarks",
    heroTitle: "Every book is a new story.",
    heroDesc: "Brand-new premium editions or clean, budget-friendly used copies — paired with handcrafted bookmarks and gift wrapping.",
    heroBtn: "Browse books", heroLink: "Bookmarks & Wrapping →",
    sectionAll: "All Books", sectionNew: "New Books", sectionUsed: "Used Books",
    cats: ['All','Fiction','Science','Children','Business','Self-Help','History'],
    bestseller: "Bestseller", newTag: "New", usedTag: "Used", saleTag: "Sale",
    addBtn: "Add", added: "In cart",
    accTitle: "Bookmarks & Gift Wrapping",
    accDesc: "Handcrafted bookmarks and premium aesthetic gift wrapping, made for you.",
    accAdd: "Add to cart", accAdded: "Added",
    saleTitle: "Special Offers",
    footerDesc: "Nakhchivan's minimalist premium book and reading accessories store.",
    footerCollections: "Collections", footerNewEd: "New Editions", footerUsedB: "Used Books", footerBookmarks: "Bookmarks",
    footerService: "Service", footerDelivery: "Delivery: Nakhchivan", footerWhatsapp: "Order on WhatsApp",
    footerRights: "All rights reserved.",
    cartTitle: "Your Cart", cartEmpty: "Your cart is empty.",
    suggText: "Would you like to make this order an aesthetic gift package?", suggBtn: "+ 1.50 ₼ Add",
    cartTotal: "Total Amount:", checkout: "Complete Order via WhatsApp",
    addedToast: (title) => `"${title}" added to cart`,
    checkoutToast: "Your order was sent to WhatsApp!",
    waMsgIntro: "Hello, I would like to order from folio.:",
    waNew: "(New)", waUsed: "(Used)", waUnit: "pcs", waTotal: "Total Amount:", waAddr: "Delivery address:", waConfirm: "Looking forward to your confirmation.",
    loadingText: "Loading books...", errorText: "Failed to load books, please try again later.",
  },
};
 
const CAT_KEYS = ['Hamısı','Bədii','Elmi','Uşaq','Biznes','Özünüinkişaf','Tarix'];
 
export default function Home() {
  /* ── Sheet-dən gələn kitablar ── */
  const [booksData, setBooksData] = useState([]);
  const [booksLoading, setBooksLoading] = useState(true);
  const [booksError, setBooksError] = useState(false);
 
  const [cart, setCart] = useState({});
  const [catFilter, setCatFilter] = useState('');
  const [conditionFilter, setConditionFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState('dark');
  const [lang, setLang] = useState('az');
  const [toast, setToast] = useState({ show: false, msg: '' });
 
  const t = DICT[lang];
  const WHATSAPP_NUMBER = "994606777500";
 
  /* Google Sheet-dən kitabları çəkirik */
  useEffect(() => {
    fetch(SHEET_CSV_URL)
      .then(res => {
        if (!res.ok) throw new Error("CSV gətirilə bilmədi");
        return res.text();
      })
      .then(csvText => {
        const parsed = Papa.parse(csvText, { header: true, skipEmptyLines: true });
        const books = parsed.data
          .filter(row => row.title && row.title.trim() !== "")
          .map((row, index) => ({
            id: row.id && row.id.trim() !== "" ? row.id : `b${index + 1}`,
            title: row.title?.trim(),
            author: row.author?.trim() || "",
            price: parseFloat(String(row.price || "0").replace(",", ".").replace(/[^\d.]/g, "")) || 0,
            old: row.old && String(row.old).trim() !== "" ? (parseFloat(String(row.old).replace(",", ".").replace(/[^\d.]/g, "")) || null) : null,
            isNewBook: ["TRUE", "DOĞRU", "DOGRU", "1", "EVET", "BƏLİ"].includes((row.isNewBook || "").trim().toUpperCase()),
            cat: row.cat?.trim() || "",
            badge: row.badge && row.badge.trim() !== "" ? row.badge.trim() : null,
            image: row.image?.trim() || "",
            onSale: ["TRUE", "DOĞRU", "DOGRU", "1", "EVET", "BƏLİ"].includes((row.onSale || "").trim().toUpperCase()),
          }));
        setBooksData(books);
        setBooksLoading(false);
      })
      .catch(err => {
        console.error("Kitablar yüklənərkən xəta:", err);
        setBooksError(true);
        setBooksLoading(false);
      });
  }, []);
 
  /* Tab başlığı + ikon */
  useEffect(() => {
    document.title = "folio. — Premium Book Store";
    let link = document.querySelector("link[rel~='icon']");
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.getElementsByTagName('head')[0].appendChild(link);
    }
    link.type = 'image/png';
    link.href = 'https://img.icons8.com/ios-filled/50/ffffff/sparkling.png';
  }, []);
 
  /* Scroll-reveal: section-lar sıra ilə görünəndə yuxarı sürüşərək düşür */
  const revealRefs = useRef([]);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('in-view');
        });
      },
      { threshold: 0.15 }
    );
    revealRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [booksLoading]);
  const addReveal = (el) => { if (el && !revealRefs.current.includes(el)) revealRefs.current.push(el); };
 
  const showToast = (msg) => {
    setToast({ show: true, msg });
    setTimeout(() => setToast({ show: false, msg: '' }), 2800);
  };
 
  const addToCart = (item) => {
    setCart(prev => {
      const existing = prev[item.id];
      return { ...prev, [item.id]: existing ? { ...existing, qty: existing.qty + 1 } : { ...item, qty: 1 } };
    });
    showToast(t.addedToast(item.title));
  };
 
  const changeQty = (id, delta) => {
    setCart(prev => {
      const item = prev[id];
      if (!item) return prev;
      const newQty = item.qty + delta;
      const updated = { ...prev };
      if (newQty <= 0) delete updated[id]; else updated[id] = { ...item, qty: newQty };
      return updated;
    });
  };
 
  const removeItem = (id) => {
    setCart(prev => { const updated = { ...prev }; delete updated[id]; return updated; });
  };
 
  const handleCheckoutWhatsApp = () => {
    const items = Object.values(cart);
    if (items.length === 0) return;
    let total = items.reduce((sum, item) => sum + (item.price * item.qty), 0);
 
    let messageText = `${t.waMsgIntro}\n\n`;
    items.forEach((item, index) => {
      const typeLabel = item.isNewBook === true ? ` ${t.waNew}` : item.isNewBook === false ? ` ${t.waUsed}` : '';
      messageText += `${index + 1}. 📦 ${item.title}${typeLabel} - ${item.qty} ${t.waUnit} (${(item.price * item.qty).toFixed(2)} ₼)\n`;
    });
    messageText += `\n💰 *${t.waTotal}* ${total.toFixed(2)} ₼\n📍 *${t.waAddr}* Naxçıvan\n\n${t.waConfirm}`;
 
    const encodedMessage = encodeURIComponent(messageText);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, '_blank');
 
    setCart({});
    setIsCartOpen(false);
    showToast(t.checkoutToast);
  };
 
  const filteredBooks = booksData.filter(b => {
    const matchesCat = catFilter === '' || (b.cat || '').trim().toLowerCase() === catFilter.trim().toLowerCase();
    const matchesSearch = b.title.toLowerCase().includes(searchQuery.toLowerCase()) || b.author.toLowerCase().includes(searchQuery.toLowerCase());
    if (conditionFilter === 'new') return matchesCat && matchesSearch && b.isNewBook;
    if (conditionFilter === 'used') return matchesCat && matchesSearch && !b.isNewBook;
    return matchesCat && matchesSearch;
  });
 
  const cartItems = Object.values(cart);
  const cartCount = cartItems.reduce((sum, i) => sum + i.qty, 0);
  const cartTotal = cartItems.reduce((sum, i) => sum + i.price * i.qty, 0);
 
  const saleBooks = booksData.filter(b => b.onSale);
 
  const goTo = (cond) => { setConditionFilter(cond); setIsMenuOpen(false); window.location.href = '#books'; };
 
  return (
    <div className={`app-root theme-${theme}`}>
 
      {/* ── NAVBAR ── */}
      <div className="nav-wrapper">
        <nav className="apple-nav-floating">
          <div className="nav-container">
            <a href="#" className="nav-logo-apple">folio<span className="logo-dot">.</span></a>
 
            <ul className="nav-links">
              <li><button className={conditionFilter === 'all' ? 'active-link' : ''} onClick={() => goTo('all')}>{t.all}</button></li>
              <li><button className={conditionFilter === 'new' ? 'active-link' : ''} onClick={() => goTo('new')}>{t.newBooks}</button></li>
              <li><button className={conditionFilter === 'used' ? 'active-link' : ''} onClick={() => goTo('used')}>{t.usedBooks}</button></li>
              <li><a href="#accessories">{t.accessories}</a></li>
            </ul>
 
            <div className="nav-right">
              <div className="nav-search">
                <input type="text" placeholder={t.search} value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
              </div>
 
              <select className="lang-select" value={lang} onChange={(e) => setLang(e.target.value)} aria-label="Language">
                <option value="az">AZ</option>
                <option value="tr">TR</option>
                <option value="en">EN</option>
              </select>
 
              <button className="theme-toggle" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} aria-label="Toggle theme">
                {theme === 'dark' ? '☀' : '☾'}
              </button>
 
              <button className="cart-btn" onClick={() => setIsCartOpen(true)}>
                <span>{t.cart}</span>
                <span className="cart-count">{cartCount}</span>
              </button>
 
              <button className="hamburger" onClick={() => setIsMenuOpen(true)} aria-label="Menu">
                <span></span><span></span><span></span>
              </button>
            </div>
          </div>
        </nav>
      </div>
 
      {/* ── MOBİL MENYU ── */}
      {isMenuOpen && <div className="mobile-overlay" onClick={() => setIsMenuOpen(false)}></div>}
      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-hdr">
          <span className="nav-logo-apple">folio<span className="logo-dot">.</span></span>
          <button className="close-cart" onClick={() => setIsMenuOpen(false)}>✕</button>
        </div>
        <div className="mobile-search">
          <input type="text" placeholder={t.search} value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
        </div>
        <button className="mobile-link" onClick={() => goTo('all')}>{t.all}</button>
        <button className="mobile-link" onClick={() => goTo('new')}>{t.newBooks}</button>
        <button className="mobile-link" onClick={() => goTo('used')}>{t.usedBooks}</button>
        <a className="mobile-link" href="#accessories" onClick={() => setIsMenuOpen(false)}>{t.accessories}</a>
 
        <div className="mobile-menu-footer">
          <select className="lang-select" value={lang} onChange={(e) => setLang(e.target.value)}>
            <option value="az">AZ</option>
            <option value="tr">TR</option>
            <option value="en">EN</option>
          </select>
          <button className="theme-toggle" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
            {theme === 'dark' ? '☀ Light' : '☾ Dark'}
          </button>
        </div>
      </div>
 
      {/* ── HERO (tam ekran) ── */}
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-content">
            <div className="hero-tag">{t.heroTag}</div>
            <h1>{t.heroTitle}</h1>
            <p className="hero-desc">{t.heroDesc}</p>
            <div className="hero-actions">
              <a href="#books" className="btn-apple-primary">{t.heroBtn}</a>
              <a href="#accessories" className="btn-apple-link">{t.heroLink}</a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="apple-book-mockup">
              <div className="book-spine"></div>
              <div className="book-cover-content">
                <div className="mock-logo">FOLIO.</div>
                <div className="mock-title">{lang === 'en' ? 'Updated' : lang === 'tr' ? 'Yenilendi' : 'Yeniləndi'}</div>
                <div className="mock-author">2026 Collection</div>
              </div>
            </div>
          </div>
        </div>
        <div className="scroll-hint">↓</div>
      </section>
 
      {/* ── KİTABLAR ── */}
      <section className="section reveal" id="books" ref={addReveal}>
        <div className="section-head-flex">
          <h2 className="section-title">
            {conditionFilter === 'all' && t.sectionAll}
            {conditionFilter === 'new' && t.sectionNew}
            {conditionFilter === 'used' && t.sectionUsed}
          </h2>
          <div className="condition-switcher">
            <button className={conditionFilter === 'all' ? 'active' : ''} onClick={() => setConditionFilter('all')}>{t.all}</button>
            <button className={conditionFilter === 'new' ? 'active' : ''} onClick={() => setConditionFilter('new')}>{t.newBooks}</button>
            <button className={conditionFilter === 'used' ? 'active' : ''} onClick={() => setConditionFilter('used')}>{t.usedBooks}</button>
          </div>
        </div>
 
        <div className="cat-pills">
          {t.cats.map((label, i) => {
            const key = CAT_KEYS[i];
            return (
              <button key={key} className={`pill ${((key === 'Hamısı' && catFilter === '') || catFilter === key) ? 'active' : ''}`}
                onClick={() => setCatFilter(key === 'Hamısı' ? '' : key)}>
                {label}
              </button>
            );
          })}
        </div>
 
        {booksLoading && <p className="state-msg">{t.loadingText}</p>}
        {booksError && <p className="state-msg state-error">{t.errorText}</p>}
 
        {!booksLoading && !booksError && (
          <div className="books-grid">
            {filteredBooks.map(b => (
              <div className="book-card" key={b.id}>
                <div className="book-thumb">
                  {b.image ? (
                    <img src={b.image} alt={b.title} className="book-img" loading="lazy" />
                  ) : (
                    <div className={`premium-book-placeholder ${!b.isNewBook ? 'used-placeholder' : ''}`}>
                      <span className="book-initial">{b.title[0]}</span>
                    </div>
                  )}
                  <span className={`condition-tag ${b.isNewBook ? 'tag-new-book' : 'tag-used-book'}`}>
                    {b.isNewBook ? t.newTag : t.usedTag}
                  </span>
                  {b.badge && <span className={`book-badge badge-${b.badge}`}>{b.badge === 'best' ? t.bestseller : t.newTag}</span>}
                </div>
                <div className="book-body">
                  <div className="book-title" title={b.title}>{b.title}</div>
                  <div className="book-author">{b.author}</div>
                  <div className="book-footer">
                    <span className="price-main">{b.price.toFixed(2)} ₼</span>
                    <button className={`add-btn ${cart[b.id] ? 'added' : ''}`} onClick={() => addToCart(b)}>
                      {cart[b.id] ? t.added : t.addBtn}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
 
      {/* ── AKSESUARLAR ── */}
      <section className="section section-dark-bg reveal" id="accessories" ref={addReveal}>
        <div className="section-head">
          <h2 className="section-title">{t.accTitle}</h2>
          <p className="section-subtitle">{t.accDesc}</p>
        </div>
        <div className="accessories-grid">
          {ACCESSORIES_DATA.map(acc => (
            <div className="accessory-card" key={acc.id}>
              <div className="acc-icon-box">{acc.type === 'packaging' ? '🎁' : '🔖'}</div>
              <div className="acc-details">
                <div className="acc-title">{acc.title}</div>
                <div className="acc-desc">{acc.desc}</div>
                <div className="acc-footer">
                  <span className="acc-price">{acc.price.toFixed(2)} ₼</span>
                  <button className={`add-btn ${cart[acc.id] ? 'added' : ''}`} onClick={() => addToCart(acc)}>
                    {cart[acc.id] ? t.accAdded : t.accAdd}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
 
      {/* ── ENDİRİMLƏR ── */}
      <section className="section reveal" id="sale" ref={addReveal}>
        <div className="section-head"><h2 className="section-title">{t.saleTitle}</h2></div>
        <div className="books-grid">
          {saleBooks.map(b => (
            <div className="book-card" key={b.id}>
              <div className="book-thumb">
                {b.image ? (
                  <img src={b.image} alt={b.title} className="book-img" loading="lazy" />
                ) : (
                  <div className="premium-book-placeholder sale-placeholder">
                    <span className="book-initial">{b.title[0]}</span>
                  </div>
                )}
                <span className={`condition-tag ${b.isNewBook ? 'tag-new-book' : 'tag-used-book'}`}>
                  {b.isNewBook ? t.newTag : t.usedTag}
                </span>
                <span className="book-badge badge-sale">{t.saleTag}</span>
              </div>
              <div className="book-body">
                <div className="book-title" title={b.title}>{b.title}</div>
                <div className="book-author">{b.author}</div>
                <div className="book-footer">
                  <div className="price-block">
                    <span className="price-main">{b.price.toFixed(2)} ₼</span>
                    {b.old != null && <span className="price-old">{b.old.toFixed(2)} ₼</span>}
                  </div>
                  <button className={`add-btn ${cart[b.id] ? 'added' : ''}`} onClick={() => addToCart(b)}>
                    {cart[b.id] ? t.added : t.addBtn}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
 
      {/* ── FOOTER ── */}
      <footer className="reveal" ref={addReveal}>
        <div className="footer-inner">
          <div className="footer-brand">
            <div className="footer-logo">folio<span className="logo-dot">.</span></div>
            <p>{t.footerDesc}</p>
          </div>
          <div className="footer-col">
            <h4>{t.footerCollections}</h4>
            <a href="#books">{t.footerNewEd}</a>
            <a href="#books">{t.footerUsedB}</a>
            <a href="#accessories">{t.footerBookmarks}</a>
          </div>
          <div className="footer-col">
            <h4>{t.footerService}</h4>
            <a href="#">{t.footerDelivery}</a>
            <a href={`https://wa.me/${WHATSAPP_NUMBER}`}>{t.footerWhatsapp}</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 folio. {t.footerRights}</p>
          <p>Azərbaycan · ₼ AZN</p>
        </div>
      </footer>
 
      {/* ── SƏBƏT PANELİ ── */}
      {isCartOpen && <div className="cart-overlay" onClick={() => setIsCartOpen(false)}></div>}
      <div className={`cart-panel ${isCartOpen ? 'open' : ''}`}>
        <div className="cart-hdr">
          <h3>{t.cartTitle}</h3>
          <button className="close-cart" onClick={() => setIsCartOpen(false)}>✕</button>
        </div>
        <div className="cart-body">
          {cartItems.length === 0 ? (
            <div className="cart-empty">{t.cartEmpty}</div>
          ) : (
            <>
              {cartItems.map(item => (
                <div className="cart-item" key={item.id}>
                  <div className="ci-info">
                    <div className="ci-title-wrapper">
                      <span className="ci-title">{item.title}</span>
                      {item.isNewBook !== undefined && (
                        <span className={`cart-cond-label ${item.isNewBook ? 'lbl-n' : 'lbl-u'}`}>
                          {item.isNewBook ? t.newTag : t.usedTag}
                        </span>
                      )}
                    </div>
                    {item.author && <div className="ci-author">{item.author}</div>}
                    <div className="ci-row">
                      <span className="ci-price">{(item.price * item.qty).toFixed(2)} ₼</span>
                      <div className="qty-row">
                        <button className="q-btn" onClick={() => changeQty(item.id, -1)}>−</button>
                        <span className="q-num">{item.qty}</span>
                        <button className="q-btn" onClick={() => changeQty(item.id, 1)}>+</button>
                        <button className="q-del" onClick={() => removeItem(item.id)}>Sil</button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
 
              {!cart["a1"] && (
                <div className="cart-suggestion-box">
                  <div className="sugg-text">🎁 {t.suggText}</div>
                  <button className="sugg-add-btn" onClick={() => addToCart(ACCESSORIES_DATA[0])}>{t.suggBtn}</button>
                </div>
              )}
            </>
          )}
        </div>
        {cartItems.length > 0 && (
          <div className="cart-ftr">
            <div className="cart-total-row"><span>{t.cartTotal}</span><strong>{cartTotal.toFixed(2)} ₼</strong></div>
            <button className="checkout-btn" onClick={handleCheckoutWhatsApp}>{t.checkout}</button>
          </div>
        )}
      </div>
 
      <div className={`toast ${toast.show ? 'show' : ''}`}>{toast.msg}</div>
 
      {/* ── CSS ── */}
      <style jsx global>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
 
        /* ---- Theme variables ---- */
        .theme-dark {
          --bg: #000000; --bg-alt: #0a0a0c; --surface: #161617; --surface-2: #1c1c1e; --surface-3: #232326;
          --border: #2d2d2f; --text: #f5f5f7; --text-dim: #86868b; --accent: #0071e3;
        }
        .theme-light {
          --bg: #fafafa; --bg-alt: #f1f1f3; --surface: #ffffff; --surface-2: #f0f0f2; --surface-3: #e8e8ea;
          --border: #e2e2e4; --text: #1d1d1f; --text-dim: #6e6e73; --accent: #0066cc;
        }
        .app-root { background: var(--bg); color: var(--text); min-height: 100vh; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; transition: background 0.25s ease, color 0.25s ease; }
 
        /* ---- Navbar ---- */
        .nav-wrapper { position: fixed; top: 0; left: 0; right: 0; z-index: 100; padding: 22px 24px 0 24px; }
        .apple-nav-floating { background: var(--surface); opacity: 0.92; backdrop-filter: blur(24px); -webkit-backdrop-filter: blur(24px);
          border: 1px solid var(--border); border-radius: 16px; max-width: 1100px; margin: 0 auto; box-shadow: 0 4px 24px rgba(0,0,0,0.18); }
        .nav-container { height: 58px; display: flex; align-items: center; justify-content: space-between; padding: 0 22px; }
 
        .nav-logo-apple { font-weight: 700; font-size: 1.25rem; color: var(--text); text-decoration: none; letter-spacing: -0.4px; }
        .logo-dot { color: var(--accent); }
 
        .nav-links { display: flex; list-style: none; gap: 22px; align-items: center; }
        .nav-links a { color: var(--text-dim); text-decoration: none; font-size: 0.82rem; font-weight: 500; }
        .nav-links a:hover { color: var(--text); }
        .nav-links button { background: none; border: none; color: var(--text-dim); font-size: 0.82rem; font-weight: 500; cursor: pointer; font-family: inherit; }
        .nav-links button:hover, .nav-links button.active-link { color: var(--text); }
 
        .nav-right { display: flex; align-items: center; gap: 12px; }
        .nav-search input { background: var(--surface-2); border: 1px solid var(--border); outline: none; color: var(--text); font-size: 0.78rem; padding: 6px 12px; border-radius: 8px; width: 110px; }
        .lang-select { background: var(--surface-2); border: 1px solid var(--border); color: var(--text); font-size: 0.75rem; font-weight: 600; padding: 5px 6px; border-radius: 6px; cursor: pointer; }
        .theme-toggle { background: var(--surface-2); border: 1px solid var(--border); color: var(--text); width: 30px; height: 30px; border-radius: 6px; cursor: pointer; font-size: 0.9rem; }
        .cart-btn { background: none; border: 1px solid var(--border); color: var(--text); font-size: 0.8rem; padding: 6px 12px; border-radius: 8px; cursor: pointer; display: flex; align-items: center; gap: 6px; }
        .cart-count { background: var(--accent); color: #fff; font-size: 0.68rem; font-weight: 600; padding: 1px 6px; border-radius: 10px; }
 
        .hamburger { display: none; flex-direction: column; justify-content: center; gap: 4px; width: 32px; height: 32px; background: var(--surface-2); border: 1px solid var(--border); border-radius: 6px; cursor: pointer; }
        .hamburger span { width: 16px; height: 2px; background: var(--text); margin: 0 auto; }
 
        /* ---- Mobile menu ---- */
        .mobile-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.4); backdrop-filter: blur(3px); z-index: 200; }
        .mobile-menu { position: fixed; top: 0; right: 0; bottom: 0; width: 78%; max-width: 320px; background: var(--surface); border-left: 1px solid var(--border);
          z-index: 201; transform: translateX(100%); transition: transform 0.25s ease; display: flex; flex-direction: column; padding: 18px; gap: 6px; }
        .mobile-menu.open { transform: translateX(0); }
        .mobile-menu-hdr { display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px; }
        .mobile-search input { width: 100%; background: var(--surface-2); border: 1px solid var(--border); color: var(--text); padding: 8px 12px; border-radius: 8px; font-size: 0.85rem; margin-bottom: 12px; }
        .mobile-link { display: block; width: 100%; text-align: left; background: none; border: none; border-bottom: 1px solid var(--border); color: var(--text); font-size: 0.95rem; padding: 12px 4px; text-decoration: none; cursor: pointer; }
        .mobile-menu-footer { margin-top: auto; display: flex; gap: 10px; padding-top: 12px; }
        .mobile-menu-footer .theme-toggle { width: auto; flex: 1; font-size: 0.78rem; font-weight: 600; }
 
        /* ---- Hero (full screen) ---- */
        .hero { min-height: 100vh; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 100px 16px 40px; position: relative; }
        .hero-inner { max-width: 1100px; margin: 0 auto; width: 100%; display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 40px; align-items: center; }
        .hero-tag { font-size: 0.82rem; font-weight: 600; color: var(--accent); margin-bottom: 14px; letter-spacing: 0.2px; }
        .hero h1 { font-size: clamp(2rem, 3.6vw, 3.2rem); font-weight: 700; letter-spacing: -1px; color: var(--text); line-height: 1.15; margin-bottom: 18px; }
        .hero-desc { color: var(--text-dim); font-size: 1.05rem; line-height: 1.6; margin-bottom: 26px; max-width: 480px; }
        .hero-actions { display: flex; align-items: center; gap: 18px; }
        .btn-apple-primary { background: var(--accent); color: #fff; border-radius: 8px; padding: 11px 22px; font-size: 0.85rem; font-weight: 600; text-decoration: none; }
        .btn-apple-link { color: var(--accent); text-decoration: none; font-size: 0.88rem; font-weight: 500; }
        .scroll-hint { position: absolute; bottom: 30px; left: 50%; transform: translateX(-50%); color: var(--text-dim); font-size: 1.2rem; animation: bounce 2s infinite; }
        @keyframes bounce { 0%,100%{transform:translate(-50%,0);} 50%{transform:translate(-50%,8px);} }
 
        .hero-visual { display: flex; justify-content: center; }
        .apple-book-mockup { width: 190px; height: 250px; background: var(--surface-2); border-radius: 4px 12px 12px 4px; position: relative; box-shadow: 0 25px 50px rgba(0,0,0,0.35); display: flex; border: 1px solid var(--border); }
        .book-spine { width: 10px; background: rgba(0,0,0,0.15); }
        .book-cover-content { flex: 1; padding: 22px; display: flex; flex-direction: column; justify-content: center; align-items: center; }
        .mock-logo { font-size: 0.65rem; color: var(--text-dim); margin-bottom: auto; letter-spacing: 1px; }
        .mock-title { font-size: 1.25rem; font-weight: 700; color: var(--text); }
        .mock-author { font-size: 0.75rem; color: var(--text-dim); margin-bottom: auto; }
 
        /* ---- Scroll reveal ---- */
        .reveal { opacity: 0; transform: translateY(36px); transition: opacity 0.6s ease, transform 0.6s ease; }
        .reveal.in-view { opacity: 1; transform: translateY(0); }
 
        /* ---- Sections ---- */
        .section { max-width: 1100px; margin: 0 auto; padding: 60px 16px; }
        .section-dark-bg { background: var(--bg-alt); max-width: 100vw; padding: 70px max(16px, calc((100vw - 1100px)/2)); border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); }
        .section-head-flex { display: flex; justify-content: space-between; align-items: center; margin-bottom: 22px; flex-wrap: wrap; gap: 12px; }
        .section-title { font-size: 1.7rem; font-weight: 700; color: var(--text); letter-spacing: -0.4px; }
        .section-subtitle { color: var(--text-dim); font-size: 0.95rem; margin-top: 6px; margin-bottom: 26px; max-width: 560px; }
 
        .state-msg { color: var(--text-dim); font-size: 0.9rem; padding: 20px 0; }
        .state-error { color: #ff453a; }
 
        .condition-switcher { background: var(--surface-2); border: 1px solid var(--border); padding: 3px; border-radius: 8px; display: flex; }
        .condition-switcher button { background: transparent; border: none; color: var(--text-dim); padding: 6px 14px; font-size: 0.8rem; font-weight: 600; border-radius: 6px; cursor: pointer; }
        .condition-switcher button.active { background: var(--accent); color: #fff; }
 
        .cat-pills { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 30px; }
        .pill { padding: 6px 13px; border-radius: 8px; border: 1px solid var(--border); background: transparent; color: var(--text); font-size: 0.8rem; font-weight: 500; cursor: pointer; }
        .pill.active { background: var(--text); border-color: var(--text); color: var(--bg); }
 
        .books-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(175px, 1fr)); gap: 18px; }
        .book-card { background: var(--surface); border-radius: 10px; overflow: hidden; border: 1px solid var(--border); display: flex; flex-direction: column; position: relative; }
        .book-thumb { aspect-ratio: 3/3.6; width: 100%; background: var(--bg-alt); display: flex; align-items: center; justify-content: center; position: relative; border-bottom: 1px solid var(--border); }
 
        .book-img { width: 100%; height: 100%; object-fit: cover; }
 
        .premium-book-placeholder { width: 85px; height: 115px; background: var(--surface-3); border-radius: 3px 6px 6px 3px; display: flex; align-items: center; justify-content: center; border-left: 3px solid rgba(0,0,0,0.18); box-shadow: 0 8px 16px rgba(0,0,0,0.3); }
        .used-placeholder { background: #19222b; }
        .sale-placeholder { background: #2b1818; }
        .book-initial { font-size: 1.6rem; font-weight: 700; color: var(--text-dim); }
 
        .condition-tag { position: absolute; bottom: 8px; left: 8px; font-size: 0.65rem; font-weight: 600; padding: 2px 7px; border-radius: 5px; }
        .tag-new-book { background: rgba(48, 209, 88, 0.15); color: #2bb352; border: 1px solid rgba(48, 209, 88, 0.25); }
        .tag-used-book { background: rgba(10, 132, 255, 0.15); color: #0a84ff; border: 1px solid rgba(10, 132, 255, 0.25); }
 
        .book-badge { position: absolute; top: 8px; left: 8px; font-size: 0.6rem; font-weight: 700; padding: 2px 7px; border-radius: 5px; text-transform: uppercase; }
        .badge-new { background: #1d3528; color: #30d158; }
        .badge-best { background: #3a2d16; color: #ff9f0a; }
        .badge-sale { background: #3b1d1d; color: #ff453a; }
 
        .book-body { padding: 13px; flex: 1; display: flex; flex-direction: column; }
        .book-title { font-size: 0.88rem; font-weight: 700; color: var(--text); margin-bottom: 2px; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; }
        .book-author { font-size: 0.78rem; color: var(--text-dim); margin-bottom: 14px; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; }
        .book-footer { display: flex; align-items: center; justify-content: space-between; margin-top: auto; }
        .price-main { font-size: 0.95rem; font-weight: 700; color: var(--text); }
        .price-old { font-size: 0.75rem; color: var(--text-dim); text-decoration: line-through; margin-left: 4px; }
 
        .add-btn { background: transparent; color: var(--accent); border: 1px solid var(--accent); border-radius: 8px; padding: 5px 12px; font-size: 0.7rem; font-weight: 600; cursor: pointer; transition: all 0.2s; }
        .add-btn:hover { background: var(--accent); color: #fff; }
        .add-btn.added { background: #30d158; border-color: #30d158; color: #fff; }
 
        .accessories-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 18px; margin-top: 10px; }
        .accessory-card { background: var(--surface); border: 1px solid var(--border); border-radius: 12px; padding: 18px; display: flex; gap: 16px; align-items: center; }
        .acc-icon-box { font-size: 2rem; background: var(--surface-3); width: 54px; height: 54px; display: flex; align-items: center; justify-content: center; border-radius: 8px; }
        .acc-details { flex: 1; }
        .acc-title { font-size: 0.9rem; font-weight: 700; color: var(--text); }
        .acc-desc { font-size: 0.78rem; color: var(--text-dim); margin-bottom: 10px; }
        .acc-footer { display: flex; justify-content: space-between; align-items: center; }
        .acc-price { font-size: 0.95rem; font-weight: 700; color: var(--text); }
 
        footer { background: var(--surface); border-top: 1px solid var(--border); padding: 50px 16px 30px; color: var(--text-dim); font-size: 0.8rem; }
        .footer-inner { max-width: 1100px; margin: 0 auto; display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 28px; margin-bottom: 26px; }
        .footer-brand .footer-logo { font-size: 1.2rem; font-weight: 700; color: var(--text); margin-bottom: 8px; }
        .footer-col h4 { color: var(--text); font-size: 0.8rem; margin-bottom: 12px; font-weight: 700; }
        .footer-col a { display: block; color: var(--text-dim); text-decoration: none; margin-bottom: 8px; }
        .footer-bottom { max-width: 1100px; margin: 0 auto; border-top: 1px solid var(--border); padding-top: 16px; display: flex; justify-content: space-between; }
 
        /* ---- Cart ---- */
        .cart-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.4); backdrop-filter: blur(4px); z-index: 200; }
        .cart-panel { position: fixed; top: 0; right: 0; bottom: 0; width: 380px; background: var(--surface); border-left: 1px solid var(--border); z-index: 201; display: flex; flex-direction: column; transform: translateX(100%); transition: transform 0.25s ease-out; }
        .cart-panel.open { transform: translateX(0); }
        .cart-hdr { padding: 18px; border-bottom: 1px solid var(--border); display: flex; align-items: center; justify-content: space-between; }
        .cart-hdr h3 { font-weight: 700; }
        .close-cart { background: none; border: none; color: var(--text-dim); font-size: 1.1rem; cursor: pointer; }
        .cart-body { flex: 1; overflow-y: auto; padding: 18px; }
        .cart-empty { text-align: center; color: var(--text-dim); padding-top: 30px; }
        .cart-item { padding-bottom: 14px; margin-bottom: 14px; border-bottom: 1px solid var(--border); }
 
        .ci-title-wrapper { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }
        .ci-title { font-weight: 700; color: var(--text); font-size: 0.85rem; }
        .cart-cond-label { font-size: 0.6rem; padding: 1px 5px; border-radius: 4px; font-weight: 700; }
        .lbl-n { background: rgba(48,209,88,0.15); color: #2bb352; }
        .lbl-u { background: rgba(10,132,255,0.15); color: #0a84ff; }
 
        .ci-author { font-size: 0.75rem; color: var(--text-dim); }
        .ci-row { display: flex; align-items: center; justify-content: space-between; margin-top: 8px; }
        .ci-price { font-weight: 700; color: var(--text); }
        .qty-row { display: flex; align-items: center; gap: 6px; }
        .q-btn { width: 22px; height: 22px; background: var(--surface-2); border: 1px solid var(--border); color: var(--text); cursor: pointer; border-radius: 5px; }
        .q-num { font-size: 0.8rem; color: var(--text); }
        .q-del { background: none; border: none; color: #ff453a; cursor: pointer; font-size: 0.75rem; margin-left: 6px; font-weight: 600; }
 
        .cart-suggestion-box { background: var(--surface-3); border: 1px dashed var(--border); padding: 14px; border-radius: 8px; margin-top: 12px; display: flex; flex-direction: column; gap: 8px; }
        .sugg-text { font-size: 0.78rem; color: var(--text); }
        .sugg-add-btn { background: var(--accent); color: #fff; border: none; border-radius: 6px; padding: 8px; font-size: 0.75rem; font-weight: 700; cursor: pointer; }
 
        .cart-ftr { padding: 18px; border-top: 1px solid var(--border); }
        .cart-total-row { display: flex; justify-content: space-between; margin-bottom: 14px; font-size: 0.9rem; }
        .cart-total-row strong { color: var(--text); font-size: 1.05rem; }
        .checkout-btn { width: 100%; background: var(--accent); color: #fff; border: none; border-radius: 8px; padding: 13px; font-weight: 700; cursor: pointer; }
 
        .toast { position: fixed; bottom: 24px; left: 50%; transform: translateX(-50%) translateY(100px); background: var(--text); color: var(--bg); padding: 9px 18px; border-radius: 10px; font-size: 0.8rem; font-weight: 600; z-index: 300; opacity: 0; transition: all 0.25s ease; }
        .toast.show { transform: translateX(-50%) translateY(0); opacity: 1; }
 
        /* ---- Responsive: hamburger devreye girer ---- */
        @media (max-width: 860px) {
          .nav-links, .nav-search { display: none; }
          .hamburger { display: flex; }
        }
 
        @media (max-width: 768px) {
          .nav-wrapper { padding: 14px 12px 0 12px; }
          .apple-nav-floating { border-radius: 14px; }
          .nav-container { padding: 0 14px; height: 52px; }
          .lang-select { display: none; }
 
          .hero { min-height: 92vh; padding-top: 90px; }
          .hero-inner { grid-template-columns: 1fr; text-align: center; }
          .hero-actions { justify-content: center; }
          .hero-visual { display: none; }
 
          .books-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 10px; }
          .book-thumb { aspect-ratio: 3/3.4; }
          .premium-book-placeholder { width: 68px; height: 92px; }
          .book-title { font-size: 0.82rem; }
          .book-author { font-size: 0.72rem; }
          .price-main { font-size: 0.88rem; }
          .add-btn { padding: 4px 9px; font-size: 0.65rem; }
 
          .accessories-grid { grid-template-columns: 1fr; }
          .footer-inner { grid-template-columns: 1fr; }
          .cart-panel { width: 100%; }
        }
      `}</style>
    </div>
  );
}