class MyComponent extends React.Component {
  render() {
    return (
      <div>
        <h2>Here is a component!</h2>
      </div>
    )
  }
}

class AppTwo extends React.Component {
  render() {
    return (
      <div>
        <h1>Here is my second React app!</h1>
        <MyComponent/>
      </div>
    )
  }
}

ReactDOM.render(<AppTwo />, document.getElementById("app-two"));

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Here is my first React app!</h1>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));

class AppProps extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello { this.props.name }!</h1>
      </div>
    )
  }
}

ReactDOM.render(<AppProps name="Nate"/>, document.getElementById("app-props"));

class AppStyle extends React.Component {
  render() {
    const style = { color: "red" };

    return (
      <div>
        <h1 style={style}>Hello { this.props.name }!</h1>
        <h2 className="primary-text">This is primary text.</h2>
        {
          /* <p>This will not be rendered because it is commented out using JavaScript.</p> */
        }
      </div>
    )
  }
}

ReactDOM.render(<AppStyle name="Bill"/>, document.getElementById("app-style"));
