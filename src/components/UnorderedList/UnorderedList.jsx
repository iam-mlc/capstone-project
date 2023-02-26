const UnorderedList = ({data, Component, styleElement}) => {

    return (
        <ul className={`${styleElement === undefined ? "" : styleElement.parent}`}>
            <List
            data = {data}
            Component = {Component}
            styleElement={styleElement === undefined ? "" : styleElement.child}/>
        </ul>
     );
}

export const List = ({data, Component, styleElement}) =>{

    const listItem = (list) => {

        return list.map(item =>{

            return(
                <li key={item.id} className={`${styleElement}`}>
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