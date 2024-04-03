<script>
  import '../app.postcss'
  import FluidNav from '$lib/components/fluid-nav.svelte'
</script>

<div class="p-10 lg:p-14">
  <slot />
</div>

<FluidNav />
