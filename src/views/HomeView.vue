<script setup>
import CanvasComp from '@/components/CanvasComp.vue'; //Bagerste canvas comp
import FrontCanvasComp from '@/components/FrontCanvasComp.vue'; //Forreste canvas comp
import FrontCanvasComp2 from '@/components/FrontCanvasComp2.vue';
import FrontCanvasComp3 from '@/components/FrontCanvasComp3.vue'; 


import HeroComp from '@/components/HeroComp.vue'; //Grafikken på Hero page
import AboutComp from '@/components/AboutComp.vue';
import DancersComp from '@/components/DancersComp.vue';
import TourComp from '@/components/TourComp.vue';
import TicketsComp from '@/components/TicketsComp.vue';
import MusicComp from '@/components/MusicComp.vue';
import CreditComp from '@/components/CreditComp.vue';
</script>

<template>

<body >
  <CanvasComp></CanvasComp>

<section id="hero">
  <HeroComp class="absolute z-10 h-screen"></HeroComp>
</section>

<section id="aboutsection" class="absolute translate-y-[100vh]">
  <AboutComp class=" h-screen w-screen"></AboutComp>
</section>

<section id="dancerssection" class="absolute translate-y-[200vh]">
  <DancersComp class=" h-screen w-screen"></DancersComp>
</section>

<section id="musicsection" class="absolute translate-y-[450vh]">
  <p class="font-brød text-pink-300 text-3xl translate-x-[614px] translate-y-[30px]">musical teaser</p>
  <MusicComp class="translate-x-[700px] w-screen"></MusicComp>
</section>

<section id="creditsection" class="absolute translate-y-[520vh]">
  <CreditComp></CreditComp>
</section>

<section id="toursection" class="absolute translate-y-[600vh]">
  <TourComp class=" h-screen w-screen"></TourComp>
</section>

<section id="ticketssection" class="absolute translate-y-[670vh]">
  <TicketsComp class="h-[55vh] w-screen"></TicketsComp>
</section>
<div>
<FrontCanvasComp2></FrontCanvasComp2>
<FrontCanvasComp3></FrontCanvasComp3>
<FrontCanvasComp></FrontCanvasComp>
</div>
</body>
</template>

<style>
#defaultCanvas0 {
filter: blur(30px) contrast(1.9);
-webkit-filter: blur(30px) contrast(1.9) saturate(0.35) brightness(1.25); /*alle filters skal være i samme kode, så de ikke annullerer hinanden. I denne web udgave, virker de*/
pointer-events: none;
 /*mix-blend-mode: hue; *//*Typo forsvinder, hvis ikke blend er hue... ved ikke hvorfor*/
 position: fixed; /*så den ikke flytter sig.*/
 z-index: -20;
 opacity: 1;

}
#defaultCanvas1 {
 opacity: 0.1; /*Opacity 25%*/
 filter: /*invert(100%)*/ brightness(2)  blur(10px);

 pointer-events: none; /*Så jeg kan klikke på ting bagved*/
 position: fixed;
 z-index: -10;
}

#defaultCanvas2 {
  opacity: 0.15; /*Opacity 25%*/
  filter: /*invert(100%)*/ brightness(5) blur(10px) saturate(1.2);
  pointer-events: none; /*Så jeg kan klikke på ting bagved*/
  position: fixed;
 
 }

 #defaultCanvas3 {
   opacity: 0.08; /*Opacity 25%*/
   filter: brightness(2) saturate(2);
   pointer-events: none; /*Så jeg kan klikke på ting bagved*/
   position: fixed;
   z-index: -10;
  }
/*defaultCanvas0 og 1 er i style, fordi p5 laver sit eget id, og kan derfor ikke styles med tailwind*/

</style>