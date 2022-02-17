import imgDefault from "../../../Assets/img/LaPiscine_222x40.png";


interface Education {
    establishment: string,
    logo: string,
    description?: string,
    exam?: string
}

const Education: React.FC<Education> = ({ establishment, logo, description, exam }) => {
    console.log(establishment, logo);

    return (
        <>
            <div className="card custom-about-container mb-3">
                <div className="row g-0">
                    <div className="col-md-3 bg-light">
                        <img src={imgDefault} alt="" className="img-fluid rounded-start" />
                    </div>
                    <div className="col-md-9">
                        <div className="card-body">
                            <h5 className="card-title">{establishment}</h5>
                            <p className="card-text">Description : {description}</p>
                            <p className="card-text">Diplôme : {exam}</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Education;