# Kroatien 2026 ⛵️ — crew-karta

Interaktiv karta som visar crewets seglingsvecka i Kroatien, dag för dag. Byggd för att **informera gänget om planen** — inte för navigation.

## Öppna den
Öppna `index.html` i en webbläsare (funkar på mobil med nätuppkoppling). Kartan hämtar bakgrundskartan online, resten ligger i filen.

- Karta överst med hela rutten + numrerade stopp (⚓️ hamn · 🏝️ svaj · 🏁 start/hemresa · 🏊 badstopp).
- Tryck på ett dygn i listan → kartan flyger dit, båten seglar dit, och kortet fäller ut hamn/ankring, sevärt & mat och praktiskt.
- Knappen **🧭 Sjökort** lägger på OpenSeaMap-lagret om man vill.

## Rutt (18–26 juli)
Split → Milna → Šolta (Tatinja) → Vis (+ scooter-dag) → Proizd/Uvala Gradina → Palmižana → Stari Grad → Split (färja) → hem.

## Rätta innehållet
All ruttdata (stopp, koordinater, matställen, texter) ligger i **`route.js`** — ändra fritt där, layouten i `index.html` behöver inte röras. `koordinater` är `[lat, lng]`, `typ` är `start` / `hamn` / `svaj`, och `via` är en valfri mellanpunkt (t.ex. badstopp).

Distanser/seglingstider räknas ut automatiskt (fågelvägen, ~5 knop) och är **ungefärliga**.
