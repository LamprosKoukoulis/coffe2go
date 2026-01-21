import {Link, Typography } from "@mui/material";

export default function Footer(){
    const devs=[
        {id:"Lampros Koukoulis P18081",link:"https://github.com/LamprosKoukoulis"},
        {id:"Nikolaos Maurilas P", link:"test"},
    ];
    return(
        <footer>
            <Typography variant="body2" sx={{textAlign:"center"}}>
                Made By:{" "}
                {devs.map((dev,index)=>(
                <span component="span" key={dev.id}>
                    <Link
                        href={dev.link}
                        underline="hover"
                        sx={{fontWeight: "bold"}}
                    >
                        {dev.id}
                    </Link>
                    {index < devs.length -1? " & ": ""}
                </span>
        ))}
        </Typography>
        </footer>
    )
}