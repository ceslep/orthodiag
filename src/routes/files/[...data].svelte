<script context="module" lang="ts">
	import Imagenes from './../../Components/Imagenes.svelte';
    export async function load(ctx) {
        console.log(ctx.page.params);
        let data=ctx.page.params.data;
        let path=data.substring(0,data.indexOf("/")).replace(/@/g,"/");
        let directorio=data.substring(data.indexOf("/")+1,data.length);
        
        return { props: { path, directorio  } };
    }
</script>

<script>
    import { ArrowLeftSquare } from "svelte-bootstrap-icons";
    export let path;
    export let directorio;
</script>
<a href="#!" on:click|preventDefault={()=>{history.back()}}><h2 class="mx-2"><ArrowLeftSquare style="font-size:2rem;"/>Listado de Imágenes</h2></a>
<Imagenes {path} dir={directorio}/>

<slot/>