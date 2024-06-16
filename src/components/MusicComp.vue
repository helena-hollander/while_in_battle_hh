<template>
  <div class="music-player font-brøditalic text-pink-300 text-9xl p-4">
    <audio ref="audio" :src="audioSrc" @timeupdate="updateTime"></audio>
    <div class="controls flex items-center space-x-4 w-full">
      <button @click="togglePlay" class="text-pink-300 font-bold blur-xs hover:blur-none">
        {{ isPlaying ? 'PAUSE' : 'PLAY' }}
      </button>
      <span>{{ currentTimeFormatted }} / {{ durationFormatted }}</span>
    </div>
    <input
      type="range"
      :value="currentTime"
      :max="duration"
      @input="seek"
      class="play-bar w-full mt-4"
    />
  </div>
</template>

<script>
import audioFile from '@/assets/music/installation.mp3';

export default {
  data() {
    return {
      audioSrc: audioFile,
      isPlaying: false,
      currentTime: 0,
      duration: 0
    };
  },
  computed: {
    currentTimeFormatted() {
      return this.formatTime(this.currentTime);
    },
    durationFormatted() {
      return this.formatTime(this.duration);
    }
  },
  methods: {
    togglePlay() {
      const audio = this.$refs.audio;
      if (this.isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
      this.isPlaying = !this.isPlaying;
    },
    updateTime() {
      const audio = this.$refs.audio;
      this.currentTime = audio.currentTime;
      this.duration = audio.duration;
    },
    seek(event) {
      const audio = this.$refs.audio;
      audio.currentTime = event.target.value;
      this.currentTime = event.target.value;
    },
    formatTime(seconds) {
      const minutes = Math.floor(seconds / 60);
      const secs = Math.floor(seconds % 60);
      return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
    }
  }
};
</script>

<style>
.music-player {
  @apply flex flex-col items-center w-full;
}
.controls {
  @apply flex items-center w-full justify-between;
}
button {
  @apply mr-2;
}
span {
  @apply ml-2 mr-2 whitespace-nowrap;
}

/* Custom styles for the play bar */
input[type='range'].play-bar {
  -webkit-appearance: none;
  width: 100%; /* Ensures the range input takes up all available space */
  height: 10px; /* Increased height for better visibility */
  background: #ddd;
  outline: none;
  opacity: 0.7;
  transition: opacity .15s ease-in-out;
}

input[type='range'].play-bar:hover {
  opacity: 1;
}

input[type='range'].play-bar::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 20px;
  height: 20px;
  background: #f19bcf; /* Pink thumb */
  cursor: pointer;
  border-radius: 50%;
  margin-top: -5px; /* Adjust this value to center the thumb */
}

input[type='range'].play-bar::-moz-range-thumb {
  width: 20px;
  height: 20px;
  background: #f19bcf; /* Pink thumb */
  cursor: pointer;
  border-radius: 50%;
  margin-top: -5px; /* Adjust this value to center the thumb */
}

/* Customizing the fill of the range input */
input[type='range'].play-bar::-webkit-slider-runnable-track {
  width: 100%;
  height: 10px;
  cursor: pointer;
  background: #f19bcf; /* Pink track */
}

input[type='range'].play-bar::-moz-range-track {
  width: 100%;
  height: 10px;
  cursor: pointer;
  background: #f19bcf; /* Pink track */
}
</style>
