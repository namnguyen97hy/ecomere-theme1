import Header from "./layouts/header/index"
<<<<<<< HEAD
import "./styles/index.scss"
=======
import Footer from "./layouts/footer/index"
import "./styles/index.scss";
import { routes } from "./routes";
import React, { Component, Suspense } from 'react';
import { BrowserRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import DashBoard from "./dashBoard";
>>>>>>> eca4ee8596747d9d3a84e9232753f5101218c54e

function App() {
  const loading = () => <div>Loading ...</div>
  const withLayout = (WrappedComponent) => {
    const HOC = class extends Component {
      render() {
        return <WrappedComponent {...this.props} />;
      }
    };
  
    return connect()(HOC);
  }
  // function render component of front-end or backend(dashboard page)
  const renderComponent = (route,props) => {
    if(route.roles.includes("User"))
        return (
          <>
          <Header />
          <route.component {...props} />
          <Footer />
          </>
        )
      else {
        return (
          <DashBoard renderChildren={() => {
            return <route.component {...props} /> 
          }} />
        )
      }
  }
  const renderRoute = (route) => {
    return (
      <route.route 
        key={route.name}
        path={route.path}
        exact={route.exact}
        roles={route.roles}
        component={withLayout(props => {
          return (
            <Suspense key={route.name} fallback={loading()}>

              {renderComponent(route,props)}
            </Suspense>
          );
        })}
      />
    )
  }
  return (
<<<<<<< HEAD
    <div className="App">
      <Header />
    </div>
=======
    <BrowserRouter>
      <div className="App" >
        {routes.map(route => renderRoute(route))}
      </div>
    </BrowserRouter>
>>>>>>> eca4ee8596747d9d3a84e9232753f5101218c54e
  );
}

export default App;
