"use client";
import React, { useState, useEffect } from 'react';

// Kitab Məlumatları
const BOOKS_DATA = [
  {id:1,  title:"Əli və Nino",          author:"Kurban Said",             price:12.99, isNewBook: true,  cat:"Bədii",        badge:"best"},
  {id:2,  title:"Dəli Kür",             author:"İlyas Əfəndiyev",         price:7.50,  isNewBook: false, cat:"Bədii",        badge:null},
  {id:3,  title:"Atomik Vərdişlər",     author:"James Clear",             price:15.50, isNewBook: true,  cat:"Özünüinkişaf", badge:"best"},
  {id:4,  title:"Sahibkar Psixologiyası",author:"Daniel Kahneman",        price:11.00, isNewBook: false, cat:"Biznes",       badge:null},
  {id:5,  title:"Zaman Maşını",         author:"H.G. Wells",              price:8.00,  isNewBook: true,  cat:"Elmi",         badge:"new"},
  {id:6,  title:"Balaca Şahzadə",       author:"Antoine de Saint-Exupéry",price:4.50,  isNewBook: false, cat:"Uşaq",         badge:null},
  {id:7,  title:"Azərbaycan Tarixi",    author:"İqrar Əliyev",            price:22.00, isNewBook: true,  cat:"Tarix",        badge:"new"},
  {id:8,  title:"Düşün və Var Ol",      author:"Napoleon Hill",           price:11.00, isNewBook: true,  cat:"Özünüinkişaf", badge:null},
];

const SALE_DATA = [
  {id:9,  title:"Uşaq Masalları",       author:"Müxtəlif Müəlliflər",     price:5.99,  old:9.99,  isNewBook: true,  cat:"Uşaq",         badge:"sale"},
  {id:10, title:"Sapiens",              author:"Yuval Noah Harari",       price:9.00,  old:20.00, isNewBook: false, cat:"Tarix",        badge:"sale"},
];

// Aksesuar Qiymətləri (30 qəpik ayraclar və 1.50 ₼ paketləmə)
const ACCESSORIES_DATA = [
  {id:"a1", title:"Premium Hədiyyə Paketləməsi", desc:"Xüsusi möhürlü və qoxulu sənətkar kağızı", price:1.50, type:"packaging"},
  {id:"a2", title:"Minimalist Kitab Ayracı",    desc:"Əlimizdə olan xüsusi dizaynlı incə ayrac", price:0.30, type:"bookmark"},
  {id:"a3", title:"Klassik Estetik Ayrac",       desc:"Kitabsevərlər üçün təmiz vizual toxunuş", price:0.30, type:"bookmark"},
];

