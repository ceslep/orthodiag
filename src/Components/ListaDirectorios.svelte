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

    export let path;
    export let directorio;
    let open = false;

    let directorios;
    let url = `${$urlProcessImages}get_files_a.php`;

    const listarDirectorios = async () => {
        open=true;
        let response = await fetch(url, {
            method: "POST",
            body: JSON.stringify({ dir: path }),
            headers: { "Content-Type": "application/json" },
            mode: "cors",
        });
        return await response.json();
    };

    onMount(async ()=>{
        directorios = await listarDirectorios();
    });

  
  const verFotos = async (path,directorio)=>{
  //  navigate(`/verfotos/${encodeURIComponent(path)}/${directorio}`);
  }  

  const toggle = () => (open = !open);



</script>

<Button block on:click={listarDirectorios}>{directorio}</Button>

<Modal isOpen={open} {toggle} backdrop={false} fade={false} class="modal-dialog-centered">
    <ModalHeader {toggle} color="danger">Lista de carpetas del paciente</ModalHeader>
    <ModalBody>
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
    </ModalBody>
    <ModalFooter>
        <Button color="secondary" on:click={toggle}>Cerrar</Button>
    </ModalFooter>
</Modal>
