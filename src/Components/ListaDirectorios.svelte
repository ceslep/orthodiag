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
    import { urlProcessImages } from "../Stores.js";
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
        directorios = await listarDirectorios();
    });

  
  const verFotos = async (path,directorio)=>{
    goto(`/files/${encodeURIComponent(path.replaceAll("/","@"))}/${directorio}`);
  }  

  const toggle = () => (open = !open);



</script>

    <h2>{directorio}</h2>
        <ListGroup>
         
                {#if directorios}
                {#each directorios as { directorio }, i}
                    <ListGroupItem><a href="#!" on:click|preventDefault={()=>{verFotos(path,directorio)}}>{directorio}</a></ListGroupItem>
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
   
