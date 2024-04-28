function ExperianceCard({nm,date,head,role,details,links,chips}) {


    return (
        <>
            <div  id={nm} className="excrd">
                <div className="date">{date}</div>
                <div className="expcrdright">
                    <div className="head">{head}</div>
                    {role && <div className="role">{role}</div>}
                    <p className="details">{details}</p>
                    {links && <div className="links">
                        {
                            links.map(index => {

                                return <span>{index}</span>;
                            })
                        }
                    </div>}
                    {chips && <div className="chips">
                        {
                            chips.map(index => {
                                
                                return <span>{index}</span>;
                            })
                        }
                    </div>}
                </div>
            </div>
        </>
    )

}

export default ExperianceCard;