export default function Home() {
  const [cart, setCart] = useState({});
  const [catFilter, setCatFilter] = useState('');
  const [conditionFilter, setConditionFilter] = useState('all'); 
  const [searchQuery, setSearchQuery] = useState('');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toast, setToast] = useState({ show: false, msg: '' });

  // WhatsApp Nömrən
  const WHATSAPP_NUMBER = "994606777500"; 

  // Brauzer tabındakı başlığı və dünya işarəsini premium ikonla əvəz etmək üçün:
  useEffect(() => {
    document.title = "folio. — Premium Book Store";
    
    let link = document.querySelector("link[rel~='icon']");
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.getElementsByTagName('head')[0].appendChild(link);
    }
    link.type = 'image/png';
    // Sənin üçün seçdiyim minimalist parıldayan premium ulduz ikonu:
    link.href = 'https://img.icons8.com/ios-filled/50/ffffff/sparkling.png';
  }, []);

  const showToast = (msg) => {
    setToast({ show: true, msg });
    setTimeout(() => setToast({ show: false, msg: '' }), 2800);
  };

  const addToCart = (item) => {
    setCart(prev => {
      const existing = prev[item.id];
      return {
        ...prev,
        [item.id]: existing ? { ...existing, qty: existing.qty + 1 } : { ...item, qty: 1 }
      };
    });
    showToast(`"${item.title}" səbətə əlavə edildi`);
  };

  const changeQty = (id, delta) => {
    setCart(prev => {
      const item = prev[id];
      if (!item) return prev;
      const newQty = item.qty + delta;
      const updated = { ...prev };
      if (newQty <= 0) {
        delete updated[id];
      } else {
        updated[id] = { ...item, qty: newQty };
      }
      return updated;
    });
  };

  const removeItem = (id) => {
    setCart(prev => {
      const updated = { ...prev };
      delete updated[id];
      return updated;
    });
  };

  const handleCheckoutWhatsApp = () => {
    const items = Object.values(cart);
    if (items.length === 0) return;

    let total = items.reduce((sum, item) => sum + (item.price * item.qty), 0);
    
    let messageText = `Salam, folio. mağazasından sifariş etmək istəyirəm:\n\n`;
    items.forEach((item, index) => {
      const typeLabel = item.isNewBook === true ? " (Yeni)" : item.isNewBook === false ? " (2-ci Əl)" : " (Aksesuar)";
      messageText += `${index + 1}. 📦 ${item.title}${typeLabel} - ${item.qty} ədəd (${(item.price * item.qty).toFixed(2)} ₼)\n`;
    });
    
    messageText += `\n💰 *Cəmi Məbləğ:* ${total.toFixed(2)} ₼\n📍 *Çatdırılma ünvanı:* Naxçıvan\n\nSifarişi təsdiqləməyinizi gözləyirəm.`;

    const encodedMessage = encodeURIComponent(messageText);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, '_blank');
    
    setCart({});
    setIsCartOpen(false);
    showToast('Sifarişiniz WhatsApp-a yönləndirildi! 🚀');
  };

  const filteredBooks = BOOKS_DATA.filter(b => {
    const matchesCat = catFilter === '' || b.cat === catFilter;
    const matchesSearch = b.title.toLowerCase().includes(searchQuery.toLowerCase()) || b.author.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (conditionFilter === 'new') return matchesCat && matchesSearch && b.isNewBook;
    if (conditionFilter === 'used') return matchesCat && matchesSearch && !b.isNewBook;
    return matchesCat && matchesSearch;
  });

  const cartItems = Object.values(cart);
  const cartCount = cartItems.reduce((sum, i) => sum + i.qty, 0);
  const cartTotal = cartItems.reduce((sum, i) => sum + i.price * i.qty, 0);

  return (
    <div style={{ backgroundColor: '#000000', color: '#f5f5f7', minHeight: '100vh', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
      
      {/* ── FLOATING NAVBAR ── */}
      <div className="nav-wrapper">
        <nav className="apple-nav-floating">
          <div className="nav-container">
            <a href="#" className="nav-logo-apple">
              folio<span className="logo-dot">.</span>
            </a>
            <ul className="nav-links">
              <li><button className={conditionFilter === 'all' ? 'active-link' : ''} onClick={() => { setConditionFilter('all'); window.location.href='#books'; }}>Hamısı</button></li>
              <li><button className={conditionFilter === 'new' ? 'active-link' : ''} onClick={() => { setConditionFilter('new'); window.location.href='#books'; }}>Yeni Kitablar</button></li>
              <li><button className={conditionFilter === 'used' ? 'active-link' : ''} onClick={() => { setConditionFilter('used'); window.location.href='#books'; }}>İkinci Əl</button></li>
              <li><a href="#accessories">Ayrac & Paketləmə</a></li>
            </ul>
            <div className="nav-right">
              <div className="nav-search">
                <input 
                  type="text" 
                  placeholder="Axtar..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <button className="cart-btn" onClick={() => setIsCartOpen(true)}>
                <span>Səbət</span>
                <span className="cart-count">{cartCount}</span>
              </button>
            </div>
          </div>
        </nav>
      </div>

      {/* ── HERO SECTION ── */}
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-content">
            <div className="hero-tag">Yeni, İkinci Əl və Xüsusi Ayraclar</div>
            <h1>Hər kitab yeni bir hekayədir.</h1>
            <p className="hero-desc">İstər tam yeni premium nəşrlər, istərsə də büdcənizə uyğun təmiz ikinci əl variantlar. Əl işi ayraclar və xüsusi paketləmə ilə.</p>
            <div className="hero-actions">
              <a href="#books" className="btn-apple-primary">Kitablara bax</a>
              <a href="#accessories" className="btn-apple-link">Ayraclar və Paketləmə →</a>
            </div>
          </div>
          
          <div className="hero-visual">
            <div className="apple-book-mockup">
              <div className="book-spine"></div>
              <div className="book-cover-content">
                <div className="mock-logo">FOLIO.</div>
                <div className="mock-title">Yeniləndi</div>
                <div className="mock-author">2026 Collection</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── KİTABLAR BÖLMƏSİ ── */}
      <section className="section" id="books">
        <div className="section-head-flex">
          <h2 className="section-title">
            {conditionFilter === 'all' && "Bütün Kitablar"}
            {conditionFilter === 'new' && "Yeni Kitablar"}
            {conditionFilter === 'used' && "İkinci Əl Kitablar"}
          </h2>
          
          <div className="condition-switcher">
            <button className={conditionFilter === 'all' ? 'active' : ''} onClick={() => setConditionFilter('all')}>Hamısı</button>
            <button className={conditionFilter === 'new' ? 'active' : ''} onClick={() => setConditionFilter('new')}>Yeni</button>
            <button className={conditionFilter === 'used' ? 'active' : ''} onClick={() => setConditionFilter('used')}>İkinci Əl</button>
          </div>
        </div>

        <div className="cat-pills">
          {['Hamısı', 'Bədii', 'Elmi', 'Uşaq', 'Biznes', 'Özünüinkişaf', 'Tarix'].map((cat) => (
            <button 
              key={cat}
              className={`pill ${((cat === 'Hamısı' && catFilter === '') || catFilter === cat) ? 'active' : ''}`}
              onClick={() => setCatFilter(cat === 'Hamısı' ? '' : cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="books-grid">
          {filteredBooks.map(b => (
            <div className="book-card" key={b.id}>
              <div className="book-thumb">
                <div className={`premium-book-placeholder ${!b.isNewBook ? 'used-placeholder' : ''}`}>
                  <span className="book-initial">{b.title[0]}</span>
                </div>
                <span className={`condition-tag ${b.isNewBook ? 'tag-new-book' : 'tag-used-book'}`}>
                  {b.isNewBook ? 'Yeni' : 'İkinci Əl'}
                </span>
                {b.badge && <span className={`book-badge badge-${b.badge}`}>{b.badge === 'best' ? 'Bestseller' : 'Yeni'}</span>}
              </div>
              <div className="book-body">
                <div className="book-title" title={b.title}>{b.title}</div>
                <div className="book-author">{b.author}</div>
                <div className="book-footer">
                  <span className="price-main">{b.price.toFixed(2)} ₼</span>
                  <button 
                    className={`add-btn ${cart[b.id] ? 'added' : ''}`}
                    onClick={() => addToCart(b)}
                  >
                    {cart[b.id] ? 'Səbətdə' : 'Əlavə et'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── AKSESUARLAR BÖLMƏSİ ── */}
      <section className="section section-dark-bg" id="accessories">
        <div className="section-head">
          <h2 className="section-title">Kitab Ayracları & Paketləmə</h2>
          <p className="section-subtitle">Sizin üçün hazırladığımız xüsusi kitab ayracları və premium estetik hədiyyə paketləmələri.</p>
        </div>
        
        <div className="accessories-grid">
          {ACCESSORIES_DATA.map(acc => (
            <div className="accessory-card" key={acc.id}>
              <div className="acc-icon-box">
                {acc.type === 'packaging' ? '🎁' : '🔖'}
              </div>
              <div className="acc-details">
                <div className="acc-title">{acc.title}</div>
                <div className="acc-desc">{acc.desc}</div>
                <div className="acc-footer">
                  <span className="acc-price">{acc.price.toFixed(2)} ₼</span>
                  <button 
                    className={`add-btn ${cart[acc.id] ? 'added' : ''}`}
                    onClick={() => addToCart(acc)}
                  >
                    {cart[acc.id] ? 'Əlavə edildi' : 'Səbətə at'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── ENDİRİMLƏR SECTION ── */}
      <section className="section" id="sale" style={{ borderTop: '1px solid #1d1d1f' }}>
        <div className="section-head">
          <h2 className="section-title">Xüsusi Təkliflər</h2>
        </div>
        <div className="books-grid">
          {SALE_DATA.map(b => (
            <div className="book-card" key={b.id}>
              <div className="book-thumb">
                <div className="premium-book-placeholder sale-placeholder">
                  <span className="book-initial">{b.title[0]}</span>
                </div>
                <span className={`condition-tag ${b.isNewBook ? 'tag-new-book' : 'tag-used-book'}`}>
                  {b.isNewBook ? 'Yeni' : 'İkinci Əl'}
                </span>
                <span className="book-badge badge-sale">Endirim</span>
              </div>
              <div className="book-body">
                <div className="book-title" title={b.title}>{b.title}</div>
                <div className="book-author">{b.author}</div>
                <div className="book-footer">
                  <div className="price-block">
                    <span className="price-main">{b.price.toFixed(2)} ₼</span>
                    <span className="price-old">{b.old.toFixed(2)} ₼</span>
                  </div>
                  <button 
                    className={`add-btn ${cart[b.id] ? 'added' : ''}`}
                    onClick={() => addToCart(b)}
                  >
                    {cart[b.id] ? 'Səbətdə' : 'Əlavə et'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer>
        <div className="footer-inner">
          <div className="footer-brand">
            <div className="footer-logo">folio<span className="logo-dot">.</span></div>
            <p>Naxçıvanın minimalist dizaynlı premium kitab və oxu aksesuarları mağazası.</p>
          </div>
          <div className="footer-col">
            <h4>Koleksiyalar</h4>
            <a href="#books">Yeni Nəşrlər</a>
            <a href="#books">İkinci Əl Kitablar</a>
            <a href="#accessories">Kitab Ayracları</a>
          </div>
          <div className="footer-col">
            <h4>Xidmət</h4>
            <a href="#">Çatdırılma: Naxçıvan</a>
            <a href={`https://wa.me/${WHATSAPP_NUMBER}`}>WhatsApp Sifariş</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 folio. Bütün hüquqlar qorunur.</p>
          <p>Azərbaycan · ₼ AZN</p>
        </div>
      </footer>

      {/* ── SƏBƏT PANELİ ── */}
      {isCartOpen && <div className="cart-overlay" onClick={() => setIsCartOpen(false)}></div>}
      <div className={`cart-panel ${isCartOpen ? 'open' : ''}`}>
        <div className="cart-hdr">
          <h3>Səbətiniz</h3>
          <button className="close-cart" onClick={() => setIsCartOpen(false)}>✕</button>
        </div>
        
        <div className="cart-body">
          {cartItems.length === 0 ? (
            <div className="cart-empty">Səbətiniz boşdur.</div>
          ) : (
            <>
              {cartItems.map(item => (
                <div className="cart-item" key={item.id}>
                  <div className="ci-info">
                    <div className="ci-title-wrapper">
                      <span className="ci-title">{item.title}</span>
                      {item.isNewBook !== undefined && (
                        <span className={`cart-cond-label ${item.isNewBook ? 'lbl-n' : 'lbl-u'}`}>
                          {item.isNewBook ? 'Yeni' : '2-ci Əl'}
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
                  <div className="sugg-text">🎁 Bu sifarişi estetik hədiyyə paketi etmək istəyirsiniz?</div>
                  <button className="sugg-add-btn" onClick={() => addToCart(ACCESSORIES_DATA[0])}>+ 1.50 ₼ Əlavə Et</button>
                </div>
              )}
            </>
          )}
        </div>
        
        {cartItems.length > 0 && (
          <div className="cart-ftr">
            <div className="cart-total-row">
              <span>Ümumi Məbləğ:</span>
              <strong>{cartTotal.toFixed(2)} ₼</strong>
            </div>
            <button className="checkout-btn" onClick={handleCheckoutWhatsApp}>Sifarişi WhatsApp ilə Tamamla</button>
          </div>
        )}
      </div>

      <div className={`toast ${toast.show ? 'show' : ''}`}>{toast.msg}</div>

      {/* ── CSS STYLES ── */}
      <style jsx global>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; background-color: #000; }
        
        .nav-wrapper {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          padding: 12px 24px 0 24px;
        }
        .apple-nav-floating {
          background: rgba(22, 22, 23, 0.75); 
          backdrop-filter: blur(24px); -webkit-backdrop-filter: blur(24px);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 30px; 
          max-width: 1024px; margin: 0 auto;
        }
        .nav-container { height: 54px; display: flex; align-items: center; justify-content: space-between; padding: 0 20px; }
        
        .nav-logo-apple { font-family: -apple-system, BlinkMacSystemFont, sans-serif; font-weight: 700; font-size: 1.3rem; color: #f5f5f7; text-decoration: none; letter-spacing: -0.6px; }
        .logo-dot { color: #0071e3; }
        
        .nav-links { display: flex; list-style: none; gap: 20px; align-items: center; }
        .nav-links a { color: #86868b; text-decoration: none; font-size: 0.85rem; transition: color 0.2s; }
        .nav-links a:hover { color: #f5f5f7; }
        
        .nav-links button { background: none; border: none; color: #86868b; font-size: 0.85rem; cursor: pointer; font-family: inherit; transition: color 0.2s; }
        .nav-links button:hover, .nav-links button.active-link { color: #f5f5f7; font-weight: 500; }
        
        .nav-right { display: flex; align-items: center; gap: 16px; }
        .nav-search input { background: rgba(255,255,255,0.06); border: none; outline: none; color: #fff; font-size: 0.8rem; padding: 6px 12px; border-radius: 20px; width: 110px; }
        .cart-btn { background: none; border: none; color: #86868b; font-size: 0.85rem; cursor: pointer; display: flex; align-items: center; gap: 6px; }
        .cart-count { background: #f5f5f7; color: #000; font-size: 0.7rem; font-weight: 600; padding: 1px 6px; border-radius: 10px; }

        /* Hero */
        .hero { min-height: 60vh; display: flex; align-items: center; padding: 110px 16px 40px; background: #000; }
        .hero-inner { max-width: 1024px; margin: 0 auto; width: 100%; display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 40px; align-items: center; }
        .hero-tag { font-size: 0.85rem; font-weight: 500; color: #86868b; margin-bottom: 12px; }
        .hero h1 { font-size: clamp(2rem, 3.5vw, 3rem); font-weight: 700; letter-spacing: -1px; color: #f5f5f7; line-height: 1.15; margin-bottom: 16px; }
        .hero-desc { color: #86868b; font-size: 1.05rem; line-height: 1.5; margin-bottom: 24px; }
        .hero-actions { display: flex; align-items: center; gap: 16px; }
        .btn-apple-primary { background: #0071e3; color: #fff; border-radius: 980px; padding: 10px 20px; font-size: 0.85rem; text-decoration: none; }
        .btn-apple-link { color: #0066cc; text-decoration: none; font-size: 0.9rem; }

        /* Book Mockup */
        .hero-visual { display: flex; justify-content: center; }
        .apple-book-mockup { width: 180px; height: 240px; background: #1c1c1e; border-radius: 3px 10px 10px 3px; position: relative; box-shadow: 0 20px 40px rgba(0,0,0,0.5); display: flex; }
        .book-spine { width: 10px; background: rgba(0,0,0,0.2); }
        .book-cover-content { flex: 1; padding: 20px; display: flex; flex-direction: column; justify-content: center; align-items: center; }
        .mock-logo { font-size: 0.65rem; color: #86868b; margin-bottom: auto; }
        .mock-title { font-size: 1.2rem; font-weight: 600; color: #fff; }
        .mock-author { font-size: 0.75rem; color: #86868b; margin-bottom: auto; }

        /* Structural Layouts */
        .section { max-width: 1024px; margin: 0 auto; padding: 50px 16px; }
        .section-dark-bg { background: #0a0a0c; max-width: 100vw; padding: 60px max(16px, calc((100vw - 1024px)/2)); border-top: 1px solid #1d1d1f; border-bottom: 1px solid #1d1d1f; }
        .section-head-flex { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; flex-wrap: wrap; gap: 12px; }
        .section-title { font-size: 1.6rem; font-weight: 600; color: #f5f5f7; }
        .section-subtitle { color: #86868b; font-size: 0.95rem; margin-top: 4px; margin-bottom: 24px; }

        /* Condition Switcher */
        .condition-switcher { background: #1c1c1e; padding: 3px; border-radius: 8px; display: flex; }
        .condition-switcher button { background: transparent; border: none; color: #86868b; padding: 6px 14px; font-size: 0.8rem; font-weight: 500; border-radius: 6px; cursor: pointer; transition: all 0.2s; }
        .condition-switcher button.active { background: #323236; color: #fff; }

        /* Pills Filters */
        .cat-pills { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 28px; }
        .pill { padding: 6px 12px; border-radius: 980px; border: 1px solid #333336; background: transparent; color: #f5f5f7; font-size: 0.8rem; cursor: pointer; }
        .pill.active { background: #f5f5f7; border-color: #f5f5f7; color: #000; }

        /* Books Grid */
        .books-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(170px, 1fr)); gap: 16px; }
        .book-card { background: #161617; border-radius: 10px; overflow: hidden; border: 1px solid #2d2d2f; display: flex; flex-direction: column; position: relative; }
        .book-thumb { aspect-ratio: 3/3.6; width: 100%; background: #09090a; display: flex; align-items: center; justify-content: center; position: relative; border-bottom: 1px solid #2d2d2f; }
        
        .premium-book-placeholder { width: 85px; height: 115px; background: #232326; border-radius: 3px 6px 6px 3px; display: flex; align-items: center; justify-content: center; border-left: 3px solid rgba(0,0,0,0.25); box-shadow: 0 8px 16px rgba(0,0,0,0.4); }
        .used-placeholder { background: #19222b; }
        .sale-placeholder { background: #2b1818; }
        .book-initial { font-size: 1.6rem; font-weight: 600; color: #6e6e73; }
        
        .condition-tag { position: absolute; bottom: 8px; left: 8px; font-size: 0.65rem; font-weight: 500; padding: 2px 6px; border-radius: 4px; }
        .tag-new-book { background: rgba(48, 209, 88, 0.15); color: #30d158; border: 1px solid rgba(48, 209, 88, 0.2); }
        .tag-used-book { background: rgba(10, 132, 255, 0.15); color: #0a84ff; border: 1px solid rgba(10, 132, 255, 0.2); }

        .book-badge { position: absolute; top: 8px; left: 8px; font-size: 0.6rem; font-weight: 600; padding: 2px 6px; border-radius: 4px; text-transform: uppercase; }
        .badge-new { background: #1d3528; color: #30d158; }
        .badge-best { background: #3a2d16; color: #ff9f0a; }
        .badge-sale { background: #3b1d1d; color: #ff453a; }
        
        .book-body { padding: 12px; flex: 1; display: flex; flex-direction: column; }
        .book-title { font-size: 0.88rem; font-weight: 600; color: #f5f5f7; margin-bottom: 2px; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; }
        .book-author { font-size: 0.78rem; color: #86868b; margin-bottom: 12px; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; }
        .book-footer { display: flex; align-items: center; justify-content: space-between; margin-top: auto; }
        .price-main { font-size: 0.95rem; font-weight: 600; color: #fff; }
        .price-old { font-size: 0.75rem; color: #86868b; text-decoration: line-through; margin-left: 4px; }
        
        .add-btn { background: transparent; color: #0071e3; border: 1px solid #0071e3; border-radius: 980px; padding: 4px 12px; font-size: 0.7rem; font-weight: 500; cursor: pointer; transition: all 0.2s; }
        .add-btn:hover { background: #0071e3; color: #fff; }
        .add-btn.added { background: #30d158; border-color: #30d158; color: #fff; }

        /* Accessories Grid */
        .accessories-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 16px; margin-top: 10px; }
        .accessory-card { background: #161617; border: 1px solid #2d2d2f; border-radius: 12px; padding: 16px; display: flex; gap: 16px; align-items: center; }
        .acc-icon-box { font-size: 2rem; background: #232326; width: 54px; height: 54px; display: flex; align-items: center; justify-content: center; border-radius: 8px; }
        .acc-details { flex: 1; }
        .acc-title { font-size: 0.9rem; font-weight: 600; color: #fff; }
        .acc-desc { font-size: 0.78rem; color: #86868b; margin-bottom: 8px; }
        .acc-footer { display: flex; justify-content: space-between; align-items: center; }
        .acc-price { font-size: 0.95rem; font-weight: 600; color: #fff; }

        /* Footer */
        footer { background: #161617; border-top: 1px solid #2d2d2f; padding: 40px 16px; color: #86868b; font-size: 0.8rem; }
        .footer-inner { max-width: 1024px; margin: 0 auto; display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 24px; margin-bottom: 24px; }
        .footer-brand .footer-logo { font-size: 1.2rem; font-weight: 700; color: #f5f5f7; margin-bottom: 6px; }
        .footer-col h4 { color: #f5f5f7; font-size: 0.8rem; margin-bottom: 10px; }
        .footer-col a { display: block; color: #86868b; text-decoration: none; margin-bottom: 6px; }
        .footer-bottom { max-width: 1024px; margin: 0 auto; border-top: 1px solid #2d2d2f; padding-top: 14px; display: flex; justify-content: space-between; }

        /* Cart */
        .cart-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.4); backdrop-filter: blur(4px); z-index: 200; }
        .cart-panel { position: fixed; top: 0; right: 0; bottom: 0; width: 360px; background: #161617; border-left: 1px solid #2d2d2f; z-index: 201; display: flex; flex-direction: column; transform: translateX(100%); transition: transform 0.2s ease-out; }
        .cart-panel.open { transform: translateX(0); }
        .cart-hdr { padding: 16px; border-bottom: 1px solid #2d2d2f; display: flex; align-items: center; justify-content: space-between; }
        .close-cart { background: none; border: none; color: #86868b; font-size: 1.1rem; cursor: pointer; }
        .cart-body { flex: 1; overflow-y: auto; padding: 16px; }
        .cart-empty { text-align: center; color: #86868b; padding-top: 30px; }
        .cart-item { padding-bottom: 14px; margin-bottom: 14px; border-bottom: 1px solid #2d2d2f; }
        
        .ci-title-wrapper { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }
        .ci-title { font-weight: 600; color: #fff; font-size: 0.85rem; }
        .cart-cond-label { font-size: 0.6rem; padding: 1px 4px; border-radius: 3px; font-weight: 600; }
        .lbl-n { background: rgba(48,209,88,0.15); color: #30d158; }
        .lbl-u { background: rgba(10,132,255,0.15); color: #0a84ff; }
        
        .ci-author { font-size: 0.75rem; color: #86868b; }
        .ci-row { display: flex; align-items: center; justify-content: space-between; margin-top: 6px; }
        .ci-price { font-weight: 600; color: #fff; }
        .qty-row { display: flex; align-items: center; gap: 6px; }
        .q-btn { width: 22px; height: 22px; background: #2d2d2f; border: none; color: #fff; cursor: pointer; border-radius: 4px; }
        .q-num { font-size: 0.8rem; color: #fff; }
        .q-del { background: none; border: none; color: #ff453a; cursor: pointer; font-size: 0.75rem; margin-left: 6px; }
        
        .cart-suggestion-box { background: #232326; border: 1px dashed #3a3a3c; padding: 12px; border-radius: 8px; margin-top: 10px; display: flex; flex-direction: column; gap: 8px; }
        .sugg-text { font-size: 0.78rem; color: #f5f5f7; }
        .sugg-add-btn { background: #fff; color: #000; border: none; border-radius: 6px; padding: 6px; font-size: 0.75rem; font-weight: 600; cursor: pointer; }

        .cart-ftr { padding: 16px; border-top: 1px solid #2d2d2f; }
        .cart-total-row { display: flex; justify-content: space-between; margin-bottom: 14px; font-size: 0.9rem; }
        .cart-total-row strong { color: #fff; font-size: 1.05rem; }
        .checkout-btn { width: 100%; background: #0071e3; color: #fff; border: none; border-radius: 8px; padding: 12px; font-weight: 500; cursor: pointer; }

        /* Toast */
        .toast { position: fixed; bottom: 20px; left: 50%; transform: translateX(-50%) translateY(100px); background: #f5f5f7; color: #000; padding: 8px 16px; border-radius: 30px; font-size: 0.8rem; font-weight: 500; z-index: 300; opacity: 0; transition: all 0.2s ease; }
        .toast.show { transform: translateX(-50%) translateY(0); opacity: 1; }

        /* MOBILE RESPONSIVE */
        @media (max-width: 768px) {
          .nav-wrapper { padding: 8px 12px 0 12px; }
          .apple-nav-floating { border-radius: 20px; }
          .nav-container { padding: 0 12px; height: 48px; }
          .nav-links, .nav-search { display: none; } 
          
          .hero-inner { grid-template-columns: 1fr; text-align: center; padding-top: 20px; }
          .hero-actions { justify-content: center; }
          .hero-visual { display: none; }
          
          .books-grid { 
            grid-template-columns: repeat(2, 1fr) !important; 
            gap: 10px; 
          }
          .book-thumb { aspect-ratio: 3/3.4; }
          .premium-book-placeholder { width: 68px; height: 92px; }
          .book-title { font-size: 0.82rem; }
          .book-author { font-size: 0.72rem; }
          .price-main { font-size: 0.88rem; }
          .add-btn { padding: 3px 8px; font-size: 0.65rem; }

          .accessories-grid { grid-template-columns: 1fr; }
          .footer-inner { grid-template-columns: 1fr; }
          .cart-panel { width: 100%; }
        }
      `}</style>
    </div>
  );
}