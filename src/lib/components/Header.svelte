<script>
  import ThemeSwitch from './ThemeSwitch.svelte'
</script>

<header class='flex items-center justify-between py-5 px-7 md:px-28 lg:px-40 dark:bg-white/5'>
  <a href='/' class='font-medium'>
    joelrivera<span class='text-[#754E4E]'>.dev</span>
  </a>

  <button class='w-5 h-5 rounded-full cursor-pointer'>
    <ThemeSwitch />
  </button>
</header>