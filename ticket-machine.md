# Biletomat

Celem tego zadania jest zbudowanie biletomatu w pliku `./ticket-machine/index.html`.

## Challenge 1

Pobierz asynchronicznie po HTTP dane z pliku `cities.json` i wyświetl je w formie listy na stronie.

## Challenge 2

Posortuj miasta po dystansie, zaczynając od tych, które są najbliżej biletomatu (atrybut `distance`)

## Challenge 3

Dodaj nad listą pole tekstowe i spraw, żeby po wpisaniu tekstu i wciśnięciu `Enter` lista zawężała się do tych miast, w których nazwie zawiera się wpisany tekst.

## Challenge 4

Spraw, żeby wyszukiwanie następowało natychmiast po wpisaniu znaku w polu tekstowym, bez czekania na
wciśnięcie `Enter`

## Challenge 5

Wyświetl koszyk biletów na prawo od listy miast.
Przy nazwie każdego miasta wyświetl przycisk "dodaj do koszyka".
Po kliknięciu przycisku na liście biletów w koszyku powinien pojawić się nowy bilet.
Niech bilet będzie zawierał informację o mieście oraz cenę.
Niech cena wyliczana jest wzorem `cena = dystans * 4.2`

## Challenge 6

Niech bilety, które występują na liście wielokrotnie zostaną zgrupowane w jednym wierszu z informację, ile biletów danego typu dodaliśmy do kosza

## Challenge 7

Niech na górze listy wyświetla się podsumowanie ceny wszystkich biletów
Jeżeli cena jest większa nić `100`, to naliczamy rabat w wysokości `20%`.

## Challenge 8

Nasz biletomat będzie czasami działał na ekranie dotykowym, więc nie możemy polegać na klawiaturze.
Projektant biletomatu wpadł na nietuzinkowy pomysł zbudowania klawiatury,
która będzie się zmieniać w zależności od tego ile mamy dostępnych opcji na liście miast.

Liczba klawiszy na klawiaturze ma zawsze odpowiadać liczbie unikalnych znaków, które znajdują się w nazwach miast do tej pory nieodfiltrowanych z listy, np.

Dla miast:

- Gdańsk
- Sopot
- Gdynia

Klawisze to: `adgiknopstyń`

Wielkość liter nie gra roli, spacje nie są uwzględniane.
Po wpisaniu `g`, liczba miast i klawiszy powinny zostać zawężone.

Miasta

- Gdańsk
- Gdynia

Klawisze:

- `adgiknń`

Jeżeli nazwa miasta składa się z 2 słów, np. `New York` to wyszukanie słowa `ewy` również powinno znaleźć to miasto (N`ew Y`ork)
