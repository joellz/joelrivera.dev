<script lang="ts">
  import { ArrowUp } from 'lucide-svelte'

  function handleClick() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
</script>

<button
  class="opacity-50 hover:opacity-75 hover:scale-110 focus:outline-dotted focus:outline-current focus:outline-offset-4 rounded-sm transition-all"
  on:click={handleClick}
  aria-label="Click to scroll to the top of the page"
>
  <ArrowUp size={20} aria-hidden />
</button>
