<script>
    import ListadoClientes from "./../../../Components/admin/ListadoClientes.svelte";
    import FormClientes from "./../../../Components/admin/FormClientes.svelte";
    import {Cliente} from "../../../Stores.js";

   

   

    const clk = (tab) => {
        if(document){
        var navLink=document.querySelectorAll(".nav-link");
        navLink.forEach(nav=>{
            nav.classList.remove("active");
        });    
        var tabContent = document.querySelector('.tab-content');
        const tabPane= tabContent.querySelectorAll(".tab-pane");
        
        tabPane.forEach(t=>{
            t.classList.remove("show");
            t.classList.remove("active");
          
        });
        document.querySelector(`[data-bs-target="#${tab}"]`).classList.add("active");
        document.getElementById(tab).classList.add("show");
        document.getElementById(tab).classList.add("active");

        }
    };

    const edit = (event)=>{
        
        clk("creareditar")
        $Cliente=event.detail.data;
    }
</script>

<h1>Clientes</h1>


<div class="container ">
    <ul class="nav nav-tabs" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
            <button
                class="nav-link active"
                id="home-tab"
                data-bs-toggle="tab"
                data-bs-target="#listado"
                type="button"
                role="tab"
                aria-controls="listado"
                aria-selected="true">Listado</button
            >
        </li>
        <li class="nav-item" role="presentation">
            <button
                class="nav-link"
                id="profile-tab"
                data-bs-toggle="tab"
                data-bs-target="#creareditar"
                type="button"
                role="tab"
                aria-controls="creareditar"
                aria-selected="false">Crear/Editar</button
            >
        </li>
        
    </ul>
    <div class="tab-content" id="myTabContent">
        <div
            class="tab-pane fade show active"
            id="listado"
            role="tabpanel"
            aria-labelledby="listado-tab"
        >
        <ListadoClientes on:edit={edit}/> 
        </div>
        <div
            class="tab-pane fade"
            id="creareditar"
            role="tabpanel"
            aria-labelledby="creareditar-tab"
        >
        <FormClientes />  
        </div>
        
    </div>
</div>
<slot />
