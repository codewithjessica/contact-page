import "./LinkButtons.css";


interface LinkButtonProps {
    url: string;
    label: string;
 }
 

const LinkButtons = ({url, label}: LinkButtonProps) => {
  return (
    <div>
        <a href={url} target="_blank">
        <button className="button">{label}</button>
        </a>
    </div>
  )
}

export default LinkButtons