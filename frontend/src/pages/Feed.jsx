import React, {Component} from 'react'
import api from '../services/api'

import './Feed.css'
import more from '../assets/images/more.svg'
import like from '../assets/images/like.svg'
import send from '../assets/images/send.svg'
import comment from '../assets/images/comment.svg'

class Feed extends Component{

    state = {
        feed: [],
    }

    async componentDidMount(){
        //try{
            let response = await api.get('posts')

            this.setState({ feed: response.data })
        //}
    }
    render() {
        return (
            <section id="post-list">
                { this.state.feed.map( post => {
                    
                }) }
                <article>
                    <header>
                        <div className="user-info">
                            <span>Vitor Alves</span>
                            <span className="place">Osasco</span>
                        </div>
                        <img src={more} alt="Mais" />
                    </header>

                    <img src="http://localhost:3333/files/module-6.jpg" alt="imagem" />

                    <footer>
                        <div className="actions">
                            <img src={like} alt="like"/>
                            <img src={comment} alt="Comentário"/>
                            <img src={send} alt="Enviar"/>
                        </div>

                        <strong>900 curtidas</strong>

                        <p>
                            Um Post qualquer por ai champs
                            <span>#react #top</span>
                        </p>
                    </footer>
                </article>
            </section>
        )
    }
}

export default Feed