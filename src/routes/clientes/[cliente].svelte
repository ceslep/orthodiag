<script context="module" lang="ts">
	import ListaTotalDirectorios from './../../Components/ListaTotalDirectorios.svelte';
    import * as api from "$lib/api/apis";

    export const load = async ({ page }) => {
        const cliente = page.params.cliente;
        console.log(cliente);
        return {
            props: {
                cliente,
            },
        };
    };
</script>

<script>
    export let cliente;
    console.log(cliente);
</script>

<main>
        <ListaTotalDirectorios {cliente}/>
       <slot/>
    
</main>