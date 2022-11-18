const Card = ({src, title, body, price}) => {
    return ( 
        <div className="card border-0 mb-5">
            <img src={ src } className="img-fluid rounded" alt="hello" style={{maxHeight: "400px", objectFit: "cover"}} />
            <div className="mt-3">
                <h5 className="card-title">{ title }</h5>
                <p className="card-text"> { body } </p>
                <hr style={{color: "#00000070"}} />
                <div className="d-flex align-items-center justify-content-between">
                    <div>
                        <span>{ price }</span>
                    </div>
                    <a href="#" className="btn btn-primary">add to cart</a>
                </div>
            </div>
        </div>
     );
}
 
export default Card;