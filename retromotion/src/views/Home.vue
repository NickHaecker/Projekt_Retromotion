<template>
  <div class="inhalt">
    <section class="zwischenelement">
     <input id="checkbox" type="checkbox">
      <section class="boxinhalt">
        <div class="überschrift">
          <h1>So funktioniert Retromotion</h1>
        </div>
        <v-container class="inhaltinhaltinhalt">
          <router-link to="" class="inhaltrouter">
            <article class="inhaltartikel">
              <v-icon class="artikelicon"  style="color: red; font-size: 50px">mdi-store</v-icon>
              <h3>1.Teile-Shop</h3>
              <p>Durchsuche unseren Online-Ersatzteile Shop.</p>
          </article>
          </router-link>
          <v-icon style="color: #7e8a9a; font-size: 60px" class="pfeilrechts">mdi-chevron-right</v-icon>
          <router-link to="" class="inhaltrouter">
            <article class="inhaltartikel">
              <v-icon class="artikelicon" style="color: red; font-size: 50px">mdi-magnify</v-icon>
              <h3>2.Teile-Scout</h3>
              <p>Nicht fündig geworden? Wir übernehmen für dich!</p>
          </article>
          </router-link>
          <v-icon style="color: #7e8a9a;font-size: 60px" class="pfeilrechts">mdi-chevron-right</v-icon>
          <router-link to="" class="inhaltrouter">
          <article class="inhaltartikel">
              <v-icon class="artikelicon"  style="color: red;font-size: 50px">mdi-factory</v-icon>
              <h3>3.Nachfertigung</h3>
              <p>Lasse dein Teil in Höchstqualität nachfertigen.</p>
          </article>
          </router-link>
        </v-container>
      </section>
      <v-container class="labelbox">
      <label for="checkbox" class="textbutton">Wie funktioniert Retromotion?<v-icon style="color: white;" class="labelicon">mdi-chevron-down</v-icon></label>
      </v-container>
    </section>

    <section class="erstesbild">
      <v-img src="../assets/schaltknauf_1920.jpg" height="400">
        <v-container class="infos">
          <h1 style="font-weight: lighter">Werde Teile-Dealer unseres Partnernetzwerkes</h1>
          <p>Jetzt Partner werden und Teile verkaufen</p>
          <router-link to="" style="text-decoration: none"><v-btn style="background: red; color: white">Partner werden</v-btn></router-link>
        </v-container>
      </v-img>
    </section>

    <section class="zweiterblock">
      <article class="menü">
        <router-link to=""><div class="bild">
          <v-img src="../assets/kreis.png" height="200" width="200" class="kreisbild">
            <img src="../assets/Suchanfrage.svg" height="150" width="150" class="suchanfrage"/></v-img>
        </div></router-link>
        <div class="bildunterschrift">
          <h1>1.</h1>
          <p>Regestriere dich und sage uns<br>welche Art von Teilen du anbietest</p>
        </div>
      </article>

      <article class="menü">
        <router-link to=""><div class="bild">
          <v-img src="../assets/kreis.png" height="200" width="200" class="kreisbild">
            <img src="../assets/Suchergebnis.svg" height="150" width="150" class="suchergebnis"/></v-img>
        </div></router-link>
        <div class="bildunterschrift">
          <h1>2.</h1>
          <p>Erhalte Kundenanfragen zu Teilen<br>die du anbietest</p>
        </div>
      </article>

      <article class="menü">
        <router-link to=""><div class="bild">
          <v-img src="../assets/kreis.png" height="200" width="200" class="kreisbild">
            <img src="../assets/Chat.svg" height="150" width="150" class="chat"/></v-img>
        </div></router-link>
        <div class="bildunterschrift">
          <h1>3.</h1>
          <p>Tritt mit dem Kunden in Kontakt<br>um dein Teil zu verkaufen</p>
        </div>
      </article>
    </section>

    <section class="dritterblock">
      <article class="parteins">
        <v-container class="text">
          <h1 style="font-weight: lighter">Verkaufe auf Deutschlands neuem Ersatzteile Marktplatz</h1>
          <p>Du hast ein großes Portfolio an Young- und Oldtimerersatzteilen? Dann bist du hier genau richtig. Retromotion schickt dir Kundenanfragen bequem und einfach in dein E-Mail Postfach.<br><br>
          Du musst nichts weiter machen als uns die Modelle und Baugruppen, für welche du Ersatzteile hast, mitzuteilen. Klicke einfach auf <em>Partner werden</em>.</p>
          <router-link to="" style="text-decoration: none"><v-btn style="background: red; color: white">Partner werden</v-btn></router-link>
        </v-container>

        <v-container class="rahmen">
          <p class="zitat">Beschder Service auffe Weld!<br>
          Mir hän se eschd ä Hauffe Kunde<br>
          eingeheimst.</p>
          <div class="kommentar">
            <img src="../assets/kreis.png" height="50" width="50" class="kommentarbild"/>
            <div class="kommentarname">
              <h3>Kevin Schmidt</h3><br>
              <p class="beschreibung">Inhaber der Oldtimer-Schmiede und Nutzer<br>des Retromotion Teile-Scouts</p>
            </div>
          </div>
        </v-container>
      </article>
    </section>

    <section class="vierterblock">
      <article class="frageninfo">

        <div class="aufforderung">
          <h1 style="font-weight: lighter">Bei Fragen sind wir für dich da!</h1>
        </div>

        <v-container class="frage">
          <div class="bildstephan">
            <img src="../assets/Stephan_portrait.jpg" height="148" width="148"/>
          </div>

          <div class="beschreibungtelefon">
            <h3>Stephan Wagner</h3>
            <p>Oldtimerexperte und Schrauber</p>
            <div class="telenummer">
            <v-icon style="color: red">mdi-phone</v-icon><v-btn text style="color: red">+49 711 205 260 70</v-btn>
            </div>
              <p>Mo.-Fr. 9-18 Uhr</p>
            <div class="email">
            <v-icon style="color: red">mdi-email</v-icon><v-btn text style="color: red">team@retromotion.com</v-btn>
            </div>
          </div>
        </v-container>
      </article>
    </section>
  </div>
