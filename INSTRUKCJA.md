# 📘 Instrukcja obsługi - Git CLI + Vim Guide

## 🚀 Jak uruchomić stronę

### Metoda 1: Bezpośrednio w przeglądarce
1. Otwórz plik `index.html` w przeglądarce (kliknij dwukrotnie lub przeciągnij do okna przeglądarki)
2. Strona działa **100% offline** - nie wymaga serwera!

### Metoda 2: Z lokalnym serwerem (opcjonalnie)
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js (npx)
npx http-server -p 8000

# PHP
php -S localhost:8000
```

Następnie otwórz: `http://localhost:8000`

---

## 🎨 Funkcje i obsługa

### 1️⃣ Przełączanie motywów
**Lokalizacja:** Prawy górny róg headera

- **☀️ Jasny** - Klasyczny biały design
- **🌙 Ciemny** - Nowoczesny dark mode z neonowymi akcentami
- **🎨 Kolorystyczny** - Gradient z animowanym tłem

**Motyw zapisywany w localStorage** - strona pamięta Twój wybór!

---

### 2️⃣ Nawigacja (Sidebar)

**Desktop:** Stały sidebar po lewej stronie
**Mobile:** Hamburger menu (☰) w lewym górnym rogu

**5 sekcji:**
1. 📁 Inicjalizacja projektu
2. ✏️ Lokalna edycja
3. 🌐 Repozytorium zdalne
4. 🔍 Przeglądanie treści
5. 🚀 Publikacja gałęzi

**Auto-highlight:** Aktywna sekcja podświetla się automatycznie podczas scrollowania!

---

### 3️⃣ Komendy - jak z nich korzystać

#### Kopiowanie komend
- Kliknij przycisk **📋** przy komendzie
- Tooltip "Skopiowano!" potwierdzi akcję
- Wklej w terminalu: `Ctrl+Shift+V` (Linux) lub `Cmd+V` (Mac)

#### Szczegóły komendy
- Kliknij **"Pokaż szczegóły"** pod komendą
- Zobaczysz:
  - ✅ Pełny opis działania
  - ✅ Przykładowy output terminala
  - ✅ Wskazówki i best practices

#### Dokumentacja Git
- Kliknij ikonę **📚** przy komendach `git`
- Otwiera oficjalną dokumentację Git SCM w nowej karcie

---

### 4️⃣ Poradnik Vim

**Gdzie znajdziesz:** 
- Przycisk **ⓘ** przy komendach: `vim t1.txt`, `vim z1r.txt`, `git commit`

**Co zawiera:**
- `Esc` - Przejście do trybu normalnego
- `i` - Tryb insert (edytowanie)
- `:q` - Wyjście (bez zmian)
- `:q!` - Wyjście bez zapisu
- `:wq` / `:x` - Zapis i wyjście

**Zamykanie modala:**
- Kliknij **×** w prawym górnym rogu
- Kliknij poza modalem
- Naciśnij **ESC**

---

### 5️⃣ Inicjalizacja projektu (ukryte)

**Pierwsze 5 komend** (`mkdir work` → `git init`) są domyślnie ukryte.

**Jak pokazać:**
- Kliknij **"Pokaż inicjalizację"** w sekcji "Inicjalizacja projektu"
- Przycisk zmieni się na **"Ukryj inicjalizację"**

**Dlaczego ukryte?**
- To jednorazowe setup - wykonuje się tylko raz
- Nie zaśmiecają widoku głównego workflow

---

### 6️⃣ Pasek postępu i przycisk "Do góry"

**Pasek postępu:**
- Zielony pasek na samej górze strony
- Pokazuje jak daleko przewinąłeś stronę (0-100%)

**Przycisk ↑:**
- Pojawia się po przewinięciu 600px w dół
- Prawy dolny róg
- Smooth scroll do góry strony

---

## 🔐 Bezpieczeństwo

### ✅ Content Security Policy (CSP)
Strona używa restrykcyjnego CSP:
```html
<meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self'; ...">
```

### ✅ Brak zewnętrznych zasobów
- Zero CDN
- Zero bibliotek
- Tylko Google Fonts (dozwolone w CSP)

### ✅ Token w URL
URL `git remote add` zawiera token, ale jest **nieaktywny**:
```
http://t1:efdcee376e608dae700d1702877edcfa4617678f@zslslubice.pl:4001/z2025/p6.10
```
- Wyświetlany **tylko jako tekst** (nie-klikalny)
- Służy wyłącznie celom edukacyjnym

