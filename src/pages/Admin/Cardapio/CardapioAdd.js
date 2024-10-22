
import Sidebar from '../../../components/Sidebar/Sidebar';

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const CardapioAdd = () => {
    return (
        <Sidebar>
            <h1 className='mb-3'>Adicionar produto</h1>

            <Form>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Nome do produto</Form.Label>
                        <Form.Control placeholder="Coloque o nome do novo produto" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Imagem do produto</Form.Label>
                        <Form.Control type="file" />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Descrição</Form.Label>
                    <Form.Control as="textarea" rows={4} />
                </Form.Group>


                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>Categoria</Form.Label>
                        <Form.Select defaultValue="Choose...">
                            <option>Escolha a categoria</option>
                            <option>Pizza</option>
                            <option>Sobremesa</option>
                            <option>Bebida</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>Sub Vategoria</Form.Label>
                        <Form.Select defaultValue="Choose...">
                            <option>Escolha a sub categoria</option>
                            <option>Pequena</option>
                            <option>Média</option>
                            <option>Grande</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Preço</Form.Label>
                        <Form.Control
                            type="text"
                            inputMode="numeric"
                            placeholder="Digite o valor"
                        />
                    </Form.Group>
                </Row>


                <Button variant="primary" type="submit">
                    Adicionar
                </Button>
            </Form>
        </Sidebar>
    )
}
export default CardapioAdd;