</template>

<script>
export default {
  name: "Home",
    data: () => ({

    })
};
</script>
<style scoped>
  template{font-family: Roboto, Helvetica Neue, Helvetica, Arial, sans-serif;}
  .boxinhalt {display: none;height:0;-webkit-animation-name: example;-webkit-animation-duration: 2s;animation-name: example;animation-duration: 2s;}
  @-webkit-keyframes example { from {height: 0;} to {height: 250px} }
  #checkbox {display:none;}
  .überschrift{text-align: center; color: white; font-size: 30px; font-weight: lighter}
  .überschrift h1  {font-weight: lighter}
  .textbutton{background-color: #1c313c;}
  .labelbox{text-align: center;}
  .pfeilrechts{margin-top: 2%;}
  label{height: 100px;color: white;}
  label:hover{color: red;}
  .labelbox:checked ~ .labelbox ~ label{color: red}
  #checkbox:checked ~ .boxinhalt {display: block;height: 250px;}
  .inhaltinhaltinhalt{display: flex;text-align: center;justify-content: center;}
  .inhaltartikel{margin: 2%;color: white;}
  .inhaltartikel h3{font-size: 25px;}
  .inhaltartikel p{width: auto; margin-top: 6%}
  .inhaltartikel:hover{color: red}
  .artikelicon{color: red;}
  .inhaltrouter{text-decoration: none;margin-top: 1%;}
  .zwischenelement{background-color: #1c313c;margin-top: -2.5%}
  .infos{width: 30%;background: white;opacity: 0.7;margin-left: 18%;margin-top: 5%;}
  .infos h1{font-size: 40px;}
  .erstesbild {}
  .zweiterblock{background-color: #7e8a9a;display: flex;justify-content: center;}
  .menü{margin: 2%;}
  .suchanfrage{margin-left: 17%;margin-top: 8%;}
  .suchergebnis{margin-left: 12%;margin-top: 8%;}
  .chat{margin-left: 22%;margin-top: 7%;}
  .bildunterschrift{display: flex;}
  .bildunterschrift p{margin-top: 1%;}
  .bildunterschrift h1{color: red;}
  .text{width: 40%;margin-left: 15%;}
  .text h1{font-size: 40px;}
  .parteins{display: flex;}
  .rahmen{border: solid #7e8a9a;width: auto;height: 30%;margin-top: 2%;margin-right: 15%;}
  .zitat{text-align: center;}
  .kommentar{display: flex;}
  .beschreibung{margin-top: -8%;}
  .kommentarbild{margin-top: 6%;}
  .kommentarname h3{margin-top: 2%;}
  .vierterblock{background-color: #7e8a9a;}
  .frage{display: flex;justify-content: center;}
  .aufforderung{text-align: center;font-size: 40px;}
  .beschreibungtelefon{background-color: white;height: 200%;}
  .telenummer{margin-top: -6%;}
  .email{margin-top: -6%;}
</style>
