# Minecraft Server List Frontend

Frontend dla popularnych ostatnio witryn oferujących listę serwerów gry Minecraft wraz z ich statusami. Projekt stworzony głównie dla zabawy oraz z chęci oderwania się od środowiska, w którym aktualnie pracuję. Jest to single-page appplication z wyglądem inspirowanym menu wyboru serwera w grze Minecraft. Moim celem było jak najdokładniejsze odwzorowanie menu z gry. W tym celu edytowana została również czcionka, która krążyła gdzieś po Internecie, tak aby w pełni obsługiwała polskie znaki diakrytyczne. Strona dostosowana jest również do poprawnego wyświetlania na urządzeniach mobilnych.

Wersję live projektu można zobaczyć [tutaj](https://verlikylos.dev/minecraft-server-list-frontend).

## Instalacja
Jeżeli chcesz wgrać ten projekt na swój hosting, to postępuj zgodnie z poniższą instrukcją.

Korzystając z wybranego menadżera pakietów zainstaluj [Gatsby CLI](https://www.gatsbyjs.org/docs/quick-start/#install-the-gatsby-cli)
```
yarn global add gatsby-cli
```

Następnie sklonuj to repozytorium do wybranego katalogu, a następnie do niego przejdź
```
git clone https://github.com/Verlikylos/minecraft-server-list-frontend.git mc-server-list
cd mc-server-list
```

Następnie zbuduj pliki statyczne strony poleceniem
```
gatsby build
```

Teraz wygenerowane pliki znajdujące się w katalogu `public` możesz wgrać na serwer korzystając z dowolnego klienta FTP/SFTP.

## Biblioteki użyte w projekcie

* [GatsbyJS](https://www.gatsbyjs.org/)
* [styled-components](https://styled-components.com/)
* [react-helmet](https://github.com/nfl/react-helmet)
* [gatsby-plugin-alias-imports](https://github.com/rowanfreeman/gatsby-plugin-alias-imports)
* Grafiki pochodzące z gry Minecraft

## Dodatkowe informacje
W katalogu `src/fonts` znajduje się projekt dla aplikacji pozwalającej na edycję czcionek ([Glyphr Studio](https://www.glyphrstudio.com/online/)). W razie potrzeby wystarczy go zaimportować oraz dokonać należytych zmian.

## Autorzy

* **Kamil Twardowski** - [Verlikylos](https://github.com/Verlikylos)

## Licencja

Projekt udostępniany jest na warunkach licencji MIT. Sprawdź [LICENSE.md](LICENSE.md), aby dowiedzieć się więcej.
