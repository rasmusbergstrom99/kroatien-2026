/* ============================================================
   RUTTDATA — Kroatien-seglingen 18–26 juli 2026
   Rätta fritt här: text, koordinater, matställen. Layout ligger i index.html.
   koordinater = [lat, lng].  typ = 'start' | 'hamn' | 'svaj'.
   via = valfri mellanpunkt (t.ex. badstopp) som rutten ritas genom.
   ============================================================ */

const TRIP = {
  titel: "Kroatien 2026 ⛵️",
  undertitel: "Crewets seglingsvecka · Split → öarna → Split",
  datumspann: "18–26 juli",
  hemmahamn: "Split",
  fart: 5, // knop, för ungefärlig seglingstid

  // Bara för skoj — fyll i/ändra crewet
  crew: ["Rasmus", "Wilhelm", "Signe", "+ resten av gänget"],

  stopp: [
    {
      dag: 1,
      veckodag: "Lör",
      datum: "18 juli",
      namn: "Split",
      region: "Fastlandet · start",
      coords: [43.5045, 16.4380],
      typ: "start",
      seglas: false,
      oneliner: "Gänget landar 18:45. Proviantera, käka gott i gamla stan, ladda batterierna. 🍻",
      hamn: {
        text: "Övernattning i Split (marina/boende). Ingen segling idag — vi samlar ihop crewet.",
        vindskydd: null
      },
      sevart: {
        mat: ["Middag i Diocletianus gamla stan", "En första öl på Riva-promenaden"],
        se: ["Diocletianus-palatset", "Marjan-backen om benen vill sträckas"]
      },
      praktiskt: "Storhandla proviant inför veckan (mataffär nära Riva/marinan). Två i crewet, Wilhelm & Signe, ansluter imorgon kl 13:00."
    },
    {
      dag: 2,
      veckodag: "Sön",
      datum: "19 juli",
      namn: "Milna",
      region: "Brač",
      coords: [43.3268, 16.4483],
      typ: "hamn",
      seglas: true,
      oneliner: "Kort mjukstart: kasta loss ~15:00, marinmiddag och Brač-solnedgång. 🌅",
      hamn: {
        text: "ACI Marina Milna (~170 platser) — en av Brač säkraste och mest skyddade hamnar. Vatten, el, dusch och bränsle på plats.",
        vindskydd: "Mycket skyddad hamn"
      },
      sevart: {
        mat: ["Konoba & Pizzeria Slika (vid marinan, kända solnedgångar)", "Gajeta Konoba (dalmatiskt vid vattnet)", "Restaurant Bago (fisk, utsikt en bit från centrum)"],
        se: ["Slottet i Milnas gamla del", "Kvällspromenad längs den skyddade viken"]
      },
      praktiskt: "Wilhelm & Signe landar 13:00, ombord ~14:30/15:00 → loss mot Milna. Tanka/fyll vatten vid marinan inför svaj-dagarna."
    },
    {
      dag: 3,
      veckodag: "Mån",
      datum: "20 juli",
      namn: "Tatinja (Lonely Paradise)",
      region: "Šolta",
      coords: [43.3709, 16.2885],
      typ: "svaj",
      seglas: true,
      oneliner: "Första svaj-natten i en turkos vik — hoppa i direkt från båten. 🏝️",
      hamn: {
        text: "Naturvik på södra Šolta. Bojar via restaurang Lonely Paradise (~€20/dygn). Viken delar sig i tre smala armar (djup 5–10 m) — landförtöjning rekommenderas utöver ankare.",
        vindskydd: "Skyddad från W, NW, N, NE och E. Östra armen bäst mot sydlig vind."
      },
      sevart: {
        mat: ["Restaurang Lonely Paradise (bojar + mat i viken)"],
        se: ["Kristallklart turkost vatten", "Bad och snorkling rakt från båten"]
      },
      praktiskt: "Populär vik — ta boj/plats tidigt. Ingen affär här, så proviant fixas i Milna. Landförtöj i den smala armen."
    },
    {
      dag: 4,
      veckodag: "Tis",
      datum: "21 juli",
      namn: "Vis Town",
      region: "Vis",
      coords: [43.0619, 16.1839],
      typ: "hamn",
      seglas: true,
      oneliner: "Längsta etappen — segel upp tidigt. Belöning: Vis, en av Adriens coolaste öar. 🍷",
      hamn: {
        text: "Vis stad ligger i en djup, skyddad vik. Kajplatser sköts som Marina Vis (~60–100 platser) längs vattnet och i lugnare Kut-kvarteret. Vatten och el på kajen, reception ordnar scooter till imorgon.",
        vindskydd: "Djup, väl skyddad naturhamn"
      },
      sevart: {
        mat: ["Fisk & hummer på vattnet", "Lokalt vin: Vugava (vitt) & Plavac (rött)", "Charmiga Kut-kvarteret för kvällen"],
        se: ["Gamla Vis stad", "Bad i viken efter segling"]
      },
      praktiskt: "Räkna med den längsta etappen (~4–5 h). Boka scooter i receptionen för morgondagen. Ta ut kontanter."
    },
    {
      dag: 5,
      veckodag: "Ons",
      datum: "22 juli",
      namn: "Vis — scooter-dag",
      region: "Vis",
      coords: [43.0619, 16.1839],
      typ: "hamn",
      seglas: false,
      oneliner: "Scooter-dagen! Stiniva-viken, Komiža-öl och militärtunnel-vin. Full gas (typ 40 km/h). 🛵",
      hamn: {
        text: "Kvar i Vis stad — ingen segling. Hela dagen på land med scooter (Rent a Scooter Komiža / VIS RENT). Under 40 km väg totalt, lätt att köra runt hela ön.",
        vindskydd: "Samma hamn som igår"
      },
      sevart: {
        mat: ["Lunch i Komiža (fiskeby vid berget Hum)", "Aerodrom Gostionica (vinhak på gammal militärflygstrip)", "Lipanović — vinkällare i en jugoslavisk militärtunnel"],
        se: ["Stiniva-viken (en av världens finaste stränder)", "Blå grottan på Biševo (om tid finns)", "Gömda stränder runt ön"]
      },
      praktiskt: "Tanka scootern, ta hjälm och kontanter. Stiniva blir snabbt fullt — åk dit tidigt. Kör försiktigt på grusvägarna."
    },
    {
      dag: 6,
      veckodag: "Tor",
      datum: "23 juli",
      namn: "Uvala Gradina",
      region: "Korčula",
      coords: [42.9690, 16.6920],
      via: { namn: "Proizd (lunchbad)", coords: [42.9660, 16.6470] },
      typ: "svaj",
      seglas: true,
      oneliner: "Dubbelstopp: lunchbad vid drömstranden Proizd, sen svaj i lugna Gradina. 🐚",
      hamn: {
        text: "Svaj i Uvala Gradina, norr om Vela Luka-bukten vid Sveti Ivan. Grund, sandig och lugn vik med glasklart vatten. Bojar via restaurang Siloko (dalmatiskt — fisk & lamm, terrass över viken).",
        vindskydd: "Skyddad av holmen Gubeša mot S/SW. Öppen mot västlig vind."
      },
      sevart: {
        mat: ["Restaurang Siloko (bojar + terrassmiddag över viken)"],
        se: ["Proizd: obebodd öholme med vita småstensstränder (Bili Boci, Batalo) — utsedd till Kroatiens strand 2007", "Bad och snorkling i Gradina"]
      },
      praktiskt: "Lång etapp — starta tidigt. Lunchbad + ankring vid Proizds Perna-vik på vägen, sen boj i Gradina till kvällen."
    },
    {
      dag: 7,
      veckodag: "Fre",
      datum: "24 juli",
      namn: "Palmižana",
      region: "Pakleni-öarna",
      coords: [43.1615, 16.3925],
      typ: "svaj",
      seglas: true,
      oneliner: "Sista svaj-kvällen: Meneghello-middag och botanisk trädgård. En sväng till Hvar-stan? 🌴",
      hamn: {
        text: "Vinogradišće-viken på Sv. Klement (Pakleni). Ankra/boj i viken, eller ACI Marina Palmižana (~211 platser) intill. Känd botanisk trädgård planterad av Meneghello-familjen.",
        vindskydd: "Bra skydd i stabilt väder i Vinogradišće-viken"
      },
      sevart: {
        mat: ["Konoba Meneghello (legendarisk, konst + kreativ meny)", "Toto's (samma familj)", "Laganini (stylish, vid vattnet)"],
        se: ["Botaniska trädgården", "Kort taxibåt till Hvar stad för den som vill festa vidare"]
      },
      praktiskt: "Boj/ankra i Vinogradišće. Boka bord på Meneghello i tid — populärt. Taxibåtar går till Hvar stad och tillbaka på kvällen."
    },
    {
      dag: 8,
      veckodag: "Lör",
      datum: "25 juli",
      namn: "Stari Grad",
      region: "Hvar",
      coords: [43.1847, 16.5966],
      typ: "hamn",
      seglas: true,
      oneliner: "Sista natten i en 2400 år gammal hamn — lugn Riva, en sista peka, packning. ⚓",
      hamn: {
        text: "Stari Grad ligger djupt i en lång vik — en av Kroatiens säkraste naturhamnar. Marina Stari Grad tar upp till ~150 båtar, kajdjup 4–5 m.",
        vindskydd: "Bland de säkraste naturhamnarna i landet"
      },
      sevart: {
        mat: ["Konoba Batana (gömd, endast middag)", "Antika (traditionellt, fisk)", "Tiha Lounge & Bar", "Eremitazh"],
        se: ["Rivan med barer och restauranger", "Antika stan (grundad 384 f.Kr.)", "Stari Grad-slätten (UNESCO)"]
      },
      praktiskt: "Sista natten — städa och packa båten på kvällen. Avmönstring/färja imorgon, så gör klart det praktiska ikväll."
    },
    {
      dag: 9,
      veckodag: "Sön",
      datum: "26 juli",
      namn: "Hemresa",
      region: "Stari Grad → Split → Stockholm",
      coords: [43.5045, 16.4380],
      typ: "start",
      seglas: false,
      transfer: true,
      oneliner: "Färja 14:00, flyg 19:30. Sov gott, bra crew — samma tid nästa år? ✈️",
      hamn: {
        text: "Lämna båten i Stari Grad på morgonen. Färja Stari Grad → Split 14:00–15:50, sedan flyg Split → Stockholm 19:30.",
        vindskydd: null
      },
      sevart: {
        mat: ["Sista frukosten på Rivan i Stari Grad", "Ev. lunch i Split innan flyget"],
        se: ["Färjeturen tillbaka över kanalen"]
      },
      praktiskt: "Var i tid till färjan 14:00! Räkna ~2 h överfart + transfer till flygplatsen. Flyg 19:30 — god marginal om färjan går enligt tid."
    }
  ]
};
