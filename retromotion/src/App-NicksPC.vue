<template>
  <v-app>
    <v-app-bar max-height="62">
      <v-toolbar-items>
        <router-link to=""><img src="./assets/Retromotion_logo.png" class="logo" height="84" width="143"/></router-link>
      </v-toolbar-items>

      <router-link class="buttonlink" to="" style="text-decoration: none; margin-left: 20%"><v-btn text class="button">ERSATZTEILE</v-btn></router-link>
      <router-link class="buttonlink" to="" style="text-decoration: none"> <v-btn text class="button">REIFEN</v-btn></router-link>
      <router-link class="buttonlink" to="" style="text-decoration: none"><v-btn text class="button">ZUBEHÖR</v-btn></router-link>
      <div class="dropdown">
      <v-btn class="dropbtn" text>COMMUNITY<v-icon style="text-decoration: none">mdi-chevron-down</v-icon></v-btn>
        <div class="dropdown_inhalt">
          <router-link to="/" style="text-decoration: none; color: black"><p>Lorem</p></router-link>
          <router-link to="/" style="text-decoration: none; color: black"><p>Lorem</p></router-link>
          <router-link to="/" style="text-decoration: none; color: black"><p>Lorem</p></router-link>
          <router-link to="/" style="text-decoration: none; color: black"><p>Lorem</p></router-link>
          <router-link to="/" style="text-decoration: none; color: black"><p>Lorem</p></router-link>
          <router-link to="/" style="text-decoration: none; color: black"><p>Lorem</p></router-link>
        </div>
      </div>
      <router-link to="" class="routerlink" style="text-decoration: none"><v-icon style="text-decoration: none">mdi-cart</v-icon></router-link>
      <v-btn style="background: red; color: white; margin-left: 5%">Meine Garage</v-btn>
    </v-app-bar>

      <div class="zwischenelement">
        <div class="menü-inhalt">
        </div>
        <a class="menü-inhalt-auslöser">Wie funktioniert Retromotion?<v-icon style="color: red">mdi-chevron-down</v-icon></a>
      </div>

    <v-content>
      <router-view/>
    </v-content>

    <v-footer color="#1c313c" padless>
      <div class="abs">
          <section class="footer-ersterTeil">
            <article class="art">
              <h2>Über Retromotion</h2>
              <v-list dense class="liste" color="#1c313c">
                <v-list-item v-for="item in ÜR" :key="item.titel" :to="item.to" link color=" #7e8a9a">
                  <v-list-item-content>
                    <v-list-item-title>{{item.title}}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </article>
            <article class="art">
              <h2>Kundenservice</h2>
              <v-list dense class="liste" color="#1c313c">
                <v-list-item v-for="item in K" :key="item.titel" :to="item.to" link color="#7e8a9a">
                  <v-list-item-content>
                    <v-list-item-title>{{item.title}}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </article>
            <article class="art">
              <h2>Hilfe & Support</h2>
              <v-list dense class="liste" color="#1c313c">
                <v-list-item v-for="item in HuS" :key="item.titel" :to="item.to" link color=" #7e8a9a">
                  <v-list-item-content>
                    <v-list-item-title>{{item.title}}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </article>
            <article class="art">
              <h2>Top-Produkte</h2>
              <v-list dense class="liste" color="#1c313c">
                <v-list-item v-for="item in TP" :key="item.titel" :to="item.to" link>
                  <v-list-item-content>
                    <v-list-item-title>{{item.title}}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </article>
            <article class="art">
              <h2>Partner von Retromotion</h2>
              <div class="bilder">
                <img src="./assets/logo-techalliance.png" height="80" style="background-color: white" class="partner">
                <img src="./assets/pci_seal_de.png" width="80" class="partner"/>
              </div>
              <div class="social">
                <div class="socialfield">
                  <h2>Folge uns!</h2>
                  <div class="socialicons">
                    <router-link to="" style="text-decoration: none" class="eicons"><v-icon color="red">mdi-facebook-box</v-icon></router-link>
                    <router-link to="" style="text-decoration: none" class="eicons"><v-icon color="red">mdi-twitter</v-icon></router-link>
                    <router-link to="" style="text-decoration: none" class="eicons"><v-icon color="red">mdi-linkedin</v-icon></router-link>
                  </div>
                </div>
                <div class="sprache">
                  <h2>Sprache</h2>
                  <div class="tropdaun">
                    <v-icon class="trpdn">mdi-chevron-down</v-icon>
                    <div id="myDropdown" class="tropdaun-inhalt">
                      <a ref=""><img src="./assets/germany.png" width="20" height="20"/>DE</a>
                      <a ref=""><img src="./assets/united-kingdom.png" width="20" height="20"/>GB</a>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </section>
          <section class="bezahlung">
            <article class="titel"><h2>Zahlungsarten</h2></article>
            <article class="zahlart">
              <img src="./assets/logo-visa.png" width="50" height="30" class="bezahlbilder"/>
              <img src="./assets/logo-mastercard.png" width="50" height="30" class="bezahlbilder"/>
              <img src="./assets/logo-maestro.png" width="50" height="30" class="bezahlbilder"/>
              <img src="./assets/logo-paypal.png" width="50" height="30" class="bezahlbilder"/>
            </article>
          </section>
      </div>
      <div color="#14252E"  class="cor">
        <v-col cols="12" class="footer-letzterTeil">
          &copy; {{ new Date().getFullYear() }}
          <strong>Retrimotion</strong>
            <router-link to="" class="footer-links" style="margin-left: 42%"><a class="footer-links-links" style=" background: #14252E">Impressum</a></router-link>
            <router-link to="" class="footer-links"><a class="footer-links-links" style=" background: #14252E">Datenschtzbestimmungen</a></router-link>
        </v-col>
      </div>
    </v-footer>
  </v-app>
