const Card = ({src, title, body, price, addCart, cart}) => {


    const excerpt = (text) => {
       return text.substring(0, 100)
    }
    return ( 
        <div className="card border-0 mb-5 mx-3">
            <img src={ src } className="img-fluid rounded" alt="hello" style={{ width: "200px"}} />
            <div className="mt-3">
                <h5 className="card-title text-truncate">{ title }</h5>
                <p className="card-text"> { excerpt(body) }  ...</p>
                <hr style={{color: "#00000070"}} />
                <div className="d-flex align-items-center justify-content-between">
                    <div>
                        <span className="fw-bold">$ { price }</span>
                    </div>
                    <button onClick={() => addCart(cart)} className="btn btn-primary">add to cart</button>
                </div>
            </div>
        </div>
     );
}
 
export default Card;