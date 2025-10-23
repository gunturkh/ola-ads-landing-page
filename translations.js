// Translations for English and Bahasa Indonesia
const translations = {
    en: {
        nav: {
            home: "Home",
            services: "Services",
            why: "Why OLA",
            how: "How It Works",
            contact: "Contact"
        },
        hero: {
            titleThe: "The",
            titleLine1: "Personal Importer",
            titleLine2: "For UMKM Indonesia",
            subtitle: "Boost Your UMKM Revenue with Quality Import Products with Ola!",
            getStarted: "Get Started",
            contact: "Contact Us"
        },
        services: {
            title1: "The Right Solution for",
            title2: "Business Opportunities",
            buy: {
                title: "Buy for You",
                desc: "We purchase products from Chinese marketplaces on your behalf, ensuring the best prices and quality."
            },
            ship: {
                title: "Ship for You",
                desc: "Our reliable shipping services ensure your products arrive safely and on time from China to your doorstep."
            },
            source: {
                title: "Source for You",
                desc: "We find the perfect suppliers for your specific product needs, negotiating the best prices and terms."
            }
        },
        why: {
            title: "Why Choose OLA?",
            feature1: {
                title: "One Stop Solution",
                desc: "Offering complete services from finding the best products and suppliers, secure transaction process, and reliable and cost-effective shipping."
            },
            feature2: {
                title: "Transparency",
                desc: "Building trust with customers starts with transparency. We always explain complete cost details before you make a transaction. No hidden fees, no surprises at the end."
            },
            feature3: {
                title: "Free Consultation",
                desc: "Customers can consult before importing. We will help find products, negotiate to get the best prices and much more."
            },
            feature4: {
                title: "After Sales",
                desc: "Ola team prioritizes customer satisfaction. With experience since 2019, we understand customer needs better."
            }
        },
        how: {
            title: "How OLA Works",
            subtitle: "Work System OLA",
            description: "Shop for your business needs directly from trusted suppliers through the China marketplace"
        },
        cta: {
            title: "Ready to Start Your Import Journey?",
            subtitle: "Join hundreds of satisfied customers who trust OLA for their import needs from China",
            whatsapp: "Contact Us on WhatsApp",
            learn: "Learn More"
        },
        footer: {
            tagline: "Your trusted partner for safe, easy, and reliable importing from China.",
            services: {
                title: "Services",
                buy: "Buy for You",
                ship: "Ship for You",
                source: "Source for You"
            },
            contact: {
                title: "Contact",
                email: "Email Us",
                start: "Get Started"
            },
            copyright: "© 2025 OLA Personal Importer. All rights reserved."
        }
    },
    id: {
        nav: {
            home: "Beranda",
            services: "Layanan",
            why: "Mengapa OLA",
            how: "Cara Kerja",
            contact: "Kontak"
        },
        hero: {
            titleThe: "The",
            titleLine1: "Personal Importer",
            titleLine2: "For UMKM Indonesia",
            subtitle: "Tingkatkan Omset UMKM Anda dengan Produk Impor Berkualitas Bersama Ola!",
            getStarted: "Mulai Sekarang",
            contact: "Hubungi Kami"
        },
        services: {
            title1: "Solusi Tepat untuk",
            title2: "Peluang Bisnis",
            buy: {
                title: "Belikan Anda",
                desc: "Kami membeli produk dari marketplace China atas nama Anda, memastikan harga terbaik dan kualitas."
            },
            ship: {
                title: "Kirimkan untuk Anda",
                desc: "Layanan pengiriman kami yang andal memastikan produk Anda tiba dengan aman dan tepat waktu dari China ke alamat Anda."
            },
            source: {
                title: "Carikan untuk Anda",
                desc: "Kami menemukan supplier yang sempurna untuk kebutuhan produk spesifik Anda, menegosiasikan harga dan syarat terbaik."
            }
        },
        why: {
            title: "Mengapa Memilih OLA?",
            feature1: {
                title: "One Stop Solution",
                desc: "Menawarkan layanan lengkap mulai dari pencarian barang dan supplier terbaik, proses transaksi yang aman, dan pengiriman barang terpercaya dan hemat."
            },
            feature2: {
                title: "Transparansi",
                desc: "Membangun kepercayaan dengan pelanggan dimulai dari transparansi. Kami selalu menjelaskan detail biaya lengkap sebelum Anda melakukan transaksi. Tidak ada biaya tersembunyi, tidak ada kejutan di akhir."
            },
            feature3: {
                title: "Konsultasi Gratis",
                desc: "Customer dapat konsultasi sebelum melakukan import. Kami akan bantu mencari produk, menegosiasi untuk mendapat harga terbaik dan masih banyak lagi."
            },
            feature4: {
                title: "After Sales",
                desc: "Tim Ola mengutamakan customer satisfaction. Dengan pengalaman sejak tahun 2019, kami memahami kebutuhan pelanggan dengan lebih baik."
            }
        },
        how: {
            title: "Cara Kerja OLA",
            subtitle: "Sistem Kerja OLA",
            description: "Belanja untuk kebutuhan bisnis Anda langsung dari supplier terpercaya melalui marketplace China"
        },
        cta: {
            title: "Siap Memulai Perjalanan Impor Anda?",
            subtitle: "Bergabunglah dengan ratusan pelanggan yang puas yang mempercayai OLA untuk kebutuhan impor mereka dari China",
            whatsapp: "Hubungi Kami di WhatsApp",
            learn: "Pelajari Lebih Lanjut"
        },
        footer: {
            tagline: "Mitra terpercaya Anda untuk impor yang aman, mudah, dan terpercaya dari China.",
            services: {
                title: "Layanan",
                buy: "Belikan Anda",
                ship: "Kirimkan untuk Anda",
                source: "Carikan untuk Anda"
            },
            contact: {
                title: "Kontak",
                email: "Email Kami",
                start: "Mulai Sekarang"
            },
            copyright: "© 2025 OLA Personal Importer. Hak cipta dilindungi."
        }
    }
};

