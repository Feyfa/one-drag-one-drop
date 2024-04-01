import { useState } from "react"
import { DndContext } from "@dnd-kit/core"

import Draggable from "./Draggable";
import Droppable from "./Droppable";

function App() {
    // buat useState dengan nama isDropped sebagai getter dan setIsDropped sebagai setter
    const [isDropped, setIsDropped] = useState(false);

    // buat desain draggableMarkup, dengan id "draggable"
    const draggable1Markup = (
        <Draggable id="draggable">
            Move Button
        </Draggable>
    )

    function handleDragEnd(event) {
        // disini kita harus mengecek, apakah elemen yang di draggable itu berada di atas elemen droppable yang id nya "droppable1", jika iya jalankan kode nya
        if(event.over && event.over.id === 'droppable1') {
            // ubah isi dari isDropped menjadi true
            setIsDropped(true);
        } 
        // tapi jika elemen yang di draggable itu berada di luar elemen droppable yang id nya "droppable1", maka jalankan kode ini
        else if(!event.over) {
            // ubah isi dari isDropped menjadi false
            setIsDropped(false);
        }
    }

    return (
        // Elemen Draggable dan Droppable harus di dalam elemen DndContext
        // buat event onDragEnd di DndContenxt, ini terjadi saat setelah melepaskan elemen yang di draggable
        <DndContext onDragEnd={handleDragEnd}>
            {/* operasi ternary ini berguna jika isDropped masih false, maka tampilkan draggable1Markup, tapi jika true maka ganti dengan elemen span */}
            {
                !isDropped ? 
                draggable1Markup : 
                <span>Drop Here</span>
            }

            {/* buat elemen Droppable dengan id "droppable1" */}
            <Droppable id="droppable1">
                {/* oprasi ternary ini berguna jika isDropped sudah true, maka tampilkan draggable1Markup, tapi jika masih false ganti dengan text 'Drop Here' */}
                {
                    isDropped ? 
                    draggable1Markup : 
                    'Drop Here'
                }
            </Droppable>
        </DndContext>
    )
}

export default App
