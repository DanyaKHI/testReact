import './TreeView.css';
import {useEffect, useState} from "react";
import TreeNode from "../TreeNode/TreeNode";

// const resp = {
//     "services": [{
//         "id": 1, "head": null, "name": "Проф.осмотр", "node": 0, "price": 100.0, "sorthead": 20
//     }, {
//         "id": 2, "head": null, "name": "Хирургия", "node": 1, "price": 0.0, "sorthead": 10
//     }, {
//         "id": 3, "head": 2, "name": "Удаление зубов", "node": 1, "price": 0.0, "sorthead": 10
//     }, {
//         "id": 4, "head": 3, "name": "Удаление зуба", "node": 0, "price": 800.0, "sorthead": 10
//     }, {
//         "id": 5, "head": 3, "name": "Удаление 8ого зуба", "node": 0, "price": 1000.0, "sorthead": 30
//     }, {
//         "id": 6, "head": 3, "name": "Удаление осколка зуба", "node": 0, "price": 2000.0, "sorthead": 20
//     }, {
//         "id": 7, "head": 2, "name": "Хирургические вмешательство", "node": 0, "price": 200.0, "sorthead": 10
//     }, {
//         "id": 8, "head": 2, "name": "Имплантация зубов", "node": 1, "price": 0.0, "sorthead": 20
//     }, {
//         "id": 9, "head": 8, "name": "Коронка", "node": 0, "price": 3000.0, "sorthead": 10
//     }, {
//         "id": 10, "head": 8, "name": "Слепок челюсти", "node": 0, "price": 500.0, "sorthead": 20
//     }]
// }

function TreeView() {
    const [services, setServices] = useState([]);
    useEffect(() => {
        // setServices(resp.services);
        fetch('url')
            .then(response => response.json())
            .then(data => setServices(data.services))
            .catch(error => console.log(error))
    }, [])
    return (<div>
        <TreeNode service={{id: null}} services={services}/>
    </div>);
}

export default TreeView;
