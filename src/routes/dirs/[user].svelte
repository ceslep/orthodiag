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
    import { urlProcessImages } from "./../../Stores.js";
    import { Spinner, ListGroup, ListGroupItem } from "sveltestrap";
    import { onMount } from "svelte";
    import Swal from "sweetalert2";
    import { FolderFill } from "svelte-bootstrap-icons";
    export let profesional;
    let clientes;
    let active;
    onMount(async () => {
        clientes = await getClientes();
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

    
</script>

<div
    class="containerInicio d-flex justify-content-center align-items-center"
    style="min-height:80vh;"
>
    {#if clientes}
        <ListGroup>
            {#each clientes as { cliente }, i}
                    <ListGroupItem  tag="a" href="/clientes/{cliente}" action>
                        <FolderFill/>&nbsp;<span>{cliente}</span>
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

    
</style>
