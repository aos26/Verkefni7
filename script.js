/**
 * Verkefni 7 – Reikniæfingarforrit
 *
 * Forrit sem æfir hraða í að reikna einföld dæmi
 */

// fasti sem segir til um hve marga leiki eigi að spila
const GAMES_TO_PLAY = 10;
var fjoldiRett = 0;
var fjoldiRangt = 0;
var fjoldiHeild = 0;
var fyrriTala = 0;
var seinniTala = 0;
var svar = 0;
var startTime = 0;
var endTime = 0;

/**
 * Birtir upplýsingar um leik og eftir að notandi samþykkir spilar fyrsta leik
 * með kalli í play().
 * Eftir leik er notanda boðið að spila annan leik, ef ekki hættir forrit.
 */
function start() {
  alert('Velkomin/n í leikinn. Markmiðið er að svara eins mörgum af 10 dæmum rétt eins hratt og mögulegt er. Ýttu á OK til að byrja.');

  do {
    startTime = performance.now();
    play();
  } while (confirm('Spila annan?'));
}

/**
 * Spilar einn leik. Heldur utan um hvenær leikur byrjaði, hvenær endar og
 * fjölda réttra svara. Eftir leik eru birtar upplýsingar um niðurstöðu:
 *   Þú svaraðir X af 10 dæmum rétt á Y sekúndum
 *   Meðalrétt svör á sekúndu eru Z
 * Þar sem Y og Z hafa tvo aukastafi.
 *
 * Ef notandi ýtir á "Cancel" í leik eru skilaboðin "Hætt í leik." birt og engar
 * upplsýingar um niðurstöður.
 *
 */
function play() {
  let afram = true;

  do {
    if (!ask()) {
      alert('Hætt í leik.');
      endurstilla();
      break;
    }
    if (fjoldiHeild == GAMES_TO_PLAY) {
      endTime = performance.now();
      const heildarTimi = (endTime - startTime) / 1000;
      const medalSvar = fjoldiRett / heildarTimi;
      alert(`Þú svaraðir ${fjoldiRett} af 10 dæmum rétt á ${heildarTimi.toFixed(2)} sekúndum. 
Meðalrétt svör á sekúndu eru ${medalSvar.toFixed(2)}`);

      endurstilla();
      afram = false;
    }
  }
  while (afram == true);
}

/**
 * Spyr einnar spurningar og skilar upplýsingum um svar (mögulega með því að
 * nota true, false og null ef notandi hættir). Birtir notanda propmpt til að
 * svara í og túlkar svarið yfir í tölu.
 *
 * Mögulegar spurningar eru:
 * - `+` dæmi þar sem báðar tölur geta verið á bilinu `[1, 100]`
 * - `-` dæmi þar sem báðar tölur geta verið á bilinu `[1, 100]`
 * - `*` dæmi þar sem báðar tölur geta verið á bilinu `[1, 10]`
 * - `/` dæmi þar sem fyrri tala er á bilinu `[2, 10]` og seinni talan er fyrri
 *   talan sinnum tala á bilinu `[2, 10]` þ.a. svarið verði alltaf heiltala
 *
 * Sniðugt væri að færa það að búa til spurningu í nýtt fall sem ask() kallar í.
 */
function spurning() {
  const tegund = randomNumber(1, 4);

  if (tegund == 1) {
    fyrriTala = randomNumber(1, 100);
    seinniTala = randomNumber(1, 100);
    spurningaTegund = 1;
    return fyrriTala + ' + ' + seinniTala;
  } else if (tegund == 2) {
    fyrriTala = randomNumber(1, 100);
    seinniTala = randomNumber(1, 100);
    spurningaTegund = 2;
    return fyrriTala + ' - ' + seinniTala;
  } else if (tegund == 3) {
    fyrriTala = randomNumber(1, 10);
    seinniTala = randomNumber(1, 10);
    spurningaTegund = 3;
    return fyrriTala + ' * ' + seinniTala;
  } else {
    fyrriTala = randomNumber(2, 10);
    seinniTala = fyrriTala * randomNumber(2, 10);
    spurningaTegund = 4;
    return seinniTala + ' / ' + fyrriTala;
  }
}

function ask() {
  const input = prompt('Hvað er ' + spurning());
  if (input === null) {
    return false;
  }

  if (spurningaTegund == 1) {
    svar = fyrriTala + seinniTala;
  } else if (spurningaTegund == 2) {
    svar = fyrriTala - seinniTala;
  } else if (spurningaTegund == 3) {
    svar = fyrriTala * seinniTala;
  } else {
    svar = seinniTala / fyrriTala;
  }

  const guess = parseGuess(input);
  if (guess === svar) {
    fjoldiRett++;
  } else {
    fjoldiRangt++;
  }
  fjoldiHeild = fjoldiRett + fjoldiRangt;

  return true;
}

function parseGuess(input) {
  const parsed = parseInt(input, 10);

  if (isNaN(parsed)) {
    return null;
  }

  return parsed;
}

function endurstilla() {
  fjoldiRett = 0;
  fjoldiRangt = 0;
  fjoldiHeild = 0;
  fyrriTala = 0;
  seinniTala = 0;
  svar = 0;
  startTime = 0;
  endtime = 0;
}

/**
 * Skilar tölu af handahófi á bilinu [min, max]
 */
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Byrjar leik
start();