import '../App.css';

function Footer(){
  let year = new Date().getFullYear()
  return(
    <div className="footer">
      <p>{year}</p>
    </div>
  )
}

export default Footer;
