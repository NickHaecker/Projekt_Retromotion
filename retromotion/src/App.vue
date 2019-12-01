<template>
  <v-app>
    <v-app-bar height="70" app class="appbar">
      <v-toolbar-items>
        <router-link to=""><img src="./assets/Retromotion_logo.png" class="logo" height="90" width="150"/></router-link>
      </v-toolbar-items>

      <router-link class="buttonlink" to="" style="text-decoration: none; margin-left: 30%; color: #1c313c"><v-btn text class="button">ERSATZTEILE</v-btn></router-link>
      <router-link class="buttonlink" to="" style="text-decoration: none; color: #1c313c"> <v-btn text class="button">REIFEN</v-btn></router-link>
      <router-link class="buttonlink" to="" style="text-decoration: none; color: #1c313c"><v-btn text class="button">ZUBEHÖR</v-btn></router-link>

      <div class="dropdown">
      <v-btn class="dropbtn" text>COMMUNITY<v-icon style="text-decoration: none">mdi-chevron-down</v-icon></v-btn>
        <v-list class="dropdown_inhalt">
          <router-link to="/" style="text-decoration: none; color: black"><p>Lorem</p></router-link>
          <router-link to="/" style="text-decoration: none; color: black"><p>Lorem</p></router-link>
          <router-link to="/" style="text-decoration: none; color: black"><p>Lorem</p></router-link>
          <router-link to="/" style="text-decoration: none; color: black"><p>Lorem</p></router-link>
          <router-link to="/" style="text-decoration: none; color: black"><p>Lorem</p></router-link>
          <router-link to="/" style="text-decoration: none; color: black"><p>Lorem</p></router-link>
        </v-list>
      </div>

      <router-link to="" class="routerlink" style="text-decoration: none"><v-icon style="text-decoration: none">mdi-cart</v-icon></router-link>

      <v-row justify="center">
        <v-dialog v-model="dialog" persistent max-width="900px">

          <template v-slot:activator="{on}">
            <v-btn style="background: red; color: white; margin-right: 60%" v-on="on">Meine Garage</v-btn>
          </template>

            <div class="anmeldekarte">

              <section class="anmeldetitel">
                <h1 class="anmelden">Anmelden</h1>
                <v-btn text @click="dialog = false" class="zurückbutton"><v-icon>mdi-close</v-icon></v-btn>
              </section>

              <section class="anmeldepart">
                <v-container>
                <article>
                        <v-text-field name="email" label="Mail" id="email" v-model="email" type="email" required class="eingabefeld"></v-text-field>
                        <v-text-field name="password" label="Password" id="password" v-model="password" required class="eingabefeld"></v-text-field>
                        <v-btn type="submit" class="anmeldbutton" style="background: red; color: white; width: 900px; font-weight: lighter">LOGIN</v-btn>
                </article>
                </v-container>

                <v-container>
                <article class="link">
                  <v-icon style="color: red">mdi-chevron-right</v-icon><router-link to="" class="routerpw"><p>Passwort vergessen?</p></router-link>
                </article>
                </v-container>
              </section>
              <section class="bindestrich">
                <article class="neubei">
                 <span>Neu bei Retromotion?</span>
                </article>
              </section>

              <section class="neuanmeldteil">
                <v-container>
                  <article>
                    <v-btn style="color: white; background: #7e8a9a; font-weight: lighter; width: 900px; margin-top: 3%">ACCOUNT ERSTELLEN</v-btn>
                  </article>
                </v-container>
              </section>

            </div>
        </v-dialog>
      </v-row>

    </v-app-bar>

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
                    <v-list-item-title class="listitem">{{item.title}}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </article>

            <article class="art">
              <h2>Kundenservice</h2>
              <v-list dense class="liste" color="#1c313c">
                <v-list-item v-for="item in K" :key="item.titel" :to="item.to" link color="#7e8a9a">
                  <v-list-item-content>
                    <v-list-item-title class="listitem">{{item.title}}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </article>

            <article class="art" id="hilfesupport">
              <h2>Hilfe & Support</h2>
              <v-list dense class="liste" color="#1c313c">
                <v-list-item v-for="item in HuS" :key="item.titel" :to="item.to" link color=" #7e8a9a">
                  <v-list-item-content>
                    <v-list-item-title class="listitem">{{item.title}}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </article>

            <article class="art" id="topprodukte">
              <h2>Top-Produkte</h2>
              <v-list dense class="liste" color="#1c313c">
                <v-list-item v-for="item in TP" :key="item.titel" :to="item.to" link>
                  <v-list-item-content>
                    <v-list-item-title class="listitem">{{item.title}}</v-list-item-title>
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


