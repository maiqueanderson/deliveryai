
import './AddCart.css'
const AddCart = () => {
    return (
        <>
            <div className="py-4 border border-border rounded cardCart textCart">
                <h2>Gostaria de Adicionar uma bebida?</h2>
                <div className='btnADD'>

                <button className="catButton p-2 m-2 rounded">
                    Adicionar Bebida
                </button>
                </div>
            </div>
        </>
    )
}

export default AddCart;