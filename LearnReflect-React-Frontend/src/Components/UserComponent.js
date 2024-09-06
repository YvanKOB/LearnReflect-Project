const { loginAction } = useAuth(); //Bruker useAuth-hooken for å hente loginAction-funksjonen
  
const [values, setValues] = useState({  //Tilstand for inputfeltene (brukernavn og passord)
    name: '',
    password: '',
    });



const handleInput = (event) => {    //Håndterer endringer i inputfeltene
    setValues(prev => ({
        ...prev,
        [event.target.name]: event.target.value
    }));
}

const handleSubmit = async (event) => {  // Håndterer innsending av skjemaet
    event.preventDefault();
  
    if (values.name === "" || values.password === "") {  // Sjekker om brukernavn og passord er fylt ut
        alert("Please enter both username/email and password.");
        return;
    }
    try {
      
        const response = await axios.post('http://localhost:8081/login', values);  // Sender innloggingsdata til serveren
        const responseData = response.data;

       
        if (responseData.success) { // Håndterer responsen fra serveren
            loginAction(responseData); // Utfører innlogging ved å kalle loginAction-funksjonen med responsdataen
        } else if (responseData === "failed") {
            alert("Incorrect username/email or password"); // Feilmelding ved feil brukernavn/passord
        } else if (responseData === "Error") {
            alert("Server Error"); // Feilmelding ved serverfeil
        } else {
            // Håndterer andre typer feilrespons fra serveren
        }
    } catch (error) {
        console.error('Error:', error); // Logger eventuelle feil til konsollen
        alert("Error occurred while processing your request"); // Generell feilmelding ved feil under behandling av forespørselen
    }
};