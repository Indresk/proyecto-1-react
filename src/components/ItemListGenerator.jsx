function ListaCategorias({categoriasProductos}) {
  return (
    <ul className="categorias flex g-2 fd-c">
      {categoriasProductos.map((categoria, index) => (
        <li>
            <input type="checkbox" name="" id={index} />
            <label className="ml-1">{categoria}</label>
        </li>
      ))}
    </ul>
  );
}

export default ListaCategorias