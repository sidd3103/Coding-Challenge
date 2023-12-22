import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

import { Community } from "../types/Community";

const default_img_address =
  "https://www.vmcdn.ca/f/files/via/images/sponsored-content-images/kitsilano-block-4.jpg;w=960";

const CommunityCard = ({
  community,
  avgPrice,
}: {
  community: Community;
  avgPrice: number;
}) => {
  return (
    <div className="my-4">
      <Card
        sx={{
          maxWidth: 345,
          minWidth: 345,
          minHeight: 300,
          backgroundColor: "#3a3b3c",
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={community.imgUrl ? community.imgUrl : default_img_address}
            // alt="green iguana"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ color: "white" }}
            >
              {community.name}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ color: "white" }}
            >
              {community.group}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ color: "white" }}
            >
              Average House Price :{" "}
              {avgPrice ? `$ ${avgPrice}` : "No Data Available"}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default CommunityCard;
