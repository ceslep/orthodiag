<script lang="ts">
    import ListaDirectorios from "./ListaDirectorios.svelte";
    import { onMount } from "svelte";
    import { urlProcessImages } from "../Stores.js";

    import { Spinner } from "sveltestrap";
    import { ArrowLeftSquare } from "svelte-bootstrap-icons";
    import * as api from "$lib/api/apis";

    let url = `${$urlProcessImages}get_files.php`;

    export let cliente;

    let carpetas;

    const getDirectorios = async (cliente) => {
        let { response, json } = await api.post(
            $urlProcessImages,
            "get_files.php",
            { cliente }
        );
        return json;
    };

    onMount(async () => {
        console.log(cliente);
        
        carpetas = await getDirectorios(cliente);
    });

    $:console.log(carpetas);


</script>

<a href="#!" on:click|preventDefault={()=>{history.back()}}><h2 class="mx-2"><ArrowLeftSquare style="font-size:2rem;"/>Listado de Carpetas</h2></a>
<div class="d-flex justify-content-center align-items-center">
    <div class="divInicio">
       
        {#if carpetas}
            {#each carpetas as { path, directorio }, i}
                <ListaDirectorios {path} {directorio} />
            {/each}
            {:else}
            <Spinner
                color="primary"
                type="border"
                size="lg"
                style="width: 5rem; height: 5rem;"
            />
        {/if}    
        
    </div>
</div>

<style>
    .divInicio {
        height: 80vh;
    }
</style>
