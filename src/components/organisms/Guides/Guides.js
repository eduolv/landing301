import { Card, CardMedia, CardContent, Typography } from "@mui/material";

const cardData = [
  {
    title: "Lorem ipsum",
    subtitle: "Lorem ipsum dolor sit amet sit amet",
    image: "/images/squeeze.png",
  },
  {
    title: "Lorem ipsum",
    subtitle: "Lorem ipsum dolor sit amet",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "Lorem ipsum",
    subtitle: "Lorem ipsum dolor sit amet",
    image: "https://via.placeholder.com/150",
  },
];

const Guides = () => {
  return (
    <div className="w-full">
      <div className="relative flex flex-col px-5 mx-auto space-y-5 md:w-3/4">
        <div className="flex flex-col items-center">
          <h6 className="font-bold text-center text-blue-600 uppercase">
            Exemplo
          </h6>
          <h2 className="text-4xl font-bold text-center">
            <span className="block">Lorem ipsum dolor</span>
          </h2>
          <p className="text-center text-gray-600">
            Lorem ipsum dolor sit amet
          </p>
        </div>
        <div className="grid grid-cols-1 gap-10 py-10 md:grid-cols-3">
          {cardData.map((card, index) => (
            <Card
              key={index}
              className="p-3 bg-white shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition"
              sx={{
                borderRadius: 2,
                maxWidth: 250,
                boxShadow: "5px 5px 15px rgba(0, 0, 0, 0.3)",
                position: "relative",
              }}
            >
              <CardMedia
                component="img"
                image={card.image}
                alt={card.title}
                sx={{
                  height: 200,
                  borderRadius: 1,
                  marginBottom: 1,
                  borderBottom: "solid 8px #ffffff",
                }}
              />
              <CardContent sx={{ textAlign: "center", paddingBottom: "8px" }}>
                <Typography variant="h6" sx={{ fontSize: 16, fontWeight: "bold" }}>
                  {card.title}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Guides;
