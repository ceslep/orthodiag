<script>
    import { onMount } from "svelte";
    import * as api from "$lib/api/apis";
    import { urlProcessImages } from "../../Stores";
    import { Table,Spinner } from "sveltestrap";
    import {CheckSquare,FileMinus,PersonX} from "svelte-bootstrap-icons";
    import { createEventDispatcher } from 'svelte';

    let clientes = [];
    let clientesLocal=[];
    let criterio='';
    onMount(async () => {
        clientes = await getClientes();
        clientesLocal=clientes;
    });
    const getClientes = async () => {
        const { response, json } = await api.get(
            $urlProcessImages,
            "getClientes.php"
        );
        return json;
    };

    const busqueda= async (crit)=>{
        let clientesFilter;
        if (crit.length>2){
        clientesFilter=clientes.filter(cliente=>{
            return (
                (cliente.nombres.toLowerCase().includes(crit))||
                (cliente.apellidos.toLowerCase().includes(crit))||
                (cliente.identificacion.toLowerCase().includes(crit))
            );
        });
        clientesLocal=clientesFilter;
        }
        else clientesLocal=clientes;
        
    }

    $:busqueda(criterio);

    const dispatch = createEventDispatcher();

    const  editClick =(clientesLocal)=> {
		dispatch('edit', {
			data: clientesLocal
		});
	}
</script>
<div class="row pt-3 mx-10 px-3">
    <div class="col">
        <div class="form-group">
            <input bind:value={criterio} type="search" class="form-control" placeholder="Busqueda" />
        </div>
    </div>
</div>
<div class="container d-flex justify-content-center pt-3">
   
    {#if clientesLocal}
        <Table bordered hover striped responsive>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Identificación</th>
                    <th>Nombres</th>
                    <th>Apellidos</th>
                </tr>
            </thead>
            <tbody>
                {#each clientesLocal as cliente, i}
                    <tr>
                        <th scope="row">{i+1}</th>
                        <td>{cliente.identificacion}</td>
                        <td>{cliente.nombres}</td>
                        <td>{cliente.apellidos}</td>
                        <td><a href="#!" on:click|preventDefault={()=>{editClick(cliente)}}><CheckSquare class="text-success"/></a></td>
                        <td><a href="#!"><PersonX class="text-danger"/></a></td>
                    </tr>
                {/each}
            </tbody>
        </Table>
        {:else}
        <Spinner
            color="primary"
            type="border"
            size="lg"
            style="width: 5rem; height: 5rem;"
        />
    {/if}
</div>
