//react
import { useContext } from 'react';
import { SelectedItems } from "../App";

//internal components
import { ItemCard } from './CardComponents';

//style
import '../style/utils.css';

function FilterItems() {
    const tagsContext = useContext(SelectedItems);
    if(!tagsContext) {
        throw new Error("Context did not pass");
    }
    const { selectedItems, setSelectedItems } = tagsContext;

    function Items() {
        if(selectedItems.length == 0) {
            return(
                <ItemCard item='All Selected'/>
            );
        }
        return(
            <>
                {selectedItems.map(item => {
                    return <ItemCard item={item}/>
                })}
            </>
        );
    }

    return(
        <div className='flex-center'>
            <Items/>
        </div>
    );
}

export default FilterItems;