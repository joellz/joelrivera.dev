<script lang='ts'>
  import { setTheme } from "$lib/theme/set";
  import { applyTheme } from "$lib/theme/apply";
  import { theme } from "$lib/theme/state";

  applyTheme()
</script>

<button class='rounded-full w-5' on:click={setTheme}>
  {#if $theme === 'dark'}
    <img
      width='27'
      height='27'
      src='/light.svg'
      alt='A white icon of a sun.'
    />
    {:else}
    <img
      width='27'
      height='27'
      src='/dark.svg'
      alt='A black icon of a crecent moon.'
    />
  {/if}
</button>