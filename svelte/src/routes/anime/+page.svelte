<script lang="ts">
  import type { Anime } from "./+server";

  let luca: Anime | null = null;

async function roll() {
	try {
		const response = await fetch('/frog'); // Adjust your endpoint here
		if (!response.ok) {
			throw new Error('Network response was not ok');
		}
		luca = await response.json();
		console.log(luca);
	} catch (error) {
		console.error('Fetch error:', error);
		// Handle the error state in your UI perhaps
	}
}
</script>

<nav>
	<a href="/">home</a>
	<a href="/about">about</a>
</nav>

<button on:click={roll}>Roll the dice</button>