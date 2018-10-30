# Verkefni 7

Útfæra leik sem gengur út á að reikna 10 stærðfræðidæmi eins hratt og mögulegt er og birta niðurstöðu.

Þegar `index.html` er opnað kemur upp gluggi sem lætur notanda vita að þegar ýtt er á `OK` byrji leikur sem snúist út á að svara eins mörgum af 10 dæmum rétt á sem stystum tíma með skilaboðunum `Markmiðið er að svara eins mörgum af 10 dæmum rétt eins hratt og mögulegt er.`. Birt eru dæmi og möguleiki til að svara þeim fyrir hvert af þessum tíu dæmum. Eftir leikinn eru birt skilaboð um fjölda réttra dæma, tíma sem það tók að svara í sekúndum og meðalfjölda réttra svara á sekúndu:

```text
Þú svaraðir X af 10 dæmum rétt á Y sekúndum
Meðalrétt svör á sekúndu eru Z
```

Þar sem `Y` og `Z` hafa tvo aukastafi.

Ef notandi ýtir á `Cancel` í miðjum leik eru birt skilaboð `Hætt í leik.` og engar upplýsingar um rétt dæmi eru birt.

Möguleg dæmi eru:

* `+` dæmi þar sem báðar tölur geta verið á bilinu `[1, 100]`
* `-` dæmi þar sem báðar tölur geta verið á bilinu `[1, 100]`
* `*` dæmi þar sem báðar tölur geta verið á bilinu `[1, 10]`
* `/` dæmi þar sem fyrri tala er á bilinu `[2, 10]` og seinni talan er fyrri talan sinnum tala á bilinu `[2, 10]` þ.a. svarið verði alltaf heiltala

Eftir það er notanda boðið að spila annan leik, ef valið er `OK` er annar leikur spilaður, annars er hætt.

Sjá dæmi um leik í `leikur.mp4`.

Gefin eru föll í `scripts.js` og útskýring á því hvað þau eigi að gera. Ekki er krafa um að nota þau en útfæra skal forrit í því skjali.

## Villur

Ef DevTools eru opnuð undir „console“ sjást þær villur sem koma upp. Í gefnu skjali er ein villa sem sést vegna línu 16.

## Mat

* 20% – Snyrtilegt JavaScript án villna
* 30% – Útfærsla á utanumhaldi, hægt að hætta, birtir upplýsingar um spilaðann leik
* 50% – Útfærsla á að spila leik, tekur við tölu og birtir skilaboð

## Sett fyrir

Verkefni sett fyrir í fyrirlestri mánudaginn 22. október 2018.

## Skil

Skila skal undir „Verkefni og hlutaprófa“ á Uglu í seinasta lagi fyrir lok dags þriðjudaginn 30. október 2018.

Skilaboð skulu innihalda:

* Slóð á verkefni á heimasvæði
* Slóð á GitHub repo fyrir verkefni, og dæmatímakennurum skal hafa verið boðið í repo ([sjá leiðbeiningar](https://help.github.com/articles/inviting-collaborators-to-a-personal-repository/)). Notendanöfn þeirra eru `arnar44`, `mimiqkz`, `gorri4`, `hinriksnaer`, `gunkol`, `freyrdanielsson`, `osk`

## Einkunn

Sett verða fyrir tíu minni verkefni þar sem átta bestu gilda 3,5% hvert, samtals 28% af lokaeinkunn.

Sett verða fyrir tvö hópverkefni þar sem hvort um sig gildir 11%, samtals 22% af lokaeinkunn.

---

> Útgáfa 0.1
