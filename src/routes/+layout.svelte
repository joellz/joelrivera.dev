<script>
  import '../app.postcss'
  import FluidNav from '$lib/components/fluid-nav.svelte'
</script>

<div class="p-10 lg:p-14">
  <div class="max-w-md mx-auto">
    <slot />
  </div>
</div>

<FluidNav />
