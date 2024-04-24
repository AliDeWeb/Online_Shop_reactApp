import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

// React Router
import { Link } from "react-router-dom";

// Axios
import { postFavoriteProduct } from "../../configs/axios/axiosConfigs";

// Hooks
import useUserToken from "../../hooks/useUserToken/useUserToken";

export default function FavsProductBox(props) {
  const { userToken } = useUserToken();

  return (
    <Card sx={{ maxWidth: 345 }} className="bg-transparent font-dana">
      <Link
        to={`/product/${props.href}`}
        className="h-[200px] flex items-center object-contain transition-all hover:scale-95"
      >
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image={`${props.cover}`}
          className="h-[200px] flex items-center object-contain"
        />
      </Link>
      <CardContent>
        <Typography gutterBottom variant="h10" component="div">
          <Link
            to={`/product/${props.href}`}
            className="transition-all hover:scale-95 font-danaBold text-zinc-700 line-clamp-1"
          >
            {props.title}
          </Link>
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          className="text-gray-400 font-dana line-clamp-4"
        >
          {props.decs}
        </Typography>
      </CardContent>
      <CardActions>
        <Link
          to={`/product/${props.href}`}
          size="small"
          className="text-zinc-700 text-sm font-danaBold mb-[13px] inline-block ml-2 mr-4"
        >
          مشاهده
        </Link>
        <Button
          onClick={() => {
            postFavoriteProduct({
              headers: {
                Authorization: `Bearer ${userToken}`,
              },
              url: `/${props.id}`,
            }).then(() => {
              props.refetch();
            });
          }}
          size="small"
          className="text-red-400"
        >
          حذف
        </Button>
      </CardActions>
    </Card>
  );
}
