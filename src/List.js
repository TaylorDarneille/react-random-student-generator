// import './App.css';
import { v4 as uuidv4 } from 'uuid'

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListSubheader from '@mui/material/ListSubheader';

function StudentList(props) {
    const students = props.students.map(student=>{
        return <ListItem key={uuidv4()}>{student}</ListItem>
    })
    
    return (
        <List subheader={<ListSubheader>{props.title}</ListSubheader>}>
            {students}
        </List>
    )
}

export default StudentList;
