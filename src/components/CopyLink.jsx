import copy from "../assets/copy.svg"

function CopyLink(props) {

    function copyURL() {
        navigator.clipboard.writeText(props.link)
        // console.log(props.link)
    }

    return (
        <img src={copy} className="copy" onClick={copyURL}/>
    )
}

export default CopyLink
