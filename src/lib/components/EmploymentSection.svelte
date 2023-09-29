<script lang='ts'>
  import type { Employer } from '../../types/generated/graphql'
  import LinkIcon from './icons/LinkIcon.svelte'

  export let employers: Array<Employer>
  let activeEmployer = employers[0]
</script>

<section class='flex flex-col xl:flex-row xl:items-center xl:justify-between p-7 md:py-28 lg:py-40 md:px-28 lg:px-40 border-b-[#E9E9E9] dark:border-b-white/25 border-b-2 border-dotted'>
  <!--Tabs-->
  <div class='w-full xl:w-1/2 flex flex-col lg:mr-16'>
    <div>
      <header class='w-full flex items-center justify-between'>
        <h1 class='font-extrabold font-mono antialiased'>Employment</h1>
      </header>
    </div>

    <ul class='mt-7 font-light'>
      {#each employers as employer (employer.id)}
        {@const { id, name, link } = employer }
        {@const isActive = id === activeEmployer.id}
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
          <li
            class='flex relative items-center justify-between mb-3 border-b-[#E9E9E9] dark:border-b-white/25 border-b-2 border-dotted pb-2 cursor-pointer hover:border-b-olive-100 transition-all before:absolute before:w-[2.5px] before:h-3 before:rounded-lg before:-left-2 md:before:-left-3'
            class:text-olive-500={isActive}
            class:border-b-olive-100={isActive}
            class:before:bg-olive-500={isActive}
            on:click={() => activeEmployer = employer}>

            {name}

            <a
              href={link}
              class='text-sm focus:outline-dotted dark:focus:outline-white/50 focus:outline-black'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Visit the {name} website.'>
              <LinkIcon />
            </a>
          </li>
        {/each}
    </ul>
  </div>

  <!--Active Employer Data-->

  <div class='w-full lg:w-2/3 xl:w-1/2 xl:ml-10 mt-7'>
    <span class='font-bold font-mono text-sm tracking-tight antialiased'>
      {activeEmployer.name}
    </span>

    <p class='font-light my-2 text-sm'>
      {activeEmployer.description}
    </p>

    <small class='text-olive-500'>
      {activeEmployer.duration}
    </small>
  </div>
</section>