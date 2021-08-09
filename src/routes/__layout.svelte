<script>
	import Nav from '../components/nav.svelte';
</script>

<Nav />
<div class="p-8 max-w-6xl mx-auto">
	<slot />
</div>

<nav class="flex justify-center w-full">
	Created with <span class="text-red-900">&nbsp;&lt;3&nbsp;</span> by&nbsp;<span class="font-bold">Tomas Arguinzones</span>
</nav>


<style global lang="postcss">
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>
