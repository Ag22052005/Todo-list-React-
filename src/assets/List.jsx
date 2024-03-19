import proptypes from 'prop-types'
function List(props){
    const friends = props.items;

    // const HighMarks = friends.filter(friend => friend.marks>90)
    // const LowMarks = friends.filter(friend => friend.marks<=90)

    // const sortaplhabeticalASC = friends.sort((a,b)=> a.name.localeCompare(b.name));
    // const sortaplhabeticalDESC = friends.sort((a,b)=> b.name.localeCompare(a.name));

    // const sortbyASC = friends.sort((a,b)=> a.marks - b.marks)
    // const sortbyDESC = friends.sort((a,b)=> b.marks - a.marks)


    const List = friends.map(item => <li key={item.rank}> 
                                    {item.name} : &nbsp; 
                                    {item.marks} 
                                    </li>)
    

    return (<><h1>{props.category}</h1><b><ol>{List}</ol></b></>);
}
List.defaultProps = {
    category : "Category",
    items : [],
}
List.Proptypes = {
    category : proptypes.string,
    items : proptypes.arrayOf(proptypes.shape({rank:proptypes.number,name:proptypes.string,marks:proptypes.number}))
}

export default List;