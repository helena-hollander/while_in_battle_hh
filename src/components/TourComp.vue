<script setup>
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { onMounted } from 'vue';
gsap.registerPlugin(ScrollTrigger)

onMounted(()=>{
let tl = gsap.timeline({
scrollTrigger:{
  trigger: '#tourcontent',
  start: '-50% center',
  end: '190% center',
  scrub: true,
  markers: true,
  
  }

});
 
tl.from("#tourtitle", {
  ease: "power3.out",
  x: -2000,
duration: 4, 
})
tl.to("#tourcontent", {
  y: 700,
 duration: 6,
 delay: 0, 
 
}, ">")
tl.from("#tourdates", {
  ease: "power3.out",
  x: -4400,
  duration:6,
  delay: 2,
 
}, "<-40%")




   
 })



</script>

<template>
<div id="tourcontent" class="-translate-y-[400px]"> 
<h2 id="tourtitle" class="font-bold text-pink-300 text-10xl translate-y-[300px] translate-x-[800px] blur-sm">tour dates</h2>

<div id="tourdates" class="grid w-[220vw] grid-cols-8 gap-x-[80px] m-20 translate-y-[270px] text-pink-300">

<div id="30.10">
  <p class="font-display text-7xl">30.10.24</p>
  <p class="font-display text-4xl translate-y-[-78px] translate-x-[390px]"> / 19:30</p>
  <p class="font-brøditalic text-4xl translate-y-[-64px]">Stora Teatern, Gothenburg</p>
</div>
<div id="23.8">
  <p class="font-display text-7xl">23.8.24</p>
  <p class="font-display text-4xl translate-y-[-78px] translate-x-[336px]"> / 19:30</p>
  <p class="font-brøditalic text-4xl translate-y-[-64px]">Vitabergsparken, Stockholm</p>
</div>
<div id="29.6">
  <p class="font-display text-7xl">29.6.24</p>
  <p class="font-display text-4xl translate-y-[-78px] translate-x-[336px]"> / 19:30</p>
  <p class="font-brøditalic text-4xl translate-y-[-64px]">Blågårds Plads, Copenhagen</p>
</div>
<div id="28.6">
  <p class="font-display text-7xl">28.6.24</p>
  <p class="font-display text-4xl translate-y-[-78px] translate-x-[336px]"> / 19:30</p>
  <p class="font-brøditalic text-4xl translate-y-[-64px]">Blågårds Plads, Copenhagen</p>
</div>
<div id="27.6">
  <p class="font-display text-7xl">27.6.24</p>
  <p class="font-display text-4xl translate-y-[-78px] translate-x-[336px]"> / 19:30</p>
  <p class="font-brøditalic text-4xl translate-y-[-64px]">Blågårds Plads, Copenhagen</p>
</div>
<div id="26.6">
  <p class="font-display text-7xl">26.6.24</p>
  <p class="font-display text-4xl translate-y-[-78px] translate-x-[336px]"> / 19:30</p>
  <p class="font-brøditalic text-4xl translate-y-[-64px]">Blågårds Plads, Copenhagen</p>
</div>
<div id="25.6">
  <p class="font-display text-7xl">25.6.24</p>
  <p class="font-display text-4xl translate-y-[-78px] translate-x-[336px]"> / 19:30</p>
  <p class="font-brøditalic text-4xl translate-y-[-64px]">Blågårds Plads, Copenhagen</p>
</div>
</div>
</div>

</template>