</template>

<script>


import Home from "./views/Home";

export default {

  props:{
    source: String,
  },

  component: {
    // HelloWorld
    Home,
  },

  data: () => ({
    ÜR:[
      {title: "Über uns", to: ""},
      {title: "Unsere Marken", to: ""},
    ],
    K:[
      {title: "Zahlungsarten", to: ""},
      {title: "Lieferung", to: ""},
      {title: "Retoure", to: ""},
      {title: "Häufige Fragen", to: ""},
      {title: "Entsorgungshinweise", to: ""},
    ],
    HuS:[
      {title: "Datenschutz", to: ""},
      {title: "AGB", to: ""},
      {title: "Nutzungsbedingungen", to: ""},
      {title: "Wiederrufsbelehrung", to: ""},
      {title: "Impressum", to: ""},
    ],
    TP:[
      {title: "HELLA Warnblinkschalter", to: ""},
      {title: "TYREGUARD Reifenschoner",to: ""},
      {title: "MAHLE ORIGINAL LX 947 Luftfilter", to: ""},
    ],
  })
};
</script>

<style scoped>

  .button:hover{
    text-decoration: underline red;
  }
 .buttonlink{
   margin: 1%;
 }
  .dropdown{
    margin: 1%;
  }
  .dropdown_inhalt{
    display: none;
    position: absolute;
    min-width: 7%;
    z-index: 1;
    background-color: white;
  }
  .dropdown_inhalt p{
    text-decoration: none;
    display: block;
    margin: 10%;
  }
  .dropdown:hover .dropdown_inhalt{
    display: block;
  }
  .dropdown:hover .dropbtn{
   text-decoration: underline red;
  }
  .logo{
    margin-left: 50%;
  }
  .zwischenelement{
    background-color: #1c313c;
    height: 5%;
    text-align: center;
    text-decoration: none;
    padding-top: 10px;
  }
  .zwischenelement a{
    color: red;
  }
  .footer-ersterTeil{
    display: flex;
    width: 75%;
    /*justify-content: space-evenly;*/
    color: white;
    margin-left: 10%;
    margin-top: 1.5%;
  }
  .art{
    /*justify-content: space-evenly;*/
    /*width: 40%;*/
    /*font-size: 10px;*/
    font-size: 10px;
    margin-left: 5%;
  }
  .liste{
    /*background: #1c313c;*/
    color: #7e8a9a;

  }
  .bilder{
    display: flex;
    margin-left: -2%;
  }
  .social{
    margin-top: 5%;
    display: flex;
  }
  .socialicons{
    display: flex;
    margin-left: -50%;
  }
  .eicons{
    margin-left: 30%;
  }
  .sprache{
    margin-left: 70%;
  }
  .trpdn{
    cursor: pointer;
  }
  .tropdaun-inhalt{
    display: none;
    position: absolute;
    overflow: fragments;
    z-index: 1;
  }
  .trpdn:hover, .trpdn:focus{
    background-color: black;
  }
  .tropdaun{
    position: relative;
    display: inline-block;
  }
  .tropdaun-inhalt a{
    text-decoration: none;
    display: block;
  }
  .show{
    display: block;
  }
  .bezahlung{
    border-top: white solid 1px;
    width: 120%;
    color: white;
    margin-left: 12%;
    margin-top: 1.5%;
    font-size: 10px;
  }
  .titel{
    margin-left: 1%;
  }
  .zahlart{
    margin-top: 1%;
    margin-left: 0%;
    display: flex;
  }
  .bezahlbilder{
    margin-left: 1%;
    background-color: white;
  }
  .cor{
    background-color: #14252E;
    width: 100%;
    margin-top: 4%;
  }
  .footer-letzterTeil{
    margin-left: 15%;
    color: #7e8a9a;
  }
  .abs{
    /*justify-content: center;*/
    margin-left: 10%;
    margin-top: 2%;
  }
  .partner{
    margin-left: 2%;
  }
  .footer-links{
    text-decoration: none;
    margin-left: 4%;
  }
  .footer-links-links{
    color: #7e8a9a;
  }

</style>

<!--function myFunction() {-->
<!--document.getElementById("myDropdown").classList.toggle("show");-->
<!--},-->
<!--window.onclick = function (event) {-->
<!--if (!event.target.matches('.trpdn')) {-->

<!--var dropdowns = document.getElementsByClassName("tropdaun-inhalt");-->
<!--var i;-->
<!--for (i = 0; i < dropdowns.length; i++) {-->
<!--var openDropdown = dropdowns[i];-->
<!--if (openDropdown.classList.contains('show')) {-->
<!--openDropdown.classList.remove('show');-->
<!--}-->
<!--}-->
<!--}-->
<!--}-->
