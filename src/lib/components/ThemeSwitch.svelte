<script lang='ts'>
  import { setTheme } from '$lib/theme/set'
  import { theme } from '$lib/theme/state'

  import MoonIcon from './icons/MoonIcon.svelte'
  import SunIcon from './icons/SunIcon.svelte'
</script>

<button
  class='w-5 h-5 flex items-center justify-center cursor-pointer focus:outline-dotted dark:focus:outline-white/50 focus:outline-black'
  on:click={setTheme}
  aria-label='Toggle dark mode'>
  {#if $theme === 'dark'}
    <SunIcon />
    {:else}
    <MoonIcon />
  {/if}
</button>