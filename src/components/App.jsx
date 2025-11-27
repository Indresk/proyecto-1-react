import NavBar from "../NavBar"
import ItemListContainer from "./ItemListContainer"

function App() {
    const pages = {
      home:{nombre:'home',url:'/'},
      productos:{nombre:'productos',url:'/productos'},
      conocenos:{nombre:'conócenos',url:'/conocenos'},
      contacto:{nombre:'contacto',url:'/contacto'}
    }

  const categoriasProductos = [
    "Jabones de barra",
    "Jabones líquidos",
    "Jabones antibacteriales",
    "Jabones artesanales",
    "Jabones humectantes",
    "Jabones neutros",
    "Jabones para afeitar",
    "Jabones exfoliantes",
    "Jabones perfumados",
    "Jabones ecológicos"
  ];

    return (
    <div>
      <NavBar pages={pages}/>
      <div className="flex jc-c">
        <ItemListContainer clases="col-3 col-lg-6 p-2" categorias={categoriasProductos}/>
        <div className="col-p60 col-lg-p80">
        </div>
      </div>
    </div>
  )
}

export default App
