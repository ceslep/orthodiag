<script context="module" lang="ts">
  
    let carpetas;
   	
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
  
  import { urlProcessImages } from './../../Stores.js';
  import {
    Spinner,
  
  } from "sveltestrap";
  import {onMount} from 'svelte';
    export let profesional;
   let clientes;
    onMount(async ()=>{
      
        clientes=await getClientes();
        
    });
    
    const getClientes= async ()=>{
        let response = await fetch($urlProcessImages+`pacientesProfesional.php`,{
            method:"POST",
            body:JSON.stringify({profesional:profesional}),
            headers:{"Content-Type":"application/json"},
            mode:"cors"
        });
        return  await response.json();
        
        
    } 
   
    
  
</script>
<div class="container d-flex justify-content-center align-items-center">

    {#if clientes}
    
    {#each clientes as {cliente},i}
         <p>{cliente}</p>
    {/each}
    {:else}
    <Spinner color='primary' type="border" size="lg" style="width: 5rem; height: 5rem;" />
    {/if}


<slot />
</div>
<style>
    .container{
        min-height: 80vh;
    }
</style>