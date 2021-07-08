<script context="module" lang="ts">
    import * as api from "$lib/api/apis";

    export const load = async ({ page }) => {
        const profesional = page.params.user;

        return {
            props: {
                profesional,
            },
        };
    };
</script>

<script>
    import { urlProcessImages, urlProcessAssets } from "./../../Stores.js";
    import { Spinner, ListGroup, ListGroupItem } from "sveltestrap";
    import { onMount } from "svelte";
    import Swal from "sweetalert2";
    import { FolderFill } from "svelte-bootstrap-icons";
    export let profesional;
    let clientes;
    let clientesLocal;
    let active;
    let criterio='';
    let nombreProfesional='';
    onMount(async () => {
        clientes = await getClientes();
        clientesLocal=clientes;
        if (clientesLocal.length>0)
        nombreProfesional=clientesLocal[0].nombresProfesional;
    });

    const getClientes = async () => {
        const { response, json } = await api.post(
            $urlProcessImages,
            "pacientesProfesional.php",
            { profesional }
        );
        if (response.status === 200) return json;
        else
            Swal.fire({
                icon: "error",
                title: `Error de servidor ${response.status}`,
                text: response.statusText,
                showClass: {
                    popup: "animate__animated animate__fadeInDown",
                },
                hideClass: {
                    popup: "animate__animated animate__fadeOutUp",
                },
            });
    };

    const busqueda= async (crit)=>{
        let clientesFilter;
        if (crit.length>2){
        clientesFilter=clientes.filter(cliente=>{
            return (cliente.nombresCliente.toLowerCase().includes(crit))||(cliente.cliente.toLowerCase().includes(crit));
        });
        clientesLocal=clientesFilter;
        }
        else clientesLocal=clientes;
        
    }
    $:busqueda(criterio);
</script>
<h4 class="text-secondary px-3 mt-3">{nombreProfesional}</h4>
<div class="row pt-3 mx-10 px-3">
    <div class="col">
        <div class="form-group">
            <input bind:value={criterio} type="search" class="form-control" placeholder="Busqueda" />
        </div>
    </div>
</div>
<div
    class="container containerInicio d-flex justify-content-center align-items-center"
    style="min-height:80vh;"
>
    {#if clientes}
       

       
                <ListGroup>
                    {#each clientesLocal as { cliente, nombresCliente }, i}
                        <ListGroupItem
                            tag="a"
                            href="/clientes/{cliente}"
                            action
                        >
                            <img
                                src="{$urlProcessAssets}folder.png"
                                class="img-thumbnail w-10"
                                alt=""
                            />&nbsp;<span>{cliente} <span class="font-weight-bold">{nombresCliente}</span></span>
                        </ListGroupItem>
                    {/each}
                </ListGroup>
           
    {:else}
        <Spinner
            color="primary"
            type="border"
            size="lg"
            style="width: 5rem; height: 5rem;"
        />
    {/if}

    <slot />
</div>

<style>
    .containerInicio {
        min-height: 80vh;
    }

    .w-10 {
        width: 4rem;
    }
</style>
