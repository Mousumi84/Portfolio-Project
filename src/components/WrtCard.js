function WrittingCard({nm,img,year,head}) {


    return (
        <>
            <div  id={nm} className="wtcrd">
                <img className="img" src={img} />
                <div className="wrtcardright">
                    <div className="year">{year}</div>
                    <div className="head">{head}</div>
                </div>
            </div>
        </>
    )

}

export default WrittingCard ;