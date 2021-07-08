
<script lang="ts">
  import {
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownToggle
  } from 'sveltestrap';
</script>


<h3>
    Administrador
</h3>

<div class="container d-flex justify-content-center align-items-center vh-80">
    <Dropdown>
        <DropdownToggle caret>Opciones</DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Clientes/pacientes</DropdownItem>
          <DropdownItem href="/admin/clientes" >Crear/Editar</DropdownItem>
         
          <DropdownItem divider />
          <DropdownItem header>Profesionales</DropdownItem>
          <DropdownItem>Crear/Editar</DropdownItem>
          
        </DropdownMenu>
      </Dropdown>
</div>
<slot/>