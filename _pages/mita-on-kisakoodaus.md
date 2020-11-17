---
layout: default
title: Mitä on kisakoodaus?
---

Kisakoodaus eli kilpaohjelmointi mittaa taitoa suunnitella ja toteuttaa algoritmeja. Kilpailuissa menestyminen vaatii kykyä ratkaista ongelmia sekä koodata nopeasti ja virheettömästi.

Ohjelmointikilpailussa on joukko tehtäviä, jotka täytyy ratkaista tietyn ajan kuluessa. Yleensä jokaisen tehtävän ratkaisu on ohjelma, joka lukee syötteen, ratkaisee tehtävän ja tulostaa vastauksen.

Ratkaisun arvostelu tapahtuu automaattisesti testaamalla sitä joukolla tekstisyötteitä. Testauksessa tutkitaan toimiiko ratkaisu oikein ja riittävän tehokkaasti.


Esimerkkitehtävä

Annettuna on merkkijono, jossa on n merkkiä väliltä A–Z. Tehtäväsi on tutkia, saako merkkijonosta palindromin järjestämällä merkit sopivasti.

Esimerkiksi jos merkkijono on ABABC, siitä saa palindromin ABCBA. Merkkijonosta ABADC taas ei saa palindromia millään tavalla.

Ohjelmasi tulee tulostaa "YES", jos merkkijonosta saa palindromin, ja muuten "NO".


Ratkaisun idea

Lasketaan jokaisesta merkistä, montako kertaa se esiintyy merkkijonossa. Jos kaikkia merkkejä on parillinen määrä tai tasan yhtä merkkiä on pariton määrä, merkeistä voi muodostaa palindromin. Jälkimmäisessä tapauksessa pariton merkki on palindromin keskellä.

Ratkaisu C++-koodina

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
