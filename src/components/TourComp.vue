<script setup>
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { onMounted } from 'vue';
gsap.registerPlugin(ScrollTrigger)


</script>

<template>
<h2 class="font-bold text-white text-10xl translate-y-[400px] translate-x-[1000px] blur-sm">tour dates</h2>
<div id="dates" class="grid w-[250vw] grid-cols-8 gap-x-[80px]">
<div id="28.6" class="text-white translate-y-[400px]">
  <p class="font-display text-7xl">28.6.24</p>
  <p class="font-display text-4xl translate-y-[-78px] translate-x-[336px]"> / 19:30</p>
  <p class="font-brøditalic text-4xl translate-y-[-64px]">Blågårds Plads, Copenhagen</p>
</div>
<div id="27.6" class="text-white translate-y-[400px]">
  <p class="font-display text-7xl">27.6.24</p>
  <p class="font-display text-4xl translate-y-[-78px] translate-x-[336px]"> / 19:30</p>
  <p class="font-brøditalic text-4xl translate-y-[-64px]">Blågårds Plads, Copenhagen</p>
</div>
<div id="26.6" class="text-white translate-y-[400px]">
  <p class="font-display text-7xl">26.6.24</p>
  <p class="font-display text-4xl translate-y-[-78px] translate-x-[336px]"> / 19:30</p>
  <p class="font-brøditalic text-4xl translate-y-[-64px]">Blågårds Plads, Copenhagen</p>
</div>
<div id="25.6" class="text-white translate-y-[400px]">
  <p class="font-display text-7xl">25.6.24</p>
  <p class="font-display text-4xl translate-y-[-78px] translate-x-[336px]"> / 19:30</p>
  <p class="font-brøditalic text-4xl translate-y-[-64px]">Blågårds Plads, Copenhagen</p>
</div>
</div>
</template>