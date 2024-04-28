function ProjectCard({nm,img,head,details,chips,rate}) {


    return (
        <>
            <div  id={nm} className="pjcrd">
                <img className="img" src={img} />
                <div className="prjcardright">
                    <div className="head">{head}</div>
                    <p className="details">{details}</p>
                    {rate && <div className="rate">{rate}</div>}
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

export default ProjectCard ;