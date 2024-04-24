<script lang="ts">
  import { page } from '$app/stores'
  import { cn } from '$lib/utils'
  import { flip } from 'svelte/animate'
  import { expoOut } from 'svelte/easing'

  import ScrollTopButton from '$lib/components/scroll-top.svelte'

  interface Route {
    title: string
    path: string
  }

  const routeConfig: Record<string, Route> = {
    home: {
      title: 'Home',
      path: '/'
    },
    blog: {
      title: 'Blog',
      path: '/blog'
    },
    work: {
      title: 'Work',
      path: '/work'
    }
  }
</script>

<div
  class="w-full flex itens-center justify-center lg:justify-end fixed z-10 bottom-8 transition-all"
>
  <nav
    id="nav"
    class="flex items-center justify-between rounded-xl border border-white/5 backdrop-blur-lg bg-white/5 p-4 pl-5 transition-all lg:mr-7"
  >
    <ul class="w-full flex items-center">
      {#each Object.keys(routeConfig) as key, i (i)}
        {@const route = routeConfig[key]}

        <div animate:flip={{ duration: 350, easing: expoOut }}>
          <li
            class={cn('mr-5 transition-opacity origin-center', {
              hidden: $page.url.pathname === route.path
            })}
          >
            <a
              class="focus:outline-dotted focus:outline-white/50 rounded-sm focus:outline-offset-[10px]"
              href={route.path}>{route.title}</a
            >
          </li>
        </div>
      {/each}
    </ul>

    <ScrollTopButton />
  </nav>
</div>
