import { Dialog, DialogContent, DialogTitle, Box } from "@mui/material";
import React from "react";
import IconInText from "@/pages/IconInText";

interface GameRulesModalProps {
    open: boolean;
}

const ModalGameRules: React.FC<GameRulesModalProps> = ({ open}) => {
    return (
        <Dialog open={open} slotProps={{
            paper: {
                sx: {
                    backgroundImage: 'url(/assets/textures/wooden_desk_01.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    color: 'white',
                    backgroundBlendMode: 'darken',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }}>
            <DialogTitle>Pravidla hry Hnefatafl</DialogTitle>
            <DialogContent>
                <Box sx={{
                    maxHeight: '400px',
                    overflowY: 'auto',
                    paddingRight: 2
                }}>
                    <div className="space-y-4 text-sm leading-relaxed">
                        <p> Hru hrají dva hráči:</p>
                        <ul className="list-disc list-inside ml-4">
                            <li><strong>Král <IconInText figure="odin"/> a obránci <IconInText figure="viking"/> (vikingové)</strong></li>
                            <li><strong>Útočníci <IconInText figure="beast"/> (monstra)</strong></li>
                        </ul>

                        <p><strong>Cíl hry</strong></p>
                        <ul className="list-disc list-inside ml-4">
                            <li>Král <IconInText figure="odin"/> se snaží utéct do jednoho z rohů <IconInText figure="exit"/> hrací desky.</li>
                            <li>Útočníci <IconInText figure="beast"/> se snaží krále obklíčit ze 4 stran.</li>
                        </ul>

                        <p><strong>Pohyb figur</strong></p>
                        <ul className="list-disc list-inside ml-4">
                            <li>Figurky se pohybují jako věž v šachu – vodorovně a svisle.</li>
                            <li>Nesmí přeskočit jiné figury.</li>
                            <li>Mohou přeskočit trůn <IconInText figure="throne"/> (viz dále).</li>
                        </ul>

                        <p><strong>Zajímání</strong></p>
                        <ul className="list-disc list-inside ml-4">
                            <li>Figura je zajata, pokud je sevřena mezi dvěma nepřáteli.</li>
                            <li>Král je zajat při obklíčení ze 4 stran.</li>
                        </ul>

                        <p><strong>Speciální pole</strong></p>
                        <ul className="list-disc list-inside ml-4">
                            <li>Střed (trůn) <IconInText figure="throne"/> a rohy <IconInText figure="exit"/> jsou speciální – běžné figury tam nesmí.</li>
                            <li>Král začíná uprostřed a utíká do rohu <IconInText figure="exit"/>.</li>
                            <li>Trůn <IconInText figure="throne"/> se objeví uprostřed hrací desky poté, co Král <IconInText figure="odin"/> opustí svou počáteční pozici.</li>
                        </ul>
                    </div>
                </Box>
            </DialogContent>
        </Dialog>
    );
};

export default ModalGameRules;
