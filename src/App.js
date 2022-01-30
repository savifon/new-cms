import "./App.css";

import { supabase } from "./api/supabaseClient";

supabase
    .from("users")
    .select("*")
    .then(({ data }) => {
        console.log("Dados: ", data);
    });

function App() {
    return (
        <div className="App">
            <h1>App</h1>
        </div>
    );
}

export default App;
