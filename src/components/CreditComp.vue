<script setup>
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { onMounted } from 'vue';
gsap.registerPlugin(ScrollTrigger)

onMounted(()=>{
let tl = gsap.timeline({
scrollTrigger:{
  trigger: "#credittitle",
  start:"top 90%",
  end: "top, 30%", 
  scrub: .5,
  markers: true,
}

});
 
tl.from("#credittitle", {
  ease: "power.out",
  x: 2000,
  
})
.from("#credittext", {
  x: 1800,
}, "<+25%")

});
</script>

<template>
  <div id="creditcontainer">
  <h2 id="credittitle" class="font-display text-pink-300 text-8xl blur-sm -rotate-90">creative team</h2>
  <p id="credittext" class="font-brøditalic text-pink-300 text-2xl translate-x-[500px] -translate-y-[100px]">Choreography: Hooman Sharifi<br>
    Text: BAM – Burcu Sahin, Athena Farrokhzad, Merima Dizdarević<br>
    Music and Sound Design: Neda Sanai<br>
    Light: David Prokopic and Hooman Sharifi<br>
    Costume: Marita Tjärnström and Hooman Sharifi<br>
    Rehearsal Director: Agnieszka Dlugoszewska<br>
    Project Advisor: Niki Tsappos<br>
    Production: Cullberg</p>
  </div>
</template>