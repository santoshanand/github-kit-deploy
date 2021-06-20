<script lang="ts" context="module">
	import '$lib/Tailwind/index.svelte'
	import '../app.css';
	import Header from '$lib/Header/index.svelte'

</script>

<Header/>
<main>
	<slot />
</main>
