<script>
  import '../app.postcss'
  import Header from '$lib/components/Header.svelte'
</script>

<div class='container mx-auto lg:border-x lg:border-x-gray-100'>
  <Header />
  <slot />
</div>
