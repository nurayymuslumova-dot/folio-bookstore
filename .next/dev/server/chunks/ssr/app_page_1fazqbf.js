module.exports = [
"[project]/app/page.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
/* ───────────────────────────────────────────────
   MƏLUMATLAR (book/accessory content olduğu kimi saxlanılıb)
─────────────────────────────────────────────── */ const BOOKS_DATA = [
    {
        id: 1,
        title: "Əli və Nino",
        author: "Kurban Said",
        price: 12.99,
        isNewBook: true,
        cat: "Bədii",
        badge: "best"
    },
    {
        id: 2,
        title: "Dəli Kür",
        author: "İlyas Əfəndiyev",
        price: 7.50,
        isNewBook: false,
        cat: "Bədii",
        badge: null
    },
    {
        id: 3,
        title: "Atomik Vərdişlər",
        author: "James Clear",
        price: 15.50,
        isNewBook: true,
        cat: "Özünüinkişaf",
        badge: "best"
    },
    {
        id: 4,
        title: "Sahibkar Psixologiyası",
        author: "Daniel Kahneman",
        price: 11.00,
        isNewBook: false,
        cat: "Biznes",
        badge: null
    },
    {
        id: 5,
        title: "Zaman Maşını",
        author: "H.G. Wells",
        price: 8.00,
        isNewBook: true,
        cat: "Elmi",
        badge: "new"
    },
    {
        id: 6,
        title: "Balaca Şahzadə",
        author: "Antoine de Saint-Exupéry",
        price: 4.50,
        isNewBook: false,
        cat: "Uşaq",
        badge: null
    },
    {
        id: 7,
        title: "Azərbaycan Tarixi",
        author: "İqrar Əliyev",
        price: 22.00,
        isNewBook: true,
        cat: "Tarix",
        badge: "new"
    },
    {
        id: 8,
        title: "Düşün və Var Ol",
        author: "Napoleon Hill",
        price: 11.00,
        isNewBook: true,
        cat: "Özünüinkişaf",
        badge: null
    }
];
const SALE_DATA = [
    {
        id: 9,
        title: "Uşaq Masalları",
        author: "Müxtəlif Müəlliflər",
        price: 5.99,
        old: 9.99,
        isNewBook: true,
        cat: "Uşaq",
        badge: "sale"
    },
    {
        id: 10,
        title: "Sapiens",
        author: "Yuval Noah Harari",
        price: 9.00,
        old: 20.00,
        isNewBook: false,
        cat: "Tarix",
        badge: "sale"
    }
];
const ACCESSORIES_DATA = [
    {
        id: "a1",
        title: "Premium Hədiyyə Paketləməsi",
        desc: "Xüsusi möhürlü və qoxulu sənətkar kağızı",
        price: 1.50,
        type: "packaging"
    },
    {
        id: "a2",
        title: "Minimalist Kitab Ayracı",
        desc: "Əlimizdə olan xüsusi dizaynlı incə ayrac",
        price: 0.30,
        type: "bookmark"
    },
    {
        id: "a3",
        title: "Klassik Estetik Ayrac",
        desc: "Kitabsevərlər üçün təmiz vizual toxunuş",
        price: 0.30,
        type: "bookmark"
    }
];
/* ───────────────────────────────────────────────
   DİL TƏRCÜMƏLƏRİ (interfeys mətnləri üçün)
─────────────────────────────────────────────── */ const DICT = {
    az: {
        all: "Hamısı",
        newBooks: "Yeni Kitablar",
        usedBooks: "İkinci Əl",
        accessories: "Ayrac & Paketləmə",
        search: "Axtar...",
        cart: "Səbət",
        heroTag: "Yeni, İkinci Əl və Xüsusi Ayraclar",
        heroTitle: "Hər kitab yeni bir hekayədir.",
        heroDesc: "İstər tam yeni premium nəşrlər, istərsə də büdcənizə uyğun təmiz ikinci əl variantlar. Əl işi ayraclar və xüsusi paketləmə ilə.",
        heroBtn: "Kitablara bax",
        heroLink: "Ayraclar və Paketləmə →",
        sectionAll: "Bütün Kitablar",
        sectionNew: "Yeni Kitablar",
        sectionUsed: "İkinci Əl Kitablar",
        cats: [
            'Hamısı',
            'Bədii',
            'Elmi',
            'Uşaq',
            'Biznes',
            'Özünüinkişaf',
            'Tarix'
        ],
        bestseller: "Bestseller",
        newTag: "Yeni",
        usedTag: "İkinci Əl",
        saleTag: "Endirim",
        addBtn: "Əlavə et",
        added: "Səbətdə",
        accTitle: "Kitab Ayracları & Paketləmə",
        accDesc: "Sizin üçün hazırladığımız xüsusi kitab ayracları və premium estetik hədiyyə paketləmələri.",
        accAdd: "Səbətə at",
        accAdded: "Əlavə edildi",
        saleTitle: "Xüsusi Təkliflər",
        footerDesc: "Naxçıvanın minimalist dizaynlı premium kitab və oxu aksesuarları mağazası.",
        footerCollections: "Koleksiyalar",
        footerNewEd: "Yeni Nəşrlər",
        footerUsedB: "İkinci Əl Kitablar",
        footerBookmarks: "Kitab Ayracları",
        footerService: "Xidmət",
        footerDelivery: "Çatdırılma: Naxçıvan",
        footerWhatsapp: "WhatsApp Sifariş",
        footerRights: "Bütün hüquqlar qorunur.",
        cartTitle: "Səbətiniz",
        cartEmpty: "Səbətiniz boşdur.",
        suggText: "Bu sifarişi estetik hədiyyə paketi etmək istəyirsiniz?",
        suggBtn: "+ 1.50 ₼ Əlavə Et",
        cartTotal: "Ümumi Məbləğ:",
        checkout: "Sifarişi WhatsApp ilə Tamamla",
        addedToast: (title)=>`"${title}" səbətə əlavə edildi`,
        checkoutToast: "Sifarişiniz WhatsApp-a yönləndirildi!",
        waMsgIntro: "Salam, folio. mağazasından sifariş etmək istəyirəm:",
        waNew: "(Yeni)",
        waUsed: "(2-ci Əl)",
        waUnit: "ədəd",
        waTotal: "Cəmi Məbləğ:",
        waAddr: "Çatdırılma ünvanı:",
        waConfirm: "Sifarişi təsdiqləməyinizi gözləyirəm."
    },
    tr: {
        all: "Tümü",
        newBooks: "Yeni Kitaplar",
        usedBooks: "İkinci El",
        accessories: "Ayraç & Paketleme",
        search: "Ara...",
        cart: "Sepet",
        heroTag: "Yeni, İkinci El ve Özel Ayraçlar",
        heroTitle: "Her kitap yeni bir hikayedir.",
        heroDesc: "İster yepyeni premium baskılar, isterse bütçenize uygun temiz ikinci el seçenekler. El yapımı ayraçlar ve özel paketleme ile.",
        heroBtn: "Kitaplara göz at",
        heroLink: "Ayraçlar ve Paketleme →",
        sectionAll: "Tüm Kitaplar",
        sectionNew: "Yeni Kitaplar",
        sectionUsed: "İkinci El Kitaplar",
        cats: [
            'Tümü',
            'Edebiyat',
            'Bilim',
            'Çocuk',
            'İş',
            'Kişisel Gelişim',
            'Tarih'
        ],
        bestseller: "Çok Satan",
        newTag: "Yeni",
        usedTag: "İkinci El",
        saleTag: "İndirim",
        addBtn: "Ekle",
        added: "Sepette",
        accTitle: "Kitap Ayraçları & Paketleme",
        accDesc: "Sizin için hazırladığımız özel kitap ayraçları ve premium estetik hediye paketleri.",
        accAdd: "Sepete ekle",
        accAdded: "Eklendi",
        saleTitle: "Özel Teklifler",
        footerDesc: "Nahçıvan'ın minimalist tasarımlı premium kitap ve okuma aksesuarları mağazası.",
        footerCollections: "Koleksiyonlar",
        footerNewEd: "Yeni Baskılar",
        footerUsedB: "İkinci El Kitaplar",
        footerBookmarks: "Kitap Ayraçları",
        footerService: "Hizmet",
        footerDelivery: "Teslimat: Nahçıvan",
        footerWhatsapp: "WhatsApp Sipariş",
        footerRights: "Tüm hakları saklıdır.",
        cartTitle: "Sepetiniz",
        cartEmpty: "Sepetiniz boş.",
        suggText: "Bu siparişi estetik hediye paketi yapmak ister misiniz?",
        suggBtn: "+ 1.50 ₼ Ekle",
        cartTotal: "Toplam Tutar:",
        checkout: "Siparişi WhatsApp ile Tamamla",
        addedToast: (title)=>`"${title}" sepete eklendi`,
        checkoutToast: "Siparişiniz WhatsApp'a yönlendirildi!",
        waMsgIntro: "Merhaba, folio. mağazasından sipariş vermek istiyorum:",
        waNew: "(Yeni)",
        waUsed: "(İkinci El)",
        waUnit: "adet",
        waTotal: "Toplam Tutar:",
        waAddr: "Teslimat adresi:",
        waConfirm: "Siparişin onaylanmasını bekliyorum."
    },
    en: {
        all: "All",
        newBooks: "New Books",
        usedBooks: "Used",
        accessories: "Bookmarks & Wrapping",
        search: "Search...",
        cart: "Cart",
        heroTag: "New, Used & Handcrafted Bookmarks",
        heroTitle: "Every book is a new story.",
        heroDesc: "Brand-new premium editions or clean, budget-friendly used copies — paired with handcrafted bookmarks and gift wrapping.",
        heroBtn: "Browse books",
        heroLink: "Bookmarks & Wrapping →",
        sectionAll: "All Books",
        sectionNew: "New Books",
        sectionUsed: "Used Books",
        cats: [
            'All',
            'Fiction',
            'Science',
            'Children',
            'Business',
            'Self-Help',
            'History'
        ],
        bestseller: "Bestseller",
        newTag: "New",
        usedTag: "Used",
        saleTag: "Sale",
        addBtn: "Add",
        added: "In cart",
        accTitle: "Bookmarks & Gift Wrapping",
        accDesc: "Handcrafted bookmarks and premium aesthetic gift wrapping, made for you.",
        accAdd: "Add to cart",
        accAdded: "Added",
        saleTitle: "Special Offers",
        footerDesc: "Nakhchivan's minimalist premium book and reading accessories store.",
        footerCollections: "Collections",
        footerNewEd: "New Editions",
        footerUsedB: "Used Books",
        footerBookmarks: "Bookmarks",
        footerService: "Service",
        footerDelivery: "Delivery: Nakhchivan",
        footerWhatsapp: "Order on WhatsApp",
        footerRights: "All rights reserved.",
        cartTitle: "Your Cart",
        cartEmpty: "Your cart is empty.",
        suggText: "Would you like to make this order an aesthetic gift package?",
        suggBtn: "+ 1.50 ₼ Add",
        cartTotal: "Total Amount:",
        checkout: "Complete Order via WhatsApp",
        addedToast: (title)=>`"${title}" added to cart`,
        checkoutToast: "Your order was sent to WhatsApp!",
        waMsgIntro: "Hello, I would like to order from folio.:",
        waNew: "(New)",
        waUsed: "(Used)",
        waUnit: "pcs",
        waTotal: "Total Amount:",
        waAddr: "Delivery address:",
        waConfirm: "Looking forward to your confirmation."
    }
};
const CAT_KEYS = [
    'Hamısı',
    'Bədii',
    'Elmi',
    'Uşaq',
    'Biznes',
    'Özünüinkişaf',
    'Tarix'
];
function Home() {
    const [cart, setCart] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [catFilter, setCatFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [conditionFilter, setConditionFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('all');
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [isCartOpen, setIsCartOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isMenuOpen, setIsMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [theme, setTheme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('dark');
    const [lang, setLang] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('az');
    const [toast, setToast] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        show: false,
        msg: ''
    });
    const t = DICT[lang];
    const WHATSAPP_NUMBER = "994606777500";
    /* Tab başlığı + ikon */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
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
    /* Scroll-reveal: section-lar sıra ilə görünəndə yuxarı sürüşərək düşür */ const revealRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const observer = new IntersectionObserver((entries)=>{
            entries.forEach((entry)=>{
                if (entry.isIntersecting) entry.target.classList.add('in-view');
            });
        }, {
            threshold: 0.15
        });
        revealRefs.current.forEach((el)=>el && observer.observe(el));
        return ()=>observer.disconnect();
    }, []);
    const addReveal = (el)=>{
        if (el && !revealRefs.current.includes(el)) revealRefs.current.push(el);
    };
    const showToast = (msg)=>{
        setToast({
            show: true,
            msg
        });
        setTimeout(()=>setToast({
                show: false,
                msg: ''
            }), 2800);
    };
    const addToCart = (item)=>{
        setCart((prev)=>{
            const existing = prev[item.id];
            return {
                ...prev,
                [item.id]: existing ? {
                    ...existing,
                    qty: existing.qty + 1
                } : {
                    ...item,
                    qty: 1
                }
            };
        });
        showToast(t.addedToast(item.title));
    };
    const changeQty = (id, delta)=>{
        setCart((prev)=>{
            const item = prev[id];
            if (!item) return prev;
            const newQty = item.qty + delta;
            const updated = {
                ...prev
            };
            if (newQty <= 0) delete updated[id];
            else updated[id] = {
                ...item,
                qty: newQty
            };
            return updated;
        });
    };
    const removeItem = (id)=>{
        setCart((prev)=>{
            const updated = {
                ...prev
            };
            delete updated[id];
            return updated;
        });
    };
    const handleCheckoutWhatsApp = ()=>{
        const items = Object.values(cart);
        if (items.length === 0) return;
        let total = items.reduce((sum, item)=>sum + item.price * item.qty, 0);
        let messageText = `${t.waMsgIntro}\n\n`;
        items.forEach((item, index)=>{
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
    const filteredBooks = BOOKS_DATA.filter((b)=>{
        const matchesCat = catFilter === '' || b.cat === catFilter;
        const matchesSearch = b.title.toLowerCase().includes(searchQuery.toLowerCase()) || b.author.toLowerCase().includes(searchQuery.toLowerCase());
        if (conditionFilter === 'new') return matchesCat && matchesSearch && b.isNewBook;
        if (conditionFilter === 'used') return matchesCat && matchesSearch && !b.isNewBook;
        return matchesCat && matchesSearch;
    });
    const cartItems = Object.values(cart);
    const cartCount = cartItems.reduce((sum, i)=>sum + i.qty, 0);
    const cartTotal = cartItems.reduce((sum, i)=>sum + i.price * i.qty, 0);
    const goTo = (cond)=>{
        setConditionFilter(cond);
        setIsMenuOpen(false);
        window.location.href = '#books';
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "jsx-815a3a3596f21f78" + " " + `app-root theme-${theme}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-815a3a3596f21f78" + " " + "nav-wrapper",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    className: "jsx-815a3a3596f21f78" + " " + "apple-nav-floating",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-815a3a3596f21f78" + " " + "nav-container",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#",
                                className: "jsx-815a3a3596f21f78" + " " + "nav-logo-apple",
                                children: [
                                    "folio",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-815a3a3596f21f78" + " " + "logo-dot",
                                        children: "."
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 230,
                                        columnNumber: 57
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 230,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "jsx-815a3a3596f21f78" + " " + "nav-links",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "jsx-815a3a3596f21f78",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>goTo('all'),
                                            className: "jsx-815a3a3596f21f78" + " " + ((conditionFilter === 'all' ? 'active-link' : '') || ""),
                                            children: t.all
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.js",
                                            lineNumber: 233,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 233,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "jsx-815a3a3596f21f78",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>goTo('new'),
                                            className: "jsx-815a3a3596f21f78" + " " + ((conditionFilter === 'new' ? 'active-link' : '') || ""),
                                            children: t.newBooks
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.js",
                                            lineNumber: 234,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 234,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "jsx-815a3a3596f21f78",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>goTo('used'),
                                            className: "jsx-815a3a3596f21f78" + " " + ((conditionFilter === 'used' ? 'active-link' : '') || ""),
                                            children: t.usedBooks
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.js",
                                            lineNumber: 235,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 235,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "jsx-815a3a3596f21f78",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "#accessories",
                                            className: "jsx-815a3a3596f21f78",
                                            children: t.accessories
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.js",
                                            lineNumber: 236,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 236,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 232,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-815a3a3596f21f78" + " " + "nav-right",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-815a3a3596f21f78" + " " + "nav-search",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            placeholder: t.search,
                                            value: searchQuery,
                                            onChange: (e)=>setSearchQuery(e.target.value),
                                            className: "jsx-815a3a3596f21f78"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.js",
                                            lineNumber: 241,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 240,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: lang,
                                        onChange: (e)=>setLang(e.target.value),
                                        "aria-label": "Language",
                                        className: "jsx-815a3a3596f21f78" + " " + "lang-select",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "az",
                                                className: "jsx-815a3a3596f21f78",
                                                children: "AZ"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.js",
                                                lineNumber: 245,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "tr",
                                                className: "jsx-815a3a3596f21f78",
                                                children: "TR"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.js",
                                                lineNumber: 246,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "en",
                                                className: "jsx-815a3a3596f21f78",
                                                children: "EN"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.js",
                                                lineNumber: 247,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 244,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setTheme(theme === 'dark' ? 'light' : 'dark'),
                                        "aria-label": "Toggle theme",
                                        className: "jsx-815a3a3596f21f78" + " " + "theme-toggle",
                                        children: theme === 'dark' ? '☀' : '☾'
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 250,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setIsCartOpen(true),
                                        className: "jsx-815a3a3596f21f78" + " " + "cart-btn",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-815a3a3596f21f78",
                                                children: t.cart
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.js",
                                                lineNumber: 255,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-815a3a3596f21f78" + " " + "cart-count",
                                                children: cartCount
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.js",
                                                lineNumber: 256,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 254,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setIsMenuOpen(true),
                                        "aria-label": "Menu",
                                        className: "jsx-815a3a3596f21f78" + " " + "hamburger",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-815a3a3596f21f78"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.js",
                                                lineNumber: 260,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-815a3a3596f21f78"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.js",
                                                lineNumber: 260,
                                                columnNumber: 30
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-815a3a3596f21f78"
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.js",
                                                lineNumber: 260,
                                                columnNumber: 43
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 259,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 239,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 229,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/page.js",
                    lineNumber: 228,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.js",
                lineNumber: 227,
                columnNumber: 7
            }, this),
            isMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                onClick: ()=>setIsMenuOpen(false),
                className: "jsx-815a3a3596f21f78" + " " + "mobile-overlay"
            }, void 0, false, {
                fileName: "[project]/app/page.js",
                lineNumber: 268,
                columnNumber: 22
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-815a3a3596f21f78" + " " + `mobile-menu ${isMenuOpen ? 'open' : ''}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-815a3a3596f21f78" + " " + "mobile-menu-hdr",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "jsx-815a3a3596f21f78" + " " + "nav-logo-apple",
                                children: [
                                    "folio",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-815a3a3596f21f78" + " " + "logo-dot",
                                        children: "."
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 271,
                                        columnNumber: 49
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 271,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setIsMenuOpen(false),
                                className: "jsx-815a3a3596f21f78" + " " + "close-cart",
                                children: "✕"
                            }, void 0, false, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 272,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 270,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-815a3a3596f21f78" + " " + "mobile-search",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            placeholder: t.search,
                            value: searchQuery,
                            onChange: (e)=>setSearchQuery(e.target.value),
                            className: "jsx-815a3a3596f21f78"
                        }, void 0, false, {
                            fileName: "[project]/app/page.js",
                            lineNumber: 275,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 274,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>goTo('all'),
                        className: "jsx-815a3a3596f21f78" + " " + "mobile-link",
                        children: t.all
                    }, void 0, false, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 277,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>goTo('new'),
                        className: "jsx-815a3a3596f21f78" + " " + "mobile-link",
                        children: t.newBooks
                    }, void 0, false, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 278,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>goTo('used'),
                        className: "jsx-815a3a3596f21f78" + " " + "mobile-link",
                        children: t.usedBooks
                    }, void 0, false, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 279,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "#accessories",
                        onClick: ()=>setIsMenuOpen(false),
                        className: "jsx-815a3a3596f21f78" + " " + "mobile-link",
                        children: t.accessories
                    }, void 0, false, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 280,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-815a3a3596f21f78" + " " + "mobile-menu-footer",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: lang,
                                onChange: (e)=>setLang(e.target.value),
                                className: "jsx-815a3a3596f21f78" + " " + "lang-select",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "az",
                                        className: "jsx-815a3a3596f21f78",
                                        children: "AZ"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 284,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "tr",
                                        className: "jsx-815a3a3596f21f78",
                                        children: "TR"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 285,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "en",
                                        className: "jsx-815a3a3596f21f78",
                                        children: "EN"
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 286,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 283,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setTheme(theme === 'dark' ? 'light' : 'dark'),
                                className: "jsx-815a3a3596f21f78" + " " + "theme-toggle",
                                children: theme === 'dark' ? '☀ Light' : '☾ Dark'
                            }, void 0, false, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 288,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 282,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.js",
                lineNumber: 269,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "jsx-815a3a3596f21f78" + " " + "hero",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-815a3a3596f21f78" + " " + "hero-inner",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-815a3a3596f21f78" + " " + "hero-content",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-815a3a3596f21f78" + " " + "hero-tag",
                                        children: t.heroTag
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 298,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "jsx-815a3a3596f21f78",
                                        children: t.heroTitle
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 299,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "jsx-815a3a3596f21f78" + " " + "hero-desc",
                                        children: t.heroDesc
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 300,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-815a3a3596f21f78" + " " + "hero-actions",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#books",
                                                className: "jsx-815a3a3596f21f78" + " " + "btn-apple-primary",
                                                children: t.heroBtn
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.js",
                                                lineNumber: 302,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#accessories",
                                                className: "jsx-815a3a3596f21f78" + " " + "btn-apple-link",
                                                children: t.heroLink
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.js",
                                                lineNumber: 303,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 301,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 297,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-815a3a3596f21f78" + " " + "hero-visual",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-815a3a3596f21f78" + " " + "apple-book-mockup",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-815a3a3596f21f78" + " " + "book-spine"
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.js",
                                            lineNumber: 308,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-815a3a3596f21f78" + " " + "book-cover-content",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-815a3a3596f21f78" + " " + "mock-logo",
                                                    children: "FOLIO."
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.js",
                                                    lineNumber: 310,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-815a3a3596f21f78" + " " + "mock-title",
                                                    children: lang === 'en' ? 'Updated' : lang === 'tr' ? 'Yenilendi' : 'Yeniləndi'
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.js",
                                                    lineNumber: 311,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-815a3a3596f21f78" + " " + "mock-author",
                                                    children: "2026 Collection"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.js",
                                                    lineNumber: 312,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.js",
                                            lineNumber: 309,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.js",
                                    lineNumber: 307,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 306,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 296,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-815a3a3596f21f78" + " " + "scroll-hint",
                        children: "↓"
                    }, void 0, false, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 317,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.js",
                lineNumber: 295,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "books",
                ref: addReveal,
                className: "jsx-815a3a3596f21f78" + " " + "section reveal",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-815a3a3596f21f78" + " " + "section-head-flex",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "jsx-815a3a3596f21f78" + " " + "section-title",
                                children: [
                                    conditionFilter === 'all' && t.sectionAll,
                                    conditionFilter === 'new' && t.sectionNew,
                                    conditionFilter === 'used' && t.sectionUsed
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 323,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-815a3a3596f21f78" + " " + "condition-switcher",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setConditionFilter('all'),
                                        className: "jsx-815a3a3596f21f78" + " " + ((conditionFilter === 'all' ? 'active' : '') || ""),
                                        children: t.all
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 329,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setConditionFilter('new'),
                                        className: "jsx-815a3a3596f21f78" + " " + ((conditionFilter === 'new' ? 'active' : '') || ""),
                                        children: t.newBooks
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 330,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setConditionFilter('used'),
                                        className: "jsx-815a3a3596f21f78" + " " + ((conditionFilter === 'used' ? 'active' : '') || ""),
                                        children: t.usedBooks
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 331,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 328,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 322,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-815a3a3596f21f78" + " " + "cat-pills",
                        children: t.cats.map((label, i)=>{
                            const key = CAT_KEYS[i];
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setCatFilter(key === 'Hamısı' ? '' : key),
                                className: "jsx-815a3a3596f21f78" + " " + `pill ${key === 'Hamısı' && catFilter === '' || catFilter === key ? 'active' : ''}`,
                                children: label
                            }, key, false, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 339,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 335,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-815a3a3596f21f78" + " " + "books-grid",
                        children: filteredBooks.map((b)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-815a3a3596f21f78" + " " + "book-card",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-815a3a3596f21f78" + " " + "book-thumb",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-815a3a3596f21f78" + " " + `premium-book-placeholder ${!b.isNewBook ? 'used-placeholder' : ''}`,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "jsx-815a3a3596f21f78" + " " + "book-initial",
                                                    children: b.title[0]
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.js",
                                                    lineNumber: 352,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.js",
                                                lineNumber: 351,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-815a3a3596f21f78" + " " + `condition-tag ${b.isNewBook ? 'tag-new-book' : 'tag-used-book'}`,
                                                children: b.isNewBook ? t.newTag : t.usedTag
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.js",
                                                lineNumber: 354,
                                                columnNumber: 17
                                            }, this),
                                            b.badge && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-815a3a3596f21f78" + " " + `book-badge badge-${b.badge}`,
                                                children: b.badge === 'best' ? t.bestseller : t.newTag
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.js",
                                                lineNumber: 357,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 350,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-815a3a3596f21f78" + " " + "book-body",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                title: b.title,
                                                className: "jsx-815a3a3596f21f78" + " " + "book-title",
                                                children: b.title
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.js",
                                                lineNumber: 360,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-815a3a3596f21f78" + " " + "book-author",
                                                children: b.author
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.js",
                                                lineNumber: 361,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-815a3a3596f21f78" + " " + "book-footer",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "jsx-815a3a3596f21f78" + " " + "price-main",
                                                        children: [
                                                            b.price.toFixed(2),
                                                            " ₼"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/page.js",
                                                        lineNumber: 363,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>addToCart(b),
                                                        className: "jsx-815a3a3596f21f78" + " " + `add-btn ${cart[b.id] ? 'added' : ''}`,
                                                        children: cart[b.id] ? t.added : t.addBtn
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.js",
                                                        lineNumber: 364,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/page.js",
                                                lineNumber: 362,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 359,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, b.id, true, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 349,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 347,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.js",
                lineNumber: 321,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "accessories",
                ref: addReveal,
                className: "jsx-815a3a3596f21f78" + " " + "section section-dark-bg reveal",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-815a3a3596f21f78" + " " + "section-head",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "jsx-815a3a3596f21f78" + " " + "section-title",
                                children: t.accTitle
                            }, void 0, false, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 377,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "jsx-815a3a3596f21f78" + " " + "section-subtitle",
                                children: t.accDesc
                            }, void 0, false, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 378,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 376,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-815a3a3596f21f78" + " " + "accessories-grid",
                        children: ACCESSORIES_DATA.map((acc)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-815a3a3596f21f78" + " " + "accessory-card",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-815a3a3596f21f78" + " " + "acc-icon-box",
                                        children: acc.type === 'packaging' ? '🎁' : '🔖'
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 383,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-815a3a3596f21f78" + " " + "acc-details",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-815a3a3596f21f78" + " " + "acc-title",
                                                children: acc.title
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.js",
                                                lineNumber: 385,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-815a3a3596f21f78" + " " + "acc-desc",
                                                children: acc.desc
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.js",
                                                lineNumber: 386,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-815a3a3596f21f78" + " " + "acc-footer",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "jsx-815a3a3596f21f78" + " " + "acc-price",
                                                        children: [
                                                            acc.price.toFixed(2),
                                                            " ₼"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/page.js",
                                                        lineNumber: 388,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>addToCart(acc),
                                                        className: "jsx-815a3a3596f21f78" + " " + `add-btn ${cart[acc.id] ? 'added' : ''}`,
                                                        children: cart[acc.id] ? t.accAdded : t.accAdd
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.js",
                                                        lineNumber: 389,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/page.js",
                                                lineNumber: 387,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 384,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, acc.id, true, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 382,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 380,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.js",
                lineNumber: 375,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "sale",
                ref: addReveal,
                className: "jsx-815a3a3596f21f78" + " " + "section reveal",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-815a3a3596f21f78" + " " + "section-head",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "jsx-815a3a3596f21f78" + " " + "section-title",
                            children: t.saleTitle
                        }, void 0, false, {
                            fileName: "[project]/app/page.js",
                            lineNumber: 401,
                            columnNumber: 39
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 401,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-815a3a3596f21f78" + " " + "books-grid",
                        children: SALE_DATA.map((b)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-815a3a3596f21f78" + " " + "book-card",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-815a3a3596f21f78" + " " + "book-thumb",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-815a3a3596f21f78" + " " + "premium-book-placeholder sale-placeholder",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "jsx-815a3a3596f21f78" + " " + "book-initial",
                                                    children: b.title[0]
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.js",
                                                    lineNumber: 407,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.js",
                                                lineNumber: 406,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-815a3a3596f21f78" + " " + `condition-tag ${b.isNewBook ? 'tag-new-book' : 'tag-used-book'}`,
                                                children: b.isNewBook ? t.newTag : t.usedTag
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.js",
                                                lineNumber: 409,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-815a3a3596f21f78" + " " + "book-badge badge-sale",
                                                children: t.saleTag
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.js",
                                                lineNumber: 412,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 405,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-815a3a3596f21f78" + " " + "book-body",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                title: b.title,
                                                className: "jsx-815a3a3596f21f78" + " " + "book-title",
                                                children: b.title
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.js",
                                                lineNumber: 415,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-815a3a3596f21f78" + " " + "book-author",
                                                children: b.author
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.js",
                                                lineNumber: 416,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-815a3a3596f21f78" + " " + "book-footer",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-815a3a3596f21f78" + " " + "price-block",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "jsx-815a3a3596f21f78" + " " + "price-main",
                                                                children: [
                                                                    b.price.toFixed(2),
                                                                    " ₼"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/page.js",
                                                                lineNumber: 419,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "jsx-815a3a3596f21f78" + " " + "price-old",
                                                                children: [
                                                                    b.old.toFixed(2),
                                                                    " ₼"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/page.js",
                                                                lineNumber: 420,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/page.js",
                                                        lineNumber: 418,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>addToCart(b),
                                                        className: "jsx-815a3a3596f21f78" + " " + `add-btn ${cart[b.id] ? 'added' : ''}`,
                                                        children: cart[b.id] ? t.added : t.addBtn
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/page.js",
                                                        lineNumber: 422,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/page.js",
                                                lineNumber: 417,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 414,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, b.id, true, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 404,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 402,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.js",
                lineNumber: 400,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                ref: addReveal,
                className: "jsx-815a3a3596f21f78" + " " + "reveal",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-815a3a3596f21f78" + " " + "footer-inner",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-815a3a3596f21f78" + " " + "footer-brand",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-815a3a3596f21f78" + " " + "footer-logo",
                                        children: [
                                            "folio",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-815a3a3596f21f78" + " " + "logo-dot",
                                                children: "."
                                            }, void 0, false, {
                                                fileName: "[project]/app/page.js",
                                                lineNumber: 436,
                                                columnNumber: 47
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 436,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "jsx-815a3a3596f21f78",
                                        children: t.footerDesc
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 437,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 435,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-815a3a3596f21f78" + " " + "footer-col",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "jsx-815a3a3596f21f78",
                                        children: t.footerCollections
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 440,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#books",
                                        className: "jsx-815a3a3596f21f78",
                                        children: t.footerNewEd
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 441,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#books",
                                        className: "jsx-815a3a3596f21f78",
                                        children: t.footerUsedB
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 442,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#accessories",
                                        className: "jsx-815a3a3596f21f78",
                                        children: t.footerBookmarks
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 443,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 439,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-815a3a3596f21f78" + " " + "footer-col",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "jsx-815a3a3596f21f78",
                                        children: t.footerService
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 446,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#",
                                        className: "jsx-815a3a3596f21f78",
                                        children: t.footerDelivery
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 447,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: `https://wa.me/${WHATSAPP_NUMBER}`,
                                        className: "jsx-815a3a3596f21f78",
                                        children: t.footerWhatsapp
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 448,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 445,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 434,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-815a3a3596f21f78" + " " + "footer-bottom",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "jsx-815a3a3596f21f78",
                                children: [
                                    "© 2026 folio. ",
                                    t.footerRights
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 452,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "jsx-815a3a3596f21f78",
                                children: "Azərbaycan · ₼ AZN"
                            }, void 0, false, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 453,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 451,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.js",
                lineNumber: 433,
                columnNumber: 7
            }, this),
            isCartOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                onClick: ()=>setIsCartOpen(false),
                className: "jsx-815a3a3596f21f78" + " " + "cart-overlay"
            }, void 0, false, {
                fileName: "[project]/app/page.js",
                lineNumber: 458,
                columnNumber: 22
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-815a3a3596f21f78" + " " + `cart-panel ${isCartOpen ? 'open' : ''}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-815a3a3596f21f78" + " " + "cart-hdr",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "jsx-815a3a3596f21f78",
                                children: t.cartTitle
                            }, void 0, false, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 461,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setIsCartOpen(false),
                                className: "jsx-815a3a3596f21f78" + " " + "close-cart",
                                children: "✕"
                            }, void 0, false, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 462,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 460,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-815a3a3596f21f78" + " " + "cart-body",
                        children: cartItems.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-815a3a3596f21f78" + " " + "cart-empty",
                            children: t.cartEmpty
                        }, void 0, false, {
                            fileName: "[project]/app/page.js",
                            lineNumber: 466,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                cartItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-815a3a3596f21f78" + " " + "cart-item",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-815a3a3596f21f78" + " " + "ci-info",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-815a3a3596f21f78" + " " + "ci-title-wrapper",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "jsx-815a3a3596f21f78" + " " + "ci-title",
                                                            children: item.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.js",
                                                            lineNumber: 473,
                                                            columnNumber: 23
                                                        }, this),
                                                        item.isNewBook !== undefined && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "jsx-815a3a3596f21f78" + " " + `cart-cond-label ${item.isNewBook ? 'lbl-n' : 'lbl-u'}`,
                                                            children: item.isNewBook ? t.newTag : t.usedTag
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/page.js",
                                                            lineNumber: 475,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/page.js",
                                                    lineNumber: 472,
                                                    columnNumber: 21
                                                }, this),
                                                item.author && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-815a3a3596f21f78" + " " + "ci-author",
                                                    children: item.author
                                                }, void 0, false, {
                                                    fileName: "[project]/app/page.js",
                                                    lineNumber: 480,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-815a3a3596f21f78" + " " + "ci-row",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "jsx-815a3a3596f21f78" + " " + "ci-price",
                                                            children: [
                                                                (item.price * item.qty).toFixed(2),
                                                                " ₼"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/page.js",
                                                            lineNumber: 482,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-815a3a3596f21f78" + " " + "qty-row",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>changeQty(item.id, -1),
                                                                    className: "jsx-815a3a3596f21f78" + " " + "q-btn",
                                                                    children: "−"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/page.js",
                                                                    lineNumber: 484,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "jsx-815a3a3596f21f78" + " " + "q-num",
                                                                    children: item.qty
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/page.js",
                                                                    lineNumber: 485,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>changeQty(item.id, 1),
                                                                    className: "jsx-815a3a3596f21f78" + " " + "q-btn",
                                                                    children: "+"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/page.js",
                                                                    lineNumber: 486,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>removeItem(item.id),
                                                                    className: "jsx-815a3a3596f21f78" + " " + "q-del",
                                                                    children: "Sil"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/page.js",
                                                                    lineNumber: 487,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/page.js",
                                                            lineNumber: 483,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/page.js",
                                                    lineNumber: 481,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.js",
                                            lineNumber: 471,
                                            columnNumber: 19
                                        }, this)
                                    }, item.id, false, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 470,
                                        columnNumber: 17
                                    }, this)),
                                !cart["a1"] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-815a3a3596f21f78" + " " + "cart-suggestion-box",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-815a3a3596f21f78" + " " + "sugg-text",
                                            children: [
                                                "🎁 ",
                                                t.suggText
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/page.js",
                                            lineNumber: 496,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>addToCart(ACCESSORIES_DATA[0]),
                                            className: "jsx-815a3a3596f21f78" + " " + "sugg-add-btn",
                                            children: t.suggBtn
                                        }, void 0, false, {
                                            fileName: "[project]/app/page.js",
                                            lineNumber: 497,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.js",
                                    lineNumber: 495,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true)
                    }, void 0, false, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 464,
                        columnNumber: 9
                    }, this),
                    cartItems.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-815a3a3596f21f78" + " " + "cart-ftr",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-815a3a3596f21f78" + " " + "cart-total-row",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-815a3a3596f21f78",
                                        children: t.cartTotal
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 505,
                                        columnNumber: 45
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        className: "jsx-815a3a3596f21f78",
                                        children: [
                                            cartTotal.toFixed(2),
                                            " ₼"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 505,
                                        columnNumber: 71
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 505,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleCheckoutWhatsApp,
                                className: "jsx-815a3a3596f21f78" + " " + "checkout-btn",
                                children: t.checkout
                            }, void 0, false, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 506,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 504,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.js",
                lineNumber: 459,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-815a3a3596f21f78" + " " + `toast ${toast.show ? 'show' : ''}`,
                children: toast.msg
            }, void 0, false, {
                fileName: "[project]/app/page.js",
                lineNumber: 511,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "815a3a3596f21f78",
                children: "*,:before,:after{box-sizing:border-box;margin:0;padding:0}html{scroll-behavior:smooth}.theme-dark{--bg:#000;--bg-alt:#0a0a0c;--surface:#161617;--surface-2:#1c1c1e;--surface-3:#232326;--border:#2d2d2f;--text:#f5f5f7;--text-dim:#86868b;--accent:#0071e3}.theme-light{--bg:#fafafa;--bg-alt:#f1f1f3;--surface:#fff;--surface-2:#f0f0f2;--surface-3:#e8e8ea;--border:#e2e2e4;--text:#1d1d1f;--text-dim:#6e6e73;--accent:#06c}.app-root{background:var(--bg);color:var(--text);min-height:100vh;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;transition:background .25s,color .25s}.nav-wrapper{z-index:100;padding:22px 24px 0;position:fixed;top:0;left:0;right:0}.apple-nav-floating{background:var(--surface);opacity:.92;-webkit-backdrop-filter:blur(24px);border:1px solid var(--border);border-radius:16px;max-width:1100px;margin:0 auto;box-shadow:0 4px 24px #0000002e}.nav-container{justify-content:space-between;align-items:center;height:58px;padding:0 22px;display:flex}.nav-logo-apple{color:var(--text);letter-spacing:-.4px;font-size:1.25rem;font-weight:700;text-decoration:none}.logo-dot{color:var(--accent)}.nav-links{align-items:center;gap:22px;list-style:none;display:flex}.nav-links a{color:var(--text-dim);font-size:.82rem;font-weight:500;text-decoration:none}.nav-links a:hover{color:var(--text)}.nav-links button{color:var(--text-dim);cursor:pointer;background:0 0;border:none;font-family:inherit;font-size:.82rem;font-weight:500}.nav-links button:hover,.nav-links button.active-link{color:var(--text)}.nav-right{align-items:center;gap:12px;display:flex}.nav-search input{background:var(--surface-2);border:1px solid var(--border);color:var(--text);border-radius:8px;outline:none;width:110px;padding:6px 12px;font-size:.78rem}.lang-select{background:var(--surface-2);border:1px solid var(--border);color:var(--text);cursor:pointer;border-radius:6px;padding:5px 6px;font-size:.75rem;font-weight:600}.theme-toggle{background:var(--surface-2);border:1px solid var(--border);color:var(--text);cursor:pointer;border-radius:6px;width:30px;height:30px;font-size:.9rem}.cart-btn{border:1px solid var(--border);color:var(--text);cursor:pointer;background:0 0;border-radius:8px;align-items:center;gap:6px;padding:6px 12px;font-size:.8rem;display:flex}.cart-count{background:var(--accent);color:#fff;border-radius:10px;padding:1px 6px;font-size:.68rem;font-weight:600}.hamburger{background:var(--surface-2);border:1px solid var(--border);cursor:pointer;border-radius:6px;flex-direction:column;justify-content:center;gap:4px;width:32px;height:32px;display:none}.hamburger span{background:var(--text);width:16px;height:2px;margin:0 auto}.mobile-overlay{-webkit-backdrop-filter:blur(3px);backdrop-filter:blur(3px);z-index:200;background:#0006;position:fixed;inset:0}.mobile-menu{background:var(--surface);border-left:1px solid var(--border);z-index:201;flex-direction:column;gap:6px;width:78%;max-width:320px;padding:18px;transition:transform .25s;display:flex;position:fixed;top:0;bottom:0;right:0;transform:translate(100%)}.mobile-menu.open{transform:translate(0)}.mobile-menu-hdr{justify-content:space-between;align-items:center;margin-bottom:14px;display:flex}.mobile-search input{background:var(--surface-2);border:1px solid var(--border);width:100%;color:var(--text);border-radius:8px;margin-bottom:12px;padding:8px 12px;font-size:.85rem}.mobile-link{text-align:left;border:none;border-bottom:1px solid var(--border);width:100%;color:var(--text);cursor:pointer;background:0 0;padding:12px 4px;font-size:.95rem;text-decoration:none;display:block}.mobile-menu-footer{gap:10px;margin-top:auto;padding-top:12px;display:flex}.mobile-menu-footer .theme-toggle{flex:1;width:auto;font-size:.78rem;font-weight:600}.hero{flex-direction:column;justify-content:center;align-items:center;min-height:100vh;padding:100px 16px 40px;display:flex;position:relative}.hero-inner{grid-template-columns:1.2fr .8fr;align-items:center;gap:40px;width:100%;max-width:1100px;margin:0 auto;display:grid}.hero-tag{color:var(--accent);letter-spacing:.2px;margin-bottom:14px;font-size:.82rem;font-weight:600}.hero h1{letter-spacing:-1px;color:var(--text);margin-bottom:18px;font-size:max(2rem,min(3.6vw,3.2rem));font-weight:700;line-height:1.15}.hero-desc{color:var(--text-dim);max-width:480px;margin-bottom:26px;font-size:1.05rem;line-height:1.6}.hero-actions{align-items:center;gap:18px;display:flex}.btn-apple-primary{background:var(--accent);color:#fff;border-radius:8px;padding:11px 22px;font-size:.85rem;font-weight:600;text-decoration:none}.btn-apple-link{color:var(--accent);font-size:.88rem;font-weight:500;text-decoration:none}.scroll-hint{color:var(--text-dim);font-size:1.2rem;animation:2s infinite bounce;position:absolute;bottom:30px;left:50%;transform:translate(-50%)}@keyframes bounce{0%,to{transform:translate(-50%)}50%{transform:translate(-50%,8px)}}.hero-visual{justify-content:center;display:flex}.apple-book-mockup{background:var(--surface-2);border:1px solid var(--border);border-radius:4px 12px 12px 4px;width:190px;height:250px;display:flex;position:relative;box-shadow:0 25px 50px #00000059}.book-spine{background:#00000026;width:10px}.book-cover-content{flex-direction:column;flex:1;justify-content:center;align-items:center;padding:22px;display:flex}.mock-logo{color:var(--text-dim);letter-spacing:1px;margin-bottom:auto;font-size:.65rem}.mock-title{color:var(--text);font-size:1.25rem;font-weight:700}.mock-author{color:var(--text-dim);margin-bottom:auto;font-size:.75rem}.reveal{opacity:0;transition:opacity .6s,transform .6s;transform:translateY(36px)}.reveal.in-view{opacity:1;transform:translateY(0)}.section{max-width:1100px;margin:0 auto;padding:60px 16px}.section-dark-bg{background:var(--bg-alt);border-top:1px solid var(--border);border-bottom:1px solid var(--border);max-width:100vw;padding:70px max(16px,50vw - 550px)}.section-head-flex{flex-wrap:wrap;justify-content:space-between;align-items:center;gap:12px;margin-bottom:22px;display:flex}.section-title{color:var(--text);letter-spacing:-.4px;font-size:1.7rem;font-weight:700}.section-subtitle{color:var(--text-dim);max-width:560px;margin-top:6px;margin-bottom:26px;font-size:.95rem}.condition-switcher{background:var(--surface-2);border:1px solid var(--border);border-radius:8px;padding:3px;display:flex}.condition-switcher button{color:var(--text-dim);cursor:pointer;background:0 0;border:none;border-radius:6px;padding:6px 14px;font-size:.8rem;font-weight:600}.condition-switcher button.active{background:var(--accent);color:#fff}.cat-pills{flex-wrap:wrap;gap:8px;margin-bottom:30px;display:flex}.pill{border:1px solid var(--border);color:var(--text);cursor:pointer;background:0 0;border-radius:8px;padding:6px 13px;font-size:.8rem;font-weight:500}.pill.active{background:var(--text);border-color:var(--text);color:var(--bg)}.books-grid{grid-template-columns:repeat(auto-fill,minmax(175px,1fr));gap:18px;display:grid}.book-card{background:var(--surface);border:1px solid var(--border);border-radius:10px;flex-direction:column;display:flex;position:relative;overflow:hidden}.book-thumb{aspect-ratio:3/3.6;background:var(--bg-alt);border-bottom:1px solid var(--border);justify-content:center;align-items:center;width:100%;display:flex;position:relative}.premium-book-placeholder{background:var(--surface-3);border-left:3px solid #0000002e;border-radius:3px 6px 6px 3px;justify-content:center;align-items:center;width:85px;height:115px;display:flex;box-shadow:0 8px 16px #0000004d}.used-placeholder{background:#19222b}.sale-placeholder{background:#2b1818}.book-initial{color:var(--text-dim);font-size:1.6rem;font-weight:700}.condition-tag{border-radius:5px;padding:2px 7px;font-size:.65rem;font-weight:600;position:absolute;bottom:8px;left:8px}.tag-new-book{color:#2bb352;background:#30d15826;border:1px solid #30d15840}.tag-used-book{color:#0a84ff;background:#0a84ff26;border:1px solid #0a84ff40}.book-badge{text-transform:uppercase;border-radius:5px;padding:2px 7px;font-size:.6rem;font-weight:700;position:absolute;top:8px;left:8px}.badge-new{color:#30d158;background:#1d3528}.badge-best{color:#ff9f0a;background:#3a2d16}.badge-sale{color:#ff453a;background:#3b1d1d}.book-body{flex-direction:column;flex:1;padding:13px;display:flex}.book-title{color:var(--text);white-space:nowrap;text-overflow:ellipsis;margin-bottom:2px;font-size:.88rem;font-weight:700;overflow:hidden}.book-author{color:var(--text-dim);white-space:nowrap;text-overflow:ellipsis;margin-bottom:14px;font-size:.78rem;overflow:hidden}.book-footer{justify-content:space-between;align-items:center;margin-top:auto;display:flex}.price-main{color:var(--text);font-size:.95rem;font-weight:700}.price-old{color:var(--text-dim);margin-left:4px;font-size:.75rem;text-decoration:line-through}.add-btn{color:var(--accent);border:1px solid var(--accent);cursor:pointer;background:0 0;border-radius:8px;padding:5px 12px;font-size:.7rem;font-weight:600;transition:all .2s}.add-btn:hover{background:var(--accent);color:#fff}.add-btn.added{color:#fff;background:#30d158;border-color:#30d158}.accessories-grid{grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:18px;margin-top:10px;display:grid}.accessory-card{background:var(--surface);border:1px solid var(--border);border-radius:12px;align-items:center;gap:16px;padding:18px;display:flex}.acc-icon-box{background:var(--surface-3);border-radius:8px;justify-content:center;align-items:center;width:54px;height:54px;font-size:2rem;display:flex}.acc-details{flex:1}.acc-title{color:var(--text);font-size:.9rem;font-weight:700}.acc-desc{color:var(--text-dim);margin-bottom:10px;font-size:.78rem}.acc-footer{justify-content:space-between;align-items:center;display:flex}.acc-price{color:var(--text);font-size:.95rem;font-weight:700}footer{background:var(--surface);border-top:1px solid var(--border);color:var(--text-dim);padding:50px 16px 30px;font-size:.8rem}.footer-inner{grid-template-columns:2fr 1fr 1fr;gap:28px;max-width:1100px;margin:0 auto 26px;display:grid}.footer-brand .footer-logo{color:var(--text);margin-bottom:8px;font-size:1.2rem;font-weight:700}.footer-col h4{color:var(--text);margin-bottom:12px;font-size:.8rem;font-weight:700}.footer-col a{color:var(--text-dim);margin-bottom:8px;text-decoration:none;display:block}.footer-bottom{border-top:1px solid var(--border);justify-content:space-between;max-width:1100px;margin:0 auto;padding-top:16px;display:flex}.cart-overlay{-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px);z-index:200;background:#0006;position:fixed;inset:0}.cart-panel{background:var(--surface);border-left:1px solid var(--border);z-index:201;flex-direction:column;width:380px;transition:transform .25s ease-out;display:flex;position:fixed;top:0;bottom:0;right:0;transform:translate(100%)}.cart-panel.open{transform:translate(0)}.cart-hdr{border-bottom:1px solid var(--border);justify-content:space-between;align-items:center;padding:18px;display:flex}.cart-hdr h3{font-weight:700}.close-cart{color:var(--text-dim);cursor:pointer;background:0 0;border:none;font-size:1.1rem}.cart-body{flex:1;padding:18px;overflow-y:auto}.cart-empty{text-align:center;color:var(--text-dim);padding-top:30px}.cart-item{border-bottom:1px solid var(--border);margin-bottom:14px;padding-bottom:14px}.ci-title-wrapper{flex-wrap:wrap;align-items:center;gap:8px;display:flex}.ci-title{color:var(--text);font-size:.85rem;font-weight:700}.cart-cond-label{border-radius:4px;padding:1px 5px;font-size:.6rem;font-weight:700}.lbl-n{color:#2bb352;background:#30d15826}.lbl-u{color:#0a84ff;background:#0a84ff26}.ci-author{color:var(--text-dim);font-size:.75rem}.ci-row{justify-content:space-between;align-items:center;margin-top:8px;display:flex}.ci-price{color:var(--text);font-weight:700}.qty-row{align-items:center;gap:6px;display:flex}.q-btn{background:var(--surface-2);border:1px solid var(--border);width:22px;height:22px;color:var(--text);cursor:pointer;border-radius:5px}.q-num{color:var(--text);font-size:.8rem}.q-del{color:#ff453a;cursor:pointer;background:0 0;border:none;margin-left:6px;font-size:.75rem;font-weight:600}.cart-suggestion-box{background:var(--surface-3);border:1px dashed var(--border);border-radius:8px;flex-direction:column;gap:8px;margin-top:12px;padding:14px;display:flex}.sugg-text{color:var(--text);font-size:.78rem}.sugg-add-btn{background:var(--accent);color:#fff;cursor:pointer;border:none;border-radius:6px;padding:8px;font-size:.75rem;font-weight:700}.cart-ftr{border-top:1px solid var(--border);padding:18px}.cart-total-row{justify-content:space-between;margin-bottom:14px;font-size:.9rem;display:flex}.cart-total-row strong{color:var(--text);font-size:1.05rem}.checkout-btn{background:var(--accent);color:#fff;cursor:pointer;border:none;border-radius:8px;width:100%;padding:13px;font-weight:700}.toast{background:var(--text);color:var(--bg);z-index:300;opacity:0;border-radius:10px;padding:9px 18px;font-size:.8rem;font-weight:600;transition:all .25s;position:fixed;bottom:24px;left:50%;transform:translate(-50%)translateY(100px)}.toast.show{opacity:1;transform:translate(-50%)translateY(0)}@media (width<=860px){.nav-links,.nav-search{display:none}.hamburger{display:flex}}@media (width<=768px){.nav-wrapper{padding:14px 12px 0}.apple-nav-floating{border-radius:14px}.nav-container{height:52px;padding:0 14px}.lang-select{display:none}.hero{min-height:92vh;padding-top:90px}.hero-inner{text-align:center;grid-template-columns:1fr}.hero-actions{justify-content:center}.hero-visual{display:none}.books-grid{gap:10px;grid-template-columns:repeat(2,1fr)!important}.book-thumb{aspect-ratio:3/3.4}.premium-book-placeholder{width:68px;height:92px}.book-title{font-size:.82rem}.book-author{font-size:.72rem}.price-main{font-size:.88rem}.add-btn{padding:4px 9px;font-size:.65rem}.accessories-grid,.footer-inner{grid-template-columns:1fr}.cart-panel{width:100%}}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.js",
        lineNumber: 224,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=app_page_1fazqbf.js.map