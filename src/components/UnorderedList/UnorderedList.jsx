const UnorderedList = ({data, Component, style}) => {
    return (
        <ul className={`${style.parent}`}>
            <List data = {data} Component = {Component} style={style.child}/>
        </ul>
     );
}

export const List = ({data, Component, style}) =>{

    const listItem = (list) => {

        return list.map(item =>{

            return(
                <li key={item.id} className={`${style}`}>
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