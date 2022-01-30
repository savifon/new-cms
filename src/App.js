import "./App.css";

import AppRoutes from "./routes/AppRoutes";

// import { supabase } from "./api/supabaseClient";

// supabase
//     .from("users")
//     .select("*")
//     .then(({ data }) => {
//         console.log("Dados: ", data);
//     });

function App() {
    return <AppRoutes />;
}

export default App;
