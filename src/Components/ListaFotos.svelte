<script lang="ts">
    import ListaDirectorios from "./ListaDirectorios.svelte";
    import { onMount } from "svelte";
    import { cliente } from "../Stores.js";

    import { Spinner } from "sveltestrap";

    let urlprocessImages = "http://127.0.0.1/odiag/php/";
    let urlImages = `${urlprocessImages}get_files.php`;
    let PromiseDirectorios: any = [];

    const getDirectorios = async (cliente: string) => {
        let response = await fetch(urlImages, {
            method: "POST",
            body: JSON.stringify({ cliente: cliente }),
            headers: { "Content-Type": "application/json" },
            mode: "cors",
        });
        return await response.json();
    };

    onMount(() => {
        PromiseDirectorios = getDirectorios($cliente);
        
    });
</script>

<h1>Listado de Imágenes</h1>
<div class="d-flex justify-content-center align-items-center">
    {#await PromiseDirectorios}
        <Spinner size="md" type="grow" />
    {:then images}
        {#each images as { path,directorio }, i}
            <ListaDirectorios {path} {directorio}  />
        {/each}
    {/await}
</div>
