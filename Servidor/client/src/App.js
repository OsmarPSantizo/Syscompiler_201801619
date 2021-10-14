import React, { Component } from 'react';
import './App.css';
import * as ReactBoostrap from "react-bootstrap";


import CodeMirror from "@uiw/react-codemirror";



class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      runCode: false,
      outputText:'console.log("helloWorld")',
      value:'Escribe tu codigo :3',
      
    };
    this.handleChange = this.handleChange.bind(this);
    
  }

  runCode = () =>{
   
    this.setState({runCode:true})

    const data ={
      "input" : this.state.outputText
    }

    fetch('http://localhost:3100/api/ejecutar',{
      method: 'POST',
      headers:{"Content-Type" : "application/json"},
      body: JSON.stringify(data)
      
      
    })
      .then(response => response.json())
      .then(data =>{
        var datitos = JSON.stringify(data);
        
        this.setState({value : JSON.parse(datitos).consola})
        console.log('recibido', data);

      });
    
  }
  state = {
    data: null
  };

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  //subir archivos

    fileSelectedHandler =event =>{
      console.log(event);
    }
  


 

 

// Conexión al backend###########
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
      <ReactBoostrap.Nav.Link >Abrir Archivo</ReactBoostrap.Nav.Link>
 
      
     
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
            <div class = "editor">
              <CodeMirror value={this.state.outputText} height="460px"  theme = "dark" align = "left"  onChange={(value, viewUpdate) => {this.setState({runCode:false, outputText : value,}) }} />
              <br/>
             <ReactBoostrap.Button variant="dark" onClick={this.runCode}>Ejecutar</ReactBoostrap.Button>{' '}

             <br/>
             </div>
            </div>
      
          </div>

          <div class ="col">
          <div class ="leftside">
          <h1>Consola</h1>
          <textarea rows = "19" cols = "100" value={this.state.value} onChange={this.handleChange}/>
          
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