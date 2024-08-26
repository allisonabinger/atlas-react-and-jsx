import open from "../assets/open.svg"

function OpenLink(link) {
    return (
        <a href={link} target="_blank"><img src={open}/></a>
    )
}

export default OpenLink
