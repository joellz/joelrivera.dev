<script>
  import '../app.postcss'
  import Header from '$lib/components/Header.svelte'
</script>

<div class='container mx-auto 2xl:border-x-2 2xl:border-x-gray-100 border-dotted dark:border-x-white/25'>
  <Header />
  <slot />
</div>
