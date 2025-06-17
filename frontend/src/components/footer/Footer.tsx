
const Footer = () => {
    return (
        <footer>
            <div
            style={{
                    width: "100%",
                    padding:20,
                    minHeight: "20vh",
                    maxHeight: "30vh",
                    marginTop: 50,
                }}
            >
            <p style={{fontSize:"30px", textAlign:"center"}}>
                My own ChatGPT = 
                <span>
                    <link 
                    style={{ color:"white" }}
                    className="nav-link"
                    >
                        Note-GPT
                    </link>
                </span>
            </p>
            </div>
        </footer>
    );
};
export default Footer;