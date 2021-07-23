<script>
  import { Form, FormGroup, FormText, Input, Label } from "sveltestrap";
  import {
    Alert,
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    CardSubtitle,
    CardText,
    CardTitle,
    Spinner,
  } from "sveltestrap";
  import { PersonPlus } from "svelte-bootstrap-icons";
  import { Cliente } from "../../Stores.js";
  import * as api from "$lib/api/apis";
  import { usuario, session, urlProcessImages } from "../../Stores";
import Swal from "sweetalert2";
  

  var cliente;
  var clienteB="#";
  let saving=false;
  let existe=false;
  let btn;

  $: cliente = $Cliente;
  $:if(cliente.identificacion===""){
    clienteB="#";
    existe=false;
  } else if (cliente.identificacion===clienteB){
    clienteB=cliente.identificacion;
    existe=true
  };
  $:if (existe) {
    if (btn) btn.classList.add("disabled"); 
    
  }else{
    if (btn)  btn.classList.remove("disabled");
  }
    

  const submitForm = async (e) => {
    e.preventDefault();
    saving=true;
    try{
    const {response,json} = await api.post($urlProcessImages,"guardarCliente.php",cliente);
    if (response.status===200) 
      Swal.fire("Almacenado correctamente");
    }
    catch(error){
      console.log(error);
    }
    finally{
      saving=false;
     

    }
  };

  const buscaClienteDB = async () => {
    document.getElementById("spId").classList.remove("d-none");
    const { response, json } = await api.post(
      $urlProcessImages,
      "buscaCliente.php",
      cliente
    );
    clienteB=json[0].identificacion
    document.getElementById("spId").classList.add("d-none");
    
  };

  const nuevoCliente = () => {
    Object.keys(cliente).forEach((key) => {
      cliente[key] = "";
    });
    let elid = document.getElementById("identificacion");
    elid.focus();
  };
</script>

<div class="container d-flex justify-content-center pt-3">
  <Card class="mb-3" style="max-width:250px;">
    <CardHeader>
      <div class="row">
        <div class="col-9">
          <CardTitle>Clientes</CardTitle>
        </div>
        <div class="col-2">
          <Button size="sm" outline color="primary" on:click={nuevoCliente}
            ><PersonPlus class="text-info" /></Button
          >
        </div>
      </div>
    </CardHeader>
    <CardBody>
      <Form on:submit={submitForm}>
        <input type="hidden" name="id" id="id" bind:value={cliente.id} />
        <FormGroup>
          <Label for="identificacion">Identificacion</Label>
          <Input
            type="text"
            name="identificacion"
            id="identificacion"
            bind:value={cliente.identificacion}
            on:blur={buscaClienteDB}
            autocomplete="off"
          />
          <Spinner id="spId" size="sm" color="success" class="d-none" />
          <Alert color="warning" class={cliente.identificacion===clienteB?"":"d-none"}>
            <h6>Ya existe un cliente con ésta identificación</h6>
          </Alert>
        </FormGroup>
        <FormGroup>
          <Label for="nombres">Nombres</Label>
          <Input
            type="text"
            name="nombres"
            id="nombres"
            bind:value={cliente.nombres}
        
          />
        </FormGroup>
        <FormGroup>
          <Label for="apellidos">Apellidos</Label>
          <Input
            type="text"
            name="apellidos"
            id="apellidos"
            bind:value={cliente.apellidos}
        
          />
        </FormGroup>
        <div class="d-grid gap-1">
        <button class="btn btn-success btn-block" bind:this={btn}>
          Guardar
          <Spinner size="sm" class="{!saving?'d-none':''}"/>
        </button>
      </div>
      </Form>
    </CardBody>
    <CardFooter />
  </Card>
</div>

