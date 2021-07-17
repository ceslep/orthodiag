<script>
    import { Form, FormGroup, FormText, Input, Label } from 'sveltestrap';
    import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    CardSubtitle,
    CardText,
    CardTitle
  } from 'sveltestrap';
  import {PersonPlus} from "svelte-bootstrap-icons";  
  import {Cliente} from "../../Stores.js";

  var cliente;
  

  $:cliente=$Cliente;

  const submitForm = (e)=>{
    e.preventDefault();
    console.log(cliente);
  }

 
 
 const nuevoCliente = ()=>{
   Object.keys(cliente).forEach(key=>{
      cliente[key]='';
   });
   let elid=document.getElementById("identificacion");
   console.log(elid);
   elid.focus();  
 }
 
</script>

<div class="container d-flex justify-content-center pt-3">
    
    <Card class="mb-3">
        <CardHeader>
          <div class="row">
            <div class="col-9">
          <CardTitle>Clientes</CardTitle>
        </div>
        <div class="col-2">
          <Button size="sm" outline color="primary" on:click={nuevoCliente}><PersonPlus class="text-info"/></Button>
        </div>
        </div>
        </CardHeader>
        <CardBody>
            <Form on:submit={submitForm}>
                <input type="hidden" name="id" id="id" bind:value={cliente.id}>
                <FormGroup>
                    <Label for="identificacion">Identificacion</Label>
                    <Input
                      type="text"
                      name="identificacion"
                      id="identificacion"
                      bind:value={cliente.identificacion}
                   />
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
                  <Button block outline color="success">Guardar</Button>
            </Form>    
        </CardBody>
        <CardFooter></CardFooter>
      </Card>
    
</div>
