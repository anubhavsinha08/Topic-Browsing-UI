import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function TopicCard({topics}) {
  return (
    <Card  style={{width:"70rem",height:"20rem",}} >
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            <h1> {topics.id}</h1>
          <p style={{fontSize:"large"}}>NAME: {topics.name.toUpperCase()}</p>
          <p style={{fontSize:"large"}}>CATEGORY: {topics.category.toUpperCase()}</p>
          
        </Typography>
      </CardContent>
    </Card>
  );
}
