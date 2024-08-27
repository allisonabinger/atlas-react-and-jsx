import OpenLink from "./OpenLink";
import CopyLink from "./CopyLink";

function HelpfulResource(props) {

    // console.log(props.label);
    // console.log(props.link);

  return (
    <div className="helpful-resource">
      {props.label}
        <OpenLink link={props.link} />
        <CopyLink link={props.link} />
    </div>
  );
}

export default HelpfulResource;
