<script setup>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { onMounted } from "vue";
gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
 let tl = gsap.timeline({
  scrollTrigger: {
    trigger:"#content",
    start:"-20% center",
    end: "+=1400",
    scrub: true, 
    markers: true,
  },

});
 
  tl.from("#dancerstitle", {
    x: -2000,
    duration: 5,
    ease: "power1.out",

  })
  tl.to("#dancerstitle", {
    y: 1200,
    duration: 8,
    ease: "power1.out",
    delay: 4,
  })

  
  
});
</script>

<template>
  <div id="content" class="translate-x-[700px] text-pink-300 ">
      <h2 class="absolute font-display text-9xl blur-sm -translate-y-[50px] z-10" id="dancerstitle">dancers</h2>
      <div id="gallery" class="absolute translate-y-[700px]">
        <img src="../assets/images/cullberg1.jpg" class="w-[700px] translate-x-[600px]">
        <img src="../assets/images/cullberg2.jpg" class="w-[400px]">
        <img src="../assets/images/cullberg3.jpg" class="w-[600px] translate-x-[300px] translate-y-[100px]">
        <img src="../assets/images/cullberg4.jpg" class="w-[800px] -translate-x-[700px] translate-y-[100px]">
        <img src="../assets/images/cullberg5.jpg" class="w-[400px] translate-x-[800px] ">
      </div>
    <p id="dancerstext" class="absolute font-brøditalic text-3xl translate-y-[500px] translate-x-[-200px] z-10">
      Afra Hosseini Kaladjahi<br />Ama Kyei<br />Anastasija Olescuka<br />Andreas
      Sanchez<br />Anna Fitoussi<br />Camille Prieux<br />Chiara Gilioli<br />Eleanor
      Campbell<br />Freddy Houndekindo<br />Gloria Kapako<br />Ida Holmlund<br />Katie
      Jacobson<br />Lilian Steiner<br />Mohamed Y. Shika<br />Noam Segal<br />Omar
      Velasquez Rojas<br />Rebecca Livaniou<br />Robin Johansson<br />Shai Faran
    </p>
  </div>

  
</template>
