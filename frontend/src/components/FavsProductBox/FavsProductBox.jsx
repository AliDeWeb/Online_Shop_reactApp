import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

// React Router
import { Link } from "react-router-dom";

export default function FavsProductBox() {
  return (
    <Card sx={{ maxWidth: 345 }} className="bg-transparent font-dana">
      <Link className="h-[200px] flex items-center object-contain transition-all hover:scale-95">
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image="https://ma-api.liara.run/uploads/products/covers/1710436879338.846.webp"
          className="h-[200px] flex items-center object-contain"
        />
      </Link>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <Link className="transition-all hover:scale-95 font-danaBold text-zinc-700">Lizard</Link>
        </Typography>
        <Typography variant="body2" color="text.secondary" className="text-gray-400 font-dana">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Link size="small" className="text-zinc-700 text-sm font-danaBold mb-[13px] inline-block ml-2 mr-4">
          مشاهده
        </Link>
        <Button size="small" className="text-red-400">
          حذف
        </Button>
      </CardActions>
    </Card>
  );
}
