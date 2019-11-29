<template>
  <div class="inhalt">
    <section class="erstesbild">
      <v-img src="../assets/schaltknauf_1920.jpg">
        <v-container class="infos">
          <h1>Werde Teile-Dealer unseres Partnernetzwerkes</h1>
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
          <h1>Verkaufe auf Deutschlands neuem Ersatzteile Marktplatz</h1>
          <p>Du hast ein großes Portfolio an Young- und Oldtimerersatzteilen? Dann bist du hier genau richtig. Retromotion schickt dir Kundenanfragen bequem und einfach in dein E-Mail Postfach.<br><br>
          Du musst nichts weiter machen als uns die Modelle und Baugruppen, für welche du Ersatzteile hast, mitzuteilen. Klicke einfach auf <em>Partner werden</em>.</p>
          <router-link to="" style="text-decoration: none"><v-btn style="background: red">Partner werden</v-btn></router-link>
        </v-container>
        <v-container class="rahmen">
          <p>Beschder Service auffe Weld!<br>
          Mir hän se eschd ä Hauffe Kunde<br>
          eingeheimst.</p>
          <div class="kommentar">
            
          </div>
        </v-container>
      </article>
    </section>
  </div>
</template>

<script>

export default {
  name: "Home",
  // components: {
  //   // vorfooter,
  // },
    data: () => ({

    })
};
</script>


<style scoped>
.infos{
  width: 30%;
  background: white;
  opacity: 0.7;
  margin-left: 18%;
  margin-top: 5%;
}
  .infos h1{
    font-size: 40px;
  }
  .zweiterblock{
    background-color: #7e8a9a;
    display: flex;
    justify-content: center;
  }
 .kreisbild{

 }
  .menü{
    margin: 2%;
  }
  .suchanfrage{
    margin-left: 17%;
    margin-top: 8%;
  }
  .suchergebnis{
    margin-left: 12%;
    margin-top: 8%;
  }
  .chat{
    margin-left: 22%;
    margin-top: 7%;
  }
  .bildunterschrift{
    display: flex;
  }
  .bildunterschrift p{
    margin-top: 1%;
  }
  .bildunterschrift h1{
    color: red;
  }
  .text{
    width: 40%;
    margin-left: 10%;
  }
  .text h1{
    font-size: 40px;
  }
  .parteins{
    display: flex;
  }
  .rahmen{
    border: solid #7e8a9a;
    width: auto;
    height: 30%;
    margin-top: 5%;
  }
</style>