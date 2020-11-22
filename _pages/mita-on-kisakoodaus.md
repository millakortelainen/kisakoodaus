---
layout: default
title: Mitä on kisakoodaus?
---
## Mitä on kisakoodaus?
Kisakoodaus eli kilpaohjelmointi mittaa taitoa suunnitella ja toteuttaa algoritmeja. Kilpailuissa menestyminen vaatii kykyä ratkaista ongelmia sekä koodata nopeasti ja virheettömästi.

Ohjelmointikilpailussa on joukko tehtäviä, jotka täytyy ratkaista tietyn ajan kuluessa. Yleensä jokaisen tehtävän ratkaisu on ohjelma, joka lukee syötteen, ratkaisee tehtävän ja tulostaa vastauksen.

Ratkaisun arvostelu tapahtuu automaattisesti testaamalla sitä joukolla tekstisyötteitä. Testauksessa tutkitaan toimiiko ratkaisu oikein ja riittävän tehokkaasti.


### Esimerkkitehtävä

Annettuna on merkkijono, jossa on n merkkiä väliltä A–Z. Tehtäväsi on tutkia, saako merkkijonosta palindromin järjestämällä merkit sopivasti.

Esimerkiksi jos merkkijono on ABABC, siitä saa palindromin ABCBA. Merkkijonosta ABADC taas ei saa palindromia millään tavalla.

Ohjelmasi tulee tulostaa "YES", jos merkkijonosta saa palindromin, ja muuten "NO".


### Ratkaisun idea

Lasketaan jokaisesta merkistä, montako kertaa se esiintyy merkkijonossa. Jos kaikkia merkkejä on parillinen määrä tai tasan yhtä merkkiä on pariton määrä, merkeistä voi muodostaa palindromin. Jälkimmäisessä tapauksessa pariton merkki on palindromin keskellä.

### Ratkaisu C++-koodina

```c++
#include <iostream>

using namespace std;

string s;
int c[128];

int main() {
    cin >> s;
    for (int i = 0; i < s.size(); i++) {
        c[s[i]]++;
    }
    int z = 0;
    for (int i = 'A'; i <= 'Z'; i++) {
        if (c[i]%2 == 1) z++;
    }
    if (z <= 1) cout << "YES\n";
    else cout << "NO\n";
}
```
## Näin pääset alkuun

1. **Opettele C++**

    Kisakoodaus vaatii sujuvaa ohjelmointitaitoa. Paras valinta ohjelmointikieleksi on C++, joka on tehokas ja jonka ominaisuudet sopivat hyvin kilpaohjelmointiin.

    Kisakoodaus ei vaadi kielen erikoisominaisuuksien tuntemista. Muuttujat, taulukot, ehdot, silmukat ja funktiot riittävät kisakoodauksesa pitkälle.

    C++-ohjelmointia voi opetella muun muassa [tästä](https://tie.koodariksi.fi/).


2. **Lue Kisakoodarin käsikirja eli KKKK**

    Kisakoodarin käsikirja sisältää paljon tietoa kisakoodauksesta. Voit opetella sen avulla tärkeitä tietorakenteita ja algoritmeja. Voit ladata KKKK:n itsellesi [tästä](http://kisakoodaus.fi/kkkk.pdf).


3. **Harjoittele**

    Datatähden valmennuskurssi on hyvä paikka harjoitella kisakoodausta. Kurssilla on 200 tehtävää, jotka vaikeutuvat vähitellen. Kurssi toimii CSES-nimisessä järjestelmässä ja pääset siihen [tästä](https://cses.fi/dt/).

    Valmennuskurssilta löytyy myös linkki Datatähden [Telegram-kanavalle](https://t.me/datatahti). Kisakoodauksella on myös [Discord-kanava](https://discord.gg/Brqv74x). Kanavilla voi pyytää tehtäviin apua, keskustella kisakoodauksesta ja tutustua muihin kisakoodareihin.


4. **Osallistu kisoihin**

    [Codeforces](http://www.codeforces.com/) järjestää viikoittain nettikisoja. Sivuston käyttäjät ovat kahdessa sarjassa: aloittelijat ovat Div2:ssa ja edistyneemmät ovat Div1:ssä.

    Hyviä kisoja kisakoodauksen aloittamiseen ovat myös [USACO](http://www.usaco.org/) ja [COCI](http://hsin.hr/coci/). Näitä kisoja järjestetään syksystä kevääseen noin kuukauden välein.

    Osallistu kisoihin aina, kun pystyt. Mitä useammin osallistut, sitä enemmän opit.