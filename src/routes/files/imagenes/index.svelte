<script>
    	import Foto from './../../../Components/Foto.svelte';
        import {onMount} from "svelte";
        import {imgStore} from "../../../Stores";
        export let src;


         onMount(()=>{
               src=$imgStore; 
         })
</script>
 
<Foto {src}/>

<slot/>