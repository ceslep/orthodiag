
<script context="module" lang="ts">
 import {onMount} from "svelte";
 import {goto} from "$app/navigation";
 

 let estado;

 
    
    export const load = async ({ page }) => {
        let data= page.params.estado;
      
        return {
            props: {
                data,
            },
        };
    };
</script>

<script>


   

    onMount(()=>{

        
           sessionStorage.clear();
           goto("/");
          
       
    })
</script>
<slot/>
