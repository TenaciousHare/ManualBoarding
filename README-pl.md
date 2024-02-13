[![Static Badge](https://img.shields.io/badge/go_to-english_version-001F7E?labelColor=D00C27)](https://github.com/TenaciousHare/ManualBoarding/blob/main/README.md)

# Instrukcja obsługi aplikacji do generowania Seat Map

## 1. Ogólny zarys

Ćwiczenie odprawy manualnej jest integralną częścią procedur handlingowych w każdym porcie lotniczym. Celem takich ćwiczeń jest przygotowanie do sytuacji awaryjnych, takich jak awaria systemów czy brak zasilania, które mogą prowadzić do opóźnień lotów i generować duże straty dla linii lotniczych. Standardowo podczas ćwiczeń ogranicza się lub całkowicie wyłącza systemy handlingowe, a wszystkie materiały wypisuje się ręcznie. Dotyczy to zarówno kart pokładowych, jak i Seat Map, na których na podstawie karty pokładowej wpisuje się numer sekwencyjny pasażera (odpowiednio do kolejności odprawy) oraz oznaczenia:

- I - dla dzieci do lat 2 (infant - siedzi na kolanach osoby dorosłej),
- C - dla dzieci od lat 2 do 11 (posiada oddzielne miejsce i numer sekwencyjny).

Po zakończeniu boardingu z dwóch bramek zbiera się wypełnione Seat Mapy i przenosi dane na jedną z nich (bez przepisywania numerów sekwencyjnych - stawia się jedynie X w celu oznaczenia zajętego miejsca). Następnie następuje newralgiczny moment, czyli zliczanie sekcji samolotu. Jest to niezwykle stresujące dla pracowników ze względu na ograniczony czas do zamknięcia samolotu i konieczność precyzyjnego przekazania danych kapitanowi w celu jego prawidłowego wyważenia. Presja czasu często powoduje błędy, a właśnie ich eliminacja jest celem niniejszej aplikacji.

## 2. Cel aplikacji

Aplikacja ma na celu przećwiczenie podliczania sekcji samolotu w warunkach mniej stresujących, co pozwoli na zautomatyzowanie tego procesu podczas rzeczywistych odpraw manualnych, niezależnie od ich przyczyny.

## 3. Działanie aplikacji

1. **Wybieranie samolotu:**

   - Domyślnie wyświetlana jest pusta Seat Mapa **Boeinga 737-800**.
   - Wybór innego samolotu odbywa się za pomocą pola wyboru poniżej Seat Mapy.

2. **Generowanie Seat Mapy:**
   - Kliknięcie "Wygeneruj Seat Mapę" powoduje losowe wypełnienie jej numerami sekwencyjnymi, X-ami i oznaczeniami typów pasażerów. W prawym górnym rogu arkusza generowany jest numer zestawu (hex).
3. **Drukowanie Seat Mapy:**
   - Wydrukowanie Seat Mapy dla pracownika odbywa się poprzez kliknięcie "Wydrukuj Seat Mapę".
4. **Podliczanie sekcji samolotu:**

   - Kliknięcie "Pokaż totale" powoduje automatyczne podliczenie sekcji.
     Podliczony arkusz można wydrukować dla siebie (numer arkusza pozostaje ten sam).

   Użytkownik może wygenerować kolejną Seat Mapę lub wyzerować wszystkie pola, klikając "Wyczyść Seat Mapę".
   Puste Seat Mapy można drukować w celu przeprowadzenia treningowych odpraw manualnych na lotnisku.

## 4. Użyte technologie

[![Technologies used](https://skillicons.dev/icons?i=react,css,vite,vitest)](https://skillicons.dev)

**Dodatkowe informacje:**
Aplikacja jest dostępna online pod adresem: https://manual-boarding.netlify.app/
Instrukcja obsługi aplikacji jest dostępna w języku [polskim](https://github.com/TenaciousHare/ManualBoarding/blob/main/README-pl.md) i [angielskim](https://github.com/TenaciousHare/ManualBoarding/blob/main/README.md).

**Uwaga:**
Niniejsza instrukcja ma charakter informacyjny i może ulec zmianie.
