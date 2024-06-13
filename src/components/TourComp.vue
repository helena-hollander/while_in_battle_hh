<script setup>
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { onMounted } from 'vue';
gsap.registerPlugin(ScrollTrigger)

onMounted(()=>{
let tl = gsap.timeline({
scrollTrigger:{
  trigger: '#tourtitle',
  start: '-170% center',
  end: 'top center',
  scrub: true,
  markers: true
}

});
 
tl.from("#tourtitle", {
  ease: "power.out",
  x: -2000,
})

// tl.to("#toursectionanidown", {
//   y: 100,

// })


   
 })



</script>

<template>
  <div id="toursectionanidown">
<h2 id="tourtitle" class="font-bold text-white text-10xl translate-y-[300px] translate-x-[1000px] blur-sm">tour dates</h2>
<div id="dates" class="grid w-[220vw] grid-cols-8 gap-x-[80px] m-20 translate-y-[270px]">

<div id="30.10" class="text-white">
  <p class="font-display text-7xl">30.10.24</p>
  <p class="font-display text-4xl translate-y-[-78px] translate-x-[390px]"> / 19:30</p>
  <p class="font-brøditalic text-4xl translate-y-[-64px]">Stora Teatern, Gothenburg</p>
</div>
<div id="23.8" class="text-white">
  <p class="font-display text-7xl">23.8.24</p>
  <p class="font-display text-4xl translate-y-[-78px] translate-x-[336px]"> / 19:30</p>
  <p class="font-brøditalic text-4xl translate-y-[-64px]">Vitabergsparken, Stockholm</p>
</div>
<div id="29.6" class="text-white">
  <p class="font-display text-7xl">29.6.24</p>
  <p class="font-display text-4xl translate-y-[-78px] translate-x-[336px]"> / 19:30</p>
  <p class="font-brøditalic text-4xl translate-y-[-64px]">Blågårds Plads, Copenhagen</p>
</div>
<div id="28.6" class="text-white">
  <p class="font-display text-7xl">28.6.24</p>
  <p class="font-display text-4xl translate-y-[-78px] translate-x-[336px]"> / 19:30</p>
  <p class="font-brøditalic text-4xl translate-y-[-64px]">Blågårds Plads, Copenhagen</p>
</div>
<div id="27.6" class="text-white">
  <p class="font-display text-7xl">27.6.24</p>
  <p class="font-display text-4xl translate-y-[-78px] translate-x-[336px]"> / 19:30</p>
  <p class="font-brøditalic text-4xl translate-y-[-64px]">Blågårds Plads, Copenhagen</p>
</div>
<div id="26.6" class="text-white">
  <p class="font-display text-7xl">26.6.24</p>
  <p class="font-display text-4xl translate-y-[-78px] translate-x-[336px]"> / 19:30</p>
  <p class="font-brøditalic text-4xl translate-y-[-64px]">Blågårds Plads, Copenhagen</p>
</div>
<div id="25.6" class="text-white">
  <p class="font-display text-7xl">25.6.24</p>
  <p class="font-display text-4xl translate-y-[-78px] translate-x-[336px]"> / 19:30</p>
  <p class="font-brøditalic text-4xl translate-y-[-64px]">Blågårds Plads, Copenhagen</p>
</div>
</div>

</div>
</template>