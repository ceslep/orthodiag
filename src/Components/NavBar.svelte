<script lang="ts">
    import {
        Collapse,
        Navbar,
        NavbarToggler,
        NavbarBrand,
        Nav,
        NavItem,
        NavLink,
        Dropdown,
        DropdownToggle,
        DropdownMenu,
        DropdownItem,
    } from "sveltestrap";
    import { onDestroy, onMount } from "svelte";
    import { PersonCircle } from "svelte-bootstrap-icons";
    import { session } from "../Stores.js";
    import { goto } from "$app/navigation";

    let isOpen = false;

    function handleUpdate(event) {
        isOpen = event.detail.isOpen;
    }

    let estado;
    let hrefa = "/login";

    let unSubscribe = session.subscribe((value) => (estado = value));

    onMount(() => {
        // session.iniciar();
    });

    onDestroy(() => {
        unSubscribe();
    });

    const iniciarCerrar = () => {
        session.cerrar();
        if (hrefa != "/login") {
            goto("/").then(() => {
                hrefa = "/login";
                console.log(".......");
            });
        } else {
            hrefa = "/cerrar";
            goto("/login");
        }
    };
</script>

<Navbar color="info" light expand="md" class="sticky-top">
    <NavbarBrand href="/">Orthodiagnosticar</NavbarBrand>
    <NavbarToggler on:click={() => (isOpen = !isOpen)} />
    <Collapse {isOpen} navbar expand="md" on:update={handleUpdate}>
        <Nav class="ms-auto" navbar>
            <NavItem>
                <a
                    href="#!"
                    class="login"
                    on:click|preventDefault={iniciarCerrar}
                >
                    {estado.text}
                    {#if estado.user != ""}
                        <br /><small>{estado.user}</small>
                    {/if}
                    <PersonCircle />
                </a>
            </NavItem>
        </Nav>
    </Collapse>
</Navbar>

<style>
    .login {
        text-decoration: none;
        color: white;
    }
</style>
