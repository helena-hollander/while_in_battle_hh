<script setup>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { onMounted } from "vue";
gsap.registerPlugin(ScrollTrigger);

onMounted(() => {


let tl = gsap.timeline({
  scrollTrigger: {
    trigger:"#dancerstext",
    start:"top 95%",
    end: "top 40%",
    scrub: 1, 
    markers: true,
   
  },

});
 
tl.to("#dancerstitle", {
  x: 1000,
  ease: "power3.out",
});


  
  
});
</script>

<template>
  <div id="content" class=" text-pink-300 ">
      <h2 class="absolute font-display text-9xl blur-sm  z-10  -translate-x-[620px] translate-y-[40px]" id="dancerstitle">dancers</h2>
      <div id="gallery" class="absolute translate-y-[700px] translate-x-[700px]">
        <img src="../assets/images/cullberg1.jpg" class="w-[700px] translate-x-[600px]">
        <img src="../assets/images/cullberg2.jpg" class="w-[400px]">
        <img src="../assets/images/cullberg3.jpg" class="w-[600px] translate-x-[300px] translate-y-[100px]">
        <img src="../assets/images/cullberg4.jpg" class="w-[800px] -translate-x-[700px] translate-y-[100px]">
        <img src="../assets/images/cullberg5.jpg" class="w-[400px] translate-x-[800px] ">
      </div>
    <p id="dancerstext" class="absolute font-brøditalic text-3xl z-10 translate-x-[550px] translate-y-[400px]">
      Afra Hosseini Kaladjahi<br />Ama Kyei<br />Anastasija Olescuka<br />Andreas
      Sanchez<br />Anna Fitoussi<br />Camille Prieux<br />Chiara Gilioli<br />Eleanor
      Campbell<br />Freddy Houndekindo<br />Gloria Kapako<br />Ida Holmlund<br />Katie
      Jacobson<br />Lilian Steiner<br />Mohamed Y. Shika<br />Noam Segal<br />Omar
      Velasquez Rojas<br />Rebecca Livaniou<br />Robin Johansson<br />Shai Faran
    </p>
  </div>

  
</template>
