import {readable,writable} from "svelte/store";

export const usuario=writable({
    usuario:"ceslep@gmail.com",
    contrasena:"1234"
})

export const cliente=writable('42759761');
export const porcentajeStore = writable(0);

//export const urlProcessImages = readable("http://192.168.100.10/odiag/php/");
//export const urlProcessAssets = readable("http://192.168.100.10/odiag/assets/");
 
export const urlProcessImages = writable("http://127.0.0.1/orthodiag/php/");
export const urlProcessAssets = writable("http://127.0.0.1/orthodiag/static/");
export const imgStore = writable("");


function createSession() {
	const { subscribe, set } = writable({text:'Iniciar Sesión',user:''});

	return {
		subscribe,
        getStatus:()=>{
            return JSON.parse(sessionStorage.getItem('status'));
        },
		iniciar: (usuario) => {
            let status={text:'Cerrar Sesión',user:usuario};
            sessionStorage.setItem('status', JSON.stringify(status));
            set(status)
        },
        cerrar: () => {
            let status={text:'Iniciar Sesión',user:''};
            sessionStorage.setItem('status', JSON.stringify(status));
            set(status)
        }
	};
}

export const session = createSession();
