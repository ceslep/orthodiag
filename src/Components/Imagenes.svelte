<script lang="ts">
    import VerFotos from "./VerFotos.svelte";
    import { onMount } from "svelte";
    import { urlProcessImages,porcentajeStore } from "../Stores.js";
    import {Progress} from "../Utils.js";
    
    import Loading from "./Loading.svelte";

    export let path: string;
    export let dir: string;

    let url = `${$urlProcessImages}get_files_d.php`;

    let promiseImagenes: any = [];
    const getImagenes = async () => {
        let response = await fetch(url, {
            method: "POST",
            body: JSON.stringify({ path: path, dir: dir }),
            headers: { "Content-Type": "application/json" },
            mode: "cors",
        });
        let progreso = new Progress(response);
        return await progreso.progreso();
    };

    onMount(() => {
        porcentajeStore.set(0);
        promiseImagenes = getImagenes();
    });

   
</script>


    {#await promiseImagenes}
        <div class="d-flex divInicio justify-content-center align-items-center">
            <Loading porcentaje={$porcentajeStore}></Loading>
        </div>
    {:then imagenes}
    <div
    class="d-flex justify-content-center align-items-center flex-wrap vh-85 pt-2"
>
        {#each imagenes as { src }, i}
            <VerFotos {src} />
        {/each}
    </div>
    {/await}


<style>
    .divInicio {
        height: 80vh;
    }
</style>
