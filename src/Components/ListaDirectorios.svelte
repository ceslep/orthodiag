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
    import { navigate } from "svelte-routing";

    export let path;
    export let directorio;
    let open = false;

    let promiseDirectorios:any=[];
    let url = `${$urlProcessImages}get_files_a.php`;

    const listarDirectorios = async () => {
        open=true;
        let response = await fetch(url, {
            method: "POST",
            body: JSON.stringify({ dir: path }),
            headers: { "Content-Type": "application/json" },
            mode: "cors",
        });
        promiseDirectorios = await response.json();
    };

  
  const verFotos = async (path,directorio:string)=>{
    navigate(`/verfotos/${encodeURIComponent(path)}/${directorio}`);
  }  

  const toggle = () => (open = !open);



</script>

<Button block on:click={listarDirectorios}>{directorio}</Button>

<Modal isOpen={open} {toggle} backdrop={false} fade={false} class="modal-dialog-centered">
    <ModalHeader {toggle} color="danger">Lista de carpetas del paciente</ModalHeader>
    <ModalBody>
        <ListGroup>
         
            {#await promiseDirectorios}
                <Spinner size="md" type="grow" /> 
            {:then directorios}
                {#each directorios as { directorio }, i}
                    <ListGroupItem><a href="#!" on:click|preventDefault={()=>{verFotos(path,directorio)}}>{directorio}</a></ListGroupItem>
                {/each}
            {/await}
          
        </ListGroup>
    </ModalBody>
    <ModalFooter>
        <Button color="secondary" on:click={toggle}>Cerrar</Button>
    </ModalFooter>
</Modal>