// import Home from "./views/Home";

export default {

  props:{
    source: String,
  },
  data: () => ({
    dialog: false,
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
  @media only screen and(max-device-width: 420px){
    .logo{
      height: 30px;
      width: 90px;
    }
    #hilfesupport{
    }
    .abs{
      margin-left: 0%;
    }
    .art{
      margin-left: 0%;
    }
    .footer-ersterTeil{
      display: grid;
    }
  }
  .appbar{align-content: center}
  template{font-family: Roboto, Helvetica Neue, Helvetica, Arial, sans-serif;}
  .bindestrich{color: #7e8a9a; border-top: #7e8a9a solid 1px; text-align: center}
  .neubei{margin-top: -13px; position: relative}
  .neuanmeldteil{height: 100px;}
  .routerpw{text-decoration: underline red;color: red;margin-top: 2%;}
  .link{display: flex;margin-top: -2%;}
  .anmeldekarte{background: white;}
  .anmeldetitel{display: flex;background-color: #dde6ef;height: 120px;}
  .anmelden{text-align: center;font-size: 40px;font-weight: lighter;margin-left: 42%;margin-top: 4%;}
  .zurückbutton{margin-left: 30%;}
  .anmeldbutton{}
  .button:hover{text-decoration: underline #1c313c; text-underline-position: under}
  .buttonlink{margin-left: 0%;}
  .dropdown{margin-left: 0%;}
  .dropdown_inhalt{display: none;position: absolute;min-width: 7%;z-index: 1;background-color: white;}
  .dropdown_inhalt p{text-decoration: none;display: block;margin: 10%;}
  .dropdown:hover .dropdown_inhalt{display: block;}
  .dropdown:hover .dropbtn {text-decoration: underline #1c313c;}
  .routerlink{margin-left: 4%;}
  .listitem{color: #7e8a9a;}
  .listitem:hover{color: white;}
  .logo{align-content: flex-start; margin-left: 60%;margin-top: 10%;}
  .footer-ersterTeil{display: flex; /*justify-content: space-evenly;*/color: white;align-content: center;margin-top: 1.5%;}
  .art{ /*justify-content: space-evenly;*/ /*width: 40%;*/ /*font-size: 10px;*/font-size: 10px;margin-left: 5%;}
  .liste{ /*background: #1c313c;*/color: #7e8a9a;}
  .bilder{display: flex;margin-left: -2%;}
  .social{margin-top: 5%;display: flex;}
  .socialicons{display: flex;margin-left: -50%;}
  .eicons{margin-left: 30%;}
  .sprache{margin-left: 70%;}
  .trpdn{cursor: pointer;}
  .tropdaun-inhalt{display: none;position: absolute;overflow: fragments;z-index: 1;}
  .trpdn:hover, .trpdn:focus{background-color: black;}
  .tropdaun{position: relative;display: inline-block;}
  .tropdaun-inhalt a{text-decoration: none;display: block;}
  .show{display: block;}
  .bezahlung{border-top: white solid 1px;color: white;align-content: center;margin-top: 1.5%;font-size: 10px; margin-left: 3%}
  .titel{margin-left: 1%;}
  .zahlart{margin-top: 1%;margin-left: 0%;display: flex;}
  .bezahlbilder{margin-left: 1%;background-color: white;}
  .cor{background-color: #14252E;width: 100%;margin-top: 4%;}
  .footer-letzterTeil{align-content: center;color: #7e8a9a;}
  .footer-letzterTeil a:hover{color: white;}
  .abs{ /*justify-content: center;*/margin-left: 10%;margin-top: 2%;}
  .partner{margin-left: 2%;}
  .footer-links{text-decoration: none;align-content: flex-end; margin-left: 10%}
  .footer-links-links{color: #7e8a9a;}
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
