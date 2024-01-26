import { useLocation, useNavigate } from "react-router-dom";
import Accordion from "../Accordion";

const items = [
    {
        title: 'LOREM IPSUM',
        content: 'Proin sed massa laoreet, viverra dolor vitae, sodales ipsum. Sed quis massa pulvinar justo interdum tempor. Maecenas lobortis tristique massa, sit amet malesuada elit dignissim ut.'
    },
    {
        title: 'LOREM IPSUM',
        content: 'Proin sed massa laoreet, viverra dolor vitae, sodales ipsum. Sed quis massa pulvinar justo interdum tempor. Maecenas lobortis tristique massa, sit amet malesuada elit dignissim ut.'
    },
    {
        title: 'LOREM IPSUM',
        content: 'Proin sed massa laoreet, viverra dolor vitae, sodales ipsum. Sed quis massa pulvinar justo interdum tempor. Maecenas lobortis tristique massa, sit amet malesuada elit dignissim ut.'
    },
    {
        title: 'LOREM IPSUM',
        content: 'Proin sed massa laoreet, viverra dolor vitae, sodales ipsum. Sed quis massa pulvinar justo interdum tempor. Maecenas lobortis tristique massa, sit amet malesuada elit dignissim ut.'
    },
    {
        title: 'LOREM IPSUM',
        content: 'Proin sed massa laoreet, viverra dolor vitae, sodales ipsum. Sed quis massa pulvinar justo interdum tempor. Maecenas lobortis tristique massa, sit amet malesuada elit dignissim ut.'
    },
    {
        title: 'LOREM IPSUM',
        content: 'Proin sed massa laoreet, viverra dolor vitae, sodales ipsum. Sed quis massa pulvinar justo interdum tempor. Maecenas lobortis tristique massa, sit amet malesuada elit dignissim ut.'
    },
    {
        title: 'LOREM IPSUM',
        content: 'Proin sed massa laoreet, viverra dolor vitae, sodales ipsum. Sed quis massa pulvinar justo interdum tempor. Maecenas lobortis tristique massa, sit amet malesuada elit dignissim ut.'
    }
]

function AccordionPage() {
    const navigate = useNavigate();
    return (
        <div className={`wrapper accordion-page`}>
            <div className="burger">
                <img className="mx-auto" src="burger.svg"/>
            </div>
            <div className={`sidebar accordion-page`}>
                <h1>Nulla imperdiet</h1>

                Vestibulum dapibus hendrerit nibh ut ornare.

                <div className="highlight">

                    Vestibulum dapibus hendrerit nibh ut ornare.
                    Vestibulum dapibus hendrerit nibh ut ornare.
                    Vestibulum dapibus hendrerit nibh ut ornare.
                </div>
            </div>
            <div className='page-body'>
                <Accordion items={items} />
            </div>

            <div className="controls">
                <button onClick={() => {
                    navigate('/home-topic')
                }} className="back">
                    <img src="chev-left.svg"/> Back
                </button>
                <button onClick={() => {
                    navigate('/')
                }} className="next">
                   <img src="chev-right.svg"/> Next
                </button>
            </div>

        </div>
    )
}

export default AccordionPage
