/*
    Modul Draggable ini digunakan sebagaim component yang bisa digeser,
    dalam hal ini button sebagai elemen yang bisa digeser
*/

import { useDraggable } from "@dnd-kit/core";
import PropTypes from "prop-types"

function Draggable({ id, children }) {
    // jika ingin mendefinisikan modul ini sebagai draggable, atau elemen yang bisa di geser, maka harus menggunakan useDraggable
    // saya ambil attributes, listeners, setNodeRef, transform
    // attributes, jika dibayangkan maka contohnya seperti ini <div data-costum-contoh="satu"></div>
    // listeners, jika dibayangkan maka contohnya seperti ini <div onMouseMove={} onMouseEnd={}></div>
    // setNodeRes, jika dibayangkan ini adalah penggunaan useRef, saya tidak terlalu tau tentang ini karena ini terjadi di belakang layar
    // transform, jika dibayangkan ini adalah value posisi x dan y, saat elemen digeser, lalu nilai x dan y akan digunakan di transform: translate3d(...)
    // id digunakan untuk identitas dari Draggable
    const {
        attributes,
        listeners,
        setNodeRef,
        transform 
    } = useDraggable({
        id: id
    });

    // ini adalah style utama
    const styleUtama = {
        padding: '.5rem 1rem',
        fontSize: '1rem',
        border: '1px solid #555',
        borderRadius: '.2rem',
        touchAction: 'none'
    }
    // jadi ketika ada suatu perpindahan elemen karena digeser, maka transform menjadi ada nilainya berupa objek
    // maka dari itu kita harus membuat kondisi, jika ada nilainya maka gunakan styleUtama dan style yang dibutuhkan
    // jika tidak ada nilainya, maka gunakan styleUtama saja 
    const style = transform ? {
        ...styleUtama,
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`
    } : styleUtama;

    return (
        <button ref={setNodeRef} {...attributes} {...listeners} style={style}>
            {children}
        </button>
    )
}

// ini adalah validasi properti dari Draggable
// id: tipe data string, dan wajib diisi
// children: tipe data string dan wajib diisi
Draggable.propTypes = {
    id: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired
}

export default Draggable;