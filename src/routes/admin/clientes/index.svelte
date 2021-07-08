<script>
    import ListadoClientes from "./../../../Components/admin/ListadoClientes.svelte";
    import FormClientes from "./../../../Components/admin/FormClientes.svelte";
    import { TabContent, TabPane } from "sveltestrap";
</script>

<h1>Clientes</h1>

<div class="container d-flex justify-content-center">
    <TabContent>
        <TabPane tabId="alpha" tab="Listado" active>
            <ListadoClientes />
        </TabPane>
        <TabPane tabId="bravo" tab="Crear/Editar">
            <FormClientes />
        </TabPane>
    </TabContent>
</div>
<slot/>