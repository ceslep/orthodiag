<script lang="ts">
    import {
    Spinner,
    Progress,
  } from "sveltestrap";

  import {urlProcessAssets,porcentajeStore} from "../Stores.js";
  import { onMount,onDestroy,afterUpdate } from 'svelte';

    export let porcentaje:number;


    const unsubscribe = porcentajeStore.subscribe(value => {
		porcentaje = value;
	});

  onMount(()=>{
    porcentajeStore.set(0);
  });
  onDestroy(unsubscribe);

  afterUpdate(() => {
	
	});

  let loadingImg=`${$urlProcessAssets}loading.gif`;
</script>


<div class="text-center">
    
    
    <img src={loadingImg} alt="" class="img-fluid" width="25%" />
    <h4>Cargando...</h4>
    <h6>OrthoDiagnosticar</h6>
   
    <Progress animated striped color="warning" value={$porcentajeStore} max={100}>{$porcentajeStore}&nbsp;%</Progress>
  </div>