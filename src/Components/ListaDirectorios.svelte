<script lang="ts">
    import {
        Button,
        Modal,
        ModalBody,
        ModalFooter,
        ModalHeader,
        Spinner,
        ListGroup,
        ListGroupItem,
    } from "sveltestrap";
    import { urlProcessImages,urlProcessAssets } from "../Stores.js";
    import {onMount} from "svelte";
    import { goto } from '$app/navigation';
    import * as api from "$lib/api/apis";

    export let path;
    export let directorio;
    
    let open = false;

    let directorios;
    let url = `${$urlProcessImages}get_files_a.php`;

    const listarDirectorios = async () => {
        open=true;
        let {response,json} = await api.post($urlProcessImages,"get_files_a.php",{ dir: path } );
        return json;
    };

    onMount(async ()=>{
        let directoriosPromise = await listarDirectorios();
        directorios=directoriosPromise.filter(directorio=>{
            return directorio.cantidad>0;
        });
    });

  
  const verFotos = async (path,directorio)=>{
    goto(`/files/${encodeURIComponent(path.replaceAll("/","@"))}/${directorio}`);
  }  

  const toggle = () => (open = !open);



</script>

    <h3 class="pt-3 text-wrap text-primary">{directorio}</h3>
    <div class="py-3">
        <ListGroup>
         
                {#if directorios}
                {#each directorios as { directorio }, i}
                    <ListGroupItem><a 
                        href="#!" on:click|preventDefault={()=>{verFotos(path,directorio)}}>
                        <img 
                        src="{$urlProcessAssets}folder.png" 
                        class="img-thumbnail w-10"
                        alt="">
                        {directorio.replace(/\b\w/g, l => l.toUpperCase())}</a>
                    </ListGroupItem>
                {/each}
                {:else}
                <Spinner
                color="primary"
                type="border"
                size="lg"
                style="width: 5rem; height: 5rem;"
            />
            {/if}
          
        </ListGroup>
    </div>
   
<style>
    .w-10{
        width:4rem;
    }
</style>