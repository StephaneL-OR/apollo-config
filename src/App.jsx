import { ApolloProvider } from "@apollo/client";

import Home from "./Home";
import client from "./utils/client";

function App() {
  return (
    <div className="App">
      <ApolloProvider client={client}>
        <Home />
      </ApolloProvider>
    </div>
  );
}

export default App;