---

## ♿ Dostępność

### Keyboard Navigation
- **Tab** - Nawigacja między elementami
- **Enter/Space** - Aktywacja przycisków
- **ESC** - Zamknięcie modala

### Screen Readers
- ARIA labels na wszystkich interaktywnych elementach
- Semantyczny HTML5
- Poprawna hierarchia nagłówków

### Reduced Motion
Strona respektuje ustawienia systemu:
```css
@media (prefers-reduced-motion: reduce) {
    /* Wszystkie animacje wyłączone */
}
```

---

## 📱 Responsywność

### Breakpointy
- **Desktop:** ≥ 769px - Stały sidebar
- **Mobile:** ≤ 768px - Hamburger menu

### Testowane urządzenia
- ✅ Desktop (1920×1080 do 3840×2160)
- ✅ Laptop (1366×768, 1440×900)
- ✅ Tablet (768×1024, iPad)
- ✅ Mobile (320×568 do 428×926, iPhone/Android)

---

## 🎯 Lista wszystkich komend (18 total)

### Sekcja 1: Inicjalizacja (5)
1. `mkdir work`
2. `cd work`
3. `mkdir p6.10`
4. `cd p6.10`
5. `git init`

### Sekcja 2: Lokalna edycja (1)
6. `vim t1.txt`

### Sekcja 3: Repozytorium zdalne (3)
7. `git remote add r [URL]`
8. `git fetch r mpabi`
9. `git switch mpabi`

### Sekcja 4: Przeglądanie (5)
10. `ls`
11. `cd z1`
12. `cat z1.txt`
13. `vim z1r.txt`
14. `cd ../`

### Sekcja 5: Publikacja (4)
15. `git checkout -b adamm`
16. `git add z1`
17. `git commit`
18. `git push r adamm`

---

## 🐛 Rozwiązywanie problemów

### Animacje nie działają?
- Sprawdź ustawienia systemowe "Reduce motion"
- Odśwież stronę (F5)
- Sprawdź konsolę przeglądarki (F12)

### Motywy nie zapisują się?
- Sprawdź czy localStorage jest włączone
- Wyłącz tryb prywatny/incognito

### Tooltip nie pojawia się?
- Upewnij się że JavaScript jest włączony
- Sprawdź czy przeglądarka wspiera Clipboard API

### Sidebar nie otwiera się (mobile)?
- Kliknij ikonę hamburgera (☰) w lewym górnym rogu
- Odśwież stronę

---

## 🎓 Dla nauczycieli

### Użycie w klasie
1. **Hosting:** Umieść na GitHub Pages lub szkolnym serwerze
2. **Offline:** Udostępnij jako plik ZIP studentom
3. **Demonstracja:** Wyświetl na projektorze

### Modyfikacja
- Wszystkie komendy w `index.html` (sekcje 1-5)
- Style w `styles.css` (zmienne CSS na górze pliku)
- Logika w `script.js` (czytelny, komentowany kod)

### Dodanie nowych komend
Skopiuj strukturę:
```html
<div class="command-card">
    <div class="command-header">
        <code class="command-text">twoja komenda</code>
        <!-- przyciski -->
    </div>
    <button class="command-toggle">...</button>
    <div class="command-details hidden">...</div>
</div>
```

---

## 📊 Wydajność (Lighthouse)

### Oczekiwane wyniki:
- **Performance:** >95
- **Accessibility:** >95
- **Best Practices:** >95
- **SEO:** >95

### Optymalizacja:
- ✅ Minimal CSS/JS
- ✅ No external libraries
- ✅ Lazy-loaded animations (Intersection Observer)
- ✅ Throttled scroll events (requestAnimationFrame)

---

## 👨‍💻 Autor i kontakt

**Autor:** steez  
**GitHub:** [github.com/steezikpl](https://github.com/steezikpl)

---

## 📄 Licencja

Educational project - Free to use for learning purposes.

**Możesz:**
- Używać w szkole/na zajęciach
- Modyfikować kod
- Udostępniać studentom

**Nie możesz:**
- Sprzedawać jako produkt komercyjny
- Usuwać informacji o autorze

---

## 🎉 Podziękowania

- **Git SCM** - za świetną dokumentację
- **Vim** - za najlepszy edytor terminalowy
- **Społeczność open-source** - za inspirację

---

**Wersja:** 1.0  
**Data:** Październik 2025  
**Status:** ✅ Gotowe do użycia
