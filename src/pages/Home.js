import Card from "../components/Card";

const Home = () => {
    return ( 
        <div className="row">
            <div className="col-12">
                <div className="py-5 text-center">
                    <div className="row py-lg-5">
                    <div className="col-lg-6 col-md-8 mx-auto">
                        <h1 className="fw-light">Shopping example</h1>
                        <p className="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>
                        <p>
                        <a href="#" className="btn btn-primary my-2 me-2">Main call to action</a>
                        <a href="#" className="btn btn-secondary my-2">Secondary action</a>
                        </p>
                    </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-lg-4">
                        <Card price="300" src="https://images.unsplash.com/photo-1668689541213-fe0d30af7af6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" title="HELLO" 
                        body="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia aliquam doloribus, consectetur quibusdam, sequi alias excepturi similique assumenda, corporis adipisci quia soluta quod? Harum, atque. Voluptatibus consectetur vero incidunt eum!"/>
                    </div>
                    <div className="col-12 col-lg-4">
                        <Card price="300" src="https://images.unsplash.com/photo-1668689541213-fe0d30af7af6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" title="HELLO" 
                        body="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia aliquam doloribus, consectetur quibusdam, sequi alias excepturi similique assumenda, corporis adipisci quia soluta quod? Harum, atque. Voluptatibus consectetur vero incidunt eum!"/>
                    </div>
                    <div className="col-12 col-lg-4">
                        <Card price="300" src="https://images.unsplash.com/photo-1668689541213-fe0d30af7af6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" title="HELLO" 
                        body="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia aliquam doloribus, consectetur quibusdam, sequi alias excepturi similique assumenda, corporis adipisci quia soluta quod? Harum, atque. Voluptatibus consectetur vero incidunt eum!"/>
                    </div>
                    <div className="col-12 col-lg-4">
                        <Card price="300" src="https://images.unsplash.com/photo-1668689541213-fe0d30af7af6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" title="HELLO" 
                        body="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia aliquam doloribus, consectetur quibusdam, sequi alias excepturi similique assumenda, corporis adipisci quia soluta quod? Harum, atque. Voluptatibus consectetur vero incidunt eum!"/>
                    </div>
                    <div className="col-12 col-lg-4">
                        <Card price="300" src="https://images.unsplash.com/photo-1668689541213-fe0d30af7af6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" title="HELLO" 
                        body="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia aliquam doloribus, consectetur quibusdam, sequi alias excepturi similique assumenda, corporis adipisci quia soluta quod? Harum, atque. Voluptatibus consectetur vero incidunt eum!"/>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Home;