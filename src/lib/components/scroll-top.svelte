<script lang="ts">
  import { MoveUp } from 'lucide-svelte'

  function handleClick() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
</script>

<button
  class="w-14 h-14 flex items-center justify-center p-3 border border-current opacity-50 hover:opacity-75 hover:scale-110 active:scale-95 focus:outline-dotted focus:outline-current focus:outline-offset-4 rounded-full right-10 bottom-10 transition-all"
  on:click={handleClick}
  aria-label="Click to scroll to the top of the page"
>
  <MoveUp />
</button>
