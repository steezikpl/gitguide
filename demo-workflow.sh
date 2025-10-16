#!/bin/bash

# ============================================
# 🚀 DEMO WORKFLOW - Git CLI + Vim Guide
# ============================================
# Ten skrypt pokazuje przykładowy workflow
# opisany na stronie. NIE URUCHAMIAJ GO -
# to tylko demonstracja edukacyjna!
# ============================================

echo "📁 SEKCJA 1: INICJALIZACJA PROJEKTU"
echo "===================================="

# Tworzenie struktury katalogów
mkdir work
cd work
mkdir p6.10
cd p6.10

# Inicjalizacja repozytorium Git
git init
echo "✅ Repozytorium Git zainicjalizowane"

echo ""
echo "✏️ SEKCJA 2: LOKALNA EDYCJA"
echo "===================================="

# Utworzenie pliku w Vim (demonstracja)
# vim t1.txt
# W Vimie:
# 1. Naciśnij 'i' aby wejść w tryb insert
# 2. Wpisz treść zadania
# 3. Naciśnij 'Esc'
# 4. Wpisz ':wq' i naciśnij Enter

echo "ℹ️  Otwórz vim t1.txt i edytuj plik"
echo "ℹ️  Pamiętaj: i (insert), Esc, :wq (zapisz i wyjdź)"

echo ""
echo "🌐 SEKCJA 3: REPOZYTORIUM ZDALNE"
echo "===================================="

# Dodanie zdalnego repozytorium
# UWAGA: Ten URL zawiera token edukacyjny (nieaktywny)
git remote add r http://t1:efdcee376e608dae700d1702877edcfa4617678f@zslslubice.pl:4001/z2025/p6.10
echo "✅ Dodano zdalne repozytorium 'r'"

# Pobranie gałęzi z serwera
git fetch r mpabi
echo "✅ Pobrano gałąź 'mpabi'"

# Przełączenie na pobraną gałąź
git switch mpabi
echo "✅ Przełączono na gałąź 'mpabi'"

echo ""
echo "🔍 SEKCJA 4: PRZEGLĄDANIE TREŚCI"
echo "===================================="

# Wyświetl zawartość katalogu
ls
echo "📂 Pliki i katalogi w bieżącej lokalizacji"

# Wejdź do katalogu z zadaniem
cd z1

# Wyświetl treść zadania
cat z1.txt
echo "📄 Treść zadania z pliku z1.txt"

# Edycja rozwiązania
# vim z1r.txt
echo "ℹ️  Otwórz vim z1r.txt i wpisz rozwiązanie"

# Powrót do głównego katalogu projektu
cd ../
echo "⬆️  Powrót do katalogu p6.10"

echo ""
echo "🚀 SEKCJA 5: PUBLIKACJA GAŁĘZI"
echo "===================================="

# Utworzenie nowej gałęzi z własnym rozwiązaniem
git checkout -b adamm
echo "✅ Utworzono i przełączono na gałąź 'adamm'"

# Dodanie zmian do staging area
git add z1
echo "✅ Dodano katalog z1 do staging area"

# Zatwierdzenie zmian (commit)
# git commit
# W Vimie (edytor wiadomości commit):
# 1. Naciśnij 'i'
# 2. Wpisz: "Dodano rozwiązanie zadania z1"
# 3. Esc, :wq

# Szybsza opcja:
git commit -m "Dodano rozwiązanie zadania z1"
echo "✅ Zatwierdzono zmiany (commit)"

# Wysłanie gałęzi do zdalnego repozytorium
git push r adamm
echo "✅ Wysłano gałąź 'adamm' do zdalnego repozytorium"

echo ""
echo "🎉 WORKFLOW ZAKOŃCZONY!"
echo "===================================="
echo "Gratulacje! Właśnie:"
echo "  ✓ Stworzyłeś projekt Git"
echo "  ✓ Pobrałeś zadanie z serwera"
echo "  ✓ Rozwiązałeś zadanie w Vim"
echo "  ✓ Zatwierdziłeś i wysłałeś rozwiązanie"
echo ""
echo "📚 Więcej informacji na stronie:"
echo "   Otwórz index.html w przeglądarce!"
echo "===================================="
