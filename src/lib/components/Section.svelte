<script lang='ts'>
  import type { Project, Employer, Post } from '../../types/generated/graphql'

  export let data:
    | { type: 'Projects', list: Array<Project> }
    | { type: 'Employment', list: Array<Employer> }
    | { type: 'Blog', list: Array<Post> }

  const { type, list } = data

  let activeTab = data.list[0].id

  const handleTabSelect = (id: string) => {
    activeTab = id
  }
</script>

<section class='flex flex-col lg:flex-row lg:items-center lg:justify-between p-7 md:py-28 lg:py-40 md:px-28 lg:px-40 border-b-[#E9E9E9] border-b-2 border-dotted'>
  <!--Tabs-->
  <div class='w-full lg:w-1/3 xl:w-1/2 flex flex-col lg:mr-16'>
    <div class='flex items-center justify-between'>
      <header>
        <h1 class='font-extrabold font-mono'>{type}</h1>
      </header>
    </div>

    <ul class='mt-7 font-light'>
      {#if type === 'Projects'}
        {#each list as item}
        {@const isActive = item.id === activeTab}
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
          <li
            class='flex relative items-center justify-between mb-3 border-b-[#E9E9E9] border-b-2 border-dotted pb-2 cursor-pointer hover:border-b-brown-100 transition-all before:absolute before:w-[2.5px] before:h-3 before:rounded-lg before:-left-2 md:before:-left-3'
            class:text-brown-500={isActive}
            class:border-b-brown-100={isActive}
            class:before:bg-brown-500={isActive}
            on:click={() => handleTabSelect(item.id)}>

            {item.name}

            <a href='{item.url}' class='text-sm' target='_blank' rel='noopener noreferrer'>
              <img src='/link.svg' alt='' aria-hidden />
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
            class='flex relative items-center justify-between mb-3 border-b-[#E9E9E9] border-b-2 border-dotted pb-2 cursor-pointer hover:border-b-brown-100 transition-all before:absolute before:w-[2.5px] before:h-3 before:rounded-lg before:-left-2 md:before:-left-3'
            class:text-brown-500={isActive}
            class:border-b-brown-100={isActive}
            class:before:bg-brown-500={isActive}
            on:click={() => handleTabSelect(item.id)}>

            {item.name}

            <img src='/link.svg' alt='' aria-hidden />
          </li>
        {/each}
      {/if}

      {#if type === 'Blog'}
        {#each list as item}
        {@const isActive = item.id === activeTab}
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
          <li
            class='flex relative items-center justify-between mb-3 border-b-[#E9E9E9] border-b-2 border-dotted pb-2 cursor-pointer hover:border-b-brown-100 transition-all before:absolute before:w-[2.5px] before:h-3 before:rounded-lg before:-left-2 md:before:-left-3'
            class:text-brown-500={isActive}
            class:border-b-brown-100={isActive}
            class:before:bg-brown-500={isActive}
            on:click={() => handleTabSelect(item.id)}>

            {item.title}

            <img src='/link.svg' alt='' aria-hidden />
          </li>
        {/each}
      {/if}
    </ul>
  </div>

  <!--Dynamic Data-->

  <div class='w-full lg:w-2/3 xl:w-1/2 xl:ml-10 mt-7'>
    {#if type === 'Projects'}
      { @const content = list.find(({ id }) => id === activeTab) }

      <span class='font-medium font-mono text-sm'>
        {content?.name}
      </span>

      <p class='font-light my-2 text-sm'>
        {content?.description}
      </p>

      <a href='{content?.repo}' class='text-brown-500 text-sm'>
        View code
      </a>
    {/if}

    {#if type === 'Employment'}
      { @const content = list.find(({ id }) => id === activeTab) }

      <span class='font-medium font-mono text-sm'>
        {content?.name}
      </span>

      <p class='font-light my-2 text-sm'>
        {content?.description}
      </p>

      <small class='text-brown-500'>
        {content?.duration}
      </small>
    {/if}

    {#if type === 'Blog'}
      { @const content = list.find(({ id }) => id === activeTab) }
      { @const url = `/post/${content?.slug}`}

      <span class='font-medium font-mono text-sm'>
        {content?.title}
      </span>

      <p class='font-light my-2 text-sm'>
        {content?.description}
      </p>

      <a href={url} class='text-brown-500 text-sm'>Read it</a>
    {/if}
  </div>
</section>