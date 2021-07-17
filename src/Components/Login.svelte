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
        Spinner,
    } from "sveltestrap";

    import { usuario, session, urlProcessImages } from "../Stores.js";
    import { onDestroy } from "svelte";
    import * as api from "$lib/api/apis";
    import { fade } from "svelte/transition";
    import { goto } from "$app/navigation";
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
        document.getElementById("spinner").classList.remove("d-none");
        const { response, json } = await api.post(
            $urlProcessImages,
            "login.php",
            login
        );
        console.log(json);
        document.getElementById("spinner").classList.add("d-none");
        let mensaje="Acceso denegado";
        if (json[0].mensaje) mensaje=json[0].TypedError+" "+json[0].url;
        if (!json[0].concedido) {
            Swal.fire({
                icon: "error",
                title: mensaje,
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
            if (login.usuario != "admin") {
                goto(`/dirs/${login.usuario}`).then(() => {
                    console.log("success:");
                });
            } else {
                goto("/admin");
            }
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
            <Button block color="primary" on:click={ingresar}>Ingresar <Spinner id="spinner" class="d-none" size="sm" /></Button>
        </CardBody>
        <CardFooter>&#169;{cpr}</CardFooter>
    </Card>
</div>

<style>
    .divInicio {
        height: 80vh;
    }

    
</style>
