const SecondsCounter = (props) => {
    const formattedSeconds = props.seconds.toString().padStart(6, "0")
    const digits = formattedSeconds.split("");
    return (
        <div className="container d-flex justify-content-center align-items-center bg-dark text-light border mt-3 p-3">
            <i id="clock" className="fa-regular fa-clock"></i>
            {digits.map((digit, index) => (
                <div key={index} className="digit">
                    {digit}
                </div>
            ))}
        </div>
    );
};
export default SecondsCounter;