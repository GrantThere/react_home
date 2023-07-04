

const CharFromRick = (props) => {
    const {id, name, status, type, gender , alt, image} = props;
    return (
        <div>
            <div>
                <div>{id}</div>
                <div>{name}</div>
                <div>{status}</div>
                <div>{type}</div>
                <div>{gender}</div>
            </div>
            <div>
                <img src={image} alt={alt}/>
            </div>
        </div>

    )
}

export default CharFromRick;