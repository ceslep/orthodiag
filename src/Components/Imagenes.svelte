<script lang="ts">
    import { Spinner } from "sveltestrap";
    import VerFotos from "./VerFotos.svelte";
    import { onMount } from "svelte";
    import { urlProcessImages, porcentajeStore } from "../Stores.js";
    import { Progress } from "../Utils.js";
    import * as api from "$lib/api/apis";

    export let path;
    export let dir;

    

    let imagenes;
    const getImagenes = async () => {
        let {response,json} = await api.post($urlProcessImages,"get_files_d.php",{ path, dir });
        console.log(json);
        return json;
    };

    onMount(async () => {
        porcentajeStore.set(0);
        let imagenesPromise = await getImagenes();
        imagenes=imagenesPromise.filter(imagen=>{
            return ( (imagen.ext=="JPG")||(imagen.ext=="JPEG"));
        });
        console.log(imagenes);
    });
</script>

<div
    class="d-flex justify-content-center align-items-center flex-wrap vh-85 pt-2"
>
    {#if imagenes}
        {#each imagenes as { src,imageFileFull }, i}
            <VerFotos {src} {imageFileFull}/>
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

<style>
</style>
