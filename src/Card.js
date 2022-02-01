import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

function StudentCard(props) {
    return (
        <Card variant="outlined">
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                {props.title}
            </Typography>
            <Typography variant="h5" component="div">
                {props.student}
            </Typography>
        </Card>
    )
}

export default StudentCard;