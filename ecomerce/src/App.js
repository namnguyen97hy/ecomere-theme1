import Header from "./layouts/header/index"
import Footer from "./layouts/footer/index"
import "./styles/index.scss";
import { routes } from "./routes";
import React, { Component, Suspense } from 'react';
import { BrowserRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

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
              <route.component {...props} />
            </Suspense>
          );
        })}
      />
    )
  }
  return (
    <BrowserRouter>
      <div className="App" >
        <Header />
        {/* <Redirect exact from=""  to="/page/home" /> */}
        {routes.map(route => renderRoute(route))}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
