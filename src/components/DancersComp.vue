<script setup>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { onMounted } from "vue";
gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
 let tl = gsap.timeline({
  scrollTrigger: {
    trigger:"#content",
    start:"top center",
    end: "+=1100",
    scrub: true, 
    markers: true,
  },

});
 
  tl.from("#dancerstitle", {
    x: 2000,
    duration: 2,

  })
  tl.to("#dancerstitle", {
    y: 1100,
    duration: 5,
    delay: 2,
  })

  
  
});
</script>

<template>
  <div id="content" class="translate-x-[700px]">
      <h2 class="absolute font-display text-white text-9xl blur-sm translate-y-[100px]" id="dancerstitle">dancers</h2>
    <p id="dancerstext" class="font-brøditalic text-white text-3xl translate-y-[500px] translate-x-[-200px]">
      Afra Hosseini Kaladjahi<br />Ama Kyei<br />Anastasija Olescuka<br />Andreas
      Sanchez<br />Anna Fitoussi<br />Camille Prieux<br />Chiara Gilioli<br />Eleanor
      Campbell<br />Freddy Houndekindo<br />Gloria Kapako<br />Ida Holmlund<br />Katie
      Jacobson<br />Lilian Steiner<br />Mohamed Y. Shika<br />Noam Segal<br />Omar
      Velasquez Rojas<br />Rebecca Livaniou<br />Robin Johansson<br />Shai Faran
    </p>
  </div>
</template>
