import "./LinkButtons.css";


interface LinkButtonProps {
    url: string;
    label: string;
 }
 

const LinkButtons = ({url, label}: LinkButtonProps) => {
  return (
    <div className="buttons">
        <a 
          href={url} 
          target="_blank"
          rel="noopener noreferrer"
          className="button"
        >
          {label}
        </a>
    </div>
  )
}

export default LinkButtons