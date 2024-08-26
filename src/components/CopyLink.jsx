import copy from "../assets/copy.svg"

function CopyLink(link) {

    function copyURL() {
        navigator.clipboard.writeText(link)
    }

    return (
        <img src={copy} className="copy" onClick={copyURL}/>
    )
}

export default CopyLink
