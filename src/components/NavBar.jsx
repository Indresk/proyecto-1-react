import CarWidget from "./CartWidget"

function NavBar({pages}){
    const pageHeadline = {
        fontWeight: 'bold',
        fontSize: 24
    };

    return(
        <div className="flex jc-a ai-c p-2">
            <div className="flex jc-a ai-c fd-c">
                <p className="taccent" style={pageHeadline}>Doña Juana</p>
                <p>Tienda de Jabones</p>
            </div>
            <nav>
                <ul className="navItems flex g-1">
                    <li><a href={pages.home.url}>{pages.home.nombre}</a></li>
                    <li><a href={pages.productos.url}>{pages.productos.nombre}</a></li>
                    <li><a href={pages.conocenos.url}>{pages.conocenos.nombre}</a></li>
                    <li><a href={pages.contacto.url}>{pages.contacto.nombre}</a></li>              
                </ul>
            </nav>
            <div className="icon">
                <CarWidget/>
            </div>
        </div>
    )
}

export default NavBar