// Get nested translation value
function getTranslation(lang, key) {
    const keys = key.split('.');
    let value = translations[lang];

    for (const k of keys) {
        value = value[k];
        if (value === undefined) return key;
    }

    return value;
}

// Update all i18n elements
function updateLanguage(lang) {
    // Update document language
    document.documentElement.lang = lang;
    document.body.setAttribute('data-lang', lang);

    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = getTranslation(lang, key);
        element.textContent = translation;
    });

    // Update WhatsApp links with language-specific message
    const whatsappMessage = lang === 'id'
        ? 'Halo OLA, saya tertarik dengan layanan impor Anda'
        : "Hi OLA, I'm interested in your import services";

    const encodedMessage = encodeURIComponent(whatsappMessage);

    const heroWhatsapp = document.getElementById('heroWhatsapp');
    const ctaWhatsapp = document.getElementById('ctaWhatsapp');

    if (heroWhatsapp) {
        heroWhatsapp.href = `https://wa.me/628117708499?text=${encodedMessage}`;
    }

    if (ctaWhatsapp) {
        ctaWhatsapp.href = `https://wa.me/628117708499?text=${encodedMessage}`;
    }

    // Update language toggle active state
    document.querySelectorAll('.lang-option').forEach(option => {
        const optionLang = option.getAttribute('data-lang');
        if (optionLang === lang) {
            option.classList.add('active');
        } else {
            option.classList.remove('active');
        }
    });

    // Save language preference
    localStorage.setItem('preferredLanguage', lang);
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', () => {
    // Get saved language or default to Bahasa Indonesia
    const savedLang = localStorage.getItem('preferredLanguage') || 'id';
    updateLanguage(savedLang);

    // Language toggle button
    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        langToggle.addEventListener('click', () => {
            const currentLang = document.body.getAttribute('data-lang');
            const newLang = currentLang === 'en' ? 'id' : 'en';
            updateLanguage(newLang);
        });
    }

    // Individual language option clicks
    document.querySelectorAll('.lang-option').forEach(option => {
        option.addEventListener('click', (e) => {
            e.stopPropagation();
            const lang = option.getAttribute('data-lang');
            updateLanguage(lang);
        });
    });
});
