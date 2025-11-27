import ListaCategorias from "./ItemListGenerator"

function ItemListContainer({clases,categorias}){
    const estilosDeLista = {
        backgroundColor: '#414141ff',
        borderRadius: '6px',
        border: 'solid 1px #6b6b6b'
    }

    console.log(categorias)

    return(
        <aside style={estilosDeLista} className={clases}>
            <h3 className="mb-2">Categorías</h3>
            <ListaCategorias categoriasProductos={categorias}/>
        </aside>
    )
}

export default ItemListContainer