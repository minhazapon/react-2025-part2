
function ButterDetails({ butter }) {

    const { id, image, name, details } = butter

    return (
        <div>
            <div className="card card-compact bg-base-100 w-96 h-[450px] border-[1px]">
                <figure>
                    <img className=" h-[250px] w-full "
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title"> {name} </h2>
                    <p> {details} </p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ButterDetails
