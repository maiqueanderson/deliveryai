import Table from 'react-bootstrap/Table';
import Sidebar from '../../../components/Sidebar/Sidebar';


const CardapioAlterar = () =>{
    return(
       <Sidebar>
        <h1 className='mb-3'>Alterar um produto</h1>
            <Table striped bordered hover>
      <thead>
        <tr>
          <th>Produto</th>
          <th>Categoria</th>
          <th>Alterar</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Mark</td>
          <td>Otto</td>
          <td>Alterar</td>
        </tr>
        <tr>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>Alterar</td>
        </tr>
        <tr>
          <td >Larry the Bird</td>
          <td>Otto</td>
          <td>Alterar</td>
        </tr>
      </tbody>
    </Table>
       </Sidebar>
    )
}

export default CardapioAlterar;
