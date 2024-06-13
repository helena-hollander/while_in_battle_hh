<script setup>
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { onMounted } from 'vue';
gsap.registerPlugin(ScrollTrigger)

onMounted(()=>{
let tl = gsap.timeline({
scrollTrigger:{
  trigger: '#dancerstitle',
  start: '-50% center',
  end: '100% center',
  scrub: 1,
  markers: true
}

});
 
tl.from("#dancerstitle", {
  ease: "power.out",
  x: 2000,
})
// .from("#abouttext", {
//   x: 1800
//     }, "<+25%");

   
 })

</script>




<template>
<div class="left-[600px]">
 <h2 class="font-display text-white text-9xl blur-sm translate-y-[100px]" id="dancerstitle">dancers</h2>  
 <p class="font-brøditalic text-white text-3xl translate-x-[-300px] translate-y-[100px]">Afra Hosseini Kaladjahi<br>Ama Kyei<br>Anastasija Olescuka<br>Andreas Sanchez<br>Anna Fitoussi<br>Camille Prieux<br>Chiara Gilioli<br>Eleanor Campbell<br>Freddy Houndekindo<br>Gloria Kapako<br>Ida Holmlund<br>Katie Jacobson<br>Lilian Steiner<br>Mohamed Y. Shika<br>Noam Segal<br>Omar Velasquez Rojas<br>Rebecca Livaniou<br>Robin Johansson<br>Shai Faran</p>
</div>

</template>