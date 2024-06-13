<script setup>
import CanvasComp from '@/components/CanvasComp.vue'; //Bagerste canvas comp
import FrontCanvasComp from '@/components/FrontCanvasComp.vue'; //Forreste canvas comp
import HeroComp from '@/components/HeroComp.vue'; //Grafikken på Hero page
import AboutComp from '@/components/AboutComp.vue';
import DancersComp from '@/components/DancersComp.vue';
</script>

<template>
<CanvasComp></CanvasComp>

<section id="hero">
  <HeroComp class="absolute z-10 h-screen"></HeroComp>
</section>

<section id="aboutsection h-screen w-screen">
  <AboutComp class="absolute translate-y-[100vh] "></AboutComp>
</section>

<section id="dancerssection h-screen w-screen">
  <DancersComp class="absolute translate-y-[200vh] h-screen w-screen"></DancersComp>
</section>

<div>
<FrontCanvasComp></FrontCanvasComp>
</div>
</template>

<style>
#defaultCanvas0 {

filter: blur(30px) hue-rotate(60deg) contrast(1.9);
-webkit-filter: blur(30px) contrast(1.9) saturate(0.25) brightness(1.25); /*alle filters skal være i samme kode, så de ikke annullerer hinanden. I denne web udgave, virker de*/
pointer-events: none;
 mix-blend-mode: hue; /*Typo forsvinder, hvis ikke blend er hue... ved ikke hvorfor*/
 position: fixed; /*så den ikke flytter sig.*/
}
#defaultCanvas1 {
 opacity: 0.1; /*Opacity 25%*/
 filter: /*invert(100%)*/ brightness(2);
 pointer-events: none; /*Så jeg kan klikke på ting bagved*/
 position: fixed;
}

/*defaultCanvas0 og 1 er i style, fordi p5 laver sit eget id, og kan derfor ikke styles med tailwind*/

</style>