import React, { Component } from 'react';
import './App.css';
import * as ReactBoostrap from "react-bootstrap";
import {Graphviz} from 'graphviz-react';
import {TransformWrapper,TransformComponent} from "react-zoom-pan-pinch";



import CodeMirror from "@uiw/react-codemirror";

var codigo = '';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      runCode: false,
      outputText:'console.log("helloWorld")',
      value:'',
      dot : `digraph { }`,
      ts : 
      "<tr>"+
        "<td colSpan=\"5\">No hay informacion</td>"+
      
      "</tr>"

    };
    this.handleChange = this.handleChange.bind(this);
    
  }

  runCode = (e) =>{
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
        this.setState({ts : JSON.parse(datitos).ts})

      });
    
  }

  generararbolast = (e) =>{
    this.setState({runCode:true})

    const data ={
      "input" : this.state.outputText
    }

    fetch('http://localhost:3100/api/recorrer',{
      method: 'POST',
      headers:{"Content-Type" : "application/json"},
      body: JSON.stringify(data)
      
    })
      .then(response => response.json())
      .then(data =>{
        var datitos = JSON.stringify(data);
        this.setState({dot : JSON.parse(datitos).ast})
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


 subirArchivo= (event)=>{
   
   var file = event.target.files[0];
   if(!file){
     return;
   }
   
   var reader = new FileReader();
   reader.onload = (event)=>{
     var contents = event.target.result;
     console.log(contents)
     codigo = contents;
     this.handleChange(event) // Para actualizar el codemirror
   
   };
  

   reader.readAsText(file);
   
   
 }
//descargar archivos

TextFile =() =>{
  const element = document.createElement("a");
  element.href=URL.createObjectURL(codigo);
  element.download = "pruebadeguardado.txt";
  document.body.appendChild(element);
  element.click();
}


// Conexi??n al backend###########
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
  <ReactBoostrap.Navbar.Brand href="#home">ORGANIZACI??N DE LENGUAJES Y COMPILADORES 1</ReactBoostrap.Navbar.Brand>
  <ReactBoostrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <ReactBoostrap.Navbar.Collapse id="responsive-navbar-nav">
    <ReactBoostrap.Nav className="me-auto">
    <ReactBoostrap.Button variant="secondary" onClick={this.runCode}>Secondary</ReactBoostrap.Button>{' '}
      <ReactBoostrap.Nav ><input  class="btn btn-secondary active" type="file" id="file-input" onChange = {this.subirArchivo} /></ReactBoostrap.Nav>
 
      
     
      <ReactBoostrap.Nav.Link href="#pricing">Guardar el Archivo</ReactBoostrap.Nav.Link>
      <ReactBoostrap.Nav.Link href="#pricing">Eliminar Pesta??a</ReactBoostrap.Nav.Link>
      
      <ReactBoostrap.NavDropdown title="Reportes" id="collasible-nav-dropdown">
        <ReactBoostrap.NavDropdown.Item href="#action/3.1">Reporte de Errores</ReactBoostrap.NavDropdown.Item>
        <ReactBoostrap.NavDropdown.Item href="#action/3.3">Reporte de Tabla de Simbolos</ReactBoostrap.NavDropdown.Item>
        <ReactBoostrap.NavDropdown.Item onClick={this.generararbolast}>Generar ??rbol AST</ReactBoostrap.NavDropdown.Item>
        
        
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
              <CodeMirror value={codigo} height="460px"  theme = "dark" align = "left"  onChange={(value,editor,data) => {this.setState({runCode:false, outputText : value}) }} />
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
      
      
      
      <ReactBoostrap.Table data ={this.state.ts} striped bordered hover variant="dark" size="sm">
      <thead>
          <tr>
            <th>Identificador</th>
            <th>Rol</th>
            <th>Tipo</th>
            <th>Ambito</th>
            <th>Parametros</th>
          </tr>
        </thead>
        <tbody dangerouslySetInnerHTML={{ __html: this.state.ts }}></tbody>
      
        
      </ReactBoostrap.Table>
      <h3 align="left" >Tabla de Errores l??xicos, Sintacticos y Sem??nticos</h3>
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
     
      



      <div className = "row" >
        <div className ="col text-center">
          <h2>Arbol AST</h2>
          <p className ="mt-3">
            <div className = "row mt-3 d-flex justify-content-center">
              <div className = "col-lg-4 text-center text-dark">
                <TransformWrapper 
                  defaultScale={1}
                  defaultPositionX={200}
                  defaultPositionY ={200} 
                >
                  <TransformComponent>
                    <Graphviz   onChange={this.handleChange} dot={this.state.dot} />
                  </TransformComponent>
                </TransformWrapper>
              </div>
            </div>
          </p>
        </div>
        
   
        
        </div>

      </div>
      
        
      
      
    );
  }
}

export default App;