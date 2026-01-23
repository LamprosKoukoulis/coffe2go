import { useEffect } from "react";
import{useView} from "../components/ViewContext"

export default function TiredAlert({ onClose }) {
    useEffect(() => {
    // const audio = new Audio("/alert.mp3");
    // audio.play();
    }, []);
    const {setView} = useView();

    return (
    <div style={overlay}>
        <div style={modal}>
        <h2>Σκεφτείτε μήπως θέλετε καφέ</h2>

        <button onClick={() => setView("openShop")}>
            Μετάβαση στο Shop
        </button>

        <button onClick={onClose}>Κλείσιμο</button>
        </div>
    </div>
    );
}

const overlay = {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.8)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
};

const modal = {
//   background: "white",
    padding: 24,
    borderRadius: 12,
    textAlign: "center",
};
