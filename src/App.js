import logo from './logo.svg';
import './App.css';
import axios from "axios";


const PUBLIC_VAPID_KEY = "BPgbqb7lH8YqIOYcevD8XTL1Q3i7zA7qob3ymR0SyoOTts14XcrqagZbVrl9r7B10TMPjg-dFwBvygyuB6HtnMs"
let register
let input_name = ""


function App() {


  const handleChandeInput = (e) => {
    input_name = e.target.value
  }

  //SERVICE WORKER
  const registerUser = async () => {
    console.log("New service worker instalado")
    register = await navigator.serviceWorker.register('/worker.js', {
      scope: '/'
    })
  }
  registerUser()

  const subscription = async () => {
    try {
      if (input_name.length > 4) {
        const subscription = await register.pushManager.subscribe({
          userVisibleOnly: true,
          applicationServerKey: PUBLIC_VAPID_KEY
        });
        let objPost = {
          name: input_name,
          subscription: subscription,
        }

        await axios.post('https://19fc-190-247-202-60.ngrok-free.app/subscription',
          objPost
        )
          .then(function (response) {
            console.log(response.data)
            if (response?.data?.msg) {
              console.log(response?.data?.msg)
              alert(response?.data?.msg)
            }
            else {
              console.log("Subscripto")
              alert("Te logueaste con exito.")
            }

          })
          .catch(function (error) {
            console.log(error);
          });
        return
      }
      else {
        alert("Debe tener un nombre mayor a 4 caracteres.")
        return
      }
    }
    catch (error) {
      alert("Ocurrio un error inesperado.")
      console.log("Entro el error")
    }
  }




  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" style={{ width: "300px" }} />
        <input onChange={handleChandeInput} placeholder="Nombre de usuario" />

        <button onClick={subscription}>
          Loguear
        </button>
      </header>
    </div>
  );
}

export default App;
