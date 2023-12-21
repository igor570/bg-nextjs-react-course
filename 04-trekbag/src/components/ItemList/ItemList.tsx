import {ItemProps} from "../../lib/interfaces.ts";
import Select from "react-select";
import {sortOptions} from "../../lib/constants.ts";
import {useState, useMemo} from "react";
import useItemStore from "../../stores/itemsStore.ts";

export const ItemList = () => {
    const items = useItemStore((state) => state.items);
    const [sortOption, setSortOption] = useState("default");
    //Will only run if items or sortBy changes. This is a memoized version of the sort function
    const sortedItems = useMemo(() => {
        return items.slice().sort((a, b) => {
            if (sortOption === "packed") {
                return Number(b.completed) - Number(a.completed);
            }
            return Number(a.completed) - Number(b.completed);
        });
    }, [items, sortOption]);

    return (
        <ul>
            {items.length > 0 ? (
                <section className="sorting">
                    <Select
                        onChange={(option) => setSortOption(option?.value || 'default')}
                        defaultValue={sortOptions[0]}
                        options={sortOptions}
                    />
                </section>
            ) : null}

            {sortedItems.map((item) => (
                <Item
                    key={crypto.randomUUID()}
                    title={item.title}
                    completed={item.completed}
                    id={item.id}
                />
            ))}
        </ul>
    );
};

const Item = ({ title, completed, id }: ItemProps) => {
    const toggleItem = useItemStore((state) => state.toggleItem);
    const destroyItem = useItemStore((state) => state.destroyItem);
    return (
        <li className="item">
            <label onClick={() => toggleItem(id)}>
                <input checked={completed} type="checkbox"/>
                {title}
            </label>
            <button onClick={() => destroyItem(id)}>❌</button>
        </li>
    );
};
