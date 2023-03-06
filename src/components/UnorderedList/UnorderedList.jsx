const UnorderedList = ({data, Component, styleElement, role}) => {

    return (
        <ul className={`${styleElement === undefined ? " " : styleElement.parent}`}>
            <List
            data = {data}
            Component = {Component}
            styleElement={styleElement === undefined ? " " : styleElement.child}
            role={role}/>
        </ul>
     );
}

export const List = ({data, Component, styleElement, role}) =>{

    const listItem = (list) => {

        if(role === undefined){

            return list.map(item =>{
    
                return(
                    <li key={item.id} className={`${styleElement}`}>
                        <Component {...item}/>
                    </li>
                )
            })
        }
        return list.map(item =>{

            return(
                <li key={item.id} className={`${styleElement}`} role={role}>
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