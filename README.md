# 🌙 Kebun Kebaikan v4.1 Ultimate Edition

> Aplikasi edukatif Islami untuk anak-anak dengan sistem gamifikasi dan multi-user support

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen)](https://kebun-kebaikan.pages.dev)
[![Version](https://img.shields.io/badge/version-4.1-blue)](https://github.com/yourusername/kebun-kebaikan)
[![License](https://img.shields.io/badge/license-MIT-green)](LICENSE)

---

## ✨ Fitur Utama

### 🕌 Tracking Ibadah Harian
- ✅ Checklist 9 ibadah harian
- 📊 Progress bar visual
- 🔥 Streak counter
- 🪙 Reward system (Dinar)

### 📖 Quran Journey (3 Mode Tracking)
1. **Mode Juz** - Grid 30 Juz (+100 Dinar/juz)
2. **Mode Surah** - List 114 Surah dengan nama Arab (+50 Dinar/surah)
3. **Mode Ayat** - Counter 6,236 ayat dengan milestone (+1 Dinar/10 ayat)

### 🧠 Mini Game Kuis Islami
- 8 pertanyaan tentang Islam
- +50 Dinar untuk jawaban benar
- Cooldown 1x per hari
- Animasi confetti

### 🎁 Gacha System
- Mystery Box (200 Dinar)
- 4 Skin tanaman (Common, Rare, Epic, Legendary)
- Sistem probabilitas

### 🏆 Achievement System
- Pejuang Subuh (Shalat Subuh 3x)
- Dermawan Cilik (Sedekah 5x)
- Kutu Buku (Baca Quran 5x)

### 👥 Multi-User System
- Profile switcher
- Data terpisah per user
- LocalStorage persistence

### 📢 WhatsApp Report Generator
- Laporan harian otomatis
- Auto-copy ke clipboard
- Link wa.me terintegrasi

### 🔊 Sound Feedback
- Speech Synthesis API
- Pujian Islami ("Alhamdulillah!", "MashaAllah!")
- Milestone alerts

---

## 🎨 UI/UX Features

- **Deep Teal & Gold Theme** - Nuansa Islami premium
- **Glassmorphism Design** - Modern & elegant
- **Bottom Tab Navigation** - 5 tabs (Beranda, Quran, Kuis, Toko, Piala)
- **Responsive Mobile-First** - Optimized untuk HP
- **Smooth Animations** - Confetti, floating Dinar, transitions

---

## 🚀 Quick Start

### Akses Langsung (Production)
Buka aplikasi di browser:
```
https://kebun-kebaikan.pages.dev
```

### Local Development
```bash
# Clone repository
git clone https://github.com/yourusername/kebun-kebaikan.git
cd kebun-kebaikan

# Langsung buka file
# Option 1: Double-click index.html
# Option 2: Live server
npx live-server .
```

---

## 📦 Tech Stack

- **Frontend**: React 18 (via CDN)
- **Styling**: Tailwind CSS (via CDN)
- **Build**: Single HTML file (no build process)
- **Icons**: Emoji + Lucide Icons
- **Font**: Google Fonts (Nunito)
- **Storage**: Browser LocalStorage
- **Hosting**: Cloudflare Pages
- **Speech**: Web Speech API

---

## 🌐 Deployment

### Deploy ke Cloudflare Pages

**Method 1: Dashboard Upload (Termudah)**
1. Login ke https://dash.cloudflare.com
2. **Workers & Pages** > **Create a project** > **Upload assets**
3. Drag `index.html`
4. Deploy → Done!

**Method 2: GitHub Integration (Automated)**
```bash
# Connect repo ke Cloudflare Pages
# Auto-deploy setiap git push
```

Lihat [Deployment Guide](docs/deployment_guide.md) untuk detail lengkap.

---

## 📱 Browser Support

| Browser | Version | Status |
|---------|---------|--------|
| Chrome | 90+ | ✅ Full Support |
| Firefox | 88+ | ✅ Full Support |
| Safari | 14+ | ✅ Full Support |
| Edge | 90+ | ✅ Full Support |
| Mobile Safari | iOS 14+ | ✅ Full Support |
| Chrome Mobile | Android 10+ | ✅ Full Support |

---

## 📊 Data Structure

### LocalStorage Keys (per user)
```javascript
{
  "kebun_users": ["Ahmad", "Siti", ...],
  "kebun_current_user": "Ahmad",
  "kebun_data_Ahmad": {
    tasks: [...],
    dinar: 250,
    streak: 7,
    completedJuz: [1, 2, 3],
    completedSurah: [1, 2, 113, 114],
    totalAyatRead: 1500,
    ownedSkins: ["normal", "kurma"],
    activeSkin: "kurma",
    unlockedAchievements: ["subuh", "quran"]
  }
}
```

---

## 🎯 Roadmap

### v4.2 (Planned)
- [ ] Dark mode toggle
- [ ] Export/Import data (JSON)
- [ ] Reading time tracker
- [ ] Daily streak notifications
- [ ] Quran audio integration

### v5.0 (Future)
- [ ] Backend sync (Firebase/Supabase)
- [ ] Multi-device sync
- [ ] Parent dashboard
- [ ] Leaderboard
- [ ] Social features (share achievements)

---

## 🤝 Contributing

Kontribusi sangat diterima! Silakan:

1. Fork repository
2. Buat branch baru (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buat Pull Request

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

## 👨‍💻 Author

**Your Name**
- GitHub: [@yourusername](https://github.com/yourusername)

---

## 🙏 Acknowledgments

- [React](https://react.dev) - UI Library
- [Tailwind CSS](https://tailwindcss.com) - Styling
- [Cloudflare Pages](https://pages.cloudflare.com) - Free Hosting
- [Lucide Icons](https://lucide.dev) - Icon Library

---

## 📸 Screenshots

### Home Page
![Home](docs/screenshots/home.png)

### Quran Journey - Mode Surah
![Quran](docs/screenshots/quran-surah.png)

### Quran Journey - Mode Ayat
![Ayat](docs/screenshots/quran-ayat.png)

### Mobile View
![Mobile](docs/screenshots/mobile.png)

---

**Made with ❤️ for Indonesian Muslim Kids**
