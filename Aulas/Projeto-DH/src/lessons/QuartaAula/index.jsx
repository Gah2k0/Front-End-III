import './style.scss'
import youtubeImage  from '../../assets/youtube.png';

export function QuartaAula() {

    const componentsFinded = [ 
        { 
            title: "Vídeo component",
            image: youtubeImage,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        },
        { 
            title: "Teste component",
            image: youtubeImage,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        }
    ];

    return(
        <div className="quarta-aula-component">
            <h1 className="main-title">Componentes Identificados</h1>

            <ul className='components-finded'>
                { componentsFinded.map( component => 
                        <li>
                            <img src={component.image} alt="" />
                            <h1>{component.title}</h1>
                            <p>{component.text}</p>
                        </li>
                    )
                }
            </ul>

        </div>
    )

}