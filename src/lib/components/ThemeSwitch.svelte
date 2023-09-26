<script lang='ts'>
  import { setTheme } from '$lib/theme/set'
  import { applyTheme } from '$lib/theme/apply'
  import { theme } from '$lib/theme/state'

  import MoonIcon from './icons/MoonIcon.svelte'
  import SunIcon from './icons/SunIcon.svelte'

  applyTheme()
</script>

<button class='w-5 h-5 rounded-full flex items-center justify-center cursor-pointer focus:outline-dotted dark:focus:outline-white/50 focus:outline-black p-5' on:click={setTheme}>
  {#if $theme === 'dark'}
    <SunIcon />
    {:else}
    <MoonIcon />
  {/if}
</button>