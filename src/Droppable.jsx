/*
    Modul Droppable ini digunakan sebagai component yang menampung elemen setelah di draggable,
    dalam hal ini div sebagai elemen yang menampung elemen setelah di draggable,
*/

import { useDroppable } from "@dnd-kit/core";
import PropTypes from "prop-types"

function Droppable({ id, children }) {
    // jika ingin mendefinisikan modul ini sebagai droppable, atau elemen yang menampung elemen setelah di draggable, maka harus menggunakan useDroppable
    // saya ambil isOver, setNodeRef
    // isOver, jika dibayangkan digunakan untuk mendeteksi, apakah di wilayah droppable, ada elemen draggable yang di geser, lalu masuk ke wilayah droppable, jika ada elemen draggable di atas elemen droppable maka isOver menjadi true, jika tidak ada elemen draggable di atas elemen droppable maka isOver menjadi false
    // setNodeRes, jika dibayangkan ini adalah penggunaan useRef, saya tidak terlalu tau tentang ini karena ini terjadi di belakang layar
    // id digunakan untuk identitas dari Droppable
    const {
        isOver,
        setNodeRef
    } = useDroppable({
        id: id
    });

    // ini adalah style yang dibutuhkan
    // jika dilihat ada operas ternary, kita ambil contoh di backgroundColor, jika ada elemen draggable di atas elemen droppable maka isOver menjadi true lalu backgroundColor valuenya green, jika tidak ada elemen draggable di atas elemen droppable maka isOver menjadi false lalu backgroundColor valuenya rgb(250, 250, 250), 
    const style = {
        backgroundColor: isOver ? 'green' : 'rgb(250, 250, 250)',
        border: '1px solid #555',
        borderRadius: '.3rem',
        width: '70vw',
        height: '30vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '1.5rem',
        fontWeight: 'bold',
        color: isOver ? 'white' : 'rgb(50, 50, 50)',
        letterSpacing: '.1rem',
    }

    return (
        <div className="droppable" ref={setNodeRef} style={style}>
            {children}
        </div>
    )
}

// ini adalah validasi properti dari Dropppable
// id: tipe data string, dan wajib diisi
// children: boleh berbeda tipe data, yang diperbolehkan string, dan elemen dan wajib diisi
Droppable.propTypes = {
    id: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element
    ]).isRequired
}

export default Droppable;