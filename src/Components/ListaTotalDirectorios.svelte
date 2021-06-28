<script lang="ts">
    import ListaDirectorios from "./ListaDirectorios.svelte";
    import { onMount } from "svelte";
    import { cliente,urlProcessImages } from "../Stores.js";

    import { Spinner } from "sveltestrap";

    
    let url = `${$urlProcessImages}get_files.php`;
    
    export let carpetas;
    
</script>

<h1>Listado de Carpetas</h1>
<div class="d-flex justify-content-center align-items-center">
   
  

   <div class="divInicio">
        {#each carpetas as { path,directorio }, i}
            <ListaDirectorios {path} {directorio}  />
        {/each}
    </div>
</div>

<style>
    .divInicio{
        height: 80vh;
    }
</style>
