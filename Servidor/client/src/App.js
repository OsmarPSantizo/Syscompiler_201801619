import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as ReactBoostrap from "react-bootstrap";

class App extends Component {
state = {
    data: null
  };

  componentDidMount() {
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));
  }
    // fetching the GET route from the Express server which matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch('/express_backend');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
  };

  render() {
    return (
      
      <div className="App">
        <script> https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js </script>
    <ReactBoostrap.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <ReactBoostrap.Container>
  <ReactBoostrap.Navbar.Brand href="#home">ORGANIZACIÓN DE LENGUAJES Y COMPILADORES 1</ReactBoostrap.Navbar.Brand>
  <ReactBoostrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <ReactBoostrap.Navbar.Collapse id="responsive-navbar-nav">
    <ReactBoostrap.Nav className="me-auto">
      <ReactBoostrap.Nav.Link href="#features">Crear Archivos</ReactBoostrap.Nav.Link>
      <ReactBoostrap.Nav.Link href="#pricing">Abrir Archivo</ReactBoostrap.Nav.Link>
      <ReactBoostrap.Nav.Link href="#pricing">Guardar el Archivo</ReactBoostrap.Nav.Link>
      <ReactBoostrap.Nav.Link href="#pricing">Eliminar Pestaña</ReactBoostrap.Nav.Link>
      
      <ReactBoostrap.NavDropdown title="Reportes" id="collasible-nav-dropdown">
        <ReactBoostrap.NavDropdown.Item href="#action/3.1">Reporte de Errores</ReactBoostrap.NavDropdown.Item>
        <ReactBoostrap.NavDropdown.Item href="#action/3.3">Reporte de Tabla de Simbolos</ReactBoostrap.NavDropdown.Item>
        <ReactBoostrap.NavDropdown.Item href="#action/3.2">Generar Árbol AST</ReactBoostrap.NavDropdown.Item>
        
        
      </ReactBoostrap.NavDropdown>
    </ReactBoostrap.Nav>
   
  </ReactBoostrap.Navbar.Collapse>
  </ReactBoostrap.Container>
</ReactBoostrap.Navbar>
      
      

    
      <body>
        
        
      <div><p className="App-intro">{this.state.data}</p></div>
      <div class ="row">

          <div class ="col">
            <div class ="leftside">
            <h1>Editor</h1>
              <textarea rows = "20" cols = "100" ></textarea>
              <br/>
             <ReactBoostrap.Button variant="dark">Ejecutar</ReactBoostrap.Button>{' '}
             <br/>
            </div>
          </div>

          <div class ="col">
          <div class ="leftside">
          <h1>Consola</h1>
            <textarea rows = "20" cols = "100" ></textarea>
          </div>
          </div>
      
      
      
      </div>
     
      </body>
      <h3  align="left">Tabla de Simbolos </h3>
      <ReactBoostrap.Table striped bordered hover variant="dark" size="sm">
     
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Tipo Valor</th>
            <th>Fila</th>
            <th>Columna</th>
            <th>Ambito</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>----</td>
            <td>----</td>
            <td>----</td>
            <td>----</td>
            <td>----</td>
          </tr>
        </tbody>
      </ReactBoostrap.Table>
      <h3 align="left" >Tabla de Errores léxicos, Sintacticos y Semánticos</h3>
      <ReactBoostrap.Table striped bordered hover variant="dark" size="sm">
      
        <thead>
          <tr>
            <th>#</th>
            <th>Tipo</th>
            <th>Error</th>
            <th>Fila</th>
            <th>Columna</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>----</td>
            <td>----</td>
            <td>----</td>
            <td>----</td>
          </tr>
        </tbody>
      </ReactBoostrap.Table>



      </div>
        
      
      
    );
  }
}

export default App;