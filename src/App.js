import { BrowserRouter, Route , Switch} from "react-router-dom";
import Home from "./Component/Home/index";
function App() {
	return (
		<div className="App">
      <BrowserRouter>
     <Switch>
     <Route path="/" exact component={Home} />
     </Switch>
      </BrowserRouter>
		</div>
	);
}

export default App;
