import '../Styles/Car.css'

function Car() {
  return (
    <>
      <main>
        <div className='bg-violet my-car'>
          <div className='title'>
            <h1>Mi carrito</h1>
          </div>
          <div className='data-game'>
            <div>
              <img src="" alt="Imagen del juego" />
            </div>
            <div>
              <h3>Nombre del Juego</h3>
            </div>
            <div>
              <button>Borrar</button>
            </div>
          </div>
        </div>
        <div className='bg-violet my-summary'>
          <div>
            <h1>Resumen</h1>
          </div>
          <div>
            <button>Finalizar compra</button>
          </div>
          <div>
            <p>Cantidad de Producto - Costo del prodcuto por cantidad</p>
          </div>
          <div>
            <p>Total</p>
          </div>
        </div>
      </main>
    </>
  )
}

export default Car
