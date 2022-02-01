import './App.css';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

function Queue(props) {
    const students = props.queue.map(student=>{
        return <ListItem>{student}</ListItem>
    })
    
    return (
        <List>
            {students}
        </List>
    )
}

export default Queue;
