const UnorderedList = ({data, Component}) => {
    return (
        <ul>
            <List data = {data} Component = {Component}/>
        </ul>
     );
}

const List = ({data, Component}) =>{

    const listItem = (list) => {

        return list.map(item =>{

            return(
                <li key={item.id}>
                    <Component {...item}/>
                </li>
            )
        })
    }

    return(
        <>
            {

                listItem(data)

            }

        </>
    )
}
export default UnorderedList;