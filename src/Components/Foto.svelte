<script>
    import { onMount } from "svelte";
    

    export let src;
    let imgc;

    
    onMount(() => {
        // @ts-ignore
        panzoom(imgc);
    });
    const volver = () => {
        window.history.back();
    };
</script>

<div class="d-flex justify-content-center">
    <a href="#!" class="text-center" on:click|preventDefault={volver}>Volver</a>
</div>
<div class="d-flex justify-content-center">
    <img bind:this={imgc} {src} id="img-container" class="img-fluid" alt="..." />
</div>

<style>
</style>
