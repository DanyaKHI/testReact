import './TreeNode.css';
import {useState} from "react";

function TreeNodeItem({child, services}) {
    const [isOpen, setIsOpen] = useState(false);
    const TreeNodeOnCLick = () => {
        if (child.node === 1) {
            setIsOpen(!isOpen);
        }
    }
    return (
        <div className="menu__item">
            <span className={child.node === 0 ? null : "menu__title"}
                  onClick={TreeNodeOnCLick}>{child.name} ({child.price})</span>
            {(child.node === 1 && isOpen) && <TreeNode service={child} services={services}/>}
        </div>
    )
}

function TreeNode({service, services}) {
    const children = services.filter(s => s.head === service.id).sort((a, b) => a.sorthead - b.sorthead);
    return (
        <div className="menu">
            <div className="menu__list">
                {children.map(child => (
                    <TreeNodeItem key={child.id} child={child} services={services}></TreeNodeItem>
                ))}
            </div>
        </div>
    );
}

export default TreeNode;
