import { useCallback, useState } from "react"

function Accordion({ items }) {
    const [accordions, setAccordions] = useState(items.map(item => {
        return {
            ...item,
            open: false
        }
    }))
    const handleOpen = useCallback((index) => {
        accordions[index].open = !accordions[index].open
        setAccordions([...accordions])
    })
    return (
        <div className="accordion-group">
            {accordions.map((accordion, i) => {
                return (<div className="accordion" key={i}>
                    <a className="accordion-trigger" onClick={() => handleOpen(i)}>
                        {accordion.title}
                        <img src={accordion.open ? "/up.svg" : "/down.svg"} />
                    </a>
                    <div className={"accordion-body " + (accordion.open ? 'open' : '')}>
                        <div>{accordion.content}</div>
                    </div>
                </div>);
            })
            }
        </div>
    )
}


export default Accordion