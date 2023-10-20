
export function PortfolioList ({portfolioList}) {

    return(

        <ul>
            {portfolioList.map((work, index) => <li key={index}>{work}</li>)}
        </ul>
    )
}