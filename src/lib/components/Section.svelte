<script lang='ts'>
  import type { Project, Employer, Post } from '../../types/generated/graphql'
  import LinkIcon from './icons/LinkIcon.svelte'

  export let data:
    | { type: 'Projects', list: Array<Project> }
    | { type: 'Employment', list: Array<Employer> }
    | { type: 'Blog', list: Array<Post> }

  const { type, list } = data

  let activeTab = data.list[0].id

  const handleTabSelect = (id: string) => activeTab = id
</script>

<section class='flex flex-col lg:flex-row lg:items-center lg:justify-between p-7 md:py-28 lg:py-40 md:px-28 lg:px-40 border-b-[#E9E9E9] dark:border-b-white/25 border-b-2 border-dotted'>
  <!--Tabs-->
  <div class='w-full lg:w-1/3 xl:w-1/2 flex flex-col lg:mr-16'>
    <div class='flex items-center justify-between'>
      <header>
        <h1 class='font-extrabold font-mono antialiased'>
          {type}
        </h1>
      </header>
    </div>

    <ul class='mt-7 font-light'>
      {#if type === 'Projects'}
        {#each list as item}
        {@const isActive = item.id === activeTab}
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
          <li
            class='flex relative items-center justify-between mb-3 border-b-[#E9E9E9] dark:border-b-white/25 border-b-2 border-dotted pb-2 cursor-pointer hover:border-b-olive-100 transition-all before:absolute before:w-[2.5px] before:h-3 before:rounded-lg before:-left-2 md:before:-left-3'
            class:text-olive-500={isActive}
            class:border-b-olive-100={isActive}
            class:before:bg-olive-500={isActive}
            on:click={() => handleTabSelect(item.id)}>

            {item.name}

            <a href={item.url} class='text-sm focus:outline-dotted dark:focus:outline-white/50 focus:outline-black' target='_blank' rel='noopener noreferrer'>
              <LinkIcon />
            </a>
          </li>
        {/each}
      {/if}

      {#if type === 'Employment'}
        {#each list as item}
          {@const isActive = item.id === activeTab}
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
          <li
            class='flex relative items-center justify-between mb-3 border-b-[#E9E9E9] dark:border-b-white/25 border-b-2 border-dotted pb-2 cursor-pointer hover:border-b-olive-100 transition-all before:absolute before:w-[2.5px] before:h-3 before:rounded-lg before:-left-2 md:before:-left-3'
            class:text-olive-500={isActive}
            class:border-b-olive-100={isActive}
            class:before:bg-olive-500={isActive}
            on:click={() => handleTabSelect(item.id)}>

            {item.name}
            <LinkIcon />
          </li>
        {/each}
      {/if}

      {#if type === 'Blog'}
        {#each list as item}
        {@const isActive = item.id === activeTab}
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
          <li
            class='flex relative items-center justify-between mb-3 border-b-[#E9E9E9] dark:border-b-white/25 border-b-2 border-dotted pb-2 cursor-pointer hover:border-b-olive-100 transition-all before:absolute before:w-[2.5px] before:h-3 before:rounded-lg before:-left-2 md:before:-left-3'
            class:text-olive-500={isActive}
            class:border-b-olive-100={isActive}
            class:before:bg-olive-500={isActive}
            on:click={() => handleTabSelect(item.id)}>

            {item.title}
            <LinkIcon />
          </li>
        {/each}
      {/if}
    </ul>
  </div>

  <!--Dynamic Data-->

  <div class='w-full lg:w-2/3 xl:w-1/2 xl:ml-10 mt-7'>
    {#if type === 'Projects'}
      { @const content = list.find(({ id }) => id === activeTab) }

      <span class='font-bold font-mono text-sm tracking-tight antialiased'>
        {content?.name}
      </span>

      <p class='font-light my-2 text-sm'>
        {content?.description}
      </p>

      <a href='{content?.repo}' class='text-olive-500 text-sm focus:outline-dotted dark:focus:outline-white/50 focus:outline-black'>
        View code
      </a>
    {/if}

    {#if type === 'Employment'}
      { @const content = list.find(({ id }) => id === activeTab) }

      <span class='font-bold font-mono text-sm tracking-tight antialiased'>
        {content?.name}
      </span>

      <p class='font-light my-2 text-sm'>
        {content?.description}
      </p>

      <small class='text-olive-500'>
        {content?.duration}
      </small>
    {/if}

    {#if type === 'Blog'}
      { @const content = list.find(({ id }) => id === activeTab) }
      { @const url = `/post/${content?.slug}`}

      <span class='font-bold font-mono text-sm tracking-tight antialiased'>
        {content?.title}
      </span>

      <p class='font-light my-2 text-sm'>
        {content?.description}
      </p>

      <a href={url} class='text-olive-500 text-sm focus:outline-dotted dark:focus:outline-white/50 focus:outline-black'>
        Read it
      </a>
    {/if}
  </div>
</section>