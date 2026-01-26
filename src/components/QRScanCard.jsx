import { Paper, Typography, Button } from "@mui/material";
import { useView } from "./ViewContext";

export default function QRScanCard({ onScan }) {
  const {setRoute} =useView();
  const mockScan=() => {
    setRoute({
      busId: "040",
      routeName: "Piraeus → Syntagma",
      stops: ["ΒΕΝΙΖΕΛΟΥ",
                "ΕΥΑΓΓΕΛΙΣΤΡΙΑ",
                "ΤΖΑΒΕΛΛΑ",
                "17η ΣΤΑΣΗ",
                "ΗΣΑΠ Ν.ΦΑΛΗΡΟΥ",
                "ΑΚΤΑΙΟΝ",
                "ΓΥΜΝΑΣΙΟ",
                "ΜΑΡΚΟΜΙΧΕΛΑΚΕΙΟ",
                "ΠΕΙΣΙΣΤΡΑΤΟΥ",
                "ΙΖΟΛΑ",
                "ΠΥΡΟΣΒΕΣΤΙΚΗ",
                "ΑΓΙΑ ΕΛΕΟΥΣΑ",
                "Κ.Ε.Α.Τ. ΠΡ.ΟΙΚΟΣ ΤΥΦΛΩΝ",
                "ΣΚΡΑ",
                "ΠΛ.ΔΑΒΑΚΗ",
                "ΑΓ.ΠΑΝΤΕΣ",
                "ΑΓ.ΠΑΝΤΩΝ",
                "2η ΑΓ.ΠΑΝΤΩΝ",
                "1η ΧΑΡΟΚΟΠΟΥ",
                "ΠΑΠΑΣΠΥΡΟΥΑΓ.ΣΩΣΤΗΣ",
                "ΠΑΝΤΕΙΟΣ",
                "ΓΕΦΥΡΑ",
                "ΟΛΥΜΠΙΑΚΗ",
                "ΣΤ.ΣΥΓΓΡΟΥ-ΦΙΞ",
                "ΜΑΚΡΥΓΙΑΝΝΗ",
                "ΣΥΝΤΑΓΜΑ"],
      nextStop: "ΤΖΑΒΕΛΛΑ",
      etaWindow: "10–15 minutes",
    });
  };

  return (
    <Paper sx={{ p: 3, textAlign: "center" }}>
      <Typography variant="h6" mb={2}>
        Scan your ticket QR code
      </Typography>

      <Typography variant="body2" color="text.secondary" mb={3}>
        The route must be identified before ordering coffee
      </Typography>

      <Button variant="contained" onClick={mockScan}>
        Scan QR
      </Button>
    </Paper>
  );
}
