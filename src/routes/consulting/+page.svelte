<script lang="ts">
  import { Sparkles } from 'lucide-svelte'
</script>

<svelte:head>
  <title>Joel Rivera — Consulting</title>

  <meta
    name="description"
    content="I offer expert web development consulting services with over a decade of experience. 
      Specializing in crafting high-quality user experiences, and AI integration."
  />

  <meta name="og:title" content="Joel Rivera — Consulting" />

  <meta name="og:image" content="/og-banner.jpg" />
  <meta property="og:image:type" content="image/jpeg" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />

  <meta
    name="og:description"
    content={`
      I offer expert web development consulting services with over a decade of experience. 
      Specializing in crafting high-quality user experiences, and AI integration.
    `}
  />
</svelte:head>

<main class="antialiased mb-32 lg:mb-10">
  <h1 class="flex flex-col">Consulting</h1>

  <p class="w-full mt-10 text-current">
    I'm now offering consulting services for web development projects. I've helped some of the
    biggest companies in the world achieve their goals, including IBM, Morgan Stanley, Starbucks,
    CNN, and Geico among others. I can help you too. I have a decade of experience leading and
    executing web development projects with a focus on crafting high-quality user experiences. Let
    me put my expertise to work for you.
  </p>

  <section class="my-20">
    <h2 class="mb-8">What I offer</h2>

    <p class="w-full mt-10 text-current">
      I can build any website or web app you have in mind, whether simple or complex. Prices and
      timelines will vary accordingly. In addition to development, I offer deployment, maintenance,
      and monitoring services. A few examples of projects that I can help you build include, but are
      not limited to:
    </p>

    <ol class="mt-5">
      <li class="mb-2">1. Simple landing pages</li>
      <li class="mb-2">2. E-commerce stores</li>
      <li class="mb-2">3. Dashboards</li>
      <li class="mb-2">4. Blogs</li>
      <li class="mb-2">5. AI-powered chatbots</li>
    </ol>

    <p
      class="w-full mt-10 text-current relative after:border after:border-stone-50/5 after:absolute after:w-full after:top-1 after:left-0 after:scale-x-110 after:bg-stone-50/5 after:-z-10 after:scale-y-125 after:h-full after:rounded-xl after:p-5 after:block"
    >
      <span class="flex items-center pt-1 mb-5 font-semibold"
        ><Sparkles size={18} class="mr-2" /> AI Integration</span
      >
      Interested in what AI can do for you? I specialize in AI integration and can help you build custom
      AI-powered experiences.
    </p>
  </section>

  <section class="mt-20">
    <h2 class="mb-8">Process</h2>

    <ol>
      <li class="mb-2">
        1. <strong>Initial Meeting</strong>: We'll discuss your project and goals
      </li>

      <li class="mb-2">
        2. <strong>Proposal</strong>: I'll provide a proposal that includes the scope of work,
        timeline, and cost.
      </li>
      <li class="mb-2">
        3. <strong>Approval and Deposit</strong>: Upon approval and a 50% deposit, I'll start
        working on your project.
      </li>
      <li class="mb-2">
        4. <strong>Progress Updates</strong>: I'll keep you updated on the progress to ensure you're
        happy with the results.
      </li>
      <li>
        5. <strong>Completion</strong>: Once the project is complete, you'll pay the remaining 50%.
        I'll provide the final product and any additional support you may need.
      </li>
    </ol>
  </section>

  <section class="mt-20">
    <h2 class="mb-8">Pricing</h2>

    <p class="w-full mt-10 text-current">
      Prices will vary depending on the complexity of the project. I'll provide a detailed proposal
      that includes the scope of work, timeline, and cost. I'm happy to work with you to find a
      solution that fits your budget. I offer fixed pricing, so no surprises.
    </p>
  </section>

  <a
    href="mailto:joelriveradev@gmail.com?subject=Consulting Inquiry&body=Hi Joel, I'm interested in your consulting services. Let's chat!"
    class="inline-block bg-white/10 rounded-lg mt-14 py-2 px-4 pb-2.5 hover:bg-white/30 transition-all"
  >
    Let's Chat
  </a>
</main>
