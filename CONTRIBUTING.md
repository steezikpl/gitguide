# 🤝 Wkład w projekt GIT GUIDE

Dziękujemy za zainteresowanie wniesieniem wkładu do projektu! Ten dokument zawiera wytyczne, które pomogą Ci w procesie.

---

## 📋 Spis treści

- [Code of Conduct](#code-of-conduct)
- [Jak mogę pomóc?](#jak-mogę-pomóc)
- [Zgłaszanie błędów](#zgłaszanie-błędów)
- [Proponowanie nowych funkcji](#proponowanie-nowych-funkcji)
- [Proces Pull Request](#proces-pull-request)
- [Style guide](#style-guide)
- [Commit messages](#commit-messages)

---

## 📜 Code of Conduct

Ten projekt przestrzega zasad szacunku i profesjonalizmu. Oczekujemy, że wszyscy kontrybutorzy będą:

- ✅ Szanować innych uczestników
- ✅ Używać inkluzywnego języka
- ✅ Przyjmować konstruktywną krytykę
- ✅ Skupiać się na tym, co najlepsze dla społeczności

---

## 🎯 Jak mogę pomóc?

### 🐛 Zgłaszanie błędów

Znalazłeś błąd? Pomóż nam go naprawić!

1. Sprawdź czy błąd nie został już zgłoszony w [Issues](https://github.com/[your-username]/git-guide/issues)
2. Jeśli nie, utwórz nowy Issue z szablonem:

```markdown
**Opis błędu**
Krótki opis problemu.

**Kroki do reprodukcji**
1. Przejdź do...
2. Kliknij na...
3. Przewiń do...
4. Zobacz błąd

**Oczekiwane zachowanie**
Co powinno się stać.

**Aktualne zachowanie**
Co się faktycznie dzieje.

**Screenshots**
Jeśli to możliwe, dodaj screenshoty.

**Środowisko**
- OS: [np. Windows 10, macOS 12, Ubuntu 20.04]
- Przeglądarka: [np. Chrome 96, Firefox 94]
- Wersja: [np. 1.0.0]
```

### 💡 Proponowanie nowych funkcji

Masz pomysł na ulepszenie? Świetnie!

1. Sprawdź czy funkcja nie została już zaproponowana
2. Otwórz Issue z szablonem:

```markdown
**Opis funkcji**
Jasny opis funkcji, którą chcesz dodać.

**Problem do rozwiązania**
Jaki problem rozwiązuje ta funkcja?

**Proponowane rozwiązanie**
Jak powinno to działać?

**Alternatywy**
Czy rozważałeś inne rozwiązania?

**Dodatkowy kontekst**
Screenshoty, mockupy, przykłady z innych projektów.
```

### 🌍 Tłumaczenia

Chcesz pomóc w tłumaczeniu?

- **EN** (English) - Mile widziane!
- **DE** (Deutsch) - Potrzebne!
- **ES** (Español) - W planach

---

## 🔄 Proces Pull Request

### 1. Fork & Clone

```bash
# Fork repo na GitHubie, potem:
git clone https://github.com/YOUR_USERNAME/git-guide.git
cd git-guide
```

### 2. Utwórz branch

```bash
# Nazwa brancha powinna opisywać zmianę
git checkout -b feature/add-english-translation
git checkout -b fix/copy-button-animation
git checkout -b docs/update-readme
```

### 3. Wprowadź zmiany

- Edytuj pliki
- Testuj dokładnie w różnych przeglądarkach
- Sprawdź responsywność (mobile, tablet, desktop)
- Upewnij się, że animacje działają

### 4. Commit

```bash
git add .
git commit -m "feat: add English translation for navigation"
```

### 5. Push

```bash
git push origin feature/add-english-translation
```

### 6. Utwórz Pull Request

- Przejdź do oryginalnego repo
- Kliknij "New Pull Request"
- Wybierz swój branch
- Wypełnij opis PR:

```markdown
## Opis zmian
Co zostało zmienione i dlaczego?

## Typ zmiany
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Checklist
- [ ] Kod działa lokalnie
- [ ] Przetestowałem w różnych przeglądarkach
- [ ] Sprawdziłem responsywność
- [ ] Zaktualizowałem dokumentację
- [ ] Dodałem wpis do CHANGELOG.md
```

---

## 📝 Style Guide

### HTML

```html
<!-- Używaj semantic HTML5 -->
<section class="command-section">
    <article class="command-card">
        <header class="command-header">
            <!-- Zawartość -->
        </header>
    </article>
</section>

<!-- ARIA labels dla dostępności -->
<button aria-label="Kopiuj komendę" title="Kopiuj">

<!-- Zawsze dodawaj alt do obrazków -->
<img src="icon.svg" alt="Ikona Git">
```

### CSS

```css
/* 1. Używaj CSS Variables dla kolorów */
:root {
    --accent-primary: #10b981;
    --accent-rgb: 16, 185, 129;
}

/* 2. Mobile-first media queries */
.element {
    /* Domyślne style dla mobile */
}

@media (min-width: 768px) {
    /* Style dla tablet+ */
}

/* 3. BEM naming convention (opcjonalnie) */
.command-card { }
.command-card__header { }
.command-card__header--active { }

/* 4. Komentarze dla sekcji */
/* ============================================
   NAVIGATION
   ============================================ */

/* 5. Alfabetycznie properties (opcjonalnie) */
.element {
    background: white;
    border: 1px solid;
    color: black;
    display: flex;
    padding: 1rem;
}
```

### JavaScript

```javascript
// 1. ES6+ syntax
const copyToClipboard = (text, button) => {
    // Kod
};

// 2. Destructuring
const { theme, color } = localStorage.getItem('preferences');

// 3. Template literals
const message = `Skopiowano: ${command}`;

// 4. Arrow functions dla callbacks
elements.forEach(el => el.classList.add('active'));

// 5. Komentarze JSDoc
/**
 * Kopiuje tekst do schowka
 * @param {string} text - Tekst do skopiowania
 * @param {HTMLElement} button - Element przycisku
 */
function copyToClipboard(text, button) {
    // Implementacja
}

// 6. Const/let zamiast var
const CONSTANT = 'value';
let variable = 'mutable';

// 7. Sprawdzanie błędów
try {
    // Kod
} catch (error) {
    console.error('Błąd:', error);
}
```

---

## 📦 Commit Messages

Używamy **Conventional Commits** format:

```
<type>(<scope>): <subject>

[optional body]

[optional footer]
```

### Types:

- `feat:` - Nowa funkcja
- `fix:` - Poprawka błędu
- `docs:` - Zmiany w dokumentacji
- `style:` - Formatowanie, brakujące średniki (nie CSS!)
- `refactor:` - Refaktoryzacja kodu
- `perf:` - Optymalizacja wydajności
- `test:` - Dodanie testów
- `chore:` - Aktualizacja narzędzi, konfiguracji

### Przykłady:

```bash
# Dobry commit
git commit -m "feat(copy): add green checkmark animation"
git commit -m "fix(theme): resolve icon toggle issue"
git commit -m "docs: update README with new features"

# Zły commit
git commit -m "fixed stuff"
git commit -m "update"
git commit -m "changes"
```

### Scope (opcjonalny):

- `copy` - funkcje kopiowania
- `theme` - system motywów
- `nav` - nawigacja
- `modal` - modal Vim
- `animation` - animacje CSS
- `responsive` - responsywność

---

## ✅ Checklist przed PR

- [ ] Kod działa bez błędów
- [ ] Przetestowane w Chrome, Firefox, Safari
- [ ] Sprawdzona responsywność (mobile, tablet, desktop)
- [ ] Animacje działają płynnie
- [ ] Brak console.log/debugger w production code
- [ ] Kod jest sformatowany (wcięcia, spacing)
- [ ] Zaktualizowana dokumentacja (jeśli potrzebne)
- [ ] Dodany wpis do CHANGELOG.md
- [ ] Commit messages są opisowe

---

## 🧪 Testowanie

### Manual testing

```bash
# 1. Otwórz index.html w przeglądarce
# 2. Przetestuj wszystkie funkcje:
- [ ] Przełączanie motywów jasny/ciemny
- [ ] Wybór 10 kolorów
- [ ] Kopiowanie komend (animacja ptaszka)
- [ ] Rozwijanie szczegółów komend
- [ ] Modal Vim (otwieranie/zamykanie)
- [ ] Scroll to top button
- [ ] Nawigacja sidebar
- [ ] Hamburger menu (mobile)
- [ ] Responsywność (resize window)
```

### Browser testing

- **Desktop**: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **Mobile**: Chrome Android, Safari iOS
- **Tablet**: iPad, Android tablets

### Tools (opcjonalne)

- [BrowserStack](https://www.browserstack.com/) - Cross-browser testing
- [Lighthouse](https://developers.google.com/web/tools/lighthouse) - Performance audit
- [WAVE](https://wave.webaim.org/) - Accessibility testing

---

## 📞 Pytania?

Jeśli masz pytania dotyczące contribution:

1. Sprawdź [README.md](README.md)
2. Przeczytaj [INSTRUKCJA.md](INSTRUKCJA.md)
3. Otwórz [Issue](https://github.com/[your-username]/git-guide/issues) z tagiem `question`
4. Kontakt: GitHub [@steezikpl](https://github.com/steezikpl)

---

## 🎉 Podziękowania

Dziękujemy wszystkim, którzy przyczynili się do rozwoju projektu!

Lista kontrybutorów: [Contributors](https://github.com/[your-username]/git-guide/graphs/contributors)

---

<div align="center">

**Dziękujemy za Twój wkład! 🚀**

Made with ❤️ by the community

</div>
