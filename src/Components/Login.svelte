<script lang="ts">
    import {
        Button,
        Card,
        CardBody,
        CardFooter,
        CardHeader,
        CardSubtitle,
        CardText,
        CardTitle,
        FormGroup,
        Label,
        Input,
    } from "sveltestrap";

    import { usuario, session, urlProcessImages } from "../Stores.js";
    import { onDestroy } from "svelte";
    import * as api from "$lib/api/apis";
    import { fade } from "svelte/transition";
    import { goto } from '$app/navigation';
    import Swal from "sweetalert2";
    let login = {
        usuario: "",
        contrasena: "",
    };

    const unsubscribe = usuario.subscribe((value) => {});

    let estado;

    let unSubscribeSession = session.subscribe((value) => (estado = value));

    onDestroy(() => {
        unsubscribe();
        unSubscribeSession();
    });

    

    const ingresar = async () => {
        console.log($urlProcessImages);
        const { response, json } = await api.post($urlProcessImages, 'login.php',login);
         
       
        if (!json[0].concedido) {
            Swal.fire({
                icon: "error",
                title: "Acceso denegado",
                text: "Error!",
                showClass: {
                    popup: "animate__animated animate__fadeInDown",
                },
                hideClass: {
                    popup: "animate__animated animate__fadeOutUp",
                },
            });
        } else {
            session.iniciar(login.usuario);
            $usuario.usuario = login.usuario;
            goto(`/dirs/${login.usuario}`).then(()=>{
               console.log("success:");
           });
       
        }
    };

    const cpr = `OrthoDiagnosticar ` + new Date().getFullYear();
</script>

<div
    transition:fade
    class="d-flex justify-content-center align-items-center divInicio"
>
    <Card class="mb-3">
        <CardHeader>
            <CardTitle>Inicio de Sesión</CardTitle>
        </CardHeader>
        <CardBody>
            <FormGroup>
                <Label for="usuario">Usuario</Label>
                <Input
                    bind:value={login.usuario}
                    id="usuario"
                    placeholder="Correo registrado de usuario"
                />
            </FormGroup>
            <FormGroup>
                <Label for="password">Contrasena</Label>
                <Input
                    bind:value={login.contrasena}
                    type="password"
                    name="contraseña"
                    id="password"
                    placeholder="Ingrese su contraseña"
                />
            </FormGroup>
            <Button block color="primary" on:click={ingresar}>Ingresar</Button>
        </CardBody>
        <CardFooter>&#169;{cpr}</CardFooter>
    </Card>
</div>

<style>
    .divInicio {
        height: 80vh;
    }
</style>
