import Dropdown from 'react-bootstrap/Dropdown';

function Select() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Géneros
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {/* Aqui tiene que ir la logica para pasarle los generos, pero no se como hacerla */}
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
  </Dropdown>
);

}

export